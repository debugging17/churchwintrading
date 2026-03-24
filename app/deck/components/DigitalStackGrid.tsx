"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  AreaChart, Area, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";
import { 
  Mail, Clock, UserCheck, MessageSquare, 
  CheckCircle2, Globe 
} from "lucide-react";
import Image from "next/image";




// --- HELPERS ---

const BrowserWindow = ({ children, title, url, className = "", bgColor = "bg-white" }: any) => (
  <div className={`rounded-[1.5rem] overflow-hidden border-2 border-brand-navy/20 shadow-xl flex flex-col h-full ${className} ${bgColor}`}>
    {/* Browser Header */}
    <div className="px-3 py-1.5 bg-brand-navy/5 flex items-center justify-between border-b border-brand-navy/5">
      <div className="flex gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c940]" />
      </div>
      <div className="flex items-center gap-2">
        {title && <span className="text-[10px] font-black text-brand-navy/40 uppercase tracking-widest">{title}</span>}
      </div>
      <div className="text-[9px] text-brand-navy/30 font-mono truncate max-w-[100px]">{url}</div>
    </div>
    {/* Browser Content */}
    <div className="flex-1 relative overflow-hidden min-h-[100px] md:min-h-[120px]">
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
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ff6a00 0.5px, transparent 0.5px)', backgroundSize: '10px 10px' }} />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-end mb-4">
          <div className="flex items-baseline gap-2">
            <div>
              <p className="text-[9px] uppercase font-black text-brand-navy/30 tracking-[0.2em] mb-1">Total Leads Identified</p>
              <p className="text-3xl font-display font-black text-brand-orange leading-none">34,218</p>
            </div>
            <div className="px-2 py-1 bg-green-50 rounded-lg border border-green-100 flex items-center gap-1">
               <span className="text-[10px] text-green-600">▲</span>
               <span className="text-[10px] font-black text-green-600">12%</span>
            </div>
          </div>
        </div>
        <div className="h-14 w-full mb-2 min-h-[56px]">
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
          <div key={i} className="flex items-center justify-between p-2 bg-brand-navy/10 rounded-lg border border-brand-navy/10">
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
       <div className="p-4 rounded-2xl border border-brand-navy/10 bg-white shadow-sm flex items-center gap-4 transition-transform hover:translate-x-1 duration-300">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
            <Mail className="w-5 h-5 text-blue-500" />
          </div>
          <div className="flex-1">
             <p className="text-sm font-black text-brand-navy">Step 1: Introduction</p>
             <p className="text-[10px] text-brand-navy/50 mt-0.5 font-medium">Automatic dispatch on system import</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-[9px] font-black uppercase tracking-wider border border-green-100">Live</span>
       </div>
       <div className="p-4 rounded-2xl border border-brand-navy/10 bg-white shadow-sm flex items-center gap-4 transition-transform hover:translate-x-1 duration-300">
          <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-orange-500" />
          </div>
          <div className="flex-1">
             <p className="text-sm font-black text-brand-navy">Step 2: Follow-up</p>
             <p className="text-[10px] text-brand-navy/50 mt-0.5 font-medium">Wait period: 5-7 business days</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[9px] font-black uppercase tracking-wider border border-brand-orange/20">Queued</span>
       </div>
    </div>
  </BrowserWindow>
);

// --- MAILCHIMP CARD ---

