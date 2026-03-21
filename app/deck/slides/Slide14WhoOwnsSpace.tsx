"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger, slideFromLeft, slideFromRight } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { CheckCircle2, Factory, Globe, PackageOpen, Tag, Building2, AlertTriangle, BarChart3, Users } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { Modal } from "../components/Modal";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from "recharts";

const comparisonData = {
  intermediaries: [
    { subject: 'Traceability', A: 20, B: 100, fullMark: 100 },
    { subject: 'Margins', A: 40, B: 100, fullMark: 100 },
    { subject: 'Local Impact', A: 10, B: 100, fullMark: 100 },
    { subject: 'Market Share', A: 85, B: 2, fullMark: 100 },
    { subject: 'B2B Scale', A: 90, B: 100, fullMark: 100 },
  ],
  suppliers: [
    { subject: 'Traceability', A: 90, B: 100, fullMark: 100 },
    { subject: 'B2B Scale', A: 20, B: 100, fullMark: 100 },
    { subject: 'Manufacturing', A: 10, B: 100, fullMark: 100 },
    { subject: 'Market Share', A: 10, B: 2, fullMark: 100 },
    { subject: 'Margin Capture', A: 50, B: 100, fullMark: 100 },
  ],
  dtcBrands: [
    { subject: 'Brand Power', A: 95, B: 30, fullMark: 100 },
    { subject: 'Margins', A: 60, B: 100, fullMark: 100 },
    { subject: 'Authenticity', A: 40, B: 100, fullMark: 100 },
    { subject: 'Market Share', A: 70, B: 2, fullMark: 100 },
    { subject: 'Supply Control', A: 10, B: 100, fullMark: 100 },
  ],
  middlemen: [
    { subject: 'Local Access', A: 80, B: 100, fullMark: 100 },
    { subject: 'Reliability', A: 15, B: 100, fullMark: 100 },
    { subject: 'Traceability', A: 5, B: 100, fullMark: 100 },
    { subject: 'Market Share', A: 40, B: 2, fullMark: 100 },
    { subject: 'Stability', A: 20, B: 100, fullMark: 100 },
  ]
};

