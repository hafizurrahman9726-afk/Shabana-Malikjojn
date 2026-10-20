import React from 'react';
import { X, Calendar, Clock, BookOpen, Share2 } from 'lucide-react';
import { GuideItem } from '../types';

interface GuideReaderModalProps {
  guide: GuideItem | null;
  onClose: () => void;
}

export const GuideReaderModal: React.FC<GuideReaderModalProps> = ({ guide, onClose }) => {
  if (!guide) return null;

  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: guide.title,
        text: guide.desc,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 space-y-6"
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

        {/* Metadata Top Bar */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {guide.date}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {guide.readTime}
          </span>
          <span>&bull;</span>
          <span className="text-purple-600 dark:text-purple-400 font-bold">
            Tutorial & Guide
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-tight font-['Outfit']">
          {guide.title}
        </h2>

        {/* Lead Excerpt */}
        <p className="text-base text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          {guide.desc}
        </p>

        {/* Featured Banner Image */}
        <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm">
          <img src={guide.img} alt={guide.title} className="w-full h-full object-cover" />
        </div>

        {/* Content Body */}
        <div className="prose dark:prose-invert max-w-none text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line space-y-4">
          {guide.content.trim()}
        </div>

        {/* Author / Footer */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
              AZ
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                AIPromptzyra Editorial Team
              </p>
              <p className="text-[11px] text-slate-400">
                Prompt Engineering & Creative AI Specialists
              </p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Link Copied!' : 'Share Guide'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
