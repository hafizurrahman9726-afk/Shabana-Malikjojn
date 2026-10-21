import React from 'react';
import { CheckCircle2, ArrowRight, BookOpen } from 'lucide-react';

interface AuthorProfileCardProps {
  onViewAllGuides?: () => void;
}

export const AuthorProfileCard: React.FC<AuthorProfileCardProps> = ({ onViewAllGuides }) => {
  const handleViewGuides = (e: React.MouseEvent) => {
    if (onViewAllGuides) {
      e.preventDefault();
      onViewAllGuides();
    }
  };

  return (
    <section id="author-card-section" className="py-12 sm:py-16 bg-white dark:bg-[#0B0F19] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered White Card with rounded corners, subtle border, and shadow */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200/90 dark:border-slate-700/80 shadow-md sm:shadow-xl text-center flex flex-col items-center relative overflow-hidden transition-all">

          {/* Circular Author Photo with Orange Accent Border */}
          <div className="relative mb-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-amber-500 p-0.5 bg-white dark:bg-slate-800 shadow-md overflow-hidden flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
                alt="Hafizur Rahman — Author & Founder at AIPromptZyra"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            {/* Verified Badge Checkmark */}
            <div
              className="absolute bottom-0 right-1 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-800"
              title="Verified AIPromptZyra Author"
            >
              <CheckCircle2 className="w-4 h-4 fill-white text-amber-500" />
            </div>
          </div>

          {/* Author Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 mb-2">
            <span>Verified Author</span>
          </div>

          {/* Author Name */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
            Hafizur Rahman
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mt-0.5 mb-3">
            Founder & Lead AI Prompt Curator, AIPromptZyra
          </p>

          {/* Short Biography */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-6">
            Hafizur Rahman is the creator of AIPromptZyra and a dedicated visual AI prompt researcher. He specializes in designing, testing, and refining photographic prompt formulas for Google Gemini, ChatGPT, and Midjourney, helping creators worldwide turn imaginative concepts into realistic, high-definition AI imagery.
          </p>

          {/* View All Guides Button */}
          <a
            href="/author/hafizur-rahman/"
            onClick={handleViewGuides}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-purple-600 dark:bg-white dark:hover:bg-purple-500 text-white dark:text-slate-900 dark:hover:text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
