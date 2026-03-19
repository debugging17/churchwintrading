"use client";
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FooterStackProps {
  total: number;
  currentOverride?: number;
}

export function FooterStack({ total, currentOverride }: FooterStackProps) {
  const swiper = useSwiper();
  const [current, setCurrent] = useState(currentOverride || 1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If we have an override (print mode), we don't need swiper listeners
    if (currentOverride) {
      setCurrent(currentOverride);
      setProgress((currentOverride / total) * 100);
      return;
    }

    if (!swiper) return;
    const update = () => {
      setCurrent(swiper.activeIndex + 1);
      setProgress(swiper.progress * 100);
    };

    swiper.on("slideChange", update);
    swiper.on("progress", update);
    update();

    return () => {
      swiper.off("slideChange", update);
      swiper.off("progress", update);
    };
  }, [swiper, currentOverride, total]);

  const formatNum = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="absolute bottom-0 left-0 w-full h-32 z-[100] pointer-events-none">
      {/* Global Contrast Vignette - ensures white text is visible on light slides */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-brand-navy/60 via-brand-navy/20 to-transparent z-[-1] pointer-events-none" />
      
      {/* --- Main Footer Layer --- */}
      <div className="flex items-end justify-between w-full h-full px-12 md:px-20 pb-10 md:pb-14">
        
        {/* Left: Slide Counter */}
        <div className="flex flex-col items-start gap-1 w-1/3">
          <span className="text-[0.6rem] font-display tracking-[0.4em] text-brand-white/40 uppercase font-black">
            Navigation
          </span>
          <div className="flex items-center gap-4 text-brand-white font-display text-sm tracking-[0.2em] font-bold">
            <span className="opacity-100 drop-shadow-sm">{formatNum(current)}</span>
            <div className="w-10 h-[1px] bg-brand-white/20" />
            <span className="opacity-40 drop-shadow-sm">{formatNum(total)}</span>
          </div>
        </div>

        {/* Center: Spacer or Attribution */}
        <div className="w-1/3 text-center">
        </div>

        {/* Right: Global Brand Mark */}
        <div className="w-1/3 flex justify-end">
          <div className="relative w-28 h-8 opacity-80 hover:opacity-100 transition-opacity">
            <Image 
              src="/assets/images/churchwin_logo_new.png" 
              alt="Churchwin Logo" 
              fill
              className="object-contain grayscale invert brightness-200"
            />
          </div>
        </div>

      </div>

      {/* --- Progress Bar Layer --- */}
      <div className="w-full h-[2px] bg-brand-white/10 rounded-full overflow-hidden relative">
        <motion.div 
          className="absolute left-0 top-0 h-full bg-brand-orange shadow-[0_0_8px_rgba(255,106,0,0.6)]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

    </div>
  );
}
