import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Award, 
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
        className={`rounded-xl transition-all duration-200 overflow-hidden border ${
          isActiveNode
            ? 'bg-zinc-900 border-zinc-500 shadow-md ring-1 ring-zinc-500/30'
            : isPhaseCompleted
            ? 'bg-zinc-950 border-emerald-500/30'
            : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
        }`}
      >
        <div className="p-4 sm:p-5">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div
                className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${
                  isPhaseCompleted
                    ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                    : isActiveNode
                    ? 'bg-zinc-100 text-zinc-950 border-white'
                    : 'bg-zinc-850 text-zinc-300 border-zinc-700'
                }`}
              >
                0{phase.phaseNumber}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-zinc-100">
                    {phase.title}
                  </h3>
                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                    <Clock className="w-2.5 h-2.5 text-zinc-500" />
                    {phase.duration}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                    {phase.difficulty}
                  </span>
                  {isPhaseCompleted && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      ✓ Done
                    </span>
                  )}
                </div>
                <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">
                  {phase.tagline}
                </p>
              </div>
            </div>

            {/* Quick Progress & Expand */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="text-right hidden sm:block">
                <span className="text-[11px] font-mono text-zinc-500">
                  {phaseCompletedCount}/{phaseTopicsCount}
                </span>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
              >
                <span>{expanded ? 'Hide' : 'View'}</span>
                {expanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* Expanded Bite-Sized View */}
          {expanded && (
            <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-3 animate-in fade-in duration-150">
              {/* Topics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {phase.topics.map((topic) => {
                  const isDone = completedTopics.includes(topic.id);
                  return (
                    <div
                      key={topic.id}
                      className={`p-3 rounded-lg border transition-all ${
                        isDone
                          ? 'bg-zinc-950 border-emerald-500/30'
                          : 'bg-zinc-950/70 border-zinc-800/90 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <button
                          onClick={() => onToggleTopic(topic.id)}
                          className="mt-0.5 text-zinc-500 hover:text-zinc-200 transition-transform hover:scale-110 active:scale-95 shrink-0"
                        >
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-zinc-600 hover:text-zinc-400" />
                          )}
                        </button>
                        <div className="flex-1 min-w-0">
                          <h5 className={`text-xs font-semibold truncate ${isDone ? 'text-zinc-500 line-through' : 'text-zinc-200'}`}>
                            {topic.name}
                          </h5>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug line-clamp-2">
                            {topic.summary}
                          </p>

                          {/* Quick Skills */}
                          <div className="flex flex-wrap gap-1 mt-2">
                            {topic.keySkills.map((skill, sIdx) => (
                              <span
                                key={sIdx}
                                className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Top Resource */}
                          {topic.recommendedResources.length > 0 && (
                            <div className="mt-2 flex items-center gap-1 text-[10px] text-zinc-400">
                              <span className="text-zinc-600">Top:</span>
                              <a
                                href={topic.recommendedResources[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-0.5 text-zinc-300 hover:text-white underline decoration-zinc-700"
                              >
                                <span className="truncate max-w-[180px]">{topic.recommendedResources[0].title}</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Compact Capstone Box */}
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                  <span className="font-mono text-zinc-500">Capstone:</span>
                  <span className="font-semibold text-zinc-200 truncate">{phase.milestoneProject.title}</span>
                </div>
                {!isLastPhase && onNextPhase && (
                  <button
                    onClick={onNextPhase}
                    className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 hover:text-zinc-200 self-end sm:self-auto shrink-0"
                  >
                    <span>Next: {nextPhaseTitle?.split(' ')[0]}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
