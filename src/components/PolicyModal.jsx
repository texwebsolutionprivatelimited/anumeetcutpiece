import React, { useState } from 'react';
import { X, ShieldCheck, RefreshCw, Truck, FileText, AlertCircle, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_CONFIG } from '../data/products';
import { createGeneralInquiryWhatsAppLink, cleanPhoneNumber } from '../utils/whatsapp';

export default function PolicyModal({ isOpen, onClose, initialTab = 'exchange', whatsappPhone }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#c99738]/40 relative max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="bg-[#faf7f2] border-b border-[#e8dfd1] px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#801438]/10 flex items-center justify-center text-[#801438]">
              <ShieldCheck className="w-4.5 h-4.5" />
            </div>
            <div>
              <h2 id="policy-modal-title" className="text-base sm:text-lg font-black text-[#0b1b36] tracking-tight">
                Store Policies &amp; Terms
              </h2>
              <p className="text-[10px] sm:text-xs text-[#8a5d0e] font-semibold">
                Anumeet Cutpiece • Ayodhya Nagar, Bhopal
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 p-2 bg-[#f4ece1]/60 border-b border-[#e8dfd1] overflow-x-auto text-xs shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('exchange')}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap text-xs ${
              activeTab === 'exchange'
                ? 'bg-[#801438] text-white shadow-xs'
                : 'text-gray-700 hover:bg-white/80'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5 shrink-0" />
            <span>Exchange &amp; Refund</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap text-xs ${
              activeTab === 'terms'
                ? 'bg-[#801438] text-white shadow-xs'
                : 'text-gray-700 hover:bg-white/80'
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span>Terms &amp; Conditions</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('shipping')}
            className={`flex-1 min-w-[130px] flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap text-xs ${
              activeTab === 'shipping'
                ? 'bg-[#801438] text-white shadow-xs'
                : 'text-gray-700 hover:bg-white/80'
            }`}
          >
            <Truck className="w-3.5 h-3.5 shrink-0" />
            <span>Delivery Policy</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed flex-1">
          
          {/* TAB 1: Exchange & Refund Policy */}
          {activeTab === 'exchange' && (
            <div className="space-y-4 animate-fadeIn">
              
              {/* Highlight Alert Box */}
              <div className="bg-[#fff3f3] border border-[#f5c2c7] rounded-2xl p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center gap-2 text-[#801438] font-bold text-sm">
                  <AlertCircle className="w-4.5 h-4.5 shrink-0 text-[#801438]" />
                  <span>Important Notice Regarding Refunds</span>
                </div>
                <p className="text-gray-800 font-medium text-xs leading-relaxed">
                  <strong>No Cash or Online Refunds:</strong> Kharida hua fabric ka cash ya online refund nahi hoga. Fabrics custom cuts (5m/10m) me cut kiye jate hain, isliye cut piece fabrics return/refund ke liye eligible nahi hote.
                </p>
              </div>

              {/* Exchange / Replacement Section */}
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-2xl p-3.5 sm:p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-[#15803d] font-bold text-sm">
                  <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-[#16a34a]" />
                  <span>48 Hours Replacement &amp; Exchange (बदलाव / एक्सचेंज मान्य)</span>
                </div>
                <p className="text-gray-800 text-xs leading-relaxed">
                  Agar aapke parcel me kisi fabric me <strong>manufacturing defect, kata-phata, ya galat item</strong> deliver hua hai, to aap deliver hone ke <strong>48 ghante (48 hours)</strong> ke andar replacement ya exchange karwa sakte hain.
                </p>
                <div className="pt-2 border-t border-[#bbf7d0]/80 space-y-1.5 text-xs">
                  <p className="font-bold text-[#15803d]">Exchange Ki Shartein (Conditions):</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700 pl-1">
                    <li>Fabric <strong>uncut, unwashed, unaltered</strong> (bina sila ya dhula hua) hona chahiye.</li>
                    <li>Parcel open karte samay ka ek chhota photo ya video WhatsApp par share karein.</li>
                    <li>Same fabric ka fresh piece replace kiya jayega, ya customer apni pasand ka dusra fabric choose kar sakte hain.</li>
                  </ul>
                </div>
              </div>

              {/* How to Request Exchange */}
              <div className="bg-[#faf7f2] border border-[#e8dfd1] rounded-2xl p-3.5 sm:p-4 space-y-2">
                <p className="font-bold text-[#0b1b36] text-xs sm:text-sm">
                  Exchange Kaise Request Karein?
                </p>
                <p className="text-xs text-gray-600">
                  Aap seedhe hamare store WhatsApp number par message bhej kar exchange initiate kar sakte hain:
                </p>
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold px-3 py-1.5 rounded-xl text-xs shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp: +{cleanPhoneNumber(whatsappPhone)}</span>
                  </a>
                  <a
                    href="tel:9131264893"
                    className="inline-flex items-center gap-1.5 bg-white border border-gray-300 hover:border-black text-gray-800 font-bold px-3 py-1.5 rounded-xl text-xs"
                  >
                    <Phone className="w-3 h-3 text-[#25d366]" />
                    <span>Call: 9131264893</span>
                  </a>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Terms & Conditions */}
          {activeTab === 'terms' && (
            <div className="space-y-3.5 animate-fadeIn">
              
              <div className="border border-gray-200 rounded-2xl p-3.5 space-y-1.5">
                <h3 className="font-bold text-xs sm:text-sm text-[#0b1b36] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c99738]"></span>
                  1. Continuous Single Cut Guarantee
                </h3>
                <p className="text-xs text-gray-600 pl-3.5">
                  Sabhi 5-meter aur 10-meter lots guaranteed single continuous uncut piece hote hain. Isme beech me koi joint ya piece-cut nahi hota, jo boutique tailoring ke liye bilkul perfect hai.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-3.5 space-y-1.5">
                <h3 className="font-bold text-xs sm:text-sm text-[#0b1b36] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c99738]"></span>
                  2. Wholesale Pricing Policy
                </h3>
                <p className="text-xs text-gray-600 pl-3.5">
                  Website par dikhaye gaye sabhi daam genuine wholesale &amp; retail cut piece rates hain. Bulk orders ya boutique supply ke liye additional discount WhatsApp par discuss kiya ja sakta hai.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-3.5 space-y-1.5">
                <h3 className="font-bold text-xs sm:text-sm text-[#0b1b36] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c99738]"></span>
                  3. Color &amp; Screen Variance Disclaimer
                </h3>
                <p className="text-xs text-gray-600 pl-3.5">
                  Mobile screen brightness aur digital lighting ki wajah se actual fabric color me 5% se 10% tak ka natural color variance ho sakta hai. Hamari photos asli dukaan ke fabric ki hain.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-3.5 space-y-1.5">
                <h3 className="font-bold text-xs sm:text-sm text-[#0b1b36] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c99738]"></span>
                  4. Payment Modes Accepted
                </h3>
                <p className="text-xs text-gray-600 pl-3.5">
                  Cash on Delivery (Bhopal local within 3 KM radius), UPI (Google Pay, PhonePe, Paytm, BHIM) aur Bank Transfer accept kiya jata hai.
                </p>
              </div>

            </div>
          )}

          {/* TAB 3: Delivery Policy */}
          {activeTab === 'shipping' && (
            <div className="space-y-3.5 animate-fadeIn">
              
              <div className="bg-[#faf7f2] border border-[#e8dfd1] rounded-2xl p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center gap-2 text-[#801438] font-bold text-xs sm:text-sm">
                  <Truck className="w-4.5 h-4.5 text-[#25d366]" />
                  <span>Free Home Delivery (Within 3 KM Radius)</span>
                </div>
                <p className="text-xs text-gray-700">
                  Ayodhya Nagar Bhopal dukaan se <strong>3 KM ke radius</strong> me ₹500 ya usse zyada ke order par <strong>FREE Home Delivery</strong> milti hai (Same Day / Next Day).
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center gap-2 text-[#0b1b36] font-bold text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-[#801438]" />
                  <span>Delivery Beyond 3 KM in Bhopal</span>
                </div>
                <p className="text-xs text-gray-600">
                  3 KM se bahar (jaise MP Nagar, New Market, Kolar, Bairagarh, etc.) doori ke hisaab se nominal bike courier charges lagte hain.
                </p>
              </div>

              <div className="border border-gray-200 rounded-2xl p-3.5 sm:p-4 space-y-2">
                <div className="flex items-center gap-2 text-[#0b1b36] font-bold text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#25d366]" />
                  <span>Pan-India Courier Delivery</span>
                </div>
                <p className="text-xs text-gray-600">
                  Pure Bharat (Pan-India) me kisi bhi rajya ya city me tracked courier dwara delivery uplabdh hai (3 se 5 din me delivery).
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-3 text-[11px] text-gray-600">
                <strong>Official Physical Store Address:</strong><br />
                {STORE_CONFIG.address}
              </div>

            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="bg-[#faf7f2] border-t border-[#e8dfd1] px-4 sm:px-6 py-3 flex items-center justify-between shrink-0">
          <span className="text-[10px] text-gray-500 font-medium">
            Official Domain: <strong>anumeetcutpiece.in</strong>
          </span>
          <button
            type="button"
            onClick={onClose}
            className="bg-[#0b1b36] hover:bg-[#801438] text-white font-bold px-4 py-1.5 rounded-xl text-xs transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
}

