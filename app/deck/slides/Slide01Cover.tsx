"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

export function Slide01Cover() {
  const animState = useSlideEnter(100);

  // ROLES APPLIED:
  // 1. brand-guardian: Pure navy background (--brand-navy), Outfit for display, Inter for body.
  // 2. ux-architect: Full-bleed split layout (text left, hero right).
  // 3. visual-storyteller: Staggered entrance for the 3 data badges to build authority sequentially.
  // 4. proposal-strategist: Exact string "Churchwin Trading Co. Ltd" (No standalone "Churchwin").

  return (
    <div className="w-full h-full flex flex-col md:flex-row relative overflow-hidden bg-brand-navy">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-brand-navy-light/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Content Half */}
      <div className="w-full md:w-[55%] h-full flex flex-col justify-center px-10 md:px-24 z-10">
        <motion.div
          variants={sectionTitleStagger}
          initial="hidden"
          animate={animState}
          className="max-w-xl"
        >
          <motion.h1 
            variants={fadeUp}
            className="font-display text-5xl md:text-7xl font-bold text-brand-white leading-tight mb-4"
          >
            Churchwin Trading Co. Ltd
          </motion.h1>
          
          <motion.h2 
            variants={fadeUp}
            className="font-display text-2xl md:text-3xl text-brand-orange mb-6 font-light"
          >
            Filling Africa&apos;s Missing Middle
          </motion.h2>
          
          <motion.p 
            variants={fadeUp}
            className="text-lg md:text-xl text-brand-white/80 font-primary font-light mb-12 max-w-md"
          >
            Institutionalizing global access to premium African ingredients.
          </motion.p>

          {/* Data Badges */}
          <div className="flex flex-col gap-4">
            {[
              "Part of the Stanford Seed Network",
              "14 Years in Operation",
              "100+ Women Empowered"
            ].map((badge, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="flex items-center gap-4 bg-brand-white/5 border border-brand-white/10 p-4 rounded-sm backdrop-blur-sm w-max"
              >
                <div className="w-2 h-2 bg-brand-orange rounded-full" />
                <span className="font-primary text-sm font-semibold tracking-wide text-brand-white uppercase">
                  {badge}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p 
            variants={fadeUp}
            className="mt-16 text-sm text-brand-white/40 font-primary"
          >
            Providing global access to African products while caring for consumer well-being.
          </motion.p>
        </motion.div>
      </div>

      {/* Visual Half - Abstract representation as photo placeholder */}
      <div className="hidden md:flex w-[45%] h-full relative items-center justify-center">
        {/* Placeholder for Product Flat-lay Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none" />
        <div className="w-[80%] h-[80%] rounded-2xl bg-brand-white/5 border border-brand-white/10 flex flex-col items-center justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-brand-orange/5 mix-blend-overlay" />
          <span className="text-brand-white/20 font-display tracking-widest text-sm uppercase">
            [Product Flat-Lay Hero Image]
          </span>
          <span className="text-brand-white/20 font-primary text-xs mt-2 text-center px-8">
            Shea, Black Soap, Baobab, Moringa, Neem
          </span>
        </div>
      </div>
    </div>
  );
}
