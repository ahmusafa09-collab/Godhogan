import { PO_CONFIG } from '../data/poConfig';

/**
 * Komponen Tentang GODHOGAN.
 * Menjelaskan konsep produk makanan tradisional berbahan umbi, sistem Pre-Order,
 * dan prinsip sajian fresh setelah pesanan masuk secara jujur tanpa klaim palsu.
 */
const AboutSection = () => {
  const brandName = PO_CONFIG.brandName || 'GODHOGAN';

  const pillars = [
    {
      title: 'Camilan Tradisional Berbahan Umbi',
      description: 'Menyajikan aneka hasil bumi lokal seperti singkong, ubi madu, ubi ungu, talas, kentang, dan pisang olahan dalam sajian rebusan yang bersahaja dan alami.',
      icon: '🌱',
    },
    {
      title: 'Sistem Pre-Order Terjadwal',
      description: 'Pemesanan dibuka secara berkala agar ketersediaan bahan baku pilihan terjamin dan proses pengolahan dapat terjadwal dengan rapi.',
      icon: '📅',
    },
    {
      title: 'Disiapkan Fresh Setelah Dipesan',
      description: 'Setiap porsi baru dimasak atau dikukus hangat setelah pesanan diterima, menjaga kelembutan tekstur dan rasa alami tanpa pengawet.',
      icon: '♨️',
    },
  ];

  return (
    <section
      id="tentang"
      aria-labelledby="about-godhogan-title"
      className="mb-12 sm:mb-16 rounded-3xl bg-amber-950 text-amber-50 p-6 sm:p-10 lg:p-12 shadow-sm border border-amber-900"
    >
      <div className="max-w-3xl mb-8 sm:mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-900/60 px-3.5 py-1 rounded-full inline-block mb-3 border border-amber-700/50">
          Mengenal {brandName}
        </span>
        <h2
          id="about-godhogan-title"
          className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight"
        >
          Kehangatan Olahan Umbi Tradisional untuk Setiap Momen
        </h2>
        <p className="mt-3 text-sm sm:text-base text-amber-100/80 leading-relaxed">
          {brandName} lahir dari apresiasi terhadap camilan rebusan tradisional Indonesia yang sederhana, sehat, dan menenangkan. Kami berdedikasi menyajikan umbi-umbian pilihan dalam bentuk porsi siap santap untuk keluarga di rumah.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-2xl bg-amber-900/40 border border-amber-800/60 p-5 sm:p-6 backdrop-blur-xs flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl block mb-3" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
