import React, { useState, useEffect } from 'react';
import { Bookmark, Copy, Check, ArrowRight, User, Calendar, Clock, Flame, Heart, Camera } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PromptItem } from '../types';

interface FeaturedPromptsProps {
  prompts: PromptItem[];
  selectedCategory: string | null;
  onSelectCategory: (categorySlug: string) => void;
  onClearCategoryFilter: () => void;
  savedPrompts: string[];
  onToggleSavePrompt: (promptId: string, e: React.MouseEvent) => void;
  onSelectPrompt: (prompt: PromptItem) => void;
  onViewAllPrompts: () => void;
}

const ARTICLES_PER_PAGE = 30;

export const FeaturedPrompts: React.FC<FeaturedPromptsProps> = ({
  prompts,
  selectedCategory,
  onSelectCategory,
  onClearCategoryFilter,
  savedPrompts,
  onToggleSavePrompt,
  onSelectPrompt,
  onViewAllPrompts,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Initialize page from URL parameter if present
  const [currentPage, setCurrentPage] = useState<number>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page') || params.get('paged');
      if (pageParam) {
        const p = parseInt(pageParam, 10);
        if (!isNaN(p) && p > 0) return p;
      }
    } catch {
      // ignore
    }
    return 1;
  });

  // Reset to page 1 whenever category filter changes
  useEffect(() => {
    setCurrentPage(1);
    updateUrlPage(1, selectedCategory);
  }, [selectedCategory]);

  // Synchronize URL query params
  const updateUrlPage = (newPage: number, category: string | null) => {
    try {
      const url = new URL(window.location.href);
      if (newPage > 1) {
        url.searchParams.set('page', newPage.toString());
      } else {
        url.searchParams.delete('page');
        url.searchParams.delete('paged');
      }

      if (category) {
        url.searchParams.set('category', category);
      } else {
        url.searchParams.delete('category');
      }

      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    updateUrlPage(newPage, selectedCategory);

    const sectionEl = document.getElementById('featured-prompts');
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyPrompt = (prompt: PromptItem, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(prompt.prompt).then(() => {
      setCopiedId(prompt.id);
      confetti({
        particleCount: 25,
        spread: 40,
        origin: { y: 0.8 },
      });
      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    });
  };

  // Pagination math
  const totalArticles = prompts.length;
  const totalPages = Math.ceil(totalArticles / ARTICLES_PER_PAGE);

  // Validated current page
  const safePage = Math.min(Math.max(currentPage, 1), Math.max(totalPages, 1));
  const startIndex = (safePage - 1) * ARTICLES_PER_PAGE;
  const endIndex = Math.min(startIndex + ARTICLES_PER_PAGE, totalArticles);
  const currentArticles = prompts.slice(startIndex, endIndex);

  return (
    <section id="featured-prompts" className="py-14 bg-white dark:bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 mb-2">
              <span>EXPLORE ARTICLES & PROMPTS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
              Featured Prompts & Articles
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-1">
              Browse copy-ready prompt formulas verified for Gemini, ChatGPT, and Midjourney.
            </p>
          </div>

          {/* Quick Category Filter Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={onClearCategoryFilter}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                !selectedCategory
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
              }`}
            >
              All Prompts ({totalArticles})
            </button>
            <button
              onClick={() => onSelectCategory('trending-prompts')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'trending-prompts'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 hover:bg-amber-100'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Trending Prompts</span>
            </button>
            <button
              onClick={() => onSelectCategory('couple-prompts')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'couple-prompts'
                  ? 'bg-rose-500 text-white shadow-xs'
                  : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800/60 hover:bg-rose-100'
              }`}
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Couple Prompts</span>
            </button>
            <button
              onClick={() => onSelectCategory('ai-photo-prompts')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedCategory === 'ai-photo-prompts'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 hover:bg-indigo-100'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>AI Photo Prompts</span>
            </button>
          </div>
        </div>

        {/* Counter Info */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
          <span>
            Showing <strong className="text-slate-800 dark:text-slate-200">{totalArticles > 0 ? startIndex + 1 : 0}–{endIndex}</strong> of{' '}
            <strong className="text-slate-800 dark:text-slate-200">{totalArticles}</strong> published prompts
          </span>
          {totalPages > 1 && (
            <span>
              Page <strong className="text-slate-800 dark:text-slate-200">{safePage}</strong> of{' '}
              <strong className="text-slate-800 dark:text-slate-200">{totalPages}</strong> (30 per page)
            </span>
          )}
        </div>

        {/* Prompts Responsive 3-Column Grid */}
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {currentArticles.map((p) => {
              const isSaved = savedPrompts.includes(p.id);
              const isCopied = copiedId === p.id;

              return (
                <article
                  key={p.id}
                  onClick={() => onSelectPrompt(p)}
                  className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 flex flex-col"
                >
                  {/* Artwork Thumbnail */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Category / Style Badge */}
                    <span
                      className={`absolute bottom-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full shadow-xs ${
                        p.category === 'trending-prompts'
                          ? 'bg-amber-100 text-amber-900 border border-amber-200'
                          : p.category === 'couple-prompts'
                          ? 'bg-rose-100 text-rose-900 border border-rose-200'
                          : 'bg-indigo-100 text-indigo-900 border border-indigo-200'
                      }`}
                    >
                      {p.category === 'trending-prompts'
                        ? '🔥 Trending'
                        : p.category === 'couple-prompts'
                        ? '💑 Couple'
                        : '📸 AI Photo'}
                    </span>

                    {/* Bookmark Button */}
                    <button
                      type="button"
                      onClick={(e) => onToggleSavePrompt(p.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:bg-white shadow transition-all"
                      title={isSaved ? 'Remove bookmark' : 'Save prompt'}
                      aria-label={`Save ${p.title}`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isSaved ? 'fill-purple-600 text-purple-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5">
                    <div className="space-y-2">
                      {/* Meta: Author & Date */}
                      <div className="flex items-center gap-3 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                        <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
                          <User className="w-3 h-3 text-orange-500" />
                          <span>{p.author || 'Hafizur Rahman'}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{p.date || 'Oct 2026'}</span>
                        </span>
                      </div>

                      <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-['Outfit'] line-clamp-1">
                        {p.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {p.desc}
                      </p>

                      {/* Tag Pills */}
                      <div className="flex items-center gap-1.5 flex-wrap pt-1">
                        {p.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 border border-purple-100 dark:border-purple-800/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Copy Prompt Action */}
                    <button
                      type="button"
                      onClick={(e) => handleCopyPrompt(p, e)}
                      className={`w-full py-2.5 px-4 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        isCopied
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/20'
                          : 'bg-transparent border-purple-200 dark:border-purple-800/80 text-purple-700 dark:text-purple-300 hover:bg-purple-600 hover:text-white hover:border-purple-600'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Prompt</span>
                        </>
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-base font-bold text-slate-700 dark:text-slate-200">
              No prompts found for this filter.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try choosing another category or clearing your search.
            </p>
            <button
              onClick={onClearCategoryFilter}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold hover:bg-purple-700 transition-colors"
            >
              Show All Prompts
            </button>
          </div>
        )}

        {/* Numbered Pagination with Orange Accent matching reference specification */}
        {totalPages > 1 && (
          <nav
            className="mt-12 flex items-center justify-center gap-2 flex-wrap"
            aria-label="Prompts pagination"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              const isActive = pageNum === safePage;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`min-w-[42px] h-[42px] px-3.5 rounded-xl text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F97316] text-white border border-[#F97316] shadow-sm shadow-orange-500/25 ring-2 ring-orange-400/20'
                      : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 shadow-2xs'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            {safePage < totalPages && (
              <button
                onClick={() => handlePageChange(safePage + 1)}
                className="h-[42px] px-5 rounded-xl text-sm font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-orange-400 hover:text-orange-600 dark:hover:text-orange-400 shadow-2xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Next</span>
                <span>&rarr;</span>
              </button>
            )}
          </nav>
        )}
      </div>
    </section>
  );
};
