"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Portal } from "./Portal";
import { ToolPlayer } from "./ToolPlayer";

interface ToolVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  toolName: string;
  toolAction: string;
  script?: string[];
  logoSrc?: string;
  subtitle?: string;
}

export const ToolVideoModal: React.FC<ToolVideoModalProps> = ({ 
  isOpen, 
  onClose, 
  toolName, 
  toolAction,
}) => {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-brand-navy/90 backdrop-blur-2xl"
            />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-7xl aspect-video bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_3rem_10rem_rgba(0,0,0,0.8)] border border-white/10"
            >
              {/* Close Button - Floats over video top-right */}
              <button
                onClick={onClose}
                className="absolute right-6 top-6 z-[110] p-3 bg-black/40 hover:bg-black/60 backdrop-blur-xl rounded-full transition-all group border border-white/10"
              >
                <X className="w-6 h-6 text-white/50 group-hover:text-white" />
              </button>

              {/* Full-frame Video Content */}
              <div className="w-full h-full">
                <ToolPlayer 
                  toolName={toolName} 
                  toolAction={toolAction} 
                  videoSrc={toolName.toUpperCase().includes("APOLLO") ? "/videos/sample.mp4" : undefined} 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
