import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const stages = [
    'Initializing curriculum schema...',
    'Loading mathematical foundations...',
    'Mounting data science pipelines...',
    'Configuring neural network modules...',
    'Indexing generative AI & agent models...',
    'Verifying MLOps serving protocols...',
    'System ready.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 500);
          }, 250);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 5;
        const next = Math.min(prev + increment, 100);

        const nextStage = Math.min(
          Math.floor((next / 100) * stages.length),
          stages.length - 1
        );
        setStageIndex(nextStage);

        return next;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete, stages.length]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090b] text-zinc-100 transition-opacity duration-500 ease-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-sm w-full px-6 text-center">
        {/* Minimal Icon Symbol */}
        <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 shadow-sm">
          <div className="w-3.5 h-3.5 bg-zinc-100 rounded-sm animate-pulse" />
        </div>

        {/* Brand */}
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-base font-bold tracking-tight text-zinc-100">DEVs P2P</span>
          <span className="text-zinc-500 text-xs font-mono">/</span>
          <span className="text-xs font-medium text-zinc-400 font-mono tracking-wider">AI • ML</span>
        </div>

        <p className="text-[11px] text-zinc-500 font-mono tracking-wide mb-6">
          Architecting learning roadmap
        </p>

        {/* Minimal Progress Bar */}
        <div className="w-full bg-zinc-900 rounded-full h-1 overflow-hidden mb-3 border border-zinc-800/80">
          <div
            className="h-full bg-zinc-200 transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress & Stage */}
        <div className="w-full flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <span className="flex items-center gap-1.5 truncate max-w-[220px] text-left">
            <Terminal className="w-3 h-3 text-zinc-400 shrink-0" />
            <span className="truncate">{stages[stageIndex]}</span>
          </span>
          <span className="font-semibold text-zinc-300">{progress}%</span>
        </div>

        {/* Skip button */}
        <button
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 300);
          }}
          className="mt-6 text-[10px] text-zinc-600 hover:text-zinc-400 transition-colors uppercase tracking-widest font-mono"
        >
          Skip
        </button>
      </div>
    </div>
  );
};
