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
}

export function ToolVideoModal({ isOpen, onClose, toolName, toolAction }: ToolVideoModalProps) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-12 overflow-hidden pointer-events-auto" style={{ zIndex: 99999 }}>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/95 backdrop-blur-sm pointer-events-auto"
            />
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl z-[100000] flex flex-col pointer-events-auto"
            >
              {/* Close Button */}
              <button 
                onClick={onClose}
                className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Video Player */}
              <ToolPlayer toolName={toolName} toolAction={toolAction} />
              
              {/* Tool Label */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                   <h4 className="text-brand-orange font-display font-black text-xl uppercase tracking-widest">{toolName}</h4>
                   <p className="text-white/40 text-sm font-primary italic">{toolAction}</p>
                </div>
                <div className="text-white/20 font-display font-black text-4xl italic">CHURCHWIN SALES ENGINE</div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
