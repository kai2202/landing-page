import React from 'react';
import { motion } from 'motion/react';
import { Utensils, Award } from 'lucide-react';
import { FOOD_ITEMS } from '../data';

export function FoodTourSection() {
  return (
    <div className="w-full" id="culinary-food-tour-grid">
      {/* 3x2 Grid for desktop, responsive grid for tablet/mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FOOD_ITEMS.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-[#0C1E2D] border border-nat-sand/40 shadow-md cursor-pointer"
            id={`food-card-${item.id}`}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70"
            />

            {/* Permanent Subtle Layer to guide contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:bg-black/50" />

            {/* Inactive state primary label (so text is visible before hover too) */}
            <div className="absolute left-6 bottom-6 right-6 z-10 transition-all duration-500 transform group-hover:translate-y-[-70px] group-hover:opacity-0 animate-fade-in">
              <span className="inline-flex items-center gap-1.5 px-2 bg-nat-sage/90 text-white rounded-md text-[10px] font-bold py-0.5 uppercase tracking-wide">
                <Utensils size={10} />
                {item.category}
              </span>
              <h5 className="font-serif text-lg font-bold text-white tracking-tight mt-1">
                {item.name}
              </h5>
            </div>

            {/* Hover State Reveal Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-nat-sage/95 backdrop-blur-[2px]">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-nat-earth/20 text-nat-sand border border-nat-earth/30 rounded-md text-[9px] uppercase font-bold tracking-widest mb-3">
                  <Award size={10} />
                  Ẩm thực tinh hoa
                </div>
                
                <h4 className="font-serif text-xl font-extrabold text-white tracking-tight mb-2">
                  {item.name}
                </h4>
                
                <p className="text-xs text-nat-sand/90 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="text-[10px] uppercase text-nat-sand/80 font-bold tracking-widest">
                    Hạng mục tour:
                  </span>
                  <span className="text-xs font-semibold text-white bg-nat-earth/90 px-2 py-0.5 rounded-full">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
