"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Beaker, Pill, Grape, Coffee, Leaf, ShoppingBag, X, ChevronRight, Target, Zap } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const sectors = [
  { 
    icon: Beaker, 
    title: "Cosmetic Manufacturers", 
    desc: "Anti-aging serums, regenerative hair care, luxury body oils", 
    target: "R&D Directors, Procurement",
    subSegments: [
      { 
        title: "Anti-Aging Serums", 
        market: "Premium Skincare Brands", 
        solution: "High-purity Grade A Shea Butter with clinical-grade traceability.",
        image: "/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
      },
      { 
        title: "Regenerative Hair Care", 
        market: "Professional Salons", 
        solution: "Custom Neem Oil infusions for scalp health and follicle strength.",
        image: "/images/IMG_0471-min-min-scaled.jpg" 
      },
      { 
        title: "Luxury Body Oils", 
        market: "Spa Product Lines", 
        solution: "Cold-pressed Baobab oils for rapid absorption and moisture retention.",
        image: "/images/backgrounds/divergence_landscape.png" 
      }
    ]
  },
  { 
    icon: Pill, 
    title: "Nutraceutical & Supplements", 
    desc: "Immunity powders, green superfood blends, capsules", 
    target: "Product Dev Leads",
    subSegments: [
      { 
        title: "Immunity Powders", 
        market: "Wellness Startups", 
        solution: "Bioavailable Moringa powder with standardized vitamin C content.",
        image: "/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
      },
      { 
        title: "Superfood Blends", 
        market: "Health Food Stores", 
        solution: "Direct-sourced Baobab pulp for high fiber and antioxidant density.",
        image: "/images/IMG_0471-min-min-scaled.jpg" 
      },
      { 
        title: "Capsule Formulations", 
        market: "Contract Manufacturers", 
        solution: "Fine-milled botanical powders optimized for automated encapsulation.",
        image: "/images/backgrounds/divergence_landscape.png" 
      }
    ]
  },
  { 
    icon: Grape, 
    title: "Food & Beverage", 
    desc: "Vitamin C-enriched juices, energy bars, fortified cereals", 
    target: "Supply Chain Heads",
    subSegments: [
      { 
        title: "Wellness Juices", 
        market: "Functional Beverage Brands", 
        solution: "100% soluble Hibiscus and Baobab concentrates for clean labels.",
        image: "/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
      },
      { 
        title: "Energy Bars", 
        market: "Sports Nutrition", 
        solution: "Whole grain inclusions and natural African honey binders.",
        image: "/images/IMG_0471-min-min-scaled.jpg" 
      },
      { 
        title: "Fortified Cereals", 
        market: "Large Scale CPG", 
        solution: "Micro-nutrient dense Moringa fortification for mass-market availability.",
        image: "/images/backgrounds/divergence_landscape.png" 
      }
    ]
  },
  { 
    icon: Coffee, 
    title: "Global Tea Brands", 
    desc: "Detox tea blends, herbal infusions, wellness sachets", 
    target: "Master Blenders",
    subSegments: [
      { 
        title: "Detox Blends", 
        market: "Luxury Tea Houses", 
        solution: "Premium dried Moringa and Lemongrass for metabolic support.",
        image: "/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
      },
      { 
        title: "Herbal Infusions", 
        market: "Hospitality Industry", 
        solution: "Single-origin herbal teas with documented ethno-botanical heritage.",
        image: "/images/IMG_0471-min-min-scaled.jpg" 
      },
      { 
        title: "Wellness Sachets", 
        market: "Airport Retail", 
        solution: "Retail-ready pyramids containing high-antioxidant West African blends.",
        image: "/images/backgrounds/divergence_landscape.png" 
      }
    ]
  },
  { 
    icon: Leaf, 
    title: "Luxury Hospitality & Spas", 
    desc: "Branded guest amenities, professional massage oils", 
    target: "Spa Directors, GMs",
    subSegments: [
      { 
        title: "Guest Amenities", 
        market: "Boutique Hotels", 
        solution: "Bespoke miniature Black Soap and Shea Butter sets with custom scenting.",
        image: "/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
      },
      { 
        title: "Professional Massage Oils", 
        market: "Wellness Resorts", 
        solution: "Gallon-size cold-pressed Shea and Neem oils for therapeutic use.",
        image: "/images/IMG_0471-min-min-scaled.jpg" 
      },
      { 
        title: "In-Room Rituals", 
        market: "High-end Lodges", 
        solution: "Curated 'Origin Stories' kits with application rituals for guest engagement.",
        image: "/images/backgrounds/divergence_landscape.png" 
      }
    ]
  },
  { 
    icon: ShoppingBag, 
    title: "Supermarket Private Labels", 
    desc: "\"Organic/Ethnic\" aisle house-brand oils & powders", 
    target: "Category Managers",
    subSegments: [
      { 
        title: "Organic Aisle", 
        market: "Major Grocers", 
        solution: "Certified organic bulk supply for house-label packing and branding.",
        image: "/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
      },
      { 
        title: "Ethnic Specialty", 
        market: "International Distributors", 
        solution: "Authentic West African ingredients with export-grade packaging compliance.",
        image: "/images/IMG_0471-min-min-scaled.jpg" 
      },
      { 
        title: "Health & Beauty Section", 
        market: "Value Retailers", 
        solution: "High-volume, cost-effective Shea and Black Soap for mass retail lines.",
        image: "/images/backgrounds/divergence_landscape.png" 
      }
    ]
  },
];

