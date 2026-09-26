import { useState, useMemo } from 'react';
import { PRODUCTS } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import POBanner from './components/POBanner';
import ProductCatalog from './components/ProductCatalog';
import HowItWorks from './components/HowItWorks';
import AboutSection from './components/AboutSection';
import FinalCTA from './components/FinalCTA';
import FloatingOrderBar from './components/FloatingOrderBar';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';

/**
 * Halaman Utama (Home Page) GODHOGAN MVP.
 * Menyatukan seluruh alur presentasi brand, jadwal Pre-Order,
 * katalog produk berbasis porsi, alur pemesanan, informasi brand,
 * dan sistem checkout konfirmasi via WhatsApp.
 */
const App = () => {
  const [orderQuantities, setOrderQuantities] = useState({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Handler penambahan / pengurangan porsi
  const handleQuantityChange = (productId, newQuantity) => {
    setOrderQuantities((prev) => {
      const next = { ...prev };
      if (newQuantity <= 0) {
        delete next[productId];
      } else {
        next[productId] = newQuantity;
      }
      return next;
    });
  };

  

  // Kosongkan cart setelah order berhasil diarahkan ke WhatsApp
  const clearCart = () => {
  setOrderQuantities({});
};

  // Hitung total porsi yang dipilih
  const totalPortions = useMemo(() => {
    return Object.values(orderQuantities).reduce((sum, qty) => sum + qty, 0);
  }, [orderQuantities]);

  // Daftar item pesanan lengkap beserta objek produknya
  const orderedItems = useMemo(() => {
    return Object.entries(orderQuantities)
      .map(([id, quantity]) => {
        const product = PRODUCTS.find((p) => p.id === id);
        return product ? { product, quantity } : null;
      })
      .filter(Boolean);
  }, [orderQuantities]);

  // Hitung estimasi total harga jika semua produk memiliki harga valid
  const totalPrice = useMemo(() => {
    if (orderedItems.length === 0) return null;
    const hasAllPrices = orderedItems.every(
      (item) => item.product.price !== null && item.product.price !== undefined && !isNaN(item.product.price)
    );
    return hasAllPrices
      ? orderedItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
      : null;
  }, [orderedItems]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-200 selection:text-amber-950">
      {/* 1. NAVBAR DENGAN BRAND, STATUS, LINK NAVIGASI & CTA PESAN SEKARANG */}
      <Header />

      {/* 2. KONTEN UTAMA HOME PAGE */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 pb-36">
        {/* HERO SECTION */}
        <Hero />

        {/* PO STATUS SECTION (Single source of truth: poConfig.js) */}
        <POBanner />

        {/* FEATURED MENU / KATALOG PRODUK */}
        <section
          id="menu"
          aria-labelledby="catalog-section-title"
          className="mb-14 sm:mb-18 scroll-mt-24"
        >
          <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-stone-200/80 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full inline-block mb-2">
                Pilihan Menu
              </span>
              <h2
                id="catalog-section-title"
                className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight"
              >
                Menu Rebusan Tradisional
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Semua menu disajikan dalam 1 porsi siap makan dari bahan umbi segar pilihan.
              </p>
            </div>

            {totalPortions > 0 && (
              <span className="text-xs font-bold text-amber-950 bg-amber-100 px-3.5 py-1.5 rounded-full self-start sm:self-auto border border-amber-300/80 shadow-2xs">
                {totalPortions} Porsi Dipilih
              </span>
            )}
          </div>

          <ProductCatalog
            products={PRODUCTS}
            orderQuantities={orderQuantities}
            onQuantityChange={handleQuantityChange}
          />
        </section>

        {/* HOW IT WORKS (CARA PEMESANAN 4 LANGKAH) */}
        <HowItWorks />

        {/* ABOUT GODHOGAN */}
        <AboutSection />

        {/* FINAL CTA SEBELUM FOOTER */}
        <FinalCTA />
      </main>

      {/* 3. FLOATING ORDER BAR (Mobile-First Thumb-Zone) */}
      <FloatingOrderBar
        totalPortions={totalPortions}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* 4. MODAL KONFIRMASI PESANAN KE WHATSAPP */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        orderItems={orderedItems}
        totalPortions={totalPortions}
        totalPrice={totalPrice}
        onQuantityChange={handleQuantityChange}
        onOrderComplete={clearCart}
      />

      {/* 5. FOOTER BRAND */}
      <Footer />
    </div>
  );
};

export default App;
