"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideFromLeft } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import dynamic from "next/dynamic";

const RemotionValueGapWrapper = dynamic(
  () => import("../components/RemotionValueGapWrapper").then((mod) => mod.RemotionValueGapWrapper),
  { ssr: false }
);

// SLIDE 02: THE INDUSTRIAL CROSSROADS
// Skills applied:
//   visual-storyteller: Full-bleed drone shot establishes scale and industrial gravity.
//   frontend-engineer: Negative-margin glassmorphism overlap for text readability.
//   brand-guardian: Navy-to-transparent gradient mask preserves branding on complex backgrounds.
//   ux-architect: Visual hierarchy leads from the big "01" to the provocative quote.

export function Slide02Crossroads() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex relative overflow-hidden bg-brand-navy font-display">
      
      {/* === LAYER 0: Full-bleed cinematic background === */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgrounds/industrial_crossroads.png" 
          alt="African Industrial Hub" 
          fill 
          className="object-cover brightness-[0.7] contrast-[1.1]"
          priority
        />
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply z-10" />
      </div>

      {/* === LAYER 1: Content Overlay === */}
      <div className="w-full h-full flex flex-col justify-center px-[4rem] xl:px-[6rem] pb-[8rem] z-20 relative">
        <motion.div
          initial="hidden"
          animate={animState}
          className="max-w-[48rem]"
        >
          {/* Section Marker */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-[1rem] mb-[3rem]"
          >
             <span className="text-brand-orange text-[2rem] font-black tracking-tighter">
              01
             </span>
             <div className="w-[4rem] h-[2px] bg-brand-orange/60" />
             <p className="text-brand-white/60 text-[0.6rem] tracking-[0.5em] uppercase font-bold">
              The Strategic Context
             </p>
          </motion.div>

          {/* HEADING — The Structural Point */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl xl:text-7xl font-display font-black text-brand-white leading-[1.1] mb-10 tracking-tighter drop-shadow-2xl"
          >
            Escaping the <br />
            <span className="text-brand-orange drop-shadow-sm italic">Commodity Trap.</span>
          </motion.h2>

          {/* POINTS — Reality-Backed */}
          <motion.div variants={fadeUp} className="space-y-8 max-w-xl">
            {[
              { 
                label: "Structural Volatility", 
                sub: "33% local price volatility caused by unregulated export dependencies—unrefined shea prices saw year-to-date swings of $0.21 to $0.91/kg." 
              },
              { 
                label: "The Infrastructure Gap", 
                sub: "Africa produces 60% of Global Shea, but the 'Commodity Trap' ensures only <10% of total economic value is captured locally." 
              },
              { 
                label: "Institutional Readiness", 
                sub: "90% of value is captured by international refiners who own the 'Trust Infrastructure' (COSMOS/Fair Trade) required by Tier-1 buyers." 
              },
            ].map((pt, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.4)]" />
                  <div className="flex flex-col gap-1">
                    <span className="text-lg md:text-xl font-display font-bold text-brand-white tracking-tight">{pt.label}</span>
                    <p className="text-sm text-brand-white/60 leading-relaxed">{pt.sub}</p>
                  </div>
                </div>
                {i === 1 && (
                  <div className="ml-6">
                    <RemotionValueGapWrapper />
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* INSIGHT CLOSE — Systemic Focus */}
          <motion.div 
            variants={fadeUp}
            className="mt-14 p-6 bg-brand-orange/[0.03] border-l-4 border-brand-orange/50 italic text-brand-white/70 text-lg md:text-xl font-medium max-w-lg leading-relaxed shadow-sm rounded-r-xl"
          >
            &quot;This is not a resource problem. <span className="text-brand-white font-black not-italic">It is a systems problem.</span>&quot;
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
