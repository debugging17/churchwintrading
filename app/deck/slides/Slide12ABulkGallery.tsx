"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, slideFromLeft, sectionTitleStagger } from "../motion/variants";
import { useSlideEnter } from "../motion/useSlideEnter";

export function Slide12ABulkGallery() {
  const animState = useSlideEnter(100);

  return (
    <div className="w-full h-full flex flex-col py-12 md:py-20 px-10 md:px-24 bg-brand-navy">
      <motion.div initial="hidden" animate={animState} variants={sectionTitleStagger} className="w-full max-w-6xl mx-auto flex flex-col h-full my-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <motion.h2 variants={slideFromLeft} className="font-display text-4xl md:text-5xl font-bold text-brand-white leading-tight mb-2">
              Operations at Scale.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-brand-white/70 font-primary">
              Institutional infrastructure driving global wholesale supply.
            </motion.p>
          </div>
        </div>

        {/* B2B Grid */}
        <motion.div variants={fadeUp} className="flex-1 grid grid-cols-3 grid-rows-2 gap-4 h-full min-h-[50vh]">
          {/* Large Video Block */}
          <div className="col-span-1 row-span-2 rounded-xl overflow-hidden relative border border-brand-white/10 group shadow-2xl">
             <div className="absolute inset-0 bg-brand-navy/20 mix-blend-multiply z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
             <video autoPlay loop muted playsInline className="w-full h-full object-cover">
               <source src="/assets/videos/vid-4.mp4" type="video/mp4" />
             </video>
             <div className="absolute bottom-4 left-4 z-20 bg-brand-navy/80 tracking-widest backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] text-brand-white uppercase font-bold border border-brand-white/20">
               Industrial Extraction
             </div>
          </div>
          
          <div className="col-span-2 row-span-1 rounded-xl overflow-hidden relative border border-brand-white/10 group shadow-2xl">
             <Image src="/assets/b2b_warehouse_pallets_1773793813592.png" alt="Warehouse" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute bottom-4 left-4 z-20 bg-brand-navy/80 tracking-widest backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] text-brand-white uppercase font-bold border border-brand-white/20">
               Global Export Staging
             </div>
          </div>

          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative border border-brand-white/10 group shadow-2xl">
             <Image src="/assets/b2b_qa_laboratory_1773793831592.png" alt="QA" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute bottom-4 left-4 z-20 bg-brand-navy/80 tracking-widest backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] text-brand-white uppercase font-bold border border-brand-white/20">
               Tier-1 Compliance Lab
             </div>
          </div>

          <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative border border-brand-white/10 group shadow-2xl">
             <Image src="/assets/b2b_industrial_processing_1773793847510.png" alt="Processing" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute bottom-4 left-4 z-20 bg-brand-navy/80 tracking-widest backdrop-blur-sm px-3 py-1 rounded-sm text-[10px] text-brand-white uppercase font-bold border border-brand-white/20">
               Automated Supply Line
             </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
