import React, { useState, useEffect } from 'react';
import { CheckCircle2, ShoppingBag } from 'lucide-react';
import { STORE_CONFIG } from './data/products';
import NoticeTicker from './components/NoticeTicker';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FreeDeliveryBanner from './components/FreeDeliveryBanner';
import StockDealsSection from './components/StockDealsSection';
import ProductCatalog from './components/ProductCatalog';
import WhyChooseUs from './components/WhyChooseUs';
import VideoTestimonials from './components/VideoTestimonials';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import WhatsAppSettingsModal from './components/WhatsAppSettingsModal';
import PolicyModal from './components/PolicyModal';
import StickyMobileBar from './components/StickyMobileBar';
import WhatsAppIcon from './components/WhatsAppIcon';
import { createGeneralInquiryWhatsAppLink, createSingleProductWhatsAppLink } from './utils/whatsapp';

export default function App() {
  // Cart state persisted to localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('anumeet_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Official Shop WhatsApp number: Real Bhopal Shop Phone 9131264893
  const [whatsappPhone, setWhatsappPhone] = useState(STORE_CONFIG.phone);

  // Clean up any stale dummy numbers from browser storage
  useEffect(() => {
    try {
      localStorage.setItem('anumeet_whatsapp', STORE_CONFIG.phone);
    } catch (e) {
      // ignore
    }
  }, []);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [directBuyItem, setDirectBuyItem] = useState(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState(false);
  const [policyInitialTab, setPolicyInitialTab] = useState('exchange');

  const handleOpenPolicy = (tab = 'exchange') => {
    setPolicyInitialTab(tab);
    setIsPolicyModalOpen(true);
  };
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Fabrics');
  const [toastMessage, setToastMessage] = useState(null);
  const toastTimeoutRef = React.useRef(null);

  const showToast = (msg) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Direct Buy Flow: 1-Click direct redirect to WhatsApp (Bypasses Cart completely)
  const handleDirectBuy = (product) => {
    const item = {
      id: product.id,
      name: product.name,
      subTitle: product.subTitle,
      price: product.price || product.sellPrice,
      sellPrice: product.sellPrice || product.price,
      mrp: product.mrp,
      unit: product.unit || product.length || '5 mtr',
      length: product.length || product.unit || '5 mtr',
      image: product.image,
      category: product.category,
      quantity: product.quantity || 1,
    };

    const waLink = createSingleProductWhatsAppLink(
      item,
      whatsappPhone,
      item.length,
      item.price
    );

    showToast(`Redirecting to WhatsApp for ${item.name}...`);
    
    // Direct redirect to WhatsApp
    const win = window.open(waLink, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = waLink;
    }
  };

  // Save cart changes
  useEffect(() => {
    try {
      localStorage.setItem('anumeet_cart', JSON.stringify(cart));
    } catch (e) {
      // ignore
    }
  }, [cart]);

  // Deep-Link & Direct Route Handler: Auto-scroll to #catalog when /catalog, /catlog, or #catalog is opened
  useEffect(() => {
    const handleUrlRoute = (isInitial = false) => {
      const pathname = window.location.pathname.toLowerCase().replace(/\/+$/, '');
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category') || params.get('cat');

      if (catParam) {
        setSelectedCategory(catParam);
      }

      // Match /catalog, /catlog, #catalog, or /catalog?category=...
      const isCatalog =
        pathname === '/catalog' ||
        pathname === '/catlog' ||
        pathname.endsWith('/catalog') ||
        pathname.endsWith('/catlog') ||
        hash === '#catalog';

      // Match /diwali, /diwali-offers, #diwali-offers
      const isDiwali =
        pathname === '/diwali' ||
        pathname === '/diwali-offers' ||
        hash === '#diwali' ||
        hash === '#diwali-offers';

      if (isCatalog) {
        const scrollToTarget = () => {
          const el = document.getElementById('catalog');
          if (el) {
            el.scrollIntoView({ behavior: isInitial ? 'auto' : 'smooth' });
          }
        };

        // Scroll immediately on mount (so user lands directly on catalog, not top hero)
        scrollToTarget();
        const t1 = setTimeout(scrollToTarget, 50);
        const t2 = setTimeout(scrollToTarget, 200);
        const t3 = setTimeout(scrollToTarget, 500);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      } else if (isDiwali) {
        const scrollToTarget = () => {
          const el = document.getElementById('diwali-offers');
          if (el) {
            el.scrollIntoView({ behavior: isInitial ? 'auto' : 'smooth' });
          }
        };

        scrollToTarget();
        const t1 = setTimeout(scrollToTarget, 50);
        const t2 = setTimeout(scrollToTarget, 200);
        const t3 = setTimeout(scrollToTarget, 500);

        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    };

    const cleanup = handleUrlRoute(true);
    const onHashChange = () => handleUrlRoute(false);
    const onPopState = () => handleUrlRoute(false);

    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onPopState);

    return () => {
      if (cleanup) cleanup();
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  // Query quantity of an item already in cart
  const getItemQuantity = (id, length) => {
    const item = cart.find(
      (i) => i.id === id && (length ? i.length === length : true)
    );
    return item ? item.quantity : 0;
  };

  // Cart operations
  const handleAddToCart = (product, openDrawer = false) => {
    let finalQty = 1;
    setCart((prev) => {
      const targetLength = product.length || product.unit;
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.length === targetLength
      );

      const addQty = product.quantity || 1;

      if (existingIndex > -1) {
        const next = [...prev];
        const newCount = next[existingIndex].quantity + addQty;
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: newCount,
        };
        finalQty = newCount;
        return next;
      } else {
        finalQty = addQty;
        return [...prev, { ...product, length: targetLength, quantity: addQty }];
      }
    });

    showToast(`Added to Cart: ${product.name} (Qty: ${finalQty})`);

    if (openDrawer) {
      setIsCartOpen(true);
    }
  };

  const handleUpdateQuantity = (id, length, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, length);
      showToast('Item removed from cart');
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && (length ? item.length === length : true)
          ? { ...item, quantity: newQty }
          : item
      )
    );
    showToast(`Cart updated • Qty: ${newQty}`);
  };

  const handleRemoveItem = (id, length) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.length === length))
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleSavePhone = (newPhone) => {
    setWhatsappPhone(newPhone);
    try {
      localStorage.setItem('anumeet_whatsapp', newPhone);
    } catch (e) {
      // ignore
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const scrollToCatalog = () => {
    const el = document.getElementById('catalog');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf7f2] text-[#1a2538] font-sans w-full overflow-x-clip">
      
      {/* Sticky Top Header Container: Ticker + Navbar stay locked at top across mobile, tablet, and laptop on page scroll */}
      <div className="sticky top-0 z-40 w-full shadow-xs">
        {/* 1. Top Offer Ticker: ₹500 Free Delivery Rule */}
        <NoticeTicker />

        {/* 2. Responsive Header Navigation with User's Logo */}
        <Navbar
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          whatsappPhone={whatsappPhone}
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            scrollToCatalog();
          }}
        />
      </div>

      {/* 3. Luxury Light Hero Section with Interactive Fabric Deal Spotlight */}
      <Hero
        whatsappPhone={whatsappPhone}
        onExploreClick={scrollToCatalog}
        onAddToCart={handleAddToCart}
      />

      {/* 4. Interactive ₹500 Free Delivery Offer Banner */}
      <FreeDeliveryBanner
        cartTotal={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* 5. Special Diwali Festive Deals (5m & 10m Cutpiece Lot) */}
      <StockDealsSection
        onAddToCart={handleAddToCart}
        onDirectBuy={handleDirectBuy}
        onUpdateQuantity={handleUpdateQuantity}
        getItemQuantity={getItemQuantity}
        onQuickView={(p) => setQuickViewProduct(p)}
        whatsappPhone={whatsappPhone}
      />

      {/* 6. Main 20 Regular Products Catalog with Filters */}
      <ProductCatalog
        cart={cart}
        onAddToCart={handleAddToCart}
        onDirectBuy={handleDirectBuy}
        onUpdateQuantity={handleUpdateQuantity}
        getItemQuantity={getItemQuantity}
        onQuickView={(p) => setQuickViewProduct(p)}
        whatsappPhone={whatsappPhone}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 7. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 8. Client Video Testimonials & Instagram Reels */}
      <VideoTestimonials whatsappPhone={whatsappPhone} />

      {/* 9. Customer Testimonials & Reviews */}
      <Reviews />

      {/* 9. Comprehensive Footer */}
      <Footer whatsappPhone={whatsappPhone} onOpenPolicy={handleOpenPolicy} />

      {/* 10. Modals & Drawers */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onDirectBuy={handleDirectBuy}
        quantityInCart={quickViewProduct ? getItemQuantity(quickViewProduct.id, quickViewProduct.unit) : 0}
        whatsappPhone={whatsappPhone}
        onOpenPolicy={handleOpenPolicy}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => {
          setIsCartOpen(false);
          setDirectBuyItem(null);
        }}
        cartItems={cart}
        directBuyItem={directBuyItem}
        onResetDirectBuy={() => setDirectBuyItem(null)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        whatsappPhone={whatsappPhone}
        onOpenPolicy={handleOpenPolicy}
      />

      <WhatsAppSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        currentPhone={whatsappPhone}
        onSavePhone={handleSavePhone}
      />

      {/* Store Policies & Terms Modal */}
      <PolicyModal
        isOpen={isPolicyModalOpen}
        onClose={() => setIsPolicyModalOpen(false)}
        initialTab={policyInitialTab}
        whatsappPhone={whatsappPhone}
      />

      {/* 11. Sticky Mobile Action Bar (for 320px to 768px screens) */}
      <StickyMobileBar
        cartCount={totalCartCount}
        cartTotal={totalCartPrice}
        onOpenCart={() => setIsCartOpen(true)}
        whatsappPhone={whatsappPhone}
      />

      {/* 12. Floating Cart Toast Notification Pill */}
      {toastMessage && (
        <div className="fixed bottom-16 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#0b1b36] text-white border-2 border-[#c99738] px-3 sm:px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 sm:gap-3 text-xs sm:text-sm animate-bounce max-w-[92vw]">
          <CheckCircle2 className="w-4 h-4 text-[#25d366] shrink-0" />
          <span className="font-semibold text-white truncate max-w-[110px] sm:max-w-xs">
            {toastMessage}
          </span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="bg-[#c99738] hover:bg-[#dfb15b] active:scale-95 text-[#0b1b36] font-bold px-2.5 sm:px-3 py-1 rounded-full text-xs shadow-xs cursor-pointer shrink-0 whitespace-nowrap"
          >
            View Cart ({totalCartCount})
          </button>
        </div>
      )}

      {/* 13. Floating WhatsApp Button with User's Transparent PNG Icon (Desktop/Tablet) */}
      <a
        href={createGeneralInquiryWhatsAppLink(whatsappPhone)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center justify-center bg-[#25d366] hover:bg-[#20ba59] active:scale-95 text-white font-bold h-14 min-w-[56px] p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:shadow-green-500/40 group border-2 border-white/80 cursor-pointer overflow-hidden"
        title="Chat directly on WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7 shrink-0" />
        <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
          Chat with Us
        </span>
      </a>

    </div>
  );
}
