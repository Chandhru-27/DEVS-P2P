import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  Circle,
  Clock,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Award,
} from 'lucide-react';
import type { RoadmapPhase } from '../types';

interface PhaseCardProps {
  phase: RoadmapPhase;
  completedTopics: string[];
  onToggleTopic: (topicId: string) => void;
  defaultExpanded?: boolean;
}

export const PhaseCard: React.FC<PhaseCardProps> = ({
  phase,
  completedTopics,
  onToggleTopic,
  defaultExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  useEffect(() => {
    setExpanded(defaultExpanded);
  }, [defaultExpanded]);

  const totalTopics = phase.topics.length;
  const completedCount = phase.topics.filter((t) => completedTopics.includes(t.id)).length;
  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  const isComplete = totalTopics > 0 && completedCount === totalTopics;

  return (
    <div
      id={phase.id}
      className={`rounded-2xl border transition-all duration-200 lift ${
        isComplete
          ? 'border-emerald-500/20 bg-emerald-500/[0.02]'
          : 'border-white/[0.06] bg-white/[0.02]'
      }`}
    >
      {/* Header */}
      <div className="p-3.5 sm:p-5 flex items-start justify-between gap-3 sm:gap-4">
        <div className="flex items-start gap-3 sm:gap-4 min-w-0 flex-1">
          {/* Phase number badge */}
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center font-mono font-bold text-xs sm:text-sm shrink-0 border mt-0.5 sm:mt-0 ${
              isComplete
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                : 'bg-white/[0.06] text-white border-white/[0.1]'
            }`}
          >
            0{phase.phaseNumber}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                {phase.title}
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-zinc-400 bg-white/[0.04] px-1.5 sm:px-2 py-0.5 rounded-md border border-white/[0.06]">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  {phase.duration}
                </span>
                <span className="text-[10px] sm:text-[11px] px-1.5 sm:px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                  {phase.difficulty}
                </span>
              </div>
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-1 line-clamp-1 leading-relaxed">
              {phase.tagline}
            </p>

            {/* Inline progress bar */}
            {completedCount > 0 && (
              <div className="flex items-center gap-2 mt-2">
                <div className="w-20 sm:w-24 h-1 rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isComplete ? 'bg-emerald-400' : 'bg-white/40'
                    }`}
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-zinc-500">
                  {completedCount}/{totalTopics}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Expand button */}
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] hover:border-white/[0.1] text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer shrink-0 mt-0.5"
        >
          <span className="hidden sm:inline">{expanded ? 'Collapse' : 'Expand'}</span>
          {expanded ? <ChevronUp className="w-3.5 h-3.5 text-zinc-400" /> : <ChevronDown className="w-3.5 h-3.5 text-zinc-400" />}
        </button>
      </div>

      {/* Expanded Topics */}
      {expanded && (
        <div className="px-3.5 sm:px-5 pb-4 sm:pb-5 pt-1 border-t border-white/[0.04] space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3 pt-3">
            {phase.topics.map((topic) => {
              const isTopicDone = completedTopics.includes(topic.id);
              return (
                <div
                  key={topic.id}
                  className={`p-3 sm:p-3.5 rounded-xl border transition-all ${
                    isTopicDone
                      ? 'bg-emerald-500/[0.02] border-emerald-500/15'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.1]'
                  }`}
                >
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => onToggleTopic(topic.id)}
                      className="mt-0.5 transition-transform hover:scale-110 active:scale-95 cursor-pointer shrink-0"
                      aria-label={isTopicDone ? `Mark ${topic.name} as incomplete` : `Mark ${topic.name} as complete`}
                    >
                      {isTopicDone ? (
                        <CheckCircle2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-400" />
                      ) : (
                        <Circle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-600 hover:text-zinc-400" />
                      )}
                    </button>

                    <div className="flex-1 min-w-0">
                      <h4
                        className={`text-xs sm:text-[13px] font-semibold leading-snug ${
                          isTopicDone ? 'text-zinc-500 line-through' : 'text-zinc-200'
                        }`}
                      >
                        {topic.name}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                        {topic.summary}
                      </p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-1 mt-2">
                        {topic.keySkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Recommended resource */}
                      {topic.recommendedResources.length > 0 && (
                        <a
                          href={topic.recommendedResources[0].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-1 text-[10px] sm:text-[11px] text-zinc-300 hover:text-white transition-colors"
                        >
                          <span className="truncate max-w-[180px] sm:max-w-[200px]">
                            {topic.recommendedResources[0].title}
                          </span>
                          <ExternalLink className="w-2.5 h-2.5 text-zinc-400" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Milestone */}
          <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-2.5 sm:gap-3 text-xs">
            <Award className="w-4 h-4 text-zinc-400 shrink-0" />
            <div className="min-w-0">
              <span className="text-zinc-500 text-[11px] sm:text-xs">Milestone: </span>
              <span className="font-semibold text-zinc-200 text-[11px] sm:text-xs truncate">
                {phase.milestoneProject.title}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
