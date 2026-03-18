"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { GlassCard } from "../components/GlassCard";
import { Search } from "lucide-react";
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from "recharts";

const chartData = [
  { name: 'Baraka Shea Butter', traffic: 52000, color: '#012787', isYou: false, id: '#1' },
  { name: 'Jedwards Int.', traffic: 30000, color: 'rgba(1, 39, 135, 0.4)', isYou: false, id: '#2' },
  { name: 'Churchwin Trading', traffic: 200, color: '#FF6A00', isYou: true, id: 'YOU' },
];

const CustomYAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const data = chartData.find(d => d.name === payload.value);
  if (!data) return null;

  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x={-200} y={-24} width={190} height={48}>
        <div className="flex items-center h-full w-full justify-end pr-4">
          <div className="flex flex-col items-end mr-4">
            <span className={`font-display font-medium text-sm text-right leading-tight ${data.isYou ? 'text-brand-orange' : 'text-brand-navy'}`}>
              {payload.value}
            </span>
            <span className={`text-xl leading-tight ${data.isYou ? 'font-bold text-brand-orange' : 'font-light text-brand-navy/70'}`}>
              ~{data.traffic.toLocaleString()}
            </span>
          </div>
          <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-[10px] font-bold shadow-sm ${
            data.isYou 
              ? 'bg-brand-orange/10 border border-brand-orange/50 text-brand-orange shadow-[0_0_15px_rgba(255,106,0,0.15)]' 
              : 'bg-white border border-brand-navy/20 text-brand-navy/40'
          }`}>
            {data.id}
          </div>
        </div>
      </foreignObject>
    </g>
  );
};

export function Slide15DigitalVisibility() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-gradient-to-r from-brand-white via-brand-white/80 to-brand-cream overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-brand-orange/5 blur-[120px] mix-blend-multiply" />
      
      {/* Content Left */}
      <div className="w-full md:w-[55%] h-full flex flex-col justify-center px-10 md:px-24 z-10 relative">
        
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="max-w-xl relative z-10">
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
            The demand exists. <br />The buyers are searching. <br />
            <span className="text-brand-orange font-light">Churchwin captures zero of it.</span>
          </motion.h2>

          <GlassCard theme="light" delay={0.2} className="mb-8 border-l-4 border-l-brand-orange">
            <h4 className="text-xs font-display tracking-widest text-[#ff8022] uppercase mb-4 font-semibold">Total Addressable Market</h4>
            <ul className="space-y-4 font-primary text-brand-navy/80">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-navy/20" />
                <span className="font-bold text-brand-navy">$40.8B</span> Global organic cosmetics market
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-brand-navy/20" />
                <span className="font-bold text-brand-navy">$4.27B</span> Shea butter market by 2033
              </li>
              <li className="flex items-center gap-3 bg-brand-navy/5 p-3 rounded-md border border-brand-navy/10 mt-2 shadow-sm">
                <Search className="w-4 h-4 text-brand-orange" />
                <span className="font-bold text-brand-navy">2,400+</span> Monthly US searches for &quot;shea butter wholesale&quot;
              </li>
            </ul>
          </GlassCard>

          <motion.div variants={fadeUp} className="text-lg font-primary leading-relaxed text-brand-navy/70 italic border-l-2 border-brand-navy/20 pl-6 font-medium">
            We have the superior supply infrastructure. What we lack is the client acquisition engine. <span className="text-brand-orange font-bold not-italic">This is an execution item.</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Visual Right - Traffic Comparison */}
      <div className="w-full md:w-[45%] h-full flex flex-col items-center justify-center p-8 md:p-12 relative border-l border-brand-navy/5">
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-lg h-[500px] flex flex-col">
           <h4 className="font-display text-sm tracking-widest text-brand-navy/40 uppercase mb-8 text-center font-bold">Monthly Web Traffic (Ahrefs Estimate)</h4>

           <div className="flex-grow w-full relative">
             {/* Abstract scales graphic connecting them */}
             <div className="absolute left-[38px] top-4 bottom-4 w-px bg-gradient-to-b from-brand-navy/20 via-brand-navy/10 to-brand-orange/50 z-0" />
             
             <ResponsiveContainer width="100%" height="100%">
               <BarChart
                 data={chartData}
                 layout="vertical"
                 margin={{ top: 0, right: 30, left: 20, bottom: 0 }}
                 barSize={12}
               >
                 <XAxis type="number" hide domain={[0, 60000]} />
                 <YAxis 
                   type="category" 
                   dataKey="name" 
                   axisLine={false} 
                   tickLine={false} 
                   tick={<CustomYAxisTick />} 
                   width={200}
                 />
                 <Tooltip 
                   cursor={{ fill: 'transparent' }}
                   content={({ active, payload }) => {
                     if (active && payload && payload.length) {
                       const data = payload[0].payload;
                       return (
                         <div className="bg-white/90 backdrop-blur-md border border-brand-navy/10 p-3 rounded-lg shadow-xl">
                           <p className="font-display font-bold text-brand-navy text-sm mb-1">{data.name}</p>
                           <p className={`font-mono font-bold ${data.isYou ? 'text-brand-orange' : 'text-brand-navy'}`}>
                             ~{data.traffic.toLocaleString()} visits/mo
                           </p>
                         </div>
                       );
                     }
                     return null;
                   }}
                 />
                 <Bar dataKey="traffic" radius={[0, 4, 4, 0]} animationDuration={1500}>
                   {chartData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={entry.color} />
                   ))}
                 </Bar>
               </BarChart>
             </ResponsiveContainer>
           </div>
           
           <motion.div variants={fadeUp} className="mt-6 text-center">
             <div className="text-xs font-primary text-brand-navy/60 uppercase tracking-widest bg-brand-orange/10 px-3 py-1.5 rounded-sm inline-block border border-brand-orange/20 font-semibold shadow-sm">
               1/260th The Visibility
             </div>
           </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
