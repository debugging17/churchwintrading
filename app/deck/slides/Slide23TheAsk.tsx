import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Banknote, Users, Lightbulb } from "lucide-react";

export function Slide23TheAsk({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(3rem+var(--header-height,0px))] overflow-y-auto relative">
      <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="w-full max-w-6xl mx-auto my-auto z-10">
        
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-brand-navy leading-tight mb-4 uppercase tracking-tighter">
            The Final <span className="text-brand-orange">Mandate.</span>
          </h2>
          <p className="text-brand-navy/60 text-lg md:text-xl font-primary max-w-2xl mx-auto italic">
            Three board resolutions to convert capacity into global scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
               title: "Authorize Growth Fund", 
               res: "Resolution 01", 
               desc: "Formalize the 180-day $150K allocation to fund the digital sales stack and EU buffer warehouse.",
               icon: Banknote 
            },
            { 
               title: "Activate Networks", 
               res: "Resolution 02", 
               desc: "Direct introductions to 3 Tier-1 global procurement leads within our shared ecosystem.",
               icon: Users 
            },
            { 
               title: "Mandate Certification", 
               res: "Resolution 03", 
               desc: "Appoint a steering committee to fast-track COSMOS/NATRUE certification within 90 days.",
               icon: Lightbulb 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className="p-10 bg-brand-navy text-white rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col"
            >
               <div className="absolute top-0 right-0 p-8 opacity-10">
                  <item.icon className="w-20 h-20 text-brand-orange" />
               </div>
               <div className="text-brand-orange text-[10px] font-black uppercase tracking-widest mb-2 italic">{item.res}</div>
               <h3 className="text-2xl font-display font-black mb-6 uppercase leading-tight">{item.title}</h3>
               <p className="text-sm font-primary text-white/50 leading-relaxed mb-8">{item.desc}</p>
               <div className="mt-auto flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">Action Required</span>
               </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
