import React, { useState } from 'react';
import type { RoadmapPhase, Level } from '../types';
import { PhaseCard } from './PhaseCard';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface RoadmapViewProps {
  phases: RoadmapPhase[];
  completedTopics: string[];
  onToggleTopic: (topicId: string) => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  phases,
  completedTopics,
  onToggleTopic,
}) => {
  const [levelFilter, setLevelFilter] = useState<'All' | Level>('All');
  const [expandAll, setExpandAll] = useState(true);

  const filteredPhases = phases.filter((phase) => {
    if (levelFilter === 'All') return true;
    return phase.difficulty === levelFilter;
  });

  return (
    <section id="roadmap" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Curriculum Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Comprehensive AI & ML Roadmap
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Six progressive phases engineered to take you from foundational mathematics to high-throughput production MLOps deployment.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Level Filter Tabs */}
          <div className="flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevelFilter(lvl)}
                className={`px-3 py-1 rounded-md transition-all ${
                  levelFilter === lvl
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Expand/Collapse Toggle */}
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
          >
            {expandAll ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
                <span>Collapse</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />
                <span>Expand All</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Phases Stack */}
      <div className="space-y-6">
        {filteredPhases.map((phase) => (
          <PhaseCard
            key={`${phase.id}-${expandAll}`}
            phase={phase}
            completedTopics={completedTopics}
            onToggleTopic={onToggleTopic}
            defaultExpanded={expandAll}
          />
        ))}
      </div>
    </section>
  );
};
