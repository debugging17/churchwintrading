"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

// COVER SLIDE — Full-bleed cinematic video background
// Skills applied:
//   web-pitch-deck: "Priority: true for slide 1 hero" + brand tokens only
//   visual-storyteller: Cinematic full-bleed video sets the tone before a word is read
//   brand-guardian: Navy overlay preserves branding + ensures white text legibility
//   frontend-engineer: z-index discipline — video(0) → overlay(1) → content(10)
//   proposal-strategist: Cover = first impression. "The opening 3 slides must create urgency within 15 seconds."

export function Slide01Cover() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden">
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

      {/* === LAYER 5: Slanted Glass Overlay === */}
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-[5] pointer-events-none overflow-hidden"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-br from-brand-white/25 via-brand-white/15 to-transparent backdrop-blur-3xl border-r border-brand-white/20 shadow-2xl"
          style={{ 
            clipPath: "polygon(0 0, 65% 0, 45% 100%, 0% 100%)",
          }}
        />
        {/* Secondary subtle accent slant */}
        <div 
          className="absolute inset-0 bg-brand-orange/15 backdrop-blur-sm"
          style={{ 
            clipPath: "polygon(0 0, 66% 0, 65.5% 0, 44.5% 100%, 45% 100%, 0% 100%)",
            opacity: 0.3
          }}
        />
      </motion.div>

      {/* === LAYER 10: Content overlay === */}
      <div className="w-full h-full flex flex-col justify-center items-center py-16 md:py-24 px-10 md:px-24 z-10 relative">
        
        {/* --- CENTRAL HERO SECTION --- */}
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="flex flex-col items-center text-center max-w-5xl mx-auto relative group"
        >
          {/* Subtle glow behind text */}
          <div className="absolute -inset-20 bg-brand-orange/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10 bg-brand-navy/45 backdrop-blur-xl border border-brand-white/20 p-12 md:p-20 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-brand-orange" />
            <span className="font-display tracking-[0.3em] text-sm font-semibold uppercase text-brand-orange drop-shadow-md">
              Corporate Prospectus
            </span>
            <div className="w-12 h-[2px] bg-brand-orange" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl md:text-[7.5rem] font-bold text-brand-white leading-[1] tracking-tighter mb-10 drop-shadow-2xl"
          >
            Churchwin
            <span className="block text-brand-orange/90 text-4xl md:text-5xl tracking-[0.2em] mt-4 uppercase font-medium">
              Trading Co. Ltd
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={fadeUp}
            className="font-primary italic text-3xl md:text-5xl text-brand-gray mb-10 font-light drop-shadow-lg"
          >
            Filling Africa&apos;s{" "}
            <span className="text-brand-orange font-normal not-italic">
              Missing Middle.
            </span>
          </motion.h2>

          {/* Mission statement */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-brand-white/90 font-primary font-light max-w-3xl leading-relaxed relative drop-shadow-md"
          >
            Institutionalizing global access to premium African ingredients.
          </motion.p>
          </div>
        </motion.div>


      </div>
    </div>
  );
}
