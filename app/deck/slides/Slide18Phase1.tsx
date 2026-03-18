"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GitCommit, FileText, Magnet, Flag } from "lucide-react";

export function Slide18Phase1() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-cream">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-12 my-auto">
        
        {/* Phase Header */}
        <div className="w-full md:w-1/3 border-l-[6px] border-brand-orange pl-6 py-2 h-max">
           <motion.h4 variants={fadeUp} className="text-sm font-display tracking-widest text-[#ff8022] uppercase mb-2 font-bold">Months 1–6</motion.h4>
           <motion.h2 variants={slideFromLeft} className="font-display text-4xl font-bold text-brand-navy leading-tight">
             Phase 1:<br /><span className="text-brand-orange">Mindset &<br/>Systems</span>
           </motion.h2>
        </div>

        {/* Phase Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-8">
           
           <motion.div variants={fadeUp} className="bg-brand-white border border-brand-navy/10 rounded-xl p-8 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-navy/5 rounded-bl-[100px] pointer-events-none" />
             <h3 className="text-brand-navy font-display text-xl font-bold mb-6 flex items-center gap-3">
                <GitCommit className="text-brand-orange w-5 h-5" /> Sub-Initiatives
             </h3>
             <ul className="space-y-4">
                {[
                  "Roger Martin Strategic Choice Cascade implementation across operations",
                  "Shift from founder-dependent \"heroics\" to documented management systems",
                  "B2B Outreach Activated: Apollo list building; LinkedIn presence optimized; Instantly.ai warm-up sequence begins"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 border-b border-brand-navy/5 pb-3">
                     <span className="w-1.5 h-1.5 rounded-full bg-brand-navy/40 mt-2 shrink-0" />
                     <span className="font-primary text-brand-navy/80 font-medium">{item}</span>
                  </li>
                ))}
             </ul>
           </motion.div>

           <motion.div variants={fadeUp} className="bg-brand-orange/5 border border-brand-orange/30 rounded-xl p-8 relative overflow-hidden group shadow-sm">
             <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange" />
             <h3 className="text-brand-orange font-display text-lg font-bold mb-4 uppercase tracking-widest text-sm flex items-center gap-3">
                <Flag className="w-4 h-4" /> KPIs & Outcomes
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex flex-col">
                 <span className="font-display text-3xl font-bold text-brand-navy mb-1">3</span>
                 <span className="font-primary text-brand-navy/80 text-sm font-semibold">Core SOPs documented per department</span>
               </div>
               <div className="flex flex-col">
                 <span className="font-display text-3xl font-bold text-brand-navy mb-1">500+</span>
                 <span className="font-primary text-brand-navy/80 text-sm font-semibold">ICP-matched prospects identified and scored</span>
               </div>
             </div>
           </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
