"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GitCommit, FileText, Magnet, Flag } from "lucide-react";

export function Slide18Phase1({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-cream">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 my-auto">
        
        {/* Phase Header */}
        <div className="w-full md:w-[35%] border-l-[6px] border-brand-orange pl-6 py-2 h-max">
           <motion.h4 variants={fadeUp} className="text-sm font-display tracking-widest text-brand-orange uppercase mb-2 font-bold">Months 1–6</motion.h4>
           <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-black text-brand-navy leading-none tracking-tighter uppercase">
             Phase 1:<br /><span className="text-brand-orange italic">Mindset &<br/>Systems</span>
           </motion.h2>
        </div>

        {/* Phase Content */}
        <div className="w-full md:w-[65%] flex flex-col gap-8">
           
           <motion.div variants={fadeUp} className="bg-brand-navy text-white rounded-[40px] p-10 shadow-2xl relative overflow-hidden border-b-8 border-brand-orange">
             <div className="absolute top-0 right-0 p-8 opacity-25">
                <GitCommit className="w-24 h-24 text-brand-orange" />
             </div>
             <h3 className="text-white font-display text-2xl font-black mb-8 uppercase tracking-tight">Sub-Initiatives</h3>
             <ul className="space-y-4">
                {[
                  "Eliminate founder-dependent 'heroics' through documented SOPs.",
                  "B2B CRM integration and lead scoring for 500+ targets.",
                  "Structured LinkedIn and Instantly.ai outreach activation."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-white/10 pb-4">
                     <span className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0 shadow-[0_0_10px_rgba(244,121,32,0.5)]" />
                     <span className="font-primary text-white/80 font-medium text-sm">{item}</span>
                  </li>
                ))}
             </ul>
           </motion.div>

           <motion.div variants={fadeUp} className="bg-brand-orange/5 border border-brand-orange/20 rounded-[40px] p-10 relative overflow-hidden group shadow-sm flex items-center justify-between">
             <div className="flex flex-col">
                <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2 font-bold">Primary KPI</p>
                <p className="text-4xl md:text-5xl font-display font-black text-brand-navy tracking-tighter">500+</p>
                <p className="text-sm font-primary text-brand-navy/60">ICP-matched prospects identified.</p>
             </div>
             <div className="w-[1px] h-16 bg-brand-navy/10" />
             <div className="flex flex-col text-right">
                <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2 font-bold">Standardization</p>
                <p className="text-4xl md:text-5xl font-display font-black text-brand-navy tracking-tighter">100%</p>
                <p className="text-sm font-primary text-brand-navy/60">Core SOPs documented.</p>
             </div>
           </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
