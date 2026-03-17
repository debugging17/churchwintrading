"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ArrowRight } from "lucide-react";

export function Slide10ValuePropViability() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 bg-brand-navy">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-brand-white mb-4 text-center">
          Two revenue streams. <span className="text-brand-orange font-light">Maximum margin architecture.</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-xl text-brand-white/80 font-primary mb-16 text-center">
          The shift: From cost-driven commercial negotiation to value-driven brand partnership.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[40%] left-[50%] -translate-x-[50%] w-12 h-0.5 bg-brand-orange/40 z-0">
             <div className="absolute top-1/2 right-[-6px] -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-brand-orange/40" />
          </div>

          {/* Stream 1 */}
          <motion.div variants={fadeUp} className="bg-brand-navy-dark border border-brand-white/10 rounded-xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-white/5 rounded-bl-full pointer-events-none" />
            <h3 className="font-display text-2xl font-bold text-brand-white mb-2">Stream 1: Bulk Export Sales</h3>
            <p className="font-primary text-brand-white/70 mb-8 max-w-sm">Foundation revenue. Bulk commodity export of Shea, Black Soap, Neem, Cocoa, Baobab, and Moringa.</p>
            <div className="text-xs font-display tracking-widest uppercase text-brand-white/40 mb-2">Primary Margin Driver</div>
            <div className="text-3xl font-light text-brand-white/60">Volume & Scale</div>
          </motion.div>

          {/* Stream 2 */}
          <motion.div variants={fadeUp} className="bg-gradient-to-br from-brand-orange/10 to-brand-navy border border-brand-orange/30 rounded-xl p-8 relative overflow-hidden group shadow-[0_0_30px_rgba(255,106,0,0.1)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-bl-full pointer-events-none" />
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-display text-2xl font-bold text-brand-orange">Stream 2: Private Label Manufacturing</h3>
              <span className="bg-brand-orange text-brand-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-sm">The 3-5x Multiplier</span>
            </div>
            
            <p className="font-primary text-brand-white/80 mb-8 max-w-sm">White-label production and custom packaging fees. Direct to retail shelves.</p>
            
            <div className="bg-brand-white/5 border border-brand-white/10 p-4 rounded-sm">
              <div className="text-xs font-display tracking-widest uppercase text-[#ff8022] mb-3">The Conversion Process</div>
              <ul className="space-y-3">
                {[
                  "1. Identify target brands",
                  "2. Send partnership proposal + samples",
                  "3. Flexible MOQ to lower barrier to first order",
                  "4. Convert into long-term supply agreements"
                ].map((step, i) => (
                  <li key={i} className="text-sm font-primary text-brand-white/80 flex items-start gap-2">
                     <ArrowRight className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                     {step}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
