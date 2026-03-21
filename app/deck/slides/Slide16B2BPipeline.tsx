"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Target, MousePointer2 } from "lucide-react";
import { ToolVideoModal } from "../components/ToolVideoModal";
import { DigitalStackGrid } from "../components/DigitalStackGrid";

export function Slide16B2BPipeline({ isActive }: { isActive: boolean }) {
  const animState = useSlideEnter(100);

  const pipeline = [
    { id: "apollo", image: "/assets/images/sales-engine/apollo.png", name: "APOLLO.IO", action: "DATABASE GENERATION", desc: "Sourcing 500+ ICP-matched prospects based on botanical demand signals." },
    { id: "linkedin", image: "/assets/images/sales-engine/linkedin.png", name: "LINKEDIN SALES NAV", action: "WARM-UP REACH", desc: "Strategic connection with R&D and Procurement leads in EU/US markets." },
    { id: "instantly", image: "/assets/images/sales-engine/instantly.png", name: "INSTANTLY.AI", action: "PERSONALIZED SEQUENCING", desc: "High-deliverability 4-touch sequences maintaining 60%+ open rates." },
    { id: "mailchimp", image: "/assets/images/sales-engine/mailchimp.png", name: "CHURCHWIN PARTNER NETWORK", action: "RETENTION & REFERRAL", desc: "Quarterly webinars and newsletters building a 30-50 client global ecosystem." }
  ];

  const [selectedTool, setSelectedTool] = React.useState<{name: string, action: string, logo: string} | null>(null);

  return (
    <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-cream pb-[calc(var(--footer-height)+2rem)] pt-[calc(2rem+var(--header-height,0px))] md:pt-[calc(3rem+var(--header-height,0px))] overflow-y-auto relative">
      {/* Cinematic architectural overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#012787 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-[90rem] mx-auto my-auto flex flex-col gap-8 z-10">
        
        {/* Top: Pitch */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-8 mb-4">
          <div className="max-w-2xl">
            <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-none mb-4 uppercase tracking-tighter">
              The B2B <br />
              <span className="text-brand-orange italic font-light">Demand Engine.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-navy/70 font-primary border-l-2 border-brand-navy/20 pl-6 italic mb-0">
              Converting digital visibility into locked institutional revenue. 
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex gap-4">
            {[
              { title: "CRM Visibility", icon: Target },
              { title: "Traceability Protocol", icon: "🔗" },
              { title: "Compliance Vault", icon: "📂" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-brand-navy/10 shadow-sm">
                 <span className="text-brand-orange text-xs">{typeof item.icon === 'string' ? item.icon : <item.icon className="w-3 h-4" />}</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-brand-navy">{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Middle: The Tool Stack Visualization */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           <div className="lg:col-span-8">
              <DigitalStackGrid 
                isActive={isActive} 
                onToolSelect={(id) => {
                  const tool = pipeline.find(p => p.id === id);
                  if (tool) setSelectedTool({ name: tool.name, action: tool.action, logo: tool.image });
                }} 
              />
           </div>

           <div className="lg:col-span-4 h-full">
              <motion.div variants={fadeUp} className="h-full p-8 bg-brand-navy text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden border-b-8 border-brand-orange flex flex-col justify-center">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Target className="w-20 h-20 text-brand-orange" />
                 </div>
                 <p className="text-[10px] uppercase tracking-[0.5em] text-brand-orange font-black mb-4">Strategic Outcome</p>
                 <h3 className="text-xl md:text-2xl font-display font-bold mb-6 tracking-tight leading-tight">100% Digital Traceability from Outreach to Agreement.</h3>
                 <div className="space-y-6">
                    <div className="flex items-center gap-6">
                       <div>
                          <p className="text-white/40 text-[8px] uppercase font-black mb-1 tracking-widest">Qualified Leads</p>
                          <p className="text-2xl md:text-3xl font-display font-black text-brand-orange">12/mo</p>
                       </div>
                       <div className="w-[1px] h-8 bg-white/10" />
                       <div>
                          <p className="text-white/40 text-[8px] uppercase font-black mb-1 tracking-widest">Conversion</p>
                          <p className="text-2xl md:text-3xl font-display font-black text-brand-orange">22%</p>
                       </div>
                    </div>
                    <div className="pt-6 border-t border-white/10">
                       <p className="text-white/40 text-[8px] uppercase font-black mb-1 tracking-widest">Target CAC</p>
                       <p className="text-2xl md:text-3xl font-display font-black text-brand-orange">$420</p>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>

      </motion.div>


      {/* Video Popover */}
      <ToolVideoModal 
        isOpen={!!selectedTool}
        onClose={() => setSelectedTool(null)}
        toolName={selectedTool?.name || ""}
        toolAction={selectedTool?.action || ""}
        logoSrc={selectedTool?.logo}
        subtitle="B2B Demand Engine Visualization"
      />
    </div>
  );
}
