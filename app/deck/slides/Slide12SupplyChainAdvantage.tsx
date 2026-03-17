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
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 bg-brand-navy-dark bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/5 via-brand-navy-dark to-brand-navy-dark relative overflow-hidden">
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto z-10">
        
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-brand-white leading-tight mb-4 max-w-4xl">
            When Ghana&apos;s Shea sector lost 40%, <span className="text-brand-orange font-light">Churchwin Trading held contracts.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange/50 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <GlassCard delay={0.2} className="bg-brand-navy/50 border-brand-orange/20">
            <h3 className="text-xs font-display tracking-widest uppercase text-brand-white/40 mb-8 font-bold">The 2024 Industry Headwinds</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-6">
              <StatCard label="Nut Price Surge" value="140%" trend="Costs" />
              <StatCard label="Yield Shortfall" value="45%" />
              <div className="sm:col-span-2">
                <StatCard label="Sector-wide Revenue Decline" value="40%" />
              </div>
            </div>
          </GlassCard>

          <motion.div variants={fadeUp} className="flex flex-col justify-center pl-4 md:pl-12 border-l border-brand-white/10 relative">
             <div className="absolute top-0 left-[-1px] w-[2px] h-1/3 bg-gradient-to-b from-brand-orange to-transparent" />
             
             <h3 className="font-display text-3xl font-bold text-brand-white mb-6 leading-tight">
               Mass stocking + supplier relationships with 11 cooperatives = <span className="text-brand-orange">supply continuity our competitors couldn&apos;t match.</span>
             </h3>
             
             <p className="font-primary text-xl text-brand-white/60 italic border-l-4 border-brand-white/20 pl-6 py-2 mt-4">
               &quot;This is what operational maturity looks like.&quot;
             </p>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
