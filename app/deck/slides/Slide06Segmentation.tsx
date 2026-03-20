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
    <div className="w-full h-full flex flex-col py-10 md:py-12 px-10 md:px-24 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(4rem+var(--header-height,0px))] overflow-y-auto relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(244,121,32,0.15)_0%,transparent_70%)]" />
      </div>

      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto my-auto z-10 text-center flex flex-col items-center">
        {/* Title - Structural Focus */}
        <motion.h2 
          variants={fadeUp}
          className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-white leading-none tracking-tight mb-8"
        >
          Multiple industries. <br />
          <span className="text-brand-orange underline decoration-white/10 italic">One core infrastructure.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-base md:text-lg text-brand-white/70 max-w-2xl font-medium leading-relaxed mb-12"
        >
          Churchwin’s operational model serves the three highest-growth segments in the global botanical market, leveraging a single integrated supply chain for maximum efficiency.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-12">
          {[
            { label: "Cosmetic Manufacturers", sub: "Grade A anti-aging & skin repair inputs.", detail: "Shea Butter, Baobab Oil, Neem Oil" },
            { label: "Nutraceuticals", sub: "Standardized supplements & functional powders.", detail: "Hibiscus, Moringa, Baobab Fruit" },
            { label: "Food & Beverage", sub: "Soluble concentrates & mass fortification.", detail: "Cashew, Ginger, Cocoa derivatives" }
          ].map((sector, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="p-8 bg-brand-white/5 border border-brand-white/10 rounded-[32px] hover:border-brand-orange/40 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="text-6xl font-black text-white italic">0{i+1}</div>
              </div>
              <h3 className="text-brand-white font-display font-bold text-xl mb-3 group-hover:text-brand-orange transition-colors">{sector.label}</h3>
              <p className="text-brand-white/60 text-sm font-primary leading-relaxed mb-6">{sector.sub}</p>
              <div className="pt-4 border-t border-white/10 text-left">
                 <span className="text-[9px] font-black uppercase tracking-widest text-brand-orange block mb-1">Key Inputs:</span>
                 <p className="text-xs text-brand-white/40 font-medium">{sector.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INSIGHT CLOSE */}
        <motion.div 
          variants={fadeUp}
          className="py-6 border-y border-white/5 w-full max-w-2xl"
        >
          <p className="text-brand-white/60 text-lg md:text-xl font-primary italic">
            &quot;Same supply chain. <span className="text-brand-orange font-bold not-italic">Multiple revenue paths.</span>&quot;
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
