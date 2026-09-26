/**
 * DATA PRODUK GODHOGAN
 * 
 * Konsep Bisnis:
 * - 1 produk = 1 porsi siap makan.
 * - Mode penjualan mendukung: Pre-Order ('pre-order') dan Stok Terbatas ('stock').
 *   Sisa produksi setelah PO dapat dialokasikan langsung ke stok terbatas.
 * - Harga telah disesuaikan berdasarkan analisis HPP & Riset Pasar Purwokerto.
 * - Pengiriman diantar langsung kepada pelanggan.
 */

export const PRODUCTS = [
  {
    id: 'singkong',
    name: 'Singkong',
    description: 'Singkong rebus tradisional yang pulen, merekah, dan gurih alami.',
    price: 8000,
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'ubi-cilembu',
    name: 'Ubi Cilembu',
    description: 'Ubi Cilembu rebus/kukus dengan cita rasa manis madu alami yang legit.',
    price: 12000,
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'ubi-ungu',
    name: 'Ubi Ungu',
    description: 'Ubi ungu rebus/kukus tradisional yang lembut, manis lembut, dan kaya antioksidan.',
    price: 10000,
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'kentang',
    name: 'Kentang',
    description: 'Kentang rebus pilihan yang pulen dan gurih alami, cocok untuk camilan sehat.',
    price: 12000,
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'pisang',
    name: 'Pisang',
    description: 'Pisang rebus/kukus hangat tradisional dengan rasa manis alami yang legit.',
    price: 12000,
    image: null,
    category: 'buah',
    portion: '1 porsi siap makan',
    available: true,
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'talas',
    name: 'Talas',
    description: 'Talas rebus tradisional dengan tekstur empuk, pulen, dan gurih khas pedesaan.',
    price: 10000,
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
];