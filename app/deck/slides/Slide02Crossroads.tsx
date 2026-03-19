"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideFromLeft } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

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

          {/* Heading */}
          <motion.h2
            variants={slideFromLeft}
            className="text-[clamp(3rem,8vw,8rem)] font-black text-brand-white leading-[0.9] mb-[3rem] tracking-tighter drop-shadow-2xl"
          >
            THE INDUSTRIAL <br />
            <span className="text-brand-orange text-shadow-lg drop-shadow-[0_0_15px_rgba(255,106,0,0.3)]">CROSSROADS.</span>
          </motion.h2>

          {/* Hardened Copy in Glass Container */}
          <motion.div 
            variants={fadeUp} 
            className="space-y-[2rem] bg-brand-navy/40 backdrop-blur-xl border-l-[0.4rem] border-brand-orange p-[2.5rem] max-w-[40rem] rounded-r-[1rem] shadow-2xl"
          >
            <p className="text-[1.25rem] md:text-[1.5rem] text-brand-white leading-relaxed italic font-light">
              &ldquo;Africa does not have a supply problem. It has a professional infrastructure and demand aggregation problem.&rdquo;
            </p>
            <p className="text-[1rem] text-brand-white/70 font-primary leading-relaxed font-light">
              Ghana&apos;s economy is currently hamstrung by fragmented SMEs that cannot institutionalize. To fix the middle, we must professionalize the gatekeepers.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
