import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, Tag, ShieldCheck, Truck } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function ProductModal({
  product,
  onClose,
  onAddToCart,
  onDirectBuy,
  quantityInCart = 0,
  whatsappPhone,
  onOpenPolicy,
}) {
  const [quantity, setQuantity] = useState(1);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (product) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || '';
      };
    }
  }, [product]);

  // Reset quantity to 1 whenever a new product is opened
  useEffect(() => {
    setQuantity(1);
  }, [product]);

  if (!product) return null;

  const sellPrice = product.sellPrice !== undefined ? product.sellPrice : (product.price || 0);
  const mrp = product.mrp || 0;
  const savings = mrp > sellPrice ? mrp - sellPrice : 0;
  const discountPercent = mrp > 0 ? Math.round((savings / mrp) * 100) : 0;
  const totalPrice = sellPrice * quantity;
  const unitLength = product.unit || product.length || '5 mtr';

  const handleAddToCart = () => {
    onAddToCart({
      id: product.id,
      name: product.name,
      subTitle: product.subTitle,
      price: sellPrice,
      sellPrice: sellPrice,
      mrp: product.mrp,
      unit: unitLength,
      length: unitLength,
      image: product.image,
      category: product.category,
      quantity: quantity,
    });
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 bg-black/60 backdrop-blur-sm animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#c99738]/40 relative max-h-[92vh] flex flex-col md:flex-row"
      >
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-30 bg-black/60 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Fabric Image Preview */}
        <div className="md:w-5/12 lg:w-1/2 bg-[#faf7f2] border-b md:border-b-0 md:border-r border-[#e8dfd1] relative flex items-center justify-center p-3 sm:p-5 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square max-h-52 sm:max-h-72 md:max-h-[440px] object-contain rounded-2xl shadow-sm bg-white"
            decoding="async"
          />
          {product.badge && (
            <div className="absolute top-3.5 left-3.5 bg-[#801438] text-white text-[10.5px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
              {product.badge}
            </div>
          )}
        </div>

        {/* Right: Fabric Details & Order Controls */}
        <div className="md:w-7/12 lg:w-1/2 p-3.5 sm:p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-2.5 sm:space-y-3">
            {/* Category & In-Cart Tag */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#801438] bg-[#801438]/10 px-2.5 py-0.5 rounded-full">
                {product.category || 'Cutpiece Fabric'}
              </span>
              {quantityInCart > 0 && (
                <span className="text-[10.5px] sm:text-[11px] bg-[#0b1b36] text-[#ffd978] border border-[#c99738] px-2.5 py-0.5 rounded-full font-bold shadow-xs whitespace-nowrap">
                  {quantityInCart} in Cart
                </span>
              )}
            </div>

            {/* Product Title & Subtitle */}
            <div>
              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-[#212121] leading-tight">
                {product.name}
              </h3>
              {product.subTitle && (
                <p className="text-xs sm:text-sm text-[#878787] font-normal mt-0.5">
                  {product.subTitle}
                </p>
              )}
            </div>

            {/* Price Box (Flipkart Style) */}
            <div className="p-2.5 sm:p-3 bg-[#faf7f2] rounded-2xl border border-[#c99738]/30">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#388e3c] uppercase tracking-wider block mb-0.5">
                Special Price
              </span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#212121]">
                  ₹{sellPrice}
                </span>
                {mrp > sellPrice && (
                  <span className="text-xs sm:text-sm text-[#878787] line-through">
                    ₹{mrp}
                  </span>
                )}
                {discountPercent > 0 && (
                  <span className="text-xs sm:text-sm font-bold text-[#388e3c]">
                    {discountPercent}% off
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            )}

            {/* Specs Checklist */}
            <div className="space-y-1 sm:space-y-1.5 text-[11px] sm:text-xs text-gray-600 border-t border-gray-100 pt-2.5 sm:pt-3">
              <div className="flex items-center gap-2">
                <Tag className="w-3.5 h-3.5 text-[#c99738] shrink-0" />
                <span>Standard Length: <strong>{unitLength} (Continuous Cut)</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
                <span>100% Quality &amp; Genuine Meters Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-[#801438] shrink-0" />
                <span>Eligible for <strong>FREE Delivery</strong> on ₹500+ (within 3 KM)</span>
              </div>
              <div className="flex items-center justify-between text-[10.5px] sm:text-xs text-[#801438] bg-[#fff5f5] border border-[#f5c2c7] px-2.5 py-1.5 rounded-xl mt-1">
                <div className="flex items-center gap-1.5 font-bold">
                  <RefreshCw className="w-3.5 h-3.5 shrink-0" />
                  <span>No Cash Refund • 48h Easy Exchange</span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenPolicy && onOpenPolicy('exchange');
                  }}
                  className="font-bold underline text-[10px] hover:text-[#0b1b36] cursor-pointer shrink-0"
                >
                  Policy ↗
                </button>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-2.5 sm:pt-3">
              <span className="text-xs font-bold text-gray-700">Quantity (Units):</span>
              <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden bg-white shadow-xs">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100 font-bold text-sm cursor-pointer transition-colors"
                  title="Decrease quantity"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-3 py-1 font-bold text-sm font-mono min-w-8 text-center bg-gray-50">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100 font-bold text-sm cursor-pointer transition-colors"
                  title="Increase quantity"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action CTAs: Full Responsive Single-Line Buttons */}
          <div className="mt-4 sm:mt-5 pt-3 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 bg-[#0b1b36] hover:bg-[#14294d] active:scale-95 text-white font-bold py-2.5 sm:py-3 px-3 rounded-xl sm:rounded-2xl text-xs sm:text-[13px] transition-all shadow-xs cursor-pointer whitespace-nowrap"
            >
              <ShoppingBag className="w-4 h-4 text-[#ffd978] shrink-0" />
              <span className="whitespace-nowrap">Add {quantity} to Cart (₹{totalPrice})</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                if (onDirectBuy) {
                  onDirectBuy({
                    id: product.id,
                    name: product.name,
                    subTitle: product.subTitle,
                    price: sellPrice,
                    sellPrice: sellPrice,
                    mrp: product.mrp,
                    unit: unitLength,
                    length: unitLength,
                    image: product.image,
                    category: product.category,
                    quantity: quantity,
                  });
                }
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-2.5 sm:py-3 px-3 rounded-xl sm:rounded-2xl text-xs sm:text-[13px] transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Buy Now</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
