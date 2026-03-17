import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft } from "../motion/variants";

interface SectionTitleProps {
  number: string;
  title: string;
}

export function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-navy">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-[40vw] h-[40vw] -translate-y-1/2 rounded-full bg-brand-orange/5 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[30vw] h-[30vw] rounded-full bg-brand-navy-light/20 blur-[100px]" />
      
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div 
          variants={fadeUp}
          className="font-display text-brand-orange text-xl md:text-2xl font-semibold tracking-[0.3em] mb-6"
        >
          {number}
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.h2 
            variants={slideFromLeft}
            className="font-display text-5xl md:text-7xl font-bold text-brand-white tracking-tight"
          >
            {title}
          </motion.h2>
        </div>
        
        <motion.div 
          variants={fadeUp}
          className="mt-12 w-16 h-1 bg-brand-orange/50"
        />
      </div>
    </div>
  );
}
