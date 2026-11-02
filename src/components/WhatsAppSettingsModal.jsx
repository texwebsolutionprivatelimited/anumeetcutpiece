import React, { useState } from 'react';
import { X, Check, Phone, Settings, AlertCircle } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { cleanPhoneNumber } from '../utils/whatsapp';

export default function WhatsAppSettingsModal({ isOpen, onClose, currentPhone, onSavePhone }) {
  const [phoneInput, setPhoneInput] = useState(currentPhone || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitized = cleanPhoneNumber(phoneInput);
    onSavePhone(sanitized);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-2xl border border-[#c99738]/40 relative">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black p-1 rounded-full"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-green-50 border border-green-200 text-[#0b1b36] rounded-2xl flex items-center justify-center">
            <WhatsAppIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-[#0b1b36]">
              WhatsApp Number Settings
            </h3>
            <p className="text-xs text-gray-500">
              Configure the store's receiving WhatsApp number
            </p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 text-xs text-amber-900 mb-4 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            All customer orders, inquiries, and checkout carts will be sent directly to this WhatsApp number.
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              WhatsApp Business Mobile Number:
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden focus-within:border-[#c99738] bg-white">
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-2.5 border-r border-gray-300">
                +91 (India)
              </span>
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={phoneInput}
                onChange={(e) => setPhoneInput(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm text-[#0b1b36] font-mono focus:outline-hidden"
              />
            </div>
            <p className="text-[11px] text-gray-400 mt-1">
              Currently Active: +{cleanPhoneNumber(currentPhone)}
            </p>
          </div>

          {savedSuccess && (
            <div className="flex items-center gap-2 text-xs font-bold text-green-700 bg-green-50 p-2.5 rounded-xl border border-green-200">
              <Check className="w-4 h-4" />
              <span>WhatsApp number saved successfully!</span>
            </div>
          )}

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-2.5 rounded-xl text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#0b1b36] hover:bg-[#14294d] text-[#ffd978] font-bold py-2.5 rounded-xl text-xs shadow-md"
            >
              Save Number
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
