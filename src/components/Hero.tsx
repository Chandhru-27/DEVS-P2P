import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Terminal, 
  Users, 
  Layers
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { communityInfo } from '../data/socialsData';

interface HeroProps {
  onExploreRoadmap: () => void;
  onExploreResources: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreRoadmap, onExploreResources }) => {
  return (
    <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-800/80">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-600/15 via-blue-600/15 to-pink-600/10 blur-[130px] -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-[100px] -z-10 pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Community Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium mb-6 hover:bg-purple-500/20 transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>The Open Peer-to-Peer AI & ML Initiative</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
          <span className="text-slate-400">100% Free & Open Source</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.12]">
          Master AI & Machine Learning{' '}
          <span className="gradient-text">from Foundations</span>{' '}
          to Production.
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          A definitive, peer-to-peer curriculum curated by developers for developers. 
          Master mathematics, data science, classical algorithms, PyTorch deep learning, 
          modern Generative AI / LLMs, and real-world MLOps.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#roadmap"
            onClick={onExploreRoadmap}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm sm:text-base shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Start Learning Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#resources"
            onClick={onExploreResources}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white font-medium text-sm sm:text-base transition-all"
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            <span>Browse 50+ Curated Resources</span>
          </a>

          <a
            href={communityInfo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-purple-900/40 text-slate-300 hover:text-white font-medium text-sm sm:text-base transition-all"
          >
            <GithubIcon className="w-4 h-4 text-purple-400" />
            <span>Star on GitHub</span>
          </a>
        </div>

        {/* Quick Highlights / Stats Grid */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-1">
              <Layers className="w-4 h-4" />
              <span>Structured Stages</span>
            </div>
            <div className="text-2xl font-bold text-white">6 Phases</div>
            <div className="text-xs text-slate-400 mt-1">Foundations to MLOps</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-semibold mb-1">
              <Terminal className="w-4 h-4" />
              <span>Portfolio Ready</span>
            </div>
            <div className="text-2xl font-bold text-white">6 Capstones</div>
            <div className="text-xs text-slate-400 mt-1">Realistic project blueprints</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Curated Content</span>
            </div>
            <div className="text-2xl font-bold text-white">100% Free</div>
            <div className="text-xs text-slate-400 mt-1">Zero paywalls or fluff</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-pink-400 text-xs font-semibold mb-1">
              <Users className="w-4 h-4" />
              <span>Community</span>
            </div>
            <div className="text-2xl font-bold text-white">P2P Learning</div>
            <div className="text-xs text-slate-400 mt-1">Study pods & code reviews</div>
          </div>
        </div>

        {/* Roadmap Phase Pills Navigation */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-400 font-medium mr-1">Roadmap Quick Jump:</span>
          <a href="#phase-1" className="px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/20 transition-colors">
            1. Math & Python
          </a>
          <a href="#phase-2" className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 transition-colors">
            2. Data Science
          </a>
          <a href="#phase-3" className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/20 transition-colors">
            3. Classical ML
          </a>
          <a href="#phase-4" className="px-3 py-1.5 rounded-lg bg-violet-500/10 hover:bg-violet-500/20 text-violet-300 border border-violet-500/20 transition-colors">
            4. Deep Learning
          </a>
          <a href="#phase-5" className="px-3 py-1.5 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/20 transition-colors">
            5. GenAI & LLMs
          </a>
          <a href="#phase-6" className="px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/20 transition-colors">
            6. MLOps & Production
          </a>
        </div>
      </div>
    </section>
  );
};
