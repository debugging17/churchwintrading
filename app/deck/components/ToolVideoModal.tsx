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
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-brand-navy/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-[16/9] bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_5rem_10rem_-2rem_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Top Bar with Logo */}
              <div className="w-full h-24 flex items-center justify-center relative border-b border-white/5 bg-white/5 backdrop-blur-md">
                 <div className="flex flex-col items-center gap-1">
                   <div className="relative w-48 h-10">
                     <Image 
                       src={logoSrc} 
                       alt={toolName} 
                       fill
                       className="object-contain opacity-80 brightness-0 invert" 
                     />
                   </div>
                   <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/30">{subtitle}</span>
                 </div>
                 <button
                   onClick={onClose}
                   className="absolute right-10 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors group"
                 >
                   <X className="w-6 h-6 text-white/40 group-hover:text-white" />
                 </button>
              </div>

              <div className="flex-grow flex overflow-hidden">
                {/* Left: Video / Animation */}
                <div className="w-[60%] h-full relative p-8">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-inner">
                    <ToolPlayer 
                      toolName={toolName} 
                      toolAction={toolAction} 
                      videoSrc={toolName.includes("APOLLO") ? "/videos/sample.mp4" : undefined} 
                    />
                  </div>
                </div>

                {/* Right: Guided Script */}
                <div className="w-[40%] h-full flex flex-col justify-center p-12 bg-white/5 backdrop-blur-md border-l border-white/5">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-8">
                       <div className="w-8 h-px bg-brand-orange/40" />
                       <span className="text-brand-orange uppercase tracking-widest text-xs font-black">Strategic Walkthrough</span>
                    </div>

                    {script.length > 0 ? (
                      script.map((step, index) => (
                        <motion.div
                          key={index}
                          animate={{ 
                            opacity: index === currentStep ? 1 : 0.2,
                            x: index === currentStep ? 10 : 0,
                            scale: index === currentStep ? 1.02 : 1
                          }}
                          className={`relative pl-8 transition-all duration-700`}
                        >
                          <div className={`absolute left-0 top-1.5 w-2 h-2 rounded-full transition-colors duration-700 ${index === currentStep ? 'bg-brand-orange shadow-[0_0_10px_#ff6a00]' : 'bg-white/20'}`} />
                          <p className={`text-xl leading-tight font-display font-medium ${index === currentStep ? 'text-white' : 'text-white/60'}`}>
                            {step}
                          </p>
                        </motion.div>
                      ))
                    ) : (
                      <div className="py-12">
                        <p className="text-white/40 italic font-primary text-sm leading-relaxed">
                          Automating high-intent {toolName.toLowerCase()} workflows to identify and capture revenue opportunities.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="mt-16 pt-8 border-t border-white/5">
                     <div className="flex items-center gap-4 text-white/30">
                        <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center">
                           <Zap className="w-5 h-5 text-brand-orange" />
                        </div>
                        <div>
                           <p className="text-[10px] uppercase font-bold tracking-widest">Automation Active</p>
                           <p className="text-xs italic font-primary text-white/40">Real-time pipeline generation enabled</p>
                        </div>
                     </div>
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
