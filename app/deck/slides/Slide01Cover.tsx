"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import dynamic from "next/dynamic";
import Image from "next/image";

const RemotionPlayerWrapper = dynamic(
  () => import("../components/RemotionPlayerWrapper").then((mod) => mod.RemotionPlayerWrapper),
  { ssr: false }
);

// COVER SLIDE — Minimal & Clean Overhaul
export function Slide01Cover() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-brand-navy">
      {/* === LAYER 0: Full-bleed cinematic video background === */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/apply_cinematic,_8k_202603181845.mp4" type="video/mp4" />
      </video>

      {/* === LAYER 1: Dynamic Brand Overlays (Navy & Orange Infusion) === */}
      {/* Subtle brand orange glow from the bottom-left */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent z-[1] pointer-events-none" />
      
      {/* Navy wash for text readability */}
      <div className="absolute inset-0 bg-brand-navy/20 z-[2] pointer-events-none" />
      
      {/* Deep institutional gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-[3] pointer-events-none" />

      {/* === LAYER 2: Centered Content Stack (Pushed Slightly Higher) === */}
      <div className="w-full h-full flex flex-col justify-start items-center pt-24 md:pt-32 lg:pt-40 px-10 md:px-24 z-10 relative text-center">
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="max-w-6xl flex flex-col items-center"
        >
          {/* Brand Logo - Compact & Pushed Up */}
          <motion.div variants={fadeUp} className="mb-14 relative w-48 h-12 md:w-64 md:h-16 bg-white rounded-xl overflow-hidden p-4 shadow-xl flex items-center justify-center">
             <Image 
                src="/assets/images/churchwin_logo_new.png" 
                alt="Churchwin Trading Logo" 
                fill
                className="object-contain p-1" 
              />
          </motion.div>

          {/* Strategic Tagline: Primary Headline in White, Reduced Scale */}
          <motion.div variants={fadeUp} className="mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-brand-white leading-tight tracking-tight drop-shadow-2xl uppercase">
              Filling Africa&apos;s Missing Middle
            </h1>
          </motion.div>

          {/* Optional Subtext: White Hook, Reduced Scale */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
             <div className="w-12 h-[1px] bg-brand-white/40 mb-8" />
             <p className="text-sm md:text-base lg:text-lg text-brand-white/90 font-primary font-medium tracking-widest drop-shadow-lg whitespace-nowrap uppercase text-shadow-sm">
              Africa doesn&apos;t lack supply. It lacks structured demand.
             </p>
          </motion.div>
        </motion.div>
      </div>

      {/* === LAYER 3: Presenter Info (Minimized) === */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-16 md:right-24 z-20 text-right opacity-60"
      >
         <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-brand-white/50 font-semibold">
          Presented By
        </p>
        <p className="text-xs md:text-sm font-display font-black text-brand-white/70 tracking-[0.25em] mt-1 uppercase">
          CEPHAS KUDALOR
        </p>
      </motion.div>

      {/* Subtle bottom orange brand bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange/40 z-20" />
    </div>
  );
}
