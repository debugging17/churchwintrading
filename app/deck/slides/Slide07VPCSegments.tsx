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
    <div className="w-full h-full flex flex-col py-8 md:py-12 px-6 md:px-12 bg-brand-cream relative overflow-hidden pb-[var(--footer-height)]">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-7xl mx-auto my-auto flex flex-col items-center">
        <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-navy mb-12 text-center drop-shadow-sm">
          Engineered for the exact pains of our buyers.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full items-stretch">
          
          {/* Segment A: The Premium Retailer */}
          <motion.div variants={fadeUp} className="relative group rounded-[40px] overflow-hidden shadow-2xl border border-brand-navy/10 min-h-[550px] flex flex-col">
            <Image src="/images/visual_supremacy/retail_boutique.png" alt="Premium Retailer" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
            
            <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-brand-orange/20 backdrop-blur-xl border border-brand-orange/30 flex items-center justify-center mb-6">
                  <ShoppingBag className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-md">The Premium Retailer</h3>
                <p className="text-brand-orange text-sm font-black uppercase tracking-[0.2em] mb-4 italic drop-shadow-sm">Sephora, Credo, Oh My Cream!</p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <p className="text-white/50 font-bold text-xs mb-2 uppercase tracking-widest">Critical Pain Point</p>
                  <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-lg font-medium">
                    Lack of directly-sourced, high-integrity African products that meet EU/US clinical safety and branding standards.
                  </p>
                </div>
                <div className="relative pt-4 border-t border-white/10">
                  <p className="text-brand-orange font-bold text-xs mb-2 uppercase tracking-widest">The Opportunity</p>
                  <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-lg font-medium">
                    Churchwin provides shelf-ready, certified private-label solutions with a 100% traceable Ghanaian origin story.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Segment B: The Global Wholesaler */}
          <motion.div variants={fadeUp} className="relative group rounded-[40px] overflow-hidden shadow-2xl border border-brand-navy/10 min-h-[550px] flex flex-col">
            <Image src="/images/visual_supremacy/industrial_wholesaler.png" alt="Global Wholesaler" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/50 to-transparent transition-opacity duration-500 group-hover:opacity-95" />
            
            <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
              <div className="mb-8">
                <div className="w-16 h-16 rounded-2xl bg-brand-navy/40 backdrop-blur-xl border border-brand-navy/30 flex items-center justify-center mb-6">
                  <Boxes className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="font-display text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-md">The Global Wholesaler</h3>
                <p className="text-brand-orange text-sm font-black uppercase tracking-[0.2em] mb-4 italic drop-shadow-sm">Ingredients Distributors, B2B Brokers</p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <p className="text-white/50 font-bold text-xs mb-2 uppercase tracking-widest">Critical Pain Point</p>
                  <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-lg font-medium">
                    Sourcing from fragmented middlemen results in inventory unpredictability, quality variance, and margin erosion.
                  </p>
                </div>
                <div className="relative pt-4 border-t border-white/10">
                  <p className="text-brand-orange font-bold text-xs mb-2 uppercase tracking-widest">The Opportunity</p>
                  <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-lg font-medium">
                    Direct institutional supply from Churchwin&apos;s primary processing plant ensures industrial consistency and maximum margin capture.
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
