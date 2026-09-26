import heroImage from '../assets/hero.png';

/**
 * Komponen Hero Section GODHOGAN.
 * Menampilkan headline utama, penjelasan sistem Pre-Order,
 * serta tombol aksi utama "Pesan Sekarang" dan sekunder "Lihat Menu".
 */
const Hero = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-labelledby="hero-headline"
      className="relative overflow-hidden rounded-3xl bg-linear-to-br from-amber-950 via-amber-900 to-stone-900 text-white p-6 sm:p-10 lg:p-12 mb-8 sm:mb-12 shadow-md border border-amber-900/50"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Kolom Teks & Aksi */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-3.5 py-1 text-xs font-bold text-amber-200 border border-amber-400/30 backdrop-blur-xs">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true" />
            <span>Sistem Pre-Order • Rebusan Hangat</span>
          </div>

          {/* Headline Utama Wajib */}
          <h1
            id="hero-headline"
            className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight sm:leading-tight"
          >
            Umbi sederhana, dibuat fresh setelah dipesan.
          </h1>

          {/* Supporting Text Wajib */}
          <p className="text-sm sm:text-base lg:text-lg text-amber-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            GODHOGAN menyajikan aneka camilan rebusan tradisional berbahan umbi alami dalam porsi siap makan. Melalui sistem Pre-Order terjadwal, setiap porsi baru dimasak hangat setelah pesanan masuk dan diantar langsung ke rumah Anda.
          </p>

          {/* Tombol CTA Wajib: Primary "Pesan Sekarang" & Secondary "Lihat Menu" */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
            <button
              type="button"
              onClick={scrollToMenu}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-amber-950 font-black text-sm tracking-wide transition cursor-pointer shadow-lg hover:shadow-amber-400/20 flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-amber-950"
            >
              <span>Pesan Sekarang</span>
              <span className="text-base font-bold" aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              onClick={scrollToMenu}
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white font-bold text-sm tracking-wide transition cursor-pointer border border-white/20 flex items-center justify-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-amber-950"
            >
              <span>Lihat Menu</span>
              <span className="text-xs" aria-hidden="true">↓</span>
            </button>
          </div>

          {/* Catatan Sederhana Tanpa Klaim Berlebihan */}
          <p className="text-[11px] sm:text-xs text-amber-200/70 pt-1">
            * Porsi siap makan untuk camilan keluarga dan teman minum teh atau kopi.
          </p>
        </div>

        {/* Kolom Visual Fotografi Produk */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-amber-800/60 bg-amber-950/50 shadow-inner group">
            <img
              src={heroImage}
              alt="Sajian aneka camilan rebusan umbi tradisional GODHOGAN"
              className="w-full h-auto max-h-72 sm:max-h-80 object-cover object-center group-hover:scale-102 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-t from-amber-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-black/50 backdrop-blur-xs text-[11px] font-medium text-amber-200 border border-white/10">
                Porsi Siap Makan • Alami &amp; Hangat
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
