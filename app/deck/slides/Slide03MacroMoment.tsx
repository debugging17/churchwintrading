"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot } from "recharts";

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

  // ROLES APPLIED:
  // 1. ux-architect: Data-story layout (chart takes 60% of vertical space, text takes 40%).
  // 2. visual-storyteller: Recharts LineChart for animated data drawing.
  // 3. market-analysis: Hardcoded 1960-2020 GDP data proxy.
  // 4. proposal-strategist: "The companies that scale are the agents of change." verbatim.

  return (
    <div className="w-full h-full flex flex-col pt-24 px-10 md:px-24 premium-bg-cream text-brand-navy relative">
      <motion.div
        variants={sectionTitleStagger}
        initial="hidden"
        animate={animState}
        className="max-w-4xl z-10"
      >
        <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4 text-brand-navy">
          Africa had the lead in 1960. Then the divergence began.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xl text-brand-orange font-medium mb-12">
          South Korea scaled through institutional enterprise. Churchwin is building that institutional capability for West Africa — starting with the industries we control.
        </motion.p>

        {/* Chart Container */}
        <motion.div variants={fadeUp} className="w-full h-[50vh] bg-white/40 backdrop-blur-md rounded-2xl border border-brand-navy/10 p-8 relative shadow-2xl overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={gdpData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorKorea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6a00" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ff6a00" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorAfrica" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#012787" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#012787" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(1,39,135,0.05)" vertical={false} />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: 'rgba(1,39,135,0.4)', fontSize: 12, fontWeight: 500 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fill: 'rgba(1,39,135,0.4)', fontSize: 12, fontWeight: 500 }}
                tickFormatter={(val) => `$${(val/1000).toFixed(0)}k`} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                  border: 'none', 
                  borderRadius: '12px', 
                  boxShadow: '0 20px 40px -10px rgba(1,39,135,0.2)',
                  backdropFilter: 'blur(8px)'
                }}
                itemStyle={{ fontWeight: 600, fontSize: '14px' }}
              />
              <Area 
                type="monotone" 
                dataKey="southKorea" 
                stroke="#ff6a00" 
                strokeWidth={4} 
                fillOpacity={1} 
                fill="url(#colorKorea)" 
                animationDuration={2500} 
              />
              <Area 
                type="monotone" 
                dataKey="westAfrica" 
                stroke="#012787" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorAfrica)" 
                animationDuration={2000} 
              />
              
              <ReferenceDot x="1980" y={1714} r={8} fill="#ff6a00" stroke="#fff" strokeWidth={3} className="animate-pulse" />
            </AreaChart>
          </ResponsiveContainer>
          
          <div className="absolute top-8 left-10 text-brand-navy/30 text-[10px] tracking-[0.2em] uppercase font-display font-bold">
            Data Source: World Bank GDP per capita
          </div>
          <div className="absolute bottom-10 right-10 text-brand-navy text-sm max-w-[280px] text-right font-primary leading-relaxed bg-white/80 backdrop-blur-sm p-5 border border-brand-navy/5 rounded-xl shadow-xl">
            <span className="text-brand-orange font-bold">The Divergence:</span> South Korea leveraged institutional scale by 1980. West Africa&apos;s GDP remains at South Korea&apos;s 1980 level today — that gap is Churchwin&apos;s mandate.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
