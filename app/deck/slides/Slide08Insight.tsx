"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Zap, Link, Globe } from "lucide-react";

import Image from "next/image";

export function Slide08Insight() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-brand-navy overflow-hidden px-8 md:px-12 lg:px-16 pb-[var(--footer-height)]">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-navy/30 rounded-full blur-[100px]" />

      <motion.div
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-[100rem] flex flex-col items-center text-center z-10"
      >
        <motion.div variants={fadeUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em]">The Core Insight</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-brand-white leading-tight tracking-tighter">
            Demand—not supply—<br />
            is the <span className="text-brand-orange">bottleneck.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 w-full mb-16 relative items-stretch">
          
          {/* Global Demand Card */}
          <motion.div variants={fadeUp} className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[400px] flex flex-col">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-90"
            >
              <source src="/assets/images/mansory/grok-video-7864786d-3736-496a-abd9-5b4b705fd073.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-black text-white mb-2 tracking-tight">Global Demand</h3>
              <p className="text-sm text-brand-white/80 leading-relaxed font-primary">
                Massive institutional appetites for ethical, fully traceable botanicals.
              </p>
            </div>
          </motion.div>

          {/* The Gap - Central Broken Link */}
          <motion.div variants={fadeUp} className="relative flex flex-col items-center justify-center p-8 z-10 min-h-[400px]">
             {/* Glowing connecting lines */}
             <div className="absolute left-0 right-1/2 top-1/2 h-[2px] bg-gradient-to-r from-white/20 to-brand-orange/50 -translate-y-1/2 -z-10" />
             <div className="absolute left-1/2 right-0 top-1/2 h-[2px] bg-gradient-to-l from-white/20 to-brand-orange/50 -translate-y-1/2 -z-10" />
             
             <div className="relative">
                <div className="absolute inset-0 bg-brand-orange blur-[40px] opacity-30 rounded-full animate-pulse" />
                <div className="w-24 h-24 rounded-3xl bg-brand-orange border border-white/20 shadow-[0_0_40px_rgba(255,106,0,0.4)] rotate-45 flex items-center justify-center mb-8 relative z-20">
                  <Link className="w-10 h-10 text-white -rotate-45" />
                </div>
             </div>
             <h3 className="text-3xl font-display font-black text-brand-orange mb-3 text-center drop-shadow-md">The Gap</h3>
             <p className="text-sm text-brand-white/60 leading-relaxed font-primary text-center max-w-[200px]">
               No reliable, data-backed bridge between origin and end-user.
             </p>
          </motion.div>

          {/* African Supply Card */}
          <motion.div variants={fadeUp} className="relative group rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[400px] flex flex-col">
            <Image src="/images/visual_supremacy/shea_orchard.png" alt="African Supply" fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-display font-black text-white mb-2 tracking-tight">African Supply</h3>
              <p className="text-sm text-brand-white/80 leading-relaxed font-primary">
                Vast, underutilized capacity across 11+ fragmented cooperatives.
              </p>
            </div>
          </motion.div>

        </div>

        <motion.div 
          variants={fadeUp}
          className="border-t border-white/10 pt-10 w-full"
        >
          <p className="text-brand-white/80 text-xl font-primary italic">
            &quot;We build the engine that connects <span className="text-brand-orange font-bold not-italic">unstructured supply</span> to <span className="text-brand-orange font-bold not-italic">predictable demand</span>.&quot;
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
