"use client";
import React from 'react';
import { Player } from '@remotion/player';
import { ToolAnimation } from './ToolAnimation';

interface ToolPlayerProps {
  toolName: string;
  toolAction: string;
  videoSrc?: string;
}

export const ToolPlayer: React.FC<ToolPlayerProps> = ({ toolName, toolAction, videoSrc }) => {
  if (videoSrc) {
    return (
      <div className="w-full h-full bg-black rounded-3xl overflow-hidden shadow-2xl relative">
        <video 
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      </div>
    );
  }

  return (
    <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
      <Player
        component={ToolAnimation}
        durationInFrames={150}
        compositionWidth={1280}
        compositionHeight={720}
        fps={60}
        loop
        autoPlay
        inputProps={{ toolName, toolAction }}
        style={{
          width: '100%',
          height: '100%',
        }}
        controls={false}
      />
    </div>
  );
};
