import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { TrendingUp, Layers } from "lucide-react";

export function Slide17Roadmap() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-white relative overflow-hidden pb-[var(--footer-height)]">
      <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="w-full max-w-6xl mx-auto my-auto z-10">
        
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-navy leading-tight mb-4 uppercase tracking-tighter">
            Revenue <span className="text-brand-orange">Architecture.</span>
          </h2>
          <p className="text-brand-navy/60 text-lg md:text-xl font-primary max-w-2xl mx-auto italic">
            Physical commodities meet premium branding. Two streams, one infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative items-stretch">
          
          {/* Stream 1: Bulk */}
          <motion.div variants={fadeUp} className="p-10 bg-brand-navy/5 border border-brand-navy/10 rounded-[40px] flex flex-col">
             <div className="w-12 h-12 rounded-2xl bg-brand-navy/10 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-brand-navy" />
             </div>
             <h3 className="text-2xl font-display font-black text-brand-navy mb-4 uppercase">Stream 1: Bulk Export</h3>
             <p className="text-sm font-primary text-brand-navy/70 mb-8 leading-relaxed">
                Foundation revenue. High-volume commodity export of raw and semi-processed inputs (Shea, Baobab, Cocoa). 
             </p>
             <div className="mt-auto pt-6 border-t border-brand-navy/10">
                <p className="text-[10px] font-black uppercase text-brand-navy/40 tracking-widest mb-1">Primary Driver</p>
                <p className="text-xl font-display font-bold text-brand-navy">Scale & Cashflow</p>
             </div>
          </motion.div>

          {/* Stream 2: Private Label */}
          <motion.div variants={fadeUp} className="p-10 bg-brand-navy text-white rounded-[40px] border-b-8 border-brand-orange shadow-2xl relative overflow-hidden flex flex-col">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <Layers className="w-20 h-20 text-brand-orange" />
             </div>
             <div className="w-12 h-12 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-brand-orange" />
             </div>
             <h3 className="text-2xl font-display font-black mb-4 uppercase">Stream 2: Private Label</h3>
             <p className="text-sm font-primary text-white/70 mb-8 leading-relaxed">
                Margin multiplier. Branded manufacturing and custom packaging for global retailers and specialized boutiques.
             </p>
             <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-[10px] font-black uppercase text-brand-orange tracking-widest mb-1">Primary Driver</p>
                <p className="text-xl font-display font-bold">3–5x Margin Multiplier</p>
             </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
