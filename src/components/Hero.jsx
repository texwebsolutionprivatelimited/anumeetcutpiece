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
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export default function Hero({ whatsappPhone, onExploreClick }) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const shopImage = '/shop-front.jpg';

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
    <section className="relative bg-gradient-to-b from-[#fffdfa] via-[#fbf6ed] to-[#f4ece0] text-[#1a2538] px-3 sm:px-4 min-[880px]:px-5 lg:px-6 overflow-hidden border-b-2 border-[#dfb15b]/40 min-h-[calc(100vh-94px)] lg:h-[calc(100vh-94px)] lg:max-h-[880px] flex flex-col justify-center py-5 sm:py-6 lg:py-8">
      
      {/* Decorative Subtle Gold Paisley Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#dfb15b]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#801438]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main Responsive 2-column Grid */}
        <div className="grid grid-cols-1 min-[880px]:grid-cols-12 gap-5 min-[880px]:gap-6 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Column (7 cols): Shop Identity, Headline & Trust */}
          <div className="min-[880px]:col-span-7 lg:col-span-7 space-y-3 sm:space-y-3.5 lg:space-y-4 text-center min-[880px]:text-left">
            
            {/* Top Bhopal Store Trust Pill */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/95 border border-[#c99738]/60 text-[#8a5d0e] px-3 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold shadow-xs">
              <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#801438] shrink-0" />
              <span>Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal - 462022</span>
            </div>

            {/* Grand Headline */}
            <div>
              <h1 className="text-2xl sm:text-4xl min-[880px]:text-[32px] lg:text-[40px] xl:text-[48px] font-black tracking-tight text-[#0b1b36] leading-[1.15]">
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
            <div className="space-y-2">
              <p className="text-gray-700 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mx-auto min-[880px]:mx-0">
                <strong className="text-[#0b1b36]">Wholesale &amp; Retail Cut Piece Center</strong> • Feel the Fabric, Live the Fashion. High quality Chanderi, Georgette, Crepe, Cotton, Organza &amp; Velvet cut pieces at honest wholesale rates.
              </p>
              
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#801438]/10 via-[#dfb15b]/20 to-transparent p-2 sm:p-2.5 rounded-xl border border-[#c99738]/40 text-[#801438] font-bold text-xs sm:text-sm">
                <Truck className="w-4 h-4 text-[#25d366] shrink-0" />
                <span>FREE Delivery on ₹500+ (Within 3 KM of Shop) • Pan-India Delivery Available!</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center min-[880px]:justify-start gap-2.5 sm:gap-3 pt-1">
              
              {/* WhatsApp Main Order Button */}
              <a
                href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold px-5 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm shadow-md shadow-[#25d366]/25 transition-all duration-200"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>

              {/* Direct Call Button */}
              <a
                href="tel:9131264893"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b1b36] hover:bg-[#14294d] active:scale-95 text-white font-bold px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-[#ffd978]" />
                <span>Call: 9131264893</span>
              </a>

              {/* Explore Catalog Button */}
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-[#fbf7ee] text-[#0b1b36] border border-[#c99738] font-bold px-4 sm:px-5 py-3 rounded-2xl text-xs sm:text-sm shadow-xs transition-all active:scale-95"
              >
                <ShoppingBag className="w-4 h-4 text-[#8a5d0e]" />
                <span>View 25+ Fabrics</span>
                <ArrowRight className="w-4 h-4 text-[#8a5d0e]" />
              </button>
            </div>

            {/* Trust Highlights Grid with Bhopal Location Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 pt-2 text-left">
              
              <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-[#801438]/10 text-[#801438]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-500 uppercase">Location</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36]">Bhopal Store</p>
                <p className="text-[9.5px] text-gray-500 mt-0.5 truncate">Ayodhya Nagar, MP</p>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-[#25d366]/15 text-[#0d7a38]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-500 uppercase">Calling</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36]">9131264893</p>
                <p className="text-[9.5px] text-gray-500 mt-0.5">Direct Call / WhatsApp</p>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-[#c99738]/15 text-[#8a5d0e]">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-500 uppercase">Delivery</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36]">Free on ₹500+</p>
                <p className="text-[9.5px] text-gray-500 mt-0.5">Within 3 KM Radius</p>
              </div>

              <div className="bg-white p-2.5 sm:p-3 rounded-2xl border border-[#e8dfd1] shadow-xs hover:border-[#c99738] transition-colors">
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="p-1 rounded-lg bg-amber-500/15 text-amber-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[9.5px] font-bold text-gray-500 uppercase">Quality</span>
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#0b1b36]">100% Genuine</p>
                <p className="text-[9.5px] text-gray-500 mt-0.5">5m &amp; 10m Continuous</p>
              </div>

            </div>

          </div>

          {/* Right Column (5 cols): Designer Shop Image Card (Balanced & Sized Up) */}
          <div className="min-[880px]:col-span-5 lg:col-span-5 flex flex-col justify-center my-auto py-1">
            <div className="bg-white p-2.5 sm:p-3 rounded-2xl border-2 border-[#dfb15b]/65 shadow-xl overflow-hidden relative group max-w-[485px] lg:max-w-[510px] mx-auto w-full transition-all duration-300 hover:shadow-2xl">
              
              {/* Card Top Designer Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#e8dfd1]">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                  <span className="font-bold text-xs sm:text-sm text-[#0b1b36] tracking-tight">Anumeet Cutpiece</span>
                  <span className="text-[10.5px] text-gray-400 font-medium hidden sm:inline">• Storefront</span>
                </div>

                <div className="inline-flex items-center gap-1 bg-[#801438]/10 text-[#801438] px-2.5 py-0.5 rounded-full text-[10.5px] font-bold border border-[#801438]/20 shrink-0">
                  <MapPin className="w-3 h-3 text-[#801438]" />
                  <span>Ayodhya Nagar, Bhopal</span>
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
                  alt="Anumeet Cutpiece Storefront - Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-102"
                />

                {/* Subtle Floating Corner Badges on the image */}
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <MapPin className="w-2.5 h-2.5 text-[#ffd978]" />
                  <span>Bhopal, MP (462022)</span>
                </div>

                <div className="absolute top-2.5 right-2.5 bg-black/60 hover:bg-black text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full opacity-90 group-hover/img:opacity-100 transition-opacity backdrop-blur-xs flex items-center gap-1 shadow-sm">
                  <Maximize2 className="w-3 h-3" />
                  <span>Enlarge</span>
                </div>
              </div>

              {/* Card Bottom Designer Footer */}
              <div className="pt-2 mt-2 border-t border-[#e8dfd1] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 min-w-0 truncate text-gray-600">
                  <MapPin className="w-3.5 h-3.5 text-[#801438] shrink-0" />
                  <span className="font-semibold text-gray-700 truncate">Sector A, Kiran Nagar, Bhopal - 462022</span>
                </div>

                <a
                  href="tel:9131264893"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-[#801438] hover:underline shrink-0 ml-2"
                >
                  <Phone className="w-3 h-3 text-[#25d366]" />
                  <span>9131264893</span>
                </a>
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
                alt="Anumeet Cutpiece Storefront - Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal"
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
                  Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal, Madhya Pradesh - 462022
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:9131264893"
                  className="inline-flex items-center gap-1.5 bg-[#0b1b36] hover:bg-[#14294d] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ffd978]" />
                  <span>Call 9131264893</span>
                </a>
                <a
                  href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20ba59] text-white text-xs font-bold px-3 py-2 rounded-xl shadow-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
