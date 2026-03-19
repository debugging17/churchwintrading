"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger, slideFromLeft, slideFromRight } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { CheckCircle2, Factory, Globe, PackageOpen, Tag, Building2, AlertTriangle, BarChart3 } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Modal } from "../components/Modal";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

const comparisonData = {
  intermediaries: [
    { subject: 'Traceability', A: 20, B: 100, fullMark: 100 },
    { subject: 'Margins', A: 40, B: 100, fullMark: 100 },
    { subject: 'Local Impact', A: 10, B: 100, fullMark: 100 },
    { subject: 'Narrative', A: 30, B: 100, fullMark: 100 },
    { subject: 'B2B Scale', A: 90, B: 100, fullMark: 100 },
  ],
  suppliers: [
    { subject: 'Traceability', A: 90, B: 100, fullMark: 100 },
    { subject: 'B2B Scale', A: 20, B: 100, fullMark: 100 },
    { subject: 'Manufacturing', A: 10, B: 100, fullMark: 100 },
    { subject: 'Private Label', A: 5, B: 100, fullMark: 100 },
    { subject: 'Margin Capture', A: 50, B: 100, fullMark: 100 },
  ]
};

export function Slide14WhoOwnsSpace() {
  const animState = useSlideEnter(100);
  const [activeModal, setActiveModal] = useState<"intermediaries" | "suppliers" | null>(null);

  const renderComparisonChart = (type: "intermediaries" | "suppliers") => {
    const data = comparisonData[type];
    const compLabel = type === "intermediaries" ? "Foreign Intermediaries" : "Raw Suppliers";

    return (
      <div className="w-full h-[300px] md:h-[400px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#1a365d', fontSize: 10, fontWeight: 'bold' }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name={compLabel}
              dataKey="A"
              stroke="#94a3b8"
              fill="#94a3b8"
              fillOpacity={0.4}
            />
            <Radar
              name="Churchwin Trading"
              dataKey="B"
              stroke="#ff6a00"
              fill="#ff6a00"
              fillOpacity={0.6}
            />
            <Legend wrapperStyle={{ fontSize: '10px' }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  };

  return (
    <div className="w-full h-full flex flex-col py-8 md:py-12 px-10 md:px-20 bg-brand-white relative overflow-hidden pb-[calc(var(--footer-height)+1rem)] pt-12 md:pt-16">
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-orange/5 blur-[120px] mix-blend-multiply" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-brand-navy/5 blur-[120px] mix-blend-multiply" />

      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-7xl mx-auto flex flex-col h-full z-10 relative">
        <motion.div variants={fadeUp} className="mb-6 text-center max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-navy mb-3 leading-tight">
            Four players own this market. <br/>
            <span className="text-brand-orange font-light">None are Ghanaian at scale.</span>
          </h2>
          <p className="font-primary text-brand-navy/70 text-base md:text-lg font-medium">
            The market is bifurcated by limitations. Churchwin Trading bridges the gap.
          </p>
        </motion.div>

        {/* The Comparison Grid - Rebuilt for better spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-grow relative mt-2 overflow-hidden">
          
          {/* LEFT: The Status Quo */}
          <motion.div variants={slideFromLeft} className="lg:col-span-7 flex flex-col relative z-10">
            <h3 className="font-display font-bold text-lg text-brand-navy mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-brand-navy/50" />
                The Market Status Quo
              </div>
              <span className="text-[9px] uppercase tracking-widest text-brand-navy/30">Click cards for metrics</span>
            </h3>
            
            <div className="flex flex-col gap-4">
              <div onClick={() => setActiveModal("intermediaries")} className="cursor-pointer group">
                <GlassCard theme="light" delay={0.2} className="border-l-4 border-l-brand-navy/20 group-hover:bg-brand-navy/5 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:-translate-y-1 py-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-navy/10 transition-colors">
                      <Globe className="w-5 h-5 text-brand-navy/60" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="font-display font-bold text-base text-brand-navy">Foreign Intermediaries</h4>
                        <BarChart3 className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="font-primary text-[10px] font-semibold text-brand-navy/40 mb-1 uppercase tracking-wider">
                        Jedwards Int. 🇺🇸 • All Organic Treasures 🇩🇪
                      </p>
                      <p className="font-primary text-brand-navy/70 leading-relaxed text-xs">
                        They buy aggregated ingredients from local middlemen. They lack direct traceability, capture lower authentic margins, and offer no genuine &quot;Africa-sourced&quot; narrative.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div onClick={() => setActiveModal("suppliers")} className="cursor-pointer group">
                <GlassCard theme="light" delay={0.3} className="border-l-4 border-l-brand-navy/20 group-hover:bg-brand-navy/5 transition-all duration-300 shadow-sm group-hover:shadow-md transform group-hover:-translate-y-1 py-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-navy/10 transition-colors">
                      <PackageOpen className="w-5 h-5 text-brand-navy/60" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-0.5">
                        <h4 className="font-display font-bold text-base text-brand-navy">Raw Ingredient Suppliers</h4>
                        <BarChart3 className="w-3.5 h-3.5 text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="font-primary text-[10px] font-semibold text-brand-navy/40 mb-1 uppercase tracking-wider">
                        Baraka Shea 🇨🇦🇬🇭 • Savannah Fruits 🇬🇭
                      </p>
                      <p className="font-primary text-brand-navy/70 leading-relaxed text-xs">
                        While they source locally, they operate purely as raw ingredient producers. They lack the B2B scale to offer high-volume, turnkey Private Label manufacturing.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Churchwin Advantage - No Overlap */}
          <motion.div variants={slideFromRight} className="lg:col-span-5 flex flex-col relative z-20">
            <h3 className="font-display font-bold text-lg text-brand-orange mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              The Churchwin Advantage
            </h3>
            
            <GlassCard theme="light" delay={0.4} className="h-full border border-brand-orange/20 bg-brand-light/95 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col px-6 py-8">
              {/* Giant watermark */}
              <Building2 className="absolute -bottom-10 -right-10 w-48 h-48 text-brand-orange/5" />
              
              <div className="relative z-10 space-y-4 md:space-y-6 flex-grow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                    <span className="text-lg">🇬🇭</span>
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-navy leading-tight">100% Ghanaian Owned</h4>
                    <p className="font-primary text-brand-navy/70 leading-relaxed mt-0.5 text-xs">Authentic narrative with direct, unmediated economic impact on local cooperatives.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                    <Factory className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-navy leading-tight">Direct Primary Manufacturer</h4>
                    <p className="font-primary text-brand-navy/70 leading-relaxed mt-0.5 text-xs">No brokers. Unbroken traceability. We capture the maximum possible margin.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                    <Tag className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-orange mb-0.5 leading-tight">Turnkey Private Label Capacity</h4>
                    <p className="font-primary text-brand-navy/80 font-medium leading-relaxed text-xs">The missing B2B link. We aren&apos;t just selling bulk butter; we are the white-label engine for global brands.</p>
                  </div>
                </div>
              </div>

              {/* Paradox Callout */}
              <div className="mt-6 pt-6 border-t border-brand-orange/10 relative z-10">
                <p className="font-primary italic text-brand-navy/80 bg-brand-orange/5 p-4 rounded border border-brand-orange/10 leading-relaxed text-xs">
                  Despite being the only player with this structural advantage, we capture negligible fractional market share. <span className="text-brand-orange font-bold uppercase tracking-widest text-[8px] ml-2 border border-brand-orange/20 px-2 py-1 rounded-sm bg-brand-orange/10 not-italic inline-block align-middle transform -translate-y-[1px]">Execution Gap</span>
                </p>
              </div>
            </GlassCard>

          </motion.div>

        </div>
      </motion.div>

      {/* Modals for Competitor Metrics */}
      <Modal 
        isOpen={activeModal === "intermediaries"} 
        onClose={() => setActiveModal(null)}
        title="Comparative Metrics: Foreign Intermediaries"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
             <p className="font-primary text-brand-navy leading-relaxed mb-6 text-sm">
                Foreign intermediaries dominate volume but fail on institutional integrity. They provide efficiency without authenticity, creating a value leakage that Churchwin reclaims.
             </p>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-slate-400" />
                   <span className="text-xs font-bold text-brand-navy">Intermediaries: Volume-driven, low traceability.</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-brand-orange" />
                   <span className="text-xs font-bold text-brand-navy">Churchwin: Traceable, High-margin, Authentic.</span>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 bg-brand-navy/5 rounded-2xl p-4">
            {renderComparisonChart("intermediaries")}
          </div>
        </div>
      </Modal>

      <Modal 
        isOpen={activeModal === "suppliers"} 
        onClose={() => setActiveModal(null)}
        title="Comparative Metrics: Raw Ingredient Suppliers"
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
             <p className="font-primary text-brand-navy leading-relaxed mb-6 text-sm">
                Local suppliers capture source-level value but stall at processing. They lack the institutional scale to provide turnkey manufacturing, leaving global brands to seek processors in Europe or Asia.
             </p>
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-slate-400" />
                   <span className="text-xs font-bold text-brand-navy">Raw Suppliers: Source-rich, Processing-poor.</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-brand-orange" />
                   <span className="text-xs font-bold text-brand-navy">Churchwin: Full Vertical Integration.</span>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 bg-brand-navy/5 rounded-2xl p-4">
            {renderComparisonChart("suppliers")}
          </div>
        </div>
      </Modal>

    </div>
  );
}
