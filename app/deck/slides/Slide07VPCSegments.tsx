"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GlassCard } from "../components/GlassCard";

export function Slide07VPCSegments() {
  const animState = useSlideEnter(100);

  // ROLES APPLIED:
  // 1. ux-architect: Split side-by-side card layout comparing 2 user profiles.
  // 2. brand-guardian: Glass cards on Navy.
  // 3. proposal-strategist: Exact VPC segment definitions.

  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 bg-brand-white">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold text-brand-navy mb-10 text-center">
          Engineered for the exact pains of our buyers.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Segment A - Retailer */}
          <GlassCard theme="light" delay={0.2} className="relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange" />
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-6 pl-4">Segment A — The Retailer</h3>
            
            <div className="mb-6 pl-4">
              <span className="text-4xl text-brand-orange opacity-20 absolute -left-2 top-16 font-serif">&quot;</span>
              <p className="font-primary text-brand-navy/80 italic leading-relaxed relative z-10 text-base">
                A small-to-medium retailer who struggles to keep stock with authentic, quality products while managing tight cash flow and multiple suppliers.
              </p>
            </div>
            
            <div className="pl-4 border-t border-brand-navy/10 pt-4">
              <h4 className="text-sm font-display uppercase tracking-widest text-[#ff8022] mb-3 font-semibold">The Pain Points</h4>
              <ul className="space-y-3">
                {["Stock-outs during high demand periods.", "Fear of inferior goods.", "Delivery delays and ineffective communication."].map((pain, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy/70 font-primary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff8022] mt-1.5 shrink-0" />
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          {/* Segment B - Wholesaler */}
          <GlassCard theme="light" delay={0.4} className="relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-navy/30" />
            <h3 className="font-display text-2xl font-bold text-brand-navy mb-6 pl-4">Segment B — The Wholesale Buyer</h3>
            
            <div className="mb-6 pl-4">
              <span className="text-4xl text-brand-navy/20 opacity-20 absolute -left-2 top-16 font-serif">&quot;</span>
              <p className="font-primary text-brand-navy/80 italic leading-relaxed relative z-10 text-base">
                A wholesale buyer who struggles to get products on time and with consistent quality.
              </p>
            </div>
            
            <div className="pl-4 border-t border-brand-navy/10 pt-4">
              <h4 className="text-sm font-display uppercase tracking-widest text-brand-navy/60 mb-3 font-semibold">The Pain Points</h4>
              <ul className="space-y-3">
                {["Price volatility and seasonal shortages.", "Non-compliant / uncertified products.", "Supplier disappearance post-payment."].map((pain, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-navy/70 font-primary text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 mt-1.5 shrink-0" />
                    {pain}
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

        </div>
      </motion.div>
    </div>
  );
}
