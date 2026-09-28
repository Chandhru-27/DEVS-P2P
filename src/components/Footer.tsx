import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, DiscordIcon, LinkedinIcon } from './Icons';
import { communityInfo } from '../data/socialsData';
import { AnimateIn } from './AnimateIn';

export const Footer: React.FC = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const navLinks = [
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Hosts', href: '#hosts' },
    { label: 'Resources', href: '#resources' },
    { label: 'Projects', href: '#projects' },
  ];

  const socials = [
    { Icon: GithubIcon, href: communityInfo.repoUrl, label: 'GitHub' },
    { Icon: DiscordIcon, href: 'https://discord.gg/invite/devs-p2p', label: 'Discord' },
    { Icon: LinkedinIcon, href: 'https://linkedin.com/company/devs-p2p-ai', label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Brand */}
            <div className="md:col-span-5 space-y-4">
              <img src="/devs-logo.png" alt="DEVS" className="h-7 w-auto object-contain" />
              <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mt-3">
                An open, community-driven AI/ML curriculum. Free forever.
              </p>
              <div className="flex items-center gap-2">
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

            {/* Nav */}
            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Navigate</h4>
              <ul className="space-y-2.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-zinc-400 hover:text-white transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links */}
            <div className="md:col-span-4">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">Open Source</h4>
              <ul className="space-y-2.5">
                <li><a href={communityInfo.repoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">GitHub Repository</a></li>
                <li><a href={`${communityInfo.repoUrl}/issues`} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">Submit Feedback</a></li>
                <li><a href="https://github.com/rohitg00/ai-engineering-from-scratch" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors">AI Engineering from Scratch</a></li>
              </ul>
            </div>
          </div>
        </AnimateIn>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span>DEVs P2P · MIT License · {new Date().getFullYear()}</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-white transition-all cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
