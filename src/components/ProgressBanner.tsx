import React from 'react';
import { RotateCcw } from 'lucide-react';

interface ProgressBannerProps {
  completedCount: number;
  totalTopics: number;
  onResetProgress: () => void;
}

export const ProgressBanner: React.FC<ProgressBannerProps> = ({
  completedCount,
  totalTopics,
  onResetProgress,
}) => {
  const percent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700/80 flex items-center justify-center text-xs font-mono font-bold text-zinc-300 shrink-0">
            {percent}%
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-zinc-200">Interactive Curriculum Tracker</h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                {completedCount} / {totalTopics} Modules Mastered
              </span>
            </div>
            <p className="text-xs text-zinc-500 mt-0.5">
              Mark topics as done in the roadmap below to maintain an offline record of your learning journey.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {completedCount > 0 && (
            <button
              onClick={onResetProgress}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}

          {/* Progress track */}
          <div className="w-32 sm:w-44 bg-zinc-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-zinc-200 rounded-full transition-all duration-300"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
