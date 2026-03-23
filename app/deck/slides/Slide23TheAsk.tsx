import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Banknote, Users, Lightbulb } from "lucide-react";

export function Slide23TheAsk({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/5 rounded-full blur-[120px]" />
      </div>

      <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="w-full max-w-6xl mx-auto my-auto z-10">
        
        <motion.div variants={fadeUp} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-4 uppercase tracking-tighter">
            Next Immediate <span className="text-brand-orange underline decoration-[4px] underline-offset-8">Steps</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-primary max-w-2xl mx-auto">
            Three board resolutions to convert capacity into global scale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
               title: "Authorize Growth Fund", 
               res: "Resolution 01", 
               desc: "Execute $150K allocation for digital infrastructure and EU logistics.",
               icon: Banknote,
               color: "from-orange-500/20 to-transparent"
            },
            { 
               title: "Activate Networks", 
               res: "Resolution 02", 
               desc: "Warm introductions to Tier-1 global procurement partners.",
               icon: Users,
               color: "from-brand-navy-light/20 to-transparent"
            },
            { 
               title: "Mandate Certification", 
               res: "Resolution 03", 
               desc: "Formally appoint steering committee for COSMOS/NATRUE.",
               icon: Lightbulb,
               color: "from-orange-600/10 to-transparent"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={fadeUp}
              className={`p-10 bg-brand-navy-dark border border-white/5 text-white rounded-[40px] shadow-2xl relative overflow-hidden flex flex-col hover:border-brand-orange/30 transition-colors group bg-gradient-to-br ${item.color}`}
            >
               <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-24 h-24 text-brand-orange" />
               </div>
               <div className="text-brand-orange text-xs font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-brand-orange/30" />
                  {item.res}
               </div>
               <h3 className="text-2xl md:text-3xl font-display font-black mb-6 uppercase leading-tight tracking-tight">{item.title}</h3>
               <p className="text-sm md:text-base font-primary text-white/50 leading-relaxed mb-8">{item.desc}</p>
               <div className="mt-auto flex items-center gap-3 bg-white/5 self-start px-4 py-2 rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse shadow-[0_0_8px_rgba(255,106,0,0.8)]" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">Action Required</span>
               </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
