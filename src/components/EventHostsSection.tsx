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
    <section id="hosts" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800/80">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700/80 text-zinc-300 text-xs font-semibold uppercase tracking-wider mb-4">
          <Users className="w-3.5 h-3.5 text-zinc-400" />
          <span>Event Leadership & Mentors</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
          Meet Your Event Hosts
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed">
          Four practitioners guiding the DEVs P2P sessions. Choose any host below to review their speaking focus, experience, and connect across their socials.
        </p>
      </div>

      {/* 4 Host Cards Selector Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
        {hosts.map((host) => {
          const isSelected = host.id === selectedHost?.id;
          return (
            <button
              key={host.id}
              onClick={() => setSelectedHostId(host.id)}
              className={`group text-left rounded-2xl p-4 sm:p-5 transition-all duration-200 border relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-zinc-900 border-zinc-400/60 shadow-xl shadow-black/40 ring-1 ring-zinc-400/30 -translate-y-1'
                  : 'bg-zinc-950/60 border-zinc-800/80 hover:bg-zinc-900/60 hover:border-zinc-700'
              }`}
            >
              {/* Active Indicator Top Pill */}
              <div className="flex items-center justify-between w-full mb-3.5">
                <span className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider">
                  Host 0{hosts.indexOf(host) + 1}
                </span>
                {isSelected ? (
                  <span className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-950 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Selected
                  </span>
                ) : (
                  <span className="text-[11px] text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    Click to view
                  </span>
                )}
              </div>

              {/* Photo Block */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800">
                <img
                  src={host.avatarUrl}
                  alt={host.name}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    isSelected ? 'scale-105 saturate-100' : 'saturate-[0.75] group-hover:saturate-100 group-hover:scale-105'
                  }`}
                  onError={(e) => {
                    // Fallback to initials avatar placeholder
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                {/* Fallback Initials */}
                <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl text-zinc-400 bg-zinc-900 -z-10">
                  {host.initials}
                </div>
              </div>

              {/* Basic Host Details */}
              <div>
                <h3 className="font-bold text-base text-zinc-100 group-hover:text-white transition-colors">
                  {host.name}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-0.5 line-clamp-1">
                  {host.role}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Host Deep-Dive Block & Socials */}
      {selectedHost && (
        <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-9 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Host Photo & Quick Identity */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-zinc-700/80 shadow-2xl bg-zinc-950 mb-4">
                <img
                  src={selectedHost.avatarUrl}
                  alt={selectedHost.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight">
                {selectedHost.name}
              </h3>
              <p className="text-sm font-semibold text-zinc-300 mt-0.5">
                {selectedHost.role}
              </p>
              <p className="text-xs text-zinc-500 font-medium mt-1">
                {selectedHost.headline}
              </p>
            </div>

            {/* Speaking Focus, Bio & Socials */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
              {/* Event Topic / Focus Banner */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Event Session & Mentorship Focus</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-zinc-100">
                  {selectedHost.topicOrFocus}
                </p>
              </div>

              {/* Bio */}
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                  About the Host
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedHost.bio}
                </p>
              </div>

              {/* Socials Block */}
              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <span>Connect with {selectedHost.name}</span>
                </h4>

                <div className="flex flex-wrap items-center gap-3">
                  {/* GitHub */}
                  {selectedHost.socials.github && (
                    <a
                      href={selectedHost.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 text-xs font-medium transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  )}

                  {/* LinkedIn */}
                  {selectedHost.socials.linkedin && (
                    <a
                      href={selectedHost.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-blue-600 hover:text-white text-zinc-100 border border-zinc-700 text-xs font-medium transition-all"
                    >
                      <LinkedinIcon className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  )}

                  {/* X / Twitter */}
                  {selectedHost.socials.x && (
                    <a
                      href={selectedHost.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-cyan-600 hover:text-white text-zinc-100 border border-zinc-700 text-xs font-medium transition-all"
                    >
                      <XIcon className="w-4 h-4 text-cyan-400" />
                      <span>X / Twitter</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  )}

                  {/* Portfolio Website */}
                  {selectedHost.socials.portfolio && (
                    <a
                      href={selectedHost.socials.portfolio}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 text-xs font-medium transition-all"
                    >
                      <Globe className="w-4 h-4 text-emerald-400" />
                      <span>Portfolio</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  )}

                  {/* Direct Email */}
                  {selectedHost.socials.email && (
                    <button
                      onClick={() => handleCopy(selectedHost.socials.email!)}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 text-xs font-medium transition-all"
                      title="Copy email address"
                    >
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span className="font-mono">{selectedHost.socials.email}</span>
                      {copiedLink === selectedHost.socials.email ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      )}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
