import React, { useState, useEffect } from 'react';
import {
  X,
  Trash2,
  ShoppingBag,
  Truck,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  MapPin,
  User,
  Phone,
  Home,
  Palette,
  Camera,
  FileText,
  ShieldCheck,
  Check,
  RotateCcw,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { STORE_CONFIG } from '../data/products';
import { createCartWhatsAppLink } from '../utils/whatsapp';
import confetti from 'canvas-confetti';

const INDIAN_STATES = [
  'Madhya Pradesh',
  'Uttar Pradesh',
  'Rajasthan',
  'Maharashtra',
  'Gujarat',
  'Delhi',
  'Bihar',
  'Chhattisgarh',
  'Haryana',
  'Punjab',
  'West Bengal',
  'Karnataka',
  'Tamil Nadu',
  'Telangana',
  'Andhra Pradesh',
  'Kerala',
  'Odisha',
  'Jharkhand',
  'Assam',
  'Uttarakhand',
  'Himachal Pradesh',
  'Goa',
  'Jammu & Kashmir',
  'Ladakh',
  'Chandigarh',
  'Puducherry',
  'Tripura',
  'Meghalaya',
  'Manipur',
  'Nagaland',
  'Mizoram',
  'Sikkim',
  'Arunachal Pradesh',
  'Other State / UT',
];

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems = [],
  directBuyItem = null,
  onResetDirectBuy,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  whatsappPhone,
}) {
  // Steps:
  // 1: Selected Items Review
  // 2: Fabric Color & Notes (Optional)
  // 3: Customer Delivery Details (Name, Phone, Address, State Dropdown, City, Pincode)
  // 4: Price Details & Send Order
  // 5: Thank You Screen
  const [currentStep, setCurrentStep] = useState(1);

  // Customer form state
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    phone: '',
    address: '',
    city: 'Bhopal',
    state: 'Madhya Pradesh',
    pincode: '',
    color: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');
  const [sentTargetPhone, setSentTargetPhone] = useState('9131264893');

  // Active items: either direct buy item or regular cart items
  const activeItems = directBuyItem ? [directBuyItem] : cartItems;
  const isDirectBuy = !!directBuyItem;

  const subtotal = activeItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalItemCount = activeItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Reset to Step 1 and lock background page scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setFormErrors({});
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow || '';
      };
    }
  }, [isOpen, directBuyItem]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateDeliveryDetails = () => {
    const errors = {};
    if (!customerDetails.name.trim()) {
      errors.name = 'Please enter your full name';
    }
    const cleanPhone = customerDetails.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!customerDetails.address.trim()) {
      errors.address = 'Please enter your house/shop address';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSendOrderToWhatsApp = (target = 'shop') => {
    if (activeItems.length === 0) return;

    let targetPhone = '919131264893';
    if (target === 'customer' && customerDetails.phone) {
      targetPhone = customerDetails.phone;
      setSentTargetPhone(customerDetails.phone);
    } else {
      targetPhone = STORE_CONFIG.phone || '919131264893';
      setSentTargetPhone('9131264893');
    }

    const link = createCartWhatsAppLink(
      activeItems,
      customerDetails,
      targetPhone,
      STORE_CONFIG.freeDeliveryThreshold
    );
    setLastWhatsAppUrl(link);

    // Open WhatsApp in a new tab
    window.open(link, '_blank');

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c99738', '#ffd978', '#25d366', '#801438'],
      });
    } catch (e) {
      // silent
    }

    // Advance to Thank You screen
    setCurrentStep(5);
  };

  const handleCloseDrawer = () => {
    if (onResetDirectBuy) onResetDirectBuy();
    onClose();
  };

  const handleFinishAndContinueShopping = () => {
    if (!isDirectBuy && onClearCart) {
      onClearCart();
    }
    handleCloseDrawer();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-[#c99738]/30">
        
        {/* Drawer Header with Step Tracker */}
        <div className="p-4 bg-[#fffbf2] text-[#0b1b36] border-b border-[#e8dfd1] shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-[#801438] text-white rounded-xl font-bold shadow-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-bold text-base sm:text-lg text-[#0b1b36]">
                  {isDirectBuy ? 'Direct Checkout' : `My Cart (${totalItemCount})`}
                </h2>
                <p className="text-[11px] text-[#801438] font-bold">
                  {currentStep === 1 && 'Step 1 of 4: Selected Items'}
                  {currentStep === 2 && 'Step 2 of 4: Fabric Preferences (Optional)'}
                  {currentStep === 3 && 'Step 3 of 4: Delivery Details'}
                  {currentStep === 4 && 'Step 4 of 4: Price & Send Order'}
                  {currentStep === 5 && 'Order Completed'}
                </p>
              </div>
            </div>

            <button
              onClick={handleCloseDrawer}
              className="p-2 text-gray-500 hover:text-black rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Progress Bar (for Steps 1, 2, 3, 4) */}
          {currentStep <= 4 && (
            <div className="grid grid-cols-4 gap-1 mt-3 pt-2.5 border-t border-amber-200/50 text-[9px] sm:text-[10px] font-bold">
              <div
                className={`py-1 text-center rounded-md border transition-all truncate ${
                  currentStep >= 1
                    ? 'bg-[#0b1b36] text-[#ffd978] border-[#0b1b36]'
                    : 'bg-white text-gray-400 border-gray-200'
                }`}
              >
                1. Items
              </div>
              <div
                className={`py-1 text-center rounded-md border transition-all truncate ${
                  currentStep >= 2
                    ? 'bg-[#0b1b36] text-[#ffd978] border-[#0b1b36]'
                    : 'bg-white text-gray-400 border-gray-200'
                }`}
              >
                2. Color
              </div>
              <div
                className={`py-1 text-center rounded-md border transition-all truncate ${
                  currentStep >= 3
                    ? 'bg-[#0b1b36] text-[#ffd978] border-[#0b1b36]'
                    : 'bg-white text-gray-400 border-gray-200'
                }`}
              >
                3. Details
              </div>
              <div
                className={`py-1 text-center rounded-md border transition-all truncate ${
                  currentStep >= 4
                    ? 'bg-[#0b1b36] text-[#ffd978] border-[#0b1b36]'
                    : 'bg-white text-gray-400 border-gray-200'
                }`}
              >
                4. Price
              </div>
            </div>
          )}
        </div>

        {/* ================= STEP 1: SELECTED ITEMS ================= */}
        {currentStep === 1 && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* Free delivery rule banner */}
              <div className="p-3 bg-gradient-to-r from-[#faf7f2] to-[#f4ebe1] rounded-2xl border border-[#c99738]/30 text-xs">
                <div className="flex items-center gap-1.5 font-bold text-[#0b1b36]">
                  <Truck className="w-4 h-4 text-[#801438] shrink-0" />
                  <span>FREE Home Delivery on ₹500+</span>
                </div>
                <p className="text-[11px] text-gray-600 mt-1 leading-snug">
                  Valid within 3 KM radius of our shop (Ayodhya Nagar, Bhopal). Beyond 3 KM, standard courier charges apply. Pan-India delivery available!
                </p>
              </div>

              {activeItems.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag className="w-12 h-12 mx-auto text-gray-300 mb-3" />
                  <p className="text-base font-bold text-gray-700">Your Shopping Bag is Empty</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Select fabrics from our wholesale catalog and add them to cart.
                  </p>
                  <button
                    onClick={handleCloseDrawer}
                    className="mt-4 bg-[#0b1b36] text-[#ffd978] px-5 py-2.5 rounded-xl text-xs font-bold cursor-pointer"
                  >
                    Explore Fabrics
                  </button>
                </div>
              ) : (
                activeItems.map((item) => (
                  <div
                    key={`${item.id}-${item.length}`}
                    className="flex items-center gap-3 p-3 rounded-2xl border border-gray-200 bg-white shadow-xs"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-xl shrink-0 bg-gray-100 border border-gray-200"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-[#0b1b36] truncate">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#801438] font-semibold">
                        Cut: {item.length || item.unit}
                      </p>
                      <p className="text-xs font-black text-gray-900 mt-0.5">
                        ₹{item.price * item.quantity}
                        <span className="text-[10px] text-gray-400 font-normal ml-1">
                          (₹{item.price}/ea)
                        </span>
                      </p>
                    </div>

                    {/* Quantity Selector */}
                    {!isDirectBuy ? (
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.length, item.quantity - 1)}
                          className="px-2.5 py-1 hover:bg-gray-200 text-xs font-bold cursor-pointer"
                          title="Decrease"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold font-mono">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, item.length, item.quantity + 1)}
                          className="px-2.5 py-1 hover:bg-gray-200 text-xs font-bold cursor-pointer"
                          title="Increase"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded-md">
                        Qty: {item.quantity}
                      </span>
                    )}

                    {/* Remove Item */}
                    {!isDirectBuy && (
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id, item.length)}
                        className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Step 1 Footer */}
            {activeItems.length > 0 && (
              <div className="p-4 bg-[#faf7f2] border-t border-gray-200 space-y-2.5 shrink-0">
                <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-[#0b1b36] px-1">
                  <span>Items Total ({totalItemCount} {totalItemCount === 1 ? 'item' : 'items'}):</span>
                  <span className="text-base sm:text-lg font-black">₹{subtotal}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-full flex items-center justify-center gap-2 bg-[#0b1b36] hover:bg-[#152a4d] active:scale-95 text-[#ffd978] font-bold py-3.5 px-4 rounded-2xl text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">Continue to Fabric Preferences</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </button>

                {!isDirectBuy && (
                  <button
                    type="button"
                    onClick={onClearCart}
                    className="w-full text-center text-[11px] text-gray-400 hover:text-red-500 py-0.5 cursor-pointer"
                  >
                    Clear Entire Cart
                  </button>
                )}
              </div>
            )}
          </>
        )}

        {/* ================= STEP 2: FABRIC PREFERENCES (COLOR & NOTES - OPTIONAL) ================= */}
        {currentStep === 2 && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              <div className="bg-[#fffdfa] border border-[#c99738]/30 p-3 rounded-2xl">
                <h3 className="text-xs font-bold text-[#0b1b36] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <Palette className="w-3.5 h-3.5 text-[#801438]" />
                  <span>Fabric Color &amp; Customization (Optional)</span>
                </h3>
                <p className="text-[11px] text-gray-500 leading-snug">
                  Specify your required fabric shade or share instructions. Both fields below are completely optional!
                </p>
              </div>

              {/* Fabric Color Box */}
              <div className="bg-white border border-gray-200 rounded-2xl p-3.5 space-y-2.5 shadow-xs">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-[#0b1b36] flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-[#801438]" />
                    <span>Fabric Color / Shade Required</span>
                  </label>
                  <span className="text-[10px] text-gray-400 font-medium">Optional</span>
                </div>

                <input
                  type="text"
                  name="color"
                  placeholder="e.g. Rani Pink, Royal Blue, Bottle Green, Maroon, Red, Golden..."
                  value={customerDetails.color}
                  onChange={handleInputChange}
                  className="w-full bg-[#faf7f2] border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#c99738]"
                />

                {/* Quick Color Pills */}
                <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                  <span className="text-[10px] font-bold text-gray-500">Quick pick:</span>
                  {['Rani Pink', 'Royal Blue', 'Bottle Green', 'Maroon', 'Red', 'Golden', 'Black', 'Peach', 'Lavender'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCustomerDetails((prev) => ({ ...prev, color: c }))}
                      className={`text-[10px] px-2.5 py-0.5 rounded-full border transition-all cursor-pointer font-medium ${
                        customerDetails.color === c
                          ? 'bg-[#0b1b36] text-[#ffd978] border-[#0b1b36]'
                          : 'bg-white text-gray-600 border-gray-200 hover:border-[#c99738]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>

                {/* WhatsApp Photo / Color Reference Callout Notice */}
                <div className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-xl p-2.5 flex items-start gap-2.5 text-[11px] text-gray-700 mt-2">
                  <Camera className="w-4 h-4 text-[#25d366] shrink-0 mt-0.5" />
                  <div className="leading-snug">
                    <p className="font-bold text-[#0b1b36]">Want an exact matching shade or color?</p>
                    <p className="text-gray-600 text-[10.5px] mt-0.5">
                      Aap apna manpasand colour yahan likh sakte hain, ya WhatsApp par hume seedha colour ki image / matching kapde ki photo send kar dijiye!
                    </p>
                    <p className="text-[10px] text-gray-500 italic mt-0.5">
                      (You can also write your color above or send sample photos directly on WhatsApp!)
                    </p>
                  </div>
                </div>
              </div>

              {/* Special Instructions & Notes Box */}
              <div className="bg-white border border-gray-200 rounded-2xl p-3.5 space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <label className="text-[11px] font-bold text-[#0b1b36] flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#801438]" />
                    <span>Special Notes &amp; Instructions</span>
                  </label>
                  <span className="text-[10px] text-gray-400 font-medium">Optional</span>
                </div>

                <textarea
                  name="notes"
                  rows={2}
                  placeholder="e.g. Need matching astar / lining fabric, call before delivery, urgent wedding requirement..."
                  value={customerDetails.notes}
                  onChange={handleInputChange}
                  className="w-full bg-[#faf7f2] border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#c99738]"
                />
              </div>
            </div>

            {/* Step 2 Footer */}
            <div className="p-4 bg-[#faf7f2] border-t border-gray-200 flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setCurrentStep(1)}
                className="w-1/3 flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-3 px-3 rounded-2xl text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Back</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#0b1b36] hover:bg-[#152a4d] active:scale-95 text-[#ffd978] font-bold py-3 px-3 sm:px-4 rounded-2xl text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Continue to Details</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </>
        )}

        {/* ================= STEP 3: CUSTOMER DELIVERY DETAILS (WITH STATE DROPDOWN) ================= */}
        {currentStep === 3 && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              <div className="bg-[#fffdfa] border border-[#c99738]/30 p-3 rounded-2xl">
                <h3 className="text-xs font-bold text-[#0b1b36] uppercase tracking-wider flex items-center gap-1.5 mb-1">
                  <User className="w-3.5 h-3.5 text-[#801438]" />
                  <span>Customer &amp; Delivery Address</span>
                </h3>
                <p className="text-[11px] text-gray-500 leading-snug">
                  Please provide your name, phone number, address, and state for accurate delivery across India.
                </p>
              </div>

              {/* Input Form Fields */}
              <div className="space-y-3 text-xs">
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Pooja Sharma / Shabana Khan"
                      value={customerDetails.name}
                      onChange={handleInputChange}
                      className={`w-full bg-[#faf7f2] border rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden ${
                        formErrors.name
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-gray-300 focus:border-[#c99738]'
                      }`}
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-[10px] text-red-500 mt-0.5 font-medium">{formErrors.name}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Mobile / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9131264893 (10 digits)"
                      value={customerDetails.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-[#faf7f2] border rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden ${
                        formErrors.phone
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-gray-300 focus:border-[#c99738]'
                      }`}
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-[10px] text-red-500 mt-0.5 font-medium">{formErrors.phone}</p>
                  )}
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    Delivery Address (House / Shop No. &amp; Street) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Home className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <textarea
                      name="address"
                      rows={2}
                      placeholder="e.g. House No. 12, Kiran Nagar, Near Mandir, Ayodhya Nagar..."
                      value={customerDetails.address}
                      onChange={handleInputChange}
                      className={`w-full bg-[#faf7f2] border rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm focus:outline-hidden ${
                        formErrors.address
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-gray-300 focus:border-[#c99738]'
                      }`}
                    />
                  </div>
                  {formErrors.address && (
                    <p className="text-[10px] text-red-500 mt-0.5 font-medium">{formErrors.address}</p>
                  )}
                </div>

                {/* State Dropdown */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 mb-1">
                    State <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <select
                      name="state"
                      value={customerDetails.state}
                      onChange={handleInputChange}
                      className="w-full bg-[#faf7f2] border border-gray-300 rounded-xl pl-9 pr-3 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:border-[#c99738] cursor-pointer font-medium text-gray-800"
                    >
                      {INDIAN_STATES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* City & Pincode Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      City / Area
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Bhopal"
                      value={customerDetails.city}
                      onChange={handleInputChange}
                      className="w-full bg-[#faf7f2] border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#c99738]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      placeholder="e.g. 462022"
                      value={customerDetails.pincode}
                      onChange={handleInputChange}
                      className="w-full bg-[#faf7f2] border border-gray-300 rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:border-[#c99738]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 Footer */}
            <div className="p-4 bg-[#faf7f2] border-t border-gray-200 flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="w-1/3 flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-3 px-3 rounded-2xl text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Back</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (validateDeliveryDetails()) {
                    setCurrentStep(4);
                  }
                }}
                className="flex-1 flex items-center justify-center gap-1.5 bg-[#0b1b36] hover:bg-[#152a4d] active:scale-95 text-[#ffd978] font-bold py-3 px-3 sm:px-4 rounded-2xl text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Continue to Price</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </>
        )}

        {/* ================= STEP 4: PRICE DETAILS & SEND ORDER ================= */}
        {currentStep === 4 && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
              
              {/* Customer & Preferences Summary Card */}
              <div className="bg-[#fffdfa] border border-[#c99738]/30 p-3 rounded-2xl space-y-2">
                <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
                  <span className="text-[10px] font-bold text-[#801438] uppercase tracking-wider flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#801438]" />
                    <span>Deliver To</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="text-[11px] font-bold text-[#c99738] hover:underline cursor-pointer"
                  >
                    Edit Details
                  </button>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0b1b36]">{customerDetails.name}</p>
                  <p className="text-[11px] text-gray-600 font-medium">{customerDetails.phone}</p>
                  <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">
                    {customerDetails.address}
                    {customerDetails.city ? `, ${customerDetails.city}` : ''}
                    {customerDetails.state ? `, ${customerDetails.state}` : ''}
                    {customerDetails.pincode ? ` - ${customerDetails.pincode}` : ''}
                  </p>
                </div>

                {/* Color & Notes Row */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] flex-wrap gap-1">
                  <span className="text-gray-500 font-semibold flex items-center gap-1">
                    <Palette className="w-3 h-3 text-[#801438]" />
                    Color:
                  </span>
                  <span className="font-bold text-[#0b1b36] bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 truncate max-w-[200px]">
                    {customerDetails.color || 'Will share photo on WhatsApp'}
                  </span>
                </div>

                {customerDetails.notes && (
                  <p className="text-[10.5px] text-gray-500 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                    <strong className="text-gray-700">Note:</strong> {customerDetails.notes}
                  </p>
                )}
              </div>

              {/* Selected Items Mini List */}
              <div className="bg-white border border-gray-200 p-3 rounded-2xl">
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Items to Order ({totalItemCount})
                </p>
                <div className="space-y-2">
                  {activeItems.map((item) => (
                    <div
                      key={`${item.id}-${item.length}`}
                      className="flex items-center justify-between text-xs py-1 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="font-bold text-gray-800 truncate">{item.name}</p>
                        <p className="text-[10px] text-[#801438]">
                          {item.length || item.unit} × {item.quantity}
                        </p>
                      </div>
                      <span className="font-black text-gray-900 shrink-0">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Details (NO DELIVERY CHARGES SHOWN) */}
              <div className="bg-white border border-gray-200 p-3.5 rounded-2xl space-y-2">
                <p className="text-[11px] font-bold text-[#878787] uppercase tracking-wider pb-1.5 border-b border-gray-100">
                  PRICE DETAILS
                </p>

                <div className="flex justify-between text-xs text-gray-700">
                  <span>Price ({totalItemCount} {totalItemCount === 1 ? 'item' : 'items'})</span>
                  <span className="font-semibold text-[#212121]">₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-sm sm:text-base font-black text-[#0b1b36] pt-2 border-t border-dashed border-gray-200">
                  <span>Total Amount</span>
                  <span className="text-[#801438] font-black text-base sm:text-lg">₹{subtotal}</span>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <div className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold text-[#25d366]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Free Home Delivery within 3 KM in Bhopal on ₹500+</span>
                  </div>
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-snug">
                    Beyond 3 KM radius, standard courier rates apply across India. Payment QR &amp; dispatch schedule will be shared on WhatsApp.
                  </p>
                </div>
              </div>

            </div>

            {/* Step 4 Footer: Send Order to WhatsApp */}
            <div className="p-4 bg-[#faf7f2] border-t border-gray-200 flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="w-1/3 flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 border border-gray-300 text-gray-700 font-bold py-3.5 px-3 rounded-2xl text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Back</span>
              </button>

              <button
                type="button"
                onClick={() => handleSendOrderToWhatsApp('shop')}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-3.5 px-3 sm:px-4 rounded-2xl text-xs sm:text-sm shadow-lg shadow-[#25d366]/30 transition-all cursor-pointer whitespace-nowrap"
                title="Send order to WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Send to WhatsApp</span>
              </button>
            </div>
          </>
        )}

        {/* ================= STEP 5: THANK YOU SCREEN ================= */}
        {currentStep === 5 && (
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 flex flex-col justify-between text-center">
            <div className="my-auto py-4">
              {/* Animated Celebration Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-100 border-2 border-emerald-400 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-bounce">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>

              <span className="inline-block bg-[#0b1b36] text-[#ffd978] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                Order Sent on WhatsApp
              </span>

              <h3 className="text-xl sm:text-2xl font-black text-[#0b1b36] tracking-tight">
                Thank You for Shopping!
              </h3>

              <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-xs mx-auto leading-relaxed">
                Your fabric order has been successfully sent on WhatsApp.
              </p>

              {/* Order Summary Receipt Box */}
              <div className="mt-5 p-4 bg-[#fffdfa] rounded-2xl border border-[#c99738]/30 text-left text-xs space-y-2 shadow-xs">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Customer:</span>
                  <span className="font-bold text-[#0b1b36]">{customerDetails.name || 'Valued Customer'}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Mobile Given:</span>
                  <span className="font-bold text-[#0b1b36]">{customerDetails.phone || '9131264893'}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">State:</span>
                  <span className="font-bold text-[#0b1b36]">{customerDetails.state}</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Shop WhatsApp:</span>
                  <span className="font-bold text-[#25d366]">+91 9131264893</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Color:</span>
                  <span className="font-bold text-[#0b1b36] truncate max-w-[170px]">
                    {customerDetails.color || 'Sharing photo on WhatsApp'}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500 font-medium">Total Items:</span>
                  <span className="font-bold text-[#0b1b36]">{totalItemCount} cuts</span>
                </div>
                <div className="flex justify-between pt-1 text-sm font-black text-[#801438]">
                  <span>Total Amount:</span>
                  <span>₹{subtotal}</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-left text-[11px] text-amber-900 leading-snug space-y-1">
                <p className="font-bold flex items-center gap-1 mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  What happens next?
                </p>
                <p>
                  Our shop team will review your order details on WhatsApp, confirm the continuous cuts, and share the payment QR code and dispatch time.
                </p>
                <p className="font-semibold text-emerald-800 flex items-center gap-1 pt-0.5">
                  <Camera className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Don't forget to send your color or matching fabric photos in our WhatsApp chat!</span>
                </p>
              </div>
            </div>

            {/* Thank You Actions */}
            <div className="pt-4 border-t border-gray-200 space-y-2 shrink-0">
              <a
                href={`https://wa.me/919131264893?text=${encodeURIComponent(
                  `Hello Anumeet Cutpiece! Following up on my fabric order inquiry (Total: Rs. ${subtotal}) for ${customerDetails.name || 'Customer'} (${customerDetails.phone || ''}). Please confirm.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">Open WhatsApp Chat</span>
              </a>

              <button
                type="button"
                onClick={handleFinishAndContinueShopping}
                className="w-full flex items-center justify-center gap-1.5 bg-[#0b1b36] hover:bg-[#152a4d] active:scale-95 text-[#ffd978] font-bold py-3 px-4 rounded-2xl text-xs sm:text-sm transition-all cursor-pointer shadow-xs whitespace-nowrap"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}