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
          className="relative w-full max-w-6xl h-full max-h-[90vh] md:max-h-[80vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-brand-orange text-brand-navy hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Sidebar: Sector List */}
          <div className="hidden md:flex w-80 bg-brand-navy text-white flex-col overflow-y-auto border-r border-white/5">
            <div className="p-8 border-b border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-orange font-black mb-2">Market Sectors</p>
              <h4 className="font-display text-xl font-bold">Target Breakdown</h4>
            </div>
            <div className="flex-grow py-4">
              {sectors.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => onSelectSector(idx)}
                  className={`w-full text-left px-8 py-5 flex items-center gap-4 transition-all hover:bg-white/5 border-l-4 ${selectedIdx === idx ? 'border-brand-orange bg-white/10' : 'border-transparent opacity-60'}`}
                >
                  <s.icon className={`w-5 h-5 ${selectedIdx === idx ? 'text-brand-orange' : 'text-white'}`} />
                  <span className="font-display text-sm font-bold tracking-tight">{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-grow flex flex-col bg-[#f8f9fa] overflow-hidden">
            {/* Sector Header & Tabs */}
            <div className="p-6 md:p-8 pb-0">
              <h3 className="font-display text-2xl md:text-3xl font-black text-brand-navy mb-4 md:mb-6">
                {sector.title}
              </h3>
              
              <div className="flex gap-2 md:gap-4 border-b border-brand-navy/10 pb-3 overflow-x-auto no-scrollbar">
                {sector.subSegments.map((sub, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`whitespace-nowrap px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all relative ${activeTab === idx ? 'text-brand-orange' : 'text-brand-navy/40 hover:text-brand-navy/70'}`}
                  >
                    {sub.title}
                    {activeTab === idx && (
                      <motion.div layoutId="tab-underline" className="absolute bottom-[-3px] left-0 right-0 h-[3px] bg-brand-orange rounded-full shadow-[0_2px_10px_rgba(244,121,32,0.4)]" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-grow p-6 md:p-8 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${selectedIdx}-${activeTab}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 min-h-full"
                >
                  <div className="lg:col-span-3 min-h-[30vh] md:min-h-[40vh] relative rounded-3xl overflow-hidden shadow-xl border border-white">
                    <Image 
                      src={sector.subSegments[activeTab].image} 
                      alt={sector.subSegments[activeTab].title}
                      fill
                      className="object-cover"
                    />
                    {/* Content Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 flex flex-col gap-4">
                       <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20 flex-1">
                             <div className="flex items-center gap-2 mb-2 text-brand-orange">
                                <Target className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Target Market</span>
                             </div>
                             <p className="text-white font-display text-sm md:text-lg font-bold">
                                {sector.subSegments[activeTab].market}
                             </p>
                          </div>
                          <div className="bg-brand-orange/90 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl flex-1">
                             <div className="flex items-center gap-2 mb-2 text-white">
                                <Zap className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase tracking-widest">Proposed Solution</span>
                             </div>
                             <p className="text-white font-primary text-xs md:text-sm leading-relaxed">
                                {sector.subSegments[activeTab].solution}
                             </p>
                          </div>
                       </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <div className="p-6 md:p-8 bg-white rounded-3xl border border-brand-navy/5 shadow-sm">
                      <h5 className="font-display text-xl md:text-2xl font-black text-brand-navy mb-4">Strategic Fit</h5>
                      <p className="text-brand-navy/70 text-xs md:text-sm leading-relaxed mb-6">
                        By targeting the <span className="font-bold text-brand-navy underline decoration-brand-orange">{sector.subSegments[activeTab].title}</span> segment, Churchwin leverage its 11 women-led cooperatives to deliver high-compliance, traceable ingredients.
                      </p>
                      <ul className="space-y-3">
                        {["ESG Compliance Included", "12-Month Price Stability", "Custom formulation Support"].map((item, i) => (
                           <li key={i} className="flex items-center gap-3 text-[10px] md:text-xs font-bold text-brand-navy">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
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
