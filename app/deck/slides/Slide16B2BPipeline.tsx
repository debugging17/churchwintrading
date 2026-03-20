"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Target } from "lucide-react";

export function Slide16B2BPipeline() {
  const animState = useSlideEnter(100);

  const pipeline = [
    { image: "/assets/images/sales-engine/apollo.png", name: "APOLLO.IO", desc: "Database generation → 500+ ICP-matched prospects" },
    { image: "/assets/images/sales-engine/linkedin.png", name: "LINKEDIN SALES NAV", desc: "Warm-up touch with R&D and Procurement" },
    { image: "/assets/images/sales-engine/instantly.png", name: "INSTANTLY.AI", desc: "4-touch personalized sequence (Days 1/4/7/14)" },
    { image: "/assets/images/sales-engine/mailchimp.png", name: "MAILCHIMP", desc: "Monthly \"Churchwin Origins\" nurture newsletter" },
    { icon: Target, name: "CRM → CONTRACT", desc: "Sample kit dispatch → Supply Agreement", highlight: true }
  ];

  return (
    <div className="w-full h-full flex flex-col py-8 md:py-12 px-10 md:px-24 bg-brand-cream relative overflow-hidden pb-[var(--footer-height)]">
      {/* Cinematic architectural overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#012787 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 my-auto z-10">
        
        {/* Left Side: Pitch */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <motion.h2 variants={slideFromLeft} className="font-display text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-4 uppercase tracking-tighter">
            The Operational <span className="text-brand-orange">Moat:</span> <br />
            <span className="italic font-light">Institutional Systems.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-navy/70 font-primary border-l-2 border-brand-navy/20 pl-6 mb-8 italic">
            Standardizing the unpredictable. Trading becomes a system.
          </motion.p>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "CRM Visibility", desc: "Real-time tracking of buyer pipeline, from sample request to L/C opening.", icon: Target },
              { label: "Traceability Protocol", desc: "Digital verification of nut origin, worker fair pay, and refining timestamps.", icon: "🔗" },
              { label: "Compliance Vault", desc: "Instant digital access to COA, MSDS, and Organic certificates for every batch.", icon: "📂" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="p-6 bg-white border border-brand-navy/10 rounded-2xl shadow-sm hover:border-brand-orange transition-all group"
              >
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-orange text-lg">
                      {typeof item.icon === 'string' ? item.icon : <item.icon className="w-5 h-5" />}
                   </div>
                   <div>
                      <h4 className="font-display font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                        {item.title || item.label}
                      </h4>
                      <p className="text-xs font-primary text-brand-navy/60">
                        {item.desc}
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: The Funnel Flow / Visual Moat */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative">
          <motion.div variants={sectionTitleStagger} className="space-y-4 relative z-10 w-full max-w-md mx-auto">
            <div className="p-8 bg-brand-navy text-white rounded-[40px] shadow-2xl relative overflow-hidden border-b-8 border-brand-orange">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Target className="w-24 h-24 text-brand-orange" />
               </div>
               <h3 className="text-2xl font-display font-black uppercase mb-6 tracking-tight">The Stability <br /><span className="text-brand-orange">Architecture</span></h3>
               <p className="text-sm text-white/60 font-primary leading-relaxed mb-8">
                  While competitors rely on opaque manual processes, Churchwin operates with 100% digital visibility. This is our bridge to the global institution.
               </p>
               <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="text-center flex-1">
                     <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-1">Visibility</p>
                     <p className="text-xl font-display font-black">100%</p>
                  </div>
                  <div className="w-[1px] h-8 bg-white/10" />
                  <div className="text-center flex-1">
                     <p className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-1">Errors</p>
                     <p className="text-xl font-display font-black">&lt;1%</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}
