/**
 * Komponen Badge yang konsisten untuk label status, mode PO, kategori, dan porsi.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Isi teks/ikon badge
 * @param {'success'|'danger'|'warm'|'neutral'|'accent'} [props.variant='neutral'] - Varian warna
 * @param {'sm'|'md'} [props.size='sm'] - Ukuran badge
 * @param {string} [props.className] - Kelas Tailwind tambahan
 */
const Badge = ({
  children,
  variant = 'neutral',
  size = 'sm',
  className = '',
}) => {
  const variantStyles = {
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200/80',
    danger: 'bg-rose-50 text-rose-800 border-rose-200/80',
    warm: 'bg-amber-50 text-amber-950 border-amber-200/80',
    neutral: 'bg-stone-100 text-stone-700 border-stone-200',
    accent: 'bg-orange-50 text-orange-950 border-orange-200',
  };

  const sizeStyles = {
    sm: 'text-[11px] font-medium px-2.5 py-0.5 rounded-md border',
    md: 'text-xs font-semibold px-3 py-1 rounded-full border',
  };

  const selectedVariant = variantStyles[variant] || variantStyles.neutral;
  const selectedSize = sizeStyles[size] || sizeStyles.sm;

  return (
    <span
      className={`inline-flex items-center gap-1 leading-tight tracking-wide ${selectedVariant} ${selectedSize} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
