"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger, slideFromLeft, slideFromRight } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { CheckCircle2, Factory, Globe, PackageOpen, Tag, Building2, AlertTriangle } from "lucide-react";
import { GlassCard } from "../components/GlassCard";

export function Slide14WhoOwnsSpace() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-10 md:py-16 px-10 md:px-20 bg-brand-white relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-orange/5 blur-[120px] mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-brand-navy/5 blur-[120px] mix-blend-multiply" />

      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-7xl mx-auto flex flex-col h-full z-10 relative">
        <motion.div variants={fadeUp} className="mb-10 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4 leading-tight">
            Four players own this market. <br/>
            <span className="text-brand-orange font-light">None are Ghanaian at scale.</span>
          </h2>
          <p className="font-primary text-brand-navy/70 text-lg md:text-xl font-medium">
            The market is bifurcated by limitations. Churchwin Trading bridges the gap.
          </p>
        </motion.div>

        {/* The Comparison Grid - Asymmetric Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 flex-grow relative mt-4">
          
          {/* LEFT: The Status Quo */}
          <motion.div variants={slideFromLeft} className="w-full lg:w-[60%] flex flex-col pr-0 lg:pr-16 relative z-10">
            <h3 className="font-display font-bold text-xl text-brand-navy mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-brand-navy/50" />
              The Market Status Quo
            </h3>
            
            <div className="flex flex-col gap-4">
              <GlassCard theme="light" delay={0.2} className="border-l-4 border-l-brand-navy/20 hover:bg-white/50 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center">
                    <Globe className="w-6 h-6 text-brand-navy/60" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-navy mb-1">Foreign Intermediaries</h4>
                    <p className="font-primary text-sm font-semibold text-brand-navy/40 mb-2 uppercase tracking-wider">
                      Jedwards Int. 🇺🇸 • All Organic Treasures 🇩🇪
                    </p>
                    <p className="font-primary text-brand-navy/70 leading-relaxed">
                      They buy aggregated ingredients from local middlemen. They lack direct traceability, capture lower authentic margins, and offer no genuine &quot;Africa-sourced&quot; narrative.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard theme="light" delay={0.3} className="border-l-4 border-l-brand-navy/20 hover:bg-white/50 transition-colors shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center">
                    <PackageOpen className="w-6 h-6 text-brand-navy/60" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-navy mb-1">Raw Ingredient Suppliers</h4>
                    <p className="font-primary text-sm font-semibold text-brand-navy/40 mb-2 uppercase tracking-wider">
                      Baraka Shea 🇨🇦🇬🇭 • Savannah Fruits 🇬🇭
                    </p>
                    <p className="font-primary text-brand-navy/70 leading-relaxed">
                      While they source locally, they operate purely as raw ingredient producers. They lack the B2B scale to offer high-volume, turnkey Private Label manufacturing.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* RIGHT: Churchwin Advantage - Overlapping layer */}
          <motion.div variants={slideFromRight} className="w-full lg:w-[48%] flex flex-col lg:-ml-[8%] relative z-20 lg:mt-16">
            <h3 className="font-display font-bold text-xl text-brand-orange mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              The Churchwin Advantage
            </h3>
            
            <GlassCard theme="light" delay={0.4} className="h-full border border-brand-orange/20 bg-brand-light/95 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col justify-center">
              {/* Giant watermark */}
              <Building2 className="absolute -bottom-10 -right-10 w-64 h-64 text-brand-orange/5" />
              
              <div className="relative z-10 space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                    <span className="text-xl">🇬🇭</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-navy">100% Ghanaian Owned</h4>
                    <p className="font-primary text-brand-navy/70 leading-relaxed mt-1">Authentic narrative with direct, unmediated economic impact on local cooperatives.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                    <Factory className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-navy">Direct Primary Manufacturer</h4>
                    <p className="font-primary text-brand-navy/70 leading-relaxed mt-1">No brokers. Unbroken traceability. We capture the maximum possible margin.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20 shadow-[0_0_15px_rgba(255,106,0,0.15)]">
                    <Tag className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-brand-orange mb-1">Turnkey Private Label Capacity</h4>
                    <p className="font-primary text-brand-navy/80 font-medium leading-relaxed">The missing B2B link. We aren&apos;t just selling bulk butter; we are the white-label engine for global brands.</p>
                  </div>
                </div>
              </div>

              {/* Paradox Callout Inside the Orange Box */}
              <div className="mt-8 pt-6 border-t border-brand-orange/10 relative z-10">
                <p className="font-primary italic text-brand-navy/80 bg-brand-orange/5 p-5 rounded border border-brand-orange/10 leading-relaxed">
                  Despite being the only player with this structural advantage, we capture negligible fractional market share. <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px] ml-2 border border-brand-orange/20 px-2 py-1 rounded-sm bg-brand-orange/10 not-italic inline-block align-middle transform -translate-y-[1px]">This is an execution gap</span>
                </p>
              </div>
            </GlassCard>

          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
