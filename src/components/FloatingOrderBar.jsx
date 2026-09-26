/**
 * Komponen FloatingOrderBar.
 * Desain mobile-first untuk memudahkan akses pemesanan bagi pengguna smartphone Android.
 * Menggunakan tombol besar yang mudah ditekan satu jempol (thumb-zone ergonomic).
 * 
 * @param {Object} props
 * @param {number} props.totalPortions - Total porsi yang telah dipilih
 * @param {Function} props.onOpenCheckout - Handler untuk membuka dialog pemesanan
 */
const FloatingOrderBar = ({ totalPortions, onOpenCheckout }) => {
  if (!totalPortions || totalPortions <= 0) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-linear-to-t from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent pointer-events-none"
      style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' }}
    >
      <div className="max-w-xl mx-auto pointer-events-auto rounded-2xl bg-amber-950 text-white p-3 sm:p-3.5 shadow-lg border border-amber-900/80 flex items-center justify-between gap-3">
        {/* Info Ringkas Porsi */}
        <div className="flex items-center gap-3 pl-1">
          <div className="h-10 w-10 rounded-xl bg-amber-900/80 flex items-center justify-center text-xl shrink-0" aria-hidden="true">
            🍲
          </div>
          <div>
            <span className="block text-[11px] font-medium text-amber-300 leading-tight">
              Porsi Dipilih
            </span>
            <span className="block text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
              {totalPortions} Porsi Rebusan
            </span>
          </div>
        </div>

        {/* Tombol Aksi Utama (Thumb-Friendly CTA) */}
        <button
          type="button"
          onClick={onOpenCheckout}
          aria-label={`Lanjutkan pemesanan untuk ${totalPortions} porsi`}
          className="min-h-[46px] rounded-xl bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-amber-950 font-extrabold px-4 sm:px-5 text-xs sm:text-sm tracking-wide transition cursor-pointer flex items-center gap-2 shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-950"
        >
          <span>Lanjut Pesan</span>
          <span className="text-base leading-none" aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
};

export default FloatingOrderBar;
