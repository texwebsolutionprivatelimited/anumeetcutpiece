// Master product list derived directly from handwritten notebook & shop catalog (100% English)

export const STORE_CONFIG = {
  name: "Anumeet Cutpiece",
  tagline: "Quality Fabric, Endless Possibilities",
  slogan: "Feel the Fabric, Live the Fashion",
  subtitle: "Wholesale & Retail Fabric Merchant",
  phone: "919131264893", // Real Bhopal Shop Phone: 9131264893
  callingPhone: "9131264893",
  displayPhone: "+91 9131264893",
  address: "Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal, Madhya Pradesh - 462022",
  shortAddress: "Sector A, Kiran Nagar, Ayodhya Nagar, Bhopal - 462022",
  city: "Bhopal",
  state: "Madhya Pradesh",
  pincode: "462022",
  shopImage: "/shop-front.webp",
  freeDeliveryThreshold: 500, // Free on ₹500+ within 3 KM radius
  freeDeliveryRadius: "Within 3 KM Radius of Shop",
  deliveryNote: "FREE Home Delivery on orders above ₹500 within 3 KM radius of shop (Ayodhya Nagar, Bhopal). Delivery charges apply beyond 3 KM. Pan-India courier delivery available anywhere in India!",
  panIndiaDelivery: "Available anywhere across India via courier",
  instagram: "@anumeetcutpiece",
};

