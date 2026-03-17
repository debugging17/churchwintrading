import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../motion/variants";

interface StatCardProps {
  label: string;
  value: string | React.ReactNode;
  trend?: string;
  delay?: number;
  theme?: "dark" | "light";
}

export function StatCard({ label, value, trend, delay = 0, theme = "dark" }: StatCardProps) {
  const variant = {
    ...fadeUp,
    visible: { ...fadeUp.visible, transition: { ...(fadeUp.visible as any).transition, delay } }
  };

  return (
    <motion.div 
      variants={variant}
      className={`flex flex-col border-l-2 border-brand-orange pl-6 py-2 ${theme === "light" ? "text-brand-navy" : ""}`}
    >
      <div className={`text-sm font-medium tracking-wide uppercase mb-2 ${theme === "light" ? "text-brand-navy/60" : "text-brand-white/60"}`}>
        {label}
      </div>
      <div className={`text-4xl md:text-5xl font-display font-light ${theme === "light" ? "text-brand-navy" : "text-brand-white"}`}>
        {value}
      </div>
      {trend && (
        <div className="mt-3 text-brand-orange font-semibold text-sm tracking-wide">
          ↑ {trend}
        </div>
      )}
    </motion.div>
  );
}
