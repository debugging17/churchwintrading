"use client";
import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import Image from "next/image";

// SLIDE 03: THE MACRO MOMENT (GDP DIVERGENCE)
// Skills applied:
//   visual-storyteller: "Divergence" landscape background sets the historical stakes.
//   ux-architect: GlassCard container for Recharts ensures data is legible over a complex image.
//   proposal-strategist: Hardened copy linking Churchwin to "institutional scale".
//   brand-guardian: Area chart using brand-orange with glow effect.

const data = [
  { year: 1960, ghana: 200, korea: 160 },
  { year: 1970, ghana: 250, korea: 280 },
  { year: 1980, ghana: 350, korea: 1700 }, // The Pivot Point
  { year: 1990, ghana: 400, korea: 6500 },
  { year: 2000, ghana: 500, korea: 12000 },
  { year: 2010, ghana: 1300, korea: 23000 },
  { year: 2020, ghana: 2200, korea: 32000 },
];

export function Slide03MacroMoment({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      
      {/* === LAYER 0: Background Cinematic === */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgrounds/divergence_landscape.png" 
          alt="Historical Divergence" 
          fill 
          className="object-cover opacity-[0.25] grayscale contrast-[1.2]"
          priority
        />
        {/* Dynamic Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-transparent to-brand-navy z-10" />
        <div className="absolute inset-0 bg-brand-navy/60 z-10" />
      </div>

      <motion.div 
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-[95rem] flex flex-col items-start z-10 my-auto"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center h-full flex-grow">
          {/* Left Column: Text & Context */}
          <motion.div variants={fadeUp} className="text-left lg:col-span-4 xl:col-span-5 flex flex-col justify-center gap-4 h-full">
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl xl:text-6xl font-display font-black text-brand-white leading-[1.1] tracking-tighter"
            >
              Africa had the lead. <br />
              <span className="text-brand-orange/90 italic drop-shadow-sm">Then the divergence began.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-brand-white/70 leading-relaxed font-primary"
            >
              In 1960, West African GDP trajectories mirrored those of East Asian tigers like South Korea. Over six decades, the gap didn&apos;t just grow—it exploded. This widening chasm was not caused by a lack of potential, but a failure to institutionalize the production engine.
            </motion.p>

            {/* Pivot Callout Overlay (Now integrated inline) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: "spring", stiffness: 100 }}
              className="w-full p-[1.5rem] bg-brand-white/5 backdrop-blur-xl shadow-2xl rounded-[1rem] border border-white/10"
            >
              <h4 className="font-display font-black text-brand-orange text-[1.25rem] mb-[0.5rem] uppercase tracking-widest">The Divergence</h4>
              <p className="font-primary text-brand-white/90 text-[0.875rem] leading-relaxed">
                South Korea leveraged <span className="font-bold text-white italic underline">institutional scale</span> by 1980. West Africa remained fragmented. 
                <br /><br />
                <span className="text-brand-orange font-bold uppercase text-[0.625rem] tracking-widest">Churchwin Mandate:</span>
                <br />
                Institutionalizing the supply chain to reclaim that delta.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column: Data Visualization Card (Principle 12: Mimic) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95, y: 30 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 70, 
                  damping: 15,
                  mass: 0.8,
                  delay: 0.4
                } 
              }
            }}
            className="w-full lg:col-span-8 xl:col-span-7 h-[60vh] lg:h-[75vh] bg-brand-white/95 backdrop-blur-2xl rounded-[1.5rem] p-6 md:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/20 relative flex flex-col pt-[3rem]"
          >
            <div className="absolute top-[1.5rem] left-[1.5rem] md:left-[2.5rem] z-30">
               <p className="text-[0.625rem] font-display font-black tracking-[0.4em] text-brand-navy/60 uppercase">GDP PER CAPITA (USD)</p>
            </div>

            <div className="flex-grow pt-[1rem]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 30 }}>
                  <defs>
                    <linearGradient id="colorKorea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ff6a00" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ff6a00" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorGhana" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#012787" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#012787" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="year" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: "#012787", fontSize: 13, fontWeight: 700, fontFamily: "var(--font-display)" }} 
                    dy={15}
                    padding={{ left: 10, right: 10 }}
                  />
                  <YAxis hide={true} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', fontFamily: 'var(--font-primary)' }}
                    labelStyle={{ fontWeight: 'bold', color: '#012787' }}
                  />
                  
                  {/* Ghana Path (Stagnation) (Principle 6: Kinematics) */}
                  <Area 
                    name="West Africa (Average)"
                    type="monotone" 
                    dataKey="ghana" 
                    stroke="#012787" 
                    strokeWidth={4}
                    fillOpacity={1} 
                    fill="url(#colorGhana)"
                    animationBegin={1000}
                    animationDuration={2000}
                    animationEasing="ease-in-out"
                  />
                  
                  {/* Korea Path (Scale) (Principle 8: Storytelling) */}
                  <Area 
                    name="South Korea (Scale Path)"
                    type="monotone" 
                    dataKey="korea" 
                    stroke="#ff6a00" 
                    strokeWidth={5}
                    fillOpacity={1} 
                    fill="url(#colorKorea)" 
                    animationBegin={1400}
                    animationDuration={2500}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <p className="mt-[1rem] text-[0.625rem] font-display font-black tracking-[0.4em] text-brand-navy/40 uppercase self-end">
              DATA SOURCE: WORLD BANK GDP INDICATORS 1960–2024
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
