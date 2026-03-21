"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { HeartHandshake, BookOpenCheck, ShieldCheck } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis } from "recharts";

const impactData = [
  { label: "Bulk Trading", value: 100, fill: "rgba(1, 39, 135, 0.2)" },
  { label: "Private Label", value: 350, fill: "#ff6a00" }
];

export function Slide22ImpactTransformed({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-cream relative">
      <div className="absolute top-0 left-1/4 w-[50vh] h-[50vh] bg-brand-orange/5 mix-blend-multiply rounded-full blur-[100px]" />
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-16 my-auto z-10">
        
        {/* Visual / Ethos Left */}
        <div className="w-full md:w-[45%] flex flex-col justify-center">
          <motion.div variants={fadeUp} className="w-20 h-1 bg-brand-orange mb-8" />
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-6xl font-black text-brand-navy leading-none tracking-tighter uppercase mb-6">
            The Revenue <br /><span className="text-brand-orange italic">Transformation.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl text-brand-navy/60 font-primary border-l-2 border-brand-navy/20 pl-6 mb-8 italic">
            Moving from low-margin commodity trading to high-margin institutional supply. <span className="text-brand-navy font-bold not-italic">Certification unlocks a 3.5x value capture multiplier per kg.</span>
          </motion.p>
        </div>

        {/* Impact Metrics Right */}
        <div className="w-full md:w-[55%] flex flex-col justify-center space-y-6">
          
          <motion.div variants={fadeUp} className="bg-white border border-brand-navy/10 rounded-xl p-8 flex items-start gap-6 group hover:border-brand-orange/50 transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-navy/5 border border-brand-orange/30 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-orange/10 transition-colors">
              <HeartHandshake className="text-brand-orange w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-navy mb-2">100+</div>
              <p className="font-primary text-brand-navy/70 text-lg font-medium">Women and community members currently empowered and directly funded.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white border border-brand-navy/10 rounded-xl p-8 flex items-start gap-6 group hover:border-brand-orange/50 transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-navy/5 border border-brand-navy/20 rounded-full flex items-center justify-center shrink-0">
              <BookOpenCheck className="text-brand-navy/60 w-6 h-6 group-hover:text-brand-orange transition-colors" />
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-navy mb-2">11 Cooperatives</div>
              <p className="font-primary text-brand-navy/70 text-lg font-medium">Fully documented, certified, and traceable to the village level.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white/60 backdrop-blur-md border border-brand-orange/30 rounded-xl p-8 flex items-start gap-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-orange shadow-[0_0_20px_rgba(255,106,0,0.4)]" />
            <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center shrink-0 shadow-lg relative z-10">
              <ShieldCheck className="text-brand-white w-6 h-6" />
            </div>
            <div className="flex-1 relative z-10">
              <div className="text-sm font-display tracking-widest text-brand-orange uppercase font-bold mb-3">Unit Economics & Transformation</div>
              <div className="flex flex-col md:flex-row gap-8 mb-4">
                 <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-brand-navy/40 font-black mb-1">Bulk Trading</p>
                    <p className="text-3xl font-display font-black text-brand-navy">$4.50<span className="text-sm font-primary text-brand-navy/40">/kg</span></p>
                 </div>
                 <div className="flex-1">
                    <p className="text-[10px] uppercase tracking-widest text-brand-orange font-black mb-1">Private Label Transformation</p>
                    <p className="text-3xl font-display font-black text-brand-orange">$15.80<span className="text-sm font-primary text-brand-orange/40">/kg</span></p>
                 </div>
              </div>
              <div className="flex items-end gap-6 border-t border-brand-navy/5 pt-4">
                <div className="flex-1">
                   <p className="font-primary text-brand-navy/90 text-sm leading-relaxed">Transitioning from commodity exports to institutional supply drives <span className="font-bold text-brand-orange italic">350% margin expansion</span>. <br /><strong>12-Month Target: $1.4M ARR.</strong></p>
                </div>
                <div className="w-24 h-20 shrink-0">
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
