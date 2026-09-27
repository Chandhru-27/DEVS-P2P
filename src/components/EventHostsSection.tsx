import React, { useState } from 'react';
import type { EventHost } from '../types';
import { 
  Users, 
  ExternalLink, 
  Mail, 
  Globe, 
  Check, 
  Copy,
  BookOpen
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from './Icons';

interface EventHostsSectionProps {
  hosts: EventHost[];
}

export const EventHostsSection: React.FC<EventHostsSectionProps> = ({ hosts }) => {
  const [selectedHostId, setSelectedHostId] = useState<string>(hosts[0]?.id || '');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const selectedHost = hosts.find((h) => h.id === selectedHostId) || hosts[0];

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <section id="hosts" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-850">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-1.5">
            <Users className="w-3 h-3 text-zinc-400" />
            <span>Event Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Event Hosts & Mentors
          </h2>
        </div>
        <p className="text-xs text-zinc-500 font-mono">
          Select a host to view session focus & direct socials
        </p>
      </div>

      {/* 4 Host Cards Selector Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        {hosts.map((host) => {
          const isSelected = host.id === selectedHost?.id;
          return (
            <button
              key={host.id}
              onClick={() => setSelectedHostId(host.id)}
              className={`text-left rounded-xl p-3 sm:p-4 transition-all duration-200 border relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-zinc-900 border-zinc-500 shadow-md ring-1 ring-zinc-500/30'
                  : 'bg-zinc-950/60 border-zinc-850 hover:bg-zinc-900/60 hover:border-zinc-700'
              }`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between w-full mb-2.5">
                <span className="text-[10px] font-mono text-zinc-500">
                  0{hosts.indexOf(host) + 1}
                </span>
                {isSelected ? (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-100 text-zinc-950 font-bold">
                    Active
                  </span>
                ) : (
                  <span className="text-[10px] text-zinc-500">Select</span>
                )}
              </div>

              {/* Photo Block */}
              <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-3 bg-zinc-900 border border-zinc-800">
                <img
                  src={host.avatarUrl}
                  alt={host.name}
                  className={`w-full h-full object-cover transition-all duration-200 ${
                    isSelected ? 'saturate-100 scale-105' : 'saturate-50 hover:saturate-100'
                  }`}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-zinc-400 bg-zinc-900 -z-10">
                  {host.initials}
                </div>
              </div>

              {/* Identity */}
              <div>
                <h3 className="font-bold text-sm text-zinc-100 truncate">
                  {host.name}
                </h3>
                <p className="text-[11px] text-zinc-500 truncate">
                  {host.role}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Host Details Banner */}
      {selectedHost && (
        <div className="rounded-2xl bg-zinc-950 border border-zinc-800 p-5 sm:p-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-zinc-850">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">
                  {selectedHost.name}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 font-mono">
                  {selectedHost.role}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                {selectedHost.bio}
              </p>
            </div>

            {/* Event Focus */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs shrink-0">
              <BookOpen className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <span className="font-medium text-zinc-300">{selectedHost.topicOrFocus}</span>
            </div>
          </div>

          {/* Socials Row */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-zinc-500 font-mono mr-1">Socials:</span>

            {selectedHost.socials.github && (
              <a
                href={selectedHost.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}

            {selectedHost.socials.linkedin && (
              <a
                href={selectedHost.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs transition-colors"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}

            {selectedHost.socials.x && (
              <a
                href={selectedHost.socials.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs transition-colors"
              >
                <XIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>X / Twitter</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}

            {selectedHost.socials.portfolio && (
              <a
                href={selectedHost.socials.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs transition-colors"
              >
                <Globe className="w-3.5 h-3.5 text-emerald-400" />
                <span>Portfolio</span>
                <ExternalLink className="w-3 h-3 text-zinc-500" />
              </a>
            )}

            {selectedHost.socials.email && (
              <button
                onClick={() => handleCopy(selectedHost.socials.email!)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 text-xs transition-colors font-mono"
                title="Copy email"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{selectedHost.socials.email}</span>
                {copiedLink === selectedHost.socials.email ? (
                  <Check className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-zinc-500" />
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
