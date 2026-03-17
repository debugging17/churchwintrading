import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../motion/variants";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function GlassCard({ children, className = "", delay = 0 }: GlassCardProps) {
  // Apply a custom delay to the fadeUp variant for staggering
  const variant = {
    ...fadeUp,
    visible: { 
      ...fadeUp.visible, 
      transition: { 
        ...(fadeUp.visible as any).transition, 
        delay 
      }
    }
  };

  return (
    <motion.div
      variants={variant}
      className={`bg-brand-white/5 border border-brand-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
