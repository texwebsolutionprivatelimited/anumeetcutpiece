import React from 'react';
import { Truck, MapPin, Phone, Sparkles } from 'lucide-react';

export default function NoticeTicker() {
  const tickerContent = (
    <div className="flex items-center gap-4 sm:gap-6 shrink-0">
      <span className="inline-flex items-center gap-1 bg-[#801438] text-white font-bold text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0">
        <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ffd978]" />
        Bhopal Store
      </span>

      <span className="inline-flex items-center gap-1.5 text-[#801438] font-bold text-xs sm:text-[13px] shrink-0">
        <Truck className="w-3.5 h-3.5 text-[#25d366] shrink-0" />
        <span>FREE Delivery on ₹500+ (Within 3 KM)</span>
      </span>

      <span className="text-[#c99738] font-bold shrink-0">•</span>

      <span className="inline-flex items-center gap-1 text-[#0b1b36] font-bold text-xs sm:text-[13px] shrink-0">
        Pan-India Courier Available Anywhere
      </span>

      <span className="text-[#c99738] font-bold shrink-0">•</span>

      <span className="inline-flex items-center gap-1 text-gray-700 text-xs sm:text-[13px] font-medium shrink-0">
        <MapPin className="w-3.5 h-3.5 text-[#801438] shrink-0" />
        Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal - 462022
      </span>

      <span className="text-[#c99738] font-bold shrink-0">•</span>

      <a
        href="tel:9131264893"
        className="inline-flex items-center gap-1 text-[#0b1b36] hover:text-[#801438] font-bold text-xs sm:text-[13px] bg-white px-2.5 py-0.5 rounded-full border border-gray-200 transition-colors shrink-0"
      >
        <Phone className="w-3 h-3 text-[#25d366]" />
        <span>Call: 9131264893</span>
      </a>

      <span className="text-[#c99738] font-bold shrink-0">•</span>

      <span className="inline-flex items-center gap-1.5 text-[#0b1b36] font-semibold text-xs sm:text-[13px] shrink-0">
        <Sparkles className="w-3 h-3 text-[#c99738] fill-current" />
        Continuous 5m &amp; 10m Cut Pieces
      </span>

      <span className="text-[#c99738] font-bold shrink-0">•</span>

      <span className="inline-flex items-center gap-1 text-[#801438] font-bold text-xs sm:text-[13px] shrink-0">
        Wholesale Rates for Boutiques &amp; Tailors
      </span>

      <span className="text-[#c99738] font-bold shrink-0 mr-4 sm:mr-6">•</span>
    </div>
  );

  return (
    <div className="bg-[#fff9ef] text-[#0b1b36] py-1.5 border-b border-[#e5d5be] relative z-30 overflow-hidden w-full max-w-full select-none">
      {/* Left Gradient Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-6 sm:w-16 bg-gradient-to-r from-[#fff9ef] to-transparent z-10" />

      {/* Right Gradient Edge Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-6 sm:w-16 bg-gradient-to-l from-[#fff9ef] to-transparent z-10" />

      {/* Infinite Seamless Scrolling Marquee: Plain block container with overflow-hidden and max-w-full */}
      <div className="w-full max-w-full overflow-hidden">
        <div className="animate-ticker-marquee flex items-center">
          {tickerContent}
          {tickerContent}
        </div>
      </div>
    </div>
  );
}
