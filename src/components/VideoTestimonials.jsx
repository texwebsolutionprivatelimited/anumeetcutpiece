import React, { useState, useEffect } from 'react';
import { Play, X, Star, CheckCircle2, Sparkles, ExternalLink, Eye } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import WhatsAppIcon from './WhatsAppIcon';
import { VIDEO_TESTIMONIALS } from '../data/videoTestimonials';
import { STORE_CONFIG } from '../data/products';
import { createCustomFabricOrderWhatsAppLink } from '../utils/whatsapp';

// Extract Instagram Reel or Post ID from full URL
function getInstagramId(url = '') {
  if (!url) return null;
  const match = url.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  return match ? match[1] : null;
}

export default function VideoTestimonials({ whatsappPhone }) {
  const [activeVideo, setActiveVideo] = useState(null);

  // Lock background scroll when reel modal is open
  useEffect(() => {
    if (!activeVideo) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeVideo]);

  const activeReelId = activeVideo ? getInstagramId(activeVideo.reelUrl) : null;

  return (
    <section className="bg-gradient-to-b from-white via-[#faf7f2] to-white py-10 sm:py-16 border-b border-gray-200 relative overflow-hidden" id="video-reviews">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#801438] bg-[#801438]/10 px-3.5 py-1.5 rounded-full mb-2.5 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 fill-current text-[#c99738]" />
            <span>Real Customer Video Stories</span>
          </div>
          
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#0b1b36] tracking-tight leading-snug">
            Watch Client Reviews &amp; Reels
          </h2>
          
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base mt-2 leading-relaxed">
            See genuine unboxing, continuous cut fabric quality, and real customer feedback from homemakers and boutiques across Bhopal.
          </p>

          <p className="text-center text-[10.5px] sm:text-xs text-gray-500 sm:hidden mt-2 font-medium">
            👈 Swipe horizontally to explore customer reels 👉
          </p>
        </div>

        {/* Video Cards: Mobile Horizontal Swipe Carousel, Desktop 4-Col Grid */}
        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-4 no-scrollbar pb-3 sm:pb-0 px-1">
            {VIDEO_TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveVideo(item)}
                className="w-[78vw] xs:w-[72vw] sm:w-auto shrink-0 snap-center group relative bg-[#0b1b36] rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#c99738]/30 hover:border-[#c99738] aspect-[9/14] sm:aspect-[9/15] flex flex-col justify-between"
              >
                {/* Background Poster Image (Ultra-Fast WebP with Lazy Loading) */}
                <img
                  src={item.posterImage}
                  alt={`${item.clientName} Review`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Gradient Overlay for High Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/60 pointer-events-none" />

                {/* Top Badge: Instagram Logo + Views */}
                <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
                    <InstagramIcon className="w-3 h-3 text-[#f09433]" />
                    <span className="tracking-tight">Reel</span>
                  </div>

                  {item.views && (
                    <div className="inline-flex items-center gap-1 bg-black/50 backdrop-blur-md text-white/80 text-[10px] px-2 py-0.5 rounded-full">
                      <Eye className="w-3 h-3" />
                      <span>{item.views}</span>
                    </div>
                  )}
                </div>

                {/* Center: Stylish Pulsing Play Button */}
                <div className="relative z-10 flex items-center justify-center my-auto">
                  <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-white/95 text-[#801438] flex items-center justify-center shadow-2xl group-hover:scale-115 group-active:scale-95 transition-all duration-300 ring-4 ring-white/30">
                    <Play className="w-6 h-6 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay: Customer Info & Quote */}
                <div className="relative z-10 p-3.5 sm:p-4.5 space-y-2">
                  {/* Star Rating */}
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                    ))}
                  </div>

                  {/* Client Name & Verified Badge */}
                  <div>
                    <div className="flex items-center gap-1 text-white font-bold text-sm sm:text-base leading-tight">
                      <span className="truncate">{item.clientName}</span>
                      {item.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25d366] shrink-0" title="Verified Customer" />
                      )}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#ffd978] font-medium truncate mt-0.5">
                      {item.role} • {item.location}
                    </p>
                  </div>

                  {/* Fabric Tag */}
                  {item.fabricBought && (
                    <div className="inline-block bg-white/15 backdrop-blur-xs border border-white/20 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md truncate max-w-full">
                      {item.fabricBought}
                    </div>
                  )}

                  {/* Review Quote */}
                  <p className="text-[11px] sm:text-xs text-white/90 line-clamp-2 italic leading-relaxed pt-0.5">
                    "{item.reviewQuote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Follow Banner */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-[#801438] via-[#4a0a1f] to-[#0b1b36] rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl border border-[#c99738]/40">
          <div className="flex items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg shrink-0">
              <InstagramIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold tracking-tight">
                Follow @anumeetcutpiece.in on Instagram
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 mt-0.5">
                Watch daily new festive cuts arrivals, unboxing reels &amp; boutique client reviews!
              </p>
            </div>
          </div>

          <a
            href={STORE_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-bold py-2.5 px-5 rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 shrink-0"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram ↗</span>
          </a>
        </div>

      </div>

      {/* Interactive Reels Modal (Opens only when user clicks a card) */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0b1b36] w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-[#c99738]/50 flex flex-col relative max-h-[92dvh]"
          >
            {/* Modal Header */}
            <div className="p-3.5 bg-black/50 border-b border-white/10 flex items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-white truncate">
                    {activeVideo.clientName}
                  </h4>
                  <p className="text-[10px] text-[#ffd978] truncate">
                    {activeVideo.fabricBought}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close video player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Video / Reel Player Frame */}
            <div className="relative aspect-[9/14] bg-black flex items-center justify-center overflow-hidden">
              {activeReelId ? (
                <iframe
                  src={`https://www.instagram.com/reel/${activeReelId}/embed/`}
                  title={`${activeVideo.clientName} Instagram Reel`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              ) : (
                /* Fallback when sample/placeholder link is active */
                <div className="p-6 text-center space-y-3">
                  <img
                    src={activeVideo.posterImage}
                    alt={activeVideo.clientName}
                    className="w-24 h-24 rounded-2xl object-cover mx-auto border-2 border-[#c99738]"
                  />
                  <div>
                    <h5 className="font-bold text-white text-sm">
                      {activeVideo.clientName} ({activeVideo.location})
                    </h5>
                    <p className="text-xs text-gray-300 mt-1 italic">
                      "{activeVideo.reviewQuote}"
                    </p>
                  </div>
                  <p className="text-[11px] text-[#ffd978]">
                    Owner Notice: Add your Instagram Reel link in <code>src/data/videoTestimonials.js</code>
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer CTAs */}
            <div className="p-3 bg-black/60 border-t border-white/10 space-y-2 shrink-0">
              <a
                href={activeVideo.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-95 text-white font-bold py-2 rounded-xl text-xs shadow-md transition-all active:scale-95"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Open Reel in Instagram App ↗</span>
              </a>

              <a
                href={createCustomFabricOrderWhatsAppLink(whatsappPhone, activeVideo.fabricBought)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20ba59] text-white font-bold py-2 rounded-xl text-xs shadow-md transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Inquire About This Fabric</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
