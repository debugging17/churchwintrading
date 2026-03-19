"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import Image from "next/image";

// SLIDE 04: THE MISSING MIDDLE — THE TRANSFORMATION
// Skills applied:
//   visual-storyteller: Before/After comparison provides concrete proof of institutionalization.
//   frontend-engineer: Responsive grid for comparison cards with glassmorphism.
//   ux-architect: Clear labeling of "The Gap" vs "The Goal".
//   proposal-strategist: Linking South Korea's structural shift to Churchwin's physical infrastructure.

export function Slide04MissingMiddle() {
  const animState = useSlideEnter(100);

  const funnelTiers = [
    { label: "Micro Enterprises", width: "100%", sub: "80% of employment", fill: "bg-brand-navy/10" },
    { label: "The Missing Middle", width: "40%", sub: "<10% reach scale", fill: "bg-brand-orange shadow-[0_0_50px_rgba(255,106,0,0.4)]", active: true },
    { label: "Institutional Scale", width: "70%", sub: "Global Readiness", fill: "bg-brand-navy shadow-xl text-white" }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-start relative overflow-hidden bg-brand-navy pb-[calc(var(--footer-height)+1rem)] pt-12 md:pt-16">
      
      {/* === LAYER 0: Background Context === */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
          alt="Industrial Transformation" 
          fill 
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/80" />
      </div>

      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-[90rem] mx-auto flex flex-col z-10 px-10 md:px-20"
      >
        {/* Title Area */}
        <motion.div variants={fadeUp} className="mb-8 text-left">
           <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-[2px] bg-brand-orange" />
              <p className="text-brand-orange text-[10px] tracking-[0.4em] uppercase font-black">Industrial Transformation</p>
           </div>
           <h2 className="text-3xl md:text-5xl font-black text-brand-white leading-tight tracking-tighter">
              Institutionalizing the <span className="text-brand-orange italic">Supply Chain.</span>
           </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
           {/* BEFORE */}
           <motion.div variants={fadeUp} className="group">
              <div className="relative h-[25vh] md:h-[30vh] rounded-2xl overflow-hidden border border-brand-white/10 shadow-2xl mb-4">
                 <Image src="/images/IMG_0471-min-min-scaled.jpg" alt="Before" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-brand-navy/20" />
                 <div className="absolute top-4 left-4 px-3 py-1.5 bg-brand-navy/80 backdrop-blur-md rounded-lg border border-brand-white/10">
                    <span className="text-brand-white text-[10px] font-black tracking-widest uppercase">Before: Fragmented Scale</span>
                 </div>
              </div>
              <div className="bg-brand-white/5 p-5 md:p-6 rounded-2xl border-l-4 border-l-brand-white/20">
                 <p className="text-brand-white/80 font-primary italic text-sm md:text-base leading-relaxed">
                    &ldquo;Micro-scale operations struggle with manual logistics and inconsistent output. This is the bottleneck that keeps Africa fragmented.&rdquo;
                 </p>
              </div>
           </motion.div>

           {/* AFTER */}
           <motion.div variants={fadeUp} className="group">
              <div className="relative h-[25vh] md:h-[30vh] rounded-2xl overflow-hidden border border-brand-orange/20 shadow-[0_0_50px_rgba(255,119,0,0.1)] mb-4">
                 <Image src="/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" alt="After" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-brand-orange/10" />
                 <div className="absolute top-4 left-4 px-3 py-1.5 bg-brand-orange backdrop-blur-md rounded-lg border border-brand-white/20 shadow-lg">
                    <span className="text-white text-[10px] font-black tracking-widest uppercase">After: Institutional Scale</span>
                 </div>
              </div>
              <div className="bg-brand-orange/10 p-5 md:p-6 rounded-2xl border-l-4 border-l-brand-orange shadow-[inset_0_0_20px_rgba(255,119,0,0.05)]">
                 <p className="text-brand-white text-sm md:text-base font-primary font-medium leading-relaxed">
                    Growth isn&apos;t just about size; it&apos;s about structure. Just as South Korea transformed via institutional scale, Churchwin builds the bridge for the Missing Middle.
                 </p>
              </div>
           </motion.div>
        </div>

        {/* Call to action / Metric */}
        <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-between border-t border-brand-white/10 pt-6 gap-4">
           <div className="flex gap-10">
              <div>
                 <p className="text-brand-white/40 text-[9px] uppercase font-black tracking-widest mb-1">Market Position</p>
                 <p className="text-brand-orange font-display font-bold text-sm">Bridge Partner</p>
              </div>
              <div>
                 <p className="text-brand-white/40 text-[9px] uppercase font-black tracking-widest mb-1">Target Outcome</p>
                 <p className="text-brand-white font-display font-bold text-sm">Global Readiness</p>
              </div>
           </div>
           <p className="text-brand-white/10 text-[9px] uppercase font-black tracking-[0.4em]">
              PROVEN INFRASTRUCTURE FOR MARKET ENTRY
           </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
