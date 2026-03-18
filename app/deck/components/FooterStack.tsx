"use client";
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface FooterStackProps {
  total: number;
}

export function FooterStack({ total }: FooterStackProps) {
  const swiper = useSwiper();
  const [current, setCurrent] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
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
  }, [swiper]);

  const formatNum = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="absolute bottom-0 left-0 w-full z-[100] flex flex-col pointer-events-none px-10 pb-6">
      
      {/* --- Main Footer Layer --- */}
      <div className="flex items-end justify-between w-full mb-6">
        
        {/* Left: Slide Counter */}
        <div className="flex flex-col items-start gap-1">
          <span className="text-[10px] font-display tracking-[0.2em] text-brand-white/40 uppercase">
            Navigation
          </span>
          <div className="flex items-center gap-4 text-brand-white font-display text-sm tracking-widest">
            <span className="opacity-100">{formatNum(current)}</span>
            <div className="w-8 h-[1px] bg-brand-white/20" />
            <span className="opacity-40">{formatNum(total)}</span>
          </div>
        </div>

        {/* Center: Attribution */}
        <div className="flex flex-col items-center gap-2 group transition-all duration-300">
           <div className="flex items-center gap-3">
             <span className="text-[10px] font-display tracking-[0.3em] text-brand-white/40 uppercase">
               Presented By
             </span>
             <div className="w-6 h-[1px] bg-brand-orange/40" />
             <span className="text-xs font-display font-medium text-brand-white tracking-widest uppercase">
                Cephas Kudalor
             </span>
           </div>
           
           <div className="flex items-center gap-2 mt-1">
             <span className="text-[9px] font-display tracking-[0.1em] text-brand-white/30 lowercase italic">
               designed by
             </span>
             <span className="text-[10px] font-display font-bold tracking-[0.2em] text-brand-orange uppercase">
               OrangeOrange.agency
             </span>
           </div>
        </div>

        {/* Right: Brand Lockup */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end gap-1">
            <span className="text-[10px] font-display tracking-[0.2em] text-brand-white/40 uppercase">
              Corporate
            </span>
            <span className="text-xs font-display font-bold tracking-[0.2em] text-brand-white uppercase">
              CHURCHWIN TRADING
            </span>
          </div>
          <div className="relative w-8 h-8 opacity-80 mix-blend-screen">
             <Image 
                src="/assets/images/churchwin_logo_new.png" 
                alt="Logo" 
                fill 
                className="object-contain"
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
