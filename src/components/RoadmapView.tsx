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
  const [expandAll, setExpandAll] = useState(true);
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
      }, 4500);
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
    <section id="roadmap" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-3">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Interactive Flow Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-100 tracking-tight">
            The AI & ML Learning Pipeline
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            A dynamic, interconnected sequence designed for deep retention. Follow the animated pipeline or trigger the walkthrough to trace the full developer progression.
          </p>
        </div>

        {/* Walkthrough Player & View Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Flow Walkthrough Play/Pause Toggle */}
          <button
            onClick={() => setIsPlayingFlow(!isPlayingFlow)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
              isPlayingFlow
                ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-md shadow-emerald-500/20'
                : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border-zinc-800'
            }`}
          >
            {isPlayingFlow ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>Pause Walkthrough</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>Play Flow Tour</span>
              </>
            )}
          </button>

          {/* Level Tabs */}
          <div className="flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium">
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
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

      {/* Horizontal Pipeline DAG Navigator with Animated Connectors */}
      <div className="mb-12 p-4 sm:p-6 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-xl overflow-x-auto">
        <div className="flex items-center justify-between min-w-[700px] relative">
          {/* Animated Connecting Line running through all nodes */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-zinc-800 -z-0">
            {/* Animated Laser Beam */}
            <svg className="w-full h-2 absolute -top-[3px] left-0 overflow-visible">
              <line
                x1="0%"
                y1="4"
                x2="100%"
                y2="4"
                stroke="rgba(255, 255, 255, 0.4)"
                strokeWidth="2"
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
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 border ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 border-white shadow-lg shadow-white/20 scale-110 pulse-node'
                      : isCompleted
                      ? 'bg-emerald-950 text-emerald-400 border-emerald-500'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  0{phase.phaseNumber}
                </div>

                {/* Node Title */}
                <span
                  className={`mt-2 text-[11px] font-mono whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-zinc-100 font-bold'
                      : 'text-zinc-500 group-hover:text-zinc-300'
                  }`}
                >
                  {phase.title.split(' ')[0]} {phase.title.split(' ')[1] || ''}
                </span>

                {/* Status Dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full mt-1 ${
                    isActive
                      ? 'bg-emerald-400 animate-ping'
                      : isCompleted
                      ? 'bg-emerald-500'
                      : 'bg-zinc-800'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Roadmap Stack with Left Flow Beam on Desktop */}
      <div className="relative pl-0 md:pl-10">
        {/* Vertical Flow Track & Laser Beam */}
        <div className="hidden md:block absolute left-4 top-4 bottom-12 w-[2px] bg-zinc-800/80 overflow-hidden">
          <div className="flow-beam-line" />
        </div>

        {/* Phase Cards */}
        <div className="space-y-2">
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
