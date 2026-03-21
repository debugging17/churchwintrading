"use client";
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ToolAnimationProps {
  toolName: string;
  toolAction: string;
}

export const ToolAnimation: React.FC<ToolAnimationProps> = ({ toolName, toolAction }) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const progress = interpolate(frame, [20, 100], [0, 100], {
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ 
      flex: 1, 
      backgroundColor: '#000', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'system-ui, sans-serif'
    }}>
      {/* Background Grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      {/* Main Container */}
      <div style={{ 
        transform: `scale(${entrance})`, 
        opacity: entrance,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10
      }}>
        <div style={{ 
          fontSize: '24px', 
          fontWeight: 'black', 
          textTransform: 'uppercase', 
          letterSpacing: '0.2em',
          color: '#ff6a00',
          marginBottom: '10px'
        }}>
          {toolName}
        </div>
        
        <div style={{ 
          fontSize: '48px', 
          fontWeight: 'bold', 
          textAlign: 'center',
          maxWidth: '80%',
          lineHeight: '1.1',
          marginBottom: '40px'
        }}>
          {toolAction}
        </div>

        {/* Progress Bar Container */}
        <div style={{ 
          width: '400px', 
          height: '4px', 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '20px'
        }}>
          <div style={{ 
            width: `${progress}%`, 
            height: '100%', 
            backgroundColor: '#ff6a00',
            boxShadow: '0 0 20px #ff6a00'
          }} />
        </div>

        {/* Data Points */}
        <div style={{ display: 'flex', gap: '40px' }}>
          {[1, 2, 3].map((i) => {
            const pointOpacity = interpolate(frame, [30 + i * 10, 50 + i * 10], [0, 1], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            });
            return (
              <div key={i} style={{ opacity: pointOpacity, textAlign: 'center' }}>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>
                  Metric 0{i}
                </div>
                <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                  {Math.round(progress * (i * 1.5))}%
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => {
        const x = interpolate(frame + i * 10, [0, 120], [0, 100]);
        const y = (Math.sin(frame / 20 + i) * 50) + 50;
        return (
          <div key={i} style={{
            position: 'absolute',
            left: `${(i * 5) % 100}%`,
            top: `${y}%`,
            width: '2px',
            height: '2px',
            backgroundColor: '#ff6a00',
            opacity: 0.3,
            borderRadius: '50%'
          }} />
        );
      })}
    </div>
  );
};
