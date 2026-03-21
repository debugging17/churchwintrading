"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { DeckVideo } from "../components/DeckVideo";

// SLIDE 05: SECTION DIVIDER — WHERE WE PLAY
// Skills applied:
//   visual-storyteller: Video background creates high-momentum transition into the "Market Positioning" phase.
//   brand-guardian: Navy-tinted glass overlay maintains premium brand identity on top of movement.
//   frontend-engineer: Clean z-index layer stack — video(0) → overlay(1) → content(10).
//   proposal-strategist: "Six industries. One supply chain advantage."

export function Slide05WhereWePlay({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-white pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(3rem+var(--header-height,0px))] overflow-y-auto relative">
      
      {/* === LAYER 0: Cinematic Video background === */}
      <DeckVideo 
        src="/assets/videos/cinematic-cover.mp4" 
        isActive={isActive}
        className="grayscale-[0.5] opacity-60"
      />

      {/* === LAYER 1: Deep Navy Overlays === */}
      <div className="absolute inset-0 bg-brand-navy/30 backdrop-blur-[2px] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/60 via-transparent to-brand-navy/80 z-[2]" />

      {/* === LAYER 10: Centered Content === */}
      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl px-8"
      >
              {/* HEADING — The Strategic Paradox */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl xl:text-6xl font-display font-black text-white leading-tight mb-12 tracking-tighter w-full"
          >
            Current models are <span className="text-white drop-shadow-sm italic">extractive, not expansive.</span>
          </motion.h2>

          {/* REALITY POINTS — High Conviction */}
          <motion.div variants={fadeUp} className="space-y-4 w-full max-w-[80rem] px-4 md:px-12 items-center flex flex-col">
             <div className="flex gap-[1px] mb-6 w-full">
                <div className="flex-1 p-6 bg-brand-navy text-white font-display font-black text-sm md:text-base uppercase tracking-widest text-center border-r border-white/10">The Presence</div>
                <div className="flex-1 p-6 bg-brand-orange text-white font-display font-black text-sm md:text-base uppercase tracking-widest text-center">The Failure</div>
             </div>
            {[
              { label: "Supply Exists", res: "NO Structured Demand", icon: "⚡" },
              { label: "Buyers Exist", res: "NO Consistent Contracts", icon: "⚡" },
              { label: "Infrastructure Ready", res: "NO Visibility", icon: "⚡" },
            ].map((pt, i) => (
              <div key={i} className="flex items-center group w-full">
                <div className="flex-1 p-6 bg-brand-navy/80 text-white font-medium text-lg md:text-xl border-l-4 border-brand-navy/20 backdrop-blur-md">{pt.label}</div>
                <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-brand-navy text-brand-orange font-bold z-10 scale-125 rounded-full shadow-lg text-xl md:text-2xl">{pt.icon}</div>
                <div className="flex-1 p-6 bg-brand-orange/80 text-white font-black text-lg md:text-xl border-r-4 border-brand-orange backdrop-blur-md">{pt.res}</div>
              </div>
            ))}
          </motion.div>

          {/* CALL TO ACTION / INSIGHT */}
          <motion.div 
            variants={fadeUp}
            className="mt-12 inline-block px-10 py-5 bg-brand-navy text-brand-white rounded-2xl shadow-2xl border-b-4 border-brand-orange"
          >
            <p className="text-sm font-display font-black uppercase tracking-[0.2em] leading-tight">
               Existing models act as a sponge, <br />
               not an engine.
            </p>
          </motion.div>
        {/* Accent Bar */}
        <motion.div 
          variants={fadeUp}
          className="mt-16 w-32 h-[2px] bg-brand-orange shadow-[0_0_15px_rgba(255,106,0,0.8)]"
        />
      </motion.div>
    </div>
  );
}
