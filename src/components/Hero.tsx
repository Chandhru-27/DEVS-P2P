import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';
import { AsciiHandsCanvas } from './AsciiHandsCanvas';
import type { DomainConfig } from '../types';

interface HeroProps {
  currentDomain: DomainConfig;
  domains?: DomainConfig[];
  onSelectDomain?: (slug: string) => void;
  onExploreRoadmap: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentDomain,
  onExploreRoadmap,
}) => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-20 md:pt-18 md:pb-24 overflow-hidden bg-[#000000] text-center select-none w-full">
      {/* Centered Editorial Typography and Action Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Dynamic Domain Headline */}
        <AnimateIn delay={40}>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[56px] font-normal tracking-[-0.03em] text-zinc-100 max-w-4xl mx-auto leading-[1.2] sm:leading-[1.15] px-1 sm:px-4">
            {currentDomain.heroHeadline}
          </h1>
        </AnimateIn>

        {/* Dynamic Domain Subtitle */}
        <AnimateIn delay={120}>
          <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-zinc-400 font-mono tracking-wide max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            {currentDomain.heroTagline}
          </p>
        </AnimateIn>

        {/* Action Button */}
        <AnimateIn delay={180}>
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button
              onClick={onExploreRoadmap}
              className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(255,255,255,0.45)] hover:scale-105 active:scale-95 cursor-pointer touch-manipulation min-h-[44px]"
            >
              <span>{currentDomain.heroCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-black transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </AnimateIn>
      </div>

      {/* Full-Bleed Edge-to-Edge Pure Procedural Code Canvas (Zero Background Images) */}
      <AnimateIn delay={260} className="w-full mt-6 sm:mt-10 overflow-hidden px-0">
        <div className="relative w-full flex flex-col items-center">
          <AsciiHandsCanvas />
        </div>
      </AnimateIn>

      {/* Subtle bottom separator fade */}
      <div className="mt-10 sm:mt-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto px-4" />
    </section>
  );
};
