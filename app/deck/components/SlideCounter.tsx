"use client";
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";

export function SlideCounter({ total }: { total: number }) {
  const swiper = useSwiper();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!swiper) return;
    const updateIndex = () => setCurrent(swiper.activeIndex + 1);
    
    // Listen to real-time events
    swiper.on("slideChange", updateIndex);
    updateIndex(); // Initial set
    
    return () => {
      swiper.off("slideChange", updateIndex);
    };
  }, [swiper]);

  const formatNum = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="absolute bottom-8 left-10 z-[100] font-display text-sm tracking-widest text-brand-white/80 pointer-events-none mix-blend-difference">
      {formatNum(current)} <span className="text-brand-white/40 mx-1">/</span> {formatNum(total)}
    </div>
  );
}
