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

      {/* === LAYER 10: Content overlay === */}
      <div className="w-full h-full flex flex-col justify-between py-16 md:py-24 px-10 md:px-24 z-10 relative">
        
        {/* --- TOP SECTION --- */}
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="flex flex-col max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-brand-orange" />
            <span className="font-display tracking-[0.3em] text-sm font-semibold uppercase text-brand-orange drop-shadow-md">
              Corporate Prospectus
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-6xl md:text-[6.5rem] font-bold text-brand-white leading-[1.05] tracking-tight mb-8 drop-shadow-xl"
          >
            Churchwin
            <br />
            Trading Co. Ltd
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={fadeUp}
            className="font-primary italic text-3xl md:text-5xl text-brand-gray mb-8 font-light drop-shadow-lg"
          >
            Filling Africa&apos;s{" "}
            <span className="text-brand-orange font-normal not-italic">
              Missing Middle.
            </span>
          </motion.h2>

          {/* Mission statement */}
          <motion.p
            variants={fadeUp}
            className="text-xl md:text-2xl text-brand-white/90 font-primary font-light max-w-2xl leading-relaxed relative drop-shadow-md"
          >
            <span className="absolute -left-6 top-1 text-brand-orange/60 text-3xl leading-none">
              &quot;
            </span>
            Institutionalizing global access to premium African ingredients.
          </motion.p>
        </motion.div>

        {/* --- BOTTOM SECTION --- */}
        <motion.div 
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="w-full flex justify-between items-end mt-auto gap-8"
        >
          {/* Left: Credential badges */}
          <div className="flex flex-col gap-4">
            {[
              "Part of the Stanford Seed Network",
              "14 Years in Operation",
              "100+ Women Empowered",
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-4 bg-brand-navy/40 border border-brand-white/10 px-6 py-3.5 backdrop-blur-md rounded-lg shadow-xl"
              >
                <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
                <span className="font-display text-sm font-semibold tracking-widest text-brand-white uppercase">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Right: Footer Tagline & Presenter Card */}
          <div className="flex flex-col items-end gap-8 text-right pr-20 pb-4">
            {/* Footer tagline */}
            <motion.p
              variants={fadeUp}
              className="text-xs md:text-sm text-brand-white/50 font-display tracking-widest uppercase max-w-sm leading-relaxed"
            >
              Providing global access to African products while caring for consumer well-being.
            </motion.p>

            {/* Presenter Footer Card */}
            <motion.div 
              variants={fadeUp} 
              className="bg-brand-white/5 border border-brand-white/10 backdrop-blur-xl px-8 py-6 rounded-2xl shadow-2xl flex flex-col items-start text-left relative overflow-hidden group"
            >
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-white/5 to-transparent pointer-events-none" />
              
              <span className="text-xs font-display tracking-[0.2em] text-brand-white/60 uppercase mb-2 relative z-10">
                Presented By
              </span>
              <span className="text-3xl font-display font-medium text-brand-white tracking-wide relative z-10">
                Cephas Kudalor
              </span>
              <div className="w-12 h-[2px] bg-brand-orange mt-3 relative z-10" />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
