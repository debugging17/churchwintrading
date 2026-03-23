"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { TrendingUp, ArrowRight, Package, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { ResponsiveContainer, BarChart, Bar, Cell } from "recharts";

const impactData = [
  { label: "Bulk Trading", value: 100, fill: "rgba(255, 255, 255, 0.2)" },
  { label: "Private Label", value: 350, fill: "#f47920" }
];

export function Slide10ValuePropViability({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full relative bg-brand-navy overflow-hidden">
      {/* 1. Background Layer (Fixed) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/visual_supremacy/luxury_wellness_juice.png"
            alt="Value Capture"
            fill
            className="object-cover object-[center_35%]"
            priority
          />
          {/* Subtle cinematic overlay - keep it clean and focused at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/30 via-transparent to-brand-navy/90" />
        </motion.div>
      </div>

      {/* 2. Content Layer (Scrollable) */}
      <div className="absolute inset-0 z-10 overflow-y-auto pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] pb-[calc(var(--footer-height)+12rem)] px-8 md:px-20">
        <motion.div
          initial="hidden"
          animate={animState}
          variants={staggerContainer}
          className="w-full max-w-[90rem] mx-auto flex flex-col justify-start pt-4"
        >
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 py-8">
            
            {/* Left: Headline and Strategy */}
            <div className="w-full lg:w-1/2">
              <motion.div variants={fadeUp} className="border-l-[6px] border-brand-orange pl-8 py-2 mb-10">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-2">
                  Maximum Margin<br />
                  <span className="text-brand-orange italic">Architecture.</span>
                </h2>
                <p className="text-lg text-white/50 font-primary max-w-lg leading-snug">
                  Transitioning from cost-driven commercial negotiation to value-driven <span className="text-white font-bold">Brand Partnership</span>.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {[
                  { 
                    title: "Stream 1: Bulk Export", 
                    desc: "Foundation revenue. High-volume supply of certified organic ingredients.",
                    icon: Package
                  },
                  { 
                    title: "Stream 2: Private Label", 
                    desc: "The 3–5× multiplier. White-label production and custom packaging fees.",
                    icon: ShieldCheck
                  }
                ].map((stream, i) => (
                  <motion.div 
                    key={i}
                    variants={fadeUp}
                    className="bg-brand-navy/85 backdrop-blur-xl border border-white/20 rounded-3xl p-8  flex flex-col group overflow-hidden relative shadow-2xl min-h-[480px]"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0 mb-6 group-hover:bg-brand-orange/20 transition-colors">
                      <stream.icon className="w-8 h-8 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-white font-display text-3xl font-black mb-4 uppercase tracking-tight leading-tight">{stream.title}</h3>
                      <p className="text-white/70 text-lg leading-relaxed font-primary">{stream.desc}</p>
                    </div>
                    <div className="mt-auto pt-6 flex justify-end">
                       <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-brand-orange transition-all group-hover:translate-x-1" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Unit Economics & Impact */}
            <motion.div 
              variants={fadeUp} 
              className="w-full lg:w-1/2 bg-brand-navy-light/60 backdrop-blur-xl border border-white/10 rounded-[48px] p-10 md:p-14 lg:p-16 relative overflow-hidden min-h-[480px] flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.55] mix-blend-screen pointer-events-none">
                <TrendingUp className="w-56 h-56 text-brand-orange filter blur-[1px] drop-shadow-[0_0_20px_rgba(244,121,32,0.5)]" />
              </div>

              <div className="relative z-10">
                <h3 className="text-brand-orange text-[11px] font-black uppercase tracking-[0.4em] mb-8">Unit Economic Transformation</h3>
                                <div className="flex flex-col md:flex-row gap-12 mb-12">
                    <div className="flex-1">
                       <p className="text-[12px] uppercase tracking-[0.2em] text-white/40 font-black mb-2">Bulk Trading (Origin)</p>
                       <p className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white">$4.50<span className="text-base font-primary text-white/40 ml-2">/kg</span></p>
                    </div>
                    <div className="flex-1">
                       <p className="text-[12px] uppercase tracking-[0.2em] text-brand-orange font-black mb-2">Private Label (Platform)</p>
                       <p className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-brand-orange">$15.80<span className="text-base font-primary text-brand-orange/40 ml-2">/kg</span></p>
                    </div>
                 </div>

                 <div className="flex items-center gap-10 pt-12 border-t border-white/10">
                   <div className="flex-1">
                      <p className="font-primary text-white text-xl md:text-2xl leading-tight">
                        Institutional supply drives <br />
                        <span className="text-brand-orange font-black text-3xl md:text-4xl uppercase italic tracking-tighter block mt-2">350% Margin Expansion</span>
                      </p>
                      <p className="text-white/40 text-base mt-6 font-primary font-bold">12-Month Target: $1.4M ARR</p>
                   </div>
                  <div className="w-32 h-24 shrink-0">
                     <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={impactData}>
                         <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                           {impactData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.fill} />
                           ))}
                         </Bar>
                       </BarChart>
                     </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