export function Slide14WhoOwnsSpace({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);
  const [activeModal, setActiveModal] = useState<"intermediaries" | "suppliers" | "dtcBrands" | "middlemen" | null>(null);

  const setModalAndLog = (type: "intermediaries" | "suppliers" | "dtcBrands" | "middlemen" | null) => {
    setActiveModal(type);
  };

  const renderComparisonChart = (type: "intermediaries" | "suppliers" | "dtcBrands" | "middlemen") => {
    const data = comparisonData[type];
    const labels = {
      intermediaries: "Foreign Intermediaries",
      suppliers: "Raw Suppliers",
      dtcBrands: "DTC Brands",
      middlemen: "Informal Middlemen"
    };

    return (
      <div className="w-full h-[300px] md:h-[400px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#e5e7eb" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#1a365d', fontSize: 10, fontWeight: 'bold' }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Radar
              name={labels[type]}
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
    <>
      {/* Modals for Competitor Metrics - Now using Portal via the Modal component */}
      <Modal 
        isOpen={activeModal !== null} 
        onClose={() => setModalAndLog(null)}
        title={activeModal ? `Comparative Metrics: ${
          activeModal === 'intermediaries' ? 'Foreign Intermediaries' :
          activeModal === 'suppliers' ? 'Raw Suppliers' :
          activeModal === 'dtcBrands' ? 'Global DTC Brands' :
          'Informal Middlemen'
        }` : ""}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
             <div className="space-y-6">
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-widest text-brand-navy/40 mb-3">Market Performance</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-brand-navy/5 rounded-xl p-4 border border-brand-navy/10">
                      <p className="text-[10px] text-brand-navy/50 uppercase font-black mb-1">Market Share</p>
                      <p className="text-2xl font-display font-black text-brand-navy">
                        {activeModal === 'intermediaries' ? '45%' : activeModal === 'suppliers' ? '12%' : activeModal === 'dtcBrands' ? '30%' : '13%'}
                      </p>
                    </div>
                    <div className="bg-brand-orange/5 rounded-xl p-4 border border-brand-orange/10">
                      <p className="text-[10px] text-brand-orange uppercase font-black mb-1">Perf. Gap</p>
                      <p className="text-2xl font-display font-black text-brand-orange">
                        {activeModal === 'intermediaries' ? '-80%' : activeModal === 'suppliers' ? '-60%' : activeModal === 'dtcBrands' ? '-40%' : '-90%'}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-slate-400" />
                      <span className="text-xs font-bold text-brand-navy">Competitor: Scale-focused, integrity compromised.</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-brand-orange" />
                      <span className="text-xs font-bold text-brand-navy">Churchwin: The Integrated Alternative.</span>
                   </div>
                </div>
                
                <p className="font-primary text-brand-navy/70 leading-relaxed text-sm italic">
                  &quot;Churchwin reclaims the value leakage found in {activeModal} through vertically integrated traceability.&quot;
                </p>
             </div>
          </div>
          <div className="w-full md:w-1/2 bg-brand-navy/5 rounded-2xl p-4">
            {activeModal && renderComparisonChart(activeModal)}
          </div>
        </div>
      </Modal>

      <div className="w-full h-full flex flex-col py-8 md:py-12 px-10 md:px-20 bg-brand-white relative overflow-hidden pb-[calc(var(--footer-height)+1rem)] pt-12 md:pt-16">
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-orange/5 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] rounded-full bg-brand-navy/5 blur-[120px] mix-blend-multiply" />

        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-[95rem] mx-auto flex flex-col h-full z-10 relative">
          <motion.div variants={fadeUp} className="mb-10 text-center max-w-5xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-brand-navy mb-4 leading-tight tracking-tighter uppercase">
              The Value <span className="text-brand-orange">Leakage.</span>
            </h2>
            <p className="font-primary text-brand-navy/70 text-lg md:text-xl font-medium italic">
              Ghana provides the resource, but the global intermediaries capture the margin. <br />
              <span className="text-brand-navy font-black not-italic px-4 py-1 bg-brand-orange/10 rounded-lg inline-block mt-4">Churchwin Trading preserves 22% more margin through direct-to-coop sourcing.</span>
            </p>
          </motion.div>

          {/* The Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 flex-grow relative mt-12 overflow-hidden">
            
            {/* LEFT: The Status Quo */}
            <motion.div variants={slideFromLeft} className="lg:col-span-7 flex flex-col relative z-10">
              <h3 className="font-display font-bold text-lg text-brand-navy mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-brand-navy/50" />
                  The Market Status Quo
                </div>
                <span className="text-[9px] uppercase tracking-widest text-brand-navy/30">Click cards for metrics</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button onClick={() => setModalAndLog("intermediaries")} className="text-left w-full outline-none group">
                  <GlassCard theme="light" delay={0.2} className="border-l-4 border-l-brand-navy/20 group-hover:bg-brand-navy/5 transition-all duration-300 shadow-sm group-hover:shadow-md h-full py-4">
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-navy/10 transition-colors">
                        <Globe className="w-5 h-5 text-brand-navy/60" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="font-display font-bold text-sm text-brand-navy">Foreign Intermediaries</h4>
                          <BarChart3 className="w-3.5 h-3.5 text-brand-orange" />
                        </div>
                        <p className="font-primary text-[10px] text-brand-navy/70 leading-relaxed">
                          Scale without soul. High volume, zero traceability.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </button>

                <button onClick={() => setModalAndLog("suppliers")} className="text-left w-full outline-none group">
                  <GlassCard theme="light" delay={0.3} className="border-l-4 border-l-brand-navy/20 group-hover:bg-brand-navy/5 transition-all duration-300 shadow-sm group-hover:shadow-md h-full py-4">
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-navy/10 transition-colors">
                        <PackageOpen className="w-5 h-5 text-brand-navy/60" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="font-display font-bold text-sm text-brand-navy">Raw Suppliers</h4>
                          <BarChart3 className="w-3.5 h-3.5 text-brand-orange" />
                        </div>
                        <p className="font-primary text-[10px] text-brand-navy/70 leading-relaxed">
                          Resource rich, processing poor. Value leaks abroad.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </button>

                <button onClick={() => setModalAndLog("dtcBrands")} className="text-left w-full outline-none group">
                  <GlassCard theme="light" delay={0.4} className="border-l-4 border-l-brand-navy/20 group-hover:bg-brand-navy/5 transition-all duration-300 shadow-sm group-hover:shadow-md h-full py-4">
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-navy/10 transition-colors">
                        <Tag className="w-5 h-5 text-brand-navy/60" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="font-display font-bold text-sm text-brand-navy">Global DTC Brands</h4>
                          <BarChart3 className="w-3.5 h-3.5 text-brand-orange" />
                        </div>
                        <p className="font-primary text-[10px] text-brand-navy/70 leading-relaxed">
                          Marketing giants. Authenticity gaps in supply chains.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </button>

                <button onClick={() => setModalAndLog("middlemen")} className="text-left w-full outline-none group">
                  <GlassCard theme="light" delay={0.5} className="border-l-4 border-l-brand-navy/20 group-hover:bg-brand-navy/5 transition-all duration-300 shadow-sm group-hover:shadow-md h-full py-4">
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-10 h-10 rounded-full bg-brand-navy/5 flex flex-shrink-0 items-center justify-center group-hover:bg-brand-navy/10 transition-colors">
                        <Users className="w-5 h-5 text-brand-navy/60" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-0.5">
                          <h4 className="font-display font-bold text-sm text-brand-navy">Informal Middlemen</h4>
                          <BarChart3 className="w-3.5 h-3.5 text-brand-orange" />
                        </div>
                        <p className="font-primary text-[10px] text-brand-navy/70 leading-relaxed">
                          Fragmented. Inconsistent. Prevents industrial scale.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </button>
              </div>
            </motion.div>

            {/* RIGHT: Churchwin Advantage */}
            <motion.div variants={slideFromRight} className="lg:col-span-5 flex flex-col relative z-20">
              <h3 className="font-display font-bold text-lg text-brand-orange mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                The Churchwin Advantage
              </h3>
              
              <GlassCard theme="light" delay={0.6} className="h-full border border-brand-orange/20 bg-brand-light/95 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col px-6 py-8">
                <Building2 className="absolute -bottom-10 -right-10 w-48 h-48 text-brand-orange/5" />
                
                <div className="relative z-10 space-y-4 md:space-y-6 flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                      <span className="text-lg">🇬🇭</span>
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-brand-navy leading-tight">100% Ghanaian Owned</h4>
                      <p className="font-primary text-brand-navy/70 leading-relaxed mt-0.5 text-xs">Authentic narrative with direct economic impact.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                      <Factory className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-brand-navy leading-tight">Direct Primary Manufacturer</h4>
                      <p className="font-primary text-brand-navy/70 leading-relaxed mt-0.5 text-xs">No brokers. Unbroken traceability. Max margins.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex flex-shrink-0 items-center justify-center border border-brand-orange/20">
                      <Tag className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base text-brand-orange mb-0.5 leading-tight">Turnkey B2B Capacity</h4>
                      <p className="font-primary text-brand-navy/80 font-medium leading-relaxed text-xs">The white-label engine for global brands.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-brand-orange/10 relative z-10">
                  <p className="font-primary italic text-brand-navy/80 bg-brand-orange/5 p-4 rounded border border-brand-orange/10 leading-relaxed text-xs text-center">
                    Only <span className="text-brand-orange font-bold">2.1%</span> Market Share <br className="hidden md:block"/>
                    <span className="text-[10px] opacity-60 uppercase tracking-widest mt-1 block">Massive growth potential</span>
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
