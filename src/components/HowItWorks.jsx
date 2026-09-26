/**
 * Komponen Alur Pemesanan (How It Works) GODHOGAN.
 * Menampilkan 4 langkah sederhana alur Pre-Order dalam bahasa Indonesia
 * yang mudah dimengerti pengguna tanpa klaim yang belum ditentukan.
 */
const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Pilih Menu',
      description: 'Pilih varian rebusan umbi tradisional yang Anda sukai dari daftar menu yang tersedia.',
      icon: '🍠',
    },
    {
      number: '2',
      title: 'Pilih Jumlah',
      description: 'Tentukan jumlah porsi siap santap yang ingin Anda pesan (1 produk = 1 porsi).',
      icon: '🔢',
    },
    {
      number: '3',
      title: 'Isi Data Pesanan',
      description: 'Lengkapi identitas pemesan dan alamat lengkap untuk pengantaran langsung ke rumah Anda.',
      icon: '📋',
    },
    {
      number: '4',
      title: 'Konfirmasi / Kirim Pesanan',
      description: 'Kirim rincian pesanan via WhatsApp untuk konfirmasi dan proses masak gelombang PO.',
      icon: '📲',
    },
  ];

  return (
    <section
      id="cara-pesan"
      aria-labelledby="how-it-works-title"
      className="mb-12 sm:mb-16 pt-2"
    >
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-3.5 py-1 rounded-full inline-block mb-2">
          Alur Pemesanan
        </span>
        <h2
          id="how-it-works-title"
          className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight"
        >
          Cara Pesan di GODHOGAN
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
          Pemesanan sistem Pre-Order mudah dan praktis hanya dalam 4 langkah:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative rounded-2xl border border-stone-200/90 bg-white p-5 sm:p-6 shadow-xs flex flex-col justify-between hover:border-amber-300 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="h-9 w-9 rounded-xl bg-amber-950 text-amber-100 text-sm font-black flex items-center justify-center shadow-2xs">
                  {step.number}
                </span>
                <span className="text-2xl" aria-hidden="true">
                  {step.icon}
                </span>
              </div>

              <h3 className="text-base font-bold text-stone-900 mb-1.5 tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] font-semibold text-amber-900 flex items-center gap-1">
              <span>Langkah {step.number} dari 4</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
