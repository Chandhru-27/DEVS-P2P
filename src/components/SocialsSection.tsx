import React, { useState } from 'react';
import type { SocialLink } from '../types';
import { 
  Users, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { 
  GithubIcon, 
  DiscordIcon, 
  LinkedinIcon, 
  XIcon, 
  YoutubeIcon, 
  TelegramIcon 
} from './Icons';
import { communityInfo } from '../data/socialsData';

interface SocialsSectionProps {
  socials: SocialLink[];
  onOpenContribute: () => void;
}

export const SocialsSection: React.FC<SocialsSectionProps> = ({ socials, onOpenContribute }) => {
  const [copiedHandle, setCopiedHandle] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHandle(text);
    setTimeout(() => setCopiedHandle(null), 2000);
  };

  const getPlatformIcon = (platform: SocialLink['platform']) => {
    switch (platform) {
      case 'github':
        return <GithubIcon className="w-5 h-5 text-white" />;
      case 'discord':
        return <DiscordIcon className="w-5 h-5 text-indigo-400" />;
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5 text-blue-400" />;
      case 'x':
        return <XIcon className="w-5 h-5 text-cyan-400" />;
      case 'youtube':
        return <YoutubeIcon className="w-5 h-5 text-red-500" />;
      case 'telegram':
        return <TelegramIcon className="w-5 h-5 text-sky-400" />;
      default:
        return <Users className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="socials" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>The DEVs P2P Community</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Connect With Our Socials & Peers
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          AI & Machine Learning can feel overwhelming when studied alone. Join our peer network to share roadmaps, collaborate on code, host paper reading sessions, and build hackathon-winning projects.
        </p>
      </div>

      {/* Social Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {socials.map((social) => (
          <div
            key={social.platform}
            className="flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-6 backdrop-blur-xl shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center border border-slate-700/80 group-hover:scale-110 transition-transform">
                    {getPlatformIcon(social.platform)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{social.name}</h3>
                    <span className="text-xs text-slate-400 font-mono">{social.handle}</span>
                  </div>
                </div>

                {social.badge && (
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    {social.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                {social.description}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-purple-600 hover:text-white text-slate-200 text-xs font-semibold transition-all"
              >
                <span>Join / Follow</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => handleCopy(social.url)}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Copy link"
              >
                {copiedHandle === social.url ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Community Ethos & Action Callout */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-900/30 via-slate-900/90 to-blue-900/30 border border-purple-500/20 p-6 sm:p-10 backdrop-blur-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Peer-to-Peer Protocol</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why P2P Learning Works Faster
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Traditional online courses leave you isolated in tutorial purgatory. DEVs P2P connects you with developers at your exact phase so you can:
            </p>

            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                <span><strong>Pair Programming & Code Reviews:</strong> Spot bugs and tensor shape mismatches in minutes.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                <span><strong>Weekly Paper Reading Groups:</strong> Deconstruct ArXiv deep learning & LLM papers collaboratively.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold shrink-0">✓</div>
                <span><strong>Hackathons & Open-Source:</strong> Team up to build real portfolio-grade projects.</span>
              </li>
            </ul>
          </div>

          {/* Quick Start Callout */}
          <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 text-center space-y-4">
            <h4 className="text-lg font-bold text-white">
              Ready to Join the Community?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Check out the official GitHub repository, give it a star, and browse the open issues or add your own study notes.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={communityInfo.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs transition-all shadow-lg shadow-purple-600/30 flex-1"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Open GitHub Repo</span>
              </a>

              <button
                onClick={onOpenContribute}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-all flex-1"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Submit Resource / PR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
