"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Zap, Activity, TrendingUp, Search } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { UnifiedVideoModal } from "../components/UnifiedVideoModal";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

const revenueEngineScript = [
  "The Journey Begins: Apollo.io Identifies Hyper-Targeted Intent",
  "Outreach Automation: Multi-Channel Engagement at Scale",
  "Precision Qualification: Identifying High-Value Conversion Points",
  "The Harvest: CRM-Driven Revenue Acceleration",
  "The Outcome: 3.5x Predictive Growth and Sustained Revenue Velocity"
];

const trafficData = [
  { name: "Week 0", traffic: 12000, comp1: 15000, comp2: 14000 },
  { name: "Week 2", traffic: 18000, comp1: 16000, comp2: 15500 },
  { name: "Week 4", traffic: 24000, comp1: 15500, comp2: 15000 },
  { name: "Week 6", traffic: 38000, comp1: 17000, comp2: 16000 },
  { name: "Week 8", traffic: 45000, comp1: 16500, comp2: 15800 },
  { name: "Week 10", traffic: 58000, comp1: 17500, comp2: 16200 },
];

export function Slide15DigitalVisibility({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <div className="w-full h-full flex flex-col pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] pb-[var(--footer-height)] px-10 md:px-24 bg-brand-cream relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row h-full">
          {/* Content Side */}
          <div className="w-full md:w-[45%] flex flex-col justify-center py-12 relative z-10">
            <motion.div initial="hidden" animate={animState} variants={staggerContainer} className="space-y-10">
              <div className="space-y-4">
                <motion.span variants={slideFromLeft} className="text-brand-orange font-black uppercase tracking-[0.3em] text-[10px]">Strategic Revenue Drive</motion.span>
                <motion.h2 variants={slideFromLeft} className="text-4xl md:text-6xl font-display font-black text-brand-navy leading-[0.9] uppercase tracking-tighter">
                  THE REVENUE <br />
                  <span className="text-brand-orange">ENGINE.</span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-lg text-brand-navy/70 font-primary italic max-w-md border-l-2 border-brand-orange/20 pl-6">
                  Removing the "black box" from African export trade by digitizing demand generation and sales heroics.
                </motion.p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <GlassCard delay={0.3} className="p-5 border border-brand-navy/5 bg-white/40">
                    <div className="flex items-center gap-3 mb-2">
                       <Search className="w-4 h-4 text-brand-orange" />
                       <span className="text-brand-navy font-bold font-primary text-xs uppercase tracking-wider">Search Intent</span>
                    </div>
                    <p className="text-[11px] text-brand-navy/60 font-primary font-medium italic leading-relaxed">
                      "Shea Butter Wholesale", "Ethical Cocoa Sourcing"
                    </p>
                  </GlassCard>

                  {/* Apollo.io / Revenue Engine Trigger */}
                  <GlassCard 
                    delay={0.5} 
                    className="p-5 border-l-4 border-l-brand-orange cursor-pointer hover:bg-brand-orange/5 transition-colors group"
                    onClick={() => setIsModalOpen(true)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-brand-orange fill-brand-orange/20" />
                        <span className="text-brand-navy font-bold font-primary text-xs uppercase tracking-wider">Lead Engine</span>
                      </div>
                      <div className="px-1.5 py-0.5 rounded bg-brand-orange text-white text-[8px] font-black tracking-tighter uppercase">Live</div>
                    </div>
                    <p className="text-[11px] text-brand-navy font-black underline decoration-brand-orange/30 underline-offset-4 group-hover:text-brand-orange transition-colors">
                      Visualize apollo.io integration →
                    </p>
                  </GlassCard>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual / Dashboard Side */}
          <div className="w-full md:w-[55%] flex items-center justify-center p-8 md:p-12 relative">
            <motion.div 
              initial="hidden" 
              animate={animState} 
              variants={fadeUp} 
              className="w-full h-full max-w-2xl bg-white border border-brand-navy/5 rounded-[2.5rem] shadow-[0_3rem_5rem_-1.5rem_rgba(0,0,0,0.12)] p-8 md:p-12 overflow-hidden relative flex flex-col"
            >
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
                    <Area type="monotone" dataKey="comp1" stroke="#012787" strokeOpacity={0.1} strokeWidth={2} fill="transparent" />
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
                <div className="p-4 bg-brand-navy/5 rounded-2xl text-left">
                  <div className="flex items-center gap-2 mb-2 text-brand-navy/40">
                    <Activity className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-tight">Acquisition Cost</span>
                  </div>
                  <p className="text-xl font-display font-bold text-brand-navy tracking-tight">~$420</p>
                  <p className="text-[10px] text-brand-orange font-bold">Per Lead</p>
                </div>
                
                <div className="p-4 bg-brand-navy/5 rounded-2xl text-left">
                  <div className="flex items-center gap-2 mb-2 text-brand-navy/40">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] uppercase font-bold tracking-tight">Multiplier</span>
                  </div>
                  <p className="text-xl font-display font-bold text-brand-navy tracking-tight">15x</p>
                </div>

                <div className="p-4 border-2 border-brand-orange/20 rounded-2xl relative overflow-hidden text-left">
                  <div className="flex items-center gap-2 mb-2 text-brand-orange font-bold">
                    <span className="text-[10px] uppercase font-bold tracking-tight">Prospects</span>
                  </div>
                  <p className="text-xl font-display font-bold text-brand-navy tracking-tight">500:5</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <UnifiedVideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        toolName="THE REVENUE ENGINE" 
        toolAction="Automated B2B Lead-to-Revenue Pipeline"
      />
    </>
  );
}
