"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

export function Slide09ValuePropDesirability() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col md:flex-row bg-gradient-to-r from-brand-white via-brand-white/80 to-brand-cream overflow-hidden">
      {/* Visual Left */}
      <div className="hidden md:flex w-[40%] h-full relative items-center justify-center p-12">
         <div className="absolute inset-0 bg-gradient-to-t from-brand-white/50 to-transparent z-10 pointer-events-none" />
         <div className="relative z-20 w-full aspect-[4/5] rounded-xl overflow-hidden border border-brand-navy/10 flex items-center justify-center p-0 shadow-lg">
            <Image 
              src="/assets/b2b_industrial_processing_1773793847510.png" 
              alt="Industrial Scale Processing Facility" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-brand-navy/5 mix-blend-multiply pointer-events-none" />
         </div>
      </div>

      {/* Content Right */}
      <div className="w-full md:w-[60%] h-full flex flex-col justify-center px-10 md:px-20 z-10">
        <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="max-w-2xl">
          <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl font-bold text-brand-navy leading-tight mb-8">
            We eliminate the exact problems your buyers named.
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-brand-navy/80 font-primary leading-relaxed mb-12">
            Today, we solve wholesale buyers&apos; problem of product delays, supply uncertainty, and fluctuating costs by providing reliable bulk product supply with consistent quality, on-time delivery and flexible payment terms.
          </motion.p>

          <div className="space-y-8 pl-4 border-l-2 border-brand-orange/30">
            {[
              { label: "For The Retailer", val: "Flexible order quantities + consistent quality", res: "no more multi-supplier chaos" },
              { label: "For The Wholesaler", val: "Guaranteed mass production + buffer stocking", res: "no more seasonal contract losses" },
              { label: "For Procurement", val: "Instant compliance documentation download", res: "no certificate hunting" }
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} className="relative">
                <div className="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-brand-orange" />
                <h4 className="font-display text-brand-orange uppercase tracking-wider text-sm font-bold mb-1">
                  {item.label}
                </h4>
                <p className="font-primary text-brand-navy text-base">
                  <span className="font-light">{item.val} = </span>
                  <span className="font-semibold">{item.res}.</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
