import { formatCurrency } from './formatCurrency';

/**
 * Build a WhatsApp message for a GODHOGAN PO.
 * Handles null prices, optional notes, and includes PO date and fulfillment method.
 */
export const buildWhatsAppMessage = ({ items, customer, poConfig }) => {
  const brand = poConfig?.brandName || 'GODHOGAN';
  const totalPortions = items.reduce((sum, i) => sum + i.quantity, 0);

  const hasAllPrices = items.every(
    (i) => i.product.price != null && !isNaN(i.product.price)
  );

  const totalPrice = hasAllPrices
    ? items.reduce((s, i) => s + i.product.price * i.quantity, 0)
    : null;

  const lines = [
    `Halo *${brand}*, saya ingin melakukan PO:`,
    '',
    // Product list
    ...items.map((item, idx) => `${idx + 1}. ${item.product.name}  ${item.quantity}`),
    '',
    `Nama: ${customer.customerName || '-'}`,
    `WhatsApp / HP: ${customer.customerPhone || '-'}`,
    `Metode: ${customer.fulfillmentMethod || '-'}`,
    ...(customer.fulfillmentMethod === 'delivery'
      ? [`Alamat: ${customer.deliveryAddress || '-'}`]
      : []),
    `Tanggal PO: ${customer.poDate || '-'}`,
    `Catatan: ${customer.notes?.trim() ? customer.notes.trim() : '-'}`,
    '',
    `Total Porsi: *${totalPortions} porsi*`,
    hasAllPrices && totalPrice > 0
      ? `Estimasi Total: *${formatCurrency(totalPrice)}*`
      : 'Harga: _Harga belum ditentukan_',
    '',
    `Metode Pemenuhan: *${poConfig?.fulfillment?.description ||
      'Diantar langsung ke alamat pelanggan.'}*`,
    '',
    'Mohon konfirmasi pesanan dan ketersediaannya. Terima kasih!',
  ];

  // Filter out any falsey entries (e.g., when price not available)
  return lines.filter(Boolean).join('\n');
};

/**
 * Create a WhatsApp deep‑link URL.
 */
export const createWhatsAppUrl = ({ whatsappNumber, message }) => {
  const cleanNumber = (whatsappNumber || '').replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  return cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${encodedMessage}`
    : `https://wa.me/?text=${encodedMessage}`;
};


