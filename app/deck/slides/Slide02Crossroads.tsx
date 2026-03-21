"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ValueGapChart } from "../components/ValueGapChart";

gsap.registerPlugin(useGSAP);

export function Slide02Crossroads({ isActive }: { isActive: boolean }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1 } });

    tl.from(".section-marker", { x: -50, opacity: 0, duration: 0.8 })
      .from(".main-headline", { y: 60, opacity: 0, stagger: 0.1 }, "-=0.4")
      .from(".list-item", { 
        x: -30, 
        opacity: 0, 
        stagger: 0.2,
        duration: 0.8 
      }, "-=0.6")
      .from(".quote-card", { 
        x: -20, 
        opacity: 0, 
        duration: 1.2,
        borderLeftWidth: 0,
        ease: "expo.out"
      }, "-=0.4")
      .from(".chart-container", { 
        x: 100, 
        scale: 0.9, 
        opacity: 0, 
        duration: 1.5,
        filter: "blur(20px)",
        ease: "power2.out"
      }, "-=1.5");

  }, { dependencies: [isActive], scope: container });

  return (
    <div ref={container} className="w-full h-full flex relative overflow-hidden bg-brand-navy font-display">
      
      {/* === LAYER 0: Background === */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/backgrounds/industrial_crossroads.png" 
          alt="African Industrial Hub" 
          fill 
          className="object-cover brightness-[0.7] contrast-[1.1]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-brand-navy/30 mix-blend-multiply z-10" />
      </div>

      {/* === LAYER 1: Content === */}
      <div className="w-full h-full flex flex-col py-6 md:py-10 px-8 md:px-20 bg-transparent pb-[calc(var(--footer-height)+6rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto z-20 relative">
        <div className="w-full max-w-[100rem] mx-auto my-auto grid grid-cols-1 lg:grid-cols-[1fr,1.1fr] gap-4 md:gap-8 items-center">
          
          <div className="flex flex-col">
            <div className="section-marker flex items-center gap-[1rem] mb-[2rem] lg:mb-[3rem]">
               <span className="text-brand-orange text-[2rem] font-black tracking-tighter">01</span>
               <div className="w-[4rem] h-[2px] bg-brand-orange/60" />
               <p className="text-brand-white/60 text-[0.6rem] tracking-[0.5em] uppercase font-bold">The Strategic Context</p>
            </div>

            <h2 className="main-headline text-4xl md:text-5xl xl:text-7xl font-display font-black text-brand-white leading-[1.1] mb-8 lg:mb-10 tracking-tighter drop-shadow-2xl">
              Escaping the <br />
              <span className="text-brand-orange drop-shadow-sm italic">Commodity Trap.</span>
            </h2>

            <div className="space-y-6 lg:space-y-8 max-w-xl">
              {[
                { 
                  label: "Structural Volatility", 
                  sub: "33% local price volatility caused by unregulated export dependencies—unrefined shea prices saw year-to-date swings of $0.21 to $0.91/kg." 
                },
                { 
                  label: "The Infrastructure Gap", 
                  sub: "Africa produces 60% of Global Shea, but the 'Commodity Trap' ensures only <10% of total economic value is captured locally." 
                },
                { 
                  label: "Institutional Readiness", 
                  sub: "90% of value is captured by international refiners who own the 'Trust Infrastructure' (COSMOS/Fair Trade) required by Tier-1 buyers." 
                },
              ].map((pt, i) => (
                <div key={i} className="list-item flex flex-col gap-2">
                  <div className="flex items-start gap-5">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0 shadow-[0_0_8px_rgba(244,121,32,0.4)]" />
                    <div className="flex flex-col gap-1">
                      <span className="text-lg md:text-xl font-display font-bold text-brand-white tracking-tight">{pt.label}</span>
                      <p className="text-xs md:text-sm text-brand-white/60 leading-relaxed font-primary">{pt.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="quote-card mt-10 lg:mt-14 p-6 bg-brand-orange/[0.03] border-l-4 border-brand-orange/50 italic text-brand-white/70 text-lg md:text-xl font-medium max-w-lg leading-relaxed shadow-sm rounded-r-xl font-primary">
              &quot;This is not a resource problem. <span className="text-brand-white font-black not-italic">It is a systems problem.</span>&quot;
            </div>
          </div>

          <div className="flex justify-end relative h-full chart-container">
            <div className="w-full max-w-[50rem] min-h-[50vh] lg:min-h-[60vh] flex justify-center flex-col gap-6 bg-brand-navy/95 backdrop-blur-xl p-8 lg:p-10 rounded-[3rem] border border-white/10 shadow-[0_50px_120px_rgba(0,0,0,0.7)] relative overflow-visible">
              <div className="absolute top-1/2 -left-8 w-16 h-[2px] bg-gradient-to-r from-transparent via-brand-orange/40 to-brand-orange/60 blur-[1px] hidden xl:block" />
              <div className="space-y-3">
                 <p className="text-[0.75rem] font-display font-black tracking-[0.5em] text-brand-orange uppercase text-center">Visualizing the Gap</p>
                 <h3 className="text-3xl lg:text-5xl font-display font-black text-white leading-tight text-center tracking-tight">Where value vanishes.</h3>
              </div>
              <div className="py-2">
                <ValueGapChart />
              </div>
              <p className="text-[0.875rem] text-brand-white/40 font-primary leading-relaxed opacity-60 text-center max-w-[24rem] mx-auto">
                 The current model forces Africa to export raw potential, only to buy back the finished value at a 10x premium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
