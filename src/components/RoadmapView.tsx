import React, { useState } from 'react';
import type { RoadmapPhase, Level } from '../types';
import { PhaseCard } from './PhaseCard';
import { ChevronDown, ChevronUp, RotateCcw } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

interface RoadmapViewProps {
  phases: RoadmapPhase[];
  completedTopics: string[];
  onToggleTopic: (topicId: string) => void;
  onResetProgress?: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  phases,
  completedTopics,
  onToggleTopic,
  onResetProgress,
}) => {
  const [levelFilter, setLevelFilter] = useState<'All' | Level>('All');
  const [expandAll, setExpandAll] = useState(false);

  const totalTopics = phases.reduce((acc, p) => acc + p.topics.length, 0);
  const completedCount = completedTopics.length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  const filteredPhases = phases.filter((phase) => {
    if (levelFilter === 'All') return true;
    return phase.difficulty === levelFilter;
  });

  return (
    <section id="roadmap" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400 text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>Curriculum</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Learning Roadmap
              </h2>
              <p className="mt-3 text-sm text-zinc-400 max-w-lg leading-relaxed">
                Six phases from mathematical foundations to production ML systems. Track your progress as you go.
              </p>

              {/* Inline progress */}
              <div className="mt-5 flex items-center gap-3">
                <div className="w-40 h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-white/40 transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-xs font-mono text-zinc-400">
                  {completedCount} / {totalTopics} completed
                </span>
                {completedCount > 0 && onResetProgress && (
                  <button
                    onClick={onResetProgress}
                    className="text-[11px] text-zinc-500 hover:text-zinc-300 flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs">
                {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelFilter(lvl)}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      levelFilter === lvl
                        ? 'bg-white/[0.1] text-white font-semibold'
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setExpandAll(!expandAll)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs text-zinc-300 transition-colors cursor-pointer"
              >
                {expandAll ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Collapse All</span>
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
        </AnimateIn>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* Animated vertical line */}
          <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-[2px] bg-white/10 timeline-glow rounded-full" />

          <div className="space-y-5">
            {filteredPhases.map((phase, idx) => (
              <AnimateIn key={phase.id} delay={idx * 80}>
                <div className="relative">
                  {/* Timeline node */}
                  <div className="absolute -left-[25px] sm:-left-[29px] top-7 w-3 h-3 rounded-full bg-zinc-950 border-2 border-white/30 z-10" />

                  <PhaseCard
                    phase={phase}
                    completedTopics={completedTopics}
                    onToggleTopic={onToggleTopic}
                    defaultExpanded={expandAll}
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
