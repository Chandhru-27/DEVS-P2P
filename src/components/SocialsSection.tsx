import React, { useState } from 'react';
import type { SocialLink } from '../types';
import { 
  Users, 
  ExternalLink, 
  Copy, 
  Check
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
        return <GithubIcon className="w-4 h-4 text-zinc-100" />;
      case 'discord':
        return <DiscordIcon className="w-4 h-4 text-zinc-100" />;
      case 'linkedin':
        return <LinkedinIcon className="w-4 h-4 text-zinc-100" />;
      case 'x':
        return <XIcon className="w-4 h-4 text-zinc-100" />;
      case 'youtube':
        return <YoutubeIcon className="w-4 h-4 text-zinc-100" />;
      case 'telegram':
        return <TelegramIcon className="w-4 h-4 text-zinc-100" />;
      default:
        return <Users className="w-4 h-4 text-zinc-100" />;
    }
  };

  return (
    <section id="socials" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800/80">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-3">
          <Users className="w-3.5 h-3.5" />
          <span>Community & Socials</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
          Connect with the Community
        </h2>
        <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          Join active peer study groups, voice channels for paper discussions, hackathon squads, and project code reviews.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {socials.map((social) => (
          <div
            key={social.platform}
            className="flex flex-col justify-between rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 p-5 shadow-sm transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border border-zinc-700/80">
                    {getPlatformIcon(social.platform)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-100">{social.name}</h3>
                    <span className="text-[11px] text-zinc-500 font-mono">{social.handle}</span>
                  </div>
                </div>

                {social.badge && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">
                    {social.badge}
                  </span>
                )}
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed">
                {social.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center gap-2">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 flex-1 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-medium transition-all"
              >
                <span>Join / Connect</span>
                <ExternalLink className="w-3 h-3 text-zinc-400" />
              </a>

              <button
                onClick={() => handleCopy(social.url)}
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors"
                title="Copy link"
              >
                {copiedHandle === social.url ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Community Banner */}
      <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-zinc-100">
            Open-Source & Peer-to-Peer
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
            Star the repository, propose improvements, or submit your own curated learning links via a pull request.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <a
            href={communityInfo.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-xs shadow-sm transition-all"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <button
            onClick={onOpenContribute}
            className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 text-xs font-medium transition-all"
          >
            Submit Resource
          </button>
        </div>
      </div>
    </section>
  );
};
