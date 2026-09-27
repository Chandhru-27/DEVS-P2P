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
      className="relative rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 overflow-hidden shadow-xl"
    >
      {/* Top Accent Gradient Bar */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${phase.color}`} />

      <div className="p-5 sm:p-7">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center font-black text-white text-lg shadow-md shrink-0`}>
              0{phase.phaseNumber}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${phase.badgeColor}`}>
                  Phase {phase.phaseNumber}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700/50">
                  <Clock className="w-3 h-3 text-slate-400" />
                  {phase.duration}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
                  {phase.difficulty}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1.5">
                {phase.title}
              </h3>
            </div>
          </div>

          {/* Quick Progress & Expand toggle */}
          <div className="flex items-center gap-3 self-end sm:self-center">
            <div className="text-right">
              <div className="text-xs font-medium text-slate-400">
                {phaseCompletedCount}/{phaseTopicsCount} done
              </div>
              <div className="text-sm font-bold text-white">{phasePercent}%</div>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
            >
              <span>{expanded ? 'Collapse' : 'Explore Phase'}</span>
              {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Tagline & Overview */}
        <p className="mt-3 text-sm font-medium text-purple-300">
          {phase.tagline}
        </p>
        <p className="mt-2 text-sm text-slate-400 leading-relaxed max-w-4xl">
          {phase.overview}
        </p>

        {/* Expanded View: Topics Breakdown & Capstone */}
        {expanded && (
          <div className="mt-8 space-y-6 pt-6 border-t border-slate-800/80 animate-in fade-in duration-200">
            {/* Topics List */}
            <div className="space-y-4">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-purple-400" />
                Key Mastery Modules & Skills
              </h4>

              <div className="grid grid-cols-1 gap-4">
                {phase.topics.map((topic) => {
                  const isDone = completedTopics.includes(topic.id);
                  return (
                    <div
                      key={topic.id}
                      className={`p-4 sm:p-5 rounded-xl border transition-all ${
                        isDone
                          ? 'bg-emerald-950/20 border-emerald-500/30'
                          : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => onToggleTopic(topic.id)}
                            className="mt-0.5 text-slate-400 hover:text-emerald-400 transition-colors shrink-0"
                            title={isDone ? 'Mark as uncompleted' : 'Mark as completed'}
                          >
                            {isDone ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 fill-emerald-500/20" />
                            ) : (
                              <Circle className="w-5 h-5 text-slate-500 hover:text-slate-300" />
                            )}
                          </button>
                          <div>
                            <h5 className={`text-base font-semibold ${isDone ? 'text-emerald-200 line-through decoration-emerald-500/50' : 'text-white'}`}>
                              {topic.name}
                            </h5>
                            <p className="text-xs sm:text-sm text-slate-400 mt-1">
                              {topic.summary}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Key Skills Tags */}
                      <div className="mt-3 pl-8">
                        <div className="text-[11px] text-slate-500 font-semibold mb-1.5 uppercase tracking-wider">
                          Key Concepts & Skills:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {topic.keySkills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Recommended Resources Links */}
                      {topic.recommendedResources.length > 0 && (
                        <div className="mt-3 pl-8 pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-3">
                          <span className="text-[11px] text-slate-400 font-medium">Recommended:</span>
                          {topic.recommendedResources.map((res, rIdx) => (
                            <a
                              key={rIdx}
                              href={res.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 hover:underline"
                            >
                              <span>{res.title}</span>
                              <ExternalLink className="w-3 h-3" />
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
            <div className="mt-6 rounded-xl bg-gradient-to-br from-purple-950/30 to-slate-900/60 border border-purple-500/30 p-5">
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Award className="w-4 h-4 text-purple-400" />
                Phase Milestone Capstone
              </div>
              <h4 className="text-lg font-bold text-white">
                {phase.milestoneProject.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {phase.milestoneProject.description}
              </p>

              <div className="mt-3">
                <span className="text-xs font-semibold text-slate-400">Deliverables to ship:</span>
                <ul className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {phase.milestoneProject.deliverables.map((deliv, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/50 p-2 rounded-lg border border-slate-700/50">
                      <FolderCheck className="w-3.5 h-3.5 text-purple-400 shrink-0" />
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
