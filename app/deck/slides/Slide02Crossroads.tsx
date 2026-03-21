"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ValueGapChart } from "../components/ValueGapChart";

// SLIDE 02: THE INDUSTRIAL CROSSROADS
// Skills applied:
//   visual-storyteller: Full-bleed drone shot establishes scale and industrial gravity.
//   frontend-engineer: Negative-margin glassmorphism overlap for text readability.
//   brand-guardian: Navy-to-transparent gradient mask preserves branding on complex backgrounds.
//   ux-architect: Visual hierarchy leads from the big "01" to the provocative quote.

export function Slide02Crossroads({ isActive }: { isActive: boolean }) {
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
      <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-transparent pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(3rem+var(--header-height,0px))] overflow-y-auto z-20 relative">
        <motion.div
          initial="hidden"
          animate={animState}
          variants={staggerContainer}
          className="w-full max-w-[100rem] mx-auto my-auto grid grid-cols-1 lg:grid-cols-[1.2fr,0.8fr] gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: Textual Narrative */}
          <div className="flex flex-col">
            {/* Section Marker (Principle 4: Morph / Continuity) */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-[1rem] mb-[2rem] lg:mb-[3rem]"
            >
               <span className="text-brand-orange text-[2rem] font-black tracking-tighter">
                01
               </span>
               <div className="w-[4rem] h-[2px] bg-brand-orange/60" />
               <p className="text-brand-white/60 text-[0.6rem] tracking-[0.5em] uppercase font-bold">
                The Strategic Context
               </p>
            </motion.div>

            {/* HEADING — The Structural Point (Principle 7: Purpose) */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl xl:text-7xl font-display font-black text-brand-white leading-[1.1] mb-8 lg:mb-10 tracking-tighter drop-shadow-2xl"
            >
              Escaping the <br />
              <span className="text-brand-orange drop-shadow-sm italic">Commodity Trap.</span>
            </motion.h2>

            {/* POINTS — Reality-Backed (Principle 11: Language) */}
            <motion.div 
              variants={staggerContainer}
              className="space-y-6 lg:space-y-8 max-w-xl"
            >
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
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.4)]" />
                    <div className="flex flex-col gap-1">
                      <span className="text-lg md:text-xl font-display font-bold text-brand-white tracking-tight">{pt.label}</span>
                      <p className="text-xs md:text-sm text-brand-white/60 leading-relaxed font-primary">{pt.sub}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* INSIGHT CLOSE — Systemic Focus */}
            <motion.div 
              variants={fadeUp}
              className="mt-10 lg:mt-14 p-6 bg-brand-orange/[0.03] border-l-4 border-brand-orange/50 italic text-brand-white/70 text-lg md:text-xl font-medium max-w-lg leading-relaxed shadow-sm rounded-r-xl font-primary"
            >
              &quot;This is not a resource problem. <span className="text-brand-white font-black not-italic">It is a systems problem.</span>&quot;
            </motion.div>
          </div>

          {/* Right Column: Data Visualization (Principle 12: Mimic - Entering from the "unseen void" at x:100) */}
          <div className="flex justify-end relative h-full">
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.92, x: 100, filter: 'blur(10px)' },
                visible: { 
                  opacity: 1, 
                  scale: 1, 
                  x: 0,
                  filter: 'blur(0px)',
                  transition: { 
                    type: "spring", 
                    stiffness: 60, 
                    damping: 18,
                    mass: 0.9,
                    delay: 0.6 
                  } 
                }
              }}
              className="w-full max-w-[32rem] flex flex-col gap-8 bg-brand-navy/60 backdrop-blur-xl p-8 lg:p-14 rounded-[3rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.6)] relative overflow-visible"
            >
              {/* Connection Glow (Principle 8: Storytelling - Bridges text to data) */}
              <div className="absolute top-1/2 -left-32 w-48 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/40 to-brand-orange/60 blur-[1px] hidden xl:block" />

              <div className="space-y-2">
                 <p className="text-[0.625rem] font-display font-black tracking-[0.4em] text-brand-orange uppercase text-center">Visualizing the Gap</p>
                 <h3 className="text-2xl lg:text-3xl font-display font-black text-white leading-tight text-center tracking-tight">Where value vanishes.</h3>
              </div>

              <div className="py-2">
                <ValueGapChart />
              </div>

              <p className="text-[0.75rem] text-brand-white/40 font-primary leading-relaxed opacity-60 text-center max-w-[20rem] mx-auto">
                 The current model forces Africa to export raw potential, only to buy back the finished value at a 10x premium.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
