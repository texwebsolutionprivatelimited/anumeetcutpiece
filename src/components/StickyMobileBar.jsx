import React from 'react';
import { ShoppingBag } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { createGeneralInquiryWhatsAppLink } from '../utils/whatsapp';

export default function StickyMobileBar({ cartCount, cartTotal, onOpenCart, whatsappPhone }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e8dfd1] p-2.5 sm:hidden shadow-xl flex items-center gap-2">
      
      {/* Direct WhatsApp Callout */}
      <a
        href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 bg-[#25d366] active:bg-[#1fa950] text-white font-bold py-2.5 px-3 rounded-xl text-xs shadow-sm"
      >
        <WhatsAppIcon className="w-4 h-4 shrink-0" />
        <span className="truncate">WhatsApp Order</span>
      </a>

      {/* Cart Button */}
      <button
        onClick={onOpenCart}
        className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-[#c99738] to-[#dfb15b] active:brightness-95 text-[#0b1b36] font-bold py-2.5 px-3 rounded-xl text-xs shadow-sm"
      >
        <ShoppingBag className="w-4 h-4 shrink-0" />
        <span className="truncate">Cart ({cartCount}) • ₹{cartTotal}</span>
      </button>

    </div>
  );
}
