"use client";
import React from 'react';
import { Player } from '@remotion/player';
import { RemotionTextEffect } from './RemotionTextEffect';

export const RemotionPlayerWrapper: React.FC<{ text: string; color?: string }> = ({ text, color }) => {
  return (
    <div className="w-full flex justify-center py-4">
      <Player
        component={RemotionTextEffect}
        durationInFrames={120}
        compositionWidth={1200}
        compositionHeight={200}
        fps={60}
        loop
        autoPlay
        inputProps={{ text, color }}
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
