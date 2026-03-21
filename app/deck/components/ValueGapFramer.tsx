"use client";
import React from 'react';
import { motion } from 'framer-motion';

export const ValueGapFramer: React.FC = () => {
  const splitPoint = 10; // 10% African Capture

  return (
    <div className="w-full flex flex-col gap-3 py-4">
      {/* Container Bar */}
      <div className="w-full h-8 bg-white/10 rounded-full overflow-hidden flex border border-white/20 relative">
        {/* Africa Segment (10%) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${splitPoint}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="h-full bg-brand-orange relative z-10"
        >
          {/* Subtle Glow */}
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>

        {/* Global Segment (90%) */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${100 - splitPoint}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          className="h-full bg-white/5"
        />
        
        {/* Labels Overlay */}
        <div className="absolute inset-0 flex justify-between items-center px-4 pointer-events-none">
           <span className="text-[10px] font-black text-white uppercase tracking-tighter mix-blend-difference">
             Africa (10%)
           </span>
           <span className="text-[10px] font-black text-white/40 uppercase tracking-tighter">
             Global (90%)
           </span>
        </div>
      </div>

      <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white/40">
        <span>Raw Material Capture</span>
        <span className="text-brand-orange">Institutional Value Gap</span>
      </div>
    </div>
  );
};
