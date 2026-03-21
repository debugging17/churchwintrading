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
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-[95rem] mx-auto my-auto flex flex-col lg:flex-row gap-12 lg:gap-24 z-10">
        
        {/* Left Side: Pitch */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-brand-navy leading-none mb-6 uppercase tracking-tighter">
            The B2B <br />
            <span className="text-brand-orange italic font-light">Demand Engine.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-brand-navy/70 font-primary border-l-2 border-brand-navy/20 pl-8 mb-12 italic">
            Converting digital visibility into locked institutional revenue. 
          </motion.p>

          <div className="grid grid-cols-1 gap-6">
            {[
              { title: "CRM Visibility", desc: "Real-time tracking of buyer pipeline, from sample request to L/C opening.", icon: Target },
              { title: "Traceability Protocol", desc: "Digital verification of nut origin, worker fair pay, and refining timestamps.", icon: "🔗" },
              { title: "Compliance Vault", desc: "Instant digital access to COA, MSDS, and Organic certificates for every batch.", icon: "📂" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="p-8 bg-white border border-brand-navy/10 rounded-[2rem] shadow-sm hover:border-brand-orange hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-orange text-xl">
                      {typeof item.icon === 'string' ? item.icon : <item.icon className="w-6 h-6" />}
                   </div>
                   <div>
                      <h4 className="font-display text-lg font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm font-primary text-brand-navy/60 mt-1">
                        {item.desc}
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: The Tool Stack Visualization */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center relative min-h-[600px]">
           <DigitalStackGrid 
             isActive={isActive} 
             onToolSelect={(id) => {
               const tool = pipeline.find(p => p.id === id);
               if (tool) setSelectedTool({ name: tool.name, action: tool.action, logo: tool.image });
             }} 
           />

           <motion.div variants={fadeUp} className="mt-12 p-8 bg-brand-navy text-white rounded-[2.5rem] shadow-2xl relative overflow-hidden border-b-8 border-brand-orange">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Target className="w-24 h-24 text-brand-orange" />
              </div>
              <p className="text-xs uppercase tracking-[0.5em] text-brand-orange font-black mb-4">Strategic Outcome</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 tracking-tight leading-tight max-w-2xl">100% Digital Traceability from Outreach to Agreement.</h3>
              <div className="flex items-center gap-8 md:gap-12">
                 <div>
                    <p className="text-white/40 text-[10px] uppercase font-black mb-2 tracking-widest">Qualified Leads</p>
                    <p className="text-3xl md:text-4xl font-display font-black text-brand-orange">12/mo</p>
                 </div>
                 <div className="w-[1px] h-12 bg-white/10" />
                 <div>
                    <p className="text-white/40 text-[10px] uppercase font-black mb-2 tracking-widest">Conversion</p>
                    <p className="text-3xl md:text-4xl font-display font-black text-brand-orange">22%</p>
                 </div>
                 <div className="w-[1px] h-12 bg-white/10" />
                 <div>
                    <p className="text-white/40 text-[10px] uppercase font-black mb-2 tracking-widest">Target CAC</p>
                    <p className="text-3xl md:text-4xl font-display font-black text-brand-orange">$420</p>
                 </div>
              </div>
           </motion.div>
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
