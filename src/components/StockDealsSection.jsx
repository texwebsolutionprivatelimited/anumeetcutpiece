import React, { useState } from 'react';
import { DIWALI_OFFER_ITEMS } from '../data/products';
import { Sparkles, ShoppingBag, Zap, Plus, Minus } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { createSingleProductWhatsAppLink } from '../utils/whatsapp';

export default function StockDealsSection({
  onAddToCart,
  onDirectBuy,
  onUpdateQuantity,
  getItemQuantity,
  onQuickView,
  whatsappPhone,
}) {
  // Length selection state for each stock item: default '5m' or '10m'
  const [selectedLengths, setSelectedLengths] = useState({
    'stock-1': '5m',
    'stock-2': '5m',
    'stock-3': '5m',
    'stock-4': '5m',
  });

  const toggleLength = (id, length) => {
    setSelectedLengths((prev) => ({ ...prev, [id]: length }));
  };

  return (
    <section id="diwali-offers" className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 my-10 sm:my-14 lg:my-16 relative overflow-hidden">
      <div id="winter-stock" className="absolute -top-16 left-0" />
      
      {/* Section Header (Centered Alignment & Consistent Size) */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#801438] bg-[#801438]/10 px-3.5 py-1.5 rounded-full mb-3 shadow-xs mx-auto">
          <Sparkles className="w-3.5 h-3.5 fill-current text-[#c99738]" />
          <span>Diwali Festive Special Offers</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1b36] tracking-tight text-center">
          Diwali Dhamaka Cutpiece Deals
        </h2>
        
        <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-2 leading-relaxed max-w-2xl mx-auto text-center">
          Celebrate this Diwali with huge savings on wholesale cut pieces! Available in 5m and 10m continuous cuts for festive lehengas, suits, and kurtis.
        </p>

        <div className="mt-3 flex items-center justify-center">
          <div className="inline-flex items-center gap-1.5 bg-[#c99738]/15 border border-[#c99738]/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#8a5d0e] shadow-xs whitespace-nowrap">
            <Zap className="w-3.5 h-3.5 text-amber-600 fill-current" />
            <span>5m vs 10m Festive Saver</span>
          </div>
        </div>
      </div>

      {/* Stock Cards Grid (Optimized for 320px, 375px, 425px, 768px and all screens) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5">
        {DIWALI_OFFER_ITEMS.map((item) => {
          const currentLength = selectedLengths[item.id] || '5m';
          const is10m = currentLength === '10m';
          const price = is10m ? item.price10m : item.price5m;
          const mrp = is10m ? item.mrp10m : item.mrp5m;
          const savings = mrp - price;
          const discountPercent = Math.round((savings / mrp) * 100);

          const productPayload = {
            id: item.id,
            name: `${item.name} (${currentLength})`,
            subTitle: item.subTitle,
            price: price,
            sellPrice: price,
            mrp: mrp,
            unit: currentLength === '10m' ? '10 mtr' : '5 mtr',
            length: currentLength === '10m' ? '10 mtr' : '5 mtr',
            image: item.image,
            category: 'Diwali Offers',
            description: item.description,
            badge: item.badge,
          };

          const quantityInCart = getItemQuantity
            ? getItemQuantity(item.id, productPayload.length)
            : 0;

          return (
            <div
              key={item.id}
              onClick={() => onQuickView && onQuickView(productPayload)}
              className="bg-white rounded-3xl overflow-hidden border border-[#c99738]/30 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group relative cursor-pointer"
            >
              {/* Badge Tag */}
              <div className="absolute top-2.5 left-2.5 z-10 bg-[#801438] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-[#ffd978] fill-current" />
                <span>{item.badge}</span>
              </div>

              {/* Discount Percentage Pill */}
              <div className="absolute top-2.5 right-2.5 z-10 bg-[#25d366] text-white text-[10px] font-black px-1.5 py-0.5 rounded-full shadow-xs">
                {discountPercent}% OFF
              </div>

              {/* Fabric Visual Preview */}
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full max-h-52 sm:max-h-none overflow-hidden bg-[#faf7f2]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs">
                  <span className="font-bold text-[9px] sm:text-[10px] text-[#0b1b36] bg-white/95 px-1.5 py-0.5 rounded-md border border-[#e8dfd1] shadow-xs">
                    Continuous Cut
                  </span>
                  <div className="flex items-center gap-1">
                    {quantityInCart > 0 && (
                      <span className="bg-[#801438] text-white px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold shadow-xs flex items-center gap-0.5 whitespace-nowrap">
                        <ShoppingBag className="w-2.5 h-2.5 shrink-0" />
                        <span className="whitespace-nowrap">{quantityInCart} in Cart</span>
                      </span>
                    )}
                    <span className="bg-[#0b1b36] text-[#ffd978] px-1.5 py-0.5 rounded-md font-mono text-[9px] sm:text-[10px] font-bold shadow-xs">
                      {currentLength}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-3 sm:p-4 lg:p-3 xl:p-4.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-[#212121] group-hover:text-[#2874f0] transition-colors line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#878787] font-semibold">{item.subTitle}</p>
                  <p className="text-[11px] text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Cut Length Selector Tabs */}
                  <div className="mt-2.5 pt-2 border-t border-gray-100">
                    <p className="text-[10px] font-bold text-gray-600 mb-1">Select Cut Length:</p>
                    <div className="grid grid-cols-2 gap-1 p-0.5 bg-[#faf7f2] rounded-xl border border-gray-200">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLength(item.id, '5m');
                        }}
                        className={`py-1 px-1 text-[10px] sm:text-[11px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                          !is10m
                            ? 'bg-[#0b1b36] text-[#ffd978] shadow-xs'
                            : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        5m (₹{item.price5m})
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleLength(item.id, '10m');
                        }}
                        className={`py-1 px-1 text-[10px] sm:text-[11px] font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                          is10m
                            ? 'bg-[#801438] text-white shadow-xs'
                            : 'text-gray-600 hover:text-black'
                        }`}
                      >
                        10m (₹{item.price10m})
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price Display (Flipkart Signature Pricing) */}
                <div className="mt-3 pt-2 border-t border-gray-100">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold text-[#212121]">
                      ₹{price}
                    </span>
                    <span className="text-xs text-[#878787] line-through">
                      ₹{mrp}
                    </span>
                    <span className="text-xs font-bold text-[#388e3c]">
                      {discountPercent}% off
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 mt-1">
                    <span className="text-[#388e3c] font-semibold">Special deal</span>
                    <span>₹{(price / (is10m ? 10 : 5)).toFixed(1)}/m</span>
                  </div>

                  {/* Actions: Add to Cart / Quantity Selector + WhatsApp */}
                  <div className="grid grid-cols-2 gap-1.5 mt-2.5">
                    {quantityInCart === 0 ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(productPayload);
                        }}
                        className="flex items-center justify-center gap-1 bg-[#faf7f2] hover:bg-[#c99738]/20 border border-[#c99738] text-[#0b1b36] font-bold py-1.5 sm:py-2 px-1 rounded-xl text-[10px] sm:text-xs transition-colors active:scale-95 cursor-pointer shadow-xs whitespace-nowrap"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#8a5d0e] shrink-0" />
                        <span className="whitespace-nowrap">Add to Cart</span>
                      </button>
                    ) : (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-between bg-[#0b1b36] text-white rounded-xl border border-[#c99738] p-0.5 shadow-xs"
                      >
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (onUpdateQuantity) {
                              onUpdateQuantity(item.id, productPayload.length, quantityInCart - 1);
                            }
                          }}
                          className="w-6 h-6 sm:w-6.5 sm:h-7 shrink-0 flex items-center justify-center hover:bg-white/20 active:scale-90 text-[#ffd978] rounded-md transition-all cursor-pointer"
                          title="Decrease quantity"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(productPayload);
                          }}
                          className="flex-1 min-w-0 flex items-center justify-center px-0.5 py-0.5 hover:bg-white/10 rounded text-center active:scale-95 transition-all cursor-pointer"
                          title="Click to add 1 more"
                        >
                          <span className="font-bold text-[10px] sm:text-[11px] text-white whitespace-nowrap tracking-tight">
                            {quantityInCart} in Cart
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAddToCart(productPayload);
                          }}
                          className="w-6 h-6 sm:w-6.5 sm:h-7 shrink-0 flex items-center justify-center bg-[#c99738] hover:bg-[#dfb15b] active:scale-90 text-[#0b1b36] rounded-md transition-all font-bold cursor-pointer"
                          title="Increase quantity"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 stroke-[2.5]" />
                        </button>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (onDirectBuy) {
                          onDirectBuy({
                            ...productPayload,
                            quantity: quantityInCart > 0 ? quantityInCart : 1,
                          });
                        }
                      }}
                      className="flex items-center justify-center gap-1 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-1.5 sm:py-2 px-1 rounded-xl text-[10px] sm:text-xs shadow-xs transition-all cursor-pointer whitespace-nowrap"
                      title="Direct Buy with WhatsApp & delivery details"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                      <span className="whitespace-nowrap">Buy Now</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
}
