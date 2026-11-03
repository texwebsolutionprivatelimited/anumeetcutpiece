import React from 'react';
import { Star, CheckCircle2, Scissors, Store, Home, Sparkles } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Pooja Sharma",
      role: "Homemaker & Self-Tailor",
      category: "Homemaker",
      initials: "PS",
      gradient: "from-rose-500 to-amber-600",
      fabric: "Pure Cotton & Chanderi (5m)",
      rating: 5,
      review: "I love stitching suits and kurtis for myself and my daughter at home. The cotton and chanderi fabrics from Anumeet Cutpiece are so soft, and getting a continuous 5-meter cut with free home delivery saved me multiple trips to crowded markets!"
    },
    {
      id: 2,
      name: "Shabana Khan",
      role: "Master Tailor & Dressmaker",
      category: "Tailor",
      initials: "SK",
      gradient: "from-emerald-500 to-teal-700",
      fabric: "Plain Crepe & Astar Lining",
      rating: 5,
      review: "As a master tailor stitching ladies suits and bridal wear, accurate cut length is critical. Anumeet Cutpiece gives honest 5m and 10m pieces at genuine wholesale rates. Their lining cloth and crepe have the smoothest fall!"
    },
    {
      id: 3,
      name: "Sunita Verma",
      role: "Homemaker & Family Shopper",
      category: "Homemaker",
      initials: "SV",
      gradient: "from-purple-500 to-pink-600",
      fabric: "Heavy Velvet & Printed Organza",
      rating: 5,
      review: "I ordered festive cut pieces for Diwali and family wedding functions. The velvet and organza quality exceeded my expectations. The colors are exactly as shown on WhatsApp, and the pricing is much lower than regular market shops."
    },
    {
      id: 4,
      name: "Farhana Siddiqui",
      role: "Ladies Custom Tailor",
      category: "Tailor",
      initials: "FS",
      gradient: "from-blue-500 to-indigo-600",
      fabric: "Heavy Rayon & Slub Cotton",
      rating: 5,
      review: "I stitch custom Anarkali dresses, shararas, and everyday suits. The rayon and slub cotton prints from Anumeet Cutpiece never bleed color or shrink after wash. My clients always appreciate the premium look and feel."
    },
    {
      id: 5,
      name: "Anjali Malviya",
      role: "Designer Boutique Owner",
      category: "Boutique",
      initials: "AM",
      gradient: "from-amber-500 to-orange-600",
      fabric: "Chanderi Silk & Shimmer Tissue",
      rating: 5,
      review: "WhatsApp ordering is so effortless! I just send my fabric list and get fast confirmation with photos. Transparent wholesale pricing and honest measurements make Anumeet our go-to fabric supplier for our boutique collections."
    },
    {
      id: 6,
      name: "Rukhsar Begum",
      role: "Homemaker & Home Tailoring",
      category: "Homemaker",
      initials: "RB",
      gradient: "from-teal-500 to-cyan-600",
      fabric: "Printed Rayon & Georgette",
      rating: 5,
      review: "Stitching at home has become so convenient. I ordered 4 bundles of georgette and printed rayon on WhatsApp. The parcel arrived neatly packaged at my doorstep, and every piece had generous, accurate measurements."
    },
    {
      id: 7,
      name: "Priya Tiwari",
      role: "Boutique & Suit Designer",
      category: "Boutique",
      initials: "PT",
      gradient: "from-violet-500 to-purple-600",
      fabric: "Printed Silk & Modal Chanderi",
      rating: 5,
      review: "Their festive cut-piece collections and Diwali offers saved our festival production budget. The printed silk and chanderi cuts look luxurious on festive lehengas and suits. Highly recommended for every boutique!"
    },
    {
      id: 8,
      name: "Yasmin Bano",
      role: "Homemaker & Festive Shopper",
      category: "Homemaker",
      initials: "YB",
      gradient: "from-emerald-600 to-green-700",
      fabric: "Cotton Cambric & Rayon Cuts",
      rating: 5,
      review: "I bought fabrics for our festival outfits for the whole family. The cambric cotton is breathable and beautiful. Getting free doorstep delivery on orders above ₹500 made shopping so relaxed from home."
    },
    {
      id: 9,
      name: "Meenakshi Chouhan",
      role: "Ethnic Studio Boutique",
      category: "Boutique",
      initials: "MC",
      gradient: "from-fuchsia-500 to-rose-600",
      fabric: "Jacquard Silk & Net Cutpieces",
      rating: 5,
      review: "Whenever new wedding or festive stock arrives, they share catalog updates immediately. Their retail and wholesale stock has the best variety of partywear and lining fabrics at unmatched wholesale rates."
    },
    {
      id: 10,
      name: "Zeenat Parveen",
      role: "Master Tailor & Dressmaker",
      category: "Tailor",
      initials: "ZP",
      gradient: "from-sky-500 to-blue-700",
      fabric: "Satin Georgette & Astar Lining",
      rating: 5,
      review: "The finish and drape of their satin georgette and lining fabric is exceptional. Clean stitching results without puckering or fraying. Very polite service and swift delivery. Five stars every time!"
    }
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...reviews, ...reviews];

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Boutique":
        return <Store className="w-3 h-3 text-[#c99738]" />;
      case "Tailor":
        return <Scissors className="w-3 h-3 text-[#801438]" />;
      default:
        return <Home className="w-3 h-3 text-emerald-600" />;
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case "Boutique":
        return "bg-amber-50 text-amber-900 border-amber-200/60";
      case "Tailor":
        return "bg-rose-50 text-rose-900 border-rose-200/60";
      default:
        return "bg-emerald-50 text-emerald-900 border-emerald-200/60";
    }
  };

  return (
    <section className="bg-[#f5efe6] py-8 sm:py-14 lg:py-16 border-y border-[#c99738]/30 overflow-hidden relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 mb-6 sm:mb-10 overflow-hidden">
        <div className="text-center max-w-2xl mx-auto">
          {/* Section Chip Badge */}
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#801438] bg-[#801438]/10 px-3.5 py-1.5 rounded-full mb-2.5 sm:mb-3 mx-auto">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#c99738]" />
            <span>Customer Testimonials &amp; Reviews</span>
          </div>
          
          {/* Responsive Heading for 320px, 375px, 425px, 768px */}
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0b1b36] tracking-tight text-center leading-snug px-1">
            Loved by Homemakers, Tailors &amp; Boutiques
          </h2>
          
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-2 leading-relaxed max-w-2xl mx-auto text-center px-1">
            Real experiences from homemakers stitching at home, boutique owners, and master dressmakers who trust Anumeet Cutpiece for premium quality fabrics at honest wholesale prices.
          </p>

          {/* Single-line responsive pill */}
          <div className="mt-3 inline-flex items-center gap-1.5 text-[10.5px] sm:text-xs text-gray-600 bg-white/80 px-2.5 sm:px-3.5 py-1 rounded-full border border-gray-200/80 whitespace-nowrap max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse shrink-0"></span>
            <span className="hidden sm:inline">Auto-scrolling marquee • Hover or tap on any card to pause</span>
            <span className="sm:hidden">Auto-scrolling • Tap card to pause</span>
          </div>
        </div>
      </div>

      {/* Marquee Container with Left & Right Gradient Shadows */}
      <div className="relative w-full overflow-hidden py-1 sm:py-2">
        {/* Left Gradient Mask */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-5 sm:w-16 md:w-28 bg-gradient-to-r from-[#f5efe6] to-transparent z-10" />

        {/* Right Gradient Mask */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-5 sm:w-16 md:w-28 bg-gradient-to-l from-[#f5efe6] to-transparent z-10" />

        {/* Marquee Track */}
        <div className="animate-marquee flex gap-3 sm:gap-5 md:gap-6 px-3 sm:px-4">
          {marqueeList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[260px] xs:w-[285px] sm:w-[340px] md:w-[360px] shrink-0 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 md:p-6 border border-[#c99738]/30 hover:border-[#c99738] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Profile Header */}
                <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2.5 sm:mb-3 min-w-0">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    {/* Initials Avatar */}
                    <div className={`w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br ${item.gradient} text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0`}>
                      {item.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-[#0b1b36] leading-tight truncate">
                          {item.name}
                        </h4>
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#25d366] shrink-0" title="Verified Customer" />
                      </div>
                      <p className="text-[10px] sm:text-[11px] font-medium text-gray-500 flex items-center gap-1 mt-0.5 truncate">
                        {getCategoryIcon(item.category)}
                        <span className="truncate">{item.role}</span>
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-500 shrink-0">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-[11.5px] sm:text-[13px] text-gray-700 leading-relaxed italic line-clamp-3 sm:line-clamp-4 group-hover:line-clamp-none transition-all mt-1 sm:mt-2">
                  "{item.review}"
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-gray-100 flex items-center justify-between text-[10px] sm:text-[11px] min-w-0 gap-1.5">
                <span className={`font-semibold px-2 py-0.5 rounded border text-[10px] sm:text-[11px] truncate max-w-[140px] sm:max-w-[210px] ${getCategoryBadge(item.category)}`}>
                  {item.fabric}
                </span>
                <span className="text-[9.5px] sm:text-[10px] text-[#25d366] font-bold uppercase tracking-wider flex items-center gap-1 shrink-0 whitespace-nowrap">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25d366]"></span>
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Highlights below marquee */}
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#c99738]/20 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
        <div className="bg-white/70 p-2 sm:p-3 rounded-xl border border-[#c99738]/20 min-w-0 overflow-hidden">
          <p className="text-base sm:text-lg font-black text-[#0b1b36] truncate">100%</p>
          <p className="text-[10px] sm:text-[11px] text-gray-600 font-medium truncate sm:whitespace-normal">Genuine Quality</p>
        </div>
        <div className="bg-white/70 p-2 sm:p-3 rounded-xl border border-[#c99738]/20 min-w-0 overflow-hidden">
          <p className="text-base sm:text-lg font-black text-[#0b1b36] truncate">5m &amp; 10m</p>
          <p className="text-[10px] sm:text-[11px] text-gray-600 font-medium truncate sm:whitespace-normal">Continuous Cuts</p>
        </div>
        <div className="bg-white/70 p-2 sm:p-3 rounded-xl border border-[#c99738]/20 min-w-0 overflow-hidden">
          <p className="text-base sm:text-lg font-black text-[#0b1b36] truncate">Within 3 KM</p>
          <p className="text-[10px] sm:text-[11px] text-gray-600 font-medium truncate sm:whitespace-normal">Free Delivery (₹500+)</p>
        </div>
        <div className="bg-white/70 p-2 sm:p-3 rounded-xl border border-[#c99738]/20 min-w-0 overflow-hidden">
          <p className="text-base sm:text-lg font-black text-[#0b1b36] truncate">Pan-India</p>
          <p className="text-[10px] sm:text-[11px] text-gray-600 font-medium truncate sm:whitespace-normal">Fast Courier</p>
        </div>
      </div>
    </section>
  );
}