"use client";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Portal } from "./Portal";
import { ToolPlayer } from "./ToolPlayer";

interface UnifiedVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
  toolAction: string;
  videoSrc?: string;
}

export const UnifiedVideoModal: React.FC<UnifiedVideoModalProps> = ({ 
  isOpen, 
  onClose, 
  toolName, 
  toolAction,
  videoSrc,
}) => {
  const defaultVideo = "/assets/videos/apply_cinematic,_8k_202603181845.mp4";
  const finalSrc = videoSrc || defaultVideo;

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-16">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={onClose}
               className="absolute inset-0 bg-brand-navy/95 backdrop-blur-3xl cursor-pointer"
             />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 md:right-8 md:top-8 z-[10000] p-4 bg-white/20 hover:bg-white/30 backdrop-blur-2xl rounded-full transition-all group border border-white/20 shadow-lg"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </button>

              {/* Full Boundary Video */}
              <div className="w-full h-full relative">
                <ToolPlayer 
                  toolName={toolName} 
                  toolAction={toolAction} 
                  videoSrc={finalSrc}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
