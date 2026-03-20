"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Zap, Link, Globe } from "lucide-react";

export function Slide08Insight() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-brand-navy overflow-hidden px-10 md:px-20">
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-[100px] animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-navy/30 rounded-full blur-[100px]" />

      <motion.div
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-5xl flex flex-col items-center text-center z-10"
      >
        <motion.div variants={fadeUp} className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full mb-6">
            <Zap className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.3em]">The Core Insight</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-brand-white leading-tight tracking-tighter">
            Demand—not supply—<br />
            is the <span className="text-brand-orange">bottleneck.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full mb-16 relative">
          {/* Connecting Line (Horizontal on Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0" />
          
          {[
            { label: "Global Demand", icon: Globe, sub: "Massive institutional appetites for ethical botanicals." },
            { label: "The Gap", icon: Link, sub: "No reliable, data-backed bridge between origin and end-user." },
            { label: "African Supply", icon: Zap, sub: "Vast, underutilized capacity across 11+ cooperatives." }
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              variants={fadeUp}
              className="flex flex-col items-center px-8 z-10"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border ${i === 1 ? 'bg-brand-orange border-brand-orange shadow-[0_0_30px_rgba(255,106,0,0.4)] rotate-45' : 'bg-brand-navy border-white/20'}`}>
                <item.icon className={`w-8 h-8 ${i === 1 ? 'text-white -rotate-45' : 'text-brand-orange'}`} />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-white mb-2">{item.label}</h3>
              <p className="text-sm text-brand-white/50 leading-relaxed font-primary">{item.sub}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeUp}
          className="border-t border-white/10 pt-10"
        >
          <p className="text-brand-white/80 text-xl font-primary italic">
            &quot;We build the engine that connects <span className="text-brand-orange font-bold not-italic">unstructured supply</span> to <span className="text-brand-orange font-bold not-italic">predictable demand</span>.&quot;
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
