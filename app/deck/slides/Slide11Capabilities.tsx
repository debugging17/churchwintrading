"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Users, PackageCheck, ShieldCheck, Box } from "lucide-react";

export function Slide11Capabilities() {
  const animState = useSlideEnter(100);

  const capabilities = [
    { icon: Users, label: "11 Women-Led Processing Co-operatives" },
    { icon: PackageCheck, label: "6-Product Certified Export Line (Shea, Black Soap, Neem, Cocoa, Baobab, Moringa)" },
    { icon: Box, label: "12-Month Buffer Stock Guarantee" },
    { icon: ShieldCheck, label: "International Compliance Vault (COA, MSDS, Organic Certifications)" },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-gradient-to-r from-brand-navy/5 via-brand-white/50 to-brand-white overflow-hidden">
       {/* Visual Left */}
       <div className="hidden md:flex w-[45%] h-full relative items-center justify-center p-12">
        <div className="w-full aspect-[3/4] rounded-2xl border border-brand-navy/10 flex items-center justify-center relative overflow-hidden shadow-xl">
          <Image 
            src="/assets/ghana_qa_lab.png" 
            alt="International Compliance Vault & QA Lab - Churchwin Trading Ghana" 
            fill  
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-brand-white to-transparent opacity-80" />
        </div>
      </div>

      {/* Content Right */}
      <div className="w-full md:w-[55%] h-full flex flex-col justify-center px-10 md:px-20 z-10">
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="max-w-xl">
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-4">
            Between global demand and rural supply — <span className="text-brand-orange font-light">Churchwin Trading is the bridge.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl text-brand-navy/60 font-primary mb-12">
            Not just trading. Institutionalizing the supply chain.
          </motion.p>

          <div className="space-y-6">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp} 
                whileHover={{ x: 10, backgroundColor: "rgba(1,39,135,0.05)" }}
                className="flex items-center gap-6 bg-brand-navy/5 border border-brand-navy/10 p-5 rounded-md transition-all duration-300 group shadow-sm"
              >
                <div className="w-12 h-12 shrink-0 bg-white border border-brand-navy/10 rounded-full flex items-center justify-center group-hover:border-brand-orange/50 transition-colors shadow-sm">
                  <cap.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <div className="font-primary text-brand-navy leading-relaxed font-semibold">
                  {cap.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
