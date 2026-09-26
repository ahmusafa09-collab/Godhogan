/**
 * Komponen Final CTA Section GODHOGAN.
 * Terletak di bagian bawah halaman sebelum footer,
 * mengarahkan pengunjung kembali ke katalog menu dengan tombol aksi "Pesan Sekarang".
 */
const FinalCTA = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-labelledby="final-cta-heading"
      className="mb-12 sm:mb-16 rounded-3xl bg-linear-to-r from-amber-100 via-amber-50 to-orange-100 border border-amber-300/80 p-6 sm:p-10 text-center shadow-xs"
    >
      <div className="max-w-2xl mx-auto space-y-3 sm:space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/70 px-3.5 py-1 rounded-full inline-block">
          Pre-Order Camilan Sehat
        </span>

        <h2
          id="final-cta-heading"
          className="text-2xl sm:text-3xl font-black text-amber-950 tracking-tight leading-tight"
        >
          Siap Menikmati Rebusan Tradisional Hangat?
        </h2>

        <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto leading-relaxed">
          Pilih varian umbi favorit Anda hari ini dan amankan porsi untuk jadwal pengantaran Pre-Order berikutnya.
        </p>

        <div className="pt-2">
          <button
            type="button"
            onClick={scrollToMenu}
            className="min-h-[48px] px-8 py-3 rounded-2xl bg-amber-950 hover:bg-amber-900 active:scale-[0.98] text-amber-50 font-extrabold text-sm tracking-wide transition cursor-pointer shadow-md hover:shadow-lg inline-flex items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2"
          >
            <span>Pesan Sekarang</span>
            <span className="text-base" aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
