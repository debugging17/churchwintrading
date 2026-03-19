import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft } from "../motion/variants";

interface SectionTitleProps {
  number: string;
  title: string;
  subtitle?: string;
}

export function SectionTitle({ number, title, subtitle }: SectionTitleProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-navy">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] -translate-y-1/2 rounded-full bg-brand-orange/5 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-navy-light/20 blur-[100px]" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl px-8">
        <motion.div 
          variants={fadeUp}
          className="font-display text-brand-orange text-xl md:text-2xl font-semibold tracking-[0.3em] mb-6"
        >
          {number}
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h2 
            variants={slideFromLeft}
            className="font-display text-5xl md:text-8xl font-extrabold text-brand-white tracking-tighter"
          >
            {title}
          </motion.h2>
        </div>
        
        {subtitle && (
          <motion.p
            variants={fadeUp}
            className="mt-8 font-primary text-lg md:text-xl text-brand-white/50 font-light italic leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        
        <motion.div 
          variants={fadeUp}
          className="mt-12 w-16 h-1 bg-brand-orange/50"
        />
      </div>
    </div>
  );
}
