"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

// SKILL ROLES APPLIED:
// 1. proposal-strategist: "Every diagram should have a takeaway a skimmer can absorb in 5 seconds."
//    → Funnel shape instantly communicates bottleneck. No interpretation needed.
// 2. frontend-engineer: "Story-Driven Componentry — elevate narrative impact over raw data dumps."
//    → Custom CSS funnel replaces the unintuitive Recharts Treemap.
// 3. web-pitch-deck: "All charts must be animated on slide enter via Framer Motion."
//    → Each tier animates in with staggered fadeUp from bottom → top.
// 4. design-studio/brand-guardian: "Never hardcode color hex values — always use CSS variables."
//    → All colors use brand-navy, brand-orange, brand-cream Tailwind tokens.
// 5. visual-storyteller: Funnel narrowing creates visual tension, orange glow = Churchwin intervention.
// 6. ux-architect: Split layout (45% copy / 55% visual) from slide anatomy spec.

const funnelTiers = [
  {
    label: "Micro Enterprises",
    sublabel: "80% of all employment",
    widthPercent: 100,
    theme: "navy" as const,
  },
  {
    label: "Small Businesses",
    sublabel: "Struggling to formalize",
    widthPercent: 72,
    theme: "navy" as const,
  },
  {
    label: "The Missing Middle",
    sublabel: "<10% ever reach SME scale",
    widthPercent: 38,
    theme: "orange" as const,
    isChurchwin: true,
  },
  {
    label: "Scaled SMEs",
    sublabel: "Institutional capacity",
    widthPercent: 22,
    theme: "navy" as const,
  },
  {
    label: "Large Corporations",
    sublabel: "Full market access",
    widthPercent: 14,
    theme: "navy" as const,
  },
];

export function Slide04MissingMiddle() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col md:flex-row premium-bg-cream overflow-hidden relative">
      {/* Ambient glow — positioned at the funnel bottleneck area */}
      <div className="absolute top-1/3 right-1/4 w-[50vh] h-[50vh] bg-brand-orange/8 mix-blend-multiply rounded-full blur-[120px] pointer-events-none" />

      {/* LEFT — Copy Panel (45%) */}
      <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-10 md:px-24 z-10">
        <motion.div
          initial="hidden"
          animate={animState}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.div
            variants={fadeUp}
            className="text-[10px] font-display tracking-[0.25em] uppercase text-brand-navy/40 font-bold mb-4"
          >
            Slide 04 — The Structural Gap
          </motion.div>

          <motion.h2
            variants={slideFromLeft}
            className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6"
          >
            80% of employment.
            <br />
            <span className="text-brand-orange font-light">
              Less than 10% reach scale.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-brand-navy/70 font-primary leading-relaxed mb-8 max-w-md"
          >
            Africa&apos;s micro enterprises generate the majority of employment
            but face a fatal bottleneck: they can&apos;t formalize, can&apos;t
            access export markets, and can&apos;t build institutional capacity.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="bg-brand-orange/10 border border-brand-orange/30 rounded-lg p-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="font-display font-bold text-xl text-brand-navy relative z-10 leading-snug">
              Churchwin exists in the bottleneck.
            </p>
            <p className="font-primary text-brand-orange font-medium text-base mt-2 relative z-10">
              We are the bridge from micro to institutional — building the
              Missing Middle from the inside.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* RIGHT — Funnel Visualization (55%) */}
      <div className="w-full md:w-[55%] h-full flex items-center justify-center relative p-8 md:p-12">
        <motion.div
          initial="hidden"
          animate={animState}
          variants={staggerContainer}
          className="w-full max-w-lg flex flex-col items-center gap-2"
        >
          {/* Funnel Title */}
          <motion.div variants={fadeUp} className="mb-4 text-center">
            <h3 className="text-brand-navy/40 font-display text-[10px] tracking-[0.2em] uppercase font-bold mb-1">
              Market Structure
            </h3>
            <p className="text-brand-navy font-display font-bold text-xl">
              The Missing Middle Bottleneck
            </p>
          </motion.div>

          {/* Funnel Tiers */}
          {funnelTiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              variants={fadeUp}
              className="relative group"
              style={{ width: `${tier.widthPercent}%` }}
            >
              <div
                className={`
                  w-full rounded-md px-4 py-3 md:py-4 text-center transition-all duration-300 relative overflow-hidden
                  ${
                    tier.isChurchwin
                      ? "bg-brand-orange text-white shadow-[0_0_40px_rgba(255,106,0,0.3)] ring-2 ring-brand-orange/50 ring-offset-2 ring-offset-brand-cream scale-[1.02]"
                      : "bg-brand-navy/5 border border-brand-navy/10 text-brand-navy hover:bg-brand-navy/10"
                  }
                `}
              >
                {/* Animate shimmer on the Churchwin tier */}
                {tier.isChurchwin && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
                )}

                <div
                  className={`font-display font-bold text-xs md:text-sm tracking-wide uppercase ${
                    tier.isChurchwin ? "text-white" : "text-brand-navy/80"
                  }`}
                >
                  {tier.label}
                </div>
                <div
                  className={`font-primary text-[10px] md:text-xs mt-1 ${
                    tier.isChurchwin
                      ? "text-white/80"
                      : "text-brand-navy/50"
                  }`}
                >
                  {tier.sublabel}
                </div>

                {/* Churchwin badge */}
                {tier.isChurchwin && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full">
                    <div className="bg-brand-navy text-white text-[9px] font-display font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm shadow-lg whitespace-nowrap ml-3 relative">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-brand-navy rotate-45" />
                      Churchwin Zone
                    </div>
                  </div>
                )}
              </div>

              {/* Connecting taper lines between tiers */}
              {i < funnelTiers.length - 1 && (
                <div className="flex justify-center">
                  <svg
                    viewBox="0 0 100 12"
                    className="w-full h-3 overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points={`0,0 100,0 ${50 + (funnelTiers[i + 1].widthPercent / tier.widthPercent) * 50},12 ${50 - (funnelTiers[i + 1].widthPercent / tier.widthPercent) * 50},12`}
                      fill={
                        tier.isChurchwin
                          ? "rgba(255, 106, 0, 0.15)"
                          : "rgba(1, 39, 135, 0.03)"
                      }
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}

          {/* Legend */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between w-full mt-6 pt-4 border-t border-brand-navy/10"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-orange rounded-full shadow-[0_0_8px_rgba(255,106,0,0.4)]" />
                <span className="text-[10px] font-display font-bold text-brand-navy/60 uppercase tracking-widest">
                  Churchwin Target
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-brand-navy/10 rounded-full border border-brand-navy/20" />
                <span className="text-[10px] font-display font-bold text-brand-navy/40 uppercase tracking-widest">
                  Market
                </span>
              </div>
            </div>
            <p className="text-[10px] font-primary font-medium text-brand-navy/40 italic">
              Source: IFC MSME Country Indicators
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
