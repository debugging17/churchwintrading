"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GlassCard } from "../components/GlassCard";
import NoiseOverlay from "../components/NoiseOverlay";
import { Search, TrendingUp, Globe2, Activity } from "lucide-react";
import { 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  Tooltip, 
  LineChart, 
  Line, 
  AreaChart, 
  Area 
} from "recharts";

const trafficData = [
  { name: 'Week 1', traffic: 200, comp1: 52000, comp2: 30000 },
  { name: 'Week 2', traffic: 450, comp1: 52500, comp2: 30500 },
  { name: 'Week 3', traffic: 800, comp1: 53000, comp2: 31000 },
  { name: 'Week 4', traffic: 1200, comp1: 54000, comp2: 32000 },
];

export function Slide15DigitalVisibility() {
  const animState = useSlideEnter(100);

  return (
    <div className="relative w-full h-full flex flex-col md:flex-row bg-[#FDFDFD] overflow-hidden">
      <NoiseOverlay />
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-brand-orange/5 blur-[10rem] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-brand-navy/5 blur-[10rem] rounded-full pointer-events-none" />

      {/* Content Side */}
      <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-10 md:px-20 z-20">
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="max-w-xl">
          <motion.div variants={slideFromLeft} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-brand-orange/40" />
            <span className="text-brand-orange uppercase tracking-[0.3em] text-xs font-bold font-primary">Market Opportunity</span>
          </motion.div>

          <motion.h2 variants={slideFromLeft} className="font-display text-5xl md:text-6xl font-bold text-brand-navy leading-tight mb-8 tracking-tight">
            The Digital <br />
            <span className="text-brand-orange italic font-light">Void.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-xl text-brand-navy/60 font-primary mb-12 leading-relaxed">
            The demand for premium agricultural transparency is at an all-time high, but our current visibility remains near zero.
          </motion.p>

          <div className="space-y-4">
            <GlassCard delay={0.3} className="border-l-4 border-l-brand-orange p-6 group hover:translate-x-2 transition-transform duration-500">
               <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] font-medium text-brand-navy/40 mb-1">Global Organic Cosmetics TAM</p>
                    <h3 className="text-3xl font-display font-bold text-brand-navy group-hover:text-brand-orange transition-colors duration-500">$18.5B</h3>
                  </div>
                  <div className="bg-brand-orange/10 p-2 rounded-full">
                    <Globe2 className="w-5 h-5 text-brand-orange" />
                  </div>
               </div>
               <div className="h-1 w-full bg-brand-navy/5 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: "65%" }}
                   transition={{ duration: 1.5, delay: 0.8 }}
                   className="h-full bg-brand-orange"
                 />
               </div>
               <p className="text-xs text-brand-navy/50 mt-3 font-primary">Growing at 12% CAGR annually</p>
            </GlassCard>

            <GlassCard delay={0.4} className="p-6 border-l-4 border-l-brand-navy/20">
               <div className="flex items-center gap-4 mb-2">
                 <Search className="w-4 h-4 text-brand-orange" />
                 <span className="text-brand-navy font-bold font-primary text-sm">2,400+ Monthly High-Intent Searches</span>
               </div>
               <p className="text-sm text-brand-navy/60 font-primary ml-8 font-medium italic">
                 &quot;Shea Butter Wholesale&quot;, &quot;Ethical Cocoa Sourcing&quot;, &quot;Certified Organic Exports&quot;
               </p>
            </GlassCard>
          </div>
        </motion.div>
      </div>

      {/* Visual / Dashboard Side */}
      <div className="w-full md:w-[55%] h-full flex items-center justify-center p-8 md:p-12 z-10 relative">
        <motion.div 
          initial="hidden" 
          animate={animState} 
          variants={fadeUp} 
          className="w-full h-full max-w-2xl bg-white border border-brand-navy/5 rounded-[2.5rem] shadow-[0_3rem_5rem_-1.5rem_rgba(0,0,0,0.12)] p-8 md:p-12 overflow-hidden relative flex flex-col"
          role="region"
          aria-label="Competitive Traffic Growth Dashboard"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#012787 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="flex justify-between items-start mb-12 relative z-10">
            <div>
              <h4 className="font-display text-lg font-bold text-brand-navy mb-1">Competitive Traffic Growth</h4>
              <p className="text-xs text-brand-navy/40 uppercase tracking-widest font-bold font-primary">Weekly Acquisition Insights</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-orange shadow-[0_0_8px_rgba(255,106,0,0.5)]" />
                <span className="text-[10px] font-bold text-brand-navy/60 uppercase tracking-tighter">Churchwin</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-navy/20" />
                <span className="text-[10px] font-bold text-brand-navy/60 uppercase tracking-tighter">Competitor Avg.</span>
              </div>
            </div>
          </div>

          <div className="flex-grow w-full h-[16rem] mb-8 relative z-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff6a00" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ff6a00" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" hide />
                <YAxis hide domain={[0, 60000]} />
                <Tooltip 
                  cursor={{ stroke: '#012787', strokeWidth: 1, strokeDasharray: '4 4' }}
                  content={({ payload }) => {
                    if (payload && payload.length && payload[0]) {
                      return (
                        <div className="bg-brand-navy p-3 rounded-lg shadow-2xl border border-brand-white/10">
                           <p className="text-white font-display font-bold text-xs mb-1">{payload[0].payload?.name}</p>
                           <p className="text-brand-orange font-bold text-xs">Churchwin: {payload[0].value?.toLocaleString()}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area type="monotone" dataKey="comp1" stroke="#012787" strokeOpacity={0.1} strokeWidth={2} fill="transparent" />
                <Area type="monotone" dataKey="comp2" stroke="#012787" strokeOpacity={0.1} strokeWidth={2} fill="transparent" />
                <Area 
                  type="monotone" 
                  dataKey="traffic" 
                  stroke="#ff6a00" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorTraffic)" 
                  animationDuration={2500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-6 relative z-10">
            <div className="p-4 bg-brand-navy/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-brand-navy/40">
                <Activity className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-tight">Visibility</span>
              </div>
              <p className="text-xl font-display font-bold text-brand-navy tracking-tight">1/260th</p>
              <p className="text-[10px] text-brand-orange font-bold">Of Industry Baseline</p>
            </div>
            
            <div className="p-4 bg-brand-navy/5 rounded-2xl">
              <div className="flex items-center gap-2 mb-2 text-brand-navy/40">
                <TrendingUp className="w-4 h-4" />
                <span className="text-[10px] uppercase font-bold tracking-tight">Growth Trend</span>
              </div>
              <p className="text-xl font-display font-bold text-brand-navy tracking-tight">+350%</p>
              <p className="text-[10px] text-brand-navy/40 font-bold">Poised for Momentum</p>
            </div>

            <div className="p-4 border-2 border-brand-orange/20 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <Search className="w-8 h-8 text-brand-orange" />
              </div>
              <div className="flex items-center gap-2 mb-2 text-brand-orange font-bold">
                <span className="text-[10px] uppercase font-bold tracking-tight">Focus Gap</span>
              </div>
              <p className="text-xl font-display font-bold text-brand-navy tracking-tight">Zero</p>
              <p className="text-[10px] text-brand-navy/40 font-bold">Captured Search</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

