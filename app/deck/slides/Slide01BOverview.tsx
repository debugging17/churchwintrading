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
  { num: "01", label: "The Yield Gap (Ghana vs. World)" },
  { num: "02", label: "Institutionalizing the Missing Middle" },
  { num: "03", label: "Digital B2B Scale Engine" },
  { num: "04", label: "ESG as a Competitive Advantage" },
];

export function Slide01BOverview() {
  return (
    <div className="w-full h-full bg-white flex relative overflow-hidden">

      {/* ── Left Panel ─────────────────────────────────────────── */}
      <div className="w-1/2 h-full flex flex-col justify-center px-20 xl:px-28 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Eyebrow */}
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-brand-orange text-xs tracking-[0.3em] uppercase font-semibold"
          >
            At a Glance
          </motion.p>

          {/* Heading */}
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-5xl xl:text-6xl font-display font-bold text-brand-navy leading-[1.1]"
          >
            What We&apos;re<br />
            <span className="text-brand-orange">Building.</span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            custom={2}
            variants={fadeUp}
            className="w-10 h-[2px] bg-brand-orange/30"
          />

          {/* Section List */}
          <motion.ul custom={3} variants={fadeUp} className="space-y-6">
            {sections.map(({ num, label }) => (
              <li key={num} className="flex items-center gap-5 group cursor-default">
                <span className="text-[11px] font-mono text-brand-orange/60 tracking-widest w-5 shrink-0">
                  {num}
                </span>
                <div className="flex-1 flex items-center gap-4">
                  <span className="text-base font-display font-medium text-brand-navy/80 tracking-wide group-hover:text-brand-navy transition-colors duration-200">
                    {label}
                  </span>
                </div>
                <div className="w-6 h-[1px] bg-brand-navy/10 group-hover:bg-brand-orange/40 transition-colors duration-300" />
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* ── Right Panel — Image ────────────────────────────────── */}
      <div className="w-1/2 h-full relative overflow-hidden">

        {/* Subtle background wash */}
        <div className="absolute inset-0 bg-slate-50" />

        {/* Slant edge on left side of image panel */}
        <div
          className="absolute inset-y-0 left-0 w-20 bg-white z-10"
          style={{ clipPath: "polygon(0 0, 100% 0, 30% 100%, 0 100%)" }}
        />

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
          {/* Subtle dark vignette bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Orange accent bar at the bottom */}
      <div className="absolute bottom-0 left-0 w-1/2 h-[3px] bg-brand-orange/20" />
    </div>
  );
}
