import React, { useState } from 'react';
import { 
  Brain, 
  Menu, 
  X, 
  Share2, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  FolderGit2, 
  Users 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { communityInfo } from '../data/socialsData';

interface NavbarProps {
  completedCount: number;
  totalTopics: number;
  onOpenContribute: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ completedCount, totalTopics, onOpenContribute }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <Brain className="w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#090d16] animate-pulse"></div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-purple-300 transition-colors">
                  DEVs P2P
                </span>
                <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  AI / ML
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block tracking-wide">
                Peer-to-Peer Roadmap & Resources
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <a
              href="#roadmap"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              <Compass className="w-4 h-4 text-purple-400" />
              Roadmap
            </a>
            <a
              href="#resources"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-blue-400" />
              Resources
            </a>
            <a
              href="#projects"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              <FolderGit2 className="w-4 h-4 text-emerald-400" />
              Projects
            </a>
            <a
              href="#socials"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            >
              <Users className="w-4 h-4 text-pink-400" />
              Socials & Community
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Progress indicator badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/50 text-xs text-slate-300">
              <CheckCircle2 className={`w-3.5 h-3.5 ${progressPercent > 0 ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>
                Progress: <strong className="text-white">{progressPercent}%</strong>
              </span>
            </div>

            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              title="Share or Copy Link"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Contribute CTA */}
            <button
              onClick={onOpenContribute}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-purple-300 bg-purple-950/40 hover:bg-purple-900/60 border border-purple-800/50 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Contribute
            </button>

            {/* GitHub Repo */}
            <a
              href={communityInfo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white shadow-sm transition-all hover:scale-105"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Copied toast notice */}
        {copied && (
          <div className="absolute top-20 right-4 px-3 py-1.5 rounded-md bg-emerald-500 text-slate-950 text-xs font-semibold shadow-lg animate-bounce">
            Link copied to clipboard!
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0c1222] px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-slate-800/80 text-xs text-slate-400">
            <span>Your Roadmap Progress:</span>
            <span className="font-semibold text-emerald-400">{progressPercent}% ({completedCount}/{totalTopics} completed)</span>
          </div>

          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <Compass className="w-4 h-4 text-purple-400" />
            Roadmap
          </a>
          <a
            href="#resources"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <BookOpen className="w-4 h-4 text-blue-400" />
            Curated Resources
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <FolderGit2 className="w-4 h-4 text-emerald-400" />
            Projects Portfolio
          </a>
          <a
            href="#socials"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-200 hover:bg-slate-800"
          >
            <Users className="w-4 h-4 text-pink-400" />
            Socials & Community
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContribute();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold bg-purple-900/50 text-purple-200 border border-purple-700/50"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Contribute Resources
            </button>
            <a
              href={communityInfo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold bg-slate-800 text-white border border-slate-700"
            >
              <GithubIcon className="w-4 h-4" />
              Star on GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
