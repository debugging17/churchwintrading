import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Shield, Droplets, Warehouse } from "lucide-react";

export function Slide13CompetitiveReality({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-6xl mx-auto my-auto flex flex-col z-10"
      >
        <motion.div variants={fadeUp} className="text-center mb-16">
           <h2 className="text-4xl md:text-6xl font-display font-black text-brand-white leading-tight tracking-tighter mb-4 uppercase">
              Solving <span className="text-brand-orange italic">Supply Chain Volatility.</span>
           </h2>
           <p className="text-brand-white/40 text-lg md:text-xl font-primary max-w-2xl mx-auto italic">
              When the market shocks, Churchwin stabilizes. Our physical infrastructure is the buffer.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "12-Month Buffer", sub: "Physical warehousing of raw nuts to bypass seasonal price spikes.", icon: Warehouse },
             { title: "Standardized Refining", sub: "Dual-stage filtration ensuring 100% batch consistency for industrial buyers.", icon: Droplets },
             { title: "Quality Guarantee", sub: "Internal lab testing for peroxide and acidity levels before dispatch.", icon: Shield }
           ].map((item, i) => (
             <motion.div 
               key={i}
               variants={fadeUp}
               className="p-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] shadow-2xl group hover:border-brand-orange/40 transition-all text-left"
             >
                <div className="w-16 h-16 rounded-3xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors">
                   <item.icon className="w-8 h-8 text-brand-orange group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-display font-black text-brand-white mb-4 uppercase tracking-tight">{item.title}</h3>
                <p className="text-sm text-brand-white/50 leading-relaxed font-primary">{item.sub}</p>
             </motion.div>
           ))}
        </div>

        <motion.div 
          variants={fadeUp}
          className="mt-16 p-8 bg-brand-orange/10 border border-brand-orange/20 rounded-3xl text-center"
        >
           <p className="text-brand-white font-display font-black text-xl uppercase tracking-widest">
              &quot;We don&apos;t just trade. <span className="text-brand-orange">We institutionalize the origin.</span>&quot;
           </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
