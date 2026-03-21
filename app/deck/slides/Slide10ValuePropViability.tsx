"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ArrowRight } from "lucide-react";

export function Slide10ValuePropViability({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-white pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto my-auto">
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-navy mb-4 text-center tracking-tighter uppercase">
            The Operational <span className="text-brand-orange">Bridge.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl text-brand-navy/60 font-primary mb-16 text-center max-w-3xl mx-auto italic">
            Connecting fragmented origin supply to the rigid requirements of global institutional procurement.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { title: "Prospecting System", desc: "CRM-led identification of high-volume industrial buyers and premium retailers.", detail: "500+ Qualified Leads" },
              { title: "Sampling Protocol", desc: "Standardized Grade A verification to eliminate procurement friction.", detail: "Rapid Dispatch System" },
              { title: "Contract Architecture", desc: "Moving from spot-buys to multi-year institutional stability.", detail: "Locked Revenue" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                className="p-8 bg-brand-navy text-white rounded-[32px] border-b-8 border-brand-orange shadow-2xl group flex flex-col h-full"
              >
                 <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-6 text-brand-orange font-black">0{i+1}</div>
                 <h3 className="text-xl font-display font-black mb-3 group-hover:text-brand-orange transition-colors">{item.title}</h3>
                 <p className="text-sm text-white/60 font-primary leading-relaxed mb-8 flex-grow">{item.desc}</p>
                 <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-[10px] uppercase font-black tracking-widest text-brand-orange">{item.detail}</span>
                    <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-brand-orange transition-all" />
                 </div>
              </motion.div>
            ))}
          </div>
      </motion.div>
    </div>
  );
}
