"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Global UI Layout Overlays
import { FooterStack } from "./components/FooterStack";

// Slides
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide01BOverview } from "./slides/Slide01BOverview";
import { Slide02Crossroads } from "./slides/Slide02Crossroads";
import { Slide03MacroMoment } from "./slides/Slide03MacroMoment";
import { Slide04MissingMiddle } from "./slides/Slide04MissingMiddle";
import { Slide05WhereWePlay } from "./slides/Slide05WhereWePlay";
import { Slide06Segmentation } from "./slides/Slide06Segmentation";
import { Slide07VPCSegments } from "./slides/Slide07VPCSegments";
import { Slide08HowWeWin } from "./slides/Slide08HowWeWin";
import { Slide09ValuePropDesirability } from "./slides/Slide09ValuePropDesirability";
import { Slide10ValuePropViability } from "./slides/Slide10ValuePropViability";
import { Slide11Capabilities } from "./slides/Slide11Capabilities";
import { Slide12SupplyChainAdvantage } from "./slides/Slide12SupplyChainAdvantage";
import { Slide12ABulkGallery } from "./slides/Slide12ABulkGallery";
import { Slide13CompetitiveReality } from "./slides/Slide13CompetitiveReality";
import { Slide14WhoOwnsSpace } from "./slides/Slide14WhoOwnsSpace";
import { Slide15DigitalVisibility } from "./slides/Slide15DigitalVisibility";
import { Slide16B2BPipeline } from "./slides/Slide16B2BPipeline";
import { Slide17Roadmap } from "./slides/Slide17Roadmap";
import { Slide18Phase1 } from "./slides/Slide18Phase1";
import { Slide19Phase2 } from "./slides/Slide19Phase2";
import { Slide20Phase3 } from "./slides/Slide20Phase3";
import { Slide21Impact } from "./slides/Slide21Impact";
import { Slide22ImpactTransformed } from "./slides/Slide22ImpactTransformed";
import { Slide23TheAsk } from "./slides/Slide23TheAsk";
import { Slide24CTA } from "./slides/Slide24CTA";

import { useSearchParams } from "next/navigation";

function DeckContent() {
  const [mounted, setMounted] = useState(false);
  const searchParams = useSearchParams();
  const isPrintMode = searchParams.get("mode") === "print";
  const totalSlides = 26;

  useEffect(() => {
    setMounted(true);
    console.log("DeckContent Mounted");
  }, []);

  if (!mounted) {
    return (
      <div className="h-screen w-full bg-brand-navy flex items-center justify-center">
        <div className="text-white font-display text-xl animate-pulse">Initializing Pitch Deck...</div>
      </div>
    );
  }

  // Handle slide index from query param
  const slideParam = searchParams.get("slide");
  const initialSlide = slideParam ? parseInt(slideParam) : 0;

  if (isPrintMode) {
    const slides = [
      Slide01Cover, Slide01BOverview, Slide02Crossroads, Slide03MacroMoment, 
      Slide04MissingMiddle, Slide05WhereWePlay, Slide06Segmentation, 
      Slide07VPCSegments, Slide08HowWeWin, Slide09ValuePropDesirability, 
      Slide10ValuePropViability, Slide11Capabilities, Slide12SupplyChainAdvantage, 
      Slide12ABulkGallery, Slide13CompetitiveReality, Slide14WhoOwnsSpace, 
      Slide15DigitalVisibility, Slide16B2BPipeline, Slide17Roadmap, 
      Slide18Phase1, Slide19Phase2, Slide20Phase3, Slide21Impact, 
      Slide22ImpactTransformed, Slide23TheAsk, Slide24CTA
    ];

    return (
      <main className="w-full bg-brand-navy min-h-screen">
        <div className="flex flex-col">
          {slides.map((SlideComponent, index) => (
            <div key={index} className="relative h-screen overflow-hidden">
              <SlideComponent />
              <FooterStack total={totalSlides} currentOverride={index + 1} />
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen w-full overflow-hidden bg-brand-navy">
      <Swiper
        direction="horizontal"
        modules={[Mousewheel, Keyboard, EffectFade]}
        mousewheel={{ invert: false, thresholdDelta: 50, forceToAxis: false }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        speed={800}
        initialSlide={initialSlide}
        simulateTouch={false}
        className="h-full w-full"
      >
        <FooterStack total={totalSlides} />
        
        <SwiperSlide><Slide01Cover /></SwiperSlide>
        <SwiperSlide><Slide01BOverview /></SwiperSlide>
        <SwiperSlide><Slide02Crossroads /></SwiperSlide>
        <SwiperSlide><Slide03MacroMoment /></SwiperSlide>
        <SwiperSlide><Slide04MissingMiddle /></SwiperSlide>
        <SwiperSlide><Slide05WhereWePlay /></SwiperSlide>
        <SwiperSlide><Slide06Segmentation /></SwiperSlide>
        <SwiperSlide><Slide07VPCSegments /></SwiperSlide>
        <SwiperSlide><Slide08HowWeWin /></SwiperSlide>
        <SwiperSlide><Slide09ValuePropDesirability /></SwiperSlide>
        <SwiperSlide><Slide10ValuePropViability /></SwiperSlide>
        <SwiperSlide><Slide11Capabilities /></SwiperSlide>
        <SwiperSlide><Slide12SupplyChainAdvantage /></SwiperSlide>
        <SwiperSlide><Slide12ABulkGallery /></SwiperSlide>
        <SwiperSlide><Slide13CompetitiveReality /></SwiperSlide>
        <SwiperSlide><Slide14WhoOwnsSpace /></SwiperSlide>
        <SwiperSlide><Slide15DigitalVisibility /></SwiperSlide>
        <SwiperSlide><Slide16B2BPipeline /></SwiperSlide>
        <SwiperSlide><Slide17Roadmap /></SwiperSlide>
        <SwiperSlide><Slide18Phase1 /></SwiperSlide>
        <SwiperSlide><Slide19Phase2 /></SwiperSlide>
        <SwiperSlide><Slide20Phase3 /></SwiperSlide>
        <SwiperSlide><Slide21Impact /></SwiperSlide>
        <SwiperSlide><Slide22ImpactTransformed /></SwiperSlide>
        <SwiperSlide><Slide23TheAsk /></SwiperSlide>
        <SwiperSlide><Slide24CTA /></SwiperSlide>
      </Swiper>
    </main>
  );
}

export default function DeckLayout() {
  return (
    <Suspense fallback={<div className="h-screen w-full bg-brand-navy flex items-center justify-center text-white">Loading...</div>}>
      <DeckContent />
    </Suspense>
  );
}
