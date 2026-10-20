import React from 'react';
import { Bookmark, ArrowRight, Flame, Heart, Camera } from 'lucide-react';
import { CategoryItem } from '../types';

interface CategorySectionProps {
  categories: CategoryItem[];
  selectedCategory: string | null;
  onSelectCategory: (categorySlug: string) => void;
  savedCategories: string[];
  onToggleSaveCategory: (categoryId: string, e: React.MouseEvent) => void;
  onViewAllCategories: () => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  savedCategories,
  onToggleSaveCategory,
  onViewAllCategories,
}) => {
  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case 'trending-prompts':
        return <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />;
      case 'couple-prompts':
        return <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />;
      case 'ai-photo-prompts':
        return <Camera className="w-3.5 h-3.5 text-indigo-500 fill-indigo-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="categories-section" className="py-12 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 mb-2">
              <span>EXPLORE BY CATEGORY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
              Explore Prompts by Category
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-1">
              Find the perfect prompt formulas for viral trends, romantic couples, and realistic portraits.
            </p>
          </div>
          <button
            onClick={onViewAllCategories}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors group shrink-0"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Active Filter Indicator */}
        {selectedCategory && (
          <div className="mb-6 flex items-center justify-between p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 text-xs sm:text-sm text-purple-900 dark:text-purple-200 shadow-xs">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              Filtered by:{' '}
              <strong className="font-bold underline">
                {categories.find((c) => c.slug === selectedCategory)?.name || selectedCategory}
              </strong>
            </span>
            <button
              onClick={() => onSelectCategory(selectedCategory)}
              className="text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white font-bold cursor-pointer hover:underline"
            >
              Clear Filter &times;
            </button>
          </div>
        )}

        {/* Categories Grid (Strictly 3 Main Categories) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const isSaved = savedCategories.includes(cat.id);
            const isSelected = selectedCategory === cat.slug;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.slug)}
                className={`group cursor-pointer rounded-2xl bg-white dark:bg-slate-800 border transition-all duration-300 flex flex-col overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 ${
                  isSelected
                    ? 'border-purple-600 ring-2 ring-purple-500/30 shadow-md shadow-purple-500/10'
                    : 'border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600'
                }`}
              >
                {/* Image & Badges */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={(e) => onToggleSaveCategory(cat.id, e)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 hover:bg-white shadow transition-all"
                    title={isSaved ? 'Remove bookmark' : 'Bookmark category'}
                    aria-label={`Bookmark ${cat.name}`}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        isSaved ? 'fill-purple-600 text-purple-600' : ''
                      }`}
                    />
                  </button>

                  {/* Category Type Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 text-xs font-bold text-slate-800 dark:text-slate-100 shadow-sm backdrop-blur-xs">
                    {getCategoryIcon(cat.slug)}
                    <span>{cat.count} Prompts</span>
                  </div>

                  {/* Arrow Indicator Circle */}
                  <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-900/90 text-purple-600 dark:text-purple-400 flex items-center justify-center shadow group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors font-['Outfit']">
                      {cat.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {cat.subtitle}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold text-purple-600 dark:text-purple-400">
                    <span>{isSelected ? 'Active Filter' : 'Browse Prompts'}</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
