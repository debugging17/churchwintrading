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
    <div className="w-full h-full flex flex-col md:flex-row bg-brand-navy overflow-hidden relative">
      
      {/* Visual Left - Background Image */}
      <div className="absolute inset-0 z-0 w-[40%] h-full">
         <Image 
           src="/assets/trucking.jpeg" 
           alt="Industrial Logistic Support" 
           fill 
           className="object-cover opacity-60 grayscale-[20%]"
           priority
         />
      </div>

      {/* Spacing for layout */}
      <div className="hidden md:block w-[30%] h-full relative z-10" />

      {/* Content Right - Premium Floating Container */}
      <div className="w-full md:w-[70%] h-full flex flex-col justify-center items-center z-20 relative px-6 md:px-0">
        
        <motion.div 
          initial="hidden" 
          animate={animState} 
          variants={staggerContainer} 
          className="w-full max-w-6xl bg-brand-white h-[90vh] md:h-[85vh] rounded-[40px] md:rounded-l-[60px] md:rounded-r-none flex flex-col justify-center px-10 md:px-20 py-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] -mr-40 -mt-40 opacity-40 pointer-events-none" />

          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-[1.5px] w-12 bg-brand-orange/60" />
            <span className="text-brand-orange font-display font-bold uppercase tracking-[0.3em] text-[10px]">The Churchwin Solution</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-[1.15] mb-8 max-w-5xl whitespace-normal break-words">
            Eliminating the Exact <span className="whitespace-nowrap">Pain Points</span> <br className="hidden md:block" />
            of Global Buyers.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-brand-navy/60 font-primary leading-relaxed mb-10 max-w-3xl">
            We bridge the gap between rural production and global standards with a <span className="text-brand-navy font-semibold">vertically integrated supply engine</span>, ensuring every shipment meets the highest quality and compliance benchmarks.
          </motion.p>

          <div className="grid grid-cols-1 gap-4 w-full max-w-4xl">
            {[
              { 
                icon: <ShoppingBag className="w-5 h-5 text-brand-navy/30 group-hover:text-brand-orange" />, 
                label: "For The Retailer", 
                val: "Flexible order quantities + consistent quality", 
                res: "no more multi-supplier chaos" 
              },
              { 
                icon: <Warehouse className="w-5 h-5 text-brand-navy/30 group-hover:text-brand-orange" />, 
                label: "For The Wholesaler", 
                val: "Guaranteed mass production + buffer stocking", 
                res: "no more seasonal contract losses" 
              },
              { 
                icon: <FileCheck className="w-5 h-5 text-brand-navy/30 group-hover:text-brand-orange" />, 
                label: "For Procurement", 
                val: "Instant compliance documentation download", 
                res: "no certificate hunting" 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                className="group flex items-center gap-6 p-4 rounded-2xl bg-[#F8F9FB] border border-brand-navy/5 hover:border-brand-orange/20 hover:bg-brand-white hover:shadow-xl transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center transition-all duration-300">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="font-display text-brand-navy/40 font-bold text-[9px] uppercase tracking-[0.2em]">
                      {item.label}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100" />
                  </div>
                  <p className="font-primary text-brand-navy text-sm md:text-base leading-snug">
                    <span className="opacity-50">{item.val} = </span>
                    <span className="font-bold">{item.res}.</span>
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
