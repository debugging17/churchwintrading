"use client";
import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';

interface ToolAnimationProps {
  toolName: string;
  toolAction: string;
}

export const ToolAnimation: React.FC<ToolAnimationProps> = ({ toolName, toolAction }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const isApollo = toolName.toLowerCase().includes("apollo");
  const isLinkedIn = toolName.toLowerCase().includes("linkedin");
  const isMailchimp = toolName.toLowerCase().includes("mailchimp");
  const isInstantly = toolName.toLowerCase().includes("instantly");

  const config = {
    color: isMailchimp ? '#FFD700' : isLinkedIn ? '#0a66c2' : isApollo ? '#ff6a00' : '#012787',
    gradient: isMailchimp ? 'radial-gradient(circle, #FFD700 0%, #FFB900 100%)' :
              isLinkedIn ? 'radial-gradient(circle, #0a66c2 0%, #004182 100%)' :
              isApollo ? 'radial-gradient(circle, #ff6a00 0%, #cc5500 100%)' :
              'radial-gradient(circle, #012787 0%, #001a5e 100%)',
    label: isApollo ? "Leads sourced" : isLinkedIn ? "Prospects connected" : isMailchimp ? "Campaigns active" : "emails sent",
    count: isApollo ? 34218 : isLinkedIn ? 1240 : isMailchimp ? 42 : 567,
    textColor: isMailchimp ? '#1a1a1a' : '#ffffff'
  };

  const entrance = spring({
    frame,
    fps,
    config: { damping: 12 },
  });

  const displayCount = Math.round(interpolate(frame, [20, 100], [0, config.count], {
    extrapolateRight: 'clamp',
  }));

  const float = Math.sin(frame / 15) * 10;

  return (
    <div style={{ 
      flex: 1, 
      background: config.gradient, 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: config.textColor,
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
        {/* Dynamic Icon SVG */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke={isMailchimp ? "#333" : isLinkedIn ? "#0a66c2" : isApollo ? "#ff6a00" : "#012787"} 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {isApollo ? <circle cx="12" cy="12" r="10" /> : 
           isLinkedIn ? <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> :
           <polygon points="22 2 15 22 11 13 2 9 22 2" />}
          {isLinkedIn && <rect x="2" y="9" width="4" height="12" />}
        </svg>

        <div style={{ 
          fontSize: '42px', 
          fontWeight: '500', 
          color: '#333',
          letterSpacing: '-0.02em',
          display: 'flex',
          gap: '12px'
        }}>
          <span style={{ fontWeight: '700' }}>{displayCount.toLocaleString()}</span>
          <span>{config.label}</span>
        </div>
      </div>

      {/* Decorative Text in background */}
      <div style={{
        position: 'absolute',
        bottom: '40px',
        textAlign: 'center',
        opacity: isMailchimp ? 0.3 : 0.2,
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
