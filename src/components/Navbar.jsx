import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronRight, Phone, Sparkles } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { cleanPhoneNumber, createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export default function Navbar({
  cartCount,
  onOpenCart,
  whatsappPhone,
  onSelectCategory,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Core fabric & offer category links (Diwali Offers First)
  const navLinks = [
    { name: 'Diwali Offers', href: '#diwali-offers', action: () => onSelectCategory('Diwali Offers'), highlight: true, isDiwali: true },
    { name: 'All Fabrics', href: '#catalog', action: () => onSelectCategory('All Fabrics') },
    { name: 'Silk & Festive', href: '#catalog', action: () => onSelectCategory('Silk & Festive') },
    { name: 'Cotton & Rayon', href: '#catalog', action: () => onSelectCategory('Cotton & Rayon') },
  ];

  return (
    <header
      className={`w-full bg-white/95 backdrop-blur-md border-b border-[#e8dfd1] transition-shadow duration-200 relative ${
        isScrolled ? 'shadow-md bg-white' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 flex items-center justify-between gap-1.5 sm:gap-3 xl:gap-4">
        
        {/* Brand & Logo */}
        <a href="#" className="flex items-center gap-1.5 sm:gap-2.5 group shrink-0 min-w-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 min-[880px]:w-11 min-[880px]:h-11 xl:w-13 xl:h-13 rounded-full p-0.5 bg-gradient-to-tr from-[#c99738] via-[#ffd978] to-[#801438] shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0">
            <img
              src="/logo.webp"
              alt="Anumeet Cutpiece Logo"
              className="w-full h-full object-cover rounded-full bg-white"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo.webp';
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

        {/* Action Controls: WhatsApp & Cart are hidden on mobile (<sm) because StickyMobileBar has them at the bottom */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* WhatsApp Direct Header Callout (Hidden on mobile, visible on tablet/desktop) */}
          <a
            href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            title="Order on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Cart Trigger Button (Hidden on mobile, visible on tablet/desktop) */}
          <button
            onClick={onOpenCart}
            className="hidden sm:flex relative items-center justify-center gap-1.5 bg-gradient-to-r from-[#c99738] to-[#dfb15b] hover:from-[#b98728] hover:to-[#c99738] text-[#0b1b36] font-bold px-3.5 py-1.5 rounded-full text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer whitespace-nowrap shrink-0"
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
            <span className="font-sans">Cart ({cartCount})</span>
          </button>

          {/* Animated Hamburger Button (Always accessible on mobile & tablet) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`min-[880px]:hidden relative w-9.5 h-9.5 sm:w-10 sm:h-10 flex flex-col items-center justify-center rounded-xl transition-all duration-300 cursor-pointer active:scale-95 border ${
              isMobileMenuOpen
                ? 'bg-[#801438]/10 border-[#801438]/25 text-[#801438]'
                : 'bg-[#faf7f2] hover:bg-[#f3ece0] border-[#ebdccb] text-[#0b1b36]'
            }`}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-5 h-3.5 relative flex flex-col justify-between items-center pointer-events-none">
              {/* Top Bar */}
              <span
                className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                  isMobileMenuOpen
                    ? 'rotate-45 translate-y-[6px] bg-[#801438]'
                    : 'bg-[#0b1b36]'
                }`}
              />
              {/* Middle Bar */}
              <span
                className={`w-5 h-[2px] rounded-full transition-all duration-200 ease-in-out ${
                  isMobileMenuOpen
                    ? 'opacity-0 scale-x-0 bg-[#801438]'
                    : 'opacity-100 bg-[#0b1b36]'
                }`}
              />
              {/* Bottom Bar */}
              <span
                className={`w-5 h-[2px] rounded-full transition-all duration-300 ease-in-out transform origin-center ${
                  isMobileMenuOpen
                    ? '-rotate-45 -translate-y-[6px] bg-[#801438]'
                    : 'bg-[#0b1b36]'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu & Backdrop */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="min-[880px]:hidden fixed inset-0 top-16 sm:top-18 bg-black/35 backdrop-blur-2xs -z-10 transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer content */}
          <div className="min-[880px]:hidden relative z-40 bg-[#fffdfa] border-b border-[#e8dfd1] px-3.5 sm:px-5 py-3 sm:py-3.5 space-y-2.5 animate-fadeIn shadow-xl">
            {/* Navigation links */}
            <div className="flex flex-col space-y-1 text-sm font-semibold text-gray-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    if (link.action) link.action();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-3 rounded-xl transition-all flex items-center justify-between ${
                    link.highlight
                      ? 'bg-[#801438]/8 text-[#801438] font-bold border border-[#801438]/15'
                      : 'hover:bg-[#faf5eb] hover:text-[#801438] active:bg-[#f3ece0]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.isDiwali && <Sparkles className="w-4 h-4 text-[#c99738] shrink-0" />}
                    <span>{link.name}</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    {link.isDiwali && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#801438] text-white px-1.5 py-0.5 rounded-full">
                        Festive
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </a>
              ))}
            </div>

            {/* Bottom Responsive Action Button */}
            <div className="pt-2 border-t border-[#e8dfd1]/80 space-y-2">
              <a
                href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between gap-2 bg-gradient-to-r from-[#25d366] to-[#1ebe5b] hover:from-[#20ba59] hover:to-[#17a84e] active:scale-[0.98] text-white font-bold py-2.5 px-3 sm:px-3.5 rounded-xl shadow-xs transition-all duration-200"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold truncate">Direct WhatsApp Order</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-bold bg-black/15 px-2 py-0.5 rounded-md shrink-0 whitespace-nowrap">
                  +{cleanPhoneNumber(whatsappPhone)}
                </span>
              </a>

              {/* Store location & Call link */}
              <div className="flex items-center justify-between text-[11px] text-gray-500 px-1 pt-0.5">
                <span className="truncate">📍 Ayodhya Nagar, Bhopal</span>
                <a
                  href={`tel:+${cleanPhoneNumber(whatsappPhone)}`}
                  className="inline-flex items-center gap-1 text-[#801438] font-bold hover:underline shrink-0"
                >
                  <Phone className="w-3 h-3" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
