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

export function Slide06Segmentation({ onSectorClick, isActive }: Slide06SegmentationProps & { isActive: boolean }) {
  const animState = useSlideEnter(100);

  const handleCardClick = (idx: number) => {
    console.log("Card Clicked (Slide Component):", sectors[idx].title);
    if (onSectorClick) onSectorClick(idx);
  };

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-8 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+1rem)] pt-[calc(1.5rem+var(--header-height,0px))] md:pt-[calc(2rem+var(--header-height,0px))] overflow-y-auto relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(244,121,32,0.15)_0%,transparent_70%)]" />
      </div>

      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-[90rem] mx-auto my-auto z-10 text-center flex flex-col items-center">
        {/* Title - Structural Focus */}
        <motion.h2 
          variants={fadeUp}
          className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-brand-white leading-tight tracking-tight mb-2 w-full"
        >
          Multiple industries. <span className="text-white drop-shadow-sm italic">One core infrastructure.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-sm md:text-base text-brand-white/70 max-w-2xl font-medium leading-relaxed mb-6 lg:mb-8"
        >
          Churchwin’s operational model serves the three highest-growth segments in the global botanical market, leveraging a single integrated supply chain for maximum efficiency.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 w-full mb-6">
          {sectors.map((sector, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              onClick={() => handleCardClick(i)}
              className="p-4 md:p-5 lg:p-6 bg-white/10 backdrop-blur-md border border-brand-white/10 rounded-[20px] md:rounded-[24px] hover:border-brand-orange/40 transition-all group relative overflow-hidden cursor-pointer shadow-lg"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="text-4xl md:text-5xl font-black text-white italic">0{i+1}</div>
              </div>
              <h3 className="text-brand-white font-display font-bold text-base md:text-lg mb-1 md:mb-2 group-hover:text-brand-orange transition-colors">{sector.title}</h3>
              <p className="text-brand-white/60 text-[11px] md:text-xs font-primary leading-relaxed mb-3 md:mb-4 line-clamp-2">{sector.desc}</p>
              <div className="pt-3 border-t border-white/10 text-left">
                 <span className="text-[8px] font-black uppercase tracking-widest text-brand-orange block mb-1">Key Features:</span>
                 <p className="text-[9px] md:text-[10px] text-brand-white/40 font-medium truncate">{sector.features[0]}</p>
                 <p className="text-[9px] md:text-[10px] text-brand-white/40 font-medium truncate">{sector.features[1]}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INSIGHT CLOSE */}
        <motion.div 
          variants={fadeUp}
          className="py-4 md:py-5 border-y border-white/5 w-full max-w-2xl"
        >
          <p className="text-brand-white/60 text-base md:text-lg font-primary italic">
            &quot;Same supply chain. <span className="text-brand-orange font-bold not-italic">Multiple revenue paths.</span>&quot;
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
