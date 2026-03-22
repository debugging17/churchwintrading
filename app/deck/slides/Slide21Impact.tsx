import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Leaf, ShieldCheck, Globe } from "lucide-react";

export function Slide21Impact({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative text-brand-white">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-orange/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="w-full max-w-6xl mx-auto my-auto z-10 text-center">
        
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-white leading-tight mb-4 uppercase tracking-tighter">
            Impact as <span className="text-brand-orange">Advantage.</span>
          </h2>
          <p className="text-brand-white/40 text-lg md:text-xl font-primary max-w-2xl mx-auto italic">
            ESG is no longer a marketing story. It is a mandatory <span className="text-brand-white font-bold not-italic">infrastructure.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Global Compliance Lead", 
              desc: "Moving from reactive audits to a proactive Traceability Shield. Audit-ready for EU (EUDR), US (FSMA 204), and global institutional mandates. Scaling ESG from a regulatory cost to your primary competitive edge.", 
              icon: Globe 
            },
            { 
              title: "Data Integrity Engine", 
              desc: "Proprietary village-level architecture providing immutable proof of origin. Converting complex supply chain data into actionable, board-ready insights that bridge the transparency gap for global stakeholders.", 
              icon: ShieldCheck 
            },
            { 
              title: "Regenerative Supply", 
              desc: "Securing 18 weeks of living wage for every 1,000kg processed. Stitching social impact into the core of supply security, ensuring a resilient network that de-risks your entire operation.", 
              icon: Leaf 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] shadow-2xl group hover:border-brand-orange transition-all text-left relative overflow-hidden"
            >
               <div className="w-16 h-16 rounded-3xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center mb-8 group-hover:bg-brand-orange transition-colors relative z-10">
                  <item.icon className="w-8 h-8 text-brand-orange group-hover:text-white" />
               </div>
               <h3 className="text-2xl font-display font-black text-brand-white mb-4 uppercase tracking-tight relative z-10">{item.title}</h3>
               <p className="text-sm text-brand-white/50 font-primary leading-relaxed relative z-10">{item.desc}</p>
               
               {/* Subtle background glow on hover */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 blur-[50px] -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeUp}
          className="mt-16 p-8 bg-brand-orange/10 border border-brand-orange/20 rounded-3xl relative overflow-hidden"
        >
           <p className="text-brand-white font-display font-black text-xl md:text-2xl uppercase tracking-widest relative z-10">
              &quot;WE DON&apos;T JUST EMPOWER. <span className="text-brand-orange italic">WE DE-RISK THE GLOBAL SUPPLY CHAIN.</span>&quot;
           </p>
           {/* Animated underline focus */}
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "100%" }}
             transition={{ delay: 1.5, duration: 1 }}
             className="absolute bottom-0 left-0 h-1 bg-brand-orange/30"
           />
        </motion.div>
      </motion.div>
    </div>
  );
}
