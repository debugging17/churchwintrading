"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Database, Linkedin, Mail, Target, ArrowDown } from "lucide-react";

export function Slide16B2BPipeline() {
  const animState = useSlideEnter(100);

  const pipeline = [
    { icon: Database, name: "APOLLO.IO", desc: "Database generation → 500+ ICP-matched prospects" },
    { icon: Linkedin, name: "LINKEDIN SALES NAV", desc: "Warm-up touch with R&D and Procurement" },
    { icon: Mail, name: "INSTANTLY.AI", desc: "4-touch personalized sequence (Days 1/4/7/14)" },
    { icon: Mail, name: "MAILCHIMP", desc: "Monthly \"Churchwin Origins\" nurture newsletter" },
    { icon: Target, name: "CRM → CONTRACT", desc: "Sample kit dispatch → Supply Agreement", highlight: true }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 bg-brand-white">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Left Side: Pitch */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
            From reactive selling to a <span className="text-brand-orange font-light">systematic client acquisition engine.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl text-brand-navy/70 font-primary border-l-2 border-brand-navy/20 pl-6 mb-12">
            Replacing founder-dependent networking with a 4-channel B2B measurable pipeline.
          </motion.p>

          <motion.div variants={fadeUp} className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl p-8 backdrop-blur-sm shadow-sm">
            <h4 className="text-xs font-display tracking-widest text-[#ff8022] uppercase mb-6 font-bold">First 90 Days KPI Targets</h4>
            <ul className="space-y-4 font-primary text-brand-navy/90">
              <li className="flex items-center justify-between border-b border-brand-navy/10 pb-2">
                <span className="font-medium">Targets identified & scored</span>
                <span className="font-display font-bold text-brand-orange text-xl">500+</span>
              </li>
              <li className="flex items-center justify-between border-b border-brand-navy/10 pb-2">
                <span className="font-medium">Pre-qualified sample kits</span>
                <span className="font-display font-bold text-brand-orange text-xl">20+</span>
              </li>
              <li className="flex items-center justify-between pt-2">
                <span className="text-brand-navy/60 font-semibold tracking-wide uppercase text-xs">Month 6 Target:</span>
                <span className="font-bold text-brand-navy">10–20 Bulk Clients</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Right Side: The Funnel Flow */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative">
          <motion.div variants={sectionTitleStagger} className="space-y-3 relative z-10 w-full max-w-md mx-auto">
            
            {/* The vertical connector line behind the nodes */}
            <div className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-brand-navy/10 via-brand-orange/40 to-brand-orange" />

            {pipeline.map((step, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className={`flex items-center gap-6 p-4 rounded-lg border ${step.highlight ? 'bg-brand-orange/10 border-brand-orange/50 shadow-[0_0_20px_rgba(255,106,0,0.1)] mt-8' : 'bg-white border-brand-navy/10 shadow-sm'} relative`}
              >
                <div className={`w-12 h-12 rounded-full flex shrink-0 items-center justify-center relative z-10 ${step.highlight ? 'bg-brand-orange text-brand-white shadow-md' : 'bg-brand-white border border-brand-navy/20 text-brand-navy/60 shadow-sm'}`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className={`font-display text-xs tracking-widest uppercase font-bold mb-1 ${step.highlight ? 'text-brand-orange' : 'text-brand-navy/50'}`}>
                    {idx + 1}. {step.name}
                  </h5>
                  <p className={`font-primary text-sm ${step.highlight ? 'text-brand-navy font-bold' : 'text-brand-navy/80 font-medium'}`}>
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </div>
  );
}
