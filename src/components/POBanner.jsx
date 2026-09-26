import { PO_CONFIG } from '../data/poConfig';
import Badge from './ui/Badge';

/**
 * Komponen PO Status Section GODHOGAN.
 * Sumber kebenaran tunggal: src/data/poConfig.js.
 * 
 * Menampilkan 4 informasi utama PO:
 * 1. Status PO saat ini (isOpen)
 * 2. Informasi penutupan PO (schedule.orderCutoff)
 * 3. Tanggal produksi (schedule.productionDate)
 * 4. Informasi pickup / delivery (schedule.deliveryDate & fulfillment.description)
 */
const POBanner = () => {
  const { isOpen, schedule, fulfillment } = PO_CONFIG;

  const orderCutoffText = schedule?.orderCutoff?.trim()
    ? schedule.orderCutoff
    : 'Akan diumumkan pada jadwal PO terdekat';

  const productionDateText = schedule?.productionDate?.trim()
    ? schedule.productionDate
    : 'Sesuai jadwal masak batch PO';

  const deliveryInfoText = schedule?.deliveryDate?.trim()
    ? `${schedule.deliveryDate} (${fulfillment?.description || 'Diantar langsung ke alamat'})`
    : fulfillment?.description || 'Diantar langsung ke alamat pelanggan';

  return (
    <section
      id="po-status"
      aria-labelledby="po-status-title"
      className="mb-10 sm:mb-14 rounded-3xl border border-amber-200/90 bg-amber-50/70 p-5 sm:p-7 shadow-xs"
    >
      {/* Header Bagian Status PO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-200/70 pb-5">
        <div className="flex items-start sm:items-center gap-3.5">
          <div
            className="h-11 w-11 rounded-2xl bg-amber-900/10 text-amber-950 flex items-center justify-center text-xl font-bold shrink-0"
            aria-hidden="true"
          >
            📅
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block mb-0.5">
              Informasi Operasional
            </span>
            <h2 id="po-status-title" className="text-lg sm:text-xl font-black text-amber-950 tracking-tight">
              Status &amp; Jadwal Pre-Order (PO)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              {isOpen
                ? 'Pemesanan sedang dibuka. Sajian direbus fresh sesuai jadwal gelombang PO.'
                : 'Pemesanan sementara ditutup untuk proses produksi dan pengantaran.'}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <Badge variant={isOpen ? 'success' : 'danger'} size="md">
            <span
              className={`h-2 w-2 rounded-full ${
                isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-rose-600'
              }`}
              aria-hidden="true"
            />
            <span className="font-bold">
              {isOpen ? 'PO Sedang Dibuka' : 'PO Sedang Ditutup'}
            </span>
          </Badge>
        </div>
      </div>

      {/* Grid 4 Informasi Wajib PO */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {/* 1. Status PO Saat Ini */}
        <div className="rounded-2xl bg-white/90 p-4 border border-amber-200/60 shadow-2xs flex flex-col justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
              1. Status PO
            </span>
            <span className="text-sm font-extrabold text-stone-900 block">
              {isOpen ? 'Aktif Menerima Pesanan' : 'Ditutup Sementara'}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-stone-500">
            {isOpen ? 'Slot pemesanan tersedia' : 'Nantikan gelombang berikutnya'}
          </p>
        </div>

        {/* 2. Informasi Penutupan PO (Cutoff) */}
        <div className="rounded-2xl bg-white/90 p-4 border border-amber-200/60 shadow-2xs flex flex-col justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
              2. Batas Penutupan PO
            </span>
            <span className="text-sm font-extrabold text-stone-900 block">
              {orderCutoffText}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-stone-500">
            Batas akhir kirim konfirmasi pesanan
          </p>
        </div>

        {/* 3. Tanggal Produksi */}
        <div className="rounded-2xl bg-white/90 p-4 border border-amber-200/60 shadow-2xs flex flex-col justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
              3. Tanggal Produksi
            </span>
            <span className="text-sm font-extrabold text-stone-900 block">
              {productionDateText}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-stone-500">
            Waktu pengolahan rebusan fresh
          </p>
        </div>

        {/* 4. Informasi Pickup / Delivery */}
        <div className="rounded-2xl bg-white/90 p-4 border border-amber-200/60 shadow-2xs flex flex-col justify-between">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-stone-500 mb-1">
              4. Pengantaran (Delivery)
            </span>
            <span className="text-sm font-extrabold text-stone-900 block">
              {deliveryInfoText}
            </span>
          </div>
          <p className="mt-2 text-[11px] text-stone-500">
            Diantar langsung ke alamat tujuan
          </p>
        </div>
      </div>
    </section>
  );
};

export default POBanner;
