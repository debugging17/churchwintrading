"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ChevronRight } from "lucide-react";
import { sectors } from "../data/sectors";

interface Slide06SegmentationProps {
  onSectorClick?: (idx: number) => void;
}

export function Slide06Segmentation({ onSectorClick }: Slide06SegmentationProps) {
  const animState = useSlideEnter(100);

  const handleCardClick = (idx: number) => {
    console.log("Card Clicked (Slide Component):", sectors[idx].title);
    if (onSectorClick) onSectorClick(idx);
  };

  return (
    <div className="w-full h-full flex flex-col py-10 md:py-12 px-10 md:px-24 bg-brand-white pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(4rem+var(--header-height,0px))] overflow-y-auto">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto my-auto z-10">
        
        <motion.div variants={fadeUp} className="mb-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-navy mb-3">
            Six target sectors. <span className="text-brand-orange font-light">One core infrastructure.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {sectors.map((sector, idx) => (
            <button 
              key={idx}
              onClick={(e) => { 
                e.stopPropagation(); 
                handleCardClick(idx); 
              }}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') handleCardClick(idx); }}
              type="button"
              className="w-full text-left bg-brand-navy/5 border border-brand-navy/10 p-6 rounded-xl group hover:bg-brand-navy/10 transition-colors duration-300 relative overflow-hidden shadow-sm cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 z-20 pointer-events-auto no-swiping"
            >
              {/* Hover effect glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 border border-brand-navy/10 group-hover:border-brand-orange/50 transition-colors shadow-sm">
                  <sector.icon className="w-4 h-4 text-brand-orange" />
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    {sector.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
                
                <p className="font-primary text-xs text-brand-navy/70 mb-4 flex-grow">
                  {sector.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-brand-navy/10">
                  <span className="text-[10px] font-display uppercase tracking-widest text-brand-orange font-bold">🎯 Target: </span>
                  <span className="text-xs font-primary text-brand-navy/80 font-medium">{sector.target}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
