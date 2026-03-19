import { useState, useEffect } from "react";
import { useSwiperSlide } from "swiper/react";

/**
 * Custom hook to trigger animations only when the Swiper slide becomes active.
 * Uses a small delay to ensure the DOM is ready and Swiper has settled.
 */
export function useSlideEnter(delayMs = 100) {
  let slide: any = null;
  try {
    slide = useSwiperSlide();
  } catch (e) {
    // Not in a Swiper context
  }
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!slide) {
      setHasEntered(true);
      return;
    }
    
    let timeout: NodeJS.Timeout;
    if (slide.isActive) {
      timeout = setTimeout(() => {
        setHasEntered(true);
      }, delayMs);
    } else {
      setHasEntered(false);
    }

    return () => clearTimeout(timeout);
  }, [slide?.isActive, delayMs]);

  return hasEntered ? "visible" : "hidden";
}