// Fabric Dummy SVG Placeholders with rich colors and textures
export const createFabricPlaceholder = (title, color1, color2) => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${encodeURIComponent(color1)}" />
        <stop offset="100%" stop-color="${encodeURIComponent(color2)}" />
      </linearGradient>
      <pattern id="pat" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 0,20 Q 10,0 20,20 T 40,20" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="2"/>
        <circle cx="20" cy="20" r="1.5" fill="rgba(201,151,56,0.35)"/>
      </pattern>
    </defs>
    <rect width="600" height="450" fill="url(%23g)"/>
    <rect width="600" height="450" fill="url(%23pat)"/>
    
    <!-- Fabric Fold Texture -->
    <path d="M0 80 Q 150 140 300 80 T 600 80 L 600 450 L 0 450 Z" fill="rgba(0,0,0,0.12)"/>
    <path d="M0 220 Q 200 280 400 220 T 600 240 L 600 450 L 0 450 Z" fill="rgba(0,0,0,0.15)"/>
    
    <!-- Golden Border Badge -->
    <rect x="30" y="30" width="540" height="390" rx="16" fill="none" stroke="rgba(201,151,56,0.4)" stroke-width="2" stroke-dasharray="6,4"/>
    
    <!-- Fabric Roll Icon & Text -->
    <g transform="translate(300, 200)">
      <circle r="46" fill="rgba(11,27,54,0.75)" stroke="%23c99738" stroke-width="2.5"/>
      <path d="M-18 -10 C-18 -20 18 -20 18 -10 C18 15 -18 15 -18 -10 Z M-18 -10 L-6 18 M18 -10 L6 18" stroke="%23ffd978" stroke-width="2.5" fill="none"/>
      <circle cx="0" cy="2" r="6" fill="%23c99738"/>
      
      <text y="75" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="bold" font-size="20" fill="%23ffffff" letter-spacing="1">
        ${encodeURIComponent(title)}
      </text>
      <text y="102" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-weight="500" font-size="13" fill="%23ffd978" letter-spacing="0.5">
        ANUMEET CUTPIECE PREMIUM
      </text>
      <text y="125" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" fill="rgba(255,255,255,0.75)">
        [ User Photo Replaceable ]
      </text>
    </g>
  </svg>`;
};

// 20 Regular Products from Notebook Image 2 (All English, Real Product Images)
export const REGULAR_PRODUCTS = [
  {
    id: 1,
    name: "Plain Crepe (Crape)",
    subTitle: "Smooth Plain Crepe Cut Piece",
    category: "Crepe & Georgette",
    unit: "5 mtr",
    sellPrice: 175,
    mrp: 250,
    badge: "Budget Best",
    colors: ["#1e3a5f", "#782846", "#2c5234", "#d4af37"],
    description: "High quality smooth plain crepe fabric cut piece. Soft texture, ideal for everyday kurtis, salwar suits, and inner linings.",
    image: "/products/crepe-plain.webp",
    inStock: true,
  },
  {
    id: 2,
    name: "Pure Georgette",
    subTitle: "Pure Flowing Georgette Fabric",
    category: "Crepe & Georgette",
    unit: "5 mtr",
    sellPrice: 270,
    mrp: 399,
    badge: "Fast Selling",
    colors: ["#6b21a8", "#be123c", "#0f766e", "#1e40af"],
    description: "Pure flowing georgette cut piece. Excellent fall and graceful drape for anarkalis, sarees, dupattas, and suits.",
    image: "/products/georgette.webp",
    inStock: true,
  },
  {
    id: 3,
    name: "Plain Vertical Crepe",
    subTitle: "Ribbed Vertical Texture Crepe",
    category: "Crepe & Georgette",
    unit: "5 mtr",
    sellPrice: 549,
    mrp: 750,
    badge: "Designer Pick",
    colors: ["#312e81", "#701a75", "#064e3b"],
    description: "Premium vertical line textured crepe fabric. Wrinkle-resistant with rich fall, best for designer kurtis & pant suits.",
    image: "/products/vertical-crepe.webp",
    inStock: true,
  },
  {
    id: 4,
    name: "Printed Crepe (Crape)",
    subTitle: "Floral & Digital Printed Crepe",
    category: "Crepe & Georgette",
    unit: "5 mtr",
    sellPrice: 339,
    mrp: 499,
    badge: "Trending Print",
    colors: ["#e11d48", "#d97706", "#2563eb"],
    description: "Vibrant floral and modern printed crepe cut piece fabric. Eye-catching patterns with long-lasting color fastness.",
    image: "/products/printed-crepe.webp",
    inStock: true,
  },
  {
    id: 5,
    name: "Pure Rayon Plain",
    subTitle: "14kg Heavy Pure Rayon",
    category: "Cotton & Rayon",
    unit: "5 mtr",
    sellPrice: 389,
    mrp: 520,
    badge: "Super Soft",
    colors: ["#0f766e", "#991b1b", "#1e3a8a", "#ca8a04"],
    description: "14kg heavy export quality pure rayon fabric. Highly breathable, ultra-soft and comfortable for office wear kurtis.",
    image: "/products/rayon-plain.webp",
    inStock: true,
  },
  {
    id: 6,
    name: "Polyester Fabric",
    subTitle: "Durable Multi-Purpose Cut Piece",
    category: "Everyday Fabrics",
    unit: "5 mtr",
    sellPrice: 449,
    mrp: 600,
    badge: "Durable",
    colors: ["#374151", "#1e3a8a", "#7c2d12"],
    description: "Sturdy and durable polyester fabric cut piece. Long-lasting, easy wash, multi-purpose usage for home and dressmaking.",
    image: "/products/polyester-fabric.webp",
    inStock: true,
  },
  {
    id: 7,
    name: "Astar / Lining Cloth",
    subTitle: "Soft Pure Cotton-Feel Inner Lining",
    category: "Everyday Fabrics",
    unit: "5 mtr",
    sellPrice: 179,
    mrp: 260,
    badge: "Must-Have",
    colors: ["#fef08a", "#ffffff", "#000000", "#f87171"],
    description: "Superior quality soft inner lining (astar) fabric. Keeps garments comfortable and enhances overall structure.",
    image: "/products/astar.webp",
    inStock: true,
  },
  {
    id: 8,
    name: "Premium Chanderi",
    subTitle: "Crimson Festive Zari Woven Chanderi",
    category: "Silk & Festive",
    unit: "5 mtr",
    sellPrice: 1249,
    mrp: 1799,
    badge: "Super Hit Offer",
    colors: ["#b45309", "#831843", "#047857", "#1e3a8a"],
    description: "Royal Premium Chanderi silk fabric with crimson golden zari weave. Luxury festive 5m cut piece.",
    image: "/products/chanderi-premium.webp",
    inStock: true,
  },
  {
    id: 21,
    name: "Chanderi Fabric",
    subTitle: "Classic Textured Chanderi Fabric",
    category: "Silk & Festive",
    unit: "5 mtr",
    sellPrice: 899,
    mrp: 1199,
    badge: "Special Deal",
    colors: ["#f5c6a5", "#e09f7a", "#c99738", "#801438"],
    description: "Authentic Chanderi fabric with delicate textured weave and soft elegant sheen. Complete 5-metre continuous cut piece for kurtis, salwar suits, and ethnic wear.",
    image: "/products/chanderi.webp",
    inStock: true,
  },
  {
    id: 9,
    name: "Kanchori Silk Fabric",
    subTitle: "Traditional Rich Woven Silk",
    category: "Silk & Festive",
    unit: "5 mtr",
    sellPrice: 699,
    mrp: 999,
    badge: "Festive Special",
    colors: ["#991b1b", "#854d0e", "#155e75"],
    description: "Traditional rich woven Kanchori silk cut piece. Perfect for wedding blouses, lehenga accents, and festive suits.",
    image: "/products/kanchori.webp",
    inStock: true,
  },
  {
    id: 10,
    name: "Designer Single Dupatta",
    subTitle: "Full Length Ethnic Dupatta",
    category: "Dupattas & Pants",
    unit: "1 pcs",
    sellPrice: 120,
    mrp: 199,
    badge: "Hot Buy",
    colors: ["#e11d48", "#059669", "#d97706", "#7c3aed"],
    description: "Full length designer ethnic dupatta. Premium border and soft touch to match any kurta or suit set.",
    image: "/products/dupatta.webp",
    inStock: true,
  },
  {
    id: 11,
    name: "Dupatta 2 Pcs Combo",
    subTitle: "Double Pack Value Saver",
    category: "Dupattas & Pants",
    unit: "2 pcs",
    sellPrice: 169,
    mrp: 300,
    badge: "Super Saver",
    colors: ["#db2777", "#2563eb", "#ca8a04"],
    description: "Double value pack! Get 2 premium designer dupattas for just ₹169 instead of regular ₹300. Unbeatable wholesale price.",
    image: "/products/dupatta-combo.webp",
    inStock: true,
  },
  {
    id: 12,
    name: "Readymade Ladies Pant",
    subTitle: "Comfort Stretch Cigarette Fit",
    category: "Dupattas & Pants",
    unit: "1 pcs",
    sellPrice: 200,
    mrp: 350,
    badge: "Ready-To-Wear",
    colors: ["#000000", "#ffffff", "#9ca3af", "#b45309"],
    description: "Comfort stretch ladies cigarette pant. Elastic waistband, stylish fit, pairs effortlessly with all kurtis.",
    image: "/products/ladies-pant.webp",
    inStock: true,
  },
  {
    id: 13,
    name: "Pure Satin Fabric",
    subTitle: "Silky Smooth High-Sheen Fabric",
    category: "Silk & Festive",
    unit: "5 mtr",
    sellPrice: 399,
    mrp: 550,
    badge: "Glossy Finish",
    colors: ["#be185d", "#1d4ed8", "#047857", "#eab308"],
    description: "Silky smooth, high-sheen satin cut piece. Ideal for party dresses, gowns, petticoats, and designer borders.",
    image: "/products/satin.webp",
    inStock: true,
  },
  {
    id: 14,
    name: "Royal Micro Velvet (9000)",
    subTitle: "Heavy Micro Velvet Luxury Fabric",
    category: "Silk & Festive",
    unit: "5 mtr",
    sellPrice: 749,
    mrp: 1100,
    badge: "Royal Luxury",
    colors: ["#831843", "#1e1b4b", "#064e3b"],
    description: "Heavy 9000 quality micro velvet cut piece. Plush softness and rich festive glow for festive suits, lehengas, and bridal wear.",
    image: "/products/velvet.webp",
    inStock: true,
  },
  {
    id: 15,
    name: "Pure Roman Silk",
    subTitle: "Subtle Shimmer Festive Silk",
    category: "Silk & Festive",
    unit: "5 mtr",
    sellPrice: 399,
    mrp: 580,
    badge: "Festive Hit",
    colors: ["#0f766e", "#b45309", "#831843"],
    description: "Exquisite Roman silk fabric with subtle zari shimmer. Non-transparent, comfortable, best for celebration wear.",
    image: "/products/roman-silk.webp",
    inStock: true,
  },
  {
    id: 16,
    name: "Printed Pure Cotton",
    subTitle: "100% Pure Breathable Cotton",
    category: "Cotton & Rayon",
    unit: "5 mtr",
    sellPrice: 299,
    mrp: 450,
    badge: "100% Pure Cotton",
    colors: ["#ea580c", "#0284c7", "#16a34a"],
    description: "Pure cotton printed cut piece fabric. Cool, breathable and skin-friendly fabric with traditional Indian block motifs.",
    image: "/products/printed-cotton.webp",
    inStock: true,
  },
  {
    id: 17,
    name: "Batik Print Fabric",
    subTitle: "Handcrafted Heritage Batik Textile",
    category: "Cotton & Rayon",
    unit: "5 mtr",
    sellPrice: 449,
    mrp: 650,
    badge: "Artisanal",
    colors: ["#7c2d12", "#1e3a8a", "#14532d"],
    description: "Authentic wax batik printed textile cut piece. Distinctive heritage look for exclusive designer suits & dupattas.",
    image: "/products/batik-print.webp",
    inStock: true,
  },
  {
    id: 18,
    name: "Plain Glass Organza",
    subTitle: "Glass Finish Lightweight Sheer Organza",
    category: "Organza Collection",
    unit: "5 mtr",
    sellPrice: 249,
    mrp: 380,
    badge: "Ultra Light",
    colors: ["#f472b6", "#38bdf8", "#a78bfa", "#fde047"],
    description: "Glass finish lightweight plain organza cut piece. Crisp volume and modern look for sleeves, dupattas, and overlays.",
    image: "/products/plain-organza.webp",
    inStock: true,
  },
  {
    id: 19,
    name: "Printed Floral Organza",
    subTitle: "Designer Pastel Floral Organza",
    category: "Organza Collection",
    unit: "5 mtr",
    sellPrice: 699,
    mrp: 950,
    badge: "Celebrity Style",
    colors: ["#ec4899", "#8b5cf6", "#06b6d4"],
    description: "Pastel watercolor floral printed organza. Highly trending aesthetic fabric for contemporary ethnic silhouettes.",
    image: "/products/printed-organza.webp",
    inStock: true,
  },
  {
    id: 20,
    name: "Pure Plain Cotton",
    subTitle: "Fine Count Pure Plain Cotton",
    category: "Cotton & Rayon",
    unit: "5 mtr",
    sellPrice: 349,
    mrp: 480,
    badge: "All Season",
    colors: ["#ffffff", "#000000", "#f59e0b", "#3b82f6"],
    description: "Fine count pure plain cotton fabric. Guaranteed soft touch, shrink-resistant, comfortable in all seasons.",
    image: "/products/cotton-plain.webp",
    inStock: true,
  },
];

// Special Clearance / Diwali Festival Offer items
export const DIWALI_OFFER_ITEMS = [
  {
    id: "stock-1",
    name: "Diwali Special Georgette",
    subTitle: "Festive Flowing Georgette Fabric Lot",
    category: "Diwali Offers",
    badge: "Diwali Bumper Deal",
    price5m: 199,
    mrp5m: 350,
    price10m: 349,
    mrp10m: 650,
    description: "Festive celebration special lot of fine georgette! Choose a 5 meter cut or save even more with a 10 meter continuous cut.",
    image: "/products/diwali-georgette.webp",
  },
  {
    id: "stock-2",
    name: "Diwali Special Crepe (Crape)",
    subTitle: "Lowest Festive Price Crepe Lot",
    category: "Diwali Offers",
    badge: "Diwali Dhamaka ₹125",
    price5m: 125,
    mrp5m: 220,
    price10m: 240,
    mrp10m: 420,
    description: "Unbeatable festive wholesale value! 5 meters for ₹125 or 10 meters for just ₹240. Fastest selling festival stock.",
    image: "/products/diwali-crepe.webp",
  },
  {
    id: "stock-3",
    name: "Diwali Special Organza",
    subTitle: "Crisp Shimmer Festive Organza",
    category: "Diwali Offers",
    badge: "Festive Special",
    price5m: 250,
    mrp5m: 400,
    price10m: 400,
    mrp10m: 700,
    description: "Crisp shimmer festive organza cut piece for lehengas and dupattas. 5m bundle for ₹250 and 10m mega pack for ₹400.",
    image: "/products/diwali-organza.webp",
  },
  {
    id: "stock-4",
    name: "Diwali Vertical Crepe",
    subTitle: "Festive Line Textured Crepe Lot",
    category: "Diwali Offers",
    badge: "Festive Mega Saver",
    price5m: 370,
    mrp5m: 580,
    price10m: 700,
    mrp10m: 1100,
    description: "Vertical ribbed designer crepe. Rich festive texture, 5 meters at ₹370 and 10 meters at ₹700.",
    image: "/products/diwali-vertical.webp",
  },
];

export const STOCK_WINTER_ITEMS = DIWALI_OFFER_ITEMS;

export const CATEGORIES = [
  "All Fabrics",
  "Silk & Festive",
  "Crepe & Georgette",
  "Cotton & Rayon",
  "Organza Collection",
  "Dupattas & Pants",
  "Everyday Fabrics",
  "Diwali Offers",
];
