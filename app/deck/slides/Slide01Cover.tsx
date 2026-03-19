"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { RemotionPlayerWrapper } from "../components/RemotionPlayerWrapper";
import Image from "next/image";

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
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src="/assets/videos/apply_cinematic,_8k_202603181845.mp4" type="video/mp4" />
      </video>

      {/* === LAYER 1: Gradient overlays for text legibility === */}
      <div className="absolute inset-0 bg-brand-navy/30 z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-transparent to-transparent z-[2] pointer-events-none w-2/3" />

      {/* OVERLY COMPLICATED LAYER 5 WAS REMOVED AS REQUESTED */}

      {/* === LAYER 10: Content overlay === */}
      <div className="w-full h-full flex flex-col justify-start items-center pt-24 md:pt-32 px-10 md:px-24 z-10 relative">
        
        {/* --- CENTRAL HERO SECTION --- */}
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="flex flex-col items-center text-center max-w-5xl mx-auto relative group"
        >
          {/* BEHIND-TEXT GLOW REMOVED AS REQUESTED (the underlying one) */}
          
          <div className="relative z-10 flex flex-col items-center">
            
            {/* Logo inside */}
            <motion.div variants={fadeUp} className="mb-8 relative w-64 h-24 md:w-[26rem] md:h-[9rem] opacity-95 drop-shadow-xl bg-white rounded-[2rem] overflow-hidden flex items-center justify-center p-4">
              <Image 
                src="/assets/images/churchwin_logo_new.png" 
                alt="Churchwin Trading Logo" 
                fill
                className="object-contain p-4"
              />
            </motion.div>

            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex flex-row justify-center items-center gap-4 mb-6">
              <div className="w-8 h-[2px] bg-brand-orange" />
              <span className="font-display tracking-[0.2em] text-xs md:text-sm font-semibold uppercase text-brand-orange drop-shadow-md">
                Corporate Prospectus
              </span>
              <div className="w-8 h-[2px] bg-brand-orange" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-brand-white leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl text-center"
            >
              Churchwin <span className="text-brand-orange/90 font-medium">Trading Co. Ltd</span>
            </motion.h1>

            <RemotionPlayerWrapper
              text="Filling Africa's Missing Middle."
              color="#F26522"
            />

            {/* Mission statement */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-brand-white/80 font-primary font-light max-w-2xl leading-relaxed mt-6 relative drop-shadow-md text-center mx-auto"
            >
              Institutionalizing global access to premium African ingredients.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
