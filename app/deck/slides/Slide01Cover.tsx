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
          className="max-w-7xl flex flex-col items-center"
        >
          {/* Brand Logo - Centered Box */}
          <motion.div variants={fadeUp} className="mb-10 relative w-56 h-20 md:w-80 md:h-24 bg-white rounded-2xl overflow-hidden p-4 shadow-2xl flex items-center justify-center">
             <Image 
                src="/assets/images/churchwin_logo_new.png" 
                alt="Churchwin Trading Logo" 
                fill
                className="object-contain p-2" 
              />
          </motion.div>

          {/* Headline: Now smaller (Secondary Hierarchy) */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-brand-white/80 leading-tight tracking-[0.2em] mb-4 drop-shadow-lg whitespace-nowrap uppercase"
          >
            Churchwin Trading Co. Ltd
          </motion.h1>

          {/* Strategic Tagline: Now Larger & Bolder (Primary Hierarchy) */}
          <motion.div variants={fadeUp} className="mb-10">
            <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-brand-orange leading-tight tracking-tight drop-shadow-2xl">
              Filling Africa&apos;s Missing Middle
            </h2>
          </motion.div>

          {/* Optional Subtext: Single Line Hook */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
             <div className="w-16 h-[2px] bg-brand-white/20 mb-8" />
             <p className="text-base md:text-xl lg:text-2xl text-brand-white font-primary font-medium tracking-wide drop-shadow-lg whitespace-nowrap">
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
        <p className="text-xs md:text-sm font-display font-black text-brand-white/50 tracking-[0.25em] mt-1 uppercase">
          CEPHAS KUDALOR
        </p>
      </motion.div>

      {/* Subtle bottom accent bar */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 z-20" />
    </div>
  );
}
