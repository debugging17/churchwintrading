import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../motion/variants";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  theme?: "dark" | "light";
}

export function GlassCard({ children, className = "", delay = 0, theme = "dark" }: GlassCardProps) {
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

  const baseClasses = theme === "dark" 
    ? "bg-brand-white/5 border-brand-white/10" 
    : "bg-brand-navy/5 border-brand-navy/10 text-brand-navy";

  return (
    <motion.div
      variants={variant}
      className={`${baseClasses} border backdrop-blur-md rounded-xl p-8 shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
}
