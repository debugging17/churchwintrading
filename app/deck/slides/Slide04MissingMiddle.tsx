"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import Image from "next/image";

// SLIDE 04: THE MISSING MIDDLE — THE TRANSFORMATION
// Skills applied:
//   visual-storyteller: Before/After comparison provides concrete proof of institutionalization.
//   frontend-engineer: Responsive grid for comparison cards with glassmorphism.
//   ux-architect: Clear labeling of "The Gap" vs "The Goal".
//   proposal-strategist: Linking South Korea's structural shift to Churchwin's physical infrastructure.

export function Slide04MissingMiddle({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);



  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(3rem+var(--header-height,0px))] overflow-y-auto relative">
      
      {/* No Background Image as per user request */}
      <div className="absolute inset-0 bg-brand-navy z-0" />

      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-[95rem] mx-auto my-auto flex flex-col z-10"
      >
        {/* Title Area — Shifted Upwards & Left Aligned */}
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black text-brand-white leading-tight tracking-tighter whitespace-nowrap overflow-hidden text-ellipsis max-w-full">
                Moving from the constraint of manual heroics to the scale of <span className="text-brand-orange italic">Physical Trust Infrastructure.</span>
            </h2>

         {/* Comparison Grid — Principle 8: Storytelling (Height Locked & Shifted Left) */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 w-full mb-6 relative">
            
            {/* LEFT: THE CONSTRAINT (Current Office) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: -50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 60, damping: 20, delay: 0.2 }
                }
              }}
              className="group relative h-[50vh] md:h-[55vh] lg:h-[60vh] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-brand-navy"
            >
               <Image 
                 src="/images/IMG_0471-min-min-scaled.jpg" 
                 alt="Churchwin Current Office" 
                 fill 
                 className="object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                 priority
               />
            </motion.div>

            {/* TRANSFORMATION ARROW — Principle 9: Grace (Flow) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={animState}
               variants={{
                 hidden: { opacity: 0, scale: 0.8 },
                 visible: { opacity: 1, scale: 1, transition: { delay: 0.8, duration: 0.8 } }
               }}
               className="absolute left-1/2 top-1/2 -track-x-1/2 -translate-y-1/2 z-30 hidden lg:block pointer-events-none"
               style={{ left: "50%", transform: "translate(-50%, -50%)" }}
            >
               <svg width="240" height="80" viewBox="0 0 240 80" fill="none" className="drop-shadow-[0_0_20px_rgba(255,106,0,0.6)]">
                  <motion.path 
                    d="M20 40C80 40 160 40 220 40" 
                    stroke="url(#arrowGradient)" 
                    strokeWidth="6" 
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
                  />
                  <motion.path 
                    d="M205 20L225 40L205 60" 
                    stroke="#ff6a00" 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.2, duration: 0.4 }}
                  />
                  <defs>
                    <linearGradient id="arrowGradient" x1="20" y1="40" x2="220" y2="40" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#ff6a00" />
                    </linearGradient>
                  </defs>
               </svg>
            </motion.div>

            {/* RIGHT: THE SCALE (Workshop/Industrial State) */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, x: 50, scale: 0.95 },
                visible: { 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { type: "spring", stiffness: 60, damping: 20, delay: 0.4 }
                }
              }}
              className="group relative h-[50vh] md:h-[55vh] lg:h-[60vh] rounded-[3rem] overflow-hidden border border-brand-orange/20 shadow-[0_0_80px_rgba(255,106,0,0.1)] bg-brand-navy"
            >
               <Image 
                 src="/images/HlLNHFp92mBs48AlJPbjnCfJs.jpg" 
                 alt="Churchwin Workshop Scale" 
                 fill 
                 className="object-cover group-hover:scale-105 transition-all duration-1000 ease-out"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-brand-orange/30 via-transparent to-transparent mix-blend-overlay opacity-50" />
               <div className="absolute inset-0 bg-brand-navy/20 opacity-40" />
               
               <div className="absolute inset-x-0 bottom-0 p-10 flex flex-col items-start text-left bg-gradient-to-t from-brand-navy/60 via-brand-navy/20 to-transparent">
                  <span className="text-brand-orange text-[10px] uppercase font-black tracking-[0.4em] mb-4">Global Scale</span>
                  <h3 className="text-2xl md:text-2xl lg:text-3xl font-display font-black text-white leading-tight uppercase tracking-tighter">
                    Institutional <br />Infrastructure
                  </h3>
                  <div className="w-12 h-1 bg-brand-orange mt-4 rounded-full shadow-[0_0_15px_rgba(255,106,0,0.8)]" />
               </div>

               {/* Transformation Badge (Principle 10: Life) */}
               <motion.div 
                 animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute top-10 right-10 bg-brand-orange/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-xl"
               >
                 <span className="text-[10px] font-black text-white uppercase tracking-widest">Target State</span>
               </motion.div>
            </motion.div>
         </div>

         {/* Insight Bar — Principle 7: Purpose (Spacing Refinement to Fit in Frame) */}
         <motion.div variants={fadeUp} className="bg-brand-orange/5 p-6 md:p-8 rounded-3xl border-l-[10px] border-brand-orange shadow-2xl backdrop-blur-md mb-6">
            <p className="text-brand-white/90 font-display font-medium text-lg md:text-2xl leading-tight tracking-tight">
               Africa lacks structured demand. <span className="text-brand-orange italic font-black">This is the failure point of scale.</span>
            </p>
         </motion.div>

         {/* Footer Strategy — Principle 11: Language (Shifted Right to avoid overlap) */}
         <motion.div variants={fadeUp} className="flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-6 gap-4 opacity-40 ml-0 md:ml-32">
           <div className="flex gap-12">
              <div>
                 <p className="text-white/40 text-[9px] uppercase font-black tracking-widest mb-1">Operational Shift</p>
                 <p className="text-brand-orange font-display font-bold text-sm underline decoration-brand-orange/20">Transformation Ready</p>
              </div>
           </div>
           <p className="text-white/20 text-[9px] uppercase font-black tracking-[0.4em]">
              BRIDGING THE GHANAIAN PRODUCTIVITY DEFICIT
           </p>
         </motion.div>

      </motion.div>
    </div>
  );
}
