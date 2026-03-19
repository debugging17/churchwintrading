"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const sections = [
  { num: "01", label: "The Yield Gap", sub: "Bridging the Ghanaian productivity deficit vs. global benchmarks." },
  { num: "02", label: "Institutionalizing the Middle", sub: "Transforming fragmented supply chains into professional infrastructure." },
  { num: "03", label: "Digital B2B Scale Engine", sub: "Proprietary technology stack driving logistics and demand aggregation." },
  { num: "04", label: "ESG as Competitive Edge", sub: "Sustainable impact as a fundamental driver of institutional value." },
];

export function Slide01BOverview() {
  const animState = "visible"; 

  return (
    <div className="w-full h-full bg-white flex relative overflow-hidden">

      {/* ── Left Panel ─────────────────────────────────────────── */}
      <div className="w-[40%] h-full flex flex-col justify-center px-16 xl:px-24 z-10 bg-white">
        <motion.div
          initial="hidden"
          animate={animState}
          className="max-w-xl"
        >
          {/* Eyebrow */}
          <motion.div
            custom={0}
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
             <div className="w-8 h-[1px] bg-brand-orange" />
             <p className="text-brand-orange text-[10px] tracking-[0.4em] uppercase font-bold">
              The Strategic Roadmap
             </p>
          </motion.div>

          {/* Heading - Refined & Authoritative */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl xl:text-6xl font-display font-black text-brand-navy leading-[1.05] mb-12"
          >
            What We Are <br />
            <span className="relative inline-block">
              Building.
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-[6px] bg-brand-orange/10 w-full" 
              />
            </span>
          </motion.h2>

          {/* Pillar List - Rehauled for Depth */}
          <motion.div custom={3} variants={fadeUp} className="space-y-8">
            {sections.map(({ num, label, sub }, i) => (
              <motion.div 
                key={num} 
                className="flex items-start gap-8 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
              >
                {/* Numbering - Sophisticated Overlay Style */}
                <div className="relative shrink-0 pt-1">
                   <span className="text-3xl font-display font-black text-brand-navy/15 leading-none transition-colors duration-300 group-hover:text-brand-orange/30">
                    {num}
                   </span>
                   <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                      <div className="w-[1px] h-0 group-hover:h-full bg-brand-orange/40 transition-all duration-500" />
                   </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg md:text-xl font-display font-bold text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors duration-300">
                    {label}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-navy/60 font-primary leading-relaxed max-w-sm">
                    {sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Right Panel — Image ────────────────────────────────── */}
      <div className="w-[60%] h-full relative overflow-hidden">
        {/* Slant edge on left side of image panel - DRAMATIC BLEND */}
        <div
          className="absolute inset-y-0 left-0 w-32 bg-white z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%, 0 100%)" }} 
        />
        {/* Soft edge blend gradient */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/40 to-transparent z-[5] pointer-events-none" />

        {/* Truck Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg"
            alt="Churchwin Logistics Fleet"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Subtle dark vignette bottom for footer visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Orange accent bar at the bottom */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[3px] bg-brand-orange/20" />
    </div>
  );
}
