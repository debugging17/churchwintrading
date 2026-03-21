"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";
import { Target, MousePointer2 } from "lucide-react";
import { ToolVideoModal } from "../components/ToolVideoModal";

export function Slide16B2BPipeline() {
  const animState = useSlideEnter(100);

  const pipeline = [
    { id: "apollo", image: "/assets/images/sales-engine/apollo.png", name: "APOLLO.IO", action: "DATABASE GENERATION", desc: "Sourcing 500+ ICP-matched prospects based on botanical demand signals." },
    { id: "linkedin", image: "/assets/images/sales-engine/linkedin.png", name: "LINKEDIN SALES NAV", action: "WARM-UP REACH", desc: "Strategic connection with R&D and Procurement leads in EU/US markets." },
    { id: "instantly", image: "/assets/images/sales-engine/instantly.png", name: "INSTANTLY.AI", action: "PERSONALIZED SEQUENCING", desc: "High-deliverability 4-touch sequences maintaining 60%+ open rates." },
    { id: "mailchimp", image: "/assets/images/sales-engine/mailchimp.png", name: "MAILCHIMP", action: "NURTURE LOOP", desc: "Monthly 'Churchwin Origins' content educating buyers on supply stability." }
  ];

  const [selectedTool, setSelectedTool] = React.useState<{name: string, action: string} | null>(null);

  return (
    <div className="w-full h-full flex flex-col py-8 md:py-12 px-10 md:px-24 bg-brand-cream relative overflow-hidden pb-[var(--footer-height)]">
      {/* Cinematic architectural overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#012787 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 my-auto z-10">
        
        {/* Left Side: Pitch */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <motion.h2 variants={slideFromLeft} className="font-display text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-4 uppercase tracking-tighter">
            The B2B <br />
            <span className="text-brand-orange italic font-light">Demand Engine.</span>
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-brand-navy/70 font-primary border-l-2 border-brand-navy/20 pl-6 mb-8 italic">
            Converting digital visibility into locked institutional revenue. 
          </motion.p>

          <div className="grid grid-cols-1 gap-4">
            {[
              { title: "CRM Visibility", desc: "Real-time tracking of buyer pipeline, from sample request to L/C opening.", icon: Target },
              { label: "Traceability Protocol", desc: "Digital verification of nut origin, worker fair pay, and refining timestamps.", icon: "🔗" },
              { label: "Compliance Vault", desc: "Instant digital access to COA, MSDS, and Organic certificates for every batch.", icon: "📂" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeUp}
                className="p-6 bg-white border border-brand-navy/10 rounded-2xl shadow-sm hover:border-brand-orange transition-all group"
              >
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-orange text-lg">
                      {typeof item.icon === 'string' ? item.icon : <item.icon className="w-5 h-5" />}
                   </div>
                   <div>
                      <h4 className="font-display font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                        {item.title || item.label}
                      </h4>
                      <p className="text-xs font-primary text-brand-navy/60">
                        {item.desc}
                      </p>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: The Tool Stack */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center relative">
          <div className="grid grid-cols-2 gap-4 w-full">
            {pipeline.map((tool, idx) => (
              <motion.div
                key={tool.id}
                variants={fadeUp}
                onClick={() => setSelectedTool({ name: tool.name, action: tool.action })}
                className="group relative bg-white border border-brand-navy/10 rounded-3xl p-6 shadow-sm hover:border-brand-orange hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 relative grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100">
                      <Image src={tool.image} alt={tool.name} fill className="object-contain" />
                   </div>
                   <div className="w-8 h-8 rounded-full bg-brand-navy/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <MousePointer2 className="w-4 h-4 text-brand-orange" />
                   </div>
                </div>
                
                <h4 className="font-display font-black text-xs text-brand-navy/30 group-hover:text-brand-orange uppercase tracking-widest mb-2 transition-colors">
                  {tool.name}
                </h4>
                <p className="font-primary text-[11px] leading-relaxed text-brand-navy/60 group-hover:text-brand-navy transition-colors">
                  {tool.desc}
                </p>

                <div className="mt-auto pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[10px] font-black uppercase text-brand-orange tracking-tighter">View Visualization</span>
                   <div className="h-[1px] flex-1 bg-brand-orange/20" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-8 p-6 bg-brand-navy text-white rounded-3xl shadow-xl relative overflow-hidden border-b-4 border-brand-orange">
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <Target className="w-16 h-16 text-brand-orange" />
             </div>
             <p className="text-xs uppercase tracking-[0.4em] text-brand-orange font-black mb-2">Outcome</p>
             <h3 className="text-xl font-display font-bold mb-4 tracking-tight leading-tight">100% Digital Traceability from Outreach to Agreement.</h3>
             <div className="flex items-center gap-6">
                <div>
                   <p className="text-white/40 text-[9px] uppercase font-black mb-1">Lead Conversion</p>
                   <p className="text-2xl font-display font-black text-brand-orange">12%</p>
                </div>
                <div className="w-[1px] h-8 bg-white/10" />
                <div>
                   <p className="text-white/40 text-[9px] uppercase font-black mb-1">Contract Velocity</p>
                   <p className="text-2xl font-display font-black">+40%</p>
                </div>
             </div>
          </motion.div>
        </div>

        {/* Video Popover */}
        <ToolVideoModal 
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          toolName={selectedTool?.name || ""}
          toolAction={selectedTool?.action || ""}
        />

      </motion.div>
    </div>
  );
}
