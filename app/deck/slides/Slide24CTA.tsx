"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { CTAButton } from "../components/CTAButton";
import { Banknote, Users, Lightbulb } from "lucide-react";

import Image from "next/image";

export function Slide24CTA({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col items-center justify-start px-10 md:px-24 bg-brand-navy relative overflow-y-auto text-center pb-[calc(var(--footer-height)+4rem)] pt-12 md:pt-20">
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col items-center z-10 text-center">
        
        <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-7xl font-black text-brand-white leading-none mb-4 uppercase tracking-tighter">
          Converting <br /><span className="text-brand-orange italic">Capacity to Revenue.</span>
        </motion.h2>
        
        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-white/40 font-primary mb-16 italic max-w-2xl mx-auto">
          Built on African soil. Scaled globally through an institutional demand engine.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16 text-left">
                    {/* Ask 1 */}
          <motion.div variants={fadeUp} className="relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-brand-white/10 h-full min-h-[400px]">
            <Image src="/images/visual_supremacy/budget_action.png" alt="Budget Action" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 rounded-full flex items-center justify-center mb-6">
                <Banknote className="text-brand-orange w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-4 drop-shadow-md">
                <span className="text-brand-orange block text-[10px] uppercase tracking-widest mb-1 italic">Resolution 01</span>
                Authorize Strategic B2B Growth Fund
              </h3>
              <p className="font-primary text-brand-white/90 text-sm leading-relaxed drop-shadow-md">
                Formalize the 180-day $150K allocation to fund the digital sales stack and EU buffer warehouse—securing the infrastructure that converts global leads into local wealth.
              </p>
            </div>
          </motion.div>

          {/* Ask 2 */}
          <motion.div variants={fadeUp} className="relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-brand-white/10 h-full min-h-[400px]">
            <Image src="/images/visual_supremacy/networking_rolodex.png" alt="Networking Rolodex" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 rounded-full flex items-center justify-center mb-6">
                <Users className="text-brand-orange w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-4 drop-shadow-md">
                <span className="text-brand-orange block text-[10px] uppercase tracking-widest mb-1 italic">Resolution 02</span>
                Activation of Institutional Networks
              </h3>
              <p className="font-primary text-brand-white/90 text-sm leading-relaxed drop-shadow-md">
                Direct introductions to 3 Tier-1 global procurement leads. Leverage our 42% shared seed-base to open doors that belong to Churchwin Trading.
              </p>
            </div>
          </motion.div>

          {/* Ask 3 */}
          <motion.div variants={fadeUp} className="relative group rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-brand-white/10 h-full min-h-[400px]">
            <Image src="/images/visual_supremacy/steering_committee.png" alt="Steering Committee" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="w-12 h-12 bg-brand-orange/20 backdrop-blur-md border border-brand-orange/40 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="text-brand-orange w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-black text-white mb-4 drop-shadow-md">
                <span className="text-brand-orange block text-[10px] uppercase tracking-widest mb-1 italic">Resolution 03</span>
                Mandate certification & Entry
              </h3>
              <p className="font-primary text-brand-white/90 text-sm leading-relaxed drop-shadow-md">
                Appoint a Board-level steering committee to fast-track COSMOS/NATRUE certification. Goal: Roadmap approved within 90 days.
              </p>
            </div>
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
