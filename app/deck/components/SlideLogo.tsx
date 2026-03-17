import React from 'react';

export function SlideLogo() {
  return (
    <div className="absolute bottom-8 right-10 z-[100] flex items-center gap-2 pointer-events-none mix-blend-difference">
      {/* Abstract mark: simple orange indicator bridging missing middle */}
      <div className="relative w-5 h-5">
        <div className="absolute inset-y-0 left-0 w-1.5 bg-brand-white rounded-sm opacity-60" />
        <div className="absolute inset-y-0 right-0 w-1.5 bg-brand-white rounded-sm opacity-60" />
        <div className="absolute inset-y-1 left-2 w-1 bg-brand-orange rounded-sm" />
      </div>
      <span className="font-display font-bold tracking-widest text-brand-white text-xs uppercase opacity-90 ml-1">
        CHURCHWIN TRADING
      </span>
    </div>
  );
}
