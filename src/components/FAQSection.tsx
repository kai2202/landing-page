import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Check } from 'lucide-react';
import { FAQ_DATA } from '../data';

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default open the first one

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4" id="itinerary-tour-faqs">
      {FAQ_DATA.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div
            key={faq.id}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
              isOpen
                ? 'border-nat-sage/30 bg-nat-sage/5 shadow-sm'
                : 'border-nat-sand bg-white hover:border-nat-sand/80'
            }`}
            id={`faq-accordion-${faq.id}`}
          >
            {/* Accordion Trigger Label */}
            <button
              type="button"
              onClick={() => toggleAccordion(faq.id)}
              className="w-full relative px-6 py-5 text-left flex items-center justify-between gap-4 outline-none cursor-pointer"
            >
              <div className="flex items-center gap-3.5 pr-2">
                <span className={`shrink-0 flex items-center justify-center w-7 h-7 rounded-lg transition-colors duration-300 ${
                  isOpen ? 'bg-nat-sage text-white' : 'bg-nat-bg text-nat-text/50'
                }`}>
                  <HelpCircle size={15} />
                </span>
                <span className={`font-serif font-bold text-sm md:text-base tracking-tight transition-colors duration-300 ${
                  isOpen ? 'text-nat-text' : 'text-nat-text/85'
                }`}>
                  {faq.question}
                </span>
              </div>
              <span className={`shrink-0 text-nat-text/40 transition-transform duration-300 ${
                isOpen ? 'rotate-180 text-nat-sage' : 'rotate-0'
              }`}>
                <ChevronDown size={18} />
              </span>
            </button>

            {/* Accordion Collapsible Detail Answer */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-nat-text/80 text-xs md:text-sm leading-relaxed border-t border-nat-sand/35">
                    <p className="pl-10 relative">
                      <span className="absolute left-1.5 top-1 flex items-center justify-center w-5 h-5 rounded-full bg-nat-sage/10 text-nat-sage">
                        <Check size={12} className="stroke-[3]" />
                      </span>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
