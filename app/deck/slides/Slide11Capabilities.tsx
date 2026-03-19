"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Users, PackageCheck, ShieldCheck, Box } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import NoiseOverlay from "../components/NoiseOverlay";

export function Slide11Capabilities() {
  const animState = useSlideEnter(100);

  const capabilities = [
    { 
      icon: Users, 
      label: "11 Women-Led Processing Co-operatives", 
      sub: "Empowering rural supply chains",
      img: "/images/visual_supremacy/shea_orchard.png"
    },
    { 
      icon: PackageCheck, 
      label: "6-Product Certified Export Line", 
      sub: "Shea, Black Soap, Neem, Cocoa, Baobab, Moringa",
      img: "/images/visual_supremacy/shea_factory.png"
    },
    { 
      icon: Box, 
      label: "12-Month Buffer Stock Guarantee", 
      sub: "Ensuring seasonal price stability",
      img: "/images/visual_supremacy/industrial_wholesaler.png" 
    },
    { 
      icon: ShieldCheck, 
      label: "International Compliance Vault", 
      sub: "COA, MSDS, Organic Certifications",
      img: "/images/visual_supremacy/compliance_lab.png"
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row bg-[#FDFDFD] overflow-hidden pb-[var(--footer-height)]">
      <NoiseOverlay />
      
      {/* Dynamic Background Element */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-brand-orange/5 blur-[8rem] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-brand-navy/5 blur-[8rem] rounded-full pointer-events-none" />

       {/* Visual Left - Asymmetrical Focus */}
       <div className="hidden md:flex w-[40%] h-full relative items-center justify-center p-12 z-10">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          animate={animState}
          className="w-full aspect-[4/5] rounded-[2rem] border border-brand-navy/5 flex items-center justify-center relative overflow-hidden shadow-[0_2rem_4rem_-1rem_rgba(0,0,0,0.1)] group"
          role="img"
          aria-label="International Compliance Vault and Quality Assurance Lab in Ghana"
        >
          <Image 
            src="/assets/ghana_qa_lab.png" 
            alt="International Compliance Vault & QA Lab" 
            fill  
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-60" />
          
          <div className="absolute bottom-8 left-8 right-8 text-white">
             <p className="text-xs uppercase tracking-[0.2em] font-medium mb-1 opacity-80">Supply Chain Integrity</p>
             <h3 className="text-2xl font-display font-bold">Institutionalizing Quality</h3>
          </div>
        </motion.div>
      </div>

      {/* Content Right */}
      <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-10 md:px-24 z-20">
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="max-w-2xl">
          <motion.div variants={slideFromLeft} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-orange/40" />
            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold">The Churchwin Bridge</span>
          </motion.div>

          <motion.h2 variants={slideFromLeft} className="font-display text-5xl md:text-6xl font-extrabold text-brand-navy leading-[1.1] mb-8 tracking-tight">
            Institutionalizing <br />
            <span className="text-brand-orange italic font-light">the Supply Chain.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl text-brand-navy/50 font-primary mb-12 max-w-lg leading-relaxed">
            We bridge the gap between rural production and global standards through a vertically integrated infrastructure.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                custom={idx}
                className="relative group rounded-2xl overflow-hidden shadow-xl border border-brand-navy/5 h-[220px]"
              >
                <Image src={cap.img} alt={cap.label} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="w-10 h-10 mb-3 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/30 rounded-lg flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-500">
                    <cap.icon className="w-5 h-5 text-brand-orange group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="font-display text-white text-lg font-bold mb-1 leading-tight drop-shadow-md">
                    {cap.label}
                  </h4>
                  <p className="text-xs text-brand-white/80 font-primary drop-shadow-md">
                    {cap.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

