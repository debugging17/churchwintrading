"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { ResponsiveContainer, Treemap, Tooltip as RechartsTooltip } from "recharts";

const msmeData = [
  {
    name: "Micro Enterprises",
    size: 80,
    fill: "rgba(1, 39, 135, 0.05)",
    textColor: "rgba(1, 39, 135, 0.4)"
  },
  {
    name: "Large Corporations",
    size: 10,
    fill: "rgba(1, 39, 135, 0.1)",
    textColor: "rgba(1, 39, 135, 0.6)"
  },
  {
    name: "The Missing Middle (SMEs)",
    size: 10,
    fill: "#ff6a00",
    textColor: "#fff",
    highlight: true
  }
];

const CustomContent = (props: any) => {
  const { x, y, width, height, index, name, highlight } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: props.fill,
          stroke: highlight ? '#fff' : 'rgba(1,39,135,0.1)',
          strokeWidth: 2,
          transition: 'all 0.3s ease'
        }}
      />
      {width > 50 && height > 30 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={props.textColor}
          fontSize={highlight ? 16 : 12}
          fontWeight={highlight ? 800 : 500}
          className="font-display uppercase tracking-widest"
        >
          {name}
        </text>
      )}
    </g>
  );
};

export function Slide04MissingMiddle() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col md:flex-row premium-bg-cream overflow-hidden relative">
      <div className="absolute top-0 right-1/4 w-[60vh] h-[60vh] bg-brand-orange/5 mix-blend-multiply rounded-full blur-[120px]" />

      <div className="w-full md:w-[45%] h-full flex flex-col justify-center px-10 md:px-24 z-10">
        <motion.div initial="hidden" animate={animState} variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
        }}>
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-6">
            80% of employment.<br />
            <span className="text-brand-orange font-light">Less than 10% reach scale.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-brand-navy/80 font-primary leading-relaxed mb-6">
            Micro enterprises die before becoming SMEs. SMEs can&apos;t fuel the economy without growing.
          </motion.p>
          
          <motion.div variants={fadeUp} className="bg-brand-navy/5 border-l-4 border-brand-orange p-6 mt-8 relative overflow-hidden group rounded-r-sm">
            <div className="absolute inset-0 bg-brand-orange/10 group-hover:bg-brand-orange/20 transition-colors" />
            <p className="font-display font-medium text-xl text-brand-navy relative z-10 space-y-2">
              <span className="block">Churchwin Trading is in the zone that changes this.</span>
              <span className="block text-brand-orange">Building the Missing Middle from the inside.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full md:w-[55%] h-full flex items-center justify-center relative p-12">
        <motion.div 
          initial="hidden" animate={animState} variants={fadeUp}
          className="w-full max-w-xl aspect-[4/3] bg-white/40 backdrop-blur-md border border-brand-navy/10 rounded-2xl p-10 flex flex-col relative shadow-2xl my-auto"
        >
          <div className="mb-8">
            <h3 className="text-brand-navy/40 font-display text-[10px] tracking-[0.2em] uppercase font-bold mb-1">
              Market Distribution Infrastructure
            </h3>
            <p className="text-brand-navy font-display font-bold text-xl">The Missing Middle Gap</p>
          </div>

          <div className="flex-1 w-full min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <Treemap
                data={msmeData}
                dataKey="size"
                aspectRatio={4 / 3}
                stroke="#fff"
                content={<CustomContent />}
              >
                <RechartsTooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                    border: 'none', 
                    borderRadius: '8px', 
                    boxShadow: '0 10px 25px -5px rgba(1,39,135,0.1)' 
                  }}
                />
              </Treemap>
            </ResponsiveContainer>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-brand-navy/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-orange rounded-full" />
              <span className="text-[10px] font-display font-bold text-brand-navy/60 uppercase tracking-widest">Churchwin Target Zone</span>
            </div>
            <p className="text-[10px] font-primary font-medium text-brand-navy/40 italic">
              Source: IFC MSME Country Indicators
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
