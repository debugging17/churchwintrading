"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { HeartHandshake, BookOpenCheck, ShieldCheck } from "lucide-react";

export function Slide22ImpactTransformed() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-white">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-16 my-auto">
        
        {/* Visual / Ethos Left */}
        <div className="w-full md:w-[45%] flex flex-col justify-center">
          <motion.div variants={fadeUp} className="w-20 h-1 bg-brand-orange mb-8" />
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-6xl font-bold text-brand-navy leading-tight mb-6">
            Every dollar scaled is a <span className="text-brand-orange font-light italic">household changed.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl text-brand-navy/70 font-primary border-l-2 border-brand-navy/20 pl-6 mb-8 font-medium">
            ESG sourcing is now an EU procurement requirement. <span className="text-brand-navy font-bold">Our documented impact is your competitive advantage.</span>
          </motion.p>
        </div>

        {/* Impact Metrics Right */}
        <div className="w-full md:w-[55%] flex flex-col justify-center space-y-6">
          
          <motion.div variants={fadeUp} className="bg-white border border-brand-navy/10 rounded-xl p-8 flex items-start gap-6 group hover:border-brand-orange/50 transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-navy/5 border border-brand-orange/30 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-orange/10 transition-colors">
              <HeartHandshake className="text-brand-orange w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-navy mb-2">100+</div>
              <p className="font-primary text-brand-navy/70 text-lg font-medium">Women and community members currently empowered and directly funded.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-white border border-brand-navy/10 rounded-xl p-8 flex items-start gap-6 group hover:border-brand-orange/50 transition-colors shadow-sm">
            <div className="w-14 h-14 bg-brand-navy/5 border border-brand-navy/20 rounded-full flex items-center justify-center shrink-0">
              <BookOpenCheck className="text-brand-navy/60 w-6 h-6 group-hover:text-brand-orange transition-colors" />
            </div>
            <div>
              <div className="font-display text-4xl font-bold text-brand-navy mb-2">11 Cooperatives</div>
              <p className="font-primary text-brand-navy/70 text-lg font-medium">Fully documented, certified, and traceable to the village level.</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="bg-gradient-to-r from-brand-orange/5 to-transparent border border-brand-orange/30 rounded-xl p-8 flex items-start gap-6 shadow-[0_4px_20px_rgba(255,106,0,0.05)] bg-white">
            <div className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center shrink-0 shadow-lg">
              <ShieldCheck className="text-brand-white w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-display tracking-widest text-[#ff8022] uppercase font-bold mb-2">Proven Model Validation</div>
              <p className="font-primary text-brand-navy/90 text-lg">Sustainability certification drives <span className="font-bold text-brand-orange">+300% export increases</span> for luxury retail brands.</p>
            </div>
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
}
