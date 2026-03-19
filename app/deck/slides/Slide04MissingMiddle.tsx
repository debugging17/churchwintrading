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
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-navy pb-[var(--footer-height)]">
      
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
        className="w-full max-w-[85rem] mx-auto flex flex-col md:flex-row items-center gap-[4rem] z-10 px-[2.5rem] md:px-[6rem]"
      >
        
        {/* Narrative Left */}
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.div variants={fadeUp} className="flex items-center gap-[1rem] mb-[2rem]">
             <div className="w-[3rem] h-[2px] bg-brand-orange" />
             <p className="text-brand-orange text-[0.6rem] tracking-[0.4em] uppercase font-black">The Structural Bottleneck</p>
          </motion.div>

          <motion.h2 variants={slideFromLeft} className="text-[clamp(2.5rem,6vw,5rem)] font-black text-brand-white leading-[0.95] mb-[2rem] tracking-tighter">
            80% of jobs.<br />
            <span className="text-brand-orange drop-shadow-lg italic">The trap is real.</span>
          </motion.h2>

          <motion.div variants={fadeUp} className="bg-brand-white/5 border-l-[0.3rem] border-brand-orange p-[2rem] md:p-[2.5rem] backdrop-blur-3xl rounded-r-[1rem] shadow-3xl">
            <p className="text-[1.2rem] text-brand-white/90 font-primary leading-relaxed font-light italic mb-[1.5rem]">
              &ldquo;Africa&apos;s economy is currently hamstrung by fragmented SMEs that find it impossible to institutionalize.&rdquo;
            </p>
            <div className="bg-brand-navy border border-brand-white/10 p-[1.5rem] rounded-[1rem]">
               <h3 className="font-display font-black text-[1.5rem] text-brand-orange mb-[0.5rem]">Churchwin solves the middle.</h3>
               <p className="font-primary text-brand-white/60 text-[0.875rem] leading-relaxed">
                  We bridge the gap from micro-fragmentation to industrial-scale B2B excellence.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Visual Right (Hourglass Funnel) */}
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
          
          <div className="w-full max-w-[32rem] space-y-[1rem]">
            {funnelTiers.map((tier, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="flex flex-col items-center group"
              >
                {/* Connector Taper (Up) */}
                {idx === 2 && (
                  <div className="w-full h-[4rem] flex justify-center mb-[-1px] opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-full h-full bg-brand-white/10" style={{ clipPath: "polygon(40% 0, 60% 0, 100% 100%, 0 100%)" }} />
                  </div>
                )}

                <div 
                  className={`relative p-[2rem] rounded-[1rem] border border-brand-white/10 flex flex-col items-center justify-center text-center transition-all duration-500 group-hover:scale-[1.02] ${tier.fill}`}
                  style={{ width: tier.width }}
                >
                  <p className="text-[0.625rem] uppercase font-black tracking-widest opacity-40 mb-[0.25rem]">{idx === 0 ? "Entry" : idx === 1 ? "Pivot" : "Target"}</p>
                  <h3 className="text-[1.25rem] md:text-[1.5rem] font-black tracking-tight">{tier.label}</h3>
                  <p className="text-[0.75rem] font-primary font-bold opacity-60 mt-[0.25rem]">{tier.sub}</p>

                  {tier.active && (
                    <>
                      <div className="absolute -inset-[0.5rem] border border-brand-orange/40 rounded-[1.5rem] animate-pulse pointer-events-none" />
                      <div className="absolute -right-[1.5rem] -top-[1.5rem] w-[4rem] h-[4rem] rounded-full bg-brand-navy border-[0.25rem] border-brand-orange flex items-center justify-center shadow-2xl scale-75 md:scale-100">
                        <span className="text-white font-display font-black text-[1rem] italic drop-shadow-lg">CW</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Connector Taper (Down) */}
                {idx === 0 && (
                  <div className="w-full h-[4rem] flex justify-center mt-[-1px] opacity-20 group-hover:opacity-40 transition-opacity">
                    <div className="w-full h-full bg-brand-white/10" style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 40% 100%)" }} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.p variants={fadeUp} className="mt-[3rem] text-[0.625rem] font-display font-black tracking-[0.4em] text-brand-white/20 uppercase">
             PROVEN INFRASTRUCTURE FOR MARKET ENTRY
          </motion.p>
        </div>

      </motion.div>
    </div>
  );
}
