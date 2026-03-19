"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import Image from "next/image";

// SLIDE 04: THE MISSING MIDDLE
// Skills applied:
//   visual-storyteller: Industrial context background grounds the abstract "gap" in real production.
//   frontend-engineer: Negative-margin overlap, glassmorphism card for narrative emphasis.
//   ux-architect: Centered funnel focus for maximum 5-second absorbability.
//   proposal-strategist: "Churchwin exists in the bottleneck" — direct, hardened messaging.

export function Slide04MissingMiddle() {
  const animState = useSlideEnter(100);

  const funnelTiers = [
    { label: "Micro Enterprises", width: "100%", sub: "80% of employment", fill: "bg-brand-navy/10" },
    { label: "The Missing Middle", width: "40%", sub: "<10% reach scale", fill: "bg-brand-orange shadow-[0_0_50px_rgba(255,106,0,0.4)]", active: true },
    { label: "Institutional Scale", width: "70%", sub: "Global Readiness", fill: "bg-brand-navy shadow-xl text-white" }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-navy">
      
      {/* === LAYER 0: Background Context === */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="/images/backgrounds/missing_middle_context.png" 
          alt="Industrial Scale" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply" />
      </div>

      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 z-10 px-10 md:px-24"
      >
        
        {/* Narrative Left */}
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
             <div className="w-12 h-[2px] bg-brand-orange" />
             <p className="text-brand-orange text-xs tracking-[0.4em] uppercase font-black">The Structural Bottleneck</p>
          </motion.div>

          <motion.h2 variants={slideFromLeft} className="text-5xl md:text-7xl font-black text-brand-white leading-[0.95] mb-8 tracking-tighter">
            80% of jobs.<br />
            <span className="text-brand-orange drop-shadow-lg italic">The trap is real.</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="bg-brand-white/5 border-l-4 border-brand-orange p-10 backdrop-blur-3xl rounded-r-2xl shadow-3xl">
            <p className="text-xl text-brand-white/90 font-primary leading-relaxed font-light italic mb-6">
              &ldquo;Africa&apos;s economy is currently hamstrung by fragmented SMEs that find it impossible to institutionalize.&rdquo;
            </p>
            <div className="bg-brand-navy border border-brand-white/10 p-6 rounded-xl">
               <h3 className="font-display font-black text-2xl text-brand-orange mb-2">Churchwin solves the middle.</h3>
               <p className="font-primary text-brand-white/60 text-sm leading-relaxed">
                  We bridge the gap from micro-fragmentation to industrial-scale B2B excellence.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Visual Right (Hourglass Funnel) */}
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
          
          <div className="w-full max-w-lg space-y-4">
            {funnelTiers.map((tier, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center group"
              >
                {/* Connector Taper (Up) */}
                {idx === 2 && (
                  <div className="w-full h-16 flex justify-center mb-[-1px] opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-full h-full bg-brand-white/10" style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0 100%)" }} />
                  </div>
                )}

                <div 
                  className={`relative p-8 rounded-2xl border border-brand-white/10 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:scale-[1.02] ${tier.fill}`}
                  style={{ width: tier.width }}
                >
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-40 mb-1">{idx === 0 ? "Entry" : idx === 1 ? "Pivot" : "Target"}</p>
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">{tier.label}</h3>
                  <p className="text-xs font-primary font-bold opacity-60 mt-1">{tier.sub}</p>

                  {tier.active && (
                    <>
                      <div className="absolute -inset-2 border border-brand-orange/40 rounded-3xl animate-pulse pointer-events-none" />
                      <div className="absolute -right-6 -top-6 w-16 h-16 rounded-full bg-brand-navy border-4 border-brand-orange flex items-center justify-center shadow-2xl scale-75 md:scale-100">
                        <span className="text-white font-display font-black text-base italic drop-shadow-lg">CW</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Connector Taper (Down) */}
                {idx === 0 && (
                  <div className="w-full h-16 flex justify-center mt-[-1px] opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-full h-full bg-brand-white/10" style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 40% 100%)" }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} className="mt-12 text-[10px] font-display font-black tracking-[0.4em] text-brand-white/20 uppercase">
             PROVEN INFRASTRUCTURE FOR MARKET ENTRY
          </motion.p>
        </div>

      </motion.div>
    </div>
  );
}
