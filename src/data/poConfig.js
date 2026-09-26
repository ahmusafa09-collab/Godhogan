// src/data/poConfig.js
import { WHATSAPP_NUMBER, PO_LEAD_TIME_HOURS } from '../config/constants';

/**
 * Pre‑order configuration for GODHOGAN.
 * Centralised constants ensure the WhatsApp number and lead‑time are defined in one place.
 */
export const PO_CONFIG = {
  brandName: 'GODHOGAN',
  isOpen: true,
  leadTimeHours: PO_LEAD_TIME_HOURS,
  schedule: {
    orderCutoff: '', // e.g., "Jumat, 18:00 WIB"
    productionDate: '', // e.g., "Sabtu, 21 September 2026"
    deliveryDate: ''   // e.g., "Sabtu, 08:00 - 11:00 WIB"
  },
  fulfillment: {
    method: 'delivery', // default, UI can switch to 'pickup'
    description: 'Produk diantar langsung ke alamat pelanggan.',
  },
  contact: {
    whatsappNumber: WHATSAPP_NUMBER,
  },
  // Fields used in the checkout form. deliveryAddress is conditionally required based on fulfillment method.
  checkoutFields: [
    { key: 'customerName', label: 'Nama Pemesan', required: true },
    { key: 'customerPhone', label: 'Nomor WhatsApp / HP', required: true },
    { key: 'fulfillmentMethod', label: 'Metode Pengantaran', required: true },
    { key: 'deliveryAddress', label: 'Alamat Pengiriman', required: false },
    { key: 'poDate', label: 'Tanggal PO', required: true },
    { key: 'notes', label: 'Catatan Pesanan', required: false },
  ],
};
