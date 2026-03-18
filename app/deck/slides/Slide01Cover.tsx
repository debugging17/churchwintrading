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
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
      >
        <source src="/assets/videos/vid-6.mp4" type="video/mp4" />
      </video>

      {/* === LAYER 1: Gradient overlays for text legibility === */}
      {/* Primary navy overlay — ensures all text is readable */}
      <div className="absolute inset-0 bg-brand-navy/65 z-[1] pointer-events-none" />
      {/* Bottom-heavy gradient for footer clarity */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-brand-navy/40 z-[2] pointer-events-none" />
      {/* Subtle vignette from left for content emphasis */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/50 via-transparent to-transparent z-[2] pointer-events-none" />

      {/* === LAYER 10: Content overlay === */}
      <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 z-10 relative">
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-brand-orange/60" />
            <span className="font-display tracking-[0.3em] text-xs font-semibold uppercase text-brand-orange/80">
              Corporate Prospectus
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-8xl font-bold text-brand-white leading-[1.05] tracking-tight mb-6"
          >
            Churchwin
            <br />
            Trading Co. Ltd
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={fadeUp}
            className="font-primary italic text-2xl md:text-4xl text-brand-gray mb-6 font-light max-w-2xl"
          >
            Filling Africa&apos;s{" "}
            <span className="text-brand-orange font-normal not-italic">
              Missing Middle.
            </span>
          </motion.h2>

          {/* Mission statement */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-brand-white/70 font-primary font-light mb-12 max-w-lg leading-relaxed relative"
          >
            <span className="absolute -left-6 top-1 text-brand-orange/40 text-2xl leading-none">
              &quot;
            </span>
            Institutionalizing global access to premium African ingredients.
          </motion.p>

          {/* Credential badges */}
          <div className="flex flex-wrap gap-4 max-w-2xl mt-8">
            {[
              "Part of the Stanford Seed Network",
              "14 Years in Operation",
              "100+ Women Empowered",
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-3 bg-brand-navy/40 border border-brand-white/10 px-5 py-3 backdrop-blur-md rounded-sm"
              >
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-sm" />
                <span className="font-display text-xs font-semibold tracking-widest text-brand-gray uppercase">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Footer tagline */}
          <motion.p
            variants={fadeUp}
            className="mt-16 text-xs text-brand-white/40 font-primary tracking-wide max-w-md"
          >
            Providing global access to African products while caring for
            consumer well-being.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
