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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-8 md:p-16">
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={onClose}
               className="absolute inset-0 bg-brand-navy/85 backdrop-blur-3xl"
             />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-[3rem] md:rounded-[5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5"
            >
              {/* Subtle Close Button */}
              <button
                onClick={onClose}
                className="absolute right-8 top-8 z-[120] p-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full transition-all group border border-white/10"
              >
                <X className="w-5 h-5 text-white/40 group-hover:text-white" />
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
