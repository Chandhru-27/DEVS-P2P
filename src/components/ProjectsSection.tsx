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
    <section id="projects" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proof of Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Capstone Portfolio Projects
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Six end-to-end architectures designed to validate real-world engineering capability rather than toy tutorials.
          </p>
        </div>

        {/* Filter */}
        <div className="flex items-center p-1 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium">
          {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setDifficultyFilter(lvl)}
              className={`px-3 py-1 rounded-md transition-all ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all p-5 shadow-sm group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-mono text-zinc-400 bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800">
                  {project.phase}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-500 border border-zinc-800">
                  {project.difficulty}
                </span>
              </div>

              <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors">
                {project.title}
              </h3>

              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                {project.description}
              </p>

              {project.datasetName && (
                <div className="mt-3 p-2 rounded bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 flex items-center justify-between font-mono">
                  <div className="flex items-center gap-1.5 truncate">
                    <Database className="w-3 h-3 text-zinc-500 shrink-0" />
                    <span className="truncate text-[11px]">{project.datasetName}</span>
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

              <div className="mt-4">
                <div className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-semibold mb-1.5">
                  Mastery Outcomes:
                </div>
                <ul className="space-y-1.5">
                  {project.learningOutcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <CheckCircle className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-zinc-800/80">
              <div className="flex flex-wrap gap-1 mb-3">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-850 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#socials"
                className="flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
              >
                <Users className="w-3 h-3 text-zinc-400" />
                <span>Pair with a Study Peer</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
