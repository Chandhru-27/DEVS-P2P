import React, { useState } from 'react';
import { X, Sparkles, Copy, Check } from 'lucide-react';
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
- **Why it helps peers:** ${resourceReason || 'Clear explanation without paywalls'}
`;

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(markdownSnippet);
    setCopiedFormat(true);
    setTimeout(() => setCopiedFormat(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0c1222] border border-slate-800 p-6 sm:p-7 shadow-2xl overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2.5 mb-2">
          <div className="p-2 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-white">Contribute to DEVs P2P AI/ML</h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          Help your fellow peers by submitting high-quality tutorials, GitHub repos, cheat-sheets, or roadmaps.
        </p>

        {/* Quick Steps */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
            <div className="font-semibold text-white flex items-center gap-2">
              <GithubIcon className="w-4 h-4 text-purple-400" />
              <span>How to contribute on GitHub:</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1 text-slate-400">
              <li>Fork the repository: <code className="text-purple-300">Saisrikar20/DEVs-P2P-AI-ML</code></li>
              <li>Add your resource in <code className="text-purple-300">src/data/resourcesData.ts</code> or open an Issue</li>
              <li>Create a Pull Request with a short summary of why the resource is exceptional!</li>
            </ol>
          </div>

          {/* Form */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Resource Title
              </label>
              <input
                type="text"
                placeholder="e.g. Andrej Karpathy's NanoGPT"
                value={resourceTitle}
                onChange={(e) => setResourceTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                URL / Link
              </label>
              <input
                type="url"
                placeholder="https://..."
                value={resourceUrl}
                onChange={(e) => setResourceUrl(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Category
                </label>
                <select
                  value={resourceCategory}
                  onChange={(e) => setResourceCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-purple-500"
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
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Target Phase
                </label>
                <select className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 focus:outline-none focus:border-purple-500">
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
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Why should peers study this?
              </label>
              <textarea
                rows={2}
                placeholder="Briefly explain what makes this resource high-value..."
                value={resourceReason}
                onChange={(e) => setResourceReason(e.target.value)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-purple-500"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyMarkdown}
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 border border-slate-700 flex-1 transition-colors"
          >
            {copiedFormat ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedFormat ? 'Copied Template!' : 'Copy Issue Template'}</span>
          </button>

          <a
            href={`${communityInfo.repoUrl}/issues/new`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-xs font-semibold text-white flex-1 transition-all shadow-md shadow-purple-600/30"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Open Issue on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
