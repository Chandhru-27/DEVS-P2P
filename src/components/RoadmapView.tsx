import React, { useState, useEffect, useRef } from 'react';
import type { RoadmapPhase, Level } from '../types';
import { PhaseCard } from './PhaseCard';
import { 
  ChevronDown, 
  ChevronUp, 
  Play, 
  Pause, 
  Activity
} from 'lucide-react';

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
  const [expandAll, setExpandAll] = useState(false); // Collapsed by default to avoid messiness
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [isPlayingFlow, setIsPlayingFlow] = useState<boolean>(false);
  const flowTimerRef = useRef<number | null>(null);

  const filteredPhases = phases.filter((phase) => {
    if (levelFilter === 'All') return true;
    return phase.difficulty === levelFilter;
  });

  // Flow Player walkthrough: steps through phases automatically
  useEffect(() => {
    if (isPlayingFlow) {
      flowTimerRef.current = window.setInterval(() => {
        setActivePhaseIndex((prev) => {
          const next = (prev + 1) % phases.length;
          const targetElement = document.getElementById(phases[next].id);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          return next;
        });
      }, 4000);
    } else {
      if (flowTimerRef.current) {
        clearInterval(flowTimerRef.current);
      }
    }

    return () => {
      if (flowTimerRef.current) {
        clearInterval(flowTimerRef.current);
      }
    };
  }, [isPlayingFlow, phases]);

  const handleSelectPhase = (index: number) => {
    setActivePhaseIndex(index);
    const targetElement = document.getElementById(phases[index].id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleNextPhase = (currentIndex: number) => {
    const nextIndex = (currentIndex + 1) % phases.length;
    handleSelectPhase(nextIndex);
  };

  return (
    <section id="roadmap" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-1.5">
            <Activity className="w-3 h-3 text-emerald-400" />
            <span>Interactive Roadmap</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            AI & ML Curriculum Pipeline
          </h2>
        </div>

        {/* Walkthrough Player & View Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Flow Walkthrough Play/Pause Toggle */}
          <button
            onClick={() => setIsPlayingFlow(!isPlayingFlow)}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold transition-all border ${
              isPlayingFlow
                ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-sm'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border-zinc-800'
            }`}
          >
            {isPlayingFlow ? (
              <>
                <Pause className="w-3 h-3" />
                <span>Pause Tour</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3" />
                <span>Play Tour</span>
              </>
            )}
          </button>

          {/* Level Tabs */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium">
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevelFilter(lvl)}
                className={`px-2.5 py-1 rounded-md transition-all ${
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
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
          >
            {expandAll ? (
              <>
                <ChevronUp className="w-3 h-3 text-zinc-400" />
                <span>Collapse All</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-3 h-3 text-zinc-400" />
                <span>Expand All</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Compact Horizontal Pipeline DAG Navigator */}
      <div className="mb-6 p-3 sm:p-4 rounded-xl bg-zinc-950 border border-zinc-850 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[620px] relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-[1px] bg-zinc-800 -z-0">
            <svg className="w-full h-1 absolute -top-[1px] left-0 overflow-visible">
              <line
                x1="0%"
                y1="1"
                x2="100%"
                y2="1"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="1.5"
                className="flow-dash"
              />
            </svg>
          </div>

          {phases.map((phase, idx) => {
            const isActive = activePhaseIndex === idx;
            const isCompleted = phase.topics.every(t => completedTopics.includes(t.id));

            return (
              <button
                key={phase.id}
                onClick={() => handleSelectPhase(idx)}
                className="relative z-10 flex flex-col items-center group focus:outline-none"
              >
                {/* Node Circle */}
                <div
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-mono font-bold text-[11px] transition-all duration-200 border ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 border-white shadow-sm scale-105'
                      : isCompleted
                      ? 'bg-emerald-950 text-emerald-400 border-emerald-500/50'
                      : 'bg-zinc-900 text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  0{phase.phaseNumber}
                </div>

                {/* Node Title */}
                <span
                  className={`mt-1 text-[10px] font-mono whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-zinc-200 font-semibold'
                      : 'text-zinc-500 group-hover:text-zinc-400'
                  }`}
                >
                  {phase.title.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Roadmap Stack with Left Flow Beam on Desktop */}
      <div className="relative pl-0 md:pl-8">
        {/* Vertical Flow Track & Laser Beam */}
        <div className="hidden md:block absolute left-3 top-3 bottom-6 w-[1px] bg-zinc-800 overflow-hidden">
          <div className="flow-beam-line" />
        </div>

        {/* Phase Cards */}
        <div className="space-y-3">
          {filteredPhases.map((phase) => (
            <PhaseCard
              key={`${phase.id}-${expandAll}`}
              phase={phase}
              completedTopics={completedTopics}
              onToggleTopic={onToggleTopic}
              defaultExpanded={expandAll}
              isActiveNode={activePhaseIndex === phases.indexOf(phase)}
              onNextPhase={() => handleNextPhase(phases.indexOf(phase))}
              nextPhaseTitle={
                phases[(phases.indexOf(phase) + 1) % phases.length]?.title || ''
              }
              isLastPhase={phases.indexOf(phase) === phases.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
