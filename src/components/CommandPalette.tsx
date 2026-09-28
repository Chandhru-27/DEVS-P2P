import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  X,
  UserCheck,
  Compass,
  BookOpen,
  FolderGit2,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { communityInfo } from '../data/socialsData';
import type { DomainConfig } from '../types';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  currentDomain: DomainConfig;
  domains: DomainConfig[];
  onSelectDomain: (slug: string) => void;
  onSelectHost?: (hostId: string) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  currentDomain,
  domains,
  onSelectDomain,
  onSelectHost,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Build searchable items
  const items = [
    // Technical Tracks
    ...domains.map((d) => ({
      id: `domain-${d.slug}`,
      title: `Switch to Track: ${d.name} (/${d.slug})`,
      category: 'Technical Track',
      icon: <Layers className="w-3.5 h-3.5 text-zinc-400" />,
      action: () => {
        onSelectDomain(d.slug);
        onClose();
      },
    })),
    // Current Domain Hosts
    ...currentDomain.hostsData.map((h) => ({
      id: h.id,
      title: `${h.name} — ${h.role} (${currentDomain.shortName})`,
      category: 'Event Host',
      icon: <UserCheck className="w-3.5 h-3.5 text-zinc-400" />,
      action: () => {
        onSelectHost?.(h.id);
        document.getElementById('hosts')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    })),
    // Current Domain Roadmap Phases
    ...currentDomain.roadmapData.map((p) => ({
      id: p.id,
      title: `Phase 0${p.phaseNumber}: ${p.title}`,
      category: 'Roadmap Milestone',
      icon: <Compass className="w-3.5 h-3.5 text-zinc-400" />,
      action: () => {
        document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    })),
    // Quick Actions
    {
      id: 'action-resources',
      title: `Browse ${currentDomain.shortName} Curated Library & Docs`,
      category: 'Navigation',
      icon: <BookOpen className="w-3.5 h-3.5 text-zinc-400" />,
      action: () => {
        document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'action-projects',
      title: `Explore ${currentDomain.shortName} Proof-of-Work Projects`,
      category: 'Navigation',
      icon: <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      },
    },
    {
      id: 'action-github',
      title: 'Star GitHub Repository',
      category: 'External',
      icon: <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />,
      action: () => {
        window.open(communityInfo.repoUrl, '_blank');
        onClose();
      },
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose} 
      />

      <div className="w-full max-w-xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[75vh]">
        {/* Search header */}
        <div className="flex items-center px-4 py-3.5 border-b border-zinc-800/80">
          <Search className="w-4 h-4 text-zinc-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={`Search ${currentDomain.name}, roadmap, or type 'frontend'/'backend'...`}
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded text-zinc-500 hover:text-zinc-300 ml-2 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results list */}
        <div className="p-2 overflow-y-auto flex-1 divide-y divide-zinc-900">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-xs text-zinc-500">
              No matching results found for "{query}"
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                    isSelected ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-900/50'
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <span className="p-1.5 rounded-md bg-zinc-950 border border-zinc-800 shrink-0">
                      {item.icon}
                    </span>
                    <span className="truncate font-medium">{item.title}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-3">
                    <span className="text-[10px] font-mono uppercase text-zinc-500">
                      {item.category}
                    </span>
                    <ArrowRight className="w-3 h-3 text-zinc-600" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 border-t border-zinc-850 bg-zinc-950/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>Esc Close</span>
          </div>
          <span className="text-[10px] text-zinc-600">DEVs P2P · Multi-Domain Template</span>
        </div>
      </div>
    </div>
  );
};
