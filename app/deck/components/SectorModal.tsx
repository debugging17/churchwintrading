"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, Zap } from "lucide-react";
import Image from "next/image";
import { sectors } from "../data/sectors";

interface SectorModalProps {
  selectedIdx: number | null;
  onClose: () => void;
  onSelectSector: (idx: number) => void;
}

export function SectorModal({ selectedIdx, onClose, onSelectSector }: SectorModalProps) {
  const [activeTab, setActiveTab] = React.useState(0);

  // Reset tab when sector changes
  React.useEffect(() => {
    setActiveTab(0);
  }, [selectedIdx]);

  if (selectedIdx === null) return null;

  const sector = sectors[selectedIdx];

  return (
    <AnimatePresence>
      <div key="sector-modal-root" className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-12 overflow-hidden pointer-events-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-navy/60 backdrop-blur-xl pointer-events-auto"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-7xl h-full max-h-[90vh] md:max-h-[85vh] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_128px_rgba(0,0,0,0.3)] flex flex-col md:flex-row border border-white/20"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-50 w-12 h-12 bg-brand-navy/5 hover:bg-brand-orange text-brand-navy hover:text-white rounded-full flex items-center justify-center transition-all shadow-sm group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Sidebar: Sector List */}
          <div className="hidden md:flex w-72 bg-brand-navy text-white flex-col overflow-y-auto border-r border-white/5 shrink-0">
            <div className="p-10 border-b border-white/10">
              <p className="text-[10px] uppercase tracking-[0.4em] text-brand-orange font-black mb-3">Market Sectors</p>
              <h4 className="font-display text-2xl font-bold leading-tight">Target<br />Breakdown</h4>
            </div>
            <div className="flex-grow py-6">
              {sectors.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectSector(idx)}
                  className={`w-full text-left px-10 py-5 flex items-center gap-5 transition-all hover:bg-white/5 border-l-4 ${selectedIdx === idx ? 'border-brand-orange bg-white/10' : 'border-transparent opacity-40 hover:opacity-100'}`}
                >
                  <s.icon className={`w-5 h-5 ${selectedIdx === idx ? 'text-brand-orange' : 'text-white'}`} />
                  <span className="font-display text-sm font-bold tracking-tight">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-grow flex flex-col bg-[#fcfcfc] overflow-hidden">
            {/* Sector Header & Tabs */}
            <div className="p-8 md:p-12 pb-0">
              <h3 className="font-display text-3xl md:text-5xl font-black text-brand-navy mb-8 md:mb-10 tracking-tight">
                {sector.title}
              </h3>
              
              <div className="flex gap-4 md:gap-10 border-b border-brand-navy/5 pb-0 mb-8 overflow-x-auto no-scrollbar scroll-smooth">
                {sector.subSegments.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`whitespace-nowrap pb-4 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === idx ? 'text-brand-orange' : 'text-brand-navy/30 hover:text-brand-navy/60'}`}
                  >
                    {sub.title}
                    {activeTab === idx && (
                      <motion.div 
                        layoutId="tab-underline-refinement" 
                        className="absolute bottom-[-1px] left-0 right-0 h-[4px] bg-brand-orange rounded-full shadow-[0_4px_12px_rgba(244,121,32,0.3)]" 
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-grow p-8 md:p-12 pt-0 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedIdx}-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.02, y: -10 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 min-h-full items-start"
                >
                  <div className="lg:col-span-7 min-h-[40vh] md:min-h-[50vh] relative rounded-[2rem] overflow-hidden shadow-2xl border border-white">
                    <Image 
                      src={sector.subSegments[activeTab].image} 
                      alt={sector.subSegments[activeTab].title}
                      fill
                      className="object-cover"
                    />
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col gap-6">
                       <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                          <div className="bg-white/10 backdrop-blur-xl p-5 md:p-8 rounded-3xl border border-white/20 flex-1 shadow-lg">
                             <div className="flex items-center gap-3 mb-3 text-brand-orange">
                                <Target className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Target Market</span>
                             </div>
                             <p className="text-white font-display text-base md:text-xl font-bold leading-tight">
                                {sector.subSegments[activeTab].market}
                             </p>
                          </div>
                          <div className="bg-brand-orange p-5 md:p-8 rounded-3xl shadow-2xl flex-1 border border-white/20">
                             <div className="flex items-center gap-3 mb-3 text-white">
                                <Zap className="w-5 h-5 fill-current" />
                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Proposed Solution</span>
                             </div>
                             <p className="text-white font-primary text-xs md:text-sm leading-relaxed font-medium">
                                {sector.subSegments[activeTab].solution}
                             </p>
                          </div>
                       </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-5 flex flex-col py-4">
                    <div className="p-8 md:p-10 bg-white rounded-[2rem] border border-brand-navy/5 shadow-sm">
                      <h5 className="font-display text-2xl md:text-3xl font-black text-brand-navy mb-6 tracking-tight">Strategic Fit</h5>
                      <p className="text-brand-navy/60 text-sm md:text-base leading-relaxed mb-10">
                        {sector.strategicFit}{" "}
                        <span className="font-bold text-brand-navy border-b-2 border-brand-orange/30 italic">
                          {sector.subSegments[activeTab].details}
                        </span>
                      </p>
                      <ul className="space-y-4">
                        {(sector.features || []).map((item, i) => (
                           <li key={i} className="flex items-center gap-4 text-xs md:text-sm font-bold text-brand-navy">
                              <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(244,121,32,0.6)]" />
                              {item}
                           </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