const MailchimpCard = () => {
  const openRate = [{ value: 42 }, { value: 58 }];
  const clickRate = [{ value: 12 }, { value: 88 }];
  
  return (
    <BrowserWindow url="mailchimp.com" bgColor="bg-[#FFF9E9] border-brand-orange/20">
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
         <h4 className="text-[10px] font-black text-brand-navy mb-4 tracking-widest uppercase">Q3 Lead Nurture Campaign</h4>
         
         <div className="flex gap-4 w-full justify-center bg-white/40 p-3 rounded-2xl border border-brand-navy/5 shadow-inner">
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={openRate}
                        innerRadius={22}
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
               <p className="text-[8px] font-black text-brand-navy/60 mt-2 uppercase tracking-widest">Open Rate</p>
            </div>
            
            <div className="flex flex-col items-center">
               <div className="w-16 h-16 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={clickRate}
                        innerRadius={22}
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
               <p className="text-[8px] font-black text-brand-navy/60 mt-2 uppercase tracking-widest">Click Rate</p>
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
       <div className="relative mb-6">
          <div className="w-20 h-20 rounded-full bg-brand-navy/10 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
             <div className="w-14 h-14 bg-brand-navy/5 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-brand-navy/40" />
             </div>
          </div>
          <div className="absolute bottom-0 right-0 w-7 h-7 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
             <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
       </div>
       <h4 className="text-[16px] font-black text-brand-navy mb-1 tracking-tight">Prospect Connected</h4>
        <p className="text-xs text-brand-navy/60 font-black mb-5 tracking-wide">VP Procurement @ L&rsquo;Oréal</p>
       
       <button className="w-full bg-[#0a66c2] hover:bg-[#004182] text-white py-3 px-6 rounded-full flex items-center justify-center gap-3 transition-all shadow-lg active:scale-95 duration-200 group">
          <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
          <span className="text-xs font-black uppercase tracking-widest text-white">Direct Message</span>
       </button>
    </div>
  </BrowserWindow>
);

// --- GRID EXPORT ---

export function DigitalStackGrid({ isActive, onToolSelect }: { isActive: boolean, onToolSelect?: (toolId: string) => void }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isActive) return;

    gsap.from(".stack-item", {
      opacity: 0,
      y: 30,
      scale: 0.9,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
  }, { dependencies: [isActive], scope: container });

  return (
    <div ref={container} className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-4 md:gap-5 w-full h-full min-h-[500px]">
      {/* Apollo */}
      <div onClick={() => onToolSelect?.("apollo")} className="stack-item group cursor-pointer active:scale-[0.98] transition-all relative h-full min-h-[220px] flex flex-col">
        <ApolloCard />
        <div className="absolute inset-0 bg-brand-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 text-white rounded-xl z-20 border border-brand-orange/30">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">Apollo.io</p>
          <p className="text-sm font-primary leading-relaxed opacity-95">Sourcing 500+ ICP-matched prospects daily based on botanical demand signals and procurement patterns.</p>
        </div>
      </div>
      
      {/* Instantly */}
      <div onClick={() => onToolSelect?.("instantly")} className="stack-item group cursor-pointer active:scale-[0.98] transition-all relative h-full min-h-[220px] flex flex-col">
        <InstantlyCard />
        <div className="absolute inset-0 bg-brand-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 text-white rounded-xl z-20 border border-brand-orange/30">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">Instantly.ai</p>
          <p className="text-sm font-primary leading-relaxed opacity-95">High-deliverability 4-touch automated sequences maintaining 60%+ open rates for cold market penetration.</p>
        </div>
      </div>

      {/* Mailchimp */}
      <div onClick={() => onToolSelect?.("mailchimp")} className="stack-item group cursor-pointer active:scale-[0.98] transition-all relative h-full min-h-[220px] flex flex-col">
        <MailchimpCard />
        <div className="absolute inset-0 bg-brand-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 text-white rounded-xl z-20 border border-brand-orange/30">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">Churchwin Network</p>
          <p className="text-sm font-primary leading-relaxed opacity-95">Educating buyers on supply stability and cooperative ESG impact through the 'Churchwin Origins' series.</p>
        </div>
      </div>

      {/* LinkedIn */}
      <div onClick={() => onToolSelect?.("linkedin")} className="stack-item group cursor-pointer active:scale-[0.98] transition-all relative h-full min-h-[220px] flex flex-col">
        <LinkedInCard />
        <div className="absolute inset-0 bg-brand-navy/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-8 text-white rounded-xl z-20 border border-brand-orange/30">
          <p className="text-[10px] font-black text-brand-orange uppercase tracking-[0.3em] mb-3">Sales Navigator</p>
          <p className="text-sm font-primary leading-relaxed opacity-95">Strategic 1-to-1 connection with R&D and Procurement leads within the EU and US cosmetic sectors.</p>
        </div>
      </div>
    </div>
  );
}
