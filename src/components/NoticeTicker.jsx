import React from 'react';
import { Truck, MapPin, Phone } from 'lucide-react';

export default function NoticeTicker() {
  return (
    <div className="bg-[#fff9ef] text-[#0b1b36] text-xs py-1.5 px-3 sm:px-6 lg:px-8 border-b border-[#e5d5be] shadow-xs relative z-30 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Ticker Content */}
        <div className="flex items-center gap-1.5 sm:gap-3 min-w-0 flex-1 overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-[#801438] text-white font-bold text-[9.5px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 shadow-xs">
            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ffd978]" />
            Bhopal Store
          </span>

          <div className="flex items-center gap-2 text-[10.5px] sm:text-xs font-medium min-w-0 truncate">
            <span className="inline-flex items-center gap-1 text-[#801438] font-bold truncate">
              <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25d366] shrink-0" />
              <span className="truncate">FREE Delivery on ₹500+ (Within 3 KM)</span>
            </span>
            <span className="hidden sm:inline text-[#c99738] shrink-0">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#0b1b36] font-bold shrink-0">
              Pan-India Courier Available
            </span>
            <span className="hidden md:inline text-[#c99738] shrink-0">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-gray-700 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#801438]" />
              Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal
            </span>
          </div>
        </div>

        {/* Quick Phone Call Pill on mobile & tablet */}
        <a
          href="tel:9131264893"
          className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#0b1b36] hover:text-[#801438] shrink-0 whitespace-nowrap bg-white/90 px-2 sm:px-2.5 py-0.5 rounded-full border border-gray-200 shadow-xs"
        >
          <Phone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#25d366]" />
          <span>9131264893</span>
        </a>

      </div>
    </div>
  );
}
