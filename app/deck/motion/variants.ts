import { Variants } from "framer-motion";

// Cinematic easing curve for premium, Apple-like deceleration
const editorialEase: [number, number, number, number] = [0.19, 1.0, 0.22, 1.0];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.4, ease: editorialEase }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { 
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.6, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 1.5, ease: editorialEase }
  }
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.4, ease: editorialEase }
  }
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60, filter: 'blur(8px)' },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 1.4, ease: editorialEase }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const mimicSpring: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 70, 
      damping: 15,
      mass: 0.8
    } 
  }
};

export const sectionTitleStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

