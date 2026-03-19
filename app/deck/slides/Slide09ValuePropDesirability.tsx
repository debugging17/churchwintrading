"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger, staggerContainer, slideFromRight } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ShoppingBag, Warehouse, FileCheck, CheckCircle2 } from "lucide-react";

export function Slide09ValuePropDesirability() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex items-center justify-end bg-brand-navy overflow-hidden relative">
      
      {/* Visual Background - Full Visibility */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="/assets/trucking.jpeg" 
           alt="Industrial Logistic Support" 
           fill 
           className="object-cover brightness-75 contrast-[1.1]"
           priority
         />
         {/* Adaptive Overlay: Darker on the right where text lives */}
         <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/10 via-brand-navy/30 to-brand-navy/70 z-10" />
      </div>

      {/* Content Overlay - Premium Dark Glassmorphism */}
      <div className="w-full md:w-[70%] lg:w-[65%] h-full flex flex-col justify-center items-center z-20 relative px-6 md:px-0 md:mr-8 lg:mr-12">
        
        <motion.div 
          initial="hidden" 
          animate={animState} 
          variants={staggerContainer} 
          className="w-full bg-brand-navy/40 backdrop-blur-3xl border border-white/10 rounded-[40px] flex flex-col justify-center px-10 md:px-16 py-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle brand glow inside the glass */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-orange/15 rounded-full blur-[100px] pointer-events-none" />

          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-brand-orange" />
            <span className="text-brand-orange font-display font-bold uppercase tracking-[0.3em] text-[10px] drop-shadow-sm">The Churchwin Solution</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-8 drop-shadow-xl">
            Eliminating the Exact <span className="whitespace-nowrap">Pain Points</span> <br className="hidden md:block" />
            of Global Buyers.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-white/80 font-primary leading-relaxed mb-10 max-w-3xl drop-shadow-sm">
            We bridge the gap between rural production and global standards with a <span className="text-white font-semibold border-b-2 border-brand-orange/50 whitespace-nowrap">vertically integrated supply engine</span>.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 w-full">
            {[
              { 
                icon: <ShoppingBag className="w-5 h-5 text-white" />, 
                label: "For The Retailer", 
                val: "Flexible order quantities + consistent quality", 
                res: "no more multi-supplier chaos" 
              },
              { 
                icon: <Warehouse className="w-5 h-5 text-white" />, 
                label: "For The Wholesaler", 
                val: "Guaranteed mass production + buffer stocking", 
                res: "no more seasonal contract losses" 
              },
              { 
                icon: <FileCheck className="w-5 h-5 text-white" />, 
                label: "For Procurement", 
                val: "Instant compliance documentation download", 
                res: "no certificate hunting" 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-orange/40 hover:bg-white/10 transition-all duration-500 backdrop-blur-md shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all duration-300 shadow-inner">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="font-display text-white/40 font-bold text-[9px] uppercase tracking-[0.2em]">
                      {item.label}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shadow-sm" />
                  </div>
                  <p className="font-primary text-white text-sm md:text-base leading-snug">
                    <span className="opacity-60">{item.val} = </span>
                    <span className="font-bold text-white drop-shadow-sm">{item.res}.</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
