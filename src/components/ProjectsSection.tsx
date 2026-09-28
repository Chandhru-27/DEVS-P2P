import React, { useState } from 'react';
import type { ProjectIdea, Level } from '../types';
import { ExternalLink, Database, Check } from 'lucide-react';
import { AnimateIn } from './AnimateIn';

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
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400 text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                <span>Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Capstone Projects
              </h2>
              <p className="mt-3 text-sm text-zinc-400 max-w-lg leading-relaxed">
                Build real projects at each milestone to solidify your skills and grow your portfolio.
              </p>
            </div>

            <div className="flex items-center p-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs self-start sm:self-auto">
              {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setDifficultyFilter(lvl)}
                  className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    difficultyFilter === lvl
                      ? 'bg-white/[0.1] text-white font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, idx) => (
            <AnimateIn key={project.id} delay={idx * 60}>
              <div className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-5 lift">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono text-zinc-400">
                      {project.phase.split(':')[0]}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {project.difficulty}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-1.5">{project.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">{project.description}</p>

                  {project.datasetName && (
                    <div className="mt-3 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs text-zinc-400 flex items-center justify-between font-mono">
                      <div className="flex items-center gap-1.5 truncate">
                        <Database className="w-3 h-3 text-zinc-500 shrink-0" />
                        <span className="truncate">{project.datasetName}</span>
                      </div>
                      {project.datasetUrl && (
                        <a
                          href={project.datasetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-white ml-2 transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="mt-3 space-y-1.5">
                    {project.learningOutcomes.slice(0, 2).map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.04] flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
