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
}

export const UnifiedVideoModal: React.FC<UnifiedVideoModalProps> = ({ 
  isOpen, 
  onClose, 
  toolName, 
  toolAction,
}) => {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-brand-navy/95 backdrop-blur-3xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[90vw] aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Floating Close Button */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-[120] p-3 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-all group border border-white/20"
              >
                <X className="w-6 h-6 text-white/50 group-hover:text-white" />
              </button>

              {/* Full Boundary Video */}
              <div className="w-full h-full relative">
                <ToolPlayer 
                  toolName={toolName} 
                  toolAction={toolAction} 
                  videoSrc="/assets/videos/apply_cinematic,_8k_202603181845.mp4"
                />
                
                {/* Unmute Pill - Matching Step 1028 Reference */}
                <div className="absolute bottom-8 right-8 z-[110]">
                  <div className="px-6 py-3 bg-brand-navy/60 backdrop-blur-xl border border-white/10 rounded-full flex items-center gap-3">
                    <span className="text-[10px] font-display font-black text-white/90 uppercase tracking-[0.2em]">Unmute to hear audio</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
