import React, { useState } from 'react';
import type { ProjectIdea, Level } from '../types';
import { 
  FolderGit2, 
  ExternalLink, 
  CheckCircle, 
  Database 
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
    <section id="projects" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-850">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-1.5">
            <FolderGit2 className="w-3 h-3" />
            <span>Portfolio Capstones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Proof of Work Architectures
          </h2>
        </div>

        {/* Filter */}
        <div className="flex items-center p-0.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium">
          {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setDifficultyFilter(lvl)}
              className={`px-2.5 py-1 rounded-md transition-all ${
                difficultyFilter === lvl
                  ? 'bg-zinc-100 text-zinc-950 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all p-4 shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-1.5 py-0.2 rounded border border-zinc-800">
                  {project.phase.split(':')[0]}
                </span>
                <span className="text-[10px] font-mono text-zinc-500">
                  {project.difficulty}
                </span>
              </div>

              <h3 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-zinc-400 mt-1 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {project.datasetName && (
                <div className="mt-2.5 p-1.5 rounded bg-zinc-950 border border-zinc-850 text-[11px] text-zinc-400 flex items-center justify-between font-mono">
                  <div className="flex items-center gap-1.5 truncate">
                    <Database className="w-3 h-3 text-zinc-500 shrink-0" />
                    <span className="truncate">{project.datasetName}</span>
                  </div>
                  {project.datasetUrl && (
                    <a
                      href={project.datasetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white ml-2"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}

              <div className="mt-3">
                <ul className="space-y-1">
                  {project.learningOutcomes.slice(0, 2).map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-1.5 text-[11px] text-zinc-400">
                      <CheckCircle className="w-3 h-3 text-zinc-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3.5 pt-2.5 border-t border-zinc-850 flex flex-wrap gap-1">
              {project.techStack.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[10px] px-1.5 py-0.2 rounded bg-zinc-950 text-zinc-400 border border-zinc-850 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
