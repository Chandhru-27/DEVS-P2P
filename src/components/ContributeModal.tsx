import React, { useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { GithubIcon } from './Icons';
import { communityInfo } from '../data/socialsData';

interface ContributeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContributeModal: React.FC<ContributeModalProps> = ({ isOpen, onClose }) => {
  const [resourceTitle, setResourceTitle] = useState('');
  const [resourceUrl, setResourceUrl] = useState('');
  const [resourceCategory, setResourceCategory] = useState('Course');
  const [resourceReason, setResourceReason] = useState('');
  const [copiedFormat, setCopiedFormat] = useState(false);

  if (!isOpen) return null;

  const markdownSnippet = `### Resource Suggestion
- **Title:** ${resourceTitle || 'Resource Title'}
- **URL:** ${resourceUrl || 'https://...'}
- **Category:** ${resourceCategory}
- **Why it helps peers:** ${resourceReason || 'High-signal practical explanation'}
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownSnippet);
    setCopiedFormat(true);
    setTimeout(() => setCopiedFormat(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-lg rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900"
        >
          <X className="w-4 h-4" />
        </button>

        <h3 className="text-lg font-bold text-zinc-100 mb-1">
          Contribute a Resource
        </h3>
        <p className="text-xs text-zinc-400 mb-5">
          Propose new textbooks, video courses, or repos for the DEVs P2P curriculum.
        </p>

        {/* Form */}
        <div className="space-y-3 mb-6">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Resource Title
            </label>
            <input
              type="text"
              placeholder="e.g. Andrej Karpathy's NanoGPT"
              value={resourceTitle}
              onChange={(e) => setResourceTitle(e.target.value)}
              className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              URL / Link
            </label>
            <input
              type="url"
              placeholder="https://..."
              value={resourceUrl}
              onChange={(e) => setResourceUrl(e.target.value)}
              className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Category
              </label>
              <select
                value={resourceCategory}
                onChange={(e) => setResourceCategory(e.target.value)}
                className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-100 focus:outline-none focus:border-zinc-500"
              >
                <option value="Course">Course</option>
                <option value="Video">Video</option>
                <option value="Book">Book</option>
                <option value="GitHub">GitHub</option>
                <option value="Paper">Paper</option>
                <option value="Documentation">Documentation</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1">
                Target Phase
              </label>
              <select className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-100 focus:outline-none focus:border-zinc-500">
                <option>Phase 1: Foundations</option>
                <option>Phase 2: Data Science</option>
                <option>Phase 3: Machine Learning</option>
                <option>Phase 4: Deep Learning</option>
                <option>Phase 5: GenAI & LLMs</option>
                <option>Phase 6: MLOps</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1">
              Why should peers study this?
            </label>
            <textarea
              rows={2}
              placeholder="Brief explanation of why this resource is top-tier..."
              value={resourceReason}
              onChange={(e) => setResourceReason(e.target.value)}
              className="w-full px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-850 text-xs font-medium text-zinc-200 border border-zinc-800 flex-1 transition-colors"
          >
            {copiedFormat ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
            <span>{copiedFormat ? 'Copied' : 'Copy Template'}</span>
          </button>

          <a
            href={`${communityInfo.repoUrl}/issues/new`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold flex-1 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open GitHub Issue</span>
          </a>
        </div>
      </div>
    </div>
  );
};
