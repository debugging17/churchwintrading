"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { StatCard } from "../components/StatCard";
import { GlassCard } from "../components/GlassCard";

export function Slide12SupplyChainAdvantage() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-8 md:py-12 px-10 md:px-24 bg-brand-cream bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/10 via-brand-cream to-brand-cream relative overflow-hidden pb-[var(--footer-height)]">
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto z-10 my-auto">
        
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black text-brand-navy leading-tight mb-4 max-w-4xl uppercase tracking-tighter">
              The Growth <span className="text-brand-orange">Engine:</span> <br />
              <span className="italic font-light">Repeatability & Expansion.</span>
            </h2>
            <div className="w-16 h-1 bg-brand-orange/50 mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-12">
            {[
              { label: "One System", sub: "Same acquisition engine scales across Cosmetics, F&B, and Nutraceuticals.", icon: "⚙️" },
              { label: "High Efficiency", sub: "Automated prospecting reduces outreach cost by 60% vs. traditional brokers.", icon: "⚡" },
              { label: "Scalable Management", sub: "Cloud-based CRM allows one manager to handle 200+ active prospects.", icon: "📊" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="p-8 bg-brand-white border border-brand-navy/10 rounded-3xl shadow-xl hover:border-brand-orange/40 transition-all flex flex-col items-center text-center"
              >
                 <div className="text-4xl mb-6">{item.icon}</div>
                 <h3 className="text-xl font-display font-bold text-brand-navy mb-3">{item.label}</h3>
                 <p className="text-sm text-brand-navy/60 font-primary leading-relaxed">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            variants={fadeUp}
            className="p-8 bg-brand-navy text-white rounded-3xl flex items-center justify-between border-b-8 border-brand-orange"
          >
             <p className="font-display font-black text-lg md:text-2xl uppercase tracking-tight">
                Winning the market <br />
                <span className="text-brand-orange">one contract at a time.</span>
             </p>
             <div className="hidden md:block h-12 w-[1px] bg-white/10 mx-8" />
             <div className="text-right">
                <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-1">Target CAC</p>
                <p className="text-2xl font-display font-bold tracking-tighter">-$420/Lead</p>
             </div>
          </motion.div>
      </motion.div>
    </div>
  );
}
