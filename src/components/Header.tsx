import React, { useState } from 'react';
import { Search, Sun, Moon, Menu, X, Download, Code } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
  onOpenThemeHub: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  onOpenPage: (pageSlug: string) => void;
  currentView?: 'home' | 'about' | '404';
  onSelectView?: (view: 'home' | 'about') => void;
  onSelectCategory?: (slug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  isDark,
  toggleTheme,
  onOpenThemeHub,
  activeNav,
  setActiveNav,
  onOpenPage,
  currentView = 'home',
  onSelectView,
  onSelectCategory,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);

  const handleNavClick = (sectionId: string, navName: string) => {
    setActiveNav(navName);
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
    if (navName === 'About') {
      if (onSelectView) {
        onSelectView('about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onSelectView) {
      onSelectView('home');
    }
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (slug: string, name: string) => {
    setCategoriesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectView) {
      onSelectView('home');
    }
    if (onSelectCategory) {
      onSelectCategory(slug);
    }
    const el = document.getElementById('categories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero', 'Home');
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#9333EA] p-0.5 shadow-md shadow-purple-500/20 group-hover:scale-105 transition-transform flex items-center justify-center">
              <svg className="w-7 h-7 text-white" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="#7C3AED" />
                <path d="M12 28L20 12L28 28L20 23L12 28Z" fill="white" />
                <path d="M20 12L24 20L20 23L16 20L20 12Z" fill="#DDD6FE" />
              </svg>
            </div>
            <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white font-['Outfit'] whitespace-nowrap shrink-0">
              AIPromptzyra
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <button
            onClick={() => handleNavClick('hero', 'Home')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              currentView === 'home' && activeNav === 'Home'
                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Home
          </button>

          {/* Categories Dropdown in Main Navigation */}
          <div className="relative">
            <button
              onClick={() => setCategoriesDropdownOpen((prev) => !prev)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                categoriesDropdownOpen || (currentView === 'home' && activeNav === 'Categories')
                  ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                  : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <span>Categories</span>
              <span className="text-[10px]">&darr;</span>
            </button>

            {categoriesDropdownOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-56 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Featured Categories
                </div>
                <button
                  onClick={() => handleCategoryClick('trending-prompts', 'Trending Prompts')}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>🔥 Trending Prompts</span>
                  <span className="text-[10px] bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded font-mono">Hot</span>
                </button>
                <button
                  onClick={() => handleCategoryClick('couple-prompts', 'Couple Prompts')}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>💑 Couple Prompts</span>
                  <span className="text-[10px] bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 px-1.5 py-0.5 rounded font-mono">Popular</span>
                </button>
                <button
                  onClick={() => handleCategoryClick('ai-photo-prompts', 'AI Photo Prompts')}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>📸 AI Photo Prompts</span>
                  <span className="text-[10px] bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded font-mono">Realistic</span>
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-700" />
                <button
                  onClick={() => handleNavClick('categories-section', 'Categories')}
                  className="w-full text-left px-3.5 py-1.5 text-xs text-purple-600 dark:text-purple-400 font-bold hover:underline cursor-pointer"
                >
                  Explore All 3 Categories &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Quick Direct Category Access Pills in Header */}
          <button
            onClick={() => handleCategoryClick('trending-prompts', 'Trending Prompts')}
            className="px-2.5 py-1 rounded-full text-[11px] font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 hover:bg-amber-100 border border-amber-200 dark:border-amber-800/60 transition-colors cursor-pointer"
          >
            Trending
          </button>
          <button
            onClick={() => handleCategoryClick('couple-prompts', 'Couple Prompts')}
            className="px-2.5 py-1 rounded-full text-[11px] font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/50 hover:bg-rose-100 border border-rose-200 dark:border-rose-800/60 transition-colors cursor-pointer"
          >
            Couple
          </button>
          <button
            onClick={() => handleCategoryClick('ai-photo-prompts', 'AI Photo Prompts')}
            className="px-2.5 py-1 rounded-full text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 hover:bg-indigo-100 border border-indigo-200 dark:border-indigo-800/60 transition-colors cursor-pointer"
          >
            AI Photo
          </button>

          <button
            onClick={() => handleNavClick('prompt-builder', 'Prompt Builder')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              currentView === 'home' && activeNav === 'Prompt Builder'
                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Prompt Builder
          </button>

          <button
            onClick={() => handleNavClick('guides-section', 'Guides')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeNav === 'Guides'
                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Guides
          </button>

          <button
            onClick={() => handleNavClick('about', 'About')}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              currentView === 'about' || activeNav === 'About'
                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            About
          </button>

          {/* WP Theme Hub Trigger */}
          <button
            onClick={onOpenThemeHub}
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-full text-xs font-bold shadow-sm shadow-purple-500/20 transition-all hover:scale-105 cursor-pointer"
            title="Download complete WordPress Theme ZIP or inspect PHP template source"
          >
            <Download className="w-3.5 h-3.5" />
            <span>WP Theme</span>
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5">
          {/* Header Search */}
          <div className="relative hidden sm:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 text-xs rounded-full border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent w-44 focus:w-56 transition-all"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 flex items-center justify-center transition-all"
            aria-label="Toggle Dark/Light Mode"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-purple-600" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:text-purple-600"
            aria-label="Open mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#0B0F19] border-b border-slate-200 dark:border-slate-800 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-sm rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            onClick={() => handleNavClick('hero', 'Home')}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30"
          >
            Home
          </button>
          
          {/* Mobile Category Shortcuts */}
          <div className="py-2 px-1 border-y border-slate-100 dark:border-slate-800 space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2">
              Featured Categories
            </span>
            <div className="grid grid-cols-3 gap-1.5 pt-1">
              <button
                onClick={() => handleCategoryClick('trending-prompts', 'Trending Prompts')}
                className="px-2 py-1.5 rounded-lg text-xs font-bold text-center bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800"
              >
                🔥 Trending
              </button>
              <button
                onClick={() => handleCategoryClick('couple-prompts', 'Couple Prompts')}
                className="px-2 py-1.5 rounded-lg text-xs font-bold text-center bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800"
              >
                💑 Couple
              </button>
              <button
                onClick={() => handleCategoryClick('ai-photo-prompts', 'AI Photo Prompts')}
                className="px-2 py-1.5 rounded-lg text-xs font-bold text-center bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800"
              >
                📸 AI Photo
              </button>
            </div>
          </div>

          <button
            onClick={() => handleNavClick('categories-section', 'Explore Prompts')}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30"
          >
            Explore All Categories
          </button>
          <button
            onClick={() => handleNavClick('prompt-builder', 'Prompt Builder')}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30"
          >
            Prompt Builder
          </button>
          <button
            onClick={() => handleNavClick('categories-section', 'Categories')}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30"
          >
            Categories
          </button>
          <button
            onClick={() => handleNavClick('guides-section', 'Guides')}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30"
          >
            Guides
          </button>
          <button
            onClick={() => handleNavClick('about', 'About')}
            className="w-full text-left px-3 py-2 text-sm font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30"
          >
            About
          </button>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenThemeHub();
              }}
              className="w-full py-2.5 bg-purple-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>WordPress Theme Center (.zip)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
