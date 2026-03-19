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
      <div className="w-full h-full flex flex-col justify-center px-16 xl:px-24 z-20 relative">
        <motion.div
          initial="hidden"
          animate={animState}
          className="max-w-3xl"
        >
          {/* Section Marker */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 mb-12"
          >
             <span className="text-brand-orange text-3xl font-black tracking-tighter">
              01
             </span>
             <div className="w-16 h-[2px] bg-brand-orange/60" />
             <p className="text-brand-white/60 text-xs tracking-[0.5em] uppercase font-bold">
              The Strategic Context
             </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={slideFromLeft}
            className="text-6xl md:text-8xl xl:text-9xl font-black text-brand-white leading-[0.9] mb-12 tracking-tighter drop-shadow-2xl"
          >
            THE INDUSTRIAL <br />
            <span className="text-brand-orange text-shadow-lg">CROSSROADS.</span>
          </motion.h2>

          {/* Hardened Copy in Glass Container */}
          <motion.div 
            variants={fadeUp} 
            className="space-y-8 bg-brand-navy/40 backdrop-blur-xl border-l-[6px] border-brand-orange p-10 max-w-2xl rounded-r-2xl shadow-2xl"
          >
            <p className="text-xl md:text-2xl text-brand-white leading-relaxed italic font-light">
              &ldquo;Africa does not have a supply problem. It has a professional infrastructure and demand aggregation problem.&rdquo;
            </p>
            <p className="text-base md:text-lg text-brand-white/70 font-primary leading-relaxed font-light">
              Ghana&apos;s economy is currently hamstrung by fragmented SMEs that cannot institutionalize. To fix the middle, we must professionalize the gatekeepers.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle branding detail */}
      <div className="absolute bottom-12 left-16 xl:left-24 z-30 opacity-40">
        <Image 
          src="/assets/images/churchwin_logo_new.png" 
          alt="Logo" 
          width={120} 
          height={30} 
          className="grayscale invert"
        />
      </div>
    </div>
  );
}
