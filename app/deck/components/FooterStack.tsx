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

  // Identify slides with light backgrounds (White/Cream) to switch footer color to navy
  const lightSlides = [1, 4, 5, 7, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21]; 
  const isLight = lightSlides.includes(current - 1);
  const textColor = isLight ? "text-brand-navy" : "text-brand-white";
  const labelColor = isLight ? "text-brand-navy/70" : "text-brand-white/40";
  const lineColor = isLight ? "bg-brand-navy/20" : "bg-brand-white/20";
  const progressBg = isLight ? "bg-brand-navy/5" : "bg-brand-white/10";

  return (
    <div className="absolute bottom-0 left-0 w-full h-20 z-[100] pointer-events-none">
      {/* Global Contrast Vignette - ensures white text is visible on dark slides */}
      {!isLight && (
        <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-brand-navy/40 via-brand-navy/10 to-transparent z-[-1] pointer-events-none" />
      )}
      
      {/* --- Main Footer Layer --- */}
      <div className="flex items-end justify-between w-full h-full px-12 md:px-20 pb-6 md:pb-8">
        
        {/* Left: Slide Counter */}
        <div className="flex flex-col items-start gap-1 w-1/3">
          <span className={`text-[0.6rem] font-display tracking-[0.4em] ${labelColor} uppercase font-black`}>
            Navigation
          </span>
          <div className={`flex items-center gap-4 ${textColor} font-display text-xs tracking-[0.2em] font-bold`}>
            <span className="opacity-100 drop-shadow-sm">{formatNum(current)}</span>
            <div className={`w-10 h-[1px] ${lineColor}`} />
            <span className="opacity-40 drop-shadow-sm">{formatNum(total)}</span>
          </div>
        </div>

        {/* Center: Removed Attribution/Logo for cleanliness */}
        <div className="w-1/3">
        </div>

        <div className="w-1/3 flex justify-end">
        </div>

      </div>

      {/* --- Progress Bar Layer --- */}
      <div className={`w-full h-[2px] ${progressBg} rounded-full overflow-hidden relative`}>
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
