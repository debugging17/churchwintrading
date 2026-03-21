"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  AreaChart, Area, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";
import { 
  Mail, Clock, UserCheck, MessageSquare, 
  CheckCircle2, Globe, Search 
} from "lucide-react";
import Image from "next/image";

// --- HELPERS ---

const BrowserWindow = ({ children, title, url, className = "", bgColor = "bg-white" }: any) => (
  <div className={`rounded-xl overflow-hidden border border-brand-navy/10 shadow-lg flex flex-col h-full ${className} ${bgColor}`}>
    {/* Browser Header */}
    <div className="px-3 py-1.5 bg-brand-navy/5 flex items-center justify-between border-b border-brand-navy/5">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <div className="w-2 h-2 rounded-full bg-[#28c940]" />
      </div>
      <div className="flex items-center gap-2">
        {title && <span className="text-[10px] font-black text-brand-navy/40 uppercase tracking-widest">{title}</span>}
      </div>
      <div className="text-[9px] text-brand-navy/30 font-mono truncate max-w-[100px]">{url}</div>
    </div>
    {/* Browser Content */}
    <div className="flex-1 relative overflow-hidden">
      {children}
    </div>
  </div>
);

// --- APOLLO CARD ---

const apolloData = [
  { x: 0, y: 5000 },
  { x: 1, y: 8000 },
  { x: 2, y: 15000 },
  { x: 3, y: 12000 },
  { x: 4, y: 22000 },
  { x: 5, y: 28000 },
  { x: 6, y: 34218 },
];

