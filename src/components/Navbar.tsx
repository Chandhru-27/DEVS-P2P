import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Share2, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  FolderGit2, 
  Users,
  UserCheck
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
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-[#09090b]/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/80 text-zinc-100 font-black text-xs font-mono group-hover:border-zinc-500 transition-colors">
              P2P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                  DEVs P2P
                </span>
                <span className="text-zinc-600 font-mono text-xs">/</span>
                <span className="text-xs text-zinc-400 font-mono tracking-wide">
                  AI & ML
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#hosts"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <UserCheck className="w-3.5 h-3.5 text-zinc-400" />
              Event Hosts
            </a>
            <a
              href="#roadmap"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-zinc-400" />
              Roadmap
            </a>
            <a
              href="#resources"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
              Resources
            </a>
            <a
              href="#projects"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
              Projects
            </a>
            <a
              href="#socials"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <Users className="w-3.5 h-3.5 text-zinc-400" />
              Community
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Progress badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400">
              <CheckCircle2 className={`w-3 h-3 ${progressPercent > 0 ? 'text-emerald-400' : 'text-zinc-600'}`} />
              <span>{progressPercent}% Complete</span>
            </div>

            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
              title="Share Link"
            >
              <Share2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenContribute}
              className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
            >
              Contribute
            </button>

            <a
              href={communityInfo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs shadow-sm transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={handleShare}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Copied toast */}
        {copied && (
          <div className="absolute top-16 right-4 px-3 py-1.5 rounded-md bg-zinc-100 text-zinc-950 text-xs font-semibold shadow-lg">
            Link copied!
          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800 bg-[#0c0c0e] px-4 pt-3 pb-6 space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-zinc-800/80 text-xs text-zinc-400">
            <span>Roadmap Progress:</span>
            <span className="font-semibold text-zinc-200">{progressPercent}%</span>
          </div>

          <a
            href="#hosts"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-900"
          >
            <UserCheck className="w-4 h-4 text-zinc-400" />
            Event Hosts
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-900"
          >
            <Compass className="w-4 h-4 text-zinc-400" />
            Roadmap
          </a>
          <a
            href="#resources"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-900"
          >
            <BookOpen className="w-4 h-4 text-zinc-400" />
            Resources
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-900"
          >
            <FolderGit2 className="w-4 h-4 text-zinc-400" />
            Projects
          </a>
          <a
            href="#socials"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-zinc-200 hover:bg-zinc-900"
          >
            <Users className="w-4 h-4 text-zinc-400" />
            Community & Socials
          </a>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContribute();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold bg-zinc-900 text-zinc-200 border border-zinc-800"
            >
              Contribute Resource
            </button>
            <a
              href={communityInfo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-xs font-semibold bg-zinc-100 text-zinc-950"
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
