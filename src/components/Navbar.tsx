import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  Search,
  ArrowRight,
  ChevronDown,
  Check,
  Cpu,
  Layout,
  Server,
  Cloud,
  Film,
  Layers,
} from 'lucide-react';
import { communityInfo } from '../data/socialsData';
import type { DomainConfig } from '../types';

interface NavbarProps {
  completedCount: number;
  totalTopics: number;
  currentSlug: string;
  currentDomain: DomainConfig;
  domains: DomainConfig[];
  onSelectDomain: (slug: string) => void;
  onOpenContribute: () => void;
  onOpenCommandPalette?: () => void;
}

const getDomainIcon = (iconName: string) => {
  switch (iconName.toLowerCase()) {
    case 'cpu':
      return <Cpu className="w-3.5 h-3.5 text-zinc-300" />;
    case 'layout':
      return <Layout className="w-3.5 h-3.5 text-zinc-300" />;
    case 'server':
      return <Server className="w-3.5 h-3.5 text-zinc-300" />;
    case 'cloud':
      return <Cloud className="w-3.5 h-3.5 text-zinc-300" />;
    case 'film':
    case 'video':
      return <Film className="w-3.5 h-3.5 text-zinc-300" />;
    default:
      return <Layers className="w-3.5 h-3.5 text-zinc-300" />;
  }
};

export const Navbar: React.FC<NavbarProps> = ({
  completedCount,
  totalTopics,
  currentSlug,
  currentDomain,
  domains,
  onSelectDomain,
  onOpenCommandPalette,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const links = [
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#hosts', label: 'Hosts' },
    { href: '#resources', label: 'Resources' },
    { href: '#projects', label: 'Projects' },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDomainDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDomainChange = (slug: string) => {
    onSelectDomain(slug);
    setDomainDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000]/80 backdrop-blur-2xl border-b border-white/[0.06] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Dynamic Track Selector */}
          <div className="flex items-center gap-3">
            <a href={`/${currentSlug}`} className="flex items-center gap-2 group">
              <img
                src="/devs-logo.png"
                alt="DEVS"
                className="h-6 sm:h-7 w-auto object-contain transition-opacity group-hover:opacity-80"
              />
            </a>

            <div className="h-4 w-px bg-white/10 hidden sm:block" />

            {/* Dynamic Domain Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDomainDropdownOpen(!domainDropdownOpen)}
                className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-mono text-zinc-200 transition-all cursor-pointer group"
                title="Switch Domain"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-white tracking-wide text-xs">
                  {currentDomain.shortName}
                </span>
                <ChevronDown
                  className={`w-3 h-3 text-zinc-400 group-hover:text-white transition-transform ${
                    domainDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {domainDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-zinc-950/95 border border-white/10 shadow-2xl backdrop-blur-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-zinc-500 border-b border-white/[0.06] mb-1">
                    Select Technical Track
                  </div>
                  <div className="space-y-1">
                    {domains.map((d) => {
                      const isActive = d.slug === currentSlug;
                      return (
                        <button
                          key={d.slug}
                          onClick={() => handleDomainChange(d.slug)}
                          className={`flex items-center justify-between w-full px-3 py-2 rounded-xl text-left text-xs font-mono transition-all cursor-pointer ${
                            isActive
                              ? 'bg-white text-black font-semibold shadow-sm'
                              : 'text-zinc-300 hover:text-white hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={isActive ? 'text-black' : 'text-zinc-400'}>
                              {getDomainIcon(d.iconName)}
                            </span>
                            <div>
                              <div className="font-medium tracking-tight">{d.name}</div>
                              <div
                                className={`text-[10px] ${
                                  isActive ? 'text-zinc-700' : 'text-zinc-500'
                                }`}
                              >
                                /{d.slug}
                              </div>
                            </div>
                          </div>
                          {isActive ? (
                            <Check className="w-3.5 h-3.5 text-black shrink-0" />
                          ) : (
                            <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                              {d.badge}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Floating Pill Center Menu */}
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
                title="Search tracks, roadmap & mentors (⌘K)"
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

            {/* GitHub Repo Pill Button */}
            <a
              href={communityInfo.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95"
            >
              <span>GitHub</span>
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
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-4">
          <div className="pt-2">
            <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
              Select Track
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {domains.map((d) => {
                const isActive = d.slug === currentSlug;
                return (
                  <button
                    key={d.slug}
                    onClick={() => handleDomainChange(d.slug)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left text-xs font-mono transition-all ${
                      isActive
                        ? 'bg-white text-black font-semibold'
                        : 'bg-white/[0.03] text-zinc-300 border border-white/5'
                    }`}
                  >
                    <span>{getDomainIcon(d.iconName)}</span>
                    <span className="truncate">{d.shortName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-white/10" />

          <div className="space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-zinc-300 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
