import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  FolderCheck,
  BookMarked,
  Award,
  ArrowDown,
  ArrowRight
} from 'lucide-react';
import type { RoadmapPhase } from '../types';

interface PhaseCardProps {
  phase: RoadmapPhase;
  completedTopics: string[];
  onToggleTopic: (topicId: string) => void;
  defaultExpanded?: boolean;
  isActiveNode?: boolean;
  onNextPhase?: () => void;
  nextPhaseTitle?: string;
  isLastPhase?: boolean;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  completedTopics,
  onToggleTopic,
  defaultExpanded = false,
  isActiveNode = false,
  onNextPhase,
  nextPhaseTitle,
  isLastPhase = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const phaseTopicsCount = phase.topics.length;
  const phaseCompletedCount = phase.topics.filter(t => completedTopics.includes(t.id)).length;
  const phasePercent = Math.round((phaseCompletedCount / phaseTopicsCount) * 100);
  const isPhaseCompleted = phasePercent === 100;

  return (
    <div className="relative group">
      {/* Card Container */}
      <div
        id={phase.id}
        className={`rounded-2xl transition-all duration-300 overflow-hidden shadow-xl border ${
          isActiveNode
            ? 'bg-zinc-900 border-zinc-500 shadow-zinc-900/50 ring-1 ring-zinc-500/40'
            : isPhaseCompleted
            ? 'bg-zinc-950/90 border-emerald-500/40'
            : 'bg-zinc-900/60 border-zinc-800 hover:border-zinc-700'
        }`}
      >
        <div className="p-5 sm:p-7">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start sm:items-center gap-3.5">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-sm shrink-0 border transition-transform group-hover:scale-105 ${
                  isPhaseCompleted
                    ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                    : isActiveNode
                    ? 'bg-zinc-100 text-zinc-950 border-white'
                    : 'bg-zinc-800 text-zinc-200 border-zinc-700/80'
                }`}
              >
                0{phase.phaseNumber}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700">
                    Phase 0{phase.phaseNumber}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                    <Clock className="w-3 h-3 text-zinc-500" />
                    {phase.duration}
                  </span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800 font-mono">
                    {phase.difficulty}
                  </span>
                  {isPhaseCompleted && (
                    <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-mono font-medium">
                      ✓ Completed
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1.5 flex items-center gap-2">
                  <span>{phase.title}</span>
                </h3>
              </div>
            </div>

            {/* Quick Progress & Expand */}
            <div className="flex items-center gap-3 self-end sm:self-center">
              <div className="text-right">
                <div className="text-[11px] font-mono text-zinc-500">
                  {phaseCompletedCount}/{phaseTopicsCount} mastered
                </div>
                <div className="text-xs font-bold text-zinc-200">{phasePercent}%</div>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
              >
                <span>{expanded ? 'Collapse' : 'Explore Modules'}</span>
                {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Tagline & Overview */}
          <p className="mt-2.5 text-xs sm:text-sm font-medium text-zinc-300">
            {phase.tagline}
          </p>
          <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-4xl">
            {phase.overview}
          </p>

          {/* Expanded View */}
          {expanded && (
            <div className="mt-6 space-y-6 pt-6 border-t border-zinc-800/80 animate-in fade-in duration-200">
              {/* Modules List */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-mono font-semibold flex items-center gap-2">
                  <BookMarked className="w-3.5 h-3.5 text-zinc-400" />
                  Key Modules & Interactive Progress
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {phase.topics.map((topic) => {
                    const isDone = completedTopics.includes(topic.id);
                    return (
                      <div
                        key={topic.id}
                        className={`p-4 rounded-xl border transition-all duration-200 ${
                          isDone
                            ? 'bg-zinc-950 border-emerald-500/30'
                            : 'bg-zinc-950/50 border-zinc-850 hover:border-zinc-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <button
                              onClick={() => onToggleTopic(topic.id)}
                              className="mt-0.5 text-zinc-500 hover:text-zinc-200 transition-all shrink-0 hover:scale-110 active:scale-95"
                              title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Circle className="w-4 h-4 text-zinc-600 hover:text-zinc-400" />
                              )}
                            </button>
                            <div>
                              <h5 className={`text-sm font-semibold transition-colors ${isDone ? 'text-zinc-400 line-through' : 'text-zinc-100'}`}>
                                {topic.name}
                              </h5>
                              <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                                {topic.summary}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Skills Tags */}
                        <div className="mt-2.5 pl-7">
                          <div className="flex flex-wrap gap-1.5">
                            {topic.keySkills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-300 border border-zinc-800 font-mono"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Resources Links */}
                        {topic.recommendedResources.length > 0 && (
                          <div className="mt-2.5 pl-7 pt-2 border-t border-zinc-850 flex flex-wrap items-center gap-3">
                            <span className="text-[11px] text-zinc-500 font-mono">Curated:</span>
                            {topic.recommendedResources.map((res, rIdx) => (
                              <a
                                key={rIdx}
                                href={res.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white underline decoration-zinc-600 hover:decoration-white transition-colors"
                              >
                                <span>{res.title}</span>
                                <ExternalLink className="w-3 h-3 text-zinc-500" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Phase Capstone Project Box */}
              <div className="rounded-xl bg-zinc-950 border border-zinc-800 p-5">
                <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Award className="w-3.5 h-3.5" />
                  Phase Milestone Proof-of-Work
                </div>
                <h4 className="text-base font-bold text-zinc-100">
                  {phase.milestoneProject.title}
                </h4>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {phase.milestoneProject.description}
                </p>

                <div className="mt-3">
                  <span className="text-[11px] font-mono text-zinc-500">Deliverables:</span>
                  <ul className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {phase.milestoneProject.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-zinc-300 bg-zinc-900 p-2 rounded-lg border border-zinc-800">
                        <FolderCheck className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Next Phase Flow Connector Button */}
              {!isLastPhase && onNextPhase && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={onNextPhase}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-all group/btn"
                  >
                    <span>Proceed to Next Phase: {nextPhaseTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Downward Flow Connector between cards (except last) */}
      {!isLastPhase && (
        <div className="flex flex-col items-center py-3 relative">
          {/* Subtle line */}
          <div className="w-px h-8 bg-zinc-800 relative overflow-hidden">
            <div className="w-full h-4 bg-zinc-400/80 animate-pulse" />
          </div>
          {/* Flow Direction Indicator */}
          <div className="animated-chevron text-zinc-600">
            <ArrowDown className="w-3.5 h-3.5" />
          </div>
        </div>
      )}
    </div>
  );
};
