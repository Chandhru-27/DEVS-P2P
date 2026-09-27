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
    <section className="relative pt-12 pb-12 md:pt-16 md:pb-14 border-b border-zinc-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Upcoming Live Event • 4 Hosts & Mentors</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-400">Open Source</span>
        </div>

        {/* Clean Minimal Title */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 max-w-4xl mx-auto leading-tight">
          The Peer-to-Peer Roadmap for AI & Machine Learning.
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          From first-principles mathematics and data manipulation to training neural networks, fine-tuning LLMs, and shipping production MLOps systems.
        </p>

        {/* Action CTAs */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <a
            href="#hosts"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-sm"
          >
            <Users className="w-3.5 h-3.5 text-zinc-900" />
            <span>Meet 4 Event Hosts</span>
          </a>

          <a
            href="#roadmap"
            onClick={onExploreRoadmap}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 font-medium text-xs sm:text-sm transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-zinc-400" />
            <span>Roadmap Pipeline</span>
            <ArrowRight className="w-3 h-3 text-zinc-500" />
          </a>

          <a
            href="#resources"
            onClick={onExploreResources}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all"
          >
            <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
            <span>Resources</span>
          </a>

          <a
            href={communityInfo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white font-medium text-xs sm:text-sm transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
