"use client";
import React from 'react';
import { Player } from '@remotion/player';
import { RemotionValueGap } from './RemotionValueGap';

export const RemotionValueGapWrapper: React.FC = () => {
  return (
    <div className="w-full flex justify-center py-4 bg-brand-white/5 rounded-xl border border-white/10 p-4">
      <Player
        component={RemotionValueGap}
        durationInFrames={120}
        compositionWidth={1200}
        compositionHeight={150}
        fps={60}
        loop
        autoPlay
        style={{
          width: '100%',
          height: 'auto',
          background: 'transparent',
        }}
        controls={false}
      />
    </div>
  );
};
