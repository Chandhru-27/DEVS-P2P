import React from 'react';
import { 
  ArrowRight, 
  BookOpen, 
  Users,
  Compass
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { communityInfo } from '../data/socialsData';

interface HeroProps {
  onExploreRoadmap: () => void;
  onExploreResources: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRoadmap, onExploreResources }) => {
  return (
    <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Upcoming Live Event • 4 Hosts & Mentors</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">Free & Open Source</span>
        </div>

        {/* Clean Minimal Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-100 max-w-4xl mx-auto leading-[1.1]">
          The Peer-to-Peer Roadmap for AI & Machine Learning.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          From first-principles mathematics and data manipulation to training neural networks, fine-tuning LLMs, and shipping production MLOps systems.
        </p>

        {/* Minimal Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#hosts"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-sm"
          >
            <Users className="w-4 h-4 text-zinc-900" />
            <span>Meet the 4 Event Hosts</span>
          </a>

          <a
            href="#roadmap"
            onClick={onExploreRoadmap}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm transition-all"
          >
            <Compass className="w-4 h-4 text-zinc-400" />
            <span>Curriculum Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </a>

          <a
            href="#resources"
            onClick={onExploreResources}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
          >
            <BookOpen className="w-4 h-4 text-zinc-400" />
            <span>Curated Resources</span>
          </a>

          <a
            href={communityInfo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white font-medium text-xs sm:text-sm transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        {/* Minimal Stats Line */}
        <div className="mt-14 pt-8 border-t border-zinc-800/60 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-2xl font-black text-zinc-100">4 Hosts</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Live Event Mentors</div>
          </div>
          <div>
            <div className="text-2xl font-black text-zinc-100">6 Phases</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Foundations to MLOps</div>
          </div>
          <div>
            <div className="text-2xl font-black text-zinc-100">25+ Vetted</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Zero-Noise Resources</div>
          </div>
          <div>
            <div className="text-2xl font-black text-zinc-100">100% Free</div>
            <div className="text-xs text-zinc-500 font-mono mt-0.5">Open Source on GitHub</div>
          </div>
        </div>
      </div>
    </section>
  );
};
