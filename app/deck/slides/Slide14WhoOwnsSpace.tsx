"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { CheckCircle2, XCircle, Timer } from "lucide-react";

const competitors = [
  { name: "Baraka Shea Butter", hq: "🇨🇦 🇬🇭", model: "Primary Manufacturer", hub: false, fair: true, cosmos: false, privateLabel: false, lacks: "Moringa, EU office, Private Label" },
  { name: "Jedwards Int.", hq: "🇺🇸", model: "Intermediary", hub: false, fair: true, cosmos: false, privateLabel: false, lacks: "Africa-sourced story" },
  { name: "Savannah Fruits Co.", hq: "🇬🇭", model: "Primary Manufacturer", hub: true, fair: true, cosmos: false, privateLabel: false, lacks: "Private Label" },
  { name: "All Organic Treasures", hq: "🇩🇪", model: "Intermediary", hub: true, fair: true, cosmos: true, privateLabel: false, lacks: "Primary Producer Status" },
  { name: "Churchwin Trading", hq: "🇬🇭", model: "Primary Manufacturer", hub: "Phase 3", fair: "Pending", cosmos: "Pending", privateLabel: true, lacks: "See Roadmap" },
];

export function Slide14WhoOwnsSpace() {
  const animState = useSlideEnter(100);

  const renderIcon = (val: boolean | string) => {
    if (val === true) return <CheckCircle2 className="w-5 h-5 text-emerald-600 mx-auto" />;
    if (val === false) return <XCircle className="w-5 h-5 text-brand-navy/20 mx-auto" />;
    if (val === "Phase 3" || val === "Pending") return <div className="flex items-center justify-center gap-1 text-brand-orange text-xs"><Timer className="w-4 h-4" />{val === "Pending" ? "⏳" : val}</div>;
    return <span className="text-brand-navy/80">{val}</span>;
  };

  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-16 bg-brand-white">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-7xl mx-auto">
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Four players own this market. <span className="text-brand-orange font-light">None are Ghanaian at scale.</span>
          </h2>
          <p className="font-primary text-brand-navy/70 max-w-4xl text-lg font-medium">
            The only exporter combining direct cooperative sourcing, private label capacity, AND a broad ingredient portfolio is Churchwin Trading. Building what the market lacks.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div variants={fadeUp} className="w-full overflow-x-auto bg-brand-white border border-brand-navy/10 rounded-xl shadow-lg mb-8">
          <table className="w-full text-left font-primary text-sm whitespace-nowrap text-brand-navy">
            <thead>
              <tr className="border-b border-brand-navy/10 uppercase font-display text-xs tracking-widest text-[#ff8022]">
                <th className="px-6 py-4 font-semibold">Competitor</th>
                <th className="px-6 py-4 font-semibold text-center">HQ</th>
                <th className="px-6 py-4 font-semibold">Supply Model</th>
                <th className="px-6 py-4 font-semibold text-center">EU Hub</th>
                <th className="px-6 py-4 font-semibold text-center">Fair Trade</th>
                <th className="px-6 py-4 font-semibold text-center">COSMOS</th>
                <th className="px-6 py-4 font-semibold text-center bg-brand-orange/5 text-brand-orange border-x border-brand-navy/5">Private Label</th>
                <th className="px-6 py-4 font-semibold">What They Lack</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp, idx) => {
                const isChurchwin = comp.name === "Churchwin Trading";
                return (
                  <tr key={idx} className={`border-b border-brand-navy/5 transition-colors ${isChurchwin ? "bg-brand-orange/5 border-brand-orange/20 shadow-[inset_4px_0_0_#ff6a00]" : "hover:bg-brand-navy/5"}`}>
                    <td className={`px-6 py-5 font-bold ${isChurchwin ? "text-brand-orange text-base" : "text-brand-navy"}`}>{comp.name}</td>
                    <td className="px-6 py-5 text-center text-lg">{comp.hq}</td>
                    <td className="px-6 py-5 text-brand-navy/80">{comp.model}</td>
                    <td className="px-6 py-5 text-center">{renderIcon(comp.hub)}</td>
                    <td className="px-6 py-5 text-center">{renderIcon(comp.fair)}</td>
                    <td className="px-6 py-5 text-center">{renderIcon(comp.cosmos)}</td>
                    <td className={`px-6 py-5 text-center ${isChurchwin ? "bg-brand-orange/10 border-x border-brand-orange/20" : "bg-brand-orange/5 border-x border-brand-navy/5"}`}>
                      {isChurchwin ? <span className="text-brand-orange font-bold font-display uppercase tracking-widest text-xs flex items-center justify-center gap-2"><CheckCircle2 className="w-4 h-4"/> YES</span> : renderIcon(comp.privateLabel)}
                    </td>
                    <td className={`px-6 py-5 font-medium ${isChurchwin ? "text-brand-orange/80 italic" : "text-brand-navy/50"}`}>{comp.lacks}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        {/* The Paradox Callout */}
        <motion.div variants={fadeUp} className="border-l-4 border-brand-orange pl-6 py-2 bg-gradient-to-r from-brand-orange/10 to-transparent rounded-r-md">
          <p className="font-primary font-semibold text-brand-navy/90 md:text-lg">
            Despite being the only player with this structural advantage, Churchwin captures a negligible fractional market share. <span className="text-brand-orange">This is the definition of an execution gap.</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
