 import { useEffect } from 'react';
    import PropTypes from 'prop-types';
    import useCheckout from '../hooks/useCheckout';
    import { formatCurrency } from '../utils/formatCurrency';
    import { PO_CONFIG } from '../data/poConfig';

    /**
     * CheckoutModal
     *
     * Menampilkan ringkasan order, form checkout, dan
     * link native untuk membuka WhatsApp.
     */
    const CheckoutModal = ({
      isOpen,
      onClose,
      orderItems = [],
      onQuantityChange,
      onOrderComplete,
    }) => {
      const {
        formData,
        setField,
        error,
        totalPortions,
        totalPrice,
        submit,
        reset,
      } = useCheckout(orderItems);

      // Fallback total porsi
      const calculatedPortions =
        typeof totalPortions === 'number'
          ? totalPortions
          : orderItems.reduce((sum, item) => sum + item.quantity, 0);

      // Fallback total harga
      const hasAllPrices =
        orderItems.length > 0 &&
        orderItems.every(
          (item) =>
            item.product.price !== null &&
            item.product.price !== undefined &&
            !isNaN(item.product.price)
        );

      const calculatedPrice =
        typeof totalPrice === 'number'
          ? totalPrice
          : hasAllPrices
            ? orderItems.reduce(
                (sum, item) => sum + item.product.price * item.quantity,
                0
              )
            : null;

      // Tutup dengan tombol Escape
      useEffect(() => {
        const handler = (event) => {
          if (event.key === 'Escape') {
            onClose();
          }
        };

        if (isOpen) {
          window.addEventListener('keydown', handler);
        }

        return () => {
          window.removeEventListener('keydown', handler);
        };
      }, [isOpen, onClose]);

      // Reset form ketika modal ditutup
      useEffect(() => {
        if (!isOpen) {
          reset();
        }
      }, [isOpen, reset]);

      if (!isOpen) {
        return null;
      }

      return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="checkout-modal-title"
        >
          <div className="relative w-full max-w-lg rounded-3xl bg-white p-5 sm:p-7 shadow-xl border border-stone-200 my-6">
            {/* Header */}
            <div className="flex items-start justify-between border-b border-stone-100 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block mb-0.5">
                  Konfirmasi Pemesanan
                </span>

                <h2
                  id="checkout-modal-title"
                  className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight"
                >
                  Data Pengiriman
                </h2>

                <p className="text-xs text-stone-600 mt-1">
                  Rincian pesanan akan diteruskan langsung ke WhatsApp{' '}
                  {PO_CONFIG.brandName}.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup form konfirmasi pemesanan"
                className="min-h-[44px] min-w-[44px] rounded-full bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-stone-900 flex items-center justify-center transition cursor-
  pointer text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
              >
                ✕
              </button>
            </div>

            {/* Order Summary */}
            <div className="mt-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 p-4">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-950">
                  Menu Dipilih ({calculatedPortions} porsi)
                </span>
              </div>

              {orderItems.length === 0 ? (
                <div className="text-center py-5 text-stone-600 text-xs">
                  <p className="font-medium">
                    Belum ada porsi menu yang dipilih.
                  </p>

                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-3 min-h-[40px] px-4 py-2 rounded-xl bg-amber-950 text-amber-50 text-xs font-bold hover:bg-amber-900 transition cursor-pointer focus-visible:outline-none
  focus-visible:ring-2 focus-visible:ring-amber-800"
                  >
                    Pilih Menu Sekarang
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-amber-200/60 max-h-44 overflow-y-auto pr-1 space-y-2">
                  {orderItems.map((item) => (
                    <li
                      key={item.product.id}
                      className="pt-2 first:pt-0 flex items-center justify-between text-xs text-stone-800 gap-2"
                    >
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-stone-900 truncate block">
                          {item.product.name}
                        </span>

                        <span className="text-[11px] text-stone-500">
                          {item.product.portion || '1 porsi siap makan'}
                        </span>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={() =>
                            onQuantityChange(item.product.id, item.quantity - 1)
                          }
                          aria-label={`Kurangi porsi ${item.product.name}`}
                          className="min-h-[36px] min-w-[36px] rounded-lg bg-white border border-amber-200 font-bold text-amber-950 hover:bg-amber-100 flex items-center justify-center
  cursor-pointer text-xs active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
                        >
                          –
                        </button>

                        <span className="font-extrabold text-amber-950 text-xs w-7 text-center">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            onQuantityChange(item.product.id, item.quantity + 1)
                          }
                          aria-label={`Tambah porsi ${item.product.name}`}
                          className="min-h-[36px] min-w-[36px] rounded-lg bg-amber-950 text-amber-50 font-bold hover:bg-amber-900 flex items-center justify-center cursor-pointer text-xs
  active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-800"
                        >
                          +
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-3 pt-2.5 border-t border-amber-200/60 text-xs text-stone-700 space-y-1">
                <div className="flex items-center justify-between">
                  <span>Metode Pengantaran:</span>

                  <span className="font-semibold text-amber-950 text-right">
                    {formData.fulfillmentMethod
                      ? formData.fulfillmentMethod === 'pickup'
                        ? 'Pickup'
                        : 'Delivery'
                      : 'Pilih metode'}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Estimasi Harga:</span>

                  <span className="font-bold text-amber-950">
                    {calculatedPrice !== null
                      ? formatCurrency(calculatedPrice)
                      : 'Harga belum ditentukan'}
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              className="mt-5 space-y-4"
              onSubmit={(event) => event.preventDefault()}
            >
              {/* Nama */}
              <div>
                <label
                  htmlFor="checkout-customerName"
                  className="block text-xs font-bold text-stone-800 mb-1"
                >
                  Nama Pemesan{' '}
                  <span className="text-rose-600" aria-hidden="true">
                    *
                  </span>
                </label>

                <input
                  id="checkout-customerName"
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(event) =>
                    setField('customerName', event.target.value)
                  }
                  placeholder="Contoh: Budi Santoso"
                  className="w-full min-h-[44px] rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-800
  focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition"
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label
                  htmlFor="checkout-customerPhone"
                  className="block text-xs font-bold text-stone-800 mb-1"
                >
                  Nomor WhatsApp / HP{' '}
                  <span className="text-rose-600" aria-hidden="true">
                    *
                  </span>
                </label>

                <input
                  id="checkout-customerPhone"
                  type="tel"
                  required
                  value={formData.customerPhone}
                  onChange={(event) =>
                    setField('customerPhone', event.target.value)
                  }
                  placeholder="Contoh: 081234567890"
                  className="w-full min-h-[44px] rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-800
  focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition"
                />
              </div>

              {/* Fulfillment */}
              <div>
                <label
                  htmlFor="checkout-fulfillmentMethod"
                  className="block text-xs font-bold text-stone-800 mb-1"
                >
                  Metode Pengantaran{' '}
                  <span className="text-rose-600" aria-hidden="true">
                    *
                  </span>
                </label>

                <select
                  id="checkout-fulfillmentMethod"
                  required
                  value={formData.fulfillmentMethod || ''}
                  onChange={(event) =>
                    setField('fulfillmentMethod', event.target.value)
                  }
                  className="w-full min-h-[44px] rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:border-amber-800 focus:outline-none
  focus:ring-2 focus:ring-amber-800/20 transition"
                >
                  <option value="" disabled>
                    -- Pilih Metode --
                  </option>

                  <option value="pickup">Pickup</option>

                  <option value="delivery">Delivery</option>
                </select>
              </div>

              {/* Delivery Address */}
              {formData.fulfillmentMethod === 'delivery' && (
                <div>
                  <label
                    htmlFor="checkout-deliveryAddress"
                    className="block text-xs font-bold text-stone-800 mb-1"
                  >
                    Alamat Pengiriman{' '}
                    <span className="text-rose-600" aria-hidden="true">
                      *
                    </span>
                  </label>

                  <textarea
                    id="checkout-deliveryAddress"
                    rows={2}
                    required
                    value={formData.deliveryAddress}
                    onChange={(event) =>
                      setField('deliveryAddress', event.target.value)
                    }
                    placeholder="Contoh: Jl. Melati No. 15, RT 02/04"
                    className="w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-800 focus:outline-none
  focus:ring-2 focus:ring-amber-800/20 transition"
                  />
                </div>
              )}

              {/* PO Date */}
              <div>
                <label
                  htmlFor="checkout-poDate"
                  className="block text-xs font-bold text-stone-800 mb-1"
                >
                  Tanggal PO{' '}
                  <span className="text-rose-600" aria-hidden="true">
                    *
                  </span>
                </label>

                <input
                  id="checkout-poDate"
                  type="date"
                  required
                  value={formData.poDate || ''}
                  onChange={(event) => setField('poDate', event.target.value)}
                  className="w-full min-h-[44px] rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 focus:border-amber-800 focus:outline-none focus:ring-2
  focus:ring-amber-800/20 transition"
                />
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="checkout-nots"
                  className="block text-xs font-bold text-stone-800 mb-1"
                >
                  Catatan Tambahan (Opsional)
                </label>

                <input
                  id="checkout-nots"
                  type="text"
                  value={formData.notes}
                  onChange={(event) => setField('notes', event.target.value)}
                  placeholder="Misal: titip di pos satpam"
                  className="w-full min-h-[44px] rounded-xl border border-stone-300 px-3.5 py-2.5 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:border-amber-800
  focus:outline-none focus:ring-2 focus:ring-amber-800/20 transition"
                />
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl bg-rose-50 border border-rose-300 p-3 text-xs font-medium text-rose-800"
                >
                  {error}
                </div>
              )}

              {/* WhatsApp */}
            <div className="pt-2">
              <a
                href={orderItems.length > 0 ? "https://wa.me/62895609140103" : "#"} 
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  const url = submit(); 
                  
                  if (!url) {
                    e.preventDefault(); 
                    return; 
                  }
                  
                  e.currentTarget.href = url;
                  
                  if (typeof onOrderComplete === 'function') {
                    onOrderComplete();
                  }
                  onClose();
                }}
                className={`w-full min-h-[48px] rounded-2xl py-3.5 px-4 text-xs sm:text-sm font-bold tracking-wide transition flex items-center justify-center gap-2 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2 ${
                  orderItems.length === 0 
                    ? 'bg-stone-300 text-stone-500 cursor-not-allowed' 
                    : 'bg-emerald-700 hover:bg-emerald-800 text-white cursor-pointer active:scale-[0.98]'
                }`}
                style={{ textDecoration: 'none' }}
              >
                <span className="text-base" aria-hidden="true">📲</span>
                <span>Kirim Pesanan via WhatsApp</span>
              </a>
              <p className="text-[11px] text-stone-500 text-center mt-2.5">
                WhatsApp akan otomatis terbuka dengan rincian pesanan Anda.
              </p>
            </div>
            </form>
          </div>
        </div>
      );
    };

    CheckoutModal.propTypes = {
      isOpen: PropTypes.bool.isRequired,
      onClose: PropTypes.func.isRequired,
      orderItems: PropTypes.array,
      onQuantityChange: PropTypes.func.isRequired,
      onOrderComplete: PropTypes.func,
    };

    CheckoutModal.defaultProps = {
      orderItems: [],
      onOrderComplete: undefined,
    };

    export default CheckoutModal;
