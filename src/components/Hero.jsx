import React, { useState, useEffect } from 'react';
import {
  ShoppingBag,
  Truck,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Phone,
  Maximize2,
  X,
  Check,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import InstagramIcon from './InstagramIcon';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export default function Hero({ whatsappPhone, onExploreClick }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const shopImage = '/shop-front.webp';

  // Lock background scroll when shop photo lightbox is open
  useEffect(() => {
    if (isImageModalOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || '';
      };
    }
  }, [isImageModalOpen]);

  return (
    <section className="relative bg-gradient-to-b from-[#fffdfa] via-[#fbf6ed] to-[#f4ece0] text-[#1a2538] px-3.5 sm:px-6 lg:px-8 overflow-hidden border-b-2 border-[#dfb15b]/40 lg:min-h-[calc(100vh-94px)] lg:h-[calc(100vh-94px)] lg:max-h-[880px] flex flex-col justify-center py-5 sm:py-6 lg:py-8">
      
      {/* Decorative Subtle Gold Paisley Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dfb15b]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#801438]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main Responsive 2-column Grid: Shop Image FIRST on mobile, Text FIRST on desktop */}
        <div className="grid grid-cols-1 min-[880px]:grid-cols-12 gap-5 min-[880px]:gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* Shop Image Card: Displayed FIRST on mobile (order-1), Right Column on desktop (order-2) */}
          <div className="min-[880px]:col-span-5 lg:col-span-5 flex flex-col justify-center my-auto py-1 order-1 min-[880px]:order-2 w-full min-w-0 overflow-hidden">
            <div className="bg-white p-2.5 sm:p-3 rounded-2xl border-2 border-[#dfb15b]/65 overflow-hidden relative group max-w-[485px] lg:max-w-[510px] mx-auto w-full transition-all duration-300">
              
              {/* Card Top Designer Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e8dfd1] gap-1 min-w-0 overflow-hidden">
                <div className="flex items-center gap-1.5 min-w-0 truncate">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span className="font-bold text-xs sm:text-sm text-[#0b1b36] tracking-tight truncate">Anumeet Cutpiece</span>
                  <span className="text-[10px] text-gray-400 font-medium hidden sm:inline shrink-0">• Storefront</span>
                </div>

                <div className="inline-flex items-center gap-1 bg-[#801438]/10 text-[#801438] px-2 py-0.5 rounded-full text-[10px] sm:text-[10.5px] font-bold border border-[#801438]/20 shrink-0">
                  <MapPin className="w-3 h-3 text-[#801438] shrink-0" />
                  <span className="truncate">Ayodhya Nagar</span>
                </div>
              </div>

              {/* Natural 4:3 Proportion Frame — 100% of the shop is fully and clearly visible */}
              <div
                onClick={() => setIsImageModalOpen(true)}
                className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-black/5 cursor-pointer shadow-xs group/img border border-[#c99738]/30"
                title="Click to view full shop photo"
              >
                <img
                  src={shopImage}
                  alt="Anumeet Cutpiece Storefront - Hno-13, Sukh Sagar Phase-1, Kiran Nagar, Ayodhya Nagar, Bhopal"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-102"
                  fetchPriority="high"
                  decoding="async"
                />

                {/* Floating Corner Badges on the image (Hidden on mobile so the shop banner photo is completely clear) */}
                <div className="hidden sm:flex absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded-full items-center gap-1 shadow-sm">
                  <MapPin className="w-2.5 h-2.5 text-[#ffd978] shrink-0" />
                  <span>Bhopal, MP</span>
                </div>

                <div className="hidden sm:flex absolute top-2.5 right-2.5 bg-black/60 hover:bg-black text-white text-[10px] font-semibold px-2 py-0.5 rounded-full opacity-90 group-hover/img:opacity-100 transition-opacity backdrop-blur-xs items-center gap-1 shadow-sm">
                  <Maximize2 className="w-3 h-3 shrink-0" />
                  <span>Enlarge</span>
                </div>
              </div>

              {/* Card Bottom Designer Footer */}
              <div className="pt-2 mt-2 border-t border-[#e8dfd1] flex items-center justify-between text-[11px] gap-2 min-w-0 overflow-hidden">
                <div className="flex items-center gap-1 min-w-0 truncate text-gray-600 flex-1">
                  <MapPin className="w-3.5 h-3.5 text-[#801438] shrink-0" />
                  <span className="font-semibold text-gray-700 truncate text-[10px] sm:text-[11px]">Kiran Nagar, Bhopal - 462022</span>
                </div>

                <a
                  href="tel:9131264893"
                  className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-[#801438] hover:underline shrink-0 whitespace-nowrap"
                >
                  <Phone className="w-3 h-3 text-[#25d366]" />
                  <span>9131264893</span>
                </a>
              </div>

            </div>
          </div>

          {/* Text Column: Displayed SECOND on mobile (order-2), Left Column on desktop (order-1) */}
          <div className="min-[880px]:col-span-7 lg:col-span-7 space-y-3 sm:space-y-3.5 lg:space-y-4 text-center min-[880px]:text-left order-2 min-[880px]:order-1 min-w-0 w-full overflow-hidden">
            
            {/* Top Bhopal Store Trust Pill */}
            <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-white/95 border border-[#c99738]/60 text-[#8a5d0e] px-2.5 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold shadow-xs max-w-full truncate min-w-0">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#801438] shrink-0" />
              <span className="truncate">Ayodhya Nagar, Bhopal - 462022</span>
            </div>

            {/* Grand Headline */}
            <div>
              <h1 className="text-2xl sm:text-3xl min-[880px]:text-[32px] lg:text-[40px] xl:text-[48px] font-black tracking-tight text-[#0b1b36] leading-[1.15]">
                Anumeet Cutpiece,{' '}
                <span className="text-[#801438] block sm:inline">
                  Bhopal
                </span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl font-bold text-[#8a5d0e] mt-1.5 tracking-tight">
                Quality Fabric, Endless Possibilities
              </p>
            </div>

            {/* Subtitle / Delivery Highlight */}
            <div className="space-y-2 min-w-0 overflow-hidden">
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto min-[880px]:mx-0">
                <strong className="text-[#0b1b36]">Wholesale &amp; Retail Cut Piece Center</strong> • Feel the Fabric, Live the Fashion. High quality Chanderi, Georgette, Crepe, Cotton, Organza &amp; Velvet cut pieces at honest wholesale rates.
              </p>
              
              <div className="inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#801438]/10 via-[#dfb15b]/20 to-transparent p-2 sm:p-2.5 rounded-xl border border-[#c99738]/40 text-[#801438] font-bold text-xs sm:text-sm max-w-full truncate min-w-0">
                <Truck className="w-4 h-4 text-[#25d366] shrink-0" />
                <span className="truncate">FREE Delivery on ₹500+ (Within 3 KM)</span>
              </div>
            </div>

            {/* CTA Buttons: All Single Line with whitespace-nowrap */}
            <div className="flex flex-col sm:flex-row items-center justify-center min-[880px]:justify-start gap-2.5 sm:gap-3 pt-1 w-full">
              
              {/* WhatsApp Main Order Button */}
              <a
                href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm shadow-md shadow-[#25d366]/25 transition-all duration-200 whitespace-nowrap cursor-pointer"
              >
                <WhatsAppIcon className="w-4.5 h-4.5 shrink-0" />
                <span className="whitespace-nowrap">Order on WhatsApp</span>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:9131264893"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b1b36] hover:bg-[#14294d] active:scale-95 text-white font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm shadow-xs transition-all whitespace-nowrap cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#ffd978] shrink-0" />
                <span className="whitespace-nowrap">Call: 9131264893</span>
              </a>

              {/* Explore Catalog Button */}
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fbf7ee] text-[#0b1b36] border border-[#c99738] font-bold px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#8a5d0e] shrink-0" />
                <span className="whitespace-nowrap">View 25+ Fabrics</span>
                <ArrowRight className="w-4 h-4 text-[#8a5d0e] shrink-0" />
              </button>
            </div>

            {/* Trust Highlights Grid with Bhopal Location Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-2 text-left w-full">
              
              <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-[#801438]/10 text-[#801438] shrink-0">
                    <MapPin className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase truncate">Location</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36] truncate">Bhopal Store</p>
                <p className="text-[9px] text-gray-500 mt-0.5 truncate">Ayodhya Nagar, MP</p>
              </div>

              <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-[#25d366]/15 text-[#0d7a38] shrink-0">
                    <Phone className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase truncate">Calling</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36] truncate">9131264893</p>
                <p className="text-[9px] text-gray-500 mt-0.5 truncate">Direct Call/Chat</p>
              </div>

              <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-[#c99738]/15 text-[#8a5d0e] shrink-0">
                    <Truck className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase truncate">Delivery</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36] truncate">Free on ₹500+</p>
                <p className="text-[9px] text-gray-500 mt-0.5 truncate">Within 3 KM Radius</p>
              </div>

              <div className="bg-white p-2 sm:p-2.5 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-amber-500/15 text-amber-700 shrink-0">
                    <ShieldCheck className="w-3 h-3" />
                  </div>
                  <span className="text-[9px] font-bold text-gray-500 uppercase truncate">Quality</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36] truncate">100% Genuine</p>
                <p className="text-[9px] text-gray-500 mt-0.5 truncate">5m &amp; 10m Continuous</p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full View */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border-2 border-[#c99738] flex flex-col">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setIsImageModalOpen(false)}
              className="absolute top-3 right-3 z-20 bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors shadow-md"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <div className="max-h-[75vh] overflow-auto bg-black flex items-center justify-center p-1">
              <img
                src={shopImage}
                alt="Anumeet Cutpiece Storefront - Hno-13, Sukh Sagar Phase-1, Kiran Nagar, Ayodhya Nagar, Bhopal"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            {/* Bottom Details Bar */}
            <div className="p-4 sm:p-5 bg-[#fffdfa] flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#e8dfd1]">
              <div className="text-center sm:text-left">
                <p className="font-black text-base sm:text-lg text-[#0b1b36]">
                  Anumeet Cutpiece — Bhopal Storefront
                </p>
                <p className="text-xs text-gray-600 mt-0.5">
                  Hno-13, Sukh Sagar Phase-1, Kiran Nagar, Ayodhya Nagar, Bhopal, Madhya Pradesh 462022, India
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:9131264893"
                  className="inline-flex items-center gap-1.5 bg-[#0b1b36] hover:bg-[#14294d] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ffd978] shrink-0" />
                  <span className="whitespace-nowrap">Call 9131264893</span>
                </a>
                <a
                  href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">Order on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
