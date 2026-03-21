"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GlassCard } from "../components/GlassCard";
import { StatCard } from "../components/StatCard";
import NoiseOverlay from "../components/NoiseOverlay";

import { DeckVideo } from "../components/DeckVideo";

export function Slide12ABulkGallery({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="relative w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-navy overflow-hidden">
      <NoiseOverlay />
      
      {/* Background Decorative Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-navy-light/10 blur-[100px] rounded-full pointer-events-none" />

      <motion.div 
        initial="hidden" 
        animate={animState} 
        variants={sectionTitleStagger} 
        className="relative z-10 w-full max-w-[95rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 h-full my-auto items-center"
      >
        {/* Left Side: Content & Stats */}
        <div className="w-full lg:w-[35%] flex flex-col justify-center">
          <motion.div variants={fadeUp} className="mb-12">
            <motion.h2 variants={slideFromLeft} className="font-display text-5xl md:text-6xl lg:text-8xl font-bold text-brand-white leading-[0.9] mb-8 tracking-tighter uppercase">
              Operations <br />
              <span className="text-brand-orange italic font-light">at Scale.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-white/60 font-primary font-light leading-relaxed border-l-2 border-brand-orange/30 pl-8">
              Institutional infrastructure driving global wholesale supply. 
              We bridge the &ldquo;missing middle&rdquo; with industrial-grade capacity.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 scale-90 origin-left">
            <StatCard label="Annual Capacity" value="10k+ MT" trend="Top 5 in West Africa" delay={0.4} />
            <StatCard label="Global Standards" value="Tier-1" trend="ISO & HACCP Compliant" delay={0.5} />
          </div>
        </div>

        {/* Right Side: Masonry Gallery — Principle 9: Grace (Flow) */}
        <div className="w-full lg:w-[65%] grid grid-cols-2 lg:grid-cols-12 grid-rows-6 gap-4 h-[65vh] lg:h-[75vh]">
          
          {/* Main Feature: Industrial Extraction (Tall Tile) */}
          <motion.div 
            variants={fadeUp}
            className="col-span-2 lg:col-span-4 row-span-6 rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl"
          >
             <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
             <DeckVideo 
               src="/assets/videos/vid-4.mp4" 
               isActive={isActive}
               className="scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out"
             />
             
             <GlassCard className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-xl border-white/20" delay={0.6}>
                <h3 className="text-brand-orange text-[10px] font-black tracking-[0.3em] uppercase mb-2">Phase 01</h3>
                <p className="text-white text-xl font-display font-bold">Industrial Extraction</p>
                <p className="text-white/60 text-xs mt-2 font-primary leading-relaxed">High-volume solvent-free processing unit.</p>
             </GlassCard>
          </motion.div>
          
          {/* Top Right: Export Staging (Large Rectangle) */}
          <motion.div 
            variants={fadeUp}
            className="col-span-2 lg:col-span-8 row-span-3 rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl"
          >
             <Image 
                src="/assets/b2b_warehouse_pallets_1773793813592.png" 
                alt="Warehouse" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                priority
             />
             <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
             
             <div className="absolute top-8 right-8">
                <GlassCard className="py-2 px-6 rounded-full border-white/20" delay={0.7}>
                   <span className="text-white text-[10px] font-black tracking-[0.3em] uppercase">Global Export Staging</span>
                </GlassCard>
             </div>
             
             <div className="absolute bottom-8 left-8 p-6 bg-brand-navy/40 backdrop-blur-md rounded-2xl border border-white/10 max-w-xs">
                <p className="text-brand-white/90 text-sm font-primary leading-relaxed">
                  Consolidated logistics hub for multi-continental B2B fulfillment.
                </p>
             </div>
          </motion.div>

          {/* Bottom Middle: Lab (Square-ish) */}
          <motion.div 
            variants={fadeUp}
            className="col-span-1 lg:col-span-4 row-span-3 rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl"
          >
             <Image 
                src="/assets/ghana_qa_lab.png" 
                alt="QA" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                priority
             />
             <div className="absolute inset-0 bg-brand-navy/40 group-hover:bg-transparent transition-colors duration-500" />
             
             <GlassCard className="absolute inset-x-6 bottom-6 py-4 px-6 border-white/10" delay={0.8}>
                <p className="text-white text-sm font-display font-bold tracking-tight">Tier-1 Compliance Lab</p>
                <div className="flex gap-2 mt-3">
                   <span className="bg-brand-orange/20 text-brand-orange text-[9px] font-black px-3 py-1 rounded-full border border-brand-orange/30 uppercase tracking-widest">QA/QC</span>
                   <span className="bg-white/10 text-white/70 text-[9px] font-black px-3 py-1 rounded-full border border-white/10 uppercase tracking-widest">ISO 22000</span>
                </div>
             </GlassCard>
          </motion.div>

          {/* Bottom Right: Supply Line (Square-ish) */}
          <motion.div 
            variants={fadeUp}
            className="col-span-1 lg:col-span-4 row-span-3 rounded-[2.5rem] overflow-hidden relative border border-white/10 group shadow-2xl"
          >
             <Image 
                src="/assets/b2b_industrial_processing_1773793847510.png" 
                alt="Processing" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                priority
             />
             <div className="absolute inset-x-0 bottom-0 p-8 text-center bg-gradient-to-t from-brand-navy/80 to-transparent">
                <p className="text-white text-[10px] font-black tracking-[0.4em] uppercase opacity-60">Scaling Excellence</p>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
