"use client";
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export function ProgressBar({ total }: { total: number }) {
  const swiper = useSwiper();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!swiper) return;
    const updateProgress = () => {
      setProgress(swiper.progress * 100);
    };
    
    swiper.on("slideChange", updateProgress);
    swiper.on("progress", updateProgress);
    updateProgress();
    
    return () => {
      swiper.off("slideChange", updateProgress);
      swiper.off("progress", updateProgress);
    };
  }, [swiper]);

  return (
    <div className="absolute bottom-0 left-0 h-1.5 w-full bg-brand-white/10 z-[100] pointer-events-none">
      <div 
        className="h-full bg-brand-orange transition-all duration-300 ease-out"
        style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
      />
    </div>
  );
}
