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
      // Search keyword
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        res.title.toLowerCase().includes(query) ||
        res.description.toLowerCase().includes(query) ||
        res.authorOrProvider.toLowerCase().includes(query) ||
        res.tags.some((tag) => tag.toLowerCase().includes(query));

      // Type filter
      const matchesType = selectedType === 'All' || res.type === selectedType;

      // Level filter
      const matchesLevel = selectedLevel === 'All' || res.level === selectedLevel;

      // Free only filter
      const matchesCost = !freeOnly || res.cost === 'Free';

      // Bookmarked filter
      const matchesBookmark = !onlyBookmarked || bookmarkedIds.includes(res.id);

      return matchesSearch && matchesType && matchesLevel && matchesCost && matchesBookmark;
    });
  }, [resources, searchTerm, selectedType, selectedLevel, freeOnly, onlyBookmarked, bookmarkedIds]);

  const getTypeIcon = (type: ResourceType) => {
    switch (type) {
      case 'Course':
        return <GraduationCap className="w-3.5 h-3.5 text-blue-400" />;
      case 'Video':
        return <Video className="w-3.5 h-3.5 text-red-400" />;
      case 'Book':
        return <BookOpen className="w-3.5 h-3.5 text-emerald-400" />;
      case 'GitHub':
        return <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />;
      case 'Paper':
        return <FileText className="w-3.5 h-3.5 text-amber-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-cyan-400" />;
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
    <section id="resources" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curated Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Vetted AI/ML Resources & Tools
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Zero noise, maximum signal. Only courses, books, code repositories, and papers that developers actually use and recommend.
          </p>
        </div>

        {/* Saved Count */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOnlyBookmarked(!onlyBookmarked)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
              onlyBookmarked
                ? 'bg-purple-600/30 text-purple-300 border-purple-500'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-purple-400 text-purple-400' : ''}`} />
            <span>Saved ({bookmarkedIds.length})</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900/80 border border-slate-800/90 rounded-2xl p-4 sm:p-5 mb-8 backdrop-blur-xl shadow-lg space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search by topic, keyword, or author (e.g., Karpathy, PyTorch, RAG, Math, Linear Algebra)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          {/* Types */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 font-semibold mr-1">Type:</span>
            {resourceTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedType === type
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Level & Cost Filters */}
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-purple-500"
            >
              <option value="All">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            <button
              onClick={() => setFreeOnly(!freeOnly)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                freeOnly
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                  : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}
            >
              Free Only {freeOnly && '✓'}
            </button>

            {isFiltered && (
              <button
                onClick={clearAllFilters}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 underline ml-2"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
        <span>Showing <strong className="text-white">{filteredResources.length}</strong> resources</span>
        {isFiltered && <span className="text-purple-400">Filters active</span>}
      </div>

      {/* Resource Cards Grid */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">No resources found</h3>
          <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
            Try adjusting your search terms or clearing active filters to see all available items.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => {
            const isBookmarked = bookmarkedIds.includes(res.id);
            return (
              <div
                key={res.id}
                className="flex flex-col justify-between rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 transition-all p-5 shadow-lg group hover:-translate-y-1 hover:shadow-purple-500/5"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-800 text-[11px] font-medium text-slate-300 border border-slate-700/60">
                      {getTypeIcon(res.type)}
                      <span>{res.type}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-semibold border ${
                          res.cost === 'Free'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                        }`}
                      >
                        {res.cost}
                      </span>
                      <button
                        onClick={() => onToggleBookmark(res.id)}
                        className="text-slate-400 hover:text-purple-400 transition-colors p-1"
                        title={isBookmarked ? 'Remove bookmark' : 'Bookmark this resource'}
                      >
                        {isBookmarked ? (
                          <BookmarkCheck className="w-4 h-4 text-purple-400 fill-purple-400" />
                        ) : (
                          <Bookmark className="w-4 h-4 text-slate-500 hover:text-slate-300" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                    {res.title}
                  </h4>

                  {/* Author / Provider */}
                  <p className="text-xs font-semibold text-slate-400 mt-1">
                    By {res.authorOrProvider}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                    {res.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {res.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800/90 text-slate-400 border border-slate-700/50"
                      >
                        #{tag}
                      </span>
                    ))}
                    {res.tags.length > 3 && (
                      <span className="text-[10px] px-1.5 py-0.5 text-slate-500">
                        +{res.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Link */}
                  <a
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-purple-600 hover:text-white text-xs font-semibold text-slate-200 transition-all group-hover:bg-purple-600/90"
                  >
                    <span>Access Resource</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
