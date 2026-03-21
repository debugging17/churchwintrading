"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Global UI Layout Overlays
import { FooterStack } from "./components/FooterStack";
import { SectorModal } from "./components/SectorModal";

// Slides
import { Slide01Cover } from "./slides/Slide01Cover";
import { Slide01BOverview } from "./slides/Slide01BOverview";
import { Slide02Crossroads } from "./slides/Slide02Crossroads";
import { Slide03MacroMoment } from "./slides/Slide03MacroMoment";
import { Slide04MissingMiddle } from "./slides/Slide04MissingMiddle";
import { Slide05WhereWePlay } from "./slides/Slide05WhereWePlay";
import { Slide06Segmentation } from "./slides/Slide06Segmentation";
import { Slide07VPCSegments } from "./slides/Slide07VPCSegments";
import { Slide08Insight } from "./slides/Slide08Insight";
import { Slide09ValuePropDesirability } from "./slides/Slide09ValuePropDesirability";
import { Slide10ValuePropViability } from "./slides/Slide10ValuePropViability";
import { Slide11InstitutionalReadiness } from "./slides/Slide11InstitutionalReadiness";
import { Slide12ABulkGallery } from "./slides/Slide12ABulkGallery";
import { Slide13CompetitiveReality } from "./slides/Slide13CompetitiveReality";
import { Slide14WhoOwnsSpace } from "./slides/Slide14WhoOwnsSpace";
import { Slide15DigitalVisibility } from "./slides/Slide15DigitalVisibility";
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
  const [selectedSector, setSelectedSector] = useState<number | null>(null);
  const searchParams = useSearchParams();
  const isPrintMode = searchParams.get("mode") === "print";
  const totalSlides = 23;

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

  const handleSectorClick = (idx: number) => {
    console.log("Global Sector Click:", idx);
    setSelectedSector(idx);
  };

  if (isPrintMode) {
    const slides = [
      Slide01Cover, Slide01BOverview, Slide02Crossroads, Slide03MacroMoment, 
      Slide04MissingMiddle, Slide05WhereWePlay, Slide06Segmentation, 
      Slide07VPCSegments, Slide08Insight, Slide09ValuePropDesirability, 
      Slide10ValuePropViability, Slide11InstitutionalReadiness, 
      Slide12ABulkGallery, Slide13CompetitiveReality, Slide14WhoOwnsSpace, 
      Slide15DigitalVisibility, Slide17Roadmap, 
      Slide18Phase1, Slide19Phase2, Slide20Phase3, Slide21Impact, 
      Slide22ImpactTransformed, Slide23TheAsk, Slide24CTA
    ];

    return (
      <main className="w-full bg-brand-navy min-h-screen">
        <div className="flex flex-col">
          {slides.map((SlideComponent, index) => (
            <div key={index} className="relative h-screen overflow-hidden">
              <SlideComponent isActive={true} />
              <FooterStack total={totalSlides} currentOverride={index + 1} />
            </div>
          ))}
        </div>
      </main>
    );
  }

  return (
    <main className="h-screen w-full overflow-hidden bg-brand-navy relative">
      <Swiper
        direction="horizontal"
        modules={[Mousewheel, Keyboard, EffectFade]}
        mousewheel={{ invert: false, thresholdDelta: 50, forceToAxis: false }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        speed={800}
        initialSlide={initialSlide}
        noSwiping={true}
        noSwipingClass="no-swiping"
        className="h-full w-full"
      >
        <FooterStack total={totalSlides} />
        
        <SwiperSlide>{({ isActive }) => <Slide01Cover isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide01BOverview isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide02Crossroads isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide03MacroMoment isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide04MissingMiddle isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide05WhereWePlay isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide06Segmentation onSectorClick={handleSectorClick} isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide07VPCSegments isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide08Insight isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide09ValuePropDesirability isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide10ValuePropViability isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide11InstitutionalReadiness isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide12ABulkGallery isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide13CompetitiveReality isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide14WhoOwnsSpace isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide15DigitalVisibility isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide17Roadmap isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide18Phase1 isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide19Phase2 isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide20Phase3 isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide21Impact isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide22ImpactTransformed isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide23TheAsk isActive={isActive} />}</SwiperSlide>
        <SwiperSlide>{({ isActive }) => <Slide24CTA isActive={isActive} />}</SwiperSlide>
      </Swiper>

      {/* Global Sector Modal rendered outside Swiper */}
      <SectorModal 
        selectedIdx={selectedSector} 
        onClose={() => setSelectedSector(null)} 
        onSelectSector={(idx: number) => setSelectedSector(idx)}
      />
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
