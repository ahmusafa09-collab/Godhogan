/**
 * Ilustrasi SVG visual produk rebusan tradisional GODHOGAN
 * Digunakan sebagai visual produk hangat yang autentik ketika file foto asli belum diunggah.
 * 
 * @param {Object} props
 * @param {string} props.productId - ID produk ('singkong', 'ubi-cilembu', dsb.)
 * @param {string} props.productName - Nama produk
 */
const ProductImagePlaceholder = ({ productId, productName }) => {
  const getProductVisual = () => {
    switch (productId) {
      case 'singkong':
        return {
          bgGradient: 'from-amber-100/90 to-amber-200/50',
          accentColor: '#B45309',
          bodyColor: '#FEF3C7',
          innerColor: '#FFFBEB',
          label: 'Singkong Rebus Merekah',
        };
      case 'ubi-cilembu':
        return {
          bgGradient: 'from-orange-100/90 to-amber-200/60',
          accentColor: '#C2410C',
          bodyColor: '#F97316',
          innerColor: '#FED7AA',
          label: 'Ubi Cilembu Madu',
        };
      case 'ubi-ungu':
        return {
          bgGradient: 'from-purple-100/90 to-fuchsia-200/50',
          accentColor: '#7E22CE',
          bodyColor: '#9333EA',
          innerColor: '#E9D5FF',
          label: 'Ubi Ungu Kukus',
        };
      case 'kentang':
        return {
          bgGradient: 'from-yellow-100/90 to-amber-200/50',
          accentColor: '#A16207',
          bodyColor: '#FBBF24',
          innerColor: '#FEF08A',
          label: 'Kentang Rebus Pulen',
        };
      case 'pisang':
        return {
          bgGradient: 'from-amber-100/90 to-yellow-200/60',
          accentColor: '#854D0E',
          bodyColor: '#FACC15',
          innerColor: '#FEF9C3',
          label: 'Pisang Kukus Legit',
        };
      case 'talas':
        return {
          bgGradient: 'from-stone-200/80 to-stone-300/40',
          accentColor: '#78716C',
          bodyColor: '#E7E5E4',
          innerColor: '#F5F5F4',
          label: 'Talas Rebus Gurih',
        };
      default:
        return {
          bgGradient: 'from-amber-100/80 to-stone-200/50',
          accentColor: '#78350F',
          bodyColor: '#FDE68A',
          innerColor: '#FEF3C7',
          label: 'Rebusan Hangat',
        };
    }
  };

  const visual = getProductVisual();

  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center bg-linear-to-b ${visual.bgGradient} p-4 select-none`}
      aria-label={`Ilustrasi ${productName}`}
    >
      {/* Gambar SVG Rebusan Tradisional dengan Uap Hangat */}
      <svg
        viewBox="0 0 120 90"
        className="w-24 h-20 drop-shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Garis Uap Hangat Alami */}
        <path
          d="M50 22 C48 16, 54 12, 51 6"
          stroke="#92400E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />
        <path
          d="M60 20 C58 14, 64 10, 61 4"
          stroke="#92400E"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M70 22 C68 16, 74 12, 71 6"
          stroke="#92400E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeOpacity="0.5"
        />

        {/* Mangkuk / Alas Daun Pisang Tradisional */}
        <ellipse cx="60" cy="74" rx="46" ry="12" fill="#166534" fillOpacity="0.85" />
        <ellipse cx="60" cy="72" rx="42" ry="10" fill="#15803D" />

        {/* Bentuk Rebusan Utama */}
        <ellipse
          cx="60"
          cy="52"
          rx="32"
          ry="20"
          fill={visual.bodyColor}
          stroke={visual.accentColor}
          strokeWidth="2"
        />
        <ellipse
          cx="58"
          cy="50"
          rx="24"
          ry="14"
          fill={visual.innerColor}
        />
        
        {/* Tekstur Gurih / Merekah Rebusan */}
        <path
          d="M48 46 Q58 50 68 47"
          stroke={visual.accentColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeOpacity="0.7"
        />
        <circle cx="52" cy="54" r="1.5" fill={visual.accentColor} fillOpacity="0.6" />
        <circle cx="64" cy="52" r="1.5" fill={visual.accentColor} fillOpacity="0.6" />
      </svg>

      <span className="text-[11px] font-medium text-stone-600 mt-1 tracking-wide">
        {visual.label}
      </span>
    </div>
  );
};

export default ProductImagePlaceholder;
