"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Zap, Search, ArrowRight } from "lucide-react";
import { GlassCard } from "../components/GlassCard";
import { UnifiedVideoModal } from "../components/UnifiedVideoModal";

gsap.registerPlugin(useGSAP);

export function Slide16RevenueEngine({ isActive }: { isActive: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.from(".rev-heading", { y: -30, opacity: 0, duration: 1 })
      .from(".rev-subheading", { opacity: 0, duration: 1 }, "-=0.6")
      .from(".rev-card", { 
        y: 40, 
        opacity: 0, 
        stagger: 0.2,
        ease: "back.out(1.2)" 
      }, "-=0.4")
      .from(".rev-cta", { 
        scale: 0.9, 
        opacity: 0, 
        duration: 1 
      }, "-=0.2");

  }, { dependencies: [isActive], scope: container });

  return (
    <div ref={container} className="w-full h-full flex flex-col pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] pb-[var(--footer-height)] px-10 md:px-24 bg-brand-cream relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-4xl mx-auto flex flex-col justify-center h-full z-10">
        <div className="space-y-10 text-center md:text-left">
          <div className="space-y-4">
            <span className="rev-subheading text-brand-orange font-black uppercase tracking-[0.3em] text-[10px] block">Strategic Revenue Drive</span>
            <h2 className="rev-heading text-4xl md:text-7xl font-display font-black text-brand-navy leading-[0.9] uppercase tracking-tighter">
              THE REVENUE <br />
              <span className="text-brand-orange">ENGINE.</span>
            </h2>
            <p className="rev-subheading text-lg text-brand-navy/70 font-primary italic max-w-2xl mx-auto md:mx-0 border-l-2 border-brand-orange/20 pl-6">
              Removing the "black box" from African export trade by digitizing demand generation and sales heroics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rev-card">
              <GlassCard className="p-8 border border-brand-navy/5 bg-white/40 h-full">
                <div className="flex items-center gap-3 mb-4">
                   <Search className="w-5 h-5 text-brand-orange" />
                   <span className="text-brand-navy font-bold font-primary text-sm uppercase tracking-wider">Search Intent</span>
                </div>
                <p className="text-sm text-brand-navy/60 font-primary font-medium italic leading-relaxed">
                  "Shea Butter Wholesale", "Ethical Cocoa Sourcing"
                </p>
                <div className="mt-6 pt-6 border-t border-brand-navy/5">
                  <p className="text-[10px] font-black uppercase text-brand-navy/40 tracking-widest">Target Intent</p>
                  <p className="text-xl font-display font-black text-brand-navy">High-Value B2B</p>
                </div>
              </GlassCard>
            </div>

            <div className="rev-card">
              {/* Apollo.io / Revenue Engine Trigger */}
              <GlassCard 
                className="p-8 border-l-8 border-l-brand-orange cursor-pointer hover:bg-brand-orange/5 transition-colors group h-full"
                onClick={() => setIsModalOpen(true)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-brand-orange fill-brand-orange/20" />
                    <span className="text-brand-navy font-bold font-primary text-sm uppercase tracking-wider">Lead Engine</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-brand-orange text-white text-[10px] font-black tracking-tighter uppercase">Live</div>
                </div>
                <p className="text-sm text-brand-navy/60 font-primary leading-relaxed mb-6">
                  Automated B2B Lead-to-Revenue Pipeline using apollo.io integration.
                </p>
                <div className="flex items-center gap-2 text-brand-navy font-black text-sm underline decoration-brand-orange/30 underline-offset-4 group-hover:text-brand-orange transition-colors">
                  Visualize apollo.io integration <ArrowRight className="w-4 h-4" />
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="rev-cta pt-6 border-t border-brand-navy/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <p className="text-xs text-brand-navy/40 uppercase font-black tracking-widest mb-1">Predictive Growth</p>
              <p className="text-3xl font-display font-black text-brand-navy">3.5x Multiplier</p>
            </div>
            <div className="text-left">
              <p className="text-xs text-brand-navy/40 uppercase font-black tracking-widest mb-1">Target CAC</p>
              <p className="text-3xl font-display font-black text-brand-navy">~$420</p>
            </div>
            <div className="text-left">
              <p className="text-xs text-brand-navy/40 uppercase font-black tracking-widest mb-1">Conversion</p>
              <p className="text-3xl font-display font-black text-brand-navy">22%</p>
            </div>
          </div>
        </div>
      </div>

      <UnifiedVideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        toolName="THE REVENUE ENGINE" 
        toolAction="Automated B2B Lead-to-Revenue Pipeline"
      />
    </div>
  );
}
