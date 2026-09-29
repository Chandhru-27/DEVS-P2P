import React, { useState, useMemo } from 'react';
import type { Resource, ResourceType } from '../types';
import {
  Search,
  ExternalLink,
  Bookmark,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  GraduationCap,
  FolderGit2,
  FileText,
  Video,
  Layers,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { AnimateIn } from './AnimateIn';

interface ResourcesDirectoryProps {
  resources: Resource[];
  bookmarkedIds: string[];
  onToggleBookmark: (resourceId: string) => void;
}

export const ResourcesDirectory: React.FC<ResourcesDirectoryProps> = ({
  resources,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [copiedCmd, setCopiedCmd] = useState(false);

  // Dynamically find the active domain's featured resource
  const featuredResource = useMemo(() => {
    return resources.find((r) => r.featured) || resources[0];
  }, [resources]);

  const isAiEngineeringTutor = Boolean(
    featuredResource &&
      (featuredResource.url.includes('aiengineeringfromscratch') ||
        featuredResource.title.toLowerCase().includes('ai engineering from scratch'))
  );

  const tutorCommand = 'npx skills add rohitg00/ai-engineering-from-scratch';

  const handleCopyTutor = () => {
    navigator.clipboard.writeText(tutorCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const categories: (ResourceType | 'All')[] = [
    'All',
    'GitHub',
    'Course',
    'Book',
    'Video',
    'Documentation',
    'Paper',
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        res.title.toLowerCase().includes(query) ||
        res.description.toLowerCase().includes(query) ||
        res.authorOrProvider.toLowerCase().includes(query);
      const matchesType = selectedType === 'All' || res.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [resources, searchTerm, selectedType]);

  const getTypeIcon = (type: ResourceType) => {
    switch (type) {
      case 'Course':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'Book':
        return <BookOpen className="w-3.5 h-3.5" />;
      case 'GitHub':
        return <FolderGit2 className="w-3.5 h-3.5" />;
      case 'Paper':
        return <FileText className="w-3.5 h-3.5" />;
      case 'Video':
        return <Video className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="resources" className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimateIn>
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-zinc-400 text-xs font-medium mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
              <span>Resources</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Curated Learning Library
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed px-2">
              Hand-picked textbooks, courses, and repositories supporting every roadmap phase.
            </p>
          </div>
        </AnimateIn>

        {/* Dynamic Domain Featured Resource */}
        {featuredResource && (
          <AnimateIn delay={100}>
            <div className="mb-8 sm:mb-10 rounded-2xl border border-white/[0.1] bg-white/[0.03] p-4 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/[0.06] text-white border border-white/[0.08] text-xs font-medium">
                    <Sparkles className="w-3 h-3 text-zinc-300" />
                    <span>Featured</span>
                  </span>
                  <span className="text-xs text-zinc-400">by {featuredResource.authorOrProvider}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/[0.06]">
                    {featuredResource.type}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {featuredResource.cost}
                  </span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {featuredResource.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-2 max-w-3xl leading-relaxed">
                {featuredResource.description}
              </p>

              {/* Key tags */}
              {featuredResource.tags && featuredResource.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {featuredResource.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-zinc-400 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2.5 sm:gap-3">
                {isAiEngineeringTutor && (
                  <button
                    onClick={handleCopyTutor}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 border border-white/[0.06] text-[11px] sm:text-xs font-mono text-zinc-300 transition-all cursor-pointer max-w-full"
                  >
                    <span className="text-zinc-500">$</span>
                    <span className="truncate">{tutorCommand}</span>
                    {copiedCmd ? (
                      <Check className="w-3.5 h-3.5 text-zinc-200 shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    )}
                  </button>
                )}

                <a
                  href={featuredResource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs font-semibold transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-102 active:scale-98 cursor-pointer"
                >
                  <span>Open Resource</span>
                  <ExternalLink className="w-3.5 h-3.5 text-black" />
                </a>

                {featuredResource.url.includes('github.com') && (
                  <a
                    href={featuredResource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-medium text-zinc-200 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>
                )}
              </div>
            </div>
          </AnimateIn>
        )}

        {/* Search & Filter */}
        <AnimateIn delay={150}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search resources..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition-all"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedType(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedType === cat
                      ? 'bg-white/[0.1] text-white font-semibold'
                      : 'bg-white/[0.02] text-zinc-400 hover:text-zinc-200 border border-white/[0.06]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimateIn>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.slice(0, visibleCount).map((res, idx) => {
            const isSaved = bookmarkedIds.includes(res.id);
            return (
              <AnimateIn key={res.id} delay={idx * 60}>
                <div className="flex flex-col justify-between h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] p-5 lift">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                        {getTypeIcon(res.type)}
                        <span>{res.type}</span>
                      </div>
                      <button
                        onClick={() => onToggleBookmark(res.id)}
                        className="text-zinc-500 hover:text-white transition-colors cursor-pointer"
                        aria-label={isSaved ? 'Remove bookmark' : 'Bookmark resource'}
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-white text-white' : ''}`} />
                      </button>
                    </div>

                    <h4 className="text-sm font-semibold text-white mb-1">{res.title}</h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">{res.description}</p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500">{res.authorOrProvider}</span>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-zinc-300 hover:text-white font-medium transition-colors"
                    >
                      <span>Open</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        {/* Show more */}
        {filteredResources.length > visibleCount && (
          <div className="mt-10 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-sm font-medium text-zinc-300 transition-all cursor-pointer"
            >
              Show more ({filteredResources.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};
