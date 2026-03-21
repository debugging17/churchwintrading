"use client";
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

export const RemotionValueGap: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width } = useVideoConfig();

  const spr = spring({
    frame,
    fps,
    config: {
      damping: 15,
      stiffness: 70,
    },
  });

  const widthFactor = interpolate(spr, [0, 1], [0, 1]);
  const splitPoint = 10; // 10% captured locally

  return (
    <div style={{ width: '100%', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ 
        display: 'flex', 
        width: '100%', 
        height: '40px', 
        backgroundColor: 'rgba(255, 255, 255, 0.1)', 
        borderRadius: '20px', 
        overflow: 'hidden',
        position: 'relative',
        border: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        {/* African Value Capture (10%) */}
        <div style={{ 
          width: `${splitPoint * widthFactor}%`, 
          height: '100%', 
          backgroundColor: '#F26522', // Brand Orange
          transition: 'width 0.1s linear'
        }} />
        
        {/* Global Value Capture (90%) */}
        <div style={{ 
          width: `${(100 - splitPoint) * widthFactor}%`, 
          height: '100%', 
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          transition: 'width 0.1s linear'
        }} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', opacity: widthFactor }}>
        <div style={{ color: '#F26522', fontSize: '12px', fontWeight: 'bold' }}>
          AFRICA: {Math.round(splitPoint * widthFactor)}% VALUE
        </div>
        <div style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px', fontWeight: 'bold' }}>
          GLOBAL: {Math.round((100 - splitPoint) * widthFactor)}% VALUE
        </div>
      </div>
    </div>
  );
};
