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

      {/* === LAYER 1: Subtle Gradient Overlays === */}
      <div className="absolute inset-0 bg-brand-navy/30 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-[2] pointer-events-none" />

      {/* === LAYER 2: Centered Content Stack === */}
      <div className="w-full h-full flex flex-col justify-center items-center px-10 md:px-24 z-10 relative text-center">
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="max-w-6xl flex flex-col items-center"
        >
          {/* Brand Logo - Restored via White Box for visibility */}
          <motion.div variants={fadeUp} className="mb-8 relative w-56 h-20 md:w-80 md:h-24 bg-white rounded-2xl overflow-hidden p-4 shadow-2xl flex items-center justify-center">
             <Image 
                src="/assets/images/churchwin_logo_new.png" 
                alt="Churchwin Trading Logo" 
                fill
                className="object-contain p-2" 
              />
          </motion.div>

          {/* Headline: Single Line */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl lg:text-7xl font-bold text-brand-white leading-tight tracking-tight mb-4 drop-shadow-2xl whitespace-nowrap"
          >
            Churchwin Trading Co. Ltd
          </motion.h1>

          {/* Strategic Tagline */}
          <motion.div variants={fadeUp} className="mb-8">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-medium text-brand-orange leading-tight tracking-widest uppercase drop-shadow-md">
              Filling Africa&apos;s Missing Middle
            </h2>
          </motion.div>

          {/* Optional Subtext: Single Line */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
             <div className="w-12 h-[2px] bg-brand-orange mb-6" />
             <p className="text-sm md:text-base lg:text-xl text-brand-white/80 font-primary font-medium tracking-wide drop-shadow-lg whitespace-nowrap">
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
        className="absolute bottom-12 right-16 md:right-24 z-20 text-right"
      >
         <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-brand-white/30 font-semibold">
          Presented By
        </p>
        <p className="text-xs md:text-sm font-display font-black text-brand-white/60 tracking-[0.25em] mt-1 uppercase">
          CEPHAS KUDALOR
        </p>
      </motion.div>

      {/* Subtle bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-20" />
    </div>
  );
}
