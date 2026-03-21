"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SEQUENCE = [
  "/images/visual_supremacy/us_shoppers.png",
  "/assets/images/mansory/pomelli-image(1).png",
  "/images/visual_supremacy/organic_retail_aisle.png"
];

export function GlobalDemandVideo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SEQUENCE.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-brand-navy">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={SEQUENCE[index]}
            alt="Global Demand Video sequence"
            fill
            className="object-cover"
            priority={true}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
