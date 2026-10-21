import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Bookmark } from 'lucide-react';
import { GuideItem } from '../types';

interface GuidesSectionProps {
  guides: GuideItem[];
  savedGuides: string[];
  onToggleSaveGuide: (guideId: string, e: React.MouseEvent) => void;
  onSelectGuide: (guide: GuideItem) => void;
  onViewAllGuides: () => void;
}

const ARTICLES_PER_PAGE = 30;

export const GuidesSection: React.FC<GuidesSectionProps> = ({
  guides,
  savedGuides,
  onToggleSaveGuide,
  onSelectGuide,
  onViewAllGuides,
}) => {
  // Selected category filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter categories matching prompt specifications
  const FILTER_CATEGORIES = [
    { slug: 'all', name: 'All Prompts' },
    { slug: 'trending-prompts', name: 'Trending Prompts' },
    { slug: 'festival-prompt', name: 'Festival Prompt' },
    { slug: 'couple-prompts', name: 'Couple Prompts Guide' },
    { slug: 'boys-prompts', name: 'Boys Prompts' },
    { slug: 'ai-photo-prompts', name: 'AI Photo Prompts' },
  ];

  // Dynamic filter matching logic
  const filteredGuides = React.useMemo(() => {
    if (selectedCategory === 'all') return guides;

    return guides.filter((g) => {
      const text = `${g.title} ${g.desc} ${g.slug} ${g.content}`.toLowerCase();
      if (selectedCategory === 'trending-prompts') {
        return text.includes('trending') || text.includes('masterclass') || text.includes('popular') || text.includes('cinematic') || text.includes('gala');
      }
      if (selectedCategory === 'festival-prompt') {
        return text.includes('festival') || text.includes('diwali') || text.includes('puja') || text.includes('celebrat') || text.includes('holiday');
      }
      if (selectedCategory === 'couple-prompts') {
        return text.includes('couple') || text.includes('wedding') || text.includes('romantic') || text.includes('haldi') || text.includes('lehenga');
      }
      if (selectedCategory === 'boys-prompts') {
        return text.includes('boy') || text.includes('groom') || text.includes('men') || text.includes('man') || text.includes('tuxedo') || text.includes('sherwani') || text.includes('headshot');
      }
      if (selectedCategory === 'ai-photo-prompts') {
        return text.includes('photo') || text.includes('portrait') || text.includes('camera') || text.includes('studio') || text.includes('lighting');
      }
      return text.includes(selectedCategory.replace(/-/g, ' '));
    });
  }, [guides, selectedCategory]);

  // Read page from URL query param if present
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

  // Reset pagination when category changes
  const handleCategorySelect = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  // Calculate pagination on filtered results
  const totalArticles = filteredGuides.length;
  const totalPages = Math.max(1, Math.ceil(totalArticles / ARTICLES_PER_PAGE));
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const startIndex = (safePage - 1) * ARTICLES_PER_PAGE;
  const endIndex = Math.min(startIndex + ARTICLES_PER_PAGE, totalArticles);
  const currentArticles = filteredGuides.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    try {
      const url = new URL(window.location.href);
      if (newPage > 1) {
        url.searchParams.set('page', newPage.toString());
      } else {
        url.searchParams.delete('page');
        url.searchParams.delete('paged');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // ignore
    }

    const sectionEl = document.getElementById('guides-section');
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="guides-section" className="py-14 bg-white dark:bg-[#0B0F19] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Heading, Subtitle, and View All Guides link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
              Latest Guides &amp; Tutorials
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-1">
              Helpful articles to improve your AI skills and get better results.
            </p>
          </div>
          <button
            onClick={onViewAllGuides}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group shrink-0 cursor-pointer"
          >
            <span>View All Guides &rarr;</span>
          </button>
        </div>

        {/* Horizontal Category Filter Bar (Matching Reference Screenshot) */}
        <div className="w-full mb-7 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {FILTER_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => handleCategorySelect(cat.slug)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/25 border border-slate-900 dark:bg-purple-600 dark:border-purple-600 dark:shadow-purple-900/40'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200/90 dark:bg-slate-800/80 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Counter Info Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-6 pb-2 border-b border-slate-100 dark:border-slate-800">
          <span>
            Showing <strong className="text-slate-800 dark:text-slate-200">{totalArticles > 0 ? startIndex + 1 : 0}–{endIndex}</strong> of{' '}
            <strong className="text-slate-800 dark:text-slate-200">{totalArticles}</strong> published articles
            {selectedCategory !== 'all' && (
              <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 font-medium">
                Filtered: {FILTER_CATEGORIES.find((c) => c.slug === selectedCategory)?.name}
                <button
                  onClick={() => handleCategorySelect('all')}
                  className="ml-1 text-purple-400 hover:text-purple-700 font-bold cursor-pointer"
                  title="Clear filter"
                >
                  &times;
                </button>
              </span>
            )}
          </span>
          {totalPages > 1 && (
            <span>
              Page <strong className="text-slate-800 dark:text-slate-200">{safePage}</strong> of{' '}
              <strong className="text-slate-800 dark:text-slate-200">{totalPages}</strong> (30 per page)
            </span>
          )}
        </div>

        {/* Responsive Grid: Desktop 3 cols, Tablet 2 cols, Mobile 1 col */}
        {currentArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {currentArticles.map((g) => {
              const isSaved = savedGuides.includes(g.id);

              return (
                <article
                  key={g.id}
                  onClick={() => onSelectGuide(g)}
                  className="group cursor-pointer rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 flex flex-col"
                >
                  {/* 1. Featured Image Thumbnail */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={g.img}
                      alt={g.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Bookmark Control */}
                    <button
                      type="button"
                      onClick={(e) => onToggleSaveGuide(g.id, e)}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:bg-white shadow transition-all cursor-pointer"
                      title={isSaved ? 'Remove bookmark' : 'Save article'}
                      aria-label={`Save ${g.title}`}
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isSaved ? 'fill-purple-600 text-purple-600' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      {/* 2. Article Title */}
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-['Outfit'] leading-snug">
                        {g.title}
                      </h3>
                      {/* 3. Short Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                        {g.desc}
                      </p>
                    </div>

                    {/* 4. Publication Date & 5. Read More Link */}
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 dark:text-slate-500 font-medium">
                        {g.date}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold text-purple-600 dark:text-purple-400 group-hover:translate-x-0.5 transition-transform">
                        <span>Read More &rarr;</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-16 px-6 text-center rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-dashed border-slate-200 dark:border-slate-800">
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2 font-['Outfit']">
              No articles found in this category
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm mx-auto">
              No published prompt guides were found matching this category. Select another category or reset to all prompts.
            </p>
            <button
              onClick={() => handleCategorySelect('all')}
              className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md shadow-slate-900/20 cursor-pointer"
            >
              View All Prompts
            </button>
          </div>
        )}

        {/* 6. Functional Pagination: ← Previous 1 2 3 ... Next → */}
        {totalPages > 1 && (
          <nav
            className="mt-12 flex justify-center items-center"
            aria-label="Guides Pagination"
          >
            <ul className="flex items-center gap-2 flex-wrap justify-center list-none p-0 m-0">
              {/* Previous Link */}
              {safePage > 1 && (
                <li>
                  <a
                    href={safePage - 1 === 1 ? '#guides-section' : `?page=${safePage - 1}#guides-section`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(safePage - 1);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-xs hover:shadow"
                    aria-label="Previous page"
                  >
                    <span>&larr; Previous</span>
                  </a>
                </li>
              )}

              {/* Numbered Page Buttons */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                const isActive = pageNum === safePage;
                const pageUrl = pageNum === 1 ? '#guides-section' : `?page=${pageNum}#guides-section`;
                return (
                  <li key={pageNum}>
                    {isActive ? (
                      <span
                        className="inline-flex items-center justify-center min-w-[40px] h-10 px-3.5 rounded-xl bg-purple-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-600/30 border border-purple-600"
                        aria-current="page"
                      >
                        {pageNum}
                      </span>
                    ) : (
                      <a
                        href={pageUrl}
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(pageNum);
                        }}
                        className="inline-flex items-center justify-center min-w-[40px] h-10 px-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-xs hover:shadow"
                        aria-label={`Go to page ${pageNum}`}
                      >
                        {pageNum}
                      </a>
                    )}
                  </li>
                );
              })}

              {/* Next Link */}
              {safePage < totalPages && (
                <li>
                  <a
                    href={`?page=${safePage + 1}#guides-section`}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(safePage + 1);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 h-10 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 font-semibold text-xs sm:text-sm transition-all cursor-pointer shadow-xs hover:shadow"
                    aria-label="Next page"
                  >
                    <span>Next &rarr;</span>
                  </a>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>
    </section>
  );
};
