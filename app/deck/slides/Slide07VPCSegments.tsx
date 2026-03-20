"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger, staggerContainer } from "../motion/variants";
import { ShoppingBag, Boxes } from "lucide-react";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GlassCard } from "../components/GlassCard";

import Image from "next/image";

export function Slide07VPCSegments() {
  const animState = useSlideEnter(100);

  // ROLES APPLIED:
  // 1. ux-architect: Split side-by-side card layout comparing 2 user profiles.
  // 2. brand-guardian: Glass cards on Navy.
  // 3. proposal-strategist: Exact VPC segment definitions.

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-20 bg-brand-navy relative overflow-hidden pb-[var(--footer-height)]">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-brand-orange/5 blur-[120px] rounded-full" />

      <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="w-full max-w-6xl mx-auto my-auto flex flex-col items-center z-10">
        
        {/* HEADING — The Demand Logic */}
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-brand-white leading-tight mb-4 tracking-tighter">
            Two buyers. <br />
            <span className="text-brand-orange italic underline decoration-white/10">Two distinct needs.</span>
          </h2>
          <p className="text-brand-white/40 text-lg font-primary max-w-xl mx-auto">
            We solve the structural isolation of the African SME by anchoring them to global procurement standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* RETAILERS */}
          <motion.div
            variants={fadeUp}
            className="p-12 rounded-[40px] bg-white/5 backdrop-blur-xl border border-white/10 border-b-8 border-brand-orange shadow-2xl relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 text-brand-orange/10 text-8xl font-display font-black group-hover:text-brand-orange/20 transition-colors">01</div>
             <h3 className="text-3xl font-display font-black uppercase mb-8 tracking-tighter text-brand-white">Retailers</h3>
             <ul className="space-y-6 font-primary text-base text-brand-white/80">
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(244,121,32,0.5)]" /> Small MOQ Support</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(244,121,32,0.5)]" /> Retail-Ready Branding</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(244,121,32,0.5)]" /> Direct Consumer Access</li>
             </ul>
             <div className="mt-10 p-4 bg-brand-orange/10 rounded-xl border border-brand-orange/20">
                <p className="text-[10px] font-black uppercase text-brand-orange tracking-widest mb-1">Target Outcome</p>
                <p className="text-xs text-brand-white/60">Inventory responsiveness without over-stocking risk.</p>
             </div>
          </motion.div>

          {/* WHOLESALERS */}
          <motion.div
            variants={fadeUp}
            className="p-12 rounded-[40px] bg-white border-b-8 border-brand-navy shadow-2xl relative overflow-hidden group"
          >
             <div className="absolute top-0 right-0 p-8 text-brand-navy/5 text-8xl font-display font-black group-hover:text-brand-navy/10 transition-colors">02</div>
             <h3 className="text-3xl font-display font-black uppercase mb-8 tracking-tighter text-brand-navy">Wholesalers</h3>
             <ul className="space-y-6 font-primary text-base text-brand-navy/70">
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-brand-navy" /> Bulk Volume Fulfillment</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-brand-navy" /> Price Consistency</li>
                <li className="flex items-center gap-4"><span className="w-2 h-2 rounded-full bg-brand-navy" /> Industrial Procurement Grade</li>
             </ul>
             <div className="mt-10 p-4 bg-brand-navy/5 rounded-xl border border-brand-navy/10">
                <p className="text-[10px] font-black uppercase text-brand-navy/50 tracking-widest mb-1">Target Outcome</p>
                <p className="text-xs text-brand-navy/60">Reliable supply contracts for high-volume manufacturing.</p>
             </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
