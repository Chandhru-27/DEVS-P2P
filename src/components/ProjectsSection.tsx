import React, { useState } from 'react';
import type { ProjectIdea, Level } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle, 
  Database, 
  Users 
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectIdea[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | Level>('All');

  const filteredProjects = projects.filter((proj) => {
    if (difficultyFilter === 'All') return true;
    return proj.difficulty === difficultyFilter;
  });

  return (
    <section id="projects" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Real-World Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Capstone Portfolio Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Recruiters and engineering leads don't care about toy tutorials. Build these 6 end-to-end architectures to prove practical engineering excellence.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium">
          {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setDifficultyFilter(lvl)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                difficultyFilter === lvl
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/40 transition-all p-6 shadow-xl relative overflow-hidden group hover:-translate-y-1"
          >
            {/* Top Bar Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

            <div>
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {project.phase}
                </span>
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                  {project.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {project.description}
              </p>

              {/* Dataset info if available */}
              {project.datasetName && (
                <div className="mt-4 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Database className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span className="truncate">Dataset: {project.datasetName}</span>
                  </div>
                  {project.datasetUrl && (
                    <a
                      href={project.datasetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 ml-2"
                      title="Open dataset link"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

              {/* Learning Outcomes */}
              <div className="mt-4">
                <div className="text-[11px] uppercase tracking-wider text-slate-400 font-bold mb-2">
                  What you will master:
                </div>
                <ul className="space-y-1.5">
                  {project.learningOutcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Stack & Peer CTA */}
            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-emerald-300 border border-slate-700/60 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#socials"
                  className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Build with a P2P Study Partner</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
