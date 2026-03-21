"use client";
import React, { useRef, useEffect } from "react";

interface DeckVideoProps {
  src: string;
  isActive: boolean;
  className?: string;
  poster?: string;
}

export function DeckVideo({ src, isActive, className = "", poster }: DeckVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented
        });
      }
    } else {
      video.pause();
      // Optionally reset to start to ensure fresh play next time
      video.currentTime = 0;
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      poster={poster}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
