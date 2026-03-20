import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import Image from "next/image";

export function Slide08HowWeWin() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-navy px-10 md:px-20">
      {/* Background with focal point on central bottleneck */}
      <div className="absolute inset-0 z-0 opacity-20">
         <Image src="/images/visual_supremacy/shea_factory.png" alt="Operational Capacity" fill className="object-cover grayscale" />
         <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy" />
      </div>

      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-6xl flex flex-col items-center text-center z-10"
      >
        <motion.div variants={fadeUp} className="mb-12">
           <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-brand-white leading-tight tracking-tighter mb-6">
              The limitation is not <span className="text-brand-orange underline decoration-white/20">supply</span>—<br />
              it is <span className="text-brand-orange italic">access.</span>
           </h2>
           <p className="text-brand-white/60 text-lg md:text-xl font-primary max-w-2xl mx-auto italic">
              Ghana provides the product. The market provides the demand. <br />
              The failure is in the connection.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-14">
           {[
             { title: "Fragmented Buyers", desc: "No central system to manage hundreds of high-value prospects." },
             { title: "Middlemen Control", desc: "Exporters lose up to 40% margin to speculative brokers." },
             { title: "Manual Sales", desc: "Inconsistent referrals replace predictable outreach engines." }
           ].map((card, i) => (
             <motion.div 
               key={i}
               variants={fadeUp} 
               className="bg-brand-white/5 backdrop-blur-xl border border-brand-white/10 p-8 rounded-3xl text-left hover:bg-brand-white/10 transition-colors group"
             >
                <div className="w-12 h-12 bg-brand-orange/20 rounded-xl flex items-center justify-center mb-6 border border-brand-orange/30">
                   <span className="text-brand-orange font-black">!</span>
                </div>
                <h3 className="text-xl font-display font-bold text-brand-white mb-3 group-hover:text-brand-orange transition-colors">{card.title}</h3>
                <p className="text-sm text-brand-white/60 leading-relaxed font-primary">{card.desc}</p>
             </motion.div>
           ))}
        </div>

        <motion.div 
          variants={fadeUp}
          className="px-10 py-6 bg-brand-orange text-white rounded-2xl shadow-[0_0_50px_rgba(255,106,0,0.3)] animate-pulse-subtle"
        >
           <p className="text-xl md:text-2xl font-display font-black uppercase tracking-[0.1em]">
              We don&apos;t have a supply problem. <br />
              <span className="text-shadow-sm">We have a demand problem.</span>
           </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
