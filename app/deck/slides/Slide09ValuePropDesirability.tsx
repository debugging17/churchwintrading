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
           className="object-cover brightness-75 contrast-[1.05]"
           priority
         />
         {/* Adaptive Overlay: Lighter and more transparent */}
         <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/5 via-brand-navy/20 to-brand-navy/50 z-10" />
      </div>

      {/* Content Overlay - Refined Glassmorphism (Reduced Refraction) */}
      <div className="w-full md:w-[70%] lg:w-[65%] h-full flex flex-col justify-center items-center z-20 relative px-6 md:px-0 md:mr-8 lg:mr-12">
        
        <motion.div 
          initial="hidden" 
          animate={animState} 
          variants={staggerContainer} 
          className="w-full bg-brand-navy/25 backdrop-blur-xl border border-white/10 rounded-[40px] flex flex-col justify-center px-10 md:px-16 py-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle brand glow inside the glass */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-brand-orange" />
            <span className="text-brand-orange font-display font-bold uppercase tracking-[0.3em] text-[10px] drop-shadow-md">The Churchwin Solution</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl lg:text-5xl font-black text-white leading-[1.1] mb-8 drop-shadow-2xl uppercase">
            From trading company <br />
            <span className="text-brand-orange">→ to infrastructure layer</span>
          </motion.h2>

          <div className="flex flex-col gap-6 w-full">
            {[
              { 
                ver: "1.0", 
                label: "Commodity Trading", 
                desc: "Moving raw materials via manual referrals and traditional brokers.", 
                active: false 
              },
              { 
                ver: "2.0", 
                label: "Supply Chain Operator", 
                desc: "Vertical integration of 11+ cooperatives and direct export logistics.", 
                active: false 
              },
              { 
                ver: "3.0", 
                label: "Demand + Supply Engine", 
                desc: "Predictable B2B acquisition paired with scalable processing capacity.", 
                active: true 
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                className={`group flex items-center gap-8 p-6 rounded-3xl border transition-all duration-500 ${item.active ? 'bg-brand-orange/20 border-brand-orange shadow-[0_0_30px_rgba(255,106,0,0.2)]' : 'bg-white/5 border-white/10 opacity-60'}`}
              >
                <div className={`text-4xl font-display font-black leading-none ${item.active ? 'text-brand-orange' : 'text-white/20'}`}>
                  {item.ver}
                </div>
                <div className="flex-grow">
                   <h4 className={`font-display font-bold text-lg uppercase tracking-tight ${item.active ? 'text-white' : 'text-white/40'}`}>
                    {item.label}
                   </h4>
                   <p className={`font-primary text-sm leading-snug mt-1 ${item.active ? 'text-white/90' : 'text-white/30'}`}>
                    {item.desc}
                   </p>
                </div>
                {item.active && (
                   <div className="w-4 h-4 rounded-full bg-brand-orange animate-ping" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
