"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { TrendingUp, RefreshCcw, Flag } from "lucide-react";

export function Slide20Phase3() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 bg-brand-cream">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Phase Header */}
        <div className="w-full md:w-1/3 border-l-[6px] border-[#ff8022] pl-6 py-2 h-max relative">
           <div className="absolute top-0 left-[-6px] w-[6px] h-1/2 bg-gradient-to-b from-brand-orange to-[#ff8022]" />
           <motion.h4 variants={fadeUp} className="text-sm font-display tracking-widest text-[#ff8022] uppercase mb-2 font-bold">Months 12–18</motion.h4>
           <motion.h2 variants={slideFromLeft} className="font-display text-4xl font-bold text-brand-navy leading-tight">
             Phase 3:<br /><span className="text-brand-orange">Scale</span>
           </motion.h2>
        </div>

        {/* Phase Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
           
           <motion.div variants={fadeUp} className="bg-brand-white border border-brand-navy/10 rounded-xl p-8 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-[100px] pointer-events-none" />
             <h3 className="text-brand-navy font-display text-xl font-bold mb-6 flex items-center gap-3">
                <TrendingUp className="text-[#ff8022] w-5 h-5" /> Expansion Initiatives
             </h3>
             <ul className="space-y-4">
                {[
                  "Private labeling capacity expanded to Tier-1 retail volume",
                  "Baobab + Moringa added to certified export line at scale",
                  "White-label portals launched per sector (Cosmetics / Nutraceuticals / Spa)",
                  <span key="cosmos">COSMOS/NATRUE certification achieved → <span className="text-brand-orange font-semibold">unlocks EU cosmetics manufacturer tier</span></span>,
                  <span key="cross" className="flex items-center gap-2 text-brand-navy font-semibold"><RefreshCcw className="w-4 h-4 text-brand-orange" /> The Cross-Sell Engine: Existing Shea clients upgraded to Baobab/Moringa</span>
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 border-b border-brand-navy/5 pb-3">
                     {typeof item === 'string' && <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 mt-2 shrink-0" />}
                     <div className="font-primary text-brand-navy/80 font-medium">{item}</div>
                  </li>
                ))}
             </ul>
           </motion.div>

           <motion.div variants={fadeUp} className="bg-brand-orange/5 border border-brand-orange/30 rounded-xl p-8 relative overflow-hidden group shadow-sm">
             <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange" />
             <h3 className="text-brand-orange font-display text-lg font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-3">
                <Flag className="w-4 h-4" /> Final KPIs
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
               <div className="flex flex-col">
                 <span className="font-display text-3xl font-bold text-brand-navy mb-1">Tier-1</span>
                 <span className="font-primary text-brand-navy/80 text-sm font-semibold">First private label contract closed</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-display text-3xl font-bold text-brand-navy mb-1">&gt;20%</span>
                 <span className="font-primary text-brand-navy/80 text-sm font-semibold">New ingredient revenue</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-display text-3xl font-bold text-brand-navy mb-1">&gt;70%</span>
                 <span className="font-primary text-brand-navy/80 text-sm font-semibold">Recurring order retention rate</span>
               </div>
             </div>
           </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
