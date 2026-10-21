import React from 'react';
import { Search, Sparkles } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchSubmit: (e: React.FormEvent) => void;
  onSelectTag: (tag: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  searchQuery,
  setSearchQuery,
  onSearchSubmit,
  onSelectTag,
}) => {
  const popularTags = [
    'Girl Portrait',
    'Couple Photo',
    'Festival',
    'Saree',
    'Cinematic',
    'Family',
    'AI Art',
  ];

  return (
    <section id="hero" className="relative pt-8 pb-12 lg:pt-12 lg:pb-16 overflow-hidden bg-white dark:bg-[#0B0F19]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Description, Search, Tags */}
          <div className="lg:col-span-7 space-y-6">
            {/* Kicker Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>AI PROMPTS FOR YOUR CREATIVE IDEAS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-slate-900 dark:text-white leading-[1.12] tracking-tight font-['Outfit']">
              Find the Right AI Prompt for Your{' '}
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">
                Next Idea
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
              Discover high-quality, <strong className="text-slate-800 dark:text-white font-semibold">copy-ready prompts for Gemini, ChatGPT</strong> and other AI tools. Create amazing images, portraits, art, videos and more with simple prompts.
            </p>

            {/* Search Input Box */}
            <form onSubmit={onSearchSubmit} className="max-w-xl">
              <div className="relative flex items-center bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-full p-1.5 shadow-xl shadow-purple-900/5 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-500/15 transition-all">
                <div className="pl-4 pr-2 text-slate-400">
                  <Search className="w-5 h-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search prompts (e.g. girl portrait, couple, festival, cinematic...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 bg-transparent text-sm sm:text-base text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-sm rounded-full shadow-md shadow-purple-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Popular Tags */}
            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mr-1">
                Popular:
              </span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => onSelectTag(tag)}
                  className="px-3 py-1 bg-white dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-900/40 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-300 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-purple-300 transition-all shadow-2xs"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Collage */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] select-none">
            {/* Top Left: Young Stylish Boy */}
            <div className="absolute top-2 left-4 sm:left-12 w-28 h-36 rounded-2xl overflow-hidden shadow-xl border-3 border-white dark:border-slate-800 -rotate-8 hover:rotate-0 transition-transform duration-300 z-10 group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
                alt="Stylish boy AI portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Top Right: Ethnic Saree Portrait */}
            <div className="absolute top-4 right-4 sm:right-10 w-32 h-40 rounded-2xl overflow-hidden shadow-xl border-3 border-white dark:border-slate-800 rotate-6 hover:rotate-0 transition-transform duration-300 z-10 group">
              <img
                src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80"
                alt="Saree ethnic AI portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Center Main: Featured Beautiful Woman Portrait */}
            <div className="relative w-52 sm:w-60 h-72 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-300 z-20 group">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=85"
                alt="AIPromptzyra featured AI portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Bottom Left: Happy Couple in Nature */}
            <div className="absolute bottom-4 left-2 sm:left-8 w-36 h-44 rounded-2xl overflow-hidden shadow-xl border-3 border-white dark:border-slate-800 -rotate-4 hover:rotate-0 transition-transform duration-300 z-20 group">
              <img
                src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=80"
                alt="Romantic couple AI portrait"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Bottom Right: Fantasy Landscape with Castle */}
            <div className="absolute bottom-2 right-2 sm:right-6 w-32 h-42 rounded-2xl overflow-hidden shadow-xl border-3 border-white dark:border-slate-800 rotate-6 hover:rotate-0 transition-transform duration-300 z-10 group">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80"
                alt="Fantasy landscape AI art"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>

            {/* Turn Ideas into Amazing AI Images Badge */}
            <div className="absolute bottom-24 right-8 sm:right-16 z-30 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-xl shadow-purple-600/40 -rotate-3 border border-white/20 flex items-center gap-1.5 pointer-events-none animate-pulse">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Turn Ideas into Amazing AI Images</span>
            </div>

            {/* Decorative Sparkles & Rings */}
            <div className="absolute -top-4 right-1/4 text-purple-400 opacity-60">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="absolute bottom-8 left-1/3 text-indigo-400 opacity-60">
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
