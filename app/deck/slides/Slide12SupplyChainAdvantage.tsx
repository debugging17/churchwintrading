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
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-cream bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/10 via-brand-cream to-brand-cream relative overflow-hidden">
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto z-10 my-auto">
        
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-display text-4xl md:text-6xl font-bold text-brand-navy leading-tight mb-4 max-w-4xl">
            When Ghana&apos;s Shea sector lost 40%, <span className="text-brand-orange font-light">Churchwin Trading held contracts.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange/50 mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <GlassCard theme="light" delay={0.2} className="bg-brand-white/80 border-brand-navy/10 shadow-lg">
            <h3 className="text-xs font-display tracking-widest uppercase text-brand-navy/50 mb-8 font-bold">The 2024 Industry Headwinds</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-6">
              <StatCard theme="light" label="Nut Price Surge" value="140%" trend="Costs" />
              <StatCard theme="light" label="Yield Shortfall" value="45%" />
              <div className="sm:col-span-2">
                <StatCard theme="light" label="Sector-wide Revenue Decline" value="40%" />
              </div>
            </div>
          </GlassCard>

          <motion.div variants={fadeUp} className="flex flex-col justify-center pl-4 md:pl-12 border-l border-brand-navy/10 relative">
             <div className="absolute top-0 left-[-1px] w-[2px] h-1/3 bg-gradient-to-b from-brand-orange to-transparent" />
             
             <h3 className="font-display text-3xl font-bold text-brand-navy mb-6 leading-tight">
               Mass stocking + supplier relationships with 11 cooperatives = <span className="text-brand-orange">supply continuity our competitors couldn&apos;t match.</span>
             </h3>
             
             <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-lg p-4 mt-4">
               <div className="font-display text-3xl font-bold text-brand-orange">Zero contracts lost.</div>
               <p className="font-primary text-sm text-brand-navy/70 mt-1">While the industry shed 40% of revenue, Churchwin retained every active buyer through buffer inventory and cooperative loyalty.</p>
             </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
