import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../motion/variants";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  delay?: number;
}

export function CTAButton({ href, children, delay = 0 }: CTAButtonProps) {
  const variant = {
    ...fadeUp,
    visible: { ...fadeUp.visible, transition: { ...(fadeUp.visible as any).transition, delay } }
  };

  return (
    <motion.div variants={variant}>
      <a 
        href={href}
        className="group relative inline-flex items-center justify-center px-8 py-4 font-display font-bold text-sm tracking-widest text-brand-white bg-brand-orange hover:bg-[#ff8022] transition-colors rounded-sm overflow-hidden"
      >
        <span className="relative z-10 uppercase">{children}</span>
        {/* Shimmer sweep effect */}
        <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
      </a>
    </motion.div>
  );
}
