"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Target } from "lucide-react";
import { UnifiedVideoModal } from "../components/UnifiedVideoModal";
import { DigitalStackGrid } from "../components/DigitalStackGrid";

gsap.registerPlugin(useGSAP);

export function Slide16B2BPipeline({ isActive }: { isActive: boolean }) {
  const container = useRef<HTMLDivElement>(null);
  const [selectedTool, setSelectedTool] = useState<{name: string, action: string, logo: string, video?: string} | null>(null);

  const pipeline = [
    { id: "apollo", image: "/assets/images/sales-engine/apollo.png", name: "APOLLO.IO", action: "DATABASE GENERATION", video: "/assets/videos/homepage-hero.510b8371.webm" },
    { id: "linkedin", image: "/assets/images/sales-engine/linkedin.png", name: "LINKEDIN SALES NAV", action: "WARM-UP REACH", video: "/assets/videos/linkedin.mp4" },
    { id: "instantly", image: "/assets/images/sales-engine/instantly.png", name: "INSTANTLY.AI", action: "PERSONALIZED SEQUENCING", video: "/assets/videos/instantlyai.mp4" },
    { id: "mailchimp", image: "/assets/images/sales-engine/mailchimp.png", name: "CHURCHWIN PARTNER NETWORK", action: "RETENTION & REFERRAL", video: "/assets/videos/mailchimp.mp4" }
  ];

  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.from(".pipe-marker", { x: -30, opacity: 0, duration: 0.6 })
      .from(".pipe-title", { y: 20, opacity: 0, stagger: 0.2 }, "-=0.2")
      .from(".pipe-badge", { scale: 0.8, opacity: 0, stagger: 0.1 }, "-=0.4")
      .from(".stack-container", { scale: 0.98, opacity: 0, y: 30 }, "-=0.2")
      .from(".outcome-card", { 
        x: 40, 
        opacity: 0, 
        duration: 1,
        ease: "back.out(1.2)" 
      }, "-=0.4");

  }, { dependencies: [isActive], scope: container });

  return (
    <div ref={container} className="w-full h-full flex flex-col pt-[calc(3rem+var(--header-height,0px))] md:pt-[calc(4rem+var(--header-height,0px))] pb-[var(--footer-height)] px-8 md:px-20 bg-brand-cream relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#012787 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="w-full max-w-7xl mx-auto my-auto flex flex-col gap-8 z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-4">
          <div className="max-w-2xl">
            <h2 className="pipe-title font-display text-4xl md:text-5xl font-black text-brand-navy leading-[0.9] uppercase tracking-tighter mb-2">
              The B2B <br />
              <span className="text-brand-orange italic">Demand Engine.</span>
            </h2>
            <p className="pipe-title text-sm md:text-base text-brand-navy/70 font-primary italic border-l-2 border-brand-orange/20 pl-4 max-w-lg">
              Converting digital visibility into locked institutional revenue. 
            </p>
          </div>

          <div className="flex gap-2 mb-2">
            {[
              { title: "CRM Visibility", icon: "🎯" },
              { title: "Traceability", icon: "🔗" },
              { title: "Vault", icon: "📂" }
            ].map((item, idx) => (
              <div key={idx} className="pipe-badge flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-brand-navy/10 shadow-sm">
                 <span className="text-[10px]">{item.icon}</span>
                 <span className="text-[8px] font-black uppercase tracking-widest text-brand-navy">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
           <div className="lg:col-span-8 stack-container">
              <DigitalStackGrid 
                isActive={isActive} 
                onToolSelect={(id) => {
                  const tool = pipeline.find(p => p.id === id);
                  if (tool) setSelectedTool({ name: tool.name, action: tool.action, logo: tool.image, video: tool.video });
                }} 
              />
           </div>

           <div className="lg:col-span-4 flex flex-col h-full">
              <div className="outcome-card flex-1 p-6 md:p-8 bg-brand-navy text-white rounded-[2rem] shadow-2xl relative overflow-hidden border-b-8 border-brand-orange flex flex-col justify-center min-h-[300px] md:min-h-[360px]">
                 <div className="absolute top-0 right-0 p-5 opacity-10">
                    <Target className="w-10 h-10 text-brand-orange" />
                 </div>
                 <p className="text-[7px] uppercase tracking-[0.4em] text-brand-orange font-black mb-2">Strategic Outcome</p>
                 <h3 className="text-lg md:text-xl font-display font-black mb-4 tracking-tight leading-tight">100% Digital Traceability from Outreach to Agreement.</h3>
                 <div className="space-y-4">
                    <div className="flex items-center gap-6">
                       <div>
                          <p className="text-white/40 text-[7px] uppercase font-black mb-0.5 tracking-widest">Qualified Leads</p>
                          <p className="text-2xl font-display font-black text-brand-orange">12/mo</p>
                       </div>
                       <div className="w-[1px] h-8 bg-white/10" />
                       <div>
                          <p className="text-white/40 text-[7px] uppercase font-black mb-0.5 tracking-widest">Conversion</p>
                          <p className="text-2xl font-display font-black text-brand-orange">22%</p>
                       </div>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                       <p className="text-white/40 text-[7px] uppercase font-black mb-0.5 tracking-widest">Target CAC</p>
                       <p className="text-2xl font-display font-black text-brand-orange">$420</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <UnifiedVideoModal 
        isOpen={!!selectedTool}
        onClose={() => setSelectedTool(null)}
        toolName={selectedTool?.name || ""}
        toolAction={selectedTool?.action || ""}
        videoSrc={selectedTool?.video}
      />
    </div>
  );
}
