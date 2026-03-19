"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideFromLeft, slideFromRight } from "../motion/variants";

export function Slide02Crossroads() {
  return (
    <div className="w-full h-full bg-brand-navy flex relative overflow-hidden">
      
      {/* ── Background Branding ────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
         <Image 
            src="/assets/images/churchwin_logo_new.png" 
            alt="Churchwin Logo Watermark" 
            width={800} 
            height={800} 
            className="absolute -right-64 -bottom-64 opacity-[0.03] grayscale invert pointer-events-none"
         />
      </div>

      {/* ── Left Content (Narrative) ────────────────────────────── */}
      <div className="w-1/2 h-full flex flex-col justify-center px-16 xl:px-24 z-10 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          {/* Section Marker */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-10"
          >
             <span className="text-brand-orange text-xl font-display font-black tracking-widest">
              01
             </span>
             <div className="w-12 h-[2px] bg-brand-orange/40" />
             <p className="text-brand-white/40 text-[10px] tracking-[0.4em] uppercase font-bold">
              The Strategic Context
             </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={slideFromLeft}
            className="text-5xl md:text-7xl xl:text-8xl font-display font-black text-brand-white leading-[0.95] mb-12 tracking-tighter"
          >
            THE INDUSTRIAL <br />
            <span className="text-brand-orange">CROSSROADS.</span>
          </motion.h2>

          {/* Hardened Copy */}
          <motion.div variants={fadeUp} className="space-y-6">
            <p className="text-lg md:text-xl text-brand-white/80 font-primary leading-relaxed max-w-lg border-l-4 border-brand-orange pl-8 py-2 italic font-light">
              &ldquo;Africa does not have a supply problem. It has a professional infrastructure and demand aggregation problem.&rdquo;
            </p>
            <p className="text-sm md:text-base text-brand-white/50 font-primary leading-relaxed max-w-sm ml-9">
              Ghana's economy depends on fragmented SMEs that cannot scale. To fix the middle, we must professionalize the gatekeepers.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Right Content (Visual Metaphor) ─────────────────────── */}
      <div className="w-1/2 h-full relative z-0">
         {/* Perspective Slant */}
         <div 
            className="absolute inset-y-0 left-0 w-32 bg-brand-navy z-10"
            style={{ clipPath: "polygon(0 0, 100% 0, 0 100%, 0 100%)" }}
         />
         
         <motion.div 
            variants={slideFromRight}
            initial="hidden"
            animate="visible"
            className="absolute inset-0 h-full"
         >
            <Image 
               src="/images/crossroads_industrial_pivot.png" 
               alt="Strategic Crossroads Visual" 
               fill 
               className="object-cover grayscale brightness-50 contrast-125"
            />
            {/* Color Wash Overlay */}
            <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/20 to-transparent" />
         </motion.div>

         {/* Callout Detail - Strategic Pivot */}
         <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-20 flex flex-col items-center -ml-16"
         >
            <div className="w-32 h-32 rounded-full border border-brand-orange/40 flex items-center justify-center p-4 backdrop-blur-md bg-brand-navy/20">
               <div className="w-full h-full rounded-full border-[6px] border-brand-orange flex items-center justify-center">
                  <span className="text-brand-white font-display font-black text-4xl italic">CW</span>
               </div>
            </div>
            <p className="mt-4 text-[9px] text-brand-orange font-bold uppercase tracking-[0.5em] text-shadow">
               The Pivot Point
            </p>
         </motion.div>
      </div>
    </div>
  );
}
