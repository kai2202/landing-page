import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Footprints, Sun, Palette, ShoppingBag, Heart } from 'lucide-react';
import { TIMELINE_DATA } from '../data';

// Map iconName strings to active Lucide Components safely
const iconMap: { [key: string]: React.ComponentType<any> } = {
  Compass: Compass,
  Footprints: Footprints,
  Sun: Sun,
  Palette: Palette,
  ShoppingBag: ShoppingBag,
  Heart: Heart,
};

export function TimelineSection() {
  const [activeDay, setActiveDay] = useState(1);

  const selectedDayData = TIMELINE_DATA.find((day) => day.dayNum === activeDay) || TIMELINE_DATA[0];

  return (
    <div className="w-full" id="itinerary-timeline-component">
      {/* Day Selector Tabs */}
      <div className="flex justify-center items-center gap-2 max-w-lg mx-auto mb-10 bg-[#FAF9F5]/80 p-1.5 rounded-2xl border border-nat-sand">
        {TIMELINE_DATA.map((day) => {
          const isActive = day.dayNum === activeDay;
          return (
            <button
              key={day.dayNum}
              type="button"
              onClick={() => setActiveDay(day.dayNum)}
              className="relative flex-1 py-3 text-center rounded-xl font-sans text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 outline-none cursor-pointer"
            >
              <span className={`relative z-10 ${isActive ? 'text-nat-sage font-bold font-display' : 'text-nat-text/65 hover:text-nat-text'}`}>
                Ngày 0{day.dayNum}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeDayTab"
                  className="absolute inset-0 bg-white rounded-xl shadow-sm border border-nat-sand/40"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Description Header for selected day with transition */}
      <div className="text-center mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-serif text-xl md:text-2xl font-bold text-nat-text tracking-tight">
              {selectedDayData.dayTitle}
            </h4>
            <p className="text-xs md:text-sm text-nat-earth font-bold mt-1.5 uppercase tracking-wide">
              ✦ {selectedDayData.daySubtitle} ✦
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Timeline view */}
      <div className="relative max-w-3xl mx-auto pl-4 pr-4">
        {/* Mid line */}
        <div className="absolute left-[33px] md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-nat-sage/30 via-nat-sage/10 to-transparent transform -translate-x-1/2 pointer-events-none hidden md:block" />
        <div className="absolute left-[33px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-nat-sage/30 via-nat-sage/10 to-transparent pointer-events-none block md:hidden" />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {selectedDayData.activities.map((activity, index) => {
              const IconComponent = iconMap[activity.iconName] || Compass;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge (Desktop) */}
                  <div className="hidden md:flex items-center justify-center w-1/2 px-8 text-right">
                    <div className={`${isEven ? 'text-left w-full' : 'text-right w-full'}`}>
                      <span className="inline-block px-3.5 py-1 bg-nat-sage/10 text-nat-sage rounded-full font-mono text-xs font-semibold tracking-wider">
                        {activity.time}
                      </span>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 z-10 flex items-center justify-center w-10.5 h-10.5 rounded-full bg-nat-sage text-white shadow-md shadow-nat-sage/20 ring-4 ring-white">
                    <IconComponent size={20} className="stroke-[2.2]" />
                  </div>

                  {/* Activity Card */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                    <div className="bg-white border border-nat-sand hover:border-nat-sage/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="md:hidden mb-3">
                        <span className="inline-block px-3 py-0.5 bg-nat-sage/10 text-nat-sage rounded-full font-mono text-[11px] font-semibold tracking-normal">
                          {activity.time}
                        </span>
                      </div>
                      <h5 className="font-serif font-bold text-base md:text-lg text-nat-text mb-2 leading-snug">
                        {activity.title}
                      </h5>
                      <p className="text-xs md:text-sm text-nat-text/75 leading-relaxed">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
