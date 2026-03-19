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
    <div className="w-full h-full flex flex-col md:flex-row bg-brand-white overflow-hidden relative">
      
      {/* Visual Left - Refined Blending to reduce "white glow" */}
      <div className="hidden md:flex w-[45%] h-full relative overflow-hidden group">
         <div className="absolute inset-0 z-0 bg-brand-navy/5">
            <Image 
              src="/assets/trucking.jpeg" 
              alt="Industrial Logistic Support" 
              fill 
              className="object-cover scale-105 group-hover:scale-100 transition-transform duration-[6s] ease-out brightness-90 contrast-[1.1]"
              style={{ 
                maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)', 
                WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)' 
              }}
              priority
            />
         </div>
         {/* Subtle overlay gradient to kill the "white wash" */}
         <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-white to-transparent z-10" />
      </div>

      {/* Content Right - Premium Uplift */}
      <div className="w-full md:w-[55%] h-full flex flex-col justify-center px-10 md:px-24 z-20 relative bg-brand-white">
        
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-3xl -mr-32 -mt-32" />

        <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="max-w-3xl">
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-brand-orange" />
            <span className="text-brand-orange font-display font-medium uppercase tracking-[0.2em] text-xs">The Churchwin Solution</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl font-black text-brand-navy leading-[1.1] mb-8">
            Eliminating the <br/>
            <span className="text-brand-orange font-light">Exact Pain Points</span> <br/>
            of Global Buyers.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-navy/70 font-primary leading-relaxed mb-12 max-w-xl">
            We bridge the gap between rural production and global standards with a vertically integrated supply engine.
          </motion.p>

          <div className="grid grid-cols-1 gap-6">
            {[
              { 
                icon: <ShoppingBag className="w-5 h-5" />, 
                label: "For The Retailer", 
                val: "Flexible order quantities + consistent quality", 
                res: "no more multi-supplier chaos" 
              },
              { 
                icon: <Warehouse className="w-5 h-5" />, 
                label: "For The Wholesaler", 
                val: "Guaranteed mass production + buffer stocking", 
                res: "no more seasonal contract losses" 
              },
              { 
                icon: <FileCheck className="w-5 h-5" />, 
                label: "For Procurement", 
                val: "Instant compliance documentation download", 
                res: "no certificate hunting" 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                className="group flex items-start gap-6 p-6 rounded-2xl bg-brand-navy/[0.02] border border-brand-navy/5 hover:bg-brand-navy/[0.04] hover:border-brand-orange/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy/60 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors">
                  {item.icon}
                </div>
                <div className="flex-grow">
                  <h4 className="font-display text-brand-navy font-bold text-sm uppercase tracking-wider mb-2 flex items-center justify-between">
                    {item.label}
                    <CheckCircle2 className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h4>
                  <p className="font-primary text-brand-navy/80 text-base leading-relaxed">
                    <span className="text-brand-navy/50">{item.val}</span> <br/>
                    <span className="font-bold text-brand-navy">Result: {item.res}.</span>
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
