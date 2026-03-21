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
    <div className="w-full h-full flex flex-col justify-center py-6 md:py-10 px-8 md:px-20 bg-brand-cream pb-[calc(var(--footer-height)+4rem)] pt-[calc(var(--header-height,0px)+1rem)] relative overflow-hidden">
      {/* Cinematic architectural overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#012787 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-[90rem] mx-auto flex flex-col gap-5 z-10">
        
        {/* Top: Pitch */}
        <div className="w-full flex flex-col md:flex-row items-end justify-between gap-6 mb-1">
          <div className="max-w-xl">
            <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl lg:text-5xl font-extrabold text-brand-navy leading-none mb-2 uppercase tracking-tighter">
              The B2B <br />
              <span className="text-brand-orange italic font-light">Demand Engine.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-sm md:text-base text-brand-navy/70 font-primary border-l-2 border-brand-navy/20 pl-6 italic mb-0 leading-relaxed">
              Converting digital visibility into locked institutional revenue. 
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="flex gap-2">
            {[
              { title: "CRM Visibility", icon: Target },
              { title: "Traceability Protocol", icon: "🔗" },
              { title: "Compliance Vault", icon: "📂" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-brand-navy/10 shadow-sm">
                 <span className="text-brand-orange text-[10px]">{typeof item.icon === 'string' ? item.icon : <item.icon className="w-3 h-3" />}</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-brand-navy">{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Middle: The Tool Stack Visualization */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
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
              <motion.div variants={fadeUp} className="h-full p-6 bg-brand-navy text-white rounded-[2rem] shadow-2xl relative overflow-hidden border-b-4 border-brand-orange flex flex-col justify-center min-h-[350px]">
                 <div className="absolute top-0 right-0 p-6 opacity-10">
                    <Target className="w-12 h-12 text-brand-orange" />
                 </div>
                 <p className="text-[8px] uppercase tracking-[0.4em] text-brand-orange font-black mb-2">Strategic Outcome</p>
                 <h3 className="text-base md:text-lg font-display font-bold mb-3 tracking-tight leading-tight">100% Digital Traceability from Outreach to Agreement.</h3>
                 <div className="space-y-3">
                    <div className="flex items-center gap-6">
                       <div>
                          <p className="text-white/40 text-[7px] uppercase font-black mb-1 tracking-widest">Qualified Leads</p>
                          <p className="text-xl md:text-2xl font-display font-black text-brand-orange">12/mo</p>
                       </div>
                       <div className="w-[1px] h-6 bg-white/10" />
                       <div>
                          <p className="text-white/40 text-[7px] uppercase font-black mb-1 tracking-widest">Conversion</p>
                          <p className="text-xl md:text-2xl font-display font-black text-brand-orange">22%</p>
                       </div>
                    </div>
                    <div className="pt-3 border-t border-white/10">
                       <p className="text-white/40 text-[7px] uppercase font-black mb-1 tracking-widest">Target CAC</p>
                       <p className="text-xl md:text-2xl font-display font-black text-brand-orange">$420</p>
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
