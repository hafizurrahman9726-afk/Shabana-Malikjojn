import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryCarousel } from './components/CategoryCarousel';
import { GuidesSection } from './components/GuidesSection';
import { PromptBuilder } from './components/PromptBuilder';
import { HowToUseSection } from './components/HowToUseSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { CommunitySection } from './components/CommunitySection';
import { FaqSection } from './components/FaqSection';
import { AuthorProfileCard } from './components/AuthorProfileCard';
import { Footer } from './components/Footer';
import { PromptDetailModal } from './components/PromptDetailModal';
import { GuideReaderModal } from './components/GuideReaderModal';
import { ThemeHubModal } from './components/ThemeHubModal';
import { StaticPageModal } from './components/StaticPageModal';
import { AboutUsPage } from './components/AboutUsPage';
import { CATEGORIES_DATA, PROMPTS_DATA, GUIDES_DATA } from './data/promptsData';
import { PromptItem, GuideItem } from './types';

export default function App() {
  // Current view routing ('home' for the homepage, 'about' for About Us, '404' for removed/missing permalinks)
  const [currentView, setCurrentView] = useState<'home' | 'about' | '404'>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const path = window.location.pathname;
      if (
        urlParams.get('view') === 'maternity' ||
        path.includes('couple-maternity-photoshoot-prompts-for-gemini-ai')
      ) {
        return '404';
      }
      if (urlParams.get('view') === 'about') return 'about';
    } catch {
      // ignore
    }
    return 'home';
  });

  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('aipromptzyra_theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('aipromptzyra_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('aipromptzyra_theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState('Home');

  // Bookmarking state (saved in localStorage)
  const [savedCategories, setSavedCategories] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('aipromptzyra_saved_cats') || '[]');
    } catch {
      return [];
    }
  });

  const [savedPrompts, setSavedPrompts] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('aipromptzyra_saved_prompts') || '[]');
    } catch {
      return [];
    }
  });

  const [savedGuides, setSavedGuides] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('aipromptzyra_saved_guides') || '[]');
    } catch {
      return [];
    }
  });

  // Modal states
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);
  const [selectedGuide, setSelectedGuide] = useState<GuideItem | null>(null);
  const [themeHubOpen, setThemeHubOpen] = useState(false);
  const [activePageSlug, setActivePageSlug] = useState<string | null>(null);

  // Toggle bookmarks
  const handleToggleSaveCategory = (catId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedCategories((prev) => {
      const next = prev.includes(catId) ? prev.filter((id) => id !== catId) : [...prev, catId];
      localStorage.setItem('aipromptzyra_saved_cats', JSON.stringify(next));
      return next;
    });
  };

  const handleToggleSavePrompt = (promptId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPrompts((prev) => {
      const next = prev.includes(promptId) ? prev.filter((id) => id !== promptId) : [...prev, promptId];
      localStorage.setItem('aipromptzyra_saved_prompts', JSON.stringify(next));
      return next;
    });
  };

  const handleToggleSaveGuide = (guideId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedGuides((prev) => {
      const next = prev.includes(guideId) ? prev.filter((id) => id !== guideId) : [...prev, guideId];
      localStorage.setItem('aipromptzyra_saved_guides', JSON.stringify(next));
      return next;
    });
  };

  // Filter prompts by search query & category
  const filteredPrompts = useMemo(() => {
    return PROMPTS_DATA.filter((p) => {
      const matchesSearch =
        searchQuery === '' ||
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        !selectedCategory || p.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  // Filter guides by search query
  const filteredGuides = useMemo(() => {
    if (!searchQuery.trim()) return GUIDES_DATA;
    const q = searchQuery.toLowerCase();
    return GUIDES_DATA.filter(
      (g) =>
        g.title.toLowerCase().includes(q) ||
        g.desc.toLowerCase().includes(q) ||
        g.content.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const el = document.getElementById('guides-section') || document.getElementById('prompt-carousel-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTag = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory(null);
    const el = document.getElementById('guides-section') || document.getElementById('prompt-carousel-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (slug: string) => {
    if (selectedCategory === slug) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(slug);
      const el = document.getElementById('guides-section') || document.getElementById('prompt-carousel-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string, navName: string) => {
    setActiveNav(navName);
    const targetId = sectionId === 'categories-section' ? 'prompt-carousel-section' : sectionId;
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* 1. Header & Navigation */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDark={isDark}
        toggleTheme={toggleTheme}
        onOpenThemeHub={() => setThemeHubOpen(true)}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        onOpenPage={(slug) => setActivePageSlug(slug)}
        currentView={currentView}
        onSelectView={(view) => setCurrentView(view)}
        onSelectCategory={handleSelectCategory}
      />

      <main className="flex-1 bg-white dark:bg-[#0B0F19]">
        {currentView === '404' ? (
          <div className="max-w-3xl mx-auto px-4 py-24 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 dark:bg-rose-950/70 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 mb-6">
              <span>HTTP 410 Gone / 404 Not Found</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] mb-4">
              Article Permanently Removed
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
              The article <strong className="text-slate-800 dark:text-slate-200">"Couple Maternity Photoshoot Prompts for Gemini AI (2026): 11+ Indian &amp; Western Pregnancy Photo Ideas"</strong> and its dedicated single-post template have been completely deleted from AIPromptZyra.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setCurrentView('home');
                  setActiveNav('Home');
                  if (window.history.pushState) {
                    window.history.pushState({}, '', '/');
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-sm transition-all shadow-md shadow-purple-500/20 cursor-pointer"
              >
                Return to Homepage
              </button>
              <button
                onClick={() => {
                  setCurrentView('home');
                  setActiveNav('Guides');
                  if (window.history.pushState) {
                    window.history.pushState({}, '', '/');
                  }
                  setTimeout(() => {
                    const el = document.getElementById('guides-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 50);
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-all cursor-pointer"
              >
                Browse Active Guides
              </button>
            </div>
          </div>
        ) : currentView === 'about' ? (
          <AboutUsPage
            onBackToHome={() => {
              setCurrentView('home');
              setActiveNav('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenContact={() => setActivePageSlug('contact')}
            onOpenPage={(slug) => setActivePageSlug(slug)}
            onSelectCategory={handleSelectCategory}
            onSelectGuideBySlug={(slug) => {
              if (slug === 'couple-maternity-photoshoot-prompts-for-gemini-ai') {
                setCurrentView('404');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                const g = GUIDES_DATA.find((item) => item.slug === slug);
                if (g) setSelectedGuide(g);
              }
            }}
          />
        ) : (
          <>
            {/* 2. Hero Section */}
            <Hero
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearchSubmit={handleSearchSubmit}
              onSelectTag={handleSelectTag}
            />

            {/* 3. Horizontal Sliding Prompt Categories Carousel */}
            <CategoryCarousel
              onSelectTag={handleSelectTag}
              onSelectCategory={handleSelectCategory}
            />

            {/* 4. Latest Guides & Tutorials (Only rendered when published articles exist) */}
            {filteredGuides.length > 0 && (
              <GuidesSection
                guides={filteredGuides}
                savedGuides={savedGuides}
                onToggleSaveGuide={handleToggleSaveGuide}
                onSelectGuide={(g) => {
                  setSelectedGuide(g);
                }}
                onViewAllGuides={() => {
                  const el = document.getElementById('guides-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            )}

            {/* 5. AI Prompt Builder */}
            <PromptBuilder />

            {/* 6. How to Use AI Prompts (3 Steps + Robot visual) */}
            <HowToUseSection />

            {/* 7. Why Choose AIPromptZyra (Editorial 3-Feature Cards) */}
            <WhyChooseSection onLearnMore={() => setActivePageSlug('about')} />

            {/* 9. Join Our Community (Facebook, Telegram, Instagram) */}
            <CommunitySection />

            {/* 10. Frequently Asked Questions About AIPromptZyra */}
            <FaqSection />

            {/* 11. Owner Profile Card (Zyra Ansari) */}
            <AuthorProfileCard
              onViewAllGuides={() => {
                const el = document.getElementById('guides-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </>
        )}
      </main>

      {/* 10. Dark Footer */}
      <Footer
        onNavClick={handleNavClick}
        onOpenPage={(slug) => setActivePageSlug(slug)}
        onSelectCategory={handleSelectCategory}
        onOpenThemeHub={() => setThemeHubOpen(true)}
        onSelectView={(view) => setCurrentView(view)}
      />

      {/* Interactive Modals */}
      <PromptDetailModal
        prompt={selectedPrompt}
        onClose={() => setSelectedPrompt(null)}
      />

      <GuideReaderModal
        guide={selectedGuide}
        onClose={() => setSelectedGuide(null)}
      />

      <ThemeHubModal
        isOpen={themeHubOpen}
        onClose={() => setThemeHubOpen(false)}
      />

      <StaticPageModal
        pageSlug={activePageSlug}
        onClose={() => setActivePageSlug(null)}
        onSelectPage={(slug) => setActivePageSlug(slug)}
      />
    </div>
  );
}
