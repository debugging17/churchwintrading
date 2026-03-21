"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, Truck, BarChart3, Users } from "lucide-react";

gsap.registerPlugin(useGSAP);

export function Slide11InstitutionalReadiness({ isActive }: { isActive: boolean }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 0.8 } });

    tl.from(".ready-heading", { y: -30, opacity: 0, duration: 1 })
      .from(".ready-subheading", { opacity: 0, duration: 1 }, "-=0.6")
      .from(".pillar-card", { 
        y: 40, 
        opacity: 0, 
        stagger: 0.15,
        ease: "back.out(1.2)" 
      }, "-=0.4")
      .from(".pillar-point", { 
        x: -10, 
        opacity: 0, 
        stagger: 0.05,
        duration: 0.4
      }, "-=0.5")
      .from(".moat-statement", { 
        y: 20, 
        opacity: 0, 
        duration: 1 
      }, "-=0.2")
      .from(".moat-badge", { 
        scale: 0.8, 
        opacity: 0, 
        duration: 1.2,
        ease: "elastic.out(1, 0.5)"
      }, "-=0.8");

  }, { dependencies: [isActive], scope: container });

  const pillars = [
    {
      title: "Supply Infrastructure",
      icon: Users,
      points: ["11 Women-led cooperatives", "22% Margin Preservation", "Organic & Fair Trade Compliance"],
      accent: "bg-brand-orange/10 border-brand-orange/20"
    },
    {
      title: "Demand Engine",
      icon: BarChart3,
      points: ["4-Stage B2B Pipeline", "Digital Gravity Strategy", "Targeting ~$420 CAC"],
      accent: "bg-brand-navy/5 border-brand-navy/10"
    },
    {
      title: "Quality Governance",
      icon: ShieldCheck,
      points: ["Institutional COA/MSDS", "Dual-stage filtration", "Batch-level traceability"],
      accent: "bg-brand-orange/10 border-brand-orange/20"
    },
    {
      title: "Export Logistics",
      icon: Truck,
      points: ["Direct EU/US Channels", "Enterprise-Scale Digital Visibility", "Real-time dispatch audit"],
      accent: "bg-brand-navy/5 border-brand-navy/10"
    }
  ];

  return (
    <div ref={container} className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-brand-white pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto relative">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-orange/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-navy/5 blur-[120px] rounded-full" />

      <div className="w-full max-w-7xl mx-auto my-auto flex flex-col z-10">
        {/* HEADING */}
        <div className="mb-8 text-center">
          <h2 className="ready-heading text-4xl md:text-6xl font-display font-black text-brand-navy leading-tight mb-2 tracking-tighter uppercase">
            Institutional <span className="text-brand-orange">Readiness.</span>
          </h2>
          <p className="ready-subheading text-brand-navy/70 text-lg font-primary max-w-2xl mx-auto italic">
            Connecting fragmented rural production to the global board&apos;s procurement standards.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <div 
              key={i}
              className={`pillar-card p-8 rounded-[32px] border ${pillar.accent} hover:shadow-2xl transition-all duration-500 group text-left`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <pillar.icon className="w-7 h-7 text-brand-orange group-hover:text-white" />
              </div>
              <h3 className="text-xl font-display font-black text-brand-navy mb-4 tracking-tight group-hover:text-brand-orange transition-colors uppercase">
                {pillar.title}
              </h3>
              <ul className="space-y-3">
                {pillar.points.map((pt, j) => (
                  <li key={j} className="pillar-point flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    <span className="text-sm font-primary text-brand-navy/80 leading-snug">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM MOAT STATEMENT */}
        <div className="mt-10 pt-8 border-t border-brand-navy/10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="moat-statement max-w-2xl text-center lg:text-left">
             <p className="text-brand-navy font-display font-black text-xl md:text-3xl lg:text-4xl uppercase tracking-tighter leading-[0.9]">
                We remove the <span className="text-brand-orange italic font-light">compliance friction</span> <br />
                from African origin trade.
             </p>
          </div>
          <div className="moat-badge px-10 py-6 bg-brand-navy text-white rounded-[2rem] shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/10 blur-2xl rounded-full -mr-10 -mt-10" />
             <p className="text-[10px] font-black uppercase text-brand-orange tracking-[0.4em] mb-3 text-left">Moat Status</p>
             <p className="text-base md:text-lg font-primary font-bold leading-tight max-w-xs text-left">
                Operational infrastructure <br />
                that cannot be coded away.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}
