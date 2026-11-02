import React, { useState, useMemo } from 'react';
import { CATEGORIES, REGULAR_PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Search, Filter, SlidersHorizontal, Sparkles, X } from 'lucide-react';

export default function ProductCatalog({
  cart = [],
  onAddToCart,
  onDirectBuy,
  onUpdateQuantity,
  getItemQuantity,
  onQuickView,
  whatsappPhone,
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
}) {
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'low-to-high', 'high-to-low'

  const filteredProducts = useMemo(() => {
    let result = [...REGULAR_PRODUCTS];

    // Filter by Category
    if (selectedCategory && selectedCategory !== 'All Fabrics') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.subTitle && p.subTitle.toLowerCase().includes(q)) ||
          (p.hindiName && p.hindiName.toLowerCase().includes(q)) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'low-to-high') {
      result.sort((a, b) => a.sellPrice - b.sellPrice);
    } else if (sortBy === 'high-to-low') {
      result.sort((a, b) => b.sellPrice - a.sellPrice);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section id="catalog" className="max-w-7xl mx-auto px-3 sm:px-6 my-12 sm:my-16">
      
      {/* Title & Description */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c99738] bg-[#0b1b36] px-3.5 py-1.5 rounded-full mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 fill-current text-[#ffd978]" />
          <span>Full Product Catalog ({REGULAR_PRODUCTS.length} Fabrics)</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-black text-[#0b1b36] tracking-tight">
          Explore Our Wholesale Fabrics
        </h2>
        <p className="text-gray-600 text-xs sm:text-base mt-2">
          Order premium fabrics in convenient 5-meter continuous cuts or individual pieces directly via WhatsApp.
        </p>
      </div>

      {/* Category Pills (Horizontal Scroll on Mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 ${
                isActive
                  ? 'bg-[#0b1b36] text-[#ffd978] shadow-md scale-102 border border-[#c99738]'
                  : 'bg-white text-gray-700 hover:bg-[#faf7f2] border border-gray-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Filter & Search Bar Row */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-xs mb-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        
        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search fabric name or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#faf7f2] border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-xs sm:text-sm focus:outline-hidden focus:border-[#c99738]"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black p-0.5"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Counter & Sort By */}
        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
          <span className="text-xs text-gray-500 font-medium">
            Showing <strong className="text-[#0b1b36]">{filteredProducts.length}</strong> items
          </span>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#faf7f2] border border-gray-200 text-xs sm:text-sm rounded-xl px-2.5 py-1.5 focus:outline-hidden text-gray-700 font-medium cursor-pointer"
            >
              <option value="featured">Featured / Default</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </div>
        </div>

      </div>

      {/* Products Grid: Responsive across 320px, 375px, 425px, 768px, 1024px, 1440px */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantityInCart={getItemQuantity ? getItemQuantity(product.id, product.unit) : 0}
              onAddToCart={onAddToCart}
              onDirectBuy={onDirectBuy}
              onUpdateQuantity={onUpdateQuantity}
              onQuickView={onQuickView}
              whatsappPhone={whatsappPhone}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-6">
          <p className="text-base text-gray-600 mb-3">
            No fabrics found matching '{searchQuery}'.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All Fabrics');
            }}
            className="bg-[#0b1b36] text-[#ffd978] px-4 py-2 rounded-xl text-xs font-bold"
          >
            Clear Filters &amp; Show All
          </button>
        </div>
      )}

    </section>
  );
}
