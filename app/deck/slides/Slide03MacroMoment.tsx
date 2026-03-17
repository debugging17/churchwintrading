"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceDot } from "recharts";

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
    <div className="w-full h-full flex flex-col pt-24 px-10 md:px-24 bg-brand-navy">
      <motion.div
        variants={sectionTitleStagger}
        initial="hidden"
        animate={animState}
        className="max-w-4xl"
      >
        <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-brand-white leading-tight mb-4">
          Africa had the lead in 1960. Then the divergence began.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-xl text-brand-orange font-light mb-12">
          The companies that scale are the agents of change. Not the governments.
        </motion.p>

        {/* Chart Container */}
        <motion.div variants={fadeUp} className="w-full h-[50vh] bg-brand-white/5 rounded-xl border border-brand-white/10 p-6 backdrop-blur-sm relative">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={gdpData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis dataKey="year" stroke="rgba(255,255,255,0.4)" tick={{ fill: 'rgba(255,255,255,0.6)', fontFamily: 'Inter' }} />
              <YAxis stroke="rgba(255,255,255,0.4)" tick={{ fill: 'rgba(255,255,255,0.6)' }} tickFormatter={(val) => `$${val/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#011a5e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ fontFamily: 'Inter' }}
              />
              <Line type="monotone" dataKey="southKorea" name="South Korea" stroke="#ff6a00" strokeWidth={3} dot={false} activeDot={{ r: 6 }} animationDuration={2000} />
              <Line type="monotone" dataKey="westAfrica" name="West Africa (Proxy Ghana)" stroke="#ffffff" strokeWidth={3} dot={false} activeDot={{ r: 6 }} animationDuration={2000} />
              
              {/* Highlight the 1980 crossover point */}
              <ReferenceDot x="1980" y={1714} r={6} fill="#ff6a00" stroke="none" />
            </LineChart>
          </ResponsiveContainer>
          
          <div className="absolute top-6 left-10 text-brand-white/40 text-xs font-primary">
            GDP per capita (current US$) — West Africa vs. South Korea 1960–2020
          </div>
          <div className="absolute bottom-10 right-10 text-brand-white text-sm max-w-sm text-right font-primary leading-relaxed bg-brand-navy-dark/80 p-4 border border-brand-white/10 rounded-lg">
            South Korea overtook West Africa by 1980. By 2020, West Africa was at South Korea&apos;s 1980 level.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
