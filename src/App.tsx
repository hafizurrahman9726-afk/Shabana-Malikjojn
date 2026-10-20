import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
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
import { SingleArticleMaternity } from './components/SingleArticleMaternity';
import { AboutUsPage } from './components/AboutUsPage';
import { CATEGORIES_DATA, PROMPTS_DATA, GUIDES_DATA } from './data/promptsData';
import { PromptItem, GuideItem } from './types';

export default function App() {
  // Current view routing ('home' for the homepage, 'maternity-article' for the single article guide, 'about' for About Us)
  const [currentView, setCurrentView] = useState<'home' | 'maternity-article' | 'about'>(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('view') === 'maternity') return 'maternity-article';
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
    const el = document.getElementById('categories-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectTag = (tag: string) => {
    setSearchQuery(tag);
    setSelectedCategory(null);
    const el = document.getElementById('categories-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCategory = (slug: string) => {
    if (selectedCategory === slug) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(slug);
      const el = document.getElementById('categories-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (sectionId: string, navName: string) => {
    setActiveNav(navName);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
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

      <main className="flex-1">
        {currentView === 'maternity-article' ? (
          <SingleArticleMaternity
            onBackToHome={() => {
              setCurrentView('home');
              setActiveNav('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenThemeHub={() => setThemeHubOpen(true)}
            onSelectCategory={handleSelectCategory}
            onOpenPrompt={(id) => {
              const p = PROMPTS_DATA.find((item) => item.id === id);
              if (p) setSelectedPrompt(p);
            }}
          />
        ) : currentView === 'about' ? (
          <AboutUsPage
            onBackToHome={() => {
              setCurrentView('home');
              setActiveNav('Home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenContact={() => setActivePageSlug('contact')}
            onSelectCategory={handleSelectCategory}
            onSelectGuideBySlug={(slug) => {
              if (slug === 'couple-maternity-photoshoot-prompts-for-gemini-ai') {
                setCurrentView('maternity-article');
                setActiveNav('Maternity Article');
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

            {/* 3. Explore Prompts by Category (3 Main Categories) */}
            <CategorySection
              categories={CATEGORIES_DATA}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              savedCategories={savedCategories}
              onToggleSaveCategory={handleToggleSaveCategory}
              onViewAllCategories={() => {
                const el = document.getElementById('guides-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 4. Latest Guides & Tutorials (30 published articles per page + functional pagination) */}
            <GuidesSection
              guides={filteredGuides}
              savedGuides={savedGuides}
              onToggleSaveGuide={handleToggleSaveGuide}
              onSelectGuide={(g) => {
                if (g.id === 'guide-maternity' || g.slug === 'couple-maternity-photoshoot-prompts-for-gemini-ai') {
                  setCurrentView('maternity-article');
                  setActiveNav('Maternity Article');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  setSelectedGuide(g);
                }
              }}
              onViewAllGuides={() => {
                const el = document.getElementById('guides-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

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

            {/* 11. Author Profile Card (Verified Author Hafizur Rahman) */}
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
      />
    </div>
  );
}
