import React from 'react';
import { ShoppingBag, Eye, Tag, Sparkles, Plus, Minus } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { createSingleProductWhatsAppLink } from '../utils/whatsapp';

export default function ProductCard({
  product,
  quantityInCart = 0,
  onAddToCart,
  onDirectBuy,
  onUpdateQuantity,
  onQuickView,
  whatsappPhone,
}) {
  const savings = product.mrp ? product.mrp - product.sellPrice : 0;
  const discountPercent = product.mrp
    ? Math.round((savings / product.mrp) * 100)
    : 0;

  const handleAddToCart = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    onAddToCart({
      id: product.id,
      name: product.name,
      subTitle: product.subTitle,
      price: product.sellPrice,
      sellPrice: product.sellPrice,
      mrp: product.mrp,
      unit: product.unit,
      length: product.unit,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <div
      onClick={() => onQuickView && onQuickView(product)}
      className="bg-white rounded-3xl overflow-hidden border border-[#c99738]/30 hover:border-[#c99738] transition-all duration-300 flex flex-col group relative cursor-pointer w-full max-w-full min-w-0"
    >
      
      {/* Top Floating Badge */}
      {product.badge && (
        <div className="absolute top-2.5 left-2.5 z-10 bg-[#801438] text-white text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-[#ffd978] fill-current" />
          <span>{product.badge}</span>
        </div>
      )}

      {/* Discount Tag */}
      {discountPercent > 0 && (
        <div className="absolute top-2.5 right-2.5 z-10 bg-[#25d366] text-white text-[10px] sm:text-[11px] font-black px-2 py-0.5 rounded-full">
          {discountPercent}% OFF
        </div>
      )}

      {/* Image Preview with Hover Quick View Button — 1:1 Aspect Ratio matches 1024x1024 graphics with zero cropping */}
      <div className="relative aspect-square w-full overflow-hidden bg-[#faf7f2]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView && onQuickView(product);
            }}
            className="bg-white hover:bg-[#faf7f2] text-[#0b1b36] font-bold px-3 py-1.5 rounded-full text-xs flex items-center gap-1 transform translate-y-2 group-hover:translate-y-0 transition-all border border-[#c99738]/40 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#8a5d0e]" />
            <span>Quick View</span>
          </button>
        </div>

        {/* Bottom Cutpiece Length Pill */}
        <div className="absolute bottom-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[#0b1b36] border border-[#e8dfd1] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
          <Tag className="w-3 h-3 text-[#c99738]" />
          <span>Cut: {product.unit}</span>
        </div>

        {/* In-Cart Count Pill Badge on Image */}
        {quantityInCart > 0 && (
          <div className="absolute bottom-2.5 right-2.5 bg-[#0b1b36] text-[#ffd978] border border-[#c99738] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-md flex items-center gap-1 whitespace-nowrap">
            <ShoppingBag className="w-3 h-3 text-[#ffd978] shrink-0" />
            <span className="whitespace-nowrap">{quantityInCart} in Cart</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3 sm:p-4.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category */}
          <p className="text-[10px] sm:text-[11px] text-[#878787] font-semibold uppercase tracking-wider mb-0.5">
            {product.category}
          </p>

          {/* Product Name (Flipkart Style Text) */}
          <h3 className="font-semibold text-sm sm:text-[15px] text-[#212121] leading-snug group-hover:text-[#2874f0] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* English Subtitle */}
          <p className="text-xs text-[#878787] font-normal line-clamp-1 mt-0.5">
            {product.subTitle}
          </p>

          {/* Short Description */}
          <p className="text-[11px] sm:text-xs text-gray-500 mt-1 line-clamp-1 sm:line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Actions Section (Flipkart Signature Pricing Layout) */}
        <div className="mt-2.5 sm:mt-3.5 pt-2 sm:pt-2.5 border-t border-gray-100">
          <div className="flex items-baseline gap-2 flex-wrap mb-0.5 sm:mb-1">
            <span className="text-base sm:text-xl font-bold text-[#212121]">
              ₹{product.sellPrice}
            </span>
            {product.mrp && (
              <span className="text-xs text-[#878787] line-through">
                ₹{product.mrp}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="text-xs font-bold text-[#388e3c]">
                {discountPercent}% off
              </span>
            )}
          </div>

          {/* Flipkart Free Delivery & Length Tag */}
          <div className="flex items-center justify-between text-[11px] mb-2 sm:mb-3 text-gray-500">
            <span className="text-[#388e3c] font-semibold text-[10.5px] sm:text-[11px]">Free delivery</span>
            <span className="text-[10px] text-gray-500 font-medium">
              Cut: {product.unit}
            </span>
          </div>

          {/* Action Buttons: Add to Cart / Quantity Controller + Direct Buy on WhatsApp */}
          <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
            {quantityInCart === 0 ? (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(e);
                }}
                className="flex items-center justify-center gap-1 sm:gap-1.5 bg-[#faf7f2] hover:bg-[#c99738]/20 border border-[#c99738]/80 text-[#0b1b36] font-semibold py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs transition-colors active:scale-95 cursor-pointer whitespace-nowrap"
                title="Add to shopping cart"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#8a5d0e] shrink-0" />
                <span className="whitespace-nowrap">Add to Cart</span>
              </button>
            ) : (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between bg-[#0b1b36] text-white rounded-xl border border-[#c99738] p-0.5"
              >
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onUpdateQuantity) {
                      onUpdateQuantity(product.id, product.unit, quantityInCart - 1);
                    }
                  }}
                  className="w-6 h-7 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center hover:bg-white/20 active:scale-90 text-[#ffd978] rounded-lg transition-all cursor-pointer"
                  title="Decrease quantity"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>

                <div className="flex-1 min-w-0 flex items-center justify-center px-0.5 py-1 text-center">
                  <span className="font-bold text-[10px] sm:text-[11px] text-white whitespace-nowrap tracking-tight">
                    {quantityInCart} in Cart
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(e);
                  }}
                  className="w-6 h-7 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center bg-[#c99738] hover:bg-[#dfb15b] active:scale-90 text-[#0b1b36] rounded-lg transition-all font-bold cursor-pointer"
                  title="Increase quantity"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (onDirectBuy) {
                  onDirectBuy({
                    id: product.id,
                    name: product.name,
                    subTitle: product.subTitle,
                    price: product.sellPrice,
                    sellPrice: product.sellPrice,
                    mrp: product.mrp,
                    unit: product.unit,
                    length: product.unit,
                    image: product.image,
                    category: product.category,
                    quantity: quantityInCart > 0 ? quantityInCart : 1,
                  });
                }
              }}
              className="flex items-center justify-center gap-1 sm:gap-1.5 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs transition-all cursor-pointer whitespace-nowrap"
              title="Order this product directly on WhatsApp"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Buy Now</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
