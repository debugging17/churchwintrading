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
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source src="/assets/videos/apply_cinematic,_8k_202603181845.mp4" type="video/mp4" />
      </video>

      {/* === LAYER 1: Master Gradient Overlay (Institutional Control) === */}
      {/* Deep left-to-right gradient to create a text-safe focal zone */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent z-[3] pointer-events-none" />

      {/* === LAYER 2: Content Grid === */}
      <div className="w-full h-full flex flex-col justify-center px-16 md:px-24 lg:px-32 z-10 relative">
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="max-w-4xl text-left"
        >
          {/* Headline: Largest, most dominant */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-brand-white leading-[0.9] tracking-tight mb-4 drop-shadow-2xl"
          >
            Churchwin <br />
            <span className="text-brand-white/95">Trading Co. Ltd</span>
          </motion.h1>

          {/* Strategic Tagline: Medium prominence */}
          <motion.div variants={fadeUp} className="mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-brand-orange leading-tight tracking-wide">
              Filling Africa&apos;s Missing Middle
            </h2>
          </motion.div>

          {/* Optional Subtext: Subtle intellectual hook */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base lg:text-lg text-brand-white/40 font-primary font-light max-w-xl leading-relaxed mt-4 drop-shadow-sm border-l-2 border-brand-orange/30 pl-6"
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
         <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-brand-white/30">
          Presented By
        </p>
        <p className="text-xs md:text-sm font-display font-bold text-brand-white/50 tracking-widest mt-1">
          CEPHAS KUDALOR
        </p>
      </motion.div>

      {/* Subtle branding accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-brand-orange/40 z-20" />
    </div>
  );
}
