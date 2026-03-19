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

      {/* === LAYER 1: Master Gradient Overlay (Institutional Control - LIGHTENED) === */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/30 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent z-[3] pointer-events-none" />

      {/* === LAYER 2: Content Grid === */}
      <div className="w-full h-full flex flex-col justify-center px-16 md:px-24 lg:px-32 z-10 relative">
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="max-w-4xl text-left"
        >
          {/* Brand Logo - Restored & Refined */}
          <motion.div variants={fadeUp} className="mb-8 relative w-48 h-12 md:w-56 md:h-14 opacity-90">
             <Image 
                src="/assets/images/churchwin_logo_new.png" 
                alt="Churchwin Trading Logo" 
                fill
                className="object-contain object-left brightness-0 invert" 
              />
          </motion.div>

          {/* Headline: Adjusted for hierarchy */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-[1.05] tracking-tight mb-4 drop-shadow-lg"
          >
            Churchwin <br />
            Trading Co. Ltd
          </motion.h1>

          {/* Strategic Tagline: Increased visibility */}
          <motion.div variants={fadeUp} className="mb-8 pl-1">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-brand-orange leading-tight tracking-wide drop-shadow-md">
              Filling Africa&apos;s Missing Middle
            </h2>
          </motion.div>

          {/* Optional Subtext: Higher opacity for readability */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg lg:text-xl text-brand-white/70 font-primary font-medium max-w-xl leading-relaxed mt-6 drop-shadow-sm border-l-4 border-brand-orange pl-8"
          >
            Africa doesn&apos;t lack supply. <br />
            It lacks structured demand.
          </motion.p>
        </motion.div>
      </div>

      {/* === LAYER 3: Presenter Info (Minimized) === */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-16 md:right-24 z-20 text-right"
      >
         <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-brand-white/40">
          Presented By
        </p>
        <p className="text-xs md:text-sm font-display font-bold text-brand-white/60 tracking-widest mt-1 uppercase">
          CEPHAS KUDALOR
        </p>
      </motion.div>

      {/* Subtle branding accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-brand-orange z-20" />
    </div>
  );
}
