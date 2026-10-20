import React, { useMemo } from 'react';
import { X, Calendar, Clock, BookOpen, Share2 } from 'lucide-react';
import { GuideItem } from '../types';
import { AUTHORS_DATA } from '../data/promptsData';

interface GuideReaderModalProps {
  guide: GuideItem | null;
  onClose: () => void;
}

export const GuideReaderModal: React.FC<GuideReaderModalProps> = ({ guide, onClose }) => {
  if (!guide) return null;

  const [copied, setCopied] = React.useState(false);

  const matchedAuthor = useMemo(() => {
    if (!guide) return null;
    return (
      AUTHORS_DATA.find((a) =>
        a.featuredArticles.some(
          (art) => art.slug === guide.slug || art.title.toLowerCase() === guide.title.toLowerCase()
        )
      ) ||
      // Default to team lead Hafizur Rahman if not explicitly assigned
      AUTHORS_DATA[0]
    );
  }, [guide]);

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
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <img
              src={matchedAuthor ? matchedAuthor.avatar : 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}
              alt={matchedAuthor ? matchedAuthor.name : 'AIPromptzyra Author'}
              className="w-6 h-6 rounded-full object-cover border border-purple-500/40"
            />
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {matchedAuthor ? matchedAuthor.name : 'AIPromptzyra Editorial Team'}
            </span>
          </div>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            {guide.date}
          </span>
          <span>&bull;</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            {guide.readTime}
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

        {/* Modal Bottom Actions */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
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
