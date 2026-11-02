import React from 'react';
import { Truck, Sparkles, MapPin, Phone, Zap } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_CONFIG } from '../data/products';

export default function NoticeTicker() {
  return (
    <div className="bg-[#fff9ef] text-[#0b1b36] text-xs py-1.5 px-3 sm:px-6 overflow-hidden border-b border-[#e5d5be] shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Ticker Content */}
        <div className="flex items-center gap-2 sm:gap-3 flex-1 overflow-hidden">
          <span className="inline-flex items-center gap-1 bg-[#801438] text-white font-bold text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider shrink-0 shadow-xs">
            <MapPin className="w-3 h-3 text-[#ffd978]" />
            Bhopal Store
          </span>

          <div className="flex items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-medium tracking-wide truncate">
            <span className="inline-flex items-center gap-1 text-[#801438] font-bold shrink-0">
              <Truck className="w-3.5 h-3.5 text-[#25d366]" />
              FREE Delivery on ₹500+ (Within 3 KM of Shop)
            </span>
            <span className="text-[#c99738] shrink-0">•</span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#0b1b36] font-bold shrink-0">
              Pan-India Delivery Available
            </span>
            <span className="text-[#c99738] shrink-0">•</span>
            <span className="hidden md:inline-flex items-center gap-1 text-gray-700 shrink-0">
              <MapPin className="w-3.5 h-3.5 text-[#801438]" />
              Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal - 462022
            </span>
            <span className="hidden lg:inline-block text-[#c99738] shrink-0">•</span>
            <a
              href="tel:9131264893"
              className="hidden lg:inline-flex items-center gap-1 text-[#0b1b36] hover:text-[#801438] font-bold shrink-0 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#25d366]" />
              <span>Call: 9131264893</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Quick Tag */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#0d7a38] shrink-0 bg-[#25d366]/10 px-2.5 py-0.5 rounded-full border border-[#25d366]/30">
          <WhatsAppIcon className="w-3.5 h-3.5" />
          <span>Ayodhya Nagar, Bhopal</span>
        </div>

      </div>
    </div>
  );
}
