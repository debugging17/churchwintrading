"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ShieldCheck, Cpu, Mail, Users, Target, Package } from "lucide-react";
import Image from "next/image";

export function Slide19Phase2({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  const subInitiatives = [
    {
      title: "Compliance Vault",
      desc: "International Compliance Vault live (self-service B2B portal).",
      icon: ShieldCheck,
    },
    {
      title: "Buffer Stock Hub",
      desc: "First international buffer stock hub established.",
      icon: Package,
    },
    {
      title: "Digital Automation",
      desc: "Automated sample request + MCQ calculator deployed.",
      icon: Cpu,
    },
    {
      title: "B2B Pipeline",
      desc: "Newsletter reaches 1,000+ subscribers; first automated contracts closing.",
      icon: Mail,
    },
  ];

  const metrics = [
    {
      label: "Demand Captured",
      value: "1,000+",
      sub: "Industry subscribers.",
      icon: Users,
    },
    {
      label: "Revenue Anchor",
      value: "10–20",
      sub: "New bulk manufacturing clients by Month 6.",
      icon: Target,
    },
  ];

  const kpis = [
    {
      label: "Digital Processing",
      value: "50",
      sub: "Qualified B2B sample requests in Month 2.",
      icon: Cpu,
    }
  ];

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/visual_supremacy/compliance_lab.png"
            alt="Infrastructure Lab"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/20 to-brand-navy/60" />
          <div className="absolute inset-0 bg-brand-navy/30" />
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
              <h4 className="text-sm font-display tracking-[0.3em] text-brand-orange uppercase mb-4 font-bold">Months 6–12</h4>
              <h2 className="font-display text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase break-words">
                Phase 2:<br />
                <span className="text-brand-orange italic">Infrastructure<br/>& Digital</span>
              </h2>
            </div>
          </motion.div>

          {/* Phase Content */}
          <div className="w-full md:w-[65%] flex flex-col gap-10">
            
            {/* Sub-Initiatives Card */}
            <motion.div 
              variants={fadeUp}
              className="bg-brand-navy/40 backdrop-blur-3xl border border-white/10 rounded-[40px] p-10 shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Package className="w-32 h-32 text-brand-orange" />
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...metrics, ...kpis].map((metric, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="bg-brand-navy/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 relative overflow-hidden group hover:border-brand-orange/30 transition-colors"
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


