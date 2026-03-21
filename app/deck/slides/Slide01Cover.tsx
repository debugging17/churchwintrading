"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { DeckVideo } from "../components/DeckVideo";

gsap.registerPlugin(useGSAP);

export function Slide01Cover({ isActive }: { isActive: boolean }) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!isActive) return;

    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

    tl.from(".hero-logo", { 
        y: 60, 
        opacity: 0, 
        scale: 0.8, 
        filter: "blur(10px)",
        duration: 1.5 
      })
      .from(".hero-title", { 
        y: 40, 
        opacity: 0, 
        stagger: 0.1,
        filter: "blur(5px)"
      }, "-=0.8")
      .from(".hero-divider", { 
        scaleX: 0, 
        opacity: 0, 
        duration: 2,
        ease: "power4.inOut"
      }, "-=1")
      .from(".hero-subline", { 
        y: 20, 
        opacity: 0,
        duration: 1,
        letterSpacing: "1em"
      }, "-=1.2")
      .from(".presenter-info", { 
        x: 40, 
        opacity: 0, 
        duration: 1.5 
      }, "-=1.5")
      .from(".bottom-bar", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 3,
        ease: "power2.inOut"
      }, 0);

  }, { dependencies: [isActive], scope: container });

  return (
    <div ref={container} className="w-full h-full flex flex-col relative bg-brand-navy pb-[calc(var(--footer-height)+2rem)] pt-[calc(4rem+var(--header-height,0px))] md:pt-[calc(5rem+var(--header-height,0px))] overflow-y-auto">
      {/* === LAYER 0: Full-bleed cinematic video background === */}
      <DeckVideo 
        src="/assets/videos/apply_cinematic,_8k_202603181845.mp4" 
        isActive={isActive} 
      />

      {/* === LAYER 1: Dynamic Brand Overlays === */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 via-transparent to-transparent z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-brand-navy/20 z-[2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent z-[3] pointer-events-none" />

      {/* === LAYER 2: Centered Content Stack === */}
      <div className="w-full h-full flex flex-col justify-start items-center pt-24 md:pt-32 lg:pt-40 px-10 md:px-24 z-10 relative text-center">
        <div className="max-w-6xl flex flex-col items-center">
          {/* Brand Logo */}
          <div className="hero-logo mb-14 relative w-48 h-12 md:w-64 md:h-16 bg-white rounded-xl overflow-hidden shadow-xl flex items-center justify-center p-3">
             <div className="relative w-full h-full">
               <Image 
                  src="/assets/images/churchwin_logo_new.png" 
                  alt="Churchwin Trading Logo" 
                  fill
                  className="object-contain" 
                  priority
                />
             </div>
          </div>

          {/* Strategic Tagline */}
          <div className="mb-6">
            <h1 className="hero-title text-2xl md:text-4xl lg:text-5xl font-display font-black text-brand-white leading-tight tracking-tight drop-shadow-2xl uppercase max-w-5xl">
              PROVIDING GLOBAL ACCESS TO AFRICAN PRODUCTS
            </h1>
          </div>

          <div className="flex flex-col items-center">
             <div className="hero-divider w-12 h-[1px] bg-brand-orange mb-8" />
             <p className="hero-subline text-sm md:text-base lg:text-lg text-brand-white/90 font-primary font-bold tracking-[0.3em] drop-shadow-lg uppercase px-4">
              WHILE CARING FOR CONSUMER WELL-BEING
             </p>
          </div>
        </div>
      </div>

      {/* === LAYER 3: Presenter Info === */}
      <div className="presenter-info absolute bottom-12 right-16 md:right-24 z-20 text-right opacity-60">
         <p className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-brand-white/50 font-semibold">
          Presented By
        </p>
        <p className="text-xs md:text-sm font-display font-black text-brand-white/70 tracking-[0.25em] mt-1 uppercase">
          CEPHAS KUDALOR
        </p>
      </div>

      {/* Subtle bottom orange brand bar */}
      <div className="bottom-bar absolute bottom-0 left-0 w-full h-[1px] bg-brand-orange/40 z-20" />
    </div>
  );
}
