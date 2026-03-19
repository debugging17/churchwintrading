"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, sectionTitleStagger, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot, ReferenceLine, Label } from "recharts";
import { GlassCard } from "../components/GlassCard";
import { ArrowUpRight, TrendingUp, History } from "lucide-react";

const gdpData = [
  { year: "1960", westAfrica: 181, southKorea: 158 },
  { year: "1970", westAfrica: 279, southKorea: 277 },
  { year: "1980", westAfrica: 504, southKorea: 1714 },
  { year: "1990", westAfrica: 400, southKorea: 6606 },
  { year: "2000", westAfrica: 367, southKorea: 12256 },
  { year: "2010", westAfrica: 1300, southKorea: 23087 },
  { year: "2020", westAfrica: 2200, southKorea: 31631 },
];

export function Slide03MacroMoment() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-brand-navy">
      {/* Cinematic Background */}
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        animate={animState}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/backgrounds/industrial_ghana_cinematic.png"
          alt="Modern Industrial Ghana"
          fill
          className="object-cover opacity-40 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={animState}
        className="relative z-10 w-full h-full flex flex-col justify-center px-10 md:px-24 pt-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <motion.div variants={fadeUp} className="flex items-center space-x-3 text-brand-orange">
                <History size={20} />
                <span className="uppercase tracking-[0.3em] text-xs font-bold font-display">Historical Context</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-6xl font-bold leading-[1.1] text-white">
                Africa had the lead in 1960. <br/>
                <span className="text-brand-orange">Then the divergence began.</span>
              </motion.h2>
            </div>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-light/80 font-primary leading-relaxed max-w-xl">
              South Korea scaled through <span className="text-white font-bold italic underline decoration-brand-orange/40 underline-offset-4">institutional enterprise</span>. 
              Churchwin is building that institutional capability for West Africa — starting with the industries we control.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col space-y-4">
               <GlassCard className="p-6 border-l-4 border-l-brand-orange">
                 <div className="flex items-start space-x-4">
                   <div className="p-3 bg-brand-orange/20 rounded-lg text-brand-orange">
                     <TrendingUp size={24} />
                   </div>
                   <div>
                     <h4 className="font-display text-white font-bold text-lg mb-1">The 1980 Pivot</h4>
                     <p className="text-sm text-brand-light/60 font-primary">
                       South Korea leveraged institutional scale. Today, West Africa&apos;s GDP remains at South Korea&apos;s 1980 level.
                     </p>
                   </div>
                 </div>
               </GlassCard>
            </motion.div>
          </div>

          {/* Right Column: Data Visualization */}
          <motion.div variants={fadeUp} className="lg:col-span-7 w-full">
            <GlassCard className="p-8 md:p-10 !bg-brand-navy/40 backdrop-blur-xl border-brand-white/10 shadow-2xl relative overflow-hidden group">
              {/* Chart Source Label */}
              <div className="absolute top-6 left-10 text-brand-white/20 text-[10px] tracking-[0.2em] uppercase font-display font-bold z-20">
                GDP per capita (Current US$)
              </div>

              <div className="h-[45vh] w-full mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={gdpData} margin={{ top: 40, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorKorea" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ff6a00" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#ff6a00" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAfrica" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#012787" stopOpacity={0.6}/>
                        <stop offset="95%" stopColor="#012787" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" vertical={false} />
                    <XAxis 
                      dataKey="year" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11, fontWeight: 600 }}
                      tickFormatter={(val) => `$${(val/1000).toFixed(0)}k`} 
                      dx={-10}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(1, 10, 40, 0.9)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '12px', 
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(12px)'
                      }}
                      itemStyle={{ fontWeight: 600, fontSize: '13px', color: '#fff' }}
                    />
                    
                    <ReferenceLine 
                      x="1980" 
                      stroke="rgba(255,106,0,0.3)" 
                      strokeDasharray="5 5"
                      label={{ 
                        position: 'top', 
                        value: 'INSTITUTIONAL SCALE', 
                        fill: '#ff6a00', 
                        fontSize: 10, 
                        fontWeight: 800,
                        letterSpacing: '0.1em'
                      }} 
                    />

                    <Area 
                      type="monotone" 
                      dataKey="southKorea" 
                      name="South Korea"
                      stroke="#ff6a00" 
                      strokeWidth={4} 
                      fillOpacity={1} 
                      fill="url(#colorKorea)" 
                      animationDuration={3000} 
                      animationBegin={500}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="westAfrica" 
                      name="West Africa"
                      stroke="#1a3fa8" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorAfrica)" 
                      animationDuration={2000} 
                    />
                    
                    <ReferenceDot 
                      x="1980" 
                      y={1714} 
                      r={6} 
                      fill="#ff6a00" 
                      stroke="#fff" 
                      strokeWidth={2} 
                      className="animate-pulse" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* The Gap Annotation */}
              <div className="absolute bottom-12 right-12 flex items-center space-x-3 bg-brand-orange/10 backdrop-blur-md px-4 py-3 rounded-lg border border-brand-orange/20">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">Churchwin Mandate</span>
                  <span className="text-white font-display font-bold text-xl uppercase italic">The Gap</span>
                </div>
                <ArrowUpRight className="text-brand-orange" size={24} />
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </motion.div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-navy-light/30 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
}
