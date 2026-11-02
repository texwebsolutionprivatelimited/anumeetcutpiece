import React from 'react';
import { Phone, MapPin, Truck, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_CONFIG } from '../data/products';
import { createGeneralInquiryWhatsAppLink, cleanPhoneNumber } from '../utils/whatsapp';

export default function Footer({ whatsappPhone }) {
  return (
    <footer className="bg-[#f7f2e8] text-[#1a2538] border-t-2 border-[#c99738]/40 pt-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-[#e5d8c3]">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full p-0.5 bg-gradient-to-tr from-[#c99738] via-[#ffd978] to-[#801438] shrink-0 shadow-sm">
                <img
                  src="/logo.png"
                  alt="Anumeet Cutpiece Logo"
                  className="w-full h-full object-cover rounded-full bg-white"
                />
              </div>
              <div>
                <div className="flex items-baseline gap-1.5">
                  <h3 className="text-xl font-black tracking-tight text-[#0b1b36]">
                    ANUMEET
                  </h3>
                  <span className="text-[#801438] text-base font-bold">
                    Cutpiece
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-[#8a5d0e] tracking-widest uppercase font-bold">
                  Quality Fabric, Endless Possibilities
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-sm">
              Anumeet Cutpiece — Your premier wholesale &amp; retail destination for premium cut piece fabrics in Bhopal. Feel the Fabric, Live the Fashion.
            </p>

            {/* Address & Contact Details */}
            <div className="space-y-2 text-xs text-gray-800 bg-white/70 p-3 rounded-2xl border border-[#e8dfd1] max-w-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#801438] shrink-0 mt-0.5" />
                <span>
                  <strong>Store Address:</strong> Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal, Madhya Pradesh - 462022
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
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold px-4 py-2.5 rounded-full text-xs shadow-md transition-all active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp Booking: +{cleanPhoneNumber(whatsappPhone)}</span>
            </a>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-3 space-y-3">
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

          {/* Delivery & Policies */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#801438]">
              Delivery &amp; Shop Policy
            </h4>
            <div className="space-y-2 text-xs text-gray-700">
              <div className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-[#e8dfd1]">
                <Truck className="w-4 h-4 text-[#801438] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0b1b36]">Free Delivery (Within 3 KM):</strong> Free home delivery on orders of ₹500+ within 3 KM radius of our shop. Charges apply beyond 3 KM.
                </span>
              </div>
              <div className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-[#e8dfd1]">
                <MapPin className="w-4 h-4 text-[#0d7a38] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0b1b36]">Pan-India Delivery:</strong> Reliable tracked courier delivery anywhere across all of India!
                </span>
              </div>
              <div className="flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-[#e8dfd1]">
                <ShieldCheck className="w-4 h-4 text-[#c99738] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#0b1b36]">Continuous Cuts:</strong> Guaranteed seamless 5m &amp; 10m uncut continuous fabrics.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 font-medium">
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
