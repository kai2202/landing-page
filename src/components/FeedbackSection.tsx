import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, Quote, Calendar } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export function FeedbackSection() {
  return (
    <div className="w-full" id="traveler-feedback-reviews">
      {/* 3 columns on desktop, horizontal scrollable/stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {TESTIMONIALS.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col justify-between bg-white border border-nat-sand hover:border-nat-sage/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:shadow-nat-sage/5 transition-all duration-300 relative group"
            id={`feedback-card-${review.id}`}
          >
            {/* Visual quote accent icon */}
            <div className="absolute right-6 top-6 text-nat-sand/30 group-hover:text-nat-sage/15 group-hover:scale-110 transition-all duration-500 pointer-events-none">
              <Quote size={55} className="fill-current rotate-180" />
            </div>

            <div className="relative">
              {/* Star Rating Group */}
              <div className="flex items-center gap-1 text-nat-earth mb-5 animate-fade-in">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={15} className="fill-current stroke-[2]" />
                ))}
              </div>

              {/* Review Content */}
              <p className="font-serif text-xs sm:text-sm text-nat-text/80 leading-relaxed italic pr-2 mb-6">
                "{review.content}"
              </p>
            </div>

            {/* Author Profile and verification info */}
            <div className="flex items-center gap-4 pt-5 border-t border-nat-sand mt-auto">
              <div className="relative shrink-0">
                <img
                  src={review.avatar}
                  alt={review.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-nat-sage/20"
                />
                {review.isVerified && (
                  <span className="absolute bottom-0 right-0 bg-white rounded-full p-0.5 shadow">
                    <CheckCircle2 size={12} className="text-nat-sage fill-white" />
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h5 className="font-serif font-bold text-sm text-nat-text leading-tight">
                    {review.name}
                  </h5>
                  {review.isVerified && (
                    <span className="text-[10px] text-nat-sage bg-nat-sage/10 px-1.5 py-0.5 rounded-full font-semibold border border-nat-sage/15 hidden sm:inline-block">
                      Đã vi vu
                    </span>
                  )}
                </div>
                
                {/* Associated package name and dates */}
                <p className="text-[11px] text-nat-text/60 mt-1 truncate max-w-[180px] sm:max-w-[220px]">
                  Tour: {review.tourName}
                </p>
                <div className="flex items-center gap-1 text-[10px] text-nat-text/50 mt-0.5">
                  <Calendar size={10} />
                  <span>Ngày: {review.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
