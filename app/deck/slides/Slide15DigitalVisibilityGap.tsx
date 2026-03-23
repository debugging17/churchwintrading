import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Search, Globe, MousePointer2, AlertCircle } from "lucide-react";
import Image from "next/image";
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, Tooltip } from "recharts";
import { competitorTrafficData } from "@/data/charts";
import { CompetitorModal } from "../components/CompetitorModal";

export function Slide15DigitalVisibilityGap({ isActive: _isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);
  const [selectedCompetitor, setSelectedCompetitor] = useState<any | null>(null);

  // Map data for Recharts
  const chartData = competitorTrafficData.map(c => ({
    name: c.competitor.split(' ')[0], // Short name for the axis
    fullName: c.competitor,
    value: c.traffic,
    fill: c.fill,
    original: c
  }));

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      <CompetitorModal 
        competitor={selectedCompetitor} 
        onClose={() => setSelectedCompetitor(null)} 
      />
      
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="w-full h-full relative"
        >
          <Image
            src="/images/visual_supremacy/organic_retail_aisle.png"
            alt="Market Awareness"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/40 via-brand-navy/20 to-brand-navy/60" />
          <div className="absolute inset-0 bg-brand-navy/30" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        animate={animState}
        variants={staggerContainer}
        className="w-full max-w-[90rem] mx-auto my-auto z-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Headline and Analysis */}
          <div className="w-full lg:w-[45%]">
            <motion.div variants={fadeUp} className="border-l-[6px] border-brand-orange pl-8 py-2 mb-10">
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase mb-6">
                The Visibility<br />
                <span className="text-brand-orange italic">Paradox.</span>
              </h2>
              <p className="text-xl text-white/60 font-primary max-w-xl leading-relaxed">
                The demand exists. The buyers are searching. Churchwin Trading currently captures <span className="text-white font-bold">zero</span> of it.
              </p>
            </motion.div>

            <div className="space-y-6">
              {[
                { 
                  label: "Market Demand", 
                  title: "$40.8B Global Organic Market", 
                  desc: "2,400+ monthly US searches for 'shea butter wholesale' alone.",
                  icon: Search
                },
                { 
                  label: "Execution Gap", 
                  title: "1/260th Visibility", 
                  desc: "We have the superior supply infrastructure, but lack the client acquisition engine.",
                  icon: AlertCircle
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeUp}
                  className="bg-brand-navy/40 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 flex items-start gap-6 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <h3 className="text-white font-display text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: The Data Gap Chart */}
          <motion.div 
            variants={fadeUp} 
            className="w-full lg:w-[55%] bg-brand-navy/60 backdrop-blur-3xl border border-white/10 rounded-[48px] p-8 md:p-12 relative overflow-hidden flex flex-col min-h-[500px]"
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex justify-between items-start mb-12">
                <div>
                  <h3 className="text-brand-orange text-[11px] font-black uppercase tracking-[0.4em] mb-2">Web Visibility Deficit</h3>
                  <p className="text-white/40 text-sm font-primary">Average Monthly Visitors (B2B Traffic)</p>
                </div>
                <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 flex items-center gap-2">
                   <Globe className="w-3 h-3 text-white/40" />
                   <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">Industry Audit 2026</span>
                </div>
              </div>

              <div className="flex-grow w-full mb-6">
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={chartData} layout="vertical" margin={{ left: 40, right: 80 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false}
                      tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 13, fontWeight: 900 }}
                      width={120}
                    />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                      contentStyle={{ backgroundColor: '#012787', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      labelStyle={{ color: '#f47920', fontWeight: 'bold', marginBottom: '4px' }}
                      itemStyle={{ color: '#ffffff' }}
                      formatter={(value: any) => [Number(value).toLocaleString(), "Visits"]}
                    />
                    <Bar 
                      dataKey="value" 
                      radius={[0, 12, 12, 0]} 
                      barSize={50}
                      onClick={(_data, index) => setSelectedCompetitor(chartData[index].original)}
                      className="cursor-pointer"
                    >
                      {chartData.map((entry, index) => (
                        <Cell 
                          key={`cell-${index}`} 
                          fill={entry.fill} 
                          className="hover:opacity-80 transition-opacity"
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white text-3xl font-display font-black tracking-tighter italic uppercase">
                    ~200 <span className="text-white/20 not-italic">vs</span> 52,900+
                  </p>
                  <p className="text-white/40 text-[10px] font-black uppercase mt-1 tracking-[0.2em]">Monthly Organic Traffic Deficiency</p>
                </div>
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-3 text-brand-orange">
                      <MousePointer2 className="w-5 h-5 animate-bounce" />
                      <span className="text-2xl font-display font-black tracking-tighter uppercase italic">Interactive</span>
                   </div>
                   <p className="text-white/20 text-[9px] font-black uppercase tracking-widest">Click bars for verifiable data</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}

