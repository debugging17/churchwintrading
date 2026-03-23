"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import Image from "next/image";

export function Slide23TheAsk({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative text-brand-white">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
           initial={{ scale: 1.1, opacity: 0 }}
           animate={{ scale: 1, opacity: 0.3 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
           className="w-full h-full relative"
        >
          <Image
            src="/images/visual_supremacy/steering_committee.png"
            alt="The Board"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-brand-navy" />
          <div className="absolute inset-0 bg-brand-navy/80 mix-blend-multiply" />
        </motion.div>
      </div>

      <motion.div 
        initial="hidden" 
        animate={animState} 
        variants={staggerContainer} 
        className="w-full max-w-6xl mx-auto my-auto z-10 text-center"
      >
        <motion.div variants={fadeUp} className="mb-8">
           <span className="text-brand-orange text-[10px] font-black uppercase tracking-[0.5em] mb-6 block drop-shadow-lg">Section 07</span>
           <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight mb-8 uppercase tracking-tighter">
             The <span className="text-brand-orange italic">Ask.</span>
           </h2>
           <div className="w-24 h-2 bg-brand-orange mx-auto mb-12 shadow-[0_0_20px_rgba(255,106,0,0.5)]" />
           <p className="text-white/60 text-xl md:text-2xl font-primary max-w-2xl mx-auto italic font-light">
             From planning to execution. Three board resolutions <br />to unlock global market share.
           </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
