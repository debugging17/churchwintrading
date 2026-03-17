"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { CTAButton } from "../components/CTAButton";
import { Banknote, Users, Lightbulb } from "lucide-react";

export function Slide24CTA() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col justify-center px-10 md:px-24 bg-brand-navy-dark bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-brand-orange/10 via-brand-navy-dark to-brand-navy-dark relative overflow-hidden">
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col items-center z-10 text-center">
        
        <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-6xl font-bold text-brand-white leading-tight mb-16">
          Three asks. <br className="md:hidden" /><span className="text-brand-orange font-light">One platform business.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16 text-left">
          
          {/* Ask 1 */}
          <motion.div variants={fadeUp} className="bg-brand-navy border border-brand-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <Banknote className="text-brand-orange w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-white mb-4">Capital</h3>
            <p className="font-primary text-brand-white/70 text-sm leading-relaxed">
              Funding for digital B2B infrastructure (Instantly.ai, Apollo, CRM, Custom Portal) + international buffer warehouse establishment.
            </p>
          </motion.div>

          {/* Ask 2 */}
          <motion.div variants={fadeUp} className="bg-brand-navy border border-brand-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <Users className="text-brand-orange w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-white mb-4">Network</h3>
            <p className="font-primary text-brand-white/70 text-sm leading-relaxed">
              Introductions to Tier-1 US/EU cosmetics procurement contacts. The 42% of 1,544 Seed companies doing business together are the warm door.
            </p>
          </motion.div>

          {/* Ask 3 */}
          <motion.div variants={fadeUp} className="bg-brand-navy border border-brand-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-brand-orange w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-white mb-4">Mentorship</h3>
            <p className="font-primary text-brand-white/70 text-sm leading-relaxed">
              Strategic guidance on the COSMOS/NATRUE certification pathway and EU market entry structuring.
            </p>
          </motion.div>

        </div>

        <motion.div variants={fadeUp} className="max-w-4xl mx-auto mb-12">
          <p className="font-primary text-xl md:text-2xl text-brand-white/90 leading-relaxed font-light italic">
            &quot;A defensible, high-margin platform business capturing maximum value in a $40.8B organic cosmetics market — built on African soil, sold globally through a systematic B2B engine.&quot;
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col items-center gap-6">
          <CTAButton href="mailto:contact@churchwintrading.com">
            Schedule a Working Session
          </CTAButton>
          <a href="mailto:contact@churchwintrading.com" className="font-primary text-brand-white/60 hover:text-brand-orange transition-colors">
            contact@churchwintrading.com
          </a>
        </motion.div>

        {/* Footer Mission */}
        <motion.div variants={fadeUp} className="absolute bottom-8 left-0 right-0 text-center">
          <p className="font-display text-xs tracking-widest uppercase text-brand-white/30">
            Providing global access to African products while caring for consumer well-being.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
