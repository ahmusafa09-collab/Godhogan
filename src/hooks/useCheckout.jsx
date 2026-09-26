import { useCallback, useState } from 'react';
import {
  buildWhatsAppMessage,
  createWhatsAppUrl,
} from '../utils/whatsapp';
import { PO_CONFIG } from '../data/poConfig';

const EMPTY_FORM = {
  customerName: '',
  customerPhone: '',
  fulfillmentMethod: '',
  deliveryAddress: '',
  poDate: '',
  notes: '',
};

const getLocalDateAfterHours = (hours) => {
  const date = new Date();
  date.setHours(date.getHours() + hours);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default function useCheckout(orderItems) {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [error, setError] = useState('');

  const totalPortions = orderItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const hasAllPrices =
    orderItems.length > 0 &&
    orderItems.every(
      (item) =>
        item.product?.price !== null &&
        item.product?.price !== undefined &&
        Number.isFinite(item.product.price)
    );

  const totalPrice = hasAllPrices
    ? orderItems.reduce(
        (sum, item) =>
          sum + item.product.price * item.quantity,
        0
      )
    : null;

  const setField = useCallback((field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setError('');
  }, []);

  const validate = () => {
    const requiredFields = PO_CONFIG.checkoutFields ?? [];

    for (const field of requiredFields) {
      if (
        field.key === 'deliveryAddress' &&
        formData.fulfillmentMethod !== 'delivery'
      ) {
        continue;
      }

      const value = formData[field.key];

      if (
        !value ||
        (typeof value === 'string' && value.trim() === '')
      ) {
        setError(`Kolom "${field.label}" wajib diisi.`);
        return false;
      }
    }

    if (orderItems.length === 0) {
      setError(
        'Pilih minimal satu porsi menu sebelum mengirim pesanan.'
      );
      return false;
    }

    const leadTimeHours = Number.isFinite(
      PO_CONFIG.leadTimeHours
    )
      ? PO_CONFIG.leadTimeHours
      : 24;

    const minimumPoDate = getLocalDateAfterHours(
      leadTimeHours
    );

    if (formData.poDate < minimumPoDate) {
      setError(
        `Tanggal PO harus minimal ${leadTimeHours} jam sebelumnya.`
      );
      return false;
    }

    return true;
  };

  const submit = () => {
  if (!validate()) {
    return null;
  }

  try {
    const message = buildWhatsAppMessage({
      items: orderItems,
      customer: formData,
      poConfig: PO_CONFIG,
    });

    const url = createWhatsAppUrl({
      whatsappNumber: PO_CONFIG.contact?.whatsappNumber,
      message,
    });

    return url;
  } catch (submitError) {
    console.error('Checkout submission failed:', submitError);

    setError(
      'Pesanan tidak dapat diproses. Silakan coba lagi.'
    );

    return null;
  }
};

  const reset = useCallback(() => {
    setFormData(EMPTY_FORM);
    setError('');
  }, []);

  return {
    formData,
    setField,
    error,
    totalPortions,
    totalPrice,
    submit,
    reset,
  };
}