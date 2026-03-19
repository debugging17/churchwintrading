"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Beaker, Pill, Grape, Coffee, Leaf, ShoppingBag } from "lucide-react";

const sectors = [
  { icon: Beaker, title: "Cosmetic Manufacturers", desc: "Anti-aging serums, regenerative hair care, luxury body oils", target: "R&D Directors, Procurement" },
  { icon: Pill, title: "Nutraceutical & Supplements", desc: "Immunity powders, green superfood blends, capsules", target: "Product Dev Leads" },
  { icon: Grape, title: "Food & Beverage", desc: "Vitamin C-enriched juices, energy bars, fortified cereals", target: "Supply Chain Heads" },
  { icon: Coffee, title: "Global Tea Brands", desc: "Detox tea blends, herbal infusions, wellness sachets", target: "Master Blenders" },
  { icon: Leaf, title: "Luxury Hospitality & Spas", desc: "Branded guest amenities, professional massage oils", target: "Spa Directors, GMs" },
  { icon: ShoppingBag, title: "Supermarket Private Labels", desc: "\"Organic/Ethnic\" aisle house-brand oils & powders", target: "Category Managers" },
];

export function Slide06Segmentation() {
  const animState = useSlideEnter(100);

  // ROLES APPLIED:
  // 1. ux-architect: Responsive CSS Grid layout for 6-card sector presentation.
  // 2. brand-guardian: Orange Lucide icons, glassmorphism cards.
  // 3. visual-storyteller: Staggered entrance for the 6 cards.
  // 4. proposal-strategist: Verbatim table text from "Judith Brigue Addendum".

  return (
    <div className="w-full h-full flex flex-col py-10 md:py-16 px-10 md:px-24 bg-brand-white">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto my-auto">
        
        <motion.div variants={fadeUp} className="mb-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-navy mb-3">
            Six target sectors. <span className="text-brand-orange font-light">One core infrastructure.</span>
          </h2>
          <div className="w-16 h-1 bg-brand-orange/50 mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {sectors.map((sector, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              className="bg-brand-navy/5 border border-brand-navy/10 p-6 rounded-xl group hover:bg-brand-navy/10 transition-colors duration-300 relative overflow-hidden shadow-sm"
            >
              {/* Hover effect glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/0 to-brand-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 border border-brand-navy/10 group-hover:border-brand-orange/50 transition-colors shadow-sm">
                  <sector.icon className="w-4 h-4 text-brand-orange" />
                </div>
                
                <h3 className="font-display text-lg font-semibold text-brand-navy mb-2">
                  {sector.title}
                </h3>
                
                <p className="font-primary text-xs text-brand-navy/70 mb-4 flex-grow">
                  {sector.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-brand-navy/10">
                  <span className="text-[10px] font-display uppercase tracking-widest text-brand-orange font-bold">🎯 Target: </span>
                  <span className="text-xs font-primary text-brand-navy/80 font-medium">{sector.target}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
