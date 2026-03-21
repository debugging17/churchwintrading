"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import Image from "next/image";

// SLIDE 04: THE MISSING MIDDLE — THE TRANSFORMATION
// Skills applied:
//   visual-storyteller: Before/After comparison provides concrete proof of institutionalization.
//   frontend-engineer: Responsive grid for comparison cards with glassmorphism.
//   ux-architect: Clear labeling of "The Gap" vs "The Goal".
//   proposal-strategist: Linking South Korea's structural shift to Churchwin's physical infrastructure.

export function Slide04MissingMiddle({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  const funnelTiers = [
    { label: "Micro Enterprises", width: "100%", sub: "80% of employment", fill: "bg-brand-navy/10" },
    { label: "The Missing Middle", width: "40%", sub: "<10% reach scale", fill: "bg-brand-orange shadow-[0_0_50px_rgba(255,106,0,0.4)]", active: true },
    { label: "Institutional Scale", width: "70%", sub: "Global Readiness", fill: "bg-brand-navy shadow-xl text-white" }
  ];

  return (
    <div className="w-full h-screen flex flex-col items-start justify-center relative overflow-hidden bg-brand-navy px-12 md:px-24">
      
      {/* === LAYER 0: Background Context — Principle 12: Mimic (Depth) === */}
      <div className="absolute inset-0 z-0 opacity-10">
        <Image 
          src="/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
          alt="Industrial Transformation" 
          fill 
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/90" />
      </div>

      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-[95rem] flex flex-col z-10"
      >
        {/* Title Area — Shifted Upwards & Left Aligned */}
        <motion.div variants={fadeUp} className="mb-4 md:mb-6 text-left">
           <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-[2px] bg-brand-orange" />
              <p className="text-brand-orange text-[10px] tracking-[0.4em] uppercase font-black">The Demand Bottleneck</p>
           </div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-white leading-none tracking-tighter whitespace-normal">
               Africa lacks structured demand. <br className="hidden md:block lg:hidden" />
               <span className="text-brand-orange italic underline decoration-white/10 decoration-2 underline-offset-8">This is the failure point of scale.</span>
            </h2>
         </motion.div>

         {/* Comparison Grid — Principle 8: Storytelling (Height Locked & Shifted Left) */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full mb-6 relative">
            
            {/* LEFT: THE CONSTRAINT (Current Office) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 60, damping: 20, delay: 0.2 }
                }
              }}
              className="group relative h-[48vh] md:h-[52vh] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-brand-navy"
            >
               <Image 
                 src="/images/IMG_0471-min-min-scaled.jpg" 
                 alt="Churchwin Current Office" 
                 fill 
                 className="object-cover opacity-80 xl:opacity-90 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/10 to-transparent opacity-80" />
               
               <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start text-left">
                  <span className="text-brand-orange text-[10px] uppercase font-black tracking-[0.4em] mb-4">Local Constraint</span>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-display font-black text-white leading-tight uppercase tracking-tighter">
                    Fragmented <br />Production
                  </h3>
                  <div className="w-12 h-1 bg-brand-orange/40 mt-4 rounded-full" />
               </div>
            </motion.div>



            {/* RIGHT: THE SCALE (Workshop/Industrial State) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 60, damping: 20, delay: 0.4 }
                }
              }}
              className="group relative h-[48vh] md:h-[52vh] rounded-[3rem] overflow-hidden border border-brand-orange/20 shadow-[0_0_80px_rgba(255,106,0,0.1)] bg-brand-navy"
            >
               <Image 
                 src="/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
                 alt="Churchwin Workshop Scale" 
                 fill 
                 className="object-cover opacity-90 group-hover:scale-105 transition-all duration-1000 ease-out"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/20 via-transparent to-transparent mix-blend-overlay opacity-50" />
               <div className="absolute inset-0 bg-brand-navy/10 opacity-40" />
               
               <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start text-left bg-gradient-to-t from-brand-navy/60 via-brand-navy/20 to-transparent">
                  <span className="text-brand-orange text-[10px] uppercase font-black tracking-[0.4em] mb-4">Global Scale</span>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-display font-black text-white leading-tight uppercase tracking-tighter">
                    Institutional <br />Infrastructure
                  </h3>
                  <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full shadow-[0_0_15px_rgba(255,106,0,0.8)]" />
               </div>

               {/* Transformation Badge (Principle 10: Life) */}
               <motion.div 
                 animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-10 bg-brand-orange/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl"
               >
                 <span className="text-[10px] font-black text-white uppercase tracking-widest">Target State</span>
               </motion.div>
            </motion.div>
         </div>

         {/* Insight Bar — Principle 7: Purpose (Spacing Refinement to Fit in Frame) */}
         <motion.div variants={fadeUp} className="bg-brand-white/5 p-6 md:p-8 rounded-3xl border-l-[10px] border-brand-orange shadow-2xl backdrop-blur-md mb-6">
            <p className="text-brand-white/90 font-primary italic text-base md:text-xl leading-relaxed">
              Moving from the constraint of manual heroics to the scale of <span className="text-brand-orange font-black not-italic underline decoration-white/10 underline-offset-4 decoration-2">Physical Trust Infrastructure.</span>
            </p>
         </motion.div>

         {/* Footer Strategy — Principle 11: Language (Shifted Right to avoid overlap) */}
         <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4 opacity-40 ml-0 md:ml-32">
           <div className="flex gap-12">
              <div>
                 <p className="text-white/40 text-[9px] uppercase font-black tracking-widest mb-1">Operational Shift</p>
                 <p className="text-brand-orange font-display font-bold text-sm underline decoration-brand-orange/20">Transformation Ready</p>
              </div>
           </div>
           <p className="text-white/20 text-[9px] uppercase font-black tracking-[0.4em]">
              BRIDGING THE GHANAIAN PRODUCTIVITY DEFICIT
           </p>
         </motion.div>

      </motion.div>
    </div>
  );
}
