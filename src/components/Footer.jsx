import { PO_CONFIG } from '../data/poConfig';

/**
 * Komponen Footer GODHOGAN.
 * Menampilkan identitas UMKM lokal, informasi pemenuhan pesanan, dan catatan pemesanan
 * tanpa klaim sertifikasi, statistik fiktif, atau testimoni palsu.
 */
const Footer = () => {
  return (
    <footer className="mt-16 border-t border-stone-200 bg-white py-10 px-4 sm:px-6 lg:px-8 text-stone-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">🍲</span>
            <span className="text-lg font-black text-amber-950 tracking-tight">
              {PO_CONFIG.brandName}
            </span>
          </div>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
            Penyedia aneka camilan rebusan tradisional hangat porsi siap santap. Dibuat alami dari bahan pilihan dan diantar langsung ke pelanggan via sistem Pre-Order.
          </p>
        </div>

        <div className="text-xs text-stone-500 space-y-1">
          <p>
            <span className="font-semibold text-stone-700">Metode Pengiriman:</span> {PO_CONFIG.fulfillment.description}
          </p>
          <p>
            <span className="font-semibold text-stone-700">Sistem Pemesanan:</span> Pre-Order &amp; Stok Terbatas
          </p>
          <p className="text-[11px] text-stone-500 pt-2 border-t border-stone-100">
            &copy; {new Date().getFullYear()} {PO_CONFIG.brandName}. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
