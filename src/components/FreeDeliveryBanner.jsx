import React from 'react';
import { Truck, Gift, MapPin, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { STORE_CONFIG } from '../data/products';

export default function FreeDeliveryBanner({ cartTotal, onOpenCart }) {
  const threshold = STORE_CONFIG.freeDeliveryThreshold;
  const isUnlocked = cartTotal >= threshold;
  const needed = Math.max(0, threshold - cartTotal);
  const percentage = Math.min(100, (cartTotal / threshold) * 100);

  return (
    <section id="delivery-offer" className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 my-8 sm:my-12 overflow-hidden">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-[#fffbf2] to-[#f8f0e3] p-3.5 sm:p-8 md:p-10 text-[#0b1b36] shadow-md border-2 border-[#dfb15b]/60">
        
        {/* Subtle Decorative Golden Corner Accents */}
        <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-[#c99738]/10 blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 rounded-full bg-[#801438]/5 blur-2xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 min-[880px]:grid-cols-12 gap-5 min-[880px]:gap-6 items-center min-w-0">
          
          {/* Left Column: Offer Details */}
          <div className="min-[880px]:col-span-7 space-y-3 text-center min-[880px]:text-left min-w-0 overflow-hidden">
            <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#801438] bg-[#801438]/10 px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
              <Gift className="w-3.5 h-3.5 fill-current text-[#ffd978]" />
              <span>Special Delivery Offer</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0b1b36] tracking-tight">
              Orders Above ₹500 get <span className="text-[#801438] underline decoration-[#c99738]">FREE Delivery!</span>
            </h2>

            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              When your order total reaches <strong>₹500 or more</strong>, get <strong>100% FREE Home Delivery (₹0)</strong> within a <strong>3 KM radius of our shop</strong> (Ayodhya Nagar, Bhopal)! For distances beyond 3 KM or orders under ₹500, nominal delivery charges apply. We also deliver anywhere across India with fast <strong>Pan-India courier</strong>!
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 min-w-0">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 bg-white/80 border border-[#e8dfd1] px-2.5 py-1.5 rounded-xl shadow-xs min-w-0">
                <MapPin className="w-4 h-4 text-[#8a5d0e] shrink-0" />
                <span className="truncate"><strong>Free Within 3 KM:</strong> Above ₹500</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-800 bg-white/80 border border-[#e8dfd1] px-2.5 py-1.5 rounded-xl shadow-xs min-w-0">
                <Truck className="w-4 h-4 text-[#25d366] shrink-0" />
                <span className="truncate"><strong>Pan-India Courier:</strong> Fast Delivery</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-500 italic">
              * Note: Standard delivery charges apply for addresses beyond 3 KM radius of the shop.
            </p>
          </div>

          {/* Right Column: Dynamic Cart Progress Bar */}
          <div className="min-[880px]:col-span-5 bg-white p-4 min-[880px]:p-5 rounded-2xl border border-[#c99738]/40 shadow-sm">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2">
              <span className="text-[#801438]">Free Delivery Meter</span>
              <span className="text-[#0b1b36] font-mono">₹{cartTotal} / ₹{threshold}</span>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full bg-gray-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-gray-200 relative mb-3">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  isUnlocked
                    ? 'bg-gradient-to-r from-[#25d366] to-[#1faa53]'
                    : 'bg-gradient-to-r from-[#c99738] to-[#dfb15b]'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Status Message */}
            {isUnlocked ? (
              <div className="flex items-center gap-2 text-[#0d7a38] font-bold text-xs sm:text-sm bg-green-50 p-2 rounded-xl border border-green-200">
                <CheckCircle className="w-4 h-4 shrink-0 text-[#25d366]" />
                <span className="flex items-center gap-1">
                  Congratulations! You have unlocked FREE Delivery (within 3 KM)!
                  <Sparkles className="w-4 h-4 text-emerald-600 inline fill-current" />
                </span>
              </div>
            ) : (
              <div className="text-xs sm:text-sm text-gray-700 bg-amber-50/80 p-2 rounded-xl border border-amber-200">
                <span>Add just </span>
                <strong className="text-[#801438] font-mono">₹{needed}</strong>
                <span> more to unlock </span>
                <strong className="text-[#0b1b36]">FREE Delivery (within 3 KM)!</strong>
              </div>
            )}

            <button
              onClick={onOpenCart}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#c99738] to-[#dfb15b] hover:from-[#b98728] hover:to-[#c99738] active:scale-95 text-[#0b1b36] font-bold py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm shadow-sm transition-all cursor-pointer whitespace-nowrap"
            >
              <span className="whitespace-nowrap">View Cart &amp; Apply Free Delivery</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
