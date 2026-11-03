import React from 'react';
import { ShieldCheck, Truck, Sparkles, Scissors, BadgePercent } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhyChooseUs() {
  const features = [
    {
      icon: BadgePercent,
      title: "Direct Wholesale Rates",
      highlight: "Direct Mill & Wholesale Pricing",
      desc: "Direct-from-source wholesale rates without middlemen. Delivering the highest profit margins for tailors, boutiques, and resellers.",
    },
    {
      icon: Scissors,
      title: "100% Genuine Cut Length",
      highlight: "Precise 5m & 10m Continuous Cuts",
      desc: "Every cut piece is accurately measured and inspected. Guaranteed single continuous cut pieces with zero internal joints.",
    },
    {
      icon: Truck,
      title: "Free Delivery on ₹500+",
      highlight: "Free Within 3 KM Radius of Shop",
      desc: "Enjoy ₹0 delivery charge on orders of ₹500+ within 3 KM radius of our Ayodhya Nagar Bhopal shop. Nominal delivery charges apply beyond 3 KM. Pan-India courier available anywhere in India.",
    },
    {
      icon: Sparkles,
      title: "Exclusive Fabric Variety",
      highlight: "24+ Curated Fabric Types",
      desc: "Chanderi silk, georgette, crepe, organza, velvet, pure cotton, and batik prints readily in stock for your creative designs.",
    },
    {
      icon: WhatsAppIcon,
      title: "Direct WhatsApp Ordering",
      highlight: "Quick & Simple 1-Click Ordering",
      desc: "No complicated signups or passwords required. Discuss fabric queries and place your order directly via WhatsApp in minutes.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Color Fastness",
      highlight: "Premium Weaves & Long-Lasting Dyes",
      desc: "High-grade weaves and colorfast dyes ensure your creations stay vibrant, lustrous, and luxurious even after multiple washes.",
    },
  ];

  return (
    <section id="why-us" className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 my-8 sm:my-14 lg:my-16 overflow-hidden">
      {/* Centered Uniform Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 overflow-hidden">
        <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#801438] bg-[#801438]/10 px-3.5 py-1.5 rounded-full mb-2.5 sm:mb-3 mx-auto">
          <Sparkles className="w-3.5 h-3.5 fill-current text-[#c99738]" />
          <span>Trust &amp; Purity</span>
        </div>
        
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0b1b36] tracking-tight text-center leading-snug px-1">
          Why Choose Anumeet Cutpiece?
        </h2>
        
        <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-2 leading-relaxed max-w-2xl mx-auto text-center px-1">
          The trusted fabric supplier for boutique designers, master tailors, and garment makers
        </p>
      </div>

      {/* Feature Cards Grid: 1 col on 320/375/425px, 2 col on 768px, 3 col on 1024px+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6">
        {features.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-[#c99738]/30 hover:border-[#c99738] transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0b1b36] text-[#ffd978] flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 transition-transform shrink-0">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold text-[#0b1b36] leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-[11px] sm:text-xs font-semibold text-[#801438] mt-0.5">
                  {item.highlight}
                </p>
                
                <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-2.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
