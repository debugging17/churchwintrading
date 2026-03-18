"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

export function Slide01Cover() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col relative bg-brand-navy overflow-hidden">
      {/* Background glow & noise base */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-navy-light/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-0" />

      {/* Cinematic Bleed Video Layer - Blending right into left */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="w-full md:w-[70%] h-full relative">
          {/* Deep gradient masking to feather the video into the navy background seamlessly */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-brand-navy/40 z-10 pointer-events-none" />
          
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover filter contrast-[1.15] saturate-[1.1] opacity-70 mix-blend-luminosity"
            style={{
              maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 40%, rgba(0,0,0,0) 100%)'
            }}
          >
            <source src="/assets/videos/vid-6.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* Content Layer - Asymmetrical placement */}
      <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 z-10 relative">
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="max-w-3xl"
        >
          {/* Subtle eyebrow detail */}
          <motion.div 
            variants={fadeUp}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-[1px] bg-brand-orange/60" />
            <span className="font-display tracking-[0.3em] text-xs font-semibold uppercase text-brand-orange/80">Corporate Prospectus</span>
          </motion.div>

          <motion.h1 
            variants={fadeUp}
            className="font-display text-5xl md:text-8xl font-bold text-brand-white leading-[1.05] tracking-tight mb-6"
          >
            Churchwin<br />Trading Co. Ltd
          </motion.h1>
          
          <motion.h2 
            variants={fadeUp}
            className="font-primary italic text-2xl md:text-4xl text-brand-gray mb-6 font-light max-w-2xl"
          >
            Filling Africa&apos;s <span className="text-brand-orange font-normal not-italic">Missing Middle.</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-brand-white/70 font-primary font-light mb-12 max-w-lg leading-relaxed relative"
          >
            <span className="absolute -left-6 top-1 text-brand-orange/40 text-2xl leading-none">"</span>
            Institutionalizing global access to premium African ingredients.
          </motion.p>

          {/* Data Badges - Asymmetric Stagger */}
          <div className="flex flex-wrap gap-4 max-w-2xl mt-8">
            {[
              "Part of the Stanford Seed Network",
              "14 Years in Operation",
              "100+ Women Empowered"
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-3 bg-brand-dark/40 border border-brand-white/5 px-5 py-3 backdrop-blur-md"
              >
                <div className="w-1.5 h-1.5 bg-brand-orange rounded-sm" />
                <span className="font-display text-xs font-semibold tracking-widest text-brand-gray uppercase">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p 
            variants={fadeUp}
            className="mt-16 text-xs text-brand-white/40 font-primary tracking-wide max-w-md"
          >
            Providing global access to African products while caring for consumer well-being.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