export function Slide06Segmentation() {
  const animState = useSlideEnter(100);
  const [selectedIdx, setSelectedIdx] = React.useState<number | null>(null);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleCardClick = (idx: number) => {
    console.log("Card Clicked:", sectors[idx].title);
    setSelectedIdx(idx);
    setActiveTab(0);
  };

  const closeModal = () => {
    setSelectedIdx(null);
    setActiveTab(0);
  };

  // ROLES APPLIED:
  // 1. ux-architect: Responsive CSS Grid layout for 6-card sector presentation.
  // 2. brand-guardian: Orange Lucide icons, glassmorphism cards.
  // 3. visual-storyteller: Staggered entrance for the 6 cards.
  // 4. proposal-strategist: Verbatim table text from "Judith Brigue Addendum".

  return (
    <div className="w-full h-full flex flex-col py-10 md:py-12 px-10 md:px-24 bg-brand-white pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(4rem+var(--header-height,0px))] overflow-y-auto">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto my-auto z-10">
        
        <motion.div variants={fadeUp} className="mb-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-navy mb-3">
            Six target sectors. <span className="text-brand-orange font-light">One core infrastructure.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {sectors.map((sector, idx) => (
            <button 
              key={idx}
              onClick={(e) => { 
                e.stopPropagation(); 
                handleCardClick(idx); 
              }}
              onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') handleCardClick(idx); }}
              type="button"
              className="w-full text-left bg-brand-navy/5 border border-brand-navy/10 p-6 rounded-xl group hover:bg-brand-navy/10 transition-colors duration-300 relative overflow-hidden shadow-sm cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 z-50 pointer-events-auto no-swiping"
            >
              {/* Hover effect glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 border border-brand-navy/10 group-hover:border-brand-orange/50 transition-colors shadow-sm">
                  <sector.icon className="w-4 h-4 text-brand-orange" />
                </div>
                
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-semibold text-brand-navy">
                    {sector.title}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-brand-orange opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                </div>
                
                <p className="font-primary text-xs text-brand-navy/70 mb-4 flex-grow">
                  {sector.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-brand-navy/10">
                  <span className="text-[10px] font-display uppercase tracking-widest text-brand-orange font-bold">🎯 Target: </span>
                  <span className="text-xs font-primary text-brand-navy/80 font-medium">{sector.target}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* --- SECTOR MODAL --- */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <div key="sector-modal-overlay" className="fixed inset-0 z-[5000] flex items-center justify-center p-6 md:p-12 overflow-hidden pointer-events-auto">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
                className="absolute inset-0 bg-brand-navy/60 backdrop-blur-xl"
              />

              {/* Modal Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-6xl h-full max-h-[80vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group/modal"
              >
                <button 
                  onClick={closeModal}
                  className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/20 backdrop-blur-md hover:bg-brand-orange text-brand-navy hover:text-white rounded-full flex items-center justify-center transition-all shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Sidebar: Sector List */}
                <div className="w-full md:w-80 bg-brand-navy text-white flex flex-col overflow-y-auto border-r border-white/5">
                  <div className="p-8 border-b border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-orange font-black mb-2">Market Sectors</p>
                    <h4 className="font-display text-xl font-bold">Target Breakdown</h4>
                  </div>
                  <div className="flex-grow py-4">
                    {sectors.map((s, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setSelectedIdx(idx); setActiveTab(0); }}
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
                  <div className="p-8 pb-0">
                    <h3 className="font-display text-3xl font-black text-brand-navy mb-6">
                      {sectors[selectedIdx].title}
                    </h3>
                    
                    <div className="flex gap-4 border-b border-brand-navy/10 pb-3">
                      {sectors[selectedIdx].subSegments.map((sub, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all relative ${activeTab === idx ? 'text-brand-orange' : 'text-brand-navy/40 hover:text-brand-navy/70'}`}
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
                  <div className="flex-grow p-8 overflow-y-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${selectedIdx}-${activeTab}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-5 gap-8 h-full"
                      >
                        <div className="lg:col-span-3 h-full min-h-[40vh] relative rounded-3xl overflow-hidden shadow-xl border border-white">
                          <Image 
                            src={sectors[selectedIdx].subSegments[activeTab].image} 
                            alt={sectors[selectedIdx].subSegments[activeTab].title}
                            fill
                            className="object-cover"
                          />
                          {/* Content Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent" />
                          
                          <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-4">
                             <div className="flex flex-col md:flex-row gap-6">
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex-1">
                                   <div className="flex items-center gap-2 mb-2 text-brand-orange">
                                      <Target className="w-4 h-4" />
                                      <span className="text-[10px] font-black uppercase tracking-widest">Target Market</span>
                                   </div>
                                   <p className="text-white font-display text-lg font-bold">
                                      {sectors[selectedIdx].subSegments[activeTab].market}
                                   </p>
                                </div>
                                <div className="bg-brand-orange/90 backdrop-blur-md p-6 rounded-2xl shadow-xl flex-1">
                                   <div className="flex items-center gap-2 mb-2 text-white">
                                      <Zap className="w-4 h-4" />
                                      <span className="text-[10px] font-black uppercase tracking-widest">Proposed Solution</span>
                                   </div>
                                   <p className="text-white font-primary text-sm leading-relaxed">
                                      {sectors[selectedIdx].subSegments[activeTab].solution}
                                   </p>
                                </div>
                             </div>
                          </div>
                        </div>
                        
                        <div className="lg:col-span-2 flex flex-col justify-center">
                          <div className="p-8 bg-white rounded-3xl border border-brand-navy/5 shadow-sm">
                            <h5 className="font-display text-2xl font-black text-brand-navy mb-4">Strategic Fit</h5>
                            <p className="text-brand-navy/70 text-sm leading-relaxed mb-6">
                              By targeting the <span className="font-bold text-brand-navy underline decoration-brand-orange">{sectors[selectedIdx].subSegments[activeTab].title}</span> segment, Churchwin leverage its 11 women-led cooperatives to deliver high-compliance, traceable ingredients that meet stringent EU/US transparency standards.
                            </p>
                            <ul className="space-y-3">
                              <li className="flex items-center gap-3 text-xs font-bold text-brand-navy">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                ESG Compliance Documents Included
                              </li>
                              <li className="flex items-center gap-3 text-xs font-bold text-brand-navy">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                12-Month Price Stability Guarantee
                              </li>
                              <li className="flex items-center gap-3 text-xs font-bold text-brand-navy">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                                Custom Formulation Support
                              </li>
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
