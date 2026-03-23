"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GitCommit, Users, Target, Search, FileText, Zap } from "lucide-react";
import Image from "next/image";

export function Slide18Phase1({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  const subInitiatives = [
    {
      title: "Strategic Framework",
      desc: "Roger Martin Strategic Choice Cascade implementation across operations.",
      icon: Target,
    },
    {
      title: "Management Shift",
      desc: "Shift from founder-dependent 'heroics' to documented management systems.",
      icon: Users,
    },
    {
      title: "B2B Outreach",
      desc: "Apollo list building; LinkedIn presence optimized; Instantly.ai warm-up.",
      icon: Zap,
    },
  ];

  const metrics = [
    {
      label: "Standardization",
      value: "100%",
      sub: "3 core SOPs documented per department.",
      icon: FileText,
    },
    {
      label: "Prospecting",
      value: "500+",
      sub: "ICP-matched prospects identified and scored.",
      icon: Search,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/visual_supremacy/steering_committee.png"
            alt="Strategic Alignment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-brand-navy" />
          <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-7xl mx-auto my-auto z-10"
      >
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Phase Header */}
          <motion.div variants={fadeUp} className="w-full md:w-[35%]">
            <div className="border-l-[6px] border-brand-orange pl-8 py-2">
              <h4 className="text-sm font-display tracking-[0.3em] text-brand-orange uppercase mb-4 font-bold">Months 1–6</h4>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                Phase 1:<br />
                <span className="text-brand-orange italic">Mindset &<br/>Systems</span>
              </h2>
            </div>
          </motion.div>

          {/* Phase Content */}
          <div className="w-full md:w-[65%] flex flex-col gap-10">
            
            {/* Sub-Initiatives Card */}
            <motion.div 
              variants={fadeUp}
              className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GitCommit className="w-32 h-32 text-brand-orange" />
               </div>
               
               <h3 className="text-white font-display text-2xl font-black mb-10 uppercase tracking-widest flex items-center gap-4">
                 <span className="w-10 h-px bg-brand-orange/30" />
                 Sub-Initiatives
               </h3>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                 {subInitiatives.map((item, i) => (
                   <div key={i} className="flex items-start gap-4 group/item">
                      <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0 group-hover/item:bg-brand-orange/20 transition-colors">
                        <item.icon className="w-5 h-5 text-brand-orange" />
                      </div>
                      <div className="flex flex-col w-full">
                        <h4 className="font-display text-white text-lg font-bold mb-1 uppercase tracking-tight">{item.title}</h4>
                        <p className="font-primary text-white/50 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
            </motion.div>

            {/* Strategic Metrics Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {metrics.map((metric, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="bg-brand-navy-light/20 backdrop-blur-xl border border-white/5 rounded-[32px] p-8 relative overflow-hidden group hover:border-brand-orange/30 transition-colors"
                >
                  <div className="flex flex-col relative z-20">
                    <p className="text-brand-orange text-[9px] font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                       <metric.icon className="w-3 h-3" />
                       {metric.label}
                    </p>
                    <p className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-1">
                      {metric.value}
                    </p>
                    <p className="text-[10px] font-primary text-white/40 uppercase tracking-widest leading-tight">{metric.sub}</p>
                  </div>
                  
                  {/* Subtle Background Accent */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-orange/5 blur-3xl rounded-full" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
