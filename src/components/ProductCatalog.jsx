import { PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';

/**
 * Komponen katalog produk GODHOGAN.
 * Bertugas mengelola daftar produk dan meneruskan status kuantitas porsi ke ProductCard.
 * 
 * Layout responsif:
 * - Mobile: 1 kolom (grid-cols-1)
 * - Tablet: 2 kolom (sm:grid-cols-2)
 * - Desktop: 3 kolom (lg:grid-cols-3)
 * 
 * @param {Object} props
 * @param {Array} [props.products] - Opsional: daftar produk (default: PRODUCTS)
 * @param {Object} [props.orderQuantities={}] - Mapping id produk ke kuantitas porsi terpilih { [id]: number }
 * @param {Function} [props.onQuantityChange] - Callback handler perubahan porsi
 */
const ProductCatalog = ({
  products = PRODUCTS,
  orderQuantities = {},
  onQuantityChange,
}) => {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center">
        <p className="text-stone-500">Belum ada produk yang tersedia saat ini.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          quantity={orderQuantities[product.id] || 0}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </div>
  );
};

export default ProductCatalog;
