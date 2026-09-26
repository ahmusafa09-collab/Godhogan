import { formatCurrency } from '../utils/formatCurrency';
import Badge from './ui/Badge';
import ProductImagePlaceholder from './ProductImagePlaceholder';

/**
 * Komponen Kartu Produk GODHOGAN dengan hirarki visual prioritas:
 * 1. Product Photography
 * 2. Product Name
 * 3. Price
 * 4. PO Availability
 * 5. Clear CTA
 * 
 * @param {Object} props
 * @param {Object} props.product - Data produk
 * @param {number} [props.quantity=0] - Jumlah porsi produk yang dipilih
 * @param {Function} [props.onQuantityChange] - Callback saat jumlah porsi diubah
 */
const ProductCard = ({ product, quantity = 0, onQuantityChange }) => {
  if (!product) return null;

  const isAvailable = Boolean(product.available);
  const formattedPrice = formatCurrency(product.price);
  const isPriceSet = product.price !== null && product.price !== undefined && !isNaN(product.price);

  const handleIncrement = () => {
    if (!isAvailable || !onQuantityChange) return;
    onQuantityChange(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (!onQuantityChange || quantity <= 0) return;
    onQuantityChange(product.id, quantity - 1);
  };

  return (
    <article className="group flex flex-col h-full rounded-2xl border border-stone-200/90 bg-white overflow-hidden shadow-xs hover:border-amber-300/80 hover:shadow-md transition-all duration-200">
      {/* 1. VISUAL PRIORITY: PRODUCT PHOTOGRAPHY */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-amber-50 border-b border-stone-100">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-102 transition-transform duration-300"
          />
        ) : (
          <ProductImagePlaceholder productId={product.id} productName={product.name} />
        )}

        {/* 4. VISUAL PRIORITY: PO AVAILABILITY BADGE */}
        <div className="absolute top-3 right-3 z-10">
          <Badge variant={isAvailable ? 'success' : 'danger'} size="md">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isAvailable ? 'bg-emerald-600' : 'bg-rose-600'
              }`}
              aria-hidden="true"
            />
            {isAvailable ? 'Tersedia PO' : 'Habis'}
          </Badge>
        </div>

        {/* Badge Porsi */}
        <div className="absolute bottom-3 left-3 z-10">
          <Badge variant="warm" size="sm" className="bg-white/95 backdrop-blur-xs shadow-2xs">
            {product.portion || '1 porsi siap makan'}
          </Badge>
        </div>
      </div>

      {/* Konten Detail Kartu */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {/* Kategori & Mode Penjualan */}
        <div className="mb-2 flex items-center justify-between text-xs text-stone-500">
          <span className="capitalize font-medium text-stone-500">
            {product.category === 'umbi' ? 'Rebusan Umbi' : 'Rebusan Buah'}
          </span>
          <span className="text-[11px] text-amber-900/90 bg-amber-50 px-2 py-0.5 rounded font-medium border border-amber-200/60">
            PO &amp; Ready Stok
          </span>
        </div>

        {/* 2. VISUAL PRIORITY: PRODUCT NAME */}
        <h3 className="text-lg sm:text-xl font-bold text-stone-900 tracking-tight leading-snug group-hover:text-amber-950 transition-colors">
          {product.name}
        </h3>

        {/* Deskripsi Produk */}
        <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* 3. VISUAL PRIORITY: PRICE */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-baseline justify-between gap-2">
          <div>
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600">
              Harga per Porsi
            </span>
            <div className="mt-0.5">
              {isPriceSet ? (
                <span className="text-lg font-extrabold text-amber-950 tracking-tight">
                  {formattedPrice}
                </span>
              ) : (
                <span className="text-xs font-semibold text-stone-600 italic bg-stone-100 px-2 py-1 rounded">
                  {formattedPrice}
                </span>
              )}
            </div>
          </div>

          <div className="text-right">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-600">
              Kuota PO
            </span>
            <span className="text-xs font-semibold text-stone-800">
              {product.stock > 0 ? `${product.stock} porsi` : 'Stok terjadwal'}
            </span>
          </div>
        </div>

        {/* 5. VISUAL PRIORITY: CLEAR CTA (BUTTON / QUANTITY SELECTOR) */}
        <div className="mt-4 pt-2">
          {!isAvailable ? (
            <button
              type="button"
              disabled
              className="w-full min-h-[44px] rounded-xl bg-stone-100 py-2.5 px-4 text-xs font-semibold text-stone-600 cursor-not-allowed text-center border border-stone-200"
            >
              Menu Belum Tersedia
            </button>
          ) : quantity === 0 ? (
            <button
              type="button"
              onClick={handleIncrement}
              aria-label={`Pilih menu ${product.name}`}
              className="w-full min-h-[44px] rounded-xl bg-amber-950 hover:bg-amber-900 text-amber-50 font-bold text-xs sm:text-sm tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2"
            >
              <span className="text-base font-normal leading-none" aria-hidden="true">+</span>
              <span>Pilih Menu Ini</span>
            </button>
          ) : (
            <div
              className="flex items-center justify-between min-h-[48px] rounded-xl bg-amber-50/90 border border-amber-300/80 p-1 shadow-2xs"
              role="group"
              aria-label={`Jumlah porsi ${product.name}`}
            >
              <button
                type="button"
                onClick={handleDecrement}
                aria-label={`Kurangi porsi ${product.name}`}
                className="h-10 w-11 min-h-[40px] min-w-[44px] flex items-center justify-center rounded-lg bg-white border border-amber-200 text-amber-950 font-extrabold text-base hover:bg-amber-100 transition cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                –
              </button>
              <div className="text-center px-2 flex-1">
                <span className="text-sm font-extrabold text-amber-950">
                  {quantity} porsi
                </span>
              </div>
              <button
                type="button"
                onClick={handleIncrement}
                aria-label={`Tambah porsi ${product.name}`}
                className="h-10 w-11 min-h-[40px] min-w-[44px] flex items-center justify-center rounded-lg bg-amber-950 text-amber-50 font-extrabold text-base hover:bg-amber-900 transition cursor-pointer active:scale-95 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
