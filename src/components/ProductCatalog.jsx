import React, { useState, useMemo } from 'react';
import { CATEGORIES, REGULAR_PRODUCTS } from '../data/products';
import ProductCard from './ProductCard';
import { Search, Filter, SlidersHorizontal, Sparkles, X, ChevronDown } from 'lucide-react';

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
    <section id="catalog" className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 my-8 sm:my-14 lg:my-16 overflow-hidden scroll-mt-24 sm:scroll-mt-32">
      
      {/* Title & Description */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 px-1">
        <div className="inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#801438] bg-[#801438]/10 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full mb-2.5 sm:mb-3 mx-auto whitespace-nowrap shadow-xs">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-[#c99738] shrink-0" />
          <span className="whitespace-nowrap">Full Product Catalog ({REGULAR_PRODUCTS.length} Fabrics)</span>
        </div>
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0b1b36] tracking-tight text-center leading-snug">
          Explore Our Wholesale Fabrics
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-2 leading-relaxed max-w-2xl mx-auto text-center">
          Order premium fabrics in convenient 5-meter continuous cuts or individual pieces directly via WhatsApp.
        </p>
      </div>

      {/* Filter & Search Toolbar (Sleek Mobile & Desktop E-Commerce Controls) */}
      <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-200 mb-6 sm:mb-8 flex flex-col gap-2.5 sm:gap-3 w-full max-w-full min-w-0 shadow-2xs">
        
        {/* Row 1: Search Input */}
        <div className="relative w-full">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2 shrink-0 pointer-events-none" />
          <input
            type="text"
            placeholder="Search fabric name or type..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#faf7f2] border border-gray-200 focus:border-[#c99738] rounded-xl pl-9.5 pr-8 py-2.5 text-xs sm:text-sm text-[#0b1b36] placeholder-gray-400 focus:outline-hidden transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Row 2: Dual Dropdowns & Counter */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
          
          {/* Dual Dropdowns: Exactly 50% / 50% equal columns on mobile, auto-inline on tablet/desktop */}
          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:gap-3 w-full sm:w-auto">
            
            {/* Category Dropdown */}
            <div className="relative w-full sm:w-auto">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center text-[#801438]">
                <Filter className="w-3.5 h-3.5" />
              </div>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto bg-[#faf7f2] hover:bg-white border border-[#c99738]/80 hover:border-[#801438] text-[11px] sm:text-xs font-bold rounded-xl pl-7.5 pr-6.5 py-2 text-[#0b1b36] cursor-pointer appearance-none transition-all focus:outline-hidden shadow-2xs truncate"
                aria-label="Filter fabrics by category"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat} {cat === 'All Fabrics' ? `(${REGULAR_PRODUCTS.length})` : ''}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#801438] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none shrink-0" />
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <div className="absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none flex items-center text-gray-500">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto bg-[#faf7f2] hover:bg-white border border-gray-200 hover:border-gray-400 text-[11px] sm:text-xs font-semibold rounded-xl pl-7.5 pr-6.5 py-2 text-gray-700 cursor-pointer appearance-none transition-all focus:outline-hidden shadow-2xs truncate"
                aria-label="Sort fabrics by price or relevance"
              >
                <option value="featured">Featured</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none shrink-0" />
            </div>

          </div>

          {/* Reset Action (only shown when filtered or searched) */}
          {(selectedCategory !== 'All Fabrics' || searchQuery) && (
            <div className="flex items-center justify-end px-0.5 pt-0.5 sm:pt-0">
              <button
                onClick={() => {
                  setSelectedCategory('All Fabrics');
                  setSearchQuery('');
                }}
                className="text-[10.5px] sm:text-[11px] font-bold text-[#801438] hover:text-[#0b1b36] flex items-center gap-1 cursor-pointer transition-colors whitespace-nowrap underline decoration-[#c99738]"
                title="Reset all filters"
              >
                <span>Reset filters</span>
                <X className="w-3 h-3" />
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Products Grid: Responsive across 320px, 375px, 425px, 768px, 1024px, 1440px */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 w-full max-w-full min-w-0">
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
