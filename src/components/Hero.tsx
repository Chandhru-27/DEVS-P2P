import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimateIn } from './AnimateIn';
import { AsciiHandsCanvas } from './AsciiHandsCanvas';
import type { DomainConfig } from '../types';

interface HeroProps {
  currentDomain: DomainConfig;
  domains: DomainConfig[];
  onSelectDomain: (slug: string) => void;
  onExploreRoadmap: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentDomain,
  domains,
  onSelectDomain,
  onExploreRoadmap,
}) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-[#000000] text-center select-none w-full">
      {/* Centered Editorial Typography and Action Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Active Domain Track Badge */}
        <AnimateIn delay={30}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-400 text-xs font-mono tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span>DEVs P2P · {currentDomain.name}</span>
          </div>
        </AnimateIn>

        {/* Dynamic Domain Headline */}
        <AnimateIn delay={80}>
          <h1 className="text-3xl sm:text-5xl md:text-[56px] font-normal tracking-[-0.03em] text-zinc-100 max-w-4xl mx-auto leading-[1.15]">
            {currentDomain.heroHeadline}
          </h1>
        </AnimateIn>

        {/* Dynamic Domain Subtitle */}
        <AnimateIn delay={160}>
          <p className="mt-5 text-xs sm:text-sm text-zinc-400 font-mono tracking-wide max-w-2xl mx-auto leading-relaxed">
            {currentDomain.heroTagline}
          </p>
        </AnimateIn>

        {/* CTA Button */}
        <AnimateIn delay={240}>
          <div className="mt-7 flex justify-center">
            <button
              onClick={onExploreRoadmap}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs sm:text-sm transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>{currentDomain.heroCtaText}</span>
              <ArrowRight className="w-3.5 h-3.5 text-black transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </AnimateIn>

        {/* Dynamic Multi-Domain Quick Track Pills */}
        <AnimateIn delay={300}>
          <div className="mt-8 flex flex-col items-center">
            <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-2.5">
              Available Technical Tracks (Switch Dynamically)
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full bg-zinc-950/80 border border-white/10 backdrop-blur-xl max-w-3xl">
              {domains.map((d) => {
                const isActive = d.slug === currentDomain.slug;
                return (
                  <button
                    key={d.slug}
                    onClick={() => onSelectDomain(d.slug)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white text-black font-semibold shadow-md scale-105'
                        : 'text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                    }`}
                  >
                    <span>{d.shortName}</span>
                    {isActive ? (
                      <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-black/15 text-black font-bold uppercase tracking-wider">
                        Active
                      </span>
                    ) : (
                      <span className="text-[9px] text-zinc-500 group-hover:text-zinc-400 font-mono">
                        /{d.slug}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Full-Bleed Edge-to-Edge Pure Procedural Code Canvas (Zero Background Images) */}
      <AnimateIn delay={360} className="w-full mt-6 sm:mt-10 overflow-hidden px-0">
        <div className="relative w-full flex flex-col items-center">
          <AsciiHandsCanvas />
        </div>
      </AnimateIn>

      {/* Subtle bottom separator fade */}
      <div className="mt-14 sm:mt-18 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-5xl mx-auto" />
    </section>
  );
};
