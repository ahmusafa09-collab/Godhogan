import { useState } from 'react';
import { PO_CONFIG } from '../data/poConfig';
import Badge from './ui/Badge';

/**
 * Komponen Navbar GODHOGAN.
 * Memuat identitas brand, status PO real-time, link navigasi mobile-friendly,
 * dan CTA utama "Pesan Sekarang".
 */
const Header = () => {
  const { brandName, isOpen } = PO_CONFIG;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-18 flex items-center justify-between gap-3">
          {/* Brand Identitas */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 rounded-xl"
            aria-label={`${brandName} - Kembali ke atas`}
          >
            <div className="h-10 w-10 rounded-xl bg-amber-950 text-amber-100 flex items-center justify-center font-black text-lg shadow-2xs group-hover:scale-105 transition-transform">
              🍲
            </div>
            <div>
              <span className="block text-xl sm:text-2xl font-black tracking-tight text-amber-950 leading-none">
                {brandName}
              </span>
              <span className="text-[11px] sm:text-xs font-medium text-stone-600 tracking-wide mt-0.5 block">
                Rebusan Tradisional Hangat
              </span>
            </div>
          </a>

          {/* Navigasi Desktop */}
          <nav aria-label="Navigasi Utama" className="hidden md:flex items-center gap-6">
            <button
              type="button"
              onClick={() => scrollToSection('menu')}
              className="text-xs sm:text-sm font-semibold text-stone-700 hover:text-amber-950 transition cursor-pointer py-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 rounded-lg"
            >
              Menu
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('po-status')}
              className="text-xs sm:text-sm font-semibold text-stone-700 hover:text-amber-950 transition cursor-pointer py-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 rounded-lg"
            >
              Jadwal PO
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('cara-pesan')}
              className="text-xs sm:text-sm font-semibold text-stone-700 hover:text-amber-950 transition cursor-pointer py-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 rounded-lg"
            >
              Cara Pesan
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('tentang')}
              className="text-xs sm:text-sm font-semibold text-stone-700 hover:text-amber-950 transition cursor-pointer py-1.5 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 rounded-lg"
            >
              Tentang
            </button>
          </nav>

          {/* Action Header: Status PO & CTA Pesan Sekarang */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <Badge variant={isOpen ? 'success' : 'danger'} size="sm">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isOpen ? 'bg-emerald-600 animate-pulse' : 'bg-rose-600'
                  }`}
                  aria-hidden="true"
                />
                <span>{isOpen ? 'PO Buka' : 'PO Tutup'}</span>
              </Badge>
            </div>

            {/* CTA Utama Pesan Sekarang */}
            <button
              type="button"
              onClick={() => scrollToSection('menu')}
              className="min-h-[40px] px-3.5 sm:px-4 py-2 rounded-xl bg-amber-950 hover:bg-amber-900 active:scale-[0.98] text-amber-50 text-xs sm:text-sm font-bold tracking-wide transition cursor-pointer flex items-center gap-1.5 shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2"
            >
              <span>Pesan Sekarang</span>
              <span className="text-amber-300 font-normal" aria-hidden="true">↓</span>
            </button>

            {/* Toggle Navigasi Mobile */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Tutup navigasi menu' : 'Buka navigasi menu'}
              aria-expanded={mobileMenuOpen}
              className="md:hidden min-h-[40px] min-w-[40px] flex items-center justify-center rounded-xl border border-stone-300 text-stone-700 hover:bg-stone-100 transition cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Panel Menu Mobile */}
        {mobileMenuOpen && (
          <nav
            aria-label="Navigasi Menu Mobile"
            className="md:hidden py-3 border-t border-stone-200/80 grid grid-cols-2 gap-2 pb-4"
          >
            <button
              type="button"
              onClick={() => scrollToSection('menu')}
              className="w-full text-left px-3 py-2.5 rounded-xl bg-stone-100 text-xs font-bold text-stone-800 hover:bg-amber-100 hover:text-amber-950 transition cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800"
            >
              🍱 Pilihan Menu
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('po-status')}
              className="w-full text-left px-3 py-2.5 rounded-xl bg-stone-100 text-xs font-bold text-stone-800 hover:bg-amber-100 hover:text-amber-950 transition cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800"
            >
              📅 Jadwal PO
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('cara-pesan')}
              className="w-full text-left px-3 py-2.5 rounded-xl bg-stone-100 text-xs font-bold text-stone-800 hover:bg-amber-100 hover:text-amber-950 transition cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800"
            >
              📝 Cara Pesan
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('tentang')}
              className="w-full text-left px-3 py-2.5 rounded-xl bg-stone-100 text-xs font-bold text-stone-800 hover:bg-amber-100 hover:text-amber-950 transition cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-amber-800"
            >
              🍲 Tentang GODHOGAN
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
