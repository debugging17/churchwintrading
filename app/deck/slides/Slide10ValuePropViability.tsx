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
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.25 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/visual_supremacy/luxury_wellness_juice.png"
            alt="Value Capture"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-brand-navy" />
          <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-[90rem] mx-auto my-auto z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Headline and Strategy */}
          <div className="w-full lg:w-1/2">
            <motion.div variants={fadeUp} className="border-l-[6px] border-brand-orange pl-8 py-2 mb-10">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
                Maximum Margin<br />
                <span className="text-brand-orange italic">Architecture.</span>
              </h2>
              <p className="text-xl text-white/60 font-primary max-w-xl leading-relaxed">
                Transitioning from cost-driven commercial negotiation to value-driven <span className="text-white font-bold">Brand Partnership</span>.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
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
                  className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex items-start gap-6 group hover:bg-white/[0.05] transition-colors"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                    <stream.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-white font-display text-xl font-bold mb-2 uppercase tracking-tight">{stream.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{stream.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/20 ml-auto group-hover:text-brand-orange transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Unit Economics & Impact */}
          <motion.div 
            variants={fadeUp} 
            className="w-full lg:w-1/2 bg-brand-navy-light/20 backdrop-blur-2xl border border-white/5 rounded-[48px] p-10 md:p-14 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <TrendingUp className="w-32 h-32 text-brand-orange" />
            </div>

            <div className="relative z-10">
              <h3 className="text-brand-orange text-[11px] font-black uppercase tracking-[0.4em] mb-8">Unit Economic Transformation</h3>
              
              <div className="flex flex-col md:flex-row gap-12 mb-12">
                 <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-white/40 font-black mb-2">Bulk Trading (Origin)</p>
                    <p className="text-4xl md:text-5xl font-display font-black text-white">$4.50<span className="text-sm font-primary text-white/40 ml-1">/kg</span></p>
                 </div>
                 <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-brand-orange font-black mb-2">Private Label (Platform)</p>
                    <p className="text-4xl md:text-5xl font-display font-black text-brand-orange">$15.80<span className="text-sm font-primary text-brand-orange/40 ml-1">/kg</span></p>
                 </div>
              </div>

              <div className="flex items-center gap-10 pt-10 border-t border-white/10">
                <div className="flex-1">
                   <p className="font-primary text-white text-lg leading-snug">
                     Institutional supply drives <br />
                     <span className="text-brand-orange font-black text-2xl uppercase italic tracking-tighter">350% Margin Expansion</span>
                   </p>
                   <p className="text-white/40 text-sm mt-4 font-primary">12-Month Target: $1.4M ARR</p>
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
  );
}
