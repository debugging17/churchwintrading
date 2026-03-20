import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Leaf, ShieldCheck, Globe } from "lucide-react";

export function Slide21Impact() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-navy relative overflow-hidden pb-[var(--footer-height)]">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="w-full max-w-6xl mx-auto my-auto z-10 text-center">
        
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-white leading-tight mb-4 uppercase tracking-tighter">
            Impact as <span className="text-brand-orange">Advantage.</span>
          </h2>
          <p className="text-brand-white/40 text-lg md:text-xl font-primary max-w-2xl mx-auto italic">
            ESG is no longer a marketing story. It is a market entry requirement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "EU Compliance", desc: "Forthcoming EUDR regulations require 100% geolocation-to-batch traceability.", icon: Globe },
            { title: "Verification Moat", desc: "Our village-level data architecture is the moat that competitors cannot replicate.", icon: ShieldCheck },
            { title: "Sustainable Yield", desc: "Empowered cooperatives ensure supply security and quality consistency.", icon: Leaf }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl group hover:border-brand-orange transition-all"
            >
               <div className="w-16 h-16 rounded-3xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-8 mx-auto group-hover:bg-brand-orange transition-colors">
                  <item.icon className="w-8 h-8 text-brand-orange group-hover:text-white" />
               </div>
               <h3 className="text-2xl font-display font-black text-brand-white mb-4 uppercase">{item.title}</h3>
               <p className="text-sm text-brand-white/50 font-primary leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeUp}
          className="mt-16 p-8 bg-brand-orange/10 border border-brand-orange/20 rounded-3xl"
        >
           <p className="text-brand-white font-display font-black text-xl uppercase tracking-widest">
              "We don't just empower. <span className="text-brand-orange italic">We de-risk the supply chain.</span>"
           </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
