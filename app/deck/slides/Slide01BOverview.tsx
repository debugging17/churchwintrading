"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSlideEnter } from "../motion/useSlideEnter";

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

export function Slide01BOverview({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100); 

  return (
    <div className="w-full h-full bg-white flex relative pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-hidden">

      {/* ── Left Panel ─────────────────────────────────────────── */}
      <div className="w-[40%] h-full flex flex-col justify-center px-16 xl:px-24 z-10 bg-white pb-[var(--footer-height)]">
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
            Operating inside <br />
            <span className="relative inline-block text-brand-orange">
              the constraint.
            </span>
          </motion.h2>

          {/* REALITY FEED — The Churchwin Today Status */}
          <motion.div custom={3} variants={fadeUp} className="space-y-6">
            {[
              { label: "Active Production", val: "Shea, Baobab, & Neem lines — 35% utilization.", type: "pos" },
              { label: "Supply Network", val: "11+ Women-led cooperatives integrated & audited.", type: "pos" },
              { label: "Export Capability", val: "4 Primary institutional buyers (EU/US).", type: "pos" },
              { label: "The Reality", val: "$250K/mo uncaptured demand due to manual closing.", type: "neg" },
              { label: "The Risk", val: "Growth stalled by founder-dependent sales heroics.", type: "neg" },
            ].map((pt, i) => (
              <div key={i} className={`flex items-start gap-4 p-4 rounded-xl border ${pt.type === 'pos' ? 'bg-brand-navy/5 border-brand-navy/10' : 'bg-brand-orange/5 border-brand-orange/20'}`}>
                <div className={`w-2 h-2 rounded-full mt-2 ${pt.type === 'pos' ? 'bg-brand-navy/40' : 'bg-brand-orange shadow-[0_0_10px_rgba(244,121,32,0.3)]'}`} />
                <div>
                   <span className={`text-[10px] uppercase font-black tracking-widest ${pt.type === 'pos' ? 'text-brand-navy/40' : 'text-brand-orange'}`}>{pt.label}</span>
                   <p className="text-sm font-primary font-bold text-brand-navy leading-none mt-1">{pt.val}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ── Right Panel — Image ────────────────────────────────── */}
      <div className="w-[60%] h-full relative overflow-hidden bg-brand-navy/5">
        {/* Slant edge on left side of image panel - DRAMATIC BLEND */}
        <div
          className="absolute inset-y-0 left-0 w-32 bg-white z-[5]"
          style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} 
        />

        {/* Truck Image */}
        <motion.div
          initial="hidden"
          animate={animState}
          variants={{
            hidden: { opacity: 0, scale: 1.04 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 1.5, ease: "easeOut", delay: 0.2 } 
            }
          }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Orange accent bar at the bottom */}
      <div className="absolute bottom-0 left-0 w-[40%] h-[3px] bg-brand-orange/20" />
    </div>
  );
}
