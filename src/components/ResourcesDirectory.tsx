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
  X,
  ChevronDown
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
  const [visibleCount, setVisibleCount] = useState<number>(6); // Show 6 initially to keep it uncluttered

  const resourceTypes: (ResourceType | 'All')[] = [
    'All',
    'Course',
    'Video',
    'Book',
    'GitHub',
    'Documentation',
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
        return <GraduationCap className="w-3 h-3 text-zinc-400" />;
      case 'Video':
        return <Video className="w-3 h-3 text-zinc-400" />;
      case 'Book':
        return <BookOpen className="w-3 h-3 text-zinc-400" />;
      case 'GitHub':
        return <FolderGit2 className="w-3 h-3 text-zinc-400" />;
      case 'Paper':
        return <FileText className="w-3 h-3 text-zinc-400" />;
      default:
        return <Layers className="w-3 h-3 text-zinc-400" />;
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
    <section id="resources" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-850">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono font-medium mb-1.5">
            <BookOpen className="w-3 h-3" />
            <span>Curated Resources</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100 tracking-tight">
            Vetted Learning Library
          </h2>
        </div>

        {/* Bookmarked Filter Pill */}
        <button
          onClick={() => setOnlyBookmarked(!onlyBookmarked)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium border transition-all ${
            onlyBookmarked
              ? 'bg-zinc-100 text-zinc-950 border-zinc-200 font-semibold'
              : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <Bookmark className={`w-3 h-3 ${onlyBookmarked ? 'fill-zinc-950 text-zinc-950' : 'text-zinc-500'}`} />
          <span>Saved ({bookmarkedIds.length})</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-3 mb-6 space-y-2.5">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by topic, library, or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-8 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex flex-wrap items-center gap-1">
            {resourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-2 py-0.5 rounded text-[11px] font-medium transition-all ${
                  selectedType === type
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 border border-zinc-850'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] rounded px-2 py-0.5 font-mono focus:outline-none"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <button
              onClick={() => setFreeOnly(!freeOnly)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono border transition-colors ${
                freeOnly
                  ? 'bg-zinc-100 text-zinc-950 border-zinc-200 font-bold'
                  : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
              }`}
            >
              Free Only {freeOnly && '✓'}
            </button>

            {isFiltered && (
              <button
                onClick={clearAllFilters}
                className="text-[11px] text-zinc-500 hover:text-zinc-300 underline font-mono"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {filteredResources.slice(0, visibleCount).map((res) => {
          const isBookmarked = bookmarkedIds.includes(res.id);
          return (
            <div
              key={res.id}
              className="flex flex-col justify-between rounded-xl bg-zinc-900/40 border border-zinc-850 hover:border-zinc-700 transition-all p-4 shadow-sm group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1 px-1.5 py-0.2 rounded bg-zinc-950 text-[10px] font-mono text-zinc-400 border border-zinc-800">
                    {getTypeIcon(res.type)}
                    <span>{res.type}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono text-zinc-500">
                      {res.cost}
                    </span>
                    <button
                      onClick={() => onToggleBookmark(res.id)}
                      className="text-zinc-500 hover:text-zinc-300 transition-colors"
                      title={isBookmarked ? 'Remove' : 'Save'}
                    >
                      {isBookmarked ? (
                        <BookmarkCheck className="w-3.5 h-3.5 text-zinc-100 fill-zinc-100" />
                      ) : (
                        <Bookmark className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-zinc-100 truncate group-hover:text-white transition-colors">
                  {res.title}
                </h4>

                <p className="text-[10px] text-zinc-500 font-mono mt-0.5">
                  By {res.authorOrProvider}
                </p>

                <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {res.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-zinc-850 flex items-center justify-between">
                <div className="flex gap-1 overflow-hidden">
                  {res.tags.slice(0, 2).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-1 py-0.2 rounded bg-zinc-950 text-zinc-500 font-mono truncate max-w-[80px]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-300 hover:text-white underline decoration-zinc-700 hover:decoration-white"
                >
                  <span>Open</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show more toggle */}
      {filteredResources.length > visibleCount && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + 6)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
          >
            <span>Show more ({filteredResources.length - visibleCount} remaining)</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </section>
  );
};
