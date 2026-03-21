"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { name: 'Global Extraction', value: 90, color: '#ff6a00' },
  { name: 'Local Capture', value: 10, color: '#1e3a8a' }, // Muted Navy
];

export const ValueGapChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] relative flex items-center justify-center">
      {/* Glow Effect Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-48 h-48 bg-brand-orange/20 rounded-full blur-[60px] animate-pulse" />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
            startAngle={90}
            endAngle={450}
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                className={entry.value === 90 ? "drop-shadow-[0_0_15px_rgba(255,106,0,0.5)]" : ""}
              />
            ))}
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = viewBox as any;
                return (
                  <g>
                    <text
                      x={cx}
                      y={cy - 10}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white font-display font-black text-4xl lg:text-5xl"
                    >
                      90%
                    </text>
                    <text
                      x={cx}
                      y={cy + 30}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-brand-white/40 font-display font-bold text-[0.6rem] uppercase tracking-[0.2em]"
                    >
                      Value Gap
                    </text>
                  </g>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Numerical Callouts for Mobile/Small views (Optional, but good for clarity) */}
      <div className="absolute -bottom-4 left-0 right-0 flex justify-between px-4">
         <div className="flex flex-col items-start">
            <span className="text-[0.6rem] font-bold text-brand-orange uppercase tracking-widest">Global</span>
            <span className="text-xl font-black text-white">90%</span>
         </div>
         <div className="flex flex-col items-end">
            <span className="text-[0.6rem] font-bold text-brand-white/40 uppercase tracking-widest">Local</span>
            <span className="text-xl font-black text-brand-white/60">10%</span>
         </div>
      </div>
    </div>
  );
};
