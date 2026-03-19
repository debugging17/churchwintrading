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
    <div className="w-full h-full flex flex-col items-center justify-center px-10 md:px-24 bg-brand-navy relative overflow-hidden text-center pb-[var(--footer-height)]">
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col items-center z-10 text-center my-auto">
        
        <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-6xl font-bold text-brand-white leading-tight mb-16">
          Three Board Actions. <br className="md:hidden" /><span className="text-brand-orange font-light">One Transformation.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16 text-left">
          
          {/* Ask 1 */}
          <motion.div variants={fadeUp} className="bg-brand-navy border border-brand-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <Banknote className="text-brand-orange w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-white mb-4">Approve $150K B2B Budget</h3>
            <p className="font-primary text-brand-white/70 text-sm leading-relaxed">
              Fund the digital sales stack (CRM, outbound automation, buyer portal) and establish a buffer warehouse in the EU — the infrastructure that converts leads into contracts.
            </p>
          </motion.div>

          {/* Ask 2 */}
          <motion.div variants={fadeUp} className="bg-brand-navy border border-brand-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <Users className="text-brand-orange w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-white mb-4">Open Your Rolodex</h3>
            <p className="font-primary text-brand-white/70 text-sm leading-relaxed">
              Introduce Churchwin to 3 Tier-1 EU/US cosmetics procurement leads. 42% of 1,544 Seed companies already do business together — we need those warm doors opened.
            </p>
          </motion.div>

          {/* Ask 3 */}
          <motion.div variants={fadeUp} className="bg-brand-navy border border-brand-white/10 rounded-xl p-8 relative overflow-hidden group hover:border-brand-orange/50 transition-colors">
            <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="text-brand-orange w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-brand-white mb-4">Mandate a Steering Committee</h3>
            <p className="font-primary text-brand-white/70 text-sm leading-relaxed">
              Appoint a Board-level committee to oversee COSMOS/NATRUE certification and EU market entry. First milestone: certification roadmap approved within 90 days.
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
            Approve B2B Transformation Budget
          </CTAButton>
          <a href="mailto:contact@churchwintrading.com" className="font-primary text-brand-white/60 hover:text-brand-orange transition-colors">
            contact@churchwintrading.com
          </a>
        </motion.div>

        {/* Footer Mission - Moved to relative flow to avoid absolute overlap */}
        <motion.div variants={fadeUp} className="mt-16 border-t border-brand-white/10 pt-8">
          <p className="font-display text-xs tracking-[0.2em] uppercase text-brand-white/30">
            Providing global access to African products while caring for consumer well-being.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
