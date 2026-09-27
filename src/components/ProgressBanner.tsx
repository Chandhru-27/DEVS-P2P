import React from 'react';
import { Trophy, RotateCcw } from 'lucide-react';

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

  const getMotivation = () => {
    if (percent === 0) return 'Start ticking off topics as you learn to track your journey!';
    if (percent < 25) return 'Solid foundation! Consistency is the superpower in AI/ML.';
    if (percent < 50) return 'Over a quarter way there! The math and data analysis are clicking.';
    if (percent < 75) return 'Phenomenal progress! You are entering advanced deep learning and LLMs.';
    if (percent < 100) return 'Almost an AI engineer! Complete your MLOps production capstones!';
    return '100% Completed! You are fully equipped to build, train, and deploy AI systems!';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900/80 to-blue-950/40 border border-purple-500/20 p-5 sm:p-6 backdrop-blur-xl shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">Your AI/ML Learning Journey</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-medium">
                  {completedCount} of {totalTopics} Skills Mastered
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">{getMotivation()}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {completedCount > 0 && (
              <button
                onClick={onResetProgress}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                title="Reset local storage tracking"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
            <div className="text-right">
              <div className="text-2xl font-black text-white tracking-tight">{percent}%</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Completed</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-slate-800/80 rounded-full h-2.5 overflow-hidden p-0.5 border border-slate-700/50">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 ease-out shadow-lg shadow-purple-500/50"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
