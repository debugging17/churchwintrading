"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

export function Slide04MissingMiddle() {
  const animState = useSlideEnter(100);

  // ROLES APPLIED:
  // 1. ux-architect: Split layout with infographic block.
  // 2. proposal-strategist: "Building the Missing Middle from the inside" verbatim copy.
  // 3. brand-guardian: Orange emphasis for the 'Missing Middle' zone.

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-brand-cream overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-1/4 w-[60vh] h-[60vh] bg-brand-orange/10 mix-blend-multiply rounded-full blur-[100px]" />

      <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-10 md:px-24 z-10">
        <motion.div initial="hidden" animate={animState} variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
        }}>
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
            80% of employment.<br />
            <span className="text-brand-orange font-light">Less than 10% reach scale.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-brand-navy/80 font-primary leading-relaxed mb-6">
            Micro enterprises die before becoming SMEs. SMEs can&apos;t fuel the economy without growing.
          </motion.p>
          
          <motion.div variants={fadeUp} className="bg-brand-navy/5 border-l-4 border-brand-orange p-6 mt-8 relative overflow-hidden group rounded-r-sm">
            <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors" />
            <p className="font-display font-medium text-xl text-brand-navy relative z-10 space-y-2">
              <span className="block">Churchwin Trading is in the zone that changes this.</span>
              <span className="block text-brand-orange">Building the Missing Middle from the inside.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-[55%] h-full flex items-center justify-center relative p-12">
        {/* Infographic Visual - CSS representation of the Missing Middle pyramid */}
        <motion.div 
          initial="hidden" animate={animState} variants={fadeUp}
          className="w-full max-w-lg aspect-square bg-brand-white border border-brand-navy/10 rounded-2xl p-8 flex flex-col justify-end relative shadow-xl my-auto"
        >
          <div className="absolute top-6 left-6 text-brand-navy/40 font-primary text-xs uppercase tracking-wider">
            Distribution of MSME Employment
          </div>

          <div className="flex flex-col items-center w-full gap-4 mt-12 pb-4">
            {/* Top: Large Enterprises */}
            <div className="w-1/4 h-16 bg-brand-navy/5 rounded-sm flex items-center justify-center text-xs text-brand-navy/60 font-medium">
              LARGE<br/><span className="text-[10px] font-light">10%</span>
            </div>
            
            {/* The Missing Middle Highlight */}
            <motion.div 
               animate={{ boxShadow: ["0px 0px 0px rgba(255,106,0,0)", "0px 0px 30px rgba(255,106,0,0.3)", "0px 0px 0px rgba(255,106,0,0)"] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-2/4 h-24 bg-brand-orange/10 border border-brand-orange/30 rounded-sm flex flex-col items-center justify-center text-brand-orange relative group"
            >
               <span className="font-display font-bold md:text-xl tracking-wider uppercase mb-1">
                The Missing Middle
              </span>
              <span className="text-xs font-semibold text-brand-navy">(Churchwin Trading)</span>
              <div className="absolute -right-32 top-1/2 -translate-y-1/2 text-[10px] text-brand-navy/60 border-b border-brand-navy/20 pb-1">
                SME scale zone
              </div>
            </motion.div>

            {/* Bottom: Micro Enterprises */}
            <div className="w-full h-32 bg-brand-navy/5 rounded-sm flex items-center justify-center text-brand-navy/40 uppercase tracking-widest text-sm font-medium relative border-t-2 border-dashed border-brand-navy/10 mt-2">
              <span className="absolute -top-3 bg-brand-cream px-2 text-xs">Death Valley</span>
              MICRO ENTERPRISES (80%)
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
