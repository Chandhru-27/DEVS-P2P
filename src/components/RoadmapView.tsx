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
    <section id="roadmap" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Structured Learning Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            The Complete AI/ML Roadmap
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            6 progressive milestones designed to take you from foundational Python & linear algebra to deep neural networks, large language models, and high-performance MLOps serving.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Level Filter Tabs */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevelFilter(lvl)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  levelFilter === lvl
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Expand/Collapse Toggle */}
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 transition-colors"
          >
            {expandAll ? (
              <>
                <ChevronUp className="w-3.5 h-3.5 text-purple-400" />
                <span>Collapse Details</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3.5 h-3.5 text-purple-400" />
                <span>Expand All Modules</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Phases Stack */}
      <div className="space-y-8 relative">
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
