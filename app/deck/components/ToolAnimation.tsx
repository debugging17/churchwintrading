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

  const emailCount = Math.round(interpolate(frame, [20, 100], [0, 567], {
    extrapolateRight: 'clamp',
  }));

  const float = Math.sin(frame / 15) * 10;

  return (
    <div style={{ 
      flex: 1, 
      background: 'radial-gradient(circle, #FFD700 0%, #FFB900 100%)', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: '#1a1a1a',
      fontFamily: 'Inter, system-ui, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Subtle Ambient Glow */}
      <div style={{
        position: 'absolute',
        width: '150%',
        height: '150%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)',
        opacity: 0.5,
        transform: `translate(${Math.sin(frame / 50) * 50}px, ${Math.cos(frame / 60) * 50}px)`
      }} />

      {/* Main Pill Content */}
      <div style={{ 
        transform: `scale(${entrance}) translateY(${float}px)`, 
        opacity: entrance,
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        backgroundColor: '#FFFEF5',
        padding: '24px 48px',
        borderRadius: '100px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        zIndex: 10,
        border: '1px solid rgba(255,255,255,0.8)'
      }}>
        {/* Send Icon SVG */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#333" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13" />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>

        <div style={{ 
          fontSize: '42px', 
          fontWeight: '500', 
          color: '#333',
          letterSpacing: '-0.02em',
          display: 'flex',
          gap: '12px'
        }}>
          <span style={{ fontWeight: '700' }}>{emailCount}</span>
          <span>emails sent</span>
        </div>
      </div>

      {/* Decorative Text in background */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        textAlign: 'center',
        opacity: 0.2,
        textTransform: 'uppercase',
        letterSpacing: '0.4em',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        {toolName} • {toolAction}
      </div>
    </div>
  );
};
