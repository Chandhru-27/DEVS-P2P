import React from 'react';
import { Brain, Heart, ArrowUp } from 'lucide-react';
import { GithubIcon, DiscordIcon, LinkedinIcon, XIcon } from './Icons';
import { communityInfo } from '../data/socialsData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b13] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-blue-500 text-white">
                <Brain className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-white">
                DEVs P2P AI/ML
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              An open, peer-to-peer curriculum and knowledge hub created to break down barriers to entry in Artificial Intelligence and Machine Learning.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={communityInfo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://discord.gg/invite/devs-p2p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="Discord"
              >
                <DiscordIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/devs-p2p-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/DevsP2PAI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                title="X (Twitter)"
              >
                <XIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Roadmap Milestones
            </h4>
            <ul className="space-y-2">
              <li><a href="#phase-1" className="hover:text-purple-300 transition-colors">Phase 1: Math & Python Foundations</a></li>
              <li><a href="#phase-2" className="hover:text-purple-300 transition-colors">Phase 2: Data Science & Wrangling</a></li>
              <li><a href="#phase-3" className="hover:text-purple-300 transition-colors">Phase 3: Classical Machine Learning</a></li>
              <li><a href="#phase-4" className="hover:text-purple-300 transition-colors">Phase 4: Deep Learning & PyTorch</a></li>
              <li><a href="#phase-5" className="hover:text-purple-300 transition-colors">Phase 5: Generative AI & LLMs</a></li>
              <li><a href="#phase-6" className="hover:text-purple-300 transition-colors">Phase 6: MLOps & Production</a></li>
            </ul>
          </div>

          {/* Col 3: Community & Repo */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              Open Source & Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={communityInfo.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href={`${communityInfo.repoUrl}/issues`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Report an Issue / Typo
                </a>
              </li>
              <li>
                <a href="#socials" className="hover:text-white transition-colors">
                  Discord & Study Pods
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Project Blueprints
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>by and for the open developer community.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-500 text-xs">Released under MIT License</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
