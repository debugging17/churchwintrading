"use client";
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const RemotionTextEffect: React.FC<{ text: string; color?: string }> = ({ text, color = '#F26522' }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = text.split(' ');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
      {words.map((word, i) => {
        const delay = i * 5;
        const spr = spring({
          frame: frame - delay,
          fps,
          config: {
            damping: 12,
            stiffness: 100,
          },
        });

        const scale = spr;
        const opacity = spr;
        const y = interpolate(spr, [0, 1], [20, 0]);

        return (
          <span
            key={i}
            style={{
              display: 'inline-block',
              color,
              fontSize: '48px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-display)',
              transform: `scale(${scale}) translateY(${y}px)`,
              opacity,
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};
