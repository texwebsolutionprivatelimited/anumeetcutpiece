import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { cleanPhoneNumber, createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export default function Navbar({
  cartCount,
  onOpenCart,
  whatsappPhone,
  onSelectCategory,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Core fabric & offer category links (Diwali Offers First)
  const navLinks = [
    { name: 'Diwali Offers', href: '#diwali-offers', action: () => onSelectCategory('Diwali Offers'), highlight: true, isDiwali: true },
    { name: 'All Fabrics', href: '#catalog', action: () => onSelectCategory('All Fabrics') },
    { name: 'Silk & Festive', href: '#catalog', action: () => onSelectCategory('Silk & Festive') },
    { name: 'Cotton & Rayon', href: '#catalog', action: () => onSelectCategory('Cotton & Rayon') },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e8dfd1] shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-1.5 sm:gap-3 xl:gap-4">
        
        {/* Brand & Logo */}
        <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0 min-w-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 min-[880px]:w-11 min-[880px]:h-11 xl:w-13 xl:h-13 rounded-full p-0.5 bg-gradient-to-tr from-[#c99738] via-[#ffd978] to-[#801438] shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
            <img
              src="/logo.png"
              alt="Anumeet Cutpiece Logo"
              className="w-full h-full object-cover rounded-full bg-white"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo.png';
              }}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-baseline gap-1 lg:gap-1.5">
              <span className="font-black text-xs sm:text-base min-[880px]:text-lg xl:text-2xl tracking-tight text-[#0b1b36]">
                ANUMEET
              </span>
              <span className="italic font-bold text-[11px] sm:text-sm xl:text-base text-[#801438]">
                Cutpiece
              </span>
            </div>
            <span className="hidden sm:block text-[7.5px] min-[880px]:text-[8.5px] xl:text-[10px] font-medium tracking-wider text-[#8a5d0e] uppercase truncate">
              Quality Fabric, Endless Possibilities
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden min-[880px]:flex items-center gap-2 lg:gap-4 xl:gap-6 text-xs xl:text-sm font-semibold text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                if (link.action) link.action();
              }}
              className={`hover:text-[#801438] transition-colors py-1 px-1.5 whitespace-nowrap relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-[#801438] after:transition-all flex items-center gap-1.5 ${
                link.highlight ? 'text-[#801438] font-bold' : ''
              }`}
            >
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Action Controls (Responsive across 320px, 375px, 425px, 768px) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          
          {/* WhatsApp Direct Header Callout (Icon on mobile, Button with text on tablet/desktop) */}
          <a
            href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white p-0 sm:px-3 sm:py-1.5 rounded-full text-xs font-bold transition-all duration-200 shadow-xs whitespace-nowrap shrink-0"
            title="Order on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span className="hidden sm:inline">Order on WhatsApp</span>
          </a>

          {/* Cart Trigger Button (Icon + Badge on mobile, Pill on tablet/desktop) */}
          <button
            onClick={onOpenCart}
            className="relative w-8 h-8 sm:w-auto flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#c99738] to-[#dfb15b] hover:from-[#b98728] hover:to-[#c99738] text-[#0b1b36] font-bold p-0 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
            aria-label="Open Shopping Cart"
          >
            <div className="relative flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#0b1b36] shrink-0" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#801438] text-white text-[9px] font-black min-w-4 h-4 px-1 rounded-full flex items-center justify-center shadow-xs border border-white">
                  {cartCount}
                </span>
              )}
            </div>
            <span className="hidden sm:inline font-sans">Cart ({cartCount})</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="min-[880px]:hidden w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#801438] rounded-lg shrink-0 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="min-[880px]:hidden bg-[#fffdfa] border-b border-[#e8dfd1] px-4 py-4 space-y-3 animate-fadeIn shadow-lg">
          <div className="flex flex-col space-y-1 text-sm font-semibold text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  if (link.action) link.action();
                  setIsMobileMenuOpen(false);
                }}
                className="py-2.5 px-3 rounded-xl hover:bg-[#faf5eb] hover:text-[#801438] transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <span>{link.name}</span>
                </span>
                <span className="text-gray-400 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-gray-200">
            <a
              href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold py-2.5 rounded-xl shadow-md text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              Direct WhatsApp Order (+{cleanPhoneNumber(whatsappPhone)})
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