const ApolloCard = () => (
  <BrowserWindow title="Apollo.io" url="apollo.io/search">
    <div className="p-3 flex flex-col h-full relative">
      {/* Subtle Dot Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff6a00 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[8px] uppercase font-bold text-brand-navy/40 tracking-wider">Total Leads</p>
            <p className="text-xl font-display font-black text-brand-orange">34,218</p>
          </div>
        </div>
        <div className="h-14 w-full mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={apolloData}>
            <defs>
              <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff6a00" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ff6a00" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="y" 
              stroke="#ff6a00" 
              strokeWidth={3} 
              fillOpacity={1} 
              fill="url(#colorLeads)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2 mt-auto">
        {[
          { role: "R&D Director", tag: "Cosmetics" },
          { role: "Head Formulator", tag: "Skincare" },
          { role: "VP Procurement", tag: "Beauty" }
        ].map((lead, i) => (
          <div key={i} className="flex items-center justify-between p-2 bg-brand-navy/5 rounded-lg border border-brand-navy/5">
             <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-brand-navy/10 flex items-center justify-center">
                  <UserCheck className="w-3 h-3 text-brand-navy/40" />
                </div>
                <span className="text-[9px] font-bold text-brand-navy">{lead.role}</span>
             </div>
             <div className="flex items-center gap-4">
                <span className="text-[8px] text-[#28c940] font-bold">Verified</span>
                <span className="text-[8px] text-brand-navy/40 uppercase font-bold">{lead.tag}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  </BrowserWindow>
);

// --- INSTANTLY CARD ---

const InstantlyCard = () => (
  <BrowserWindow title="Instantly" url="app.instantly.ai">
    <div className="p-3 flex flex-col h-full gap-2">
       <div className="p-3 rounded-xl border border-brand-navy/5 bg-white shadow-sm flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
            <Mail className="w-4 h-4 text-blue-500" />
          </div>
          <div className="flex-1">
             <p className="text-xs font-bold text-brand-navy">Step 1: Introduction</p>
             <p className="text-[9px] text-brand-navy/40 mt-0.5">Sent immediately on import</p>
          </div>
          <span className="px-2 py-0.5 rounded bg-green-50 text-green-600 text-[8px] font-black uppercase tracking-tighter">Active</span>
       </div>
       <div className="p-3 rounded-xl border border-brand-navy/5 bg-white shadow-sm flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
            <Clock className="w-4 h-4 text-orange-500" />
          </div>
          <div className="flex-1">
             <p className="text-xs font-bold text-brand-navy">Step 2: Follow-up</p>
             <p className="text-[9px] text-brand-navy/40 mt-0.5">Wait 7 days</p>
          </div>
          <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-600 text-[8px] font-black uppercase tracking-tighter">Queued</span>
       </div>
    </div>
  </BrowserWindow>
);

// --- MAILCHIMP CARD ---

const MailchimpCard = () => {
  const openRate = [{ value: 42 }, { value: 58 }];
  const clickRate = [{ value: 12 }, { value: 88 }];
  
  return (
    <BrowserWindow url="mailchimp.com" bgColor="bg-[#ffe01b]">
    <div className="p-3 flex flex-col items-center justify-center h-full text-center">
       <div className="w-8 h-8 relative mb-2">
            <Image 
              src="/assets/images/sales-engine/mailchimp.png" 
              alt="Mailchimp" 
              fill 
              className="object-contain" 
              priority
            />
         </div>
         <h4 className="text-[8px] font-black text-brand-navy mb-3 tracking-widest uppercase">Q3 Lead Nurture Campaign</h4>
         
         <div className="flex gap-4 w-full justify-center bg-white/20 backdrop-blur-md p-3 rounded-2xl">
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={openRate}
                        innerRadius={20}
                        outerRadius={30}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={0}
                        dataKey="value"
                        animationDuration={1500}
                      >
                        <Cell fill="#012787" />
                        <Cell fill="rgba(0,0,0,0.05)" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-black text-brand-navy">42%</span>
                  </div>
               </div>
               <p className="text-[7px] font-black text-brand-navy/60 mt-1 uppercase tracking-tighter">Open Rate</p>
            </div>
            
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={clickRate}
                        innerRadius={20}
                        outerRadius={30}
                        startAngle={90}
                        endAngle={-270}
                        paddingAngle={0}
                        dataKey="value"
                        animationDuration={1500}
                      >
                        <Cell fill="#000" />
                        <Cell fill="rgba(0,0,0,0.05)" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-black text-brand-navy">12%</span>
                  </div>
               </div>
               <p className="text-[7px] font-black text-brand-navy/60 mt-1 uppercase tracking-tighter">Click Rate</p>
            </div>
         </div>
      </div>
    </BrowserWindow>
  );
};

// --- LINKEDIN CARD ---

const LinkedInCard = () => (
  <BrowserWindow title="LinkedIn" url="linkedin.com">
    <div className="p-3 flex flex-col items-center justify-center h-full text-center">
       <div className="relative mb-4">
          <div className="w-16 h-16 rounded-full bg-brand-navy/5 border-2 border-white shadow-md flex items-center justify-center overflow-hidden">
             <div className="w-10 h-10 bg-brand-navy/10 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-brand-navy/20" />
             </div>
          </div>
          <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
             <CheckCircle2 className="w-3 h-3 text-white" />
          </div>
       </div>
       <h4 className="text-[14px] font-black text-brand-navy mb-1 tracking-tight">Prospect Connected</h4>
       <p className="text-[8px] text-brand-navy/40 font-medium mb-3">VP Procurement @ L&rsquo;Or&eacute;al</p>
       
       <button className="w-full bg-[#0a66c2] hover:bg-[#004182] text-white py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg active:scale-95 duration-200">
          <MessageSquare className="w-4 h-4" />
          <span className="text-[11px] font-black uppercase tracking-widest text-white/90">Message</span>
       </button>
    </div>
  </BrowserWindow>
);

// --- GRID EXPORT ---

export function DigitalStackGrid({ isActive, onToolSelect }: { isActive: boolean, onToolSelect?: (toolId: string) => void }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 15 
      } 
    }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate={isActive ? "show" : "hidden"}
      className="grid grid-cols-2 gap-2 w-full h-full min-h-[400px]"
    >
      <motion.div variants={item} onClick={() => onToolSelect?.("apollo")} className="group cursor-pointer active:scale-[0.98] transition-transform relative">
        <ApolloCard />
        <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-white rounded-xl">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-2">Apollo.io</p>
          <p className="text-xs font-primary leading-relaxed opacity-90">Sourcing 500+ ICP-matched prospects based on botanical demand signals.</p>
        </div>
      </motion.div>
      <motion.div variants={item} onClick={() => onToolSelect?.("instantly")} className="group cursor-pointer active:scale-[0.98] transition-transform relative">
        <InstantlyCard />
        <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-white rounded-xl">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-2">Instantly.ai</p>
          <p className="text-xs font-primary leading-relaxed opacity-90">High-deliverability 4-touch sequences maintaining 60%+ open rates.</p>
        </div>
      </motion.div>
      <motion.div variants={item} onClick={() => onToolSelect?.("mailchimp")} className="group cursor-pointer active:scale-[0.98] transition-transform relative">
        <MailchimpCard />
        <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-white rounded-xl">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-2">Mailchimp</p>
          <p className="text-xs font-primary leading-relaxed opacity-90">Monthly 'Churchwin Origins' content educating buyers on supply stability.</p>
        </div>
      </motion.div>
      <motion.div variants={item} onClick={() => onToolSelect?.("linkedin")} className="group cursor-pointer active:scale-[0.98] transition-transform relative">
        <LinkedInCard />
        <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-white rounded-xl">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-2">LinkedIn Sales Nav</p>
          <p className="text-xs font-primary leading-relaxed opacity-90">Strategic connection with R&D and Procurement leads in EU/US markets.</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
