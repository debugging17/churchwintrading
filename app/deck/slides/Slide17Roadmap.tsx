import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { TrendingUp, Layers } from "lucide-react";

export function Slide17Roadmap({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-white relative overflow-hidden pb-[var(--footer-height)]">
      <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="w-full max-w-6xl mx-auto my-auto z-10">
        
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-navy leading-tight mb-4 uppercase tracking-tighter">
            Execution <span className="text-brand-orange">Roadmap.</span>
          </h2>
          <p className="text-brand-navy/60 text-lg md:text-xl font-primary max-w-2xl mx-auto italic">
            A three-phase transformation from origin trading to an integrated institutional infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-stretch">
          
          {/* Phase 1: Stabilize */}
          <motion.div variants={fadeUp} className="p-8 bg-brand-navy/5 border border-brand-navy/10 rounded-[32px] flex flex-col">
             <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-6">
                <span className="text-brand-navy font-black">01</span>
             </div>
             <h3 className="text-xl font-display font-black text-brand-navy mb-4 uppercase">Phase 1: Stabilize</h3>
             <p className="text-xs font-primary text-brand-navy/70 mb-8 leading-relaxed">
                Baselining the origin. Vertical integration of 11+ co-ops and institutionalizing compliance (COA/MSDS).
             </p>
             <div className="mt-auto pt-4 border-t border-brand-navy/10">
                <p className="text-[9px] font-black uppercase text-brand-navy/40 tracking-widest mb-1">Target</p>
                <p className="text-lg font-display font-bold text-brand-navy">$150K Expansion Fund</p>
             </div>
          </motion.div>

          {/* Phase 2: Expand */}
          <motion.div variants={fadeUp} className="p-8 bg-brand-navy text-white rounded-[32px] border-b-4 border-brand-orange shadow-2xl relative overflow-hidden flex flex-col">
             <div className="w-10 h-10 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-6">
                <span className="text-brand-orange font-black">02</span>
             </div>
             <h3 className="text-xl font-display font-black mb-4 uppercase">Phase 2: Expand</h3>
             <p className="text-xs font-primary text-white/70 mb-8 leading-relaxed">
                Activating the Demand Engine. Scaling digital visibility (Gravity Strategy) and B2B pipeline conversion.
             </p>
             <div className="mt-auto pt-4 border-t border-white/10">
                <p className="text-[9px] font-black uppercase text-brand-orange tracking-widest mb-1">Impact</p>
                <p className="text-lg font-display font-bold text-white">3.5x Volume Multiplier</p>
             </div>
          </motion.div>

          {/* Phase 3: Institutionalize */}
          <motion.div variants={fadeUp} className="p-8 bg-brand-navy/5 border border-brand-navy/10 rounded-[32px] flex flex-col">
             <div className="w-10 h-10 rounded-xl bg-brand-navy/10 flex items-center justify-center mb-6">
                <span className="text-brand-navy font-black">03</span>
             </div>
             <h3 className="text-xl font-display font-black text-brand-navy mb-4 uppercase">Phase 3: Scale</h3>
             <p className="text-xs font-primary text-brand-navy/70 mb-8 leading-relaxed">
                Local value multiplication. Achieving COSMOS/NATRUE certification to unlock 70% of EU Tier-1 TAM.
             </p>
             <div className="mt-auto pt-4 border-t border-brand-navy/10">
                <p className="text-[9px] font-black uppercase text-brand-navy/40 tracking-widest mb-1">Impact</p>
                <p className="text-lg font-display font-bold text-brand-navy">Global Advantage</p>
             </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
