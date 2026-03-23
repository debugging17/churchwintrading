"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, TrendingUp, Info, ExternalLink, Activity } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, YAxis } from "recharts";

interface CompetitorData {
  competitor: string;
  traffic: number;
  fill: string;
  trend: { month: string; visits: number }[];
  insights: string;
  reportUrl?: string;
}

interface CompetitorModalProps {
  competitor: CompetitorData | null;
  onClose: () => void;
}

export function CompetitorModal({ competitor, onClose }: CompetitorModalProps) {
  if (!competitor) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[5000] flex items-center justify-center p-4 md:p-12 overflow-hidden pointer-events-auto">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-navy/60 backdrop-blur-xl pointer-events-auto"
        />

        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-brand-navy-light text-white rounded-[2.5rem] overflow-hidden shadow-[0_32px_128px_rgba(0,0,0,0.5)] flex flex-col border border-white/10"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 bg-white/5 hover:bg-brand-orange text-white rounded-full flex items-center justify-center transition-all shadow-sm group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
              <div>
                <p className="text-brand-orange text-[10px] font-black uppercase tracking-[0.4em] mb-3">Market Shareholder Analysis</p>
                <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                  {competitor.competitor}
                </h2>
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Monthly Traffic</span>
                    <span className="text-3xl font-display font-black text-white">{competitor.traffic.toLocaleString()} <span className="text-lg text-white/30 font-medium">Visits</span></span>
                  </div>
                  <div className="h-10 w-[1px] bg-white/10 mx-2" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Market Status</span>
                    <span className="text-lg font-bold" style={{ color: competitor.fill }}>
                      {competitor.traffic > 10000 ? "Dominant Leader" : competitor.traffic > 1000 ? "Growing Challenger" : "Negligible Presence"}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:w-72">
                 <div className="flex items-center gap-2 mb-4 text-brand-orange">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Growth Trend</span>
                 </div>
                 <div className="h-24 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={competitor.trend}>
                        <defs>
                          <linearGradient id="modalTrendGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={competitor.fill} stopOpacity={0.5} />
                            <stop offset="95%" stopColor={competitor.fill} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <YAxis hide domain={['auto', 'auto']} />
                        <Area 
                          type="monotone" 
                          dataKey="visits" 
                          stroke={competitor.fill} 
                          strokeWidth={3} 
                          fillOpacity={1} 
                          fill="url(#modalTrendGradient)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch font-primary">
              <div className="bg-white/[0.03] border border-white/5 rounded-[2rem] p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Strategic Insights</h3>
                </div>
                <p className="text-white/60 leading-relaxed text-sm italic">
                  &quot;{competitor.insights}&quot;
                </p>
                {competitor.reportUrl && (
                  <button 
                    onClick={() => window.open(competitor.reportUrl, '_blank')}
                    className="mt-8 flex items-center gap-2 text-brand-orange hover:text-white transition-colors text-xs font-black uppercase tracking-widest"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Full Audit Report (SimilarWeb 2026)
                  </button>
                )}
              </div>

              <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-[2rem] p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center">
                    <Info className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-white">The Opportunity</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6 font-medium">
                  Closing this visibility gap represents moving from a secondary player to a <span className="text-white font-bold">prime B2B destination</span> in the global organic market.
                </p>
                <div className="mt-auto pt-6 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">Est. Revenue Impact</span>
                    <span className="text-xl font-display font-black text-brand-orange">+$150k <span className="text-xs font-medium">/ month</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
