/**
 * DATA PRODUK GODHOGAN
 * 
 * Konsep Bisnis:
 * - 1 produk = 1 porsi siap makan.
 * - Mode penjualan mendukung: Pre-Order ('pre-order') dan Stok Terbatas ('stock').
 *   Sisa produksi setelah PO dapat dialokasikan langsung ke stok terbatas.
 * - Harga belum ditentukan secara final oleh pemilik bisnis (tetap null).
 * - Pengiriman diantar langsung kepada pelanggan.
 */

export const PRODUCTS = [
  {
    id: 'singkong',
    name: 'Singkong',
    description: 'Singkong rebus tradisional yang pulen, merekah, dan gurih alami.',
    // MASUKKAN HARGA PRODUK DI SINI (dalam angka tanpa titik/koma, contoh: 15000)
    price: null,
    // MASUKKAN URL ATAU PATH GAMBAR DI SINI (contoh: '/images/singkong.jpg' atau null jika belum ada)
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    // MASUKKAN KUOTA STOK DI SINI (stok PO atau stok sisa produksi siap kirim)
    stock: 0,
    // Mode penjualan yang didukung: dapat berupa pre-order, stock langsung, atau keduanya
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'ubi-cilembu',
    name: 'Ubi Cilembu',
    description: 'Ubi Cilembu rebus/kukus dengan cita rasa manis madu alami yang legit.',
    // MASUKKAN HARGA PRODUK DI SINI (dalam angka tanpa titik/koma, contoh: 18000)
    price: null,
    // MASUKKAN URL ATAU PATH GAMBAR DI SINI (contoh: '/images/ubi-cilembu.jpg' atau null jika belum ada)
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    // MASUKKAN KUOTA STOK DI SINI (stok PO atau stok sisa produksi siap kirim)
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'ubi-ungu',
    name: 'Ubi Ungu',
    description: 'Ubi ungu rebus/kukus tradisional yang lembut, manis lembut, dan kaya antioksidan.',
    // MASUKKAN HARGA PRODUK DI SINI (dalam angka tanpa titik/koma, contoh: 16000)
    price: null,
    // MASUKKAN URL ATAU PATH GAMBAR DI SINI (contoh: '/images/ubi-ungu.jpg' atau null jika belum ada)
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    // MASUKKAN KUOTA STOK DI SINI (stok PO atau stok sisa produksi siap kirim)
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'kentang',
    name: 'Kentang',
    description: 'Kentang rebus pilihan yang pulen dan gurih alami, cocok untuk camilan sehat.',
    // MASUKKAN HARGA PRODUK DI SINI (dalam angka tanpa titik/koma, contoh: 15000)
    price: null,
    // MASUKKAN URL ATAU PATH GAMBAR DI SINI (contoh: '/images/kentang.jpg' atau null jika belum ada)
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    // MASUKKAN KUOTA STOK DI SINI (stok PO atau stok sisa produksi siap kirim)
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'pisang',
    name: 'Pisang',
    description: 'Pisang rebus/kukus hangat tradisional dengan rasa manis alami yang legit.',
    // MASUKKAN HARGA PRODUK DI SINI (dalam angka tanpa titik/koma, contoh: 14000)
    price: null,
    // MASUKKAN URL ATAU PATH GAMBAR DI SINI (contoh: '/images/pisang.jpg' atau null jika belum ada)
    image: null,
    category: 'buah',
    portion: '1 porsi siap makan',
    available: true,
    // MASUKKAN KUOTA STOK DI SINI (stok PO atau stok sisa produksi siap kirim)
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
  {
    id: 'talas',
    name: 'Talas',
    description: 'Talas rebus tradisional dengan tekstur empuk, pulen, dan gurih khas pedesaan.',
    // MASUKKAN HARGA PRODUK DI SINI (dalam angka tanpa titik/koma, contoh: 17000)
    price: null,
    // MASUKKAN URL ATAU PATH GAMBAR DI SINI (contoh: '/images/talas.jpg' atau null jika belum ada)
    image: null,
    category: 'umbi',
    portion: '1 porsi siap makan',
    available: true,
    // MASUKKAN KUOTA STOK DI SINI (stok PO atau stok sisa produksi siap kirim)
    stock: 0,
    sellingModes: ['pre-order', 'stock'],
  },
];
