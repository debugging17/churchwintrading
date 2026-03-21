"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
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
    <div className="w-full h-full flex flex-col py-8 md:py-12 px-10 md:px-24 bg-brand-cream relative overflow-hidden pb-[var(--footer-height)]">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto my-auto">
        <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy mb-10 text-center leading-tight">
          Two buyers. <br />
          <span className="text-brand-orange italic">Two distinct needs.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          
          {/* Segment A: The Premium Retailer */}
          <motion.div variants={fadeUp} className="relative group rounded-3xl overflow-hidden shadow-2xl border border-brand-navy/10 min-h-[500px] flex flex-col">
            <Image src="/images/visual_supremacy/retail_boutique.png" alt="Premium Retailer" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/20 backdrop-blur-xl border border-brand-orange/30 flex items-center justify-center mb-4">
                  <ShoppingBag className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="font-display text-3xl font-black text-white mb-2 tracking-tight">The Premium Retailer</h3>
                <p className="text-brand-orange text-xs font-black uppercase tracking-widest mb-4 italic text-white/80">Sephora, Credo, Oh My Cream!</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <p className="text-white font-bold text-sm mb-3 uppercase tracking-tighter opacity-70">Key Requirements</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-white text-sm"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.6)]" /> Batch Consistency</li>
                    <li className="flex items-center gap-3 text-white text-sm"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.6)]" /> Origin Traceability</li>
                    <li className="flex items-center gap-3 text-white text-sm"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.6)]" /> Ethical Governance</li>
                  </ul>
                </div>
                <div className="bg-brand-orange/20 backdrop-blur-md rounded-xl p-4 border border-brand-orange/20">
                  <p className="text-brand-orange font-bold text-sm mb-1 uppercase tracking-tighter">Target Outcome</p>
                  <p className="text-white text-sm leading-relaxed">
                    Risk-free inclusion in premium cosmetic formulations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Segment B: The Global Wholesaler */}
          <motion.div variants={fadeUp} className="relative group rounded-3xl overflow-hidden shadow-2xl border border-brand-navy/10 min-h-[500px] flex flex-col">
            <Image src="/images/visual_supremacy/industrial_wholesaler.png" alt="Global Wholesaler" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/20 backdrop-blur-xl border border-brand-navy/30 flex items-center justify-center mb-4">
                  <Boxes className="w-7 h-7 text-brand-orange" />
                </div>
                <h3 className="font-display text-3xl font-black text-white mb-2 tracking-tight">The Global Wholesaler</h3>
                <p className="text-brand-orange text-xs font-black uppercase tracking-widest mb-4 italic text-white/80">Ingredients Distributors, B2B Brokers</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <p className="text-white font-bold text-sm mb-3 uppercase tracking-tighter opacity-70">Key Requirements</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3 text-white text-sm"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.6)]" /> Export-Grade Purity</li>
                    <li className="flex items-center gap-3 text-white text-sm"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.6)]" /> Cold-Chain Logistics</li>
                    <li className="flex items-center gap-3 text-white text-sm"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.6)]" /> Volume Reliability</li>
                  </ul>
                </div>
                <div className="bg-brand-orange/20 backdrop-blur-md rounded-xl p-4 border border-brand-orange/20">
                  <p className="text-brand-orange font-bold text-sm mb-1 uppercase tracking-tighter">Target Outcome</p>
                  <p className="text-white text-sm leading-relaxed">
                    Institutional supply for supplements and health beverages.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
