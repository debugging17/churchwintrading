"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ShieldCheck, Truck, BarChart3, Users } from "lucide-react";

export function Slide11InstitutionalReadiness({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  const pillars = [
    {
      title: "Supply Infrastructure",
      icon: Users,
      points: ["11 Women-led cooperatives", "22% Margin Preservation", "Organic & Fair Trade Compliance"],
      accent: "bg-brand-orange/10 border-brand-orange/20"
    },
    {
      title: "Demand Engine",
      icon: BarChart3,
      points: ["4-Stage B2B Pipeline", "Digital Gravity Strategy", "Targeting ~$420 CAC"],
      accent: "bg-brand-navy/5 border-brand-navy/10"
    },
    {
      title: "Quality Governance",
      icon: ShieldCheck,
      points: ["Institutional COA/MSDS", "Dual-stage filtration", "Batch-level traceability"],
      accent: "bg-brand-orange/10 border-brand-orange/20"
    },
    {
      title: "Export Logistics",
      icon: Truck,
      points: ["Direct EU/US Channels", "Enterprise-Scale Digital Visibility", "Real-time dispatch audit"],
      accent: "bg-brand-navy/5 border-brand-navy/10"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-white px-10 md:px-24 pb-[var(--footer-height)]">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-navy/5 blur-[120px] rounded-full" />

      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-7xl z-10"
      >
        {/* HEADING */}
        <motion.div variants={fadeUp} className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-black text-brand-navy leading-tight mb-4 tracking-tighter uppercase">
            Institutional <span className="text-brand-orange">Readiness.</span>
          </h2>
          <p className="text-brand-navy/70 text-lg font-primary max-w-2xl mx-auto italic">
            Connecting fragmented rural production to the global board&apos;s procurement standards.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className={`p-8 rounded-[32px] border ${pillar.accent} hover:shadow-2xl transition-all duration-500 group text-left`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <pillar.icon className="w-7 h-7 text-brand-orange group-hover:text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-brand-navy mb-6 tracking-tight group-hover:text-brand-orange transition-colors uppercase">
                {pillar.title}
              </h3>
              <ul className="space-y-4">
                {pillar.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span className="text-sm font-primary text-brand-navy/80 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM MOAT STATEMENT — Principle 11: Mimicry (Consistency) */}
        <motion.div 
          variants={fadeUp}
          className="mt-20 pt-12 border-t border-brand-navy/10 flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-2xl text-center lg:text-left">
             <p className="text-brand-navy font-display font-black text-xl md:text-3xl lg:text-4xl uppercase tracking-tighter leading-[0.9]">
                We remove the <span className="text-brand-orange italic font-light">compliance friction</span> <br />
                from African origin trade.
             </p>
          </div>
          <div className="px-10 py-6 bg-brand-navy text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 blur-2xl rounded-full -mr-10 -mt-10" />
             <p className="text-[10px] font-black uppercase text-brand-orange tracking-[0.4em] mb-3 text-left">Moat Status</p>
             <p className="text-base md:text-lg font-primary font-bold leading-tight max-w-xs text-left">
                Operational infrastructure <br />
                that cannot be coded away.
             </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
