"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { CTAButton } from "../components/CTAButton";
import { Banknote, Users, Lightbulb, ArrowRight } from "lucide-react";
import Image from "next/image";

export function Slide24CTA({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  const resolutions = [
    { 
      id: "01",
      title: "Authorize Growth Fund", 
      desc: "Execute $150K allocation for digital infrastructure and EU logistics.",
      icon: Banknote,
      image: "/images/visual_supremacy/budget_action.png"
    },
    { 
      id: "02",
      title: "Activate Networks", 
      desc: "Warm introductions to Tier-1 global procurement partners.",
      icon: Users,
      image: "/images/visual_supremacy/networking_rolodex.png"
    },
    { 
      id: "03",
      title: "Mandate Certification", 
      desc: "Formally appoint steering committee for COSMOS/NATRUE.",
      icon: Lightbulb,
      image: "/images/visual_supremacy/steering_committee.png"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      
      <motion.div 
        initial="hidden" 
        animate={animState} 
        variants={staggerContainer} 
        className="w-full max-w-[90rem] mx-auto my-auto flex flex-col items-center z-10 text-center"
      >
        
        <motion.div variants={fadeUp} className="mb-12">
          <h2 className="font-display text-5xl md:text-7xl font-black text-brand-white leading-[0.9] mb-4 uppercase tracking-tighter">
            Converting <br /><span className="text-brand-orange italic">Capacity to Revenue.</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-white/40 font-primary italic max-w-2xl mx-auto">
            Built on African soil. Scaled globally through an institutional demand engine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {resolutions.map((res, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp} 
              className="relative group rounded-[40px] overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-white/10 aspect-[4/5]"
            >
              <Image 
                src={res.image} 
                alt={res.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-left">
                <div className="w-12 h-12 bg-brand-orange/20 backdrop-blur-xl border border-brand-orange/40 rounded-2xl flex items-center justify-center mb-6">
                  <res.icon className="text-brand-orange w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-black text-white mb-4 leading-tight uppercase tracking-tight">
                  <span className="text-brand-orange block text-[10px] uppercase tracking-[0.3em] mb-2 italic">Resolution {res.id}</span>
                  {res.title}
                </h3>
                <p className="font-primary text-white/70 text-sm leading-relaxed mb-6">
                  {res.desc}
                </p>
                <div className="flex items-center gap-2 text-brand-orange group/btn">
                  <span className="text-[10px] font-black uppercase tracking-widest">Execute Resolution</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeUp} className="max-w-4xl mx-auto mb-16">
          <p className="font-primary text-xl md:text-2xl text-white/90 leading-relaxed font-light italic border-l-4 border-brand-orange pl-8 text-left">
            &quot;A defensible, high-margin platform business capturing maximum value in a $40.8B organic market — built on African soil, sold globally through a systematic B2B engine.&quot;
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col items-center gap-8 w-full max-w-lg">
          <CTAButton href="mailto:contact@churchwintrading.com">
            Approve B2B Transformation Budget
          </CTAButton>
          <div className="flex items-center gap-4 text-white/40">
            <div className="w-12 h-px bg-white/10" />
            <a href="mailto:contact@churchwintrading.com" className="font-primary text-sm tracking-widest uppercase hover:text-brand-orange transition-colors">
              contact@churchwintrading.com
            </a>
            <div className="w-12 h-px bg-white/10" />
          </div>
        </motion.div>

      </motion.div>

      {/* Subtle Background Elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[150px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />
    </div>
  );
}
