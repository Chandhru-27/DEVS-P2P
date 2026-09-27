import React, { useState, useEffect } from 'react';
import { Brain, Terminal } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const stages = [
    'Initializing Neural Graph...',
    'Loading Mathematical Foundations (Linear Algebra & Calculus)...',
    'Ingesting Data Science & Scikit-Learn Pipelines...',
    'Compiling PyTorch Tensors & CUDA Kernels...',
    'Indexing Generative AI, RAG & Vector DBs...',
    'Calibrating MLOps Production Serving...',
    'Connecting DEVs P2P Peer Network...',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 600); // Allow fade-out transition
          }, 300);
          return 100;
        }
        // Increment smoothly
        const increment = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + increment, 100);

        // Update stage text based on progress
        const nextStage = Math.min(
          Math.floor((next / 100) * stages.length),
          stages.length - 1
        );
        setStageIndex(nextStage);

        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete, stages.length]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070a12] transition-opacity duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center max-w-md w-full px-6 text-center">
        {/* Animated Brain Logo & Orbital Rings */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Outer rotating ring */}
          <div className="absolute w-28 h-28 rounded-full border border-purple-500/30 border-t-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
          {/* Middle counter-rotating ring */}
          <div className="absolute w-20 h-20 rounded-full border border-cyan-500/30 border-b-cyan-400 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
          
          {/* Center glowing badge */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-purple-500/30">
            <Brain className="w-7 h-7 text-white animate-pulse" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl font-black tracking-tight text-white">DEVs P2P</span>
          <span className="px-2 py-0.5 text-xs font-bold rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30">
            AI / ML
          </span>
        </div>
        <p className="text-xs text-slate-400 font-medium tracking-wider uppercase mb-6">
          Architecting Your Learning Matrix
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-900/90 rounded-full h-2 p-0.5 border border-slate-800 shadow-inner mb-3 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-lg shadow-purple-500/60"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage & Status */}
        <div className="w-full flex items-center justify-between text-xs text-slate-400 font-mono mb-4">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            <span className="truncate max-w-[240px] text-left">{stages[stageIndex]}</span>
          </span>
          <span className="font-bold text-purple-300 text-sm">{progress}%</span>
        </div>

        {/* Skip button if user wants immediate access */}
        <button
          onClick={() => {
            setIsFadingOut(true);
            setTimeout(onComplete, 400);
          }}
          className="text-[11px] text-slate-500 hover:text-slate-300 underline transition-colors"
        >
          Skip intro
        </button>
      </div>
    </div>
  );
};
