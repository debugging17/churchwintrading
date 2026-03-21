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
    <div className="w-full h-[280px] relative flex items-center justify-center group/chart">
      {/* Background Glow (Principle 10: Life) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-64 h-64 bg-brand-orange/20 rounded-full blur-[80px]" 
        />
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={105}
            outerRadius={135}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
            startAngle={90}
            endAngle={450}
            animationBegin={400}
            animationDuration={1800}
            animationEasing="ease-in-out"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                className="transition-all duration-500 cursor-pointer outline-none active:scale-95"
                style={{
                  filter: entry.value === 90 ? "drop-shadow(0 0 12px rgba(255,106,0,0.3))" : "none"
                }}
              />
            ))}
            <Label
              content={({ viewBox }) => {
                const { cx, cy } = viewBox as any;
                return (
                  <g>
                    <motion.text
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      x={cx}
                      y={cy - 10}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-white font-display font-black text-4xl lg:text-5xl"
                    >
                      90%
                    </motion.text>
                    <motion.text
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.2, duration: 0.5 }}
                      x={cx}
                      y={cy + 35}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-brand-white/40 font-display font-bold text-[0.6rem] uppercase tracking-[0.3em]"
                    >
                      Institutional Gap
                    </motion.text>
                  </g>
                );
              }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Numerical Indicators (Principle 11: Language) */}
      <div className="absolute inset-0 flex flex-col items-center justify-between py-4 pointer-events-none">
         <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 2.5, duration: 0.5 }}
           className="px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/30 backdrop-blur-md"
         >
            <span className="text-[0.625rem] font-display font-black text-brand-orange uppercase tracking-widest">
               Extraction
            </span>
         </motion.div>
      </div>

      {/* Floating Bottom Callouts (Principle 7: Purpose) */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-between px-8">
         <motion.div 
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 2.8, duration: 0.6 }}
           className="flex flex-col items-start"
         >
            <span className="text-[0.5rem] font-bold text-brand-white/40 uppercase tracking-widest">Global Share</span>
            <span className="text-xl lg:text-2xl font-display font-black text-white">90%</span>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: 2.8, duration: 0.6 }}
           className="flex flex-col items-end"
         >
            <span className="text-[0.5rem] font-bold text-brand-white/40 uppercase tracking-widest">Local Share</span>
            <span className="text-xl lg:text-2xl font-display font-black text-brand-orange">10%</span>
         </motion.div>
      </div>
    </div>
  );
};

