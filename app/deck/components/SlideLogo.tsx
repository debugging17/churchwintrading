import React from 'react';
import Image from 'next/image';

export function SlideLogo() {
  return (
    <div className="absolute bottom-8 right-10 z-[100] flex items-center gap-3 pointer-events-none mix-blend-difference">
      <div className="relative w-8 h-8 opacity-90">
        <Image 
          src="/assets/images/churchwin_logo_new.png" 
          alt="Churchwin Trading Logo" 
          fill
          className="object-contain"
        />
      </div>
      <span className="font-display font-bold tracking-widest text-brand-white text-xs uppercase opacity-90">
        CHURCHWIN TRADING
      </span>
    </div>
  );
}
