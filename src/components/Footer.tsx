import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, DiscordIcon, LinkedinIcon, XIcon } from './Icons';
import { communityInfo } from '../data/socialsData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex items-center justify-center w-7 h-7 rounded-md bg-zinc-900 border border-zinc-700 text-zinc-100 font-mono font-bold text-xs">
                P2P
              </div>
              <span className="font-bold text-sm text-zinc-100">
                DEVs P2P AI/ML
              </span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed max-w-sm">
              An open, peer-to-peer curriculum and knowledge hub designed to break down barriers to entry in Artificial Intelligence and Machine Learning.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <a
                href={communityInfo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://discord.gg/invite/devs-p2p"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="Discord"
              >
                <DiscordIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com/company/devs-p2p-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/DevsP2PAI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                title="X"
              >
                <XIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-zinc-300 text-xs font-mono uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li><a href="#hosts" className="hover:text-zinc-200 transition-colors">Event Hosts & Mentors</a></li>
              <li><a href="#roadmap" className="hover:text-zinc-200 transition-colors">Curriculum Roadmap</a></li>
              <li><a href="#resources" className="hover:text-zinc-200 transition-colors">Curated Resources</a></li>
              <li><a href="#projects" className="hover:text-zinc-200 transition-colors">Capstone Projects</a></li>
            </ul>
          </div>

          {/* Open Source */}
          <div className="space-y-2.5">
            <h4 className="font-semibold text-zinc-300 text-xs font-mono uppercase tracking-wider">
              Open Source
            </h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>
                <a href={communityInfo.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">
                  GitHub Repository
                </a>
              </li>
              <li>
                <a href={`${communityInfo.repoUrl}/issues`} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-200 transition-colors">
                  Submit Feedback / Issues
                </a>
              </li>
              <li>
                <a href="#socials" className="hover:text-zinc-200 transition-colors">
                  Discord Study Pods
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 font-mono text-[11px]">
          <div>
            DEVs P2P AI/ML • Released under the MIT License
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-zinc-400 hover:text-zinc-200 bg-zinc-900 hover:bg-zinc-850 px-2.5 py-1 rounded border border-zinc-800 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
