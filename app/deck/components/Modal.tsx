"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Portal } from "./Portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-8 overflow-hidden" style={{ zIndex: 99999 }}>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
            />
            
            {/* Modal Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-brand-white rounded-2xl shadow-2xl overflow-hidden z-[100000] flex flex-col max-h-[90vh] border border-brand-navy/10"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-brand-navy/10 bg-brand-navy/5">
                <h3 className="font-display font-bold text-2xl text-brand-navy">{title}</h3>
                <button 
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-brand-navy/10 transition-colors text-brand-navy"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Content */}
              <div className="flex-grow p-8 overflow-y-auto bg-brand-white">
                {children}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
