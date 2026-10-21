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
  const [importantPagesDropdownOpen, setImportantPagesDropdownOpen] = useState(false);
  const [mobileImportantPagesOpen, setMobileImportantPagesOpen] = useState(true);

  const handleNavClick = (sectionId: string, navName: string) => {
    setActiveNav(navName);
    setMobileMenuOpen(false);
    setImportantPagesDropdownOpen(false);
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
    setActiveNav(name);
    setImportantPagesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (onSelectView) {
      onSelectView('home');
    }
    if (onSelectCategory) {
      onSelectCategory(slug);
    }
    const el = document.getElementById('prompt-carousel-section') || document.getElementById('categories-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImportantPageClick = (slug: string) => {
    setImportantPagesDropdownOpen(false);
    setMobileMenuOpen(false);
    if (slug === 'about') {
      setActiveNav('About Us');
      if (onSelectView) {
        onSelectView('about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onOpenPage(slug);
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
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Primary Menu">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero', 'Home');
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              currentView === 'home' && activeNav === 'Home'
                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
            }`}
          >
            Home
          </a>

          {/* 1. Trending Prompts */}
          <a
            href="https://aipromptzyra.com/prompt-category/trending-prompts/"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick('trending-prompts', 'Trending Prompts');
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeNav === 'Trending Prompts'
                ? 'bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400'
            }`}
          >
            Trending Prompts
          </a>

          {/* 2. Couple Prompts */}
          <a
            href="https://aipromptzyra.com/prompt-category/couple-prompts/"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick('couple-prompts', 'Couple Prompts');
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeNav === 'Couple Prompts'
                ? 'bg-rose-100 dark:bg-rose-900/40 text-rose-800 dark:text-rose-300 font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-400'
            }`}
          >
            Couple Prompts
          </a>

          {/* 3. AI Photo Prompts */}
          <a
            href="https://aipromptzyra.com/prompt-category/ai-photo-prompts/"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick('ai-photo-prompts', 'AI Photo Prompts');
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeNav === 'AI Photo Prompts'
                ? 'bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300 font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400'
            }`}
          >
            AI Photo Prompts
          </a>

          {/* Important Pages Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setImportantPagesDropdownOpen(true)}
            onMouseLeave={() => setImportantPagesDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={() => setImportantPagesDropdownOpen((prev) => !prev)}
              aria-haspopup="true"
              aria-expanded={importantPagesDropdownOpen}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                importantPagesDropdownOpen || currentView === 'about'
                  ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400'
              }`}
            >
              <span>Important Pages</span>
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${
                  importantPagesDropdownOpen ? 'rotate-180 text-purple-600' : 'text-slate-400'
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {importantPagesDropdownOpen && (
              <div
                role="menu"
                className="absolute top-full left-0 mt-1 w-56 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
              >
                <div className="px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Site Information
                </div>
                <a
                  role="menuitem"
                  href="https://aipromptzyra.com/about/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('about');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>About Us</span>
                  <span className="text-[10px] text-slate-400">Our Story</span>
                </a>
                <a
                  role="menuitem"
                  href="https://aipromptzyra.com/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('contact');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>Contact Us</span>
                  <span className="text-[10px] text-slate-400">Get Help</span>
                </a>
                <a
                  role="menuitem"
                  href="https://aipromptzyra.com/privacy-policy/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('privacy-policy');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>Privacy Policy</span>
                  <span className="text-[10px] text-slate-400">Privacy</span>
                </a>
                <a
                  role="menuitem"
                  href="https://aipromptzyra.com/disclaimer/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('disclaimer');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>Disclaimer</span>
                  <span className="text-[10px] text-slate-400">Notice</span>
                </a>
                <a
                  role="menuitem"
                  href="https://aipromptzyra.com/terms-and-conditions/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('terms-and-conditions');
                  }}
                  className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-950/60 hover:text-purple-600 flex items-center justify-between cursor-pointer"
                >
                  <span>Terms &amp; Conditions</span>
                  <span className="text-[10px] text-slate-400">Terms</span>
                </a>
              </div>
            )}
          </div>

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
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero', 'Home');
            }}
            className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors"
          >
            Home
          </a>

          {/* 1. Trending Prompts */}
          <a
            href="https://aipromptzyra.com/prompt-category/trending-prompts/"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick('trending-prompts', 'Trending Prompts');
            }}
            className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/40 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            Trending Prompts
          </a>

          {/* 2. Couple Prompts */}
          <a
            href="https://aipromptzyra.com/prompt-category/couple-prompts/"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick('couple-prompts', 'Couple Prompts');
            }}
            className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 hover:bg-rose-50 dark:hover:bg-rose-950/40 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
          >
            Couple Prompts
          </a>

          {/* 3. AI Photo Prompts */}
          <a
            href="https://aipromptzyra.com/prompt-category/ai-photo-prompts/"
            onClick={(e) => {
              e.preventDefault();
              handleCategoryClick('ai-photo-prompts', 'AI Photo Prompts');
            }}
            className="block w-full text-left px-3.5 py-2.5 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            AI Photo Prompts
          </a>

          {/* Important Pages Mobile Accordion */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setMobileImportantPagesOpen((prev) => !prev)}
              aria-expanded={mobileImportantPagesOpen}
              className="w-full flex items-center justify-between px-3.5 py-2.5 text-sm font-bold rounded-xl text-purple-700 dark:text-purple-300 bg-purple-50/80 dark:bg-purple-950/40 cursor-pointer"
            >
              <span>Important Pages</span>
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  mobileImportantPagesOpen ? 'rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {mobileImportantPagesOpen && (
              <div className="pl-3 pr-1 py-1 mt-1 space-y-1 border-l-2 border-purple-200 dark:border-purple-800 ml-3">
                <a
                  href="https://aipromptzyra.com/about/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('about');
                  }}
                  className="block px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950/40"
                >
                  About Us
                </a>
                <a
                  href="https://aipromptzyra.com/contact/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('contact');
                  }}
                  className="block px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950/40"
                >
                  Contact Us
                </a>
                <a
                  href="https://aipromptzyra.com/privacy-policy/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('privacy-policy');
                  }}
                  className="block px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950/40"
                >
                  Privacy Policy
                </a>
                <a
                  href="https://aipromptzyra.com/disclaimer/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('disclaimer');
                  }}
                  className="block px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950/40"
                >
                  Disclaimer
                </a>
                <a
                  href="https://aipromptzyra.com/terms-and-conditions/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleImportantPageClick('terms-and-conditions');
                  }}
                  className="block px-3 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950/40"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenThemeHub();
              }}
              className="w-full py-2.5 bg-purple-600 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow cursor-pointer"
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
