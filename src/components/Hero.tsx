import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';
import { AsciiHandsCanvas } from './AsciiHandsCanvas';

interface HeroProps {
  onExploreRoadmap: () => void;
  onExploreResources?: () => void;
  onOpenCommandPalette?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRoadmap }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-[#000000] text-center select-none w-full">
      {/* Centered Editorial Typography and Action Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimateIn delay={50}>
          <h1 className="text-3xl sm:text-5xl md:text-[58px] font-normal tracking-[-0.03em] text-zinc-100 max-w-4xl mx-auto leading-[1.14]">
            When intelligence reaches out to instinct, the future takes shape
          </h1>
        </AnimateIn>

        <AnimateIn delay={150}>
          <p className="mt-5 text-xs sm:text-sm text-zinc-400 font-mono tracking-wide max-w-2xl mx-auto leading-relaxed">
            an unlikely alliance · where human intuition and algorithmic precision move as one
          </p>
        </AnimateIn>

        <AnimateIn delay={250}>
          <div className="mt-7 flex justify-center">
            <button
              onClick={onExploreRoadmap}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>See it in action</span>
              <ArrowRight className="w-3.5 h-3.5 text-black transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </AnimateIn>
      </div>

      {/* Full-Bleed Edge-to-Edge Pure Procedural Code Canvas (Zero Background Images) */}
      <AnimateIn delay={350} className="w-full mt-6 sm:mt-10 overflow-hidden px-0">
        <div className="relative w-full flex flex-col items-center">
          <AsciiHandsCanvas />
        </div>
      </AnimateIn>

      {/* Subtle bottom separator fade */}
      <div className="mt-16 sm:mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto" />
    </section>
  );
};
