"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Global UI Layout Overlays
import { SlideCounter } from "./components/SlideCounter";
import { ProgressBar } from "./components/ProgressBar";
import { SlideLogo } from "./components/SlideLogo";

// Slides
import { Slide01Cover } from "./slides/Slide01Cover";
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
import { Slide13CompetitiveReality } from "./slides/Slide13CompetitiveReality";
import { Slide14WhoOwnsSpace } from "./slides/Slide14WhoOwnsSpace";
import { Slide15DigitalVisibility } from "./slides/Slide15DigitalVisibility";
import { Slide16B2BPipeline } from "./slides/Slide16B2BPipeline";

export default function DeckLayout() {
  const [mounted, setMounted] = useState(false);
  const totalSlides = 16; // Updating slide count to include Section 3

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-screen w-full bg-brand-navy" />; // Prevent hydration mismatch
  }

  return (
    <main className="h-screen w-full overflow-hidden bg-brand-navy">
      <Swiper
        direction="vertical"
        modules={[Mousewheel, Keyboard, EffectFade]}
        mousewheel={{ invert: false, thresholdDelta: 50 }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        speed={800}
        simulateTouch={false}
        className="h-full w-full"
      >
        {/* Global UI */}
        <SlideCounter total={totalSlides} />
        <ProgressBar total={totalSlides} />
        <SlideLogo />

        {/* Slides */}
        <SwiperSlide>
          <Slide01Cover />
        </SwiperSlide>

        <SwiperSlide>
          <Slide02Crossroads />
        </SwiperSlide>

        <SwiperSlide>
          <Slide03MacroMoment />
        </SwiperSlide>

        <SwiperSlide>
          <Slide04MissingMiddle />
        </SwiperSlide>

        <SwiperSlide>
          <Slide05WhereWePlay />
        </SwiperSlide>

        <SwiperSlide>
          <Slide06Segmentation />
        </SwiperSlide>

        <SwiperSlide>
          <Slide07VPCSegments />
        </SwiperSlide>

        <SwiperSlide>
          <Slide08HowWeWin />
        </SwiperSlide>

        <SwiperSlide>
          <Slide09ValuePropDesirability />
        </SwiperSlide>

        <SwiperSlide>
          <Slide10ValuePropViability />
        </SwiperSlide>

        <SwiperSlide>
          <Slide11Capabilities />
        </SwiperSlide>

        <SwiperSlide>
          <Slide12SupplyChainAdvantage />
        </SwiperSlide>

        <SwiperSlide>
          <Slide13CompetitiveReality />
        </SwiperSlide>

        <SwiperSlide>
          <Slide14WhoOwnsSpace />
        </SwiperSlide>

        <SwiperSlide>
          <Slide15DigitalVisibility />
        </SwiperSlide>

        <SwiperSlide>
          <Slide16B2BPipeline />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
