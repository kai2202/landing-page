import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, ZoomIn, X, Film, Camera, User } from 'lucide-react';
import { EXPERIENCE_MEDIA } from '../data';
import { ExperienceMedia } from '../types';

export function ExperienceSection() {
  const [activeMedia, setActiveMedia] = useState<ExperienceMedia | null>(null);

  return (
    <div className="w-full" id="travel-experience-masonry">
      {/* Structural Mosaic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px] md:auto-rows-[280px]">
        {EXPERIENCE_MEDIA.map((item) => {
          const isVideo = item.type === 'video';

          return (
            <motion.div
              key={item.id}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className={`relative group overflow-hidden rounded-2xl shadow-sm border border-nat-sand/40 bg-nat-bg cursor-pointer ${
                item.aspectClass || 'col-span-1 row-span-1'
              }`}
              onClick={() => setActiveMedia(item)}
              id={`media-cell-${item.id}`}
            >
              {/* Media Thumbnail */}
              <img
                src={item.thumbnailUrl}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />

              {/* Linear top-bottom dark overlay for legibility */}
              <div className="absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-black/85 via-black/45 to-transparent pointer-events-none transition-opacity duration-300 group-hover:from-black/95" />
              <div className="absolute top-4 left-4 z-5 pointer-events-none animate-fade-in">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider rounded-md backdrop-blur-md ${
                  isVideo ? 'bg-nat-earth/80' : 'bg-nat-sage/80'
                }`}>
                  {isVideo ? <Film size={11} className="stroke-[2.5]" /> : <Camera size={11} className="stroke-[2.5]" />}
                  {isVideo ? 'Thước phim' : 'Góc ảnh'}
                </span>
              </div>

              {/* Interactive Play Button (for Videos) */}
              {isVideo ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-full bg-white/95 text-nat-sage shadow-xl flex items-center justify-center ring-4 ring-white/20 hover:text-white hover:bg-nat-sage transition-colors duration-300"
                  >
                    <Play size={20} className="fill-current ml-1" />
                  </motion.div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-nat-text flex items-center justify-center shadow-lg">
                    <ZoomIn size={18} />
                  </div>
                </div>
              )}

              {/* Photo description and photographer labels */}
              <div className="absolute inset-x-0 bottom-0 p-5 z-5 text-white transform transition-transform duration-300">
                <h5 className="font-serif font-bold text-sm leading-snug tracking-tight line-clamp-1 group-hover:line-clamp-none">
                  {item.title}
                </h5>
                <div className="flex items-center gap-2 mt-1.5 text-[11px] text-nat-sand/80">
                  <User size={10} />
                  <span>Ống kính: {item.author}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Media Lightbox / HTML5 Video Player Modal */}
      <AnimatePresence>
        {activeMedia && (
          <div className="fixed inset-0 z-55 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveMedia(null)}
              className="absolute inset-0 bg-[#131714]/90 backdrop-blur-md"
              id="media-backdrop"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl z-10 border border-nat-sand/25"
              id="active-media-modal"
            >
              <button
                type="button"
                onClick={() => setActiveMedia(null)}
                className="absolute top-5 right-5 z-20 text-white/80 hover:text-white bg-[#0C1E2D]/60 hover:bg-[#0C1E2D] backdrop-blur-md p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-video w-full bg-neutral-950 flex items-center justify-center">
                {activeMedia.type === 'video' ? (
                  <video
                    src={activeMedia.url}
                    poster={activeMedia.thumbnailUrl}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={activeMedia.url}
                    alt={activeMedia.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              {/* Title & Author Description bar */}
              <div className="bg-[#0F2231] p-5 md:p-6 text-white border-t border-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-nat-sage/20 text-nat-sand border border-nat-sage/15 rounded-md text-[10px] uppercase font-bold tracking-wider mb-2 animate-fade-in">
                      {activeMedia.type === 'video' ? 'Thước phim thực tế' : 'Góc chụp khoảnh khắc'}
                    </span>
                    <h4 className="font-serif text-base md:text-lg font-bold leading-snug">
                      {activeMedia.title}
                    </h4>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <p className="text-xs text-nat-sand/65">Người chia sẻ:</p>
                    <p className="text-sm font-semibold text-nat-earth mt-0.5">{activeMedia.author}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
