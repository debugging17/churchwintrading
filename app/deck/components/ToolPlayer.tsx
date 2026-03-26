"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Player } from '@remotion/player';
import { ToolAnimation } from './ToolAnimation';

interface ToolPlayerProps {
  toolName: string;
  toolAction: string;
  videoSrc?: string;
}

export const ToolPlayer: React.FC<ToolPlayerProps> = ({ toolName, toolAction, videoSrc }) => {
  const [isReady, setIsReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoSrc && videoRef.current) {
      setIsReady(false);
      videoRef.current.load();
    }
  }, [videoSrc]);

  if (videoSrc) {
    return (
      <div className="w-full h-full bg-black overflow-hidden relative flex items-center justify-center">
        <AnimatePresence>
          {!isReady && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center z-20 bg-black"
            >
              <Loader2 className="w-12 h-12 text-brand-orange animate-spin opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.video 
          key={videoSrc}
          ref={videoRef}
          src={videoSrc} 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          onCanPlayThrough={() => setIsReady(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full h-full object-cover relative z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-15" />
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
