/**
 * Mengubah angka menjadi format Rupiah Indonesia.
 * Contoh: 10000 -> "Rp10.000"
 * 
 * @param {number|null|undefined} amount - Nilai angka harga produk
 * @returns {string} String berformat Rupiah atau teks penjelas jika belum ada harga
 */
export const formatRupiah = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return 'Harga belum ditentukan';
  }

  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace(/\s+/g, ''); // Menghasilkan format standar "Rp10.000"
};

/**
 * Alias formatCurrency agar sesuai dengan konvensi penamaan komponen e-commerce.
 */
export const formatCurrency = formatRupiah;
