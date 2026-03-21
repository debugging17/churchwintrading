"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";
import { Portal } from "./Portal";
import { ToolPlayer } from "./ToolPlayer";
import Image from "next/image";

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
  script = [],
  logoSrc = "/assets/images/sales-engine/apollo.png",
  subtitle = "Strategic Revenue Engine"
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStep(0);
      return;
    }

    if (script.length === 0) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % script.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, script.length]);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-brand-navy/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative w-[98vw] h-[96vh] bg-black rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-center justify-center p-0"
            >
              {/* Close Button - Subtle Overlay */}
              <button
                onClick={onClose}
                className="absolute right-8 top-8 z-[110] p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full transition-all group border border-white/10"
              >
                <X className="w-6 h-6 text-white/50 group-hover:text-white" />
              </button>

              {/* Pure Video Display - 100% frame */}
              <div className="w-full h-full relative">
                <ToolPlayer 
                  toolName={toolName} 
                  toolAction={toolAction} 
                  videoSrc={toolName.includes("APOLLO") ? "/videos/sample.mp4" : undefined} 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
};
