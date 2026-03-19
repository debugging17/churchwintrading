"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GlassCard } from "../components/GlassCard";
import { StatCard } from "../components/StatCard";
import NoiseOverlay from "../components/NoiseOverlay";

export function Slide12ABulkGallery() {
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
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col h-full my-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-2xl">
            <motion.h2 variants={slideFromLeft} className="font-display text-5xl md:text-7xl font-bold text-brand-white leading-none mb-4 tracking-tight">
              Operations <span className="text-brand-orange">at Scale.</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-white/60 font-primary font-light leading-relaxed">
              Institutional infrastructure driving global wholesale supply. 
              We bridge the "missing middle" with industrial-grade capacity.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatCard label="Annual Capacity" value="10k+ MT" trend="Top 5 in West Africa" delay={0.2} />
            <StatCard label="Global Standards" value="Tier-1" trend="ISO & HACCP Compliant" delay={0.3} />
          </div>
        </div>

        {/* Cinematic Architectural Grid */}
        <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-4 min-h-[55vh] relative">
          
          {/* Main Feature: Industrial Extraction (Vertical Video) */}
          <motion.div 
            variants={fadeUp}
            className="col-span-12 md:col-span-4 row-span-6 rounded-3xl overflow-hidden relative border border-brand-white/10 group shadow-2xl"
          >
             <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700" />
             <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s] ease-out">
               <source src="/assets/videos/vid-4.mp4" type="video/mp4" />
             </video>
             
             <GlassCard className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md border-white/20" delay={0.5}>
                <h3 className="text-brand-orange text-xs font-bold tracking-[0.2em] uppercase mb-1">Phase 01</h3>
                <p className="text-white text-lg font-display font-medium">Industrial Extraction</p>
                <p className="text-white/60 text-xs mt-1 font-primary">High-volume solvent-free processing unit.</p>
             </GlassCard>
          </motion.div>
          
          {/* Top Right: Export Staging */}
          <motion.div 
            variants={fadeUp}
            className="col-span-12 md:col-span-8 row-span-3 rounded-3xl overflow-hidden relative border border-brand-white/10 group shadow-2xl"
          >
             <Image 
                src="/assets/b2b_warehouse_pallets_1773793813592.png" 
                alt="Warehouse" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
             
             <div className="absolute top-6 right-6">
                <GlassCard className="py-2 px-4 rounded-full border-white/10" delay={0.6}>
                   <span className="text-white text-[10px] font-bold tracking-widest uppercase">Global Export Staging</span>
                </GlassCard>
             </div>
             
             <div className="absolute bottom-8 left-8">
                <p className="text-brand-white/80 text-sm max-w-xs font-primary leading-relaxed">
                  Consolidated logistics hub for multi-continental B2B fulfillment.
                </p>
             </div>
          </motion.div>

          {/* Bottom Middle: Lab */}
          <motion.div 
            variants={fadeUp}
            className="col-span-12 md:col-span-4 row-span-3 rounded-3xl overflow-hidden relative border border-brand-white/10 group shadow-2xl"
          >
             <Image 
                src="/assets/ghana_qa_lab.png" 
                alt="QA" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
             
             <GlassCard className="absolute inset-x-4 bottom-4 py-3 px-4 border-white/5" delay={0.7}>
                <p className="text-white text-sm font-display font-semibold">Tier-1 Compliance Lab</p>
                <div className="flex gap-2 mt-2">
                   <span className="bg-brand-orange/20 text-brand-orange text-[8px] font-bold px-2 py-0.5 rounded border border-brand-orange/30">QA/QC</span>
                   <span className="bg-white/10 text-white/60 text-[8px] font-bold px-2 py-0.5 rounded border border-white/10">ISO 22000</span>
                </div>
             </GlassCard>
          </motion.div>

          {/* Bottom Right: Supply Line */}
          <motion.div 
            variants={fadeUp}
            className="col-span-12 md:col-span-4 row-span-3 rounded-3xl overflow-hidden relative border border-brand-white/10 group shadow-2xl"
          >
             <Image 
                src="/assets/b2b_industrial_processing_1773793847510.png" 
                alt="Processing" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500" />
             
             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <GlassCard className="border-white/20 backdrop-blur-xl" delay={0}>
                   <p className="text-white text-xs font-bold tracking-widest uppercase">Automated Supply Line</p>
                </GlassCard>
             </div>
             
             <div className="absolute bottom-4 left-4 right-4 text-center">
                <p className="text-[10px] text-white/40 tracking-widest uppercase font-bold">Scaling Excellence</p>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
