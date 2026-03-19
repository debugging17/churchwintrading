import { useState, useEffect } from "react";
import { useSwiperSlide } from "swiper/react";

/**
 * Custom hook to trigger animations only when the Swiper slide becomes active.
 * Uses a small delay to ensure the DOM is ready and Swiper has settled.
 */
export function useSlideEnter(delayMs = 100) {
  const slide = useSwiperSlide();
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    // Safety check for slide.isActive
    if (slide && slide.isActive) {
      timeout = setTimeout(() => {
        setHasEntered(true);
      }, delayMs);
    } else if (slide) {
      setHasEntered(false);
    } else {
      // If no slide context (illegal use), default to visible for safety
      setHasEntered(true);
    }

    return () => clearTimeout(timeout);
  }, [slide, delayMs]);

  return hasEntered ? "visible" : "hidden";
}
