"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { HeartHandshake, Users, ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

export function Slide22ImpactTransformed({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

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
            src="/images/visual_supremacy/shea_orchard.png"
            alt="Social Impact"
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
        className="w-full max-w-[90rem] mx-auto my-auto z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Headline and Vision */}
          <div className="w-full lg:w-1/2">
            <motion.div variants={fadeUp} className="border-l-[6px] border-brand-orange pl-8 py-2 mb-10">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
                Transformed<br />
                <span className="text-brand-orange italic">Lives.</span>
              </h2>
              <p className="text-xl text-white/60 font-primary max-w-xl leading-relaxed">
                Every dollar scaled is a <span className="text-white font-bold">household changed</span>. Documented impact is now your competitive advantage.
              </p>
            </motion.div>

            <motion.div 
               variants={fadeUp}
               className="bg-brand-orange/10 border border-brand-orange/30 rounded-[32px] p-8 backdrop-blur-md"
            >
               <h3 className="text-brand-orange text-[10px] font-black uppercase tracking-[0.4em] mb-4">ESG Compliance Advantage</h3>
               <p className="text-white/80 font-primary text-lg italic leading-relaxed">
                 &quot;ESG sourcing is no longer an option—it is an EU procurement requirement. We don&apos;t just sell ingredients; we sell a verified, traceable story.&quot;
               </p>
            </motion.div>
          </div>

          {/* Right: Impact Metrics Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <motion.div 
              variants={fadeUp}
              className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 flex flex-col justify-between group overflow-hidden relative"
            >
               <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Users className="w-24 h-24 text-brand-orange" />
               </div>
               <div>
                 <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6">
                   <HeartHandshake className="w-6 h-6 text-brand-orange" />
                 </div>
                 <div className="font-display text-5xl font-black text-white mb-2 tracking-tighter">100+</div>
                 <p className="font-primary text-white/40 text-sm uppercase tracking-widest font-black">Women Empowered</p>
               </div>
               <p className="mt-6 text-white/60 text-xs font-primary leading-relaxed">
                 Direct funding and technical training provided to community members.
               </p>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[40px] p-10 flex flex-col justify-between group overflow-hidden relative"
            >
               <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck className="w-24 h-24 text-brand-orange" />
               </div>
               <div>
                 <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-6">
                   <ShieldCheck className="w-6 h-6 text-brand-orange" />
                 </div>
                 <div className="font-display text-5xl font-black text-white mb-2 tracking-tighter">11</div>
                 <p className="font-primary text-white/40 text-sm uppercase tracking-widest font-black">Cooperatives</p>
               </div>
               <p className="mt-6 text-white/60 text-xs font-primary leading-relaxed">
                 Fully documented, certified, and traceable to the village level.
               </p>
            </motion.div>

            <motion.div 
              variants={fadeUp}
              className="md:col-span-2 bg-brand-orange border-b-8 border-brand-navy/30 rounded-[40px] p-10 flex flex-col md:flex-row items-center gap-10 group overflow-hidden relative"
            >
               <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-10 h-10 text-white" />
               </div>
               <div className="flex-1 text-center md:text-left">
                 <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter mb-1">The Luxury Multiplier</h3>
                 <p className="font-primary text-brand-navy/80 text-lg font-bold">
                   Sustainability certification drives <span className="text-white italic underline">+300% export increases</span> for luxury brands.
                 </p>
               </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
