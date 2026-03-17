"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GlassCard } from "../components/GlassCard";
import { Search } from "lucide-react";

export function Slide15DigitalVisibility() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-brand-navy overflow-hidden">
      
      {/* Content Left */}
      <div className="w-full md:w-[55%] h-full flex flex-col justify-center px-10 md:px-24 z-10 bg-brand-navy-dark relative">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-orange/5 blur-[120px] mix-blend-screen" />
        
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="max-w-xl relative z-10">
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-bold text-brand-white leading-tight mb-8">
            The demand exists. <br />The buyers are searching. <br />
            <span className="text-brand-orange font-light">Churchwin captures zero of it.</span>
          </motion.h2>

          <GlassCard delay={0.2} className="mb-8 border-l-4 border-l-brand-orange">
            <h4 className="text-xs font-display tracking-widest text-[#ff8022] uppercase mb-4">Total Addressable Market</h4>
            <ul className="space-y-4 font-primary text-brand-white/80">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-white/20" />
                <span className="font-bold text-brand-white">$40.8B</span> Global organic cosmetics market
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-white/20" />
                <span className="font-bold text-brand-white">$4.27B</span> Shea butter market by 2033
              </li>
              <li className="flex items-center gap-3 bg-brand-white/5 p-3 rounded-md border border-brand-white/10 mt-2">
                <Search className="w-4 h-4 text-brand-orange" />
                <span className="font-bold text-brand-white">2,400+</span> Monthly US searches for &quot;shea butter wholesale&quot;
              </li>
            </ul>
          </GlassCard>

          <motion.div variants={fadeUp} className="text-lg font-primary leading-relaxed text-brand-white/70 italic border-l-2 border-brand-white/20 pl-6">
            We have the superior supply infrastructure. What we lack is the client acquisition engine. <span className="text-brand-orange font-semibold not-italic">This is an execution item.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Visual Right - Traffic Comparison */}
      <div className="w-full md:w-[45%] h-full flex items-center justify-center p-12 relative border-l border-brand-white/5">
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-sm">
           <h4 className="font-display text-sm tracking-widest text-brand-white/40 uppercase mb-8 text-center">Monthly Web Traffic (Ahrefs Estimate)</h4>
           
           <div className="space-y-8 relative">
             {/* Abstract scales graphic connecting them */}
             <div className="absolute left-6 top-10 bottom-6 w-px bg-gradient-to-b from-brand-white/20 via-brand-white/10 to-brand-orange/50" />

             {/* Baraka */}
             <motion.div variants={fadeUp} className="relative z-10 pl-16">
               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-navy-light/20 border border-brand-white/20 flex items-center justify-center text-xs font-bold text-brand-white/40">#1</div>
               <div className="font-display font-medium text-brand-white mb-1">Baraka Shea Butter</div>
               <div className="text-3xl font-light text-brand-white mb-2">~52,000</div>
               <div className="w-full h-1 bg-brand-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-white/40 w-[100%]" />
               </div>
             </motion.div>

             {/* Jedwards */}
             <motion.div variants={fadeUp} className="relative z-10 pl-16">
               <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-navy-light/20 border border-brand-white/10 flex items-center justify-center text-xs font-bold text-brand-white/40">#2</div>
               <div className="font-display font-medium text-brand-white mb-1">Jedwards Int.</div>
               <div className="text-3xl font-light text-brand-white/70 mb-2">~30,000</div>
               <div className="w-full h-1 bg-brand-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-white/30 w-[60%]" />
               </div>
             </motion.div>

             {/* Churchwin */}
             <motion.div variants={fadeUp} className="relative z-10 pl-16 mt-16 pt-8 border-t border-brand-white/10">
               <div className="absolute left-0 top-1/2 translate-y-4 w-12 h-12 rounded-full bg-brand-orange/10 border border-brand-orange/50 flex items-center justify-center text-xs font-bold text-brand-orange shadow-[0_0_15px_rgba(255,106,0,0.3)]">YOU</div>
               <div className="font-display font-medium text-brand-orange mb-1">Churchwin Trading</div>
               <div className="text-4xl font-bold text-brand-orange mb-2">~200</div>
               <div className="w-full h-1 bg-brand-white/5 rounded-full overflow-hidden">
                 <div className="h-full bg-brand-orange w-[2%]" />
               </div>
               <div className="mt-4 text-xs font-primary text-brand-white/40 uppercase tracking-widest bg-brand-orange/10 px-3 py-1.5 rounded-sm inline-block border border-brand-orange/20">
                 1/260th The Visibility
               </div>
             </motion.div>
           </div>
        </motion.div>
      </div>

    </div>
  );
}
