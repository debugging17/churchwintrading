"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

export function Slide04MissingMiddle() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-brand-cream overflow-hidden relative">
      
      {/* ── Background Branding ────────────────────────────────── */}
      <div className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-brand-orange/5 mix-blend-multiply rounded-full blur-[120px] pointer-events-none" />

      {/* ── Left Content (Strategic Context) ───────────────────── */}
      <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-16 xl:px-24 z-10 relative">
        <motion.div
          initial="hidden"
          animate={animState}
          variants={staggerContainer}
          className="max-w-xl"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-10"
          >
             <div className="w-8 h-[2px] bg-brand-orange" />
             <p className="text-brand-orange text-[10px] tracking-[0.4em] uppercase font-bold">
              The Structural Gap
             </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={slideFromLeft}
            className="text-4xl md:text-5xl xl:text-6xl font-display font-black text-brand-navy leading-[1.05] mb-8"
          >
            80% of employment.<br />
            <span className="text-brand-orange opacity-80">Less than 10% reach scale.</span>
          </motion.h2>

          {/* Logic Step */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-lg md:text-xl text-brand-navy/80 font-primary leading-relaxed max-w-lg">
              Africa&apos;s micro-enterprises are the backbone of the economy, yet they face a fatal structural hurdle: They cannot institutionalize.
            </p>
            
            <div className="bg-brand-navy/5 border-l-4 border-brand-orange p-8 rounded-r-xl">
               <p className="font-display font-bold text-xl text-brand-navy leading-snug">
                  Churchwin exists in the bottleneck.
               </p>
               <p className="font-primary text-brand-navy/60 text-base mt-2">
                  We are the bridge from micro to institutional — building the Missing Middle from the inside.
               </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Right Content (The Hourglass Visual) ───────────────── */}
      <div className="w-full md:w-[55%] h-full flex items-center justify-center relative p-12 bg-white/40">
        <motion.div 
           initial="hidden"
           animate={animState}
           variants={staggerContainer}
           className="w-full max-w-lg flex flex-col items-center"
        >
          {/* Hourglass Container */}
          <div className="relative w-full aspect-[4/5] flex flex-col items-center">
            
            {/* Top Tier: The Massive Base (Micro) */}
            <motion.div 
              variants={fadeUp}
              className="w-full h-[30%] bg-brand-navy/10 rounded-t-2xl border border-brand-navy/10 flex flex-col items-center justify-center p-6 relative"
            >
               <span className="text-[10px] text-brand-navy/40 font-display font-black tracking-widest uppercase mb-1">Entry Level</span>
               <h3 className="text-2xl font-display font-black text-brand-navy">MICRO ENTERPRISES</h3>
               <p className="text-xs text-brand-navy/50 font-primary italic">80% of workforce</p>
               
               {/* Taper Down */}
               <div className="absolute -bottom-16 left-0 w-full h-16 flex justify-center overflow-hidden">
                  <div className="w-full h-full bg-brand-navy/5" style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 40% 100%)" }} />
               </div>
            </motion.div>

            {/* The Bottleneck (The Missing Middle) */}
            <motion.div 
              variants={fadeUp}
              className="w-[40%] h-[25%] my-16 bg-brand-orange rounded-xl shadow-[0_0_50px_rgba(255,106,0,0.3)] flex flex-col items-center justify-center p-4 relative z-20 group"
            >
               <div className="absolute -inset-2 border border-brand-orange/40 rounded-2xl animate-pulse" />
               <span className="text-[10px] text-white/60 font-display font-black tracking-widest uppercase mb-1">The Pivot</span>
               <h3 className="text-lg font-display font-black text-white text-center leading-tight">THE MISSING<br/>MIDDLE</h3>
               <p className="text-[10px] text-white/80 font-primary font-bold mt-1 tracking-tight">&lt;10% CONVERSION</p>
               
               {/* Churchwin Branding Marker */}
               <div className="absolute -right-4 -top-4 w-12 h-12 rounded-full bg-brand-navy border-4 border-brand-orange flex items-center justify-center shadow-lg">
                  <span className="text-white font-display font-black text-xs italic">CW</span>
               </div>
            </motion.div>

            {/* Bottom Tier: Institutional Scale */}
            <motion.div 
              variants={fadeUp}
              className="w-[70%] h-[30%] bg-brand-navy rounded-b-2xl border border-brand-navy/80 flex flex-col items-center justify-center p-6 relative"
            >
               {/* Taper Up */}
               <div className="absolute -top-16 left-0 w-full h-16 flex justify-center overflow-hidden">
                  <div className="w-full h-full bg-brand-navy/5" style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0 100%)" }} />
               </div>

               <span className="text-[10px] text-white/40 font-display font-black tracking-widest uppercase mb-1 text-center">Outcome</span>
               <h3 className="text-2xl font-display font-black text-white">INSTITUTIONAL SCALE</h3>
               <p className="text-xs text-brand-orange/80 font-primary font-bold">Global Market Readiness</p>
            </motion.div>

          </div>

          {/* Institutional Note */}
          <motion.p variants={fadeUp} className="mt-12 text-[10px] font-display font-bold text-brand-navy/30 uppercase tracking-[0.4em] text-center max-w-xs">
            TRANSFORMING FRAGMENTATION INTO SYSTEMATIC INFRASTRUCTURE
          </motion.p>
        </motion.div>
      </div>

    </div>
  );
}
