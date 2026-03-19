"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

// SLIDE 05: SECTION DIVIDER — WHERE WE PLAY
// Skills applied:
//   visual-storyteller: Video background creates high-momentum transition into the "Market Positioning" phase.
//   brand-guardian: Navy-tinted glass overlay maintains premium brand identity on top of movement.
//   frontend-engineer: Clean z-index layer stack — video(0) → overlay(1) → content(10).
//   proposal-strategist: "Six industries. One supply chain advantage." — key positioning statement.

export function Slide05WhereWePlay() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-navy">
      
      {/* === LAYER 0: Cinematic Video background === */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 grayscale opacity-80"
      >
        <source src="/assets/videos/cinematic-cover.mp4" type="video/mp4" />
      </video>

      {/* === LAYER 1: Deep Navy Overlays === */}
      <div className="absolute inset-0 bg-brand-navy/60 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy z-[2]" />

      {/* === LAYER 10: Centered Content === */}
      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="relative z-10 flex flex-col items-center text-center max-w-4xl px-8"
      >
        {/* Section Number */}
        <motion.div 
          variants={fadeUp}
          className="font-display text-brand-orange text-3xl font-black tracking-[0.5em] mb-8"
        >
          02
        </motion.div>
        
        {/* Title */}
        <div className="overflow-hidden mb-8">
          <motion.h2 
            variants={slideFromLeft}
            className="font-display text-7xl md:text-9xl font-black text-brand-white tracking-tighter leading-none"
          >
            WHERE WE <br />
            <span className="text-brand-orange drop-shadow-2xl">PLAY.</span>
          </motion.h2>
        </div>
        
        {/* Subtitle / Positioning Statement */}
        <motion.p
          variants={fadeUp}
          className="font-primary text-2xl md:text-3xl text-brand-white/80 font-light italic leading-relaxed max-w-3xl border-t border-brand-white/10 pt-12"
        >
          Six industries. <span className="text-brand-orange font-bold">One supply chain advantage.</span>
        </motion.p>
        
        {/* Accent Bar */}
        <motion.div 
          variants={fadeUp}
          className="mt-16 w-32 h-[2px] bg-brand-orange shadow-[0_0_15px_rgba(255,106,0,0.8)]"
        />
      </motion.div>
    </div>
  );
}
