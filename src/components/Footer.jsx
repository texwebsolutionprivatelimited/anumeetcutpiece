import React from 'react';
import { Phone, MapPin, Truck, ShieldCheck, Heart, Sparkles, RefreshCw } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_CONFIG } from '../data/products';
import { createGeneralInquiryWhatsAppLink, cleanPhoneNumber } from '../utils/whatsapp';

export default function Footer({ whatsappPhone, onOpenPolicy }) {
  return (
    <footer className="bg-[#f7f2e8] text-[#1a2538] border-t-2 border-[#c99738]/40 pt-7 sm:pt-10 pb-14 sm:pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid: 1 col on mobile, 2 col on tablet (768px), 12 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-[#e5d8c3]">
          
          {/* Brand Col */}
          <div className="md:col-span-1 lg:col-span-5 space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#c99738] via-[#ffd978] to-[#801438] shrink-0">
                <img
                  src="/logo.webp"
                  alt="Anumeet Cutpiece Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-1 sm:gap-1.5">
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-[#0b1b36]">
                    ANUMEET
                  </h3>
                  <span className="text-[#801438] text-sm sm:text-base font-bold">
                    Cutpiece
                  </span>
                </div>
                <p className="text-[9.5px] sm:text-xs text-[#8a5d0e] tracking-widest uppercase font-bold">
                  Quality Fabric, Endless Possibilities
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-sm">
              Anumeet Cutpiece — Your premier wholesale &amp; retail destination for premium cut piece fabrics in Bhopal. Feel the Fabric, Live the Fashion.
            </p>

            {/* Address & Contact Details with Google Maps Directions */}
            <address className="not-italic space-y-2 text-[11px] sm:text-xs text-gray-800 bg-white/80 p-3 rounded-2xl border border-[#e8dfd1] max-w-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#801438] shrink-0 mt-0.5" />
                <span>
                  <strong>Store Address:</strong>{' '}
                  <a
                    href="https://maps.google.com/?q=Hno-13+Sukh+Sagar+Phase-1+Kiran+Nagar+Ayodhya+Nagar+Bhopal+Madhya+Pradesh+462022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#801438] hover:underline"
                    title="View Anumeet Cutpiece on Google Maps"
                  >
                    Hno-13, Sukh Sagar Phase-1, Kiran Nagar, Ayodhya Nagar, Bhopal - 462022 ↗
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#25d366] shrink-0" />
                <span>
                  <strong>Call / Order:</strong>{' '}
                  <a href="tel:9131264893" className="font-bold text-[#0b1b36] hover:underline">
                    9131264893
                  </a>
                </span>
              </div>
              <div className="pt-1.5 border-t border-gray-100 text-[10px] text-gray-600 leading-tight">
                <span className="font-semibold text-[#801438]">Bhopal Local Coverage:</span> Ayodhya Nagar, Indrapuri, BHEL, Anand Nagar, MP Nagar, New Market &amp; Pan-India Courier.
              </div>
            </address>

            {/* Direct WhatsApp Callout: Full width on mobile, auto on desktop, zero drop shadow */}
            <div className="pt-1">
              <a
                href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold px-4 py-2.5 rounded-xl sm:rounded-full text-xs transition-all whitespace-nowrap cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">WhatsApp Booking: +{cleanPhoneNumber(whatsappPhone)}</span>
              </a>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="md:col-span-1 lg:col-span-3 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#801438]">
              Popular Fabrics
            </h4>
            <ul className="space-y-2 text-xs text-gray-700 font-medium">
              <li><a href="#catalog" className="hover:text-[#801438] transition-colors">Chanderi Silk (₹899 / 5m)</a></li>
              <li><a href="#catalog" className="hover:text-[#801438] transition-colors">Pure Georgette (₹270 / 5m)</a></li>
              <li><a href="#catalog" className="hover:text-[#801438] transition-colors">Plain &amp; Printed Crepe (₹175 / 5m)</a></li>
              <li><a href="#catalog" className="hover:text-[#801438] transition-colors">Organza &amp; Velvet (5m Cuts)</a></li>
              <li><a href="#diwali-offers" className="hover:text-[#801438] transition-colors text-[#801438] font-bold">Diwali Dhamaka Offers (From ₹125)</a></li>
            </ul>
          </div>

          {/* Delivery & Shop Policies */}
          <div className="md:col-span-2 lg:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#801438]">
              Shop Policies &amp; Trust
            </h4>
            <div className="space-y-2 text-[11px] sm:text-xs text-gray-700">
              <div className="flex items-start gap-2 bg-[#fff7f7] p-2.5 rounded-xl border border-[#f5c2c7]">
                <RefreshCw className="w-4 h-4 text-[#801438] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#801438]">No Refund • 48h Easy Exchange:</strong> Cut pieces are non-refundable once cut. Free replacement/exchange available within 48h for manufacturing defects.{' '}
                  <button
                    type="button"
                    onClick={() => onOpenPolicy && onOpenPolicy('exchange')}
                    className="text-[#801438] font-bold underline hover:text-[#0b1b36] cursor-pointer inline"
                  >
                    View Details ↗
                  </button>
                </span>
              </div>

              <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-[#e8dfd1]">
                <Truck className="w-4 h-4 text-[#25d366] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0b1b36]">Free Delivery (Within 3 KM):</strong> Orders ₹500+ free in Bhopal. Pan-India tracked courier.
                </span>
              </div>

              <div className="flex items-start gap-2 bg-white/70 p-2.5 rounded-xl border border-[#e8dfd1]">
                <ShieldCheck className="w-4 h-4 text-[#c99738] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0b1b36]">Continuous Cuts:</strong> Guaranteed seamless 5m &amp; 10m uncut continuous fabrics.
                </span>
              </div>
            </div>

            {/* Quick Policy Modal Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#801438] font-semibold">
              <button
                type="button"
                onClick={() => onOpenPolicy && onOpenPolicy('exchange')}
                className="hover:underline cursor-pointer"
              >
                Refund &amp; Exchange Policy
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenPolicy && onOpenPolicy('terms')}
                className="hover:underline cursor-pointer"
              >
                Terms &amp; Conditions
              </button>
              <span>•</span>
              <button
                type="button"
                onClick={() => onOpenPolicy && onOpenPolicy('shipping')}
                className="hover:underline cursor-pointer"
              >
                Delivery Policy
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-3.5 sm:pt-5 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-3 text-[11px] sm:text-xs text-gray-600 font-medium text-center sm:text-left">
          <p>© {new Date().getFullYear()} Anumeet Cutpiece. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#801438] fill-current" />
            <span>for Indian Textile Boutiques &amp; Tailors</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
