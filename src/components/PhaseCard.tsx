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
  Award
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

  const phaseTopicsCount = phase.topics.length;
  const phaseCompletedCount = phase.topics.filter(t => completedTopics.includes(t.id)).length;
  const phasePercent = Math.round((phaseCompletedCount / phaseTopicsCount) * 100);

  return (
    <div
      id={phase.id}
      className="rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700/80 transition-all duration-200 overflow-hidden shadow-lg"
    >
      <div className="p-5 sm:p-7">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-zinc-100 text-sm shrink-0">
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
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 mt-1.5">
                {phase.title}
              </h3>
            </div>
          </div>

          {/* Quick Progress & Expand */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            <div className="text-right">
              <div className="text-[11px] font-mono text-zinc-500">
                {phaseCompletedCount}/{phaseTopicsCount} done
              </div>
              <div className="text-xs font-bold text-zinc-200">{phasePercent}%</div>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
            >
              <span>{expanded ? 'Collapse' : 'Explore'}</span>
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
          <div className="mt-6 space-y-6 pt-6 border-t border-zinc-800/80 animate-in fade-in duration-150">
            {/* Modules List */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-mono font-semibold flex items-center gap-2">
                <BookMarked className="w-3.5 h-3.5 text-zinc-400" />
                Core Modules & Key Skills
              </h4>

              <div className="grid grid-cols-1 gap-3">
                {phase.topics.map((topic) => {
                  const isDone = completedTopics.includes(topic.id);
                  return (
                    <div
                      key={topic.id}
                      className={`p-4 rounded-xl border transition-all ${
                        isDone
                          ? 'bg-zinc-950/90 border-zinc-700'
                          : 'bg-zinc-950/50 border-zinc-850 hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => onToggleTopic(topic.id)}
                            className="mt-0.5 text-zinc-500 hover:text-zinc-200 transition-colors shrink-0"
                            title={isDone ? 'Mark as incomplete' : 'Mark as complete'}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-zinc-600 hover:text-zinc-400" />
                            )}
                          </button>
                          <div>
                            <h5 className={`text-sm font-semibold ${isDone ? 'text-zinc-400 line-through' : 'text-zinc-100'}`}>
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
                          <span className="text-[11px] text-zinc-500 font-mono">Vetted:</span>
                          {topic.recommendedResources.map((res, rIdx) => (
                            <a
                              key={rIdx}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] text-zinc-300 hover:text-white underline decoration-zinc-600 hover:decoration-white"
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
          </div>
        )}
      </div>
    </div>
  );
};
