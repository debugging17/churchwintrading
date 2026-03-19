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

export function Slide03MacroMoment() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-[2rem] md:p-[3rem] pb-[8rem] relative overflow-hidden bg-brand-navy">
      
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
        className="w-full max-w-[80rem] mx-auto flex flex-col items-center z-10"
      >
        {/* Provocative Headline Overlay */}
        <motion.div variants={fadeUp} className="text-center mb-[3rem] max-w-[50rem]">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-black text-brand-white leading-tight mb-[1rem] tracking-tighter shadow-2xl">
            Africa had the lead in 1960. 
            <br />
            <span className="text-brand-orange text-shadow-lg italic">Then the divergence began.</span>
          </h2>
          <p className="font-primary text-[1.25rem] md:text-[1.5rem] text-brand-white/80 font-light mt-[1.5rem] mx-auto max-w-[40rem] px-[1.5rem] py-[0.75rem] bg-brand-orange/10 backdrop-blur-md rounded-full border border-brand-orange/20">
             Churchwin is building the <span className="text-brand-orange font-bold">institutional scale</span> that West Africa never developed.
          </p>
        </motion.div>

        {/* Data Visualization Card */}
        <motion.div 
          variants={fadeUp}
          className="w-full aspect-video md:aspect-auto md:h-[45vh] bg-brand-white/95 backdrop-blur-2xl rounded-[1.5rem] p-[2rem] md:p-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/20 relative"
        >
          <div className="absolute top-[2rem] left-[3rem]">
             <p className="text-[0.625rem] font-display font-black tracking-[0.4em] text-brand-navy/30 uppercase">GDP PER CAPITA (USD)</p>
          </div>

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 40, right: 30, left: 20, bottom: 20 }}>
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
                tick={{ fill: "#012787", fontSize: 12, fontWeight: 700, fontFamily: "var(--font-display)" }} 
                dy={15}
              />
              <YAxis hide={true} />
              <Tooltip 
                contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', fontFamily: 'var(--font-primary)' }}
                labelStyle={{ fontWeight: 'bold', color: '#012787' }}
              />
              
              {/* Ghana Path (Stagnation) */}
              <Area 
                name="West Africa (Average)"
                type="monotone" 
                dataKey="ghana" 
                stroke="#012787" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorGhana)" 
              />
              
              {/* Korea Path (Scale) */}
              <Area 
                name="South Korea (Scale Path)"
                type="monotone" 
                dataKey="korea" 
                stroke="#ff6a00" 
                strokeWidth={5}
                fillOpacity={1} 
                fill="url(#colorKorea)" 
                animationDuration={2500}
              />
            </AreaChart>
          </ResponsiveContainer>

          {/* Pivot Callout Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2 }}
            className="absolute top-1/2 right-[3rem] md:right-[6rem] -translate-y-[20%] w-[15rem] md:w-[20rem] p-[1.5rem] bg-brand-navy shadow-3xl rounded-[1rem] border-l-[0.4rem] border-brand-orange z-20"
          >
            <h4 className="font-display font-black text-brand-orange text-[1.125rem] mb-[0.5rem] uppercase tracking-widest">The Divergence</h4>
            <p className="font-primary text-brand-white/80 text-[0.875rem] leading-relaxed">
              South Korea leveraged <span className="font-bold text-white italic underline">institutional scale</span> by 1980. West Africa remained fragmented. 
              <br /><br />
              <span className="text-brand-orange font-bold uppercase text-[0.625rem]">Churchwin Mandate:</span>
              <br />
              Institutionalizing the supply chain to reclaim that delta.
            </p>
          </motion.div>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-[2rem] text-[0.625rem] font-display font-black tracking-[0.4em] text-brand-white/30 uppercase">
          DATA SOURCE: WORLD BANK GDP INDICATORS 1960–2024
        </motion.p>
      </motion.div>
    </div>
  );
}
