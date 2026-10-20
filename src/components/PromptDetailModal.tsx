import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Sparkles, Camera, Sliders, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PromptItem } from '../types';

interface PromptDetailModalProps {
  prompt: PromptItem | null;
  onClose: () => void;
}

export const PromptDetailModal: React.FC<PromptDetailModalProps> = ({ prompt, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!prompt) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt).then(() => {
      setCopied(true);
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.7 },
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const geminiUrl = `https://gemini.google.com/?q=${encodeURIComponent('Generate image: ' + prompt.prompt)}`;


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top: Image & Key Details */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
          <div className="sm:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
            <img src={prompt.img} alt={prompt.title} className="w-full h-full object-cover" />
          </div>

          <div className="sm:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                {prompt.badge}
              </span>
              <span className="text-xs text-slate-400">ID: {prompt.id}</span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              {prompt.title}
            </h2>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {prompt.desc}
            </p>

            <div className="flex items-center gap-1.5 flex-wrap">
              {prompt.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Prompt Copy Box */}
        <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/30 border border-purple-200/80 dark:border-purple-800/60 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600" />
              Copy-Ready AI Prompt
            </span>

            <button
              onClick={handleCopy}
              className={`py-1.5 px-3 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-purple-600 hover:bg-purple-700 text-white shadow'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-purple-100 dark:border-purple-900/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-mono select-all">
            {prompt.prompt}
          </div>
        </div>

        {/* Negative Prompt & Camera Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {prompt.negativePrompt && (
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-slate-500" />
                Negative Prompt
              </span>
              <p className="text-slate-500 dark:text-slate-400 font-mono">
                {prompt.negativePrompt}
              </p>
            </div>
          )}

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-1">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-slate-500" />
              Aspect Ratio & Tool
            </span>
            <p className="text-slate-500 dark:text-slate-400">
              Ratio: <span className="font-bold text-purple-600">{prompt.aspectRatio}</span> | {prompt.recommendedTool}
            </p>
          </div>
        </div>

        {/* Actions Bottom Bar */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          <a
            href={geminiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md shadow-purple-600/20"
          >
            <span>Try in Gemini</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
