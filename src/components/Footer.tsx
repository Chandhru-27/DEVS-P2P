import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, DiscordIcon, LinkedinIcon } from './Icons';
import { communityInfo } from '../data/socialsData';
import { AnimateIn } from './AnimateIn';
import type { DomainConfig } from '../types';

interface FooterProps {
  currentSlug?: string;
  domains?: DomainConfig[];
  onSelectDomain?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentSlug,
  domains = [],
  onSelectDomain,
}) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Hosts & Mentors', href: '#hosts' },
    { label: 'Curated Resources', href: '#resources' },
    { label: 'Proof-of-Work Projects', href: '#projects' },
  ];

  const socials = [
    { Icon: GithubIcon, href: communityInfo.repoUrl, label: 'GitHub' },
    { Icon: DiscordIcon, href: 'https://discord.gg/invite/devs-p2p', label: 'Discord' },
    { Icon: LinkedinIcon, href: 'https://linkedin.com/company/devs-p2p-ai', label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="md:col-span-4 space-y-4">
              <img src="/devs-logo.png" alt="DEVS" className="h-7 w-auto object-contain" />
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mt-3">
                DEVs P2P open engineering curricula. Multi-domain peer-to-peer roadmaps, production architectures, and community mentorship.
              </p>
              <div className="flex items-center gap-2 pt-2">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center text-zinc-400 hover:text-white transition-all"
                    title={label}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Technical Tracks (Dynamic Domain Links) */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4 font-mono">
                Technical Tracks
              </h4>
              <ul className="space-y-2 text-xs font-mono">
                {domains.map((d) => {
                  const isActive = d.slug === currentSlug;
                  return (
                    <li key={d.slug}>
                      <button
                        onClick={() => {
                          onSelectDomain?.(d.slug);
                          scrollToTop();
                        }}
                        className={`text-left transition-colors flex items-center gap-2 cursor-pointer ${
                          isActive
                            ? 'text-white font-bold'
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className={isActive ? 'text-emerald-400' : 'text-zinc-600'}>
                          ›
                        </span>
                        <span>{d.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Navigation */}
            <div className="md:col-span-2">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4 font-mono">
                Navigate
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Open Source */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4 font-mono">
                Open Source
              </h4>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <a
                    href={communityInfo.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    GitHub Organization
                  </a>
                </li>
                <li>
                  <a
                    href={`${communityInfo.repoUrl}/issues`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    Suggest a Track / Topic
                  </a>
                </li>
                <li>
                  <span className="text-zinc-500 font-mono text-[11px] block mt-2">
                    Template architecture for 6+ engineering tracks.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </AnimateIn>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>DEVs P2P · MIT Open Curriculum · {new Date().getFullYear()}</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-white transition-all cursor-pointer font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
