import React, { useState } from 'react';
import { Menu, X, Search, ExternalLink, ArrowRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { communityInfo } from '../data/socialsData';

interface NavbarProps {
  completedCount: number;
  totalTopics: number;
  onOpenContribute: () => void;
  onOpenCommandPalette?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  completedCount,
  totalTopics,
  onOpenCommandPalette,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const links = [
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#hosts', label: 'Event Hosts' },
    { href: '#resources', label: 'Resources' },
    { href: '#projects', label: 'Projects' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/70 backdrop-blur-2xl border-b border-white/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with official DEVS branding */}
          <a href="#" className="flex items-center gap-2 group">
            <img
              src="/devs-logo.png"
              alt="DEVS"
              className="h-6 sm:h-7 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </a>

          {/* Floating Pill Center Menu (Matching Reference Image) */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-white/10 backdrop-blur-xl shadow-inner">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.06] transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-zinc-400 hover:text-zinc-200 transition-all cursor-pointer"
                title="Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5" />
                <kbd className="px-1.5 py-0.2 rounded bg-zinc-800 text-[10px] font-mono text-zinc-400 border border-zinc-700">
                  ⌘K
                </kbd>
              </button>
            )}

            {progressPercent > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>{progressPercent}%</span>
              </div>
            )}

            {/* Reference-style White Pill Button */}
            <a
              href={communityInfo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
            >
              <span>Get started</span>
              <ArrowRight className="w-3 h-3 text-black" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            {onOpenCommandPalette && (
              <button
                onClick={onOpenCommandPalette}
                className="p-2 text-zinc-400 hover:text-white cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-2xl px-4 py-4 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm text-zinc-300 hover:bg-white/[0.05] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={communityInfo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-white text-black text-xs font-semibold"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
