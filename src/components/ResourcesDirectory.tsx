import React, { useState, useMemo } from 'react';
import type { Resource, ResourceType } from '../types';
import { 
  Search, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  BookOpen, 
  Video, 
  FolderGit2, 
  FileText, 
  GraduationCap,
  Layers,
  X
} from 'lucide-react';

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
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [freeOnly, setFreeOnly] = useState(false);
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  const resourceTypes: (ResourceType | 'All')[] = [
    'All',
    'Course',
    'Video',
    'Book',
    'GitHub',
    'Documentation',
    'Interactive',
    'Paper',
  ];

  const filteredResources = useMemo(() => {
    return resources.filter((res) => {
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        res.title.toLowerCase().includes(query) ||
        res.description.toLowerCase().includes(query) ||
        res.authorOrProvider.toLowerCase().includes(query) ||
        res.tags.some((tag) => tag.toLowerCase().includes(query));

      const matchesType = selectedType === 'All' || res.type === selectedType;
      const matchesLevel = selectedLevel === 'All' || res.level === selectedLevel;
      const matchesCost = !freeOnly || res.cost === 'Free';
      const matchesBookmark = !onlyBookmarked || bookmarkedIds.includes(res.id);

      return matchesSearch && matchesType && matchesLevel && matchesCost && matchesBookmark;
    });
  }, [resources, searchTerm, selectedType, selectedLevel, freeOnly, onlyBookmarked, bookmarkedIds]);

  const getTypeIcon = (type: ResourceType) => {
    switch (type) {
      case 'Course':
        return <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />;
      case 'Video':
        return <Video className="w-3.5 h-3.5 text-zinc-400" />;
      case 'Book':
        return <BookOpen className="w-3.5 h-3.5 text-zinc-400" />;
      case 'GitHub':
        return <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />;
      case 'Paper':
        return <FileText className="w-3.5 h-3.5 text-zinc-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-zinc-400" />;
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedType('All');
    setSelectedLevel('All');
    setFreeOnly(false);
    setOnlyBookmarked(false);
  };

  const isFiltered = searchTerm || selectedType !== 'All' || selectedLevel !== 'All' || freeOnly || onlyBookmarked;

  return (
    <section id="resources" className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Vetted AI/ML Resources & Tools
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
            High-signal materials recommended by engineers. Textbooks, lecture series, interactive sandboxes, and foundational papers.
          </p>
        </div>

        {/* Saved Count */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOnlyBookmarked(!onlyBookmarked)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
              onlyBookmarked
                ? 'bg-zinc-100 text-zinc-950 border-zinc-200 font-semibold'
                : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-zinc-700'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-zinc-950 text-zinc-950' : 'text-zinc-400'}`} />
            <span>Saved ({bookmarkedIds.length})</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-4 mb-8 space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by topic, author, or keyword (e.g. Karpathy, PyTorch, RAG, Math)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-zinc-500 font-mono mr-1">Type:</span>
            {resourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedType === type
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs rounded-lg px-2.5 py-1 focus:outline-none focus:border-zinc-500 font-mono"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <button
              onClick={() => setFreeOnly(!freeOnly)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${
                freeOnly
                  ? 'bg-zinc-100 text-zinc-950 border-zinc-200 font-bold'
                  : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              }`}
            >
              Free Only {freeOnly && '✓'}
            </button>

            {isFiltered && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-zinc-500 hover:text-zinc-300 underline font-mono ml-2"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-xl bg-zinc-950 border border-zinc-800">
          <BookOpen className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
          <h3 className="text-sm font-semibold text-zinc-300">No resources found</h3>
          <p className="text-xs text-zinc-500 mt-1">Try adjusting your filters or search keywords.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredResources.map((res) => {
            const isBookmarked = bookmarkedIds.includes(res.id);
            return (
              <div
                key={res.id}
                className="flex flex-col justify-between rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all p-5 shadow-sm group"
              >
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-zinc-950 text-[10px] font-mono text-zinc-400 border border-zinc-800">
                      {getTypeIcon(res.type)}
                      <span>{res.type}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 text-zinc-400 border border-zinc-800">
                        {res.cost}
                      </span>
                      <button
                        onClick={() => onToggleBookmark(res.id)}
                        className="text-zinc-500 hover:text-zinc-300 transition-colors"
                        title={isBookmarked ? 'Remove' : 'Save'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 text-zinc-100 fill-zinc-100" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-100 group-hover:text-white transition-colors">
                    {res.title}
                  </h4>

                  <p className="text-[11px] text-zinc-500 font-mono mt-0.5">
                    By {res.authorOrProvider}
                  </p>

                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {res.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-950 text-zinc-500 border border-zinc-850 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-200 transition-colors"
                  >
                    <span>View Resource</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};
