import React, { useState, useEffect } from 'react';
import {
  MATERNITY_ARTICLE,
  MaternityPromptItem,
  FAQItem
} from '../data/maternityArticleData';
import {
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  Clock,
  Calendar,
  Sparkles,
  Camera,
  Layers,
  ChevronDown,
  ChevronUp,
  Bookmark,
  Share2,
  FileCode,
  ArrowLeft,
  CheckCircle2,
  Compass,
  Download,
  Info
} from 'lucide-react';

interface Props {
  onBackToHome?: () => void;
  onOpenThemeHub?: () => void;
  onSelectCategory?: (slug: string) => void;
  onOpenPrompt?: (promptId: string) => void;
}

const TRENDING_SIDEBAR_PROMPTS = [
  {
    id: 'trending-1',
    title: 'Indian Traditional Wedding Prompt for Gemini AI (2026)',
    date: 'October 3, 2026',
    thumb: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=160&h=160&q=80',
    promptText: 'A magnificent Indian traditional wedding photoshoot prompt for Gemini AI: royal groom in embroidered ivory sherwani and bride in crimson bridal lehenga at an opulent palace courtyard mandap with marigold floral canopies, glowing brass diyas, authentic cinematic lighting, 8k resolution, ultra detailed.',
  },
  {
    id: 'trending-2',
    title: 'Couple Maternity Photoshoot Prompt Ideas in Indian Saree',
    date: 'October 3, 2026',
    thumb: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=160&h=160&q=80',
    promptText: 'Couple maternity photoshoot in traditional Indian royal saree: loving husband in silk kurta gently holding pregnant wife\'s baby bump adorned in a ruby red Kanjeevaram silk saree with intricate golden zari border, marigold petal backdrop, golden hour warm lighting, 8k resolution.',
  },
  {
    id: 'trending-3',
    title: 'Eyes Prompt for Girl Instagram & ChatGPT (2026)',
    date: 'October 3, 2026',
    thumb: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80',
    promptText: 'Ultra close-up macro portrait of expressive captivating hazel eyes of a girl, subtle kohl eyeliner, individual eyelashes, soft golden reflection in the iris, natural skin texture with subtle freckles, studio softbox illumination, 100mm f/2.8 macro lens.',
  },
  {
    id: 'trending-4',
    title: 'Couple Eyes Prompt ChatGPT Aesthetic (2026)',
    date: 'October 2, 2026',
    thumb: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&h=160&q=80',
    promptText: 'Aesthetic cinematic split portrait focusing on a couple\'s deep emotional eye contact, soft rim lighting, subtle bokeh particles in air, vintage 35mm film grain, 85mm portrait composition, hyper-realistic detail.',
  },
];

const APPROVED_SIDEBAR_CATEGORIES = [
  { name: 'Trending Prompts', slug: 'trending-prompts', count: 46 },
  { name: 'Couple Prompts', slug: 'couple-prompts', count: 38 },
  { name: 'AI Photo Prompts', slug: 'ai-photo-prompts', count: 52 },
];

export function SingleArticleMaternity({ onBackToHome, onOpenThemeHub, onSelectCategory, onOpenPrompt }: Props) {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [copiedPromptText, setCopiedPromptText] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('prompts-collection');
  const [openFaqs, setOpenFaqs] = useState<{ [index: number]: boolean }>({ 0: true });
  const [showCodeModal, setShowCodeModal] = useState(false);
  const [bookmarkedPrompts, setBookmarkedPrompts] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('maternity_saved_prompts') || '[]');
    } catch {
      return [];
    }
  });
  const [linkCopied, setLinkCopied] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState<string | null>(null);

  // Copy Prompt to Clipboard
  const handleCopyPrompt = (prompt: MaternityPromptItem) => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopiedId(prompt.id);
    setCopiedPromptText(prompt.prompt);
    setShowSuccessToast(`Copied prompt #${prompt.id}: "${prompt.title.replace(/^\d+\.\s*/, '')}"`);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
    setTimeout(() => {
      setShowSuccessToast(null);
    }, 3500);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setShowSuccessToast('Article link copied to clipboard!');
    setTimeout(() => setLinkCopied(false), 2500);
    setTimeout(() => setShowSuccessToast(null), 3500);
  };

  const toggleBookmark = (id: number) => {
    setBookmarkedPrompts((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      localStorage.setItem('maternity_saved_prompts', JSON.stringify(next));
      return next;
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = MATERNITY_ARTICLE.tableOfContents.map((t) => document.getElementById(t.id));
      const scrollPos = window.scrollY + 200;
      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(MATERNITY_ARTICLE.tableOfContents[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <article className="single-couple-maternity-ai-article w-full pb-20 transition-colors">
      {/* Toast Notification */}
      {showSuccessToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-violet-900 text-white px-5 py-3.5 rounded-xl shadow-2xl border border-violet-700/50 animate-bounce duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{showSuccessToast}</span>
        </div>
      )}

      {/* Article Sub-Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur sticky top-16 z-30 px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 overflow-hidden text-ellipsis whitespace-nowrap">
            {onBackToHome && (
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1 font-semibold text-violet-600 dark:text-violet-400 hover:underline mr-2 shrink-0 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
              </button>
            )}
            <span className="hidden sm:inline bg-violet-100 dark:bg-violet-950/70 text-violet-700 dark:text-violet-300 font-semibold px-2 py-0.5 rounded text-[11px]">
              Single Article Redesign
            </span>
            <span className="truncate">Post ID: {MATERNITY_ARTICLE.postId}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setShowCodeModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-violet-50 dark:hover:bg-violet-950/50 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors"
              title="Inspect WordPress PHP template and scoped CSS"
            >
              <FileCode className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
              <span>WordPress Template</span>
            </button>
            <button
              onClick={handleCopyUrl}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 cursor-pointer transition-colors"
              title="Share article link"
            >
              {linkCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Share2 className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{linkCopied ? 'Copied' : 'Share'}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Article Content */}
          <div className="lg:col-span-8 min-w-0">
        {/* B. Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="maternity-breadcrumbs flex items-center flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 py-2.5 px-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200/70 dark:border-slate-800/80 shadow-xs"
        >
          <button
            type="button"
            onClick={onBackToHome}
            className="hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors cursor-pointer inline-flex items-center gap-1"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <button
            type="button"
            onClick={() => {
              if (onSelectCategory) {
                onSelectCategory('couple-prompts');
              } else if (onBackToHome) {
                onBackToHome();
              }
            }}
            className="hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors cursor-pointer"
          >
            Couple Prompts
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[280px] sm:max-w-none" aria-current="page">
            Couple Maternity Photoshoot Prompts for Gemini AI
          </span>
        </nav>

        {/* C. Article Header */}
        <header className="maternity-header mb-8">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-50 dark:bg-violet-950/70 text-violet-700 dark:text-violet-300 border border-violet-200/80 dark:border-violet-800/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
            <span className="tracking-wide">2026 Editorial Guide & Prompts Collection</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4.5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
            {MATERNITY_ARTICLE.h1}
          </h1>

          {/* Author & Publication Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-3.5 border-y border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-3">
              <img
                src={MATERNITY_ARTICLE.author.avatar}
                alt={MATERNITY_ARTICLE.author.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-violet-500/30"
              />
              <div>
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <a
                    href={MATERNITY_ARTICLE.author.url}
                    className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {MATERNITY_ARTICLE.author.name}
                  </a>
                  <span className="text-[11px] font-normal text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60 px-1.5 py-0.5 rounded">
                    Author
                  </span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {MATERNITY_ARTICLE.author.role}
                </div>
              </div>
            </div>

            <div className="flex items-center flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Published: <strong className="text-slate-700 dark:text-slate-300 font-medium">{MATERNITY_ARTICLE.publishedDate}</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                Read time: <strong className="text-slate-700 dark:text-slate-300 font-medium">{MATERNITY_ARTICLE.readingTime}</strong>
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-900">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <img
                src={MATERNITY_ARTICLE.featuredImage.url}
                alt={MATERNITY_ARTICLE.featuredImage.alt}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 sm:p-6">
                <p className="text-white/90 text-xs sm:text-sm font-medium backdrop-blur-sm bg-black/40 px-3 py-1.5 rounded-lg">
                  {MATERNITY_ARTICLE.featuredImage.caption}
                </p>
              </div>
            </div>
          </div>

          {/* Intro Paragraphs */}
          <div className="mt-6 space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {MATERNITY_ARTICLE.introParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </header>

        {/* E. Table of Contents */}
        <div className="maternity-toc my-8 p-5 sm:p-6 bg-gradient-to-br from-violet-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-[#0E1526] dark:to-slate-900 rounded-2xl border border-violet-200/80 dark:border-violet-900/40 shadow-sm">
          <div className="flex items-center gap-2 mb-3 text-slate-900 dark:text-white font-bold text-base sm:text-lg">
            <Compass className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            <span>Table of Contents</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 border-t border-slate-200 dark:border-slate-800 text-sm">
            {MATERNITY_ARTICLE.tableOfContents.map((toc) => (
              <button
                key={toc.id}
                onClick={() => scrollToSection(toc.id)}
                className={`text-left px-3 py-2 rounded-lg font-medium transition-colors cursor-pointer flex items-center justify-between ${
                  activeSection === toc.id
                    ? 'bg-violet-600 text-white font-semibold shadow-sm'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-violet-100/70 dark:hover:bg-slate-800/80'
                }`}
              >
                <span className="truncate">{toc.title}</span>
                <ChevronRight className={`w-4 h-4 shrink-0 ml-2 ${activeSection === toc.id ? 'text-white' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>
        </div>

        {/* D. Article Content Sections */}

        {/* SECTION 1: PROMPTS COLLECTION */}
        <section id="prompts-collection" className="scroll-mt-28 mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Core Catalog (11 Concepts)
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Best Couple Maternity Photoshoot Prompts (Copy &amp; Paste)
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-800/40">
                <Check className="w-3.5 h-3.5" /> 100% Tested Prompts
              </span>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
            Browse through our top 11 maternity photo concepts below. Tap <strong className="text-slate-800 dark:text-slate-200">"Copy Prompt"</strong> to copy the prompt to your clipboard, or click <strong className="text-slate-800 dark:text-slate-200">"Gemini"</strong> or <strong className="text-slate-800 dark:text-slate-200">"ChatGPT"</strong> to open the AI studio directly with your reference photos attached.
          </p>

          {/* 11 Prompts Cards */}
          <div className="space-y-10">
            {MATERNITY_ARTICLE.prompts.map((item) => {
              const isCopied = copiedId === item.id;
              const isSaved = bookmarkedPrompts.includes(item.id);

              return (
                <div
                  key={item.id}
                  id={`prompt-${item.id}`}
                  className="maternity-prompt-card bg-white dark:bg-[#111625] rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="p-4 sm:p-5 bg-gradient-to-r from-violet-50/50 via-white to-slate-50 dark:from-[#151C2E] dark:via-[#111625] dark:to-[#111625] border-b border-slate-200/80 dark:border-slate-800/80 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-lg bg-violet-600 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-sm">
                        {item.number}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-2 rounded-lg transition-colors cursor-pointer shrink-0 ${
                        isSaved
                          ? 'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/60'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={isSaved ? 'Remove from bookmarks' : 'Bookmark this prompt'}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Card Body: Split Grid with Image & Prompt Box */}
                  <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Media Column (Image Preview) */}
                    <div className="lg:col-span-5 flex flex-col justify-between">
                      <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700/80 bg-slate-900 relative group aspect-[3/4] shadow-inner">
                        <img
                          src={item.image}
                          alt={item.alt}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/70 backdrop-blur text-white border border-white/20">
                            {item.aspectRatio}
                          </span>
                        </div>
                        <div className="absolute bottom-2.5 right-2.5">
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-900/80 backdrop-blur text-violet-200 border border-violet-500/30">
                            {item.style}
                          </span>
                        </div>
                      </div>

                      {/* Technical Specs Tags */}
                      <div className="mt-3.5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                        <div className="flex items-center gap-1.5">
                          <Camera className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span className="font-medium text-slate-700 dark:text-slate-300">Lighting:</span>
                          <span className="truncate">{item.lighting}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                          <span className="font-medium text-slate-700 dark:text-slate-300">Wardrobe:</span>
                          <span className="truncate">{item.outfitHighlights}</span>
                        </div>
                      </div>
                    </div>

                    {/* Prompt Box Column */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-violet-500" />
                            Full AI Prompt String (Copy-Ready):
                          </span>
                          <span className="text-[11px] text-slate-400">
                            {item.prompt.length} chars
                          </span>
                        </div>

                        {/* Copyable Prompt Container */}
                        <div className="relative group rounded-xl bg-slate-900 text-slate-100 p-4 font-mono text-xs leading-relaxed border border-slate-800 shadow-inner overflow-hidden">
                          <div className="max-h-56 overflow-y-auto pr-2 scrollbar-thin select-all">
                            {item.prompt}
                          </div>

                          <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2">
                            <span className="text-[11px] text-slate-400 font-sans">
                              Compatible with Gemini, ChatGPT 4o, Bing
                            </span>
                            <button
                              onClick={() => handleCopyPrompt(item)}
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                                isCopied
                                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                                  : 'bg-violet-600 hover:bg-violet-500 text-white'
                              }`}
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
                                  <span>Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copy Prompt</span>
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* AI Tool Launcher Buttons (Gemini & ChatGPT) */}
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                            Test In:
                          </span>
                          <a
                            href="https://gemini.google.com/app"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleCopyPrompt(item)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-violet-50 dark:bg-violet-950/70 hover:bg-violet-100 dark:hover:bg-violet-900 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800/50 transition-colors"
                          >
                            <span>Gemini AI</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          <a
                            href="https://chatgpt.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => handleCopyPrompt(item)}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/70 hover:bg-emerald-100 dark:hover:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 transition-colors"
                          >
                            <span>ChatGPT</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>

                        <button
                          onClick={() => handleCopyPrompt(item)}
                          className="text-xs text-violet-600 dark:text-violet-400 hover:underline font-medium cursor-pointer"
                        >
                          Quick Copy &amp; Go &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 2: STYLING & OUTFIT GUIDE */}
        <section id="styling-guide" className="scroll-mt-28 mb-16">
          <div className="mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Wardrobe &amp; Aesthetic Rules
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              {MATERNITY_ARTICLE.stylingGuide.title}
            </h2>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
            {MATERNITY_ARTICLE.stylingGuide.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Card */}
            <div className="bg-white dark:bg-[#111625] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-violet-700 dark:text-violet-300 font-bold text-base">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{MATERNITY_ARTICLE.stylingGuide.traditional.title}</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-1">
                    Mom-to-Be (Saree Drape):
                  </strong>
                  <p>{MATERNITY_ARTICLE.stylingGuide.traditional.sareeDrape}</p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-1">
                    Jewellery &amp; Adornments:
                  </strong>
                  <p>{MATERNITY_ARTICLE.stylingGuide.traditional.jewellery}</p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-1">
                    Dad-to-Be (Kurta Pajama / Veshti):
                  </strong>
                  <p>{MATERNITY_ARTICLE.stylingGuide.traditional.dadAttire}</p>
                </div>
              </div>
            </div>

            {/* Western Card */}
            <div className="bg-white dark:bg-[#111625] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800 text-violet-700 dark:text-violet-300 font-bold text-base">
                <Camera className="w-4 h-4 text-sky-500" />
                <span>{MATERNITY_ARTICLE.stylingGuide.western.title}</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-1">
                    Dramatic Flying Gowns:
                  </strong>
                  <p>{MATERNITY_ARTICLE.stylingGuide.western.flyingGowns}</p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-1">
                    Minimalist Studio Linen:
                  </strong>
                  <p>{MATERNITY_ARTICLE.stylingGuide.western.studioLinen}</p>
                </div>
                <div>
                  <strong className="text-slate-900 dark:text-white block mb-1">
                    Urban Cool Streetwear:
                  </strong>
                  <p>{MATERNITY_ARTICLE.stylingGuide.western.streetwear}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: POSES & TIMING */}
        <section id="poses-timing" className="scroll-mt-28 mb-16">
          <div className="mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Choreography &amp; Weeks Timing
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              {MATERNITY_ARTICLE.posesGuide.title}
            </h2>
          </div>

          <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6">
            {MATERNITY_ARTICLE.posesGuide.intro}
          </p>

          {/* Golden Window Callout */}
          <div className="mb-8 p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 mt-0.5">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-amber-900 dark:text-amber-200">
                {MATERNITY_ARTICLE.posesGuide.timing.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
                {MATERNITY_ARTICLE.posesGuide.timing.recommendation}
              </p>
            </div>
          </div>

          {/* 4 Poses Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MATERNITY_ARTICLE.posesGuide.poses.map((pose, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#111625] rounded-xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2 font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                  <span className="w-6 h-6 rounded-md bg-violet-100 dark:bg-violet-950/80 text-violet-700 dark:text-violet-300 text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span>{pose.name}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pose.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: DUAL FACE MATCHING TIPS */}
        <section id="dual-face-matching" className="scroll-mt-28 mb-16">
          <div className="mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Facial Consistency Workflow
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              {MATERNITY_ARTICLE.dualFaceTips.title}
            </h2>
          </div>

          <div className="bg-gradient-to-br from-violet-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-violet-700/50">
            <h3 className="text-lg sm:text-xl font-bold mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-violet-300" />
              How to Preserve Both Real Faces Accurately
            </h3>
            <p className="text-xs sm:text-sm text-violet-200 mb-6 leading-relaxed">
              {MATERNITY_ARTICLE.dualFaceTips.intro}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MATERNITY_ARTICLE.dualFaceTips.tips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15"
                >
                  <div className="w-7 h-7 rounded-lg bg-violet-400 text-slate-950 font-bold text-xs flex items-center justify-center mb-3">
                    {idx + 1}
                  </div>
                  <h4 className="font-semibold text-sm mb-1.5 text-white">{tip.title}</h4>
                  <p className="text-xs text-violet-100/90 leading-relaxed">{tip.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQS */}
        <section id="faq-section" className="scroll-mt-28 mb-16">
          <div className="mb-6 pb-3 border-b border-slate-200 dark:border-slate-800">
            <span className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400">
              Direct Answers
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>

          <div className="space-y-3">
            {MATERNITY_ARTICLE.faqs.map((faq, idx) => {
              const isOpen = !!openFaqs[idx];
              return (
                <div
                  key={idx}
                  className="bg-white dark:bg-[#111625] rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: COMMUNITY & EXPLORE MORE */}
        <section id="community-section" className="scroll-mt-28 mb-12">
          <div className="bg-slate-100 dark:bg-slate-900/80 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
              Explore More Viral AI Photo Prompts
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
              Browse through our complete collection of trending photography prompts for couples, brides, grooms, and festival occasions:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MATERNITY_ARTICLE.relatedGuides.map((guide, idx) => (
                <a
                  key={idx}
                  href={guide.url}
                  className="p-3.5 rounded-xl bg-white dark:bg-[#111625] border border-slate-200 dark:border-slate-800 hover:border-violet-400 dark:hover:border-violet-600 transition-colors flex items-center justify-between group"
                >
                  <div className="pr-3">
                    <span className="text-[10px] font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider block mb-0.5">
                      {guide.tag}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                      {guide.title}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>{/* End Left Column (lg:col-span-8) */}

      {/* Right Sidebar Column (lg:col-span-4) - Matching Reference Screenshot */}
      <aside className="lg:col-span-4 w-full space-y-6 lg:sticky lg:top-24">

        {/* 1. POST AUTHOR CARD */}
        <div className="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-xs transition-colors">
          <div className="relative pb-3 mb-5 border-b border-slate-100 dark:border-slate-700/60">
            <h3 className="font-['Outfit'] font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
              Post Author
            </h3>
            <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-orange-500 rounded-full" />
          </div>

          <div className="flex flex-col items-center text-center">
            {/* Centered Circular Avatar */}
            <div className="w-20 h-20 rounded-full overflow-hidden p-0.5 border-2 border-orange-300 dark:border-orange-500/50 shadow-sm mb-3 bg-orange-50 dark:bg-slate-700">
              <img
                src={MATERNITY_ARTICLE.author.avatar}
                alt={MATERNITY_ARTICLE.author.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Author Name + Verified Badge */}
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <h4 className="font-['Outfit'] font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                {MATERNITY_ARTICLE.author.name}
              </h4>
              <span title="Verified Author" className="inline-flex items-center text-blue-500" aria-label="Verified Author">
                <svg className="w-4 h-4 fill-blue-500" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
                  <path d="M8.5 12.5L10.8 14.8L15.5 9.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>

            {/* Author Short Biography */}
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs mb-4">
              {MATERNITY_ARTICLE.author.name} is a passionate blogger and digital creator with years of experience in creative technology and AI prompt engineering. Through AIPromptZyra, Mariya focuses on AI photo editing prompts, festive creative ideas, couple portraits, and practical guides.
            </p>

            {/* "View All Guides" link matching screenshot */}
            <div className="w-full pt-3 border-t border-dashed border-slate-200 dark:border-slate-700/60">
              <a
                href="#community-section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('community-section');
                }}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 dark:hover:text-orange-300 underline underline-offset-4 transition-colors cursor-pointer"
              >
                <span>View All Guides</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. TRENDING PROMPTS CARD */}
        <div className="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-xs transition-colors">
          <div className="relative pb-3 mb-5 border-b border-slate-100 dark:border-slate-700/60">
            <h3 className="font-['Outfit'] font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
              Trending Prompts
            </h3>
            <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-orange-500 rounded-full" />
          </div>

          <div className="space-y-3.5">
            {TRENDING_SIDEBAR_PROMPTS.map((item) => (
              <article
                key={item.id}
                onClick={() => {
                  navigator.clipboard.writeText(item.promptText);
                  setShowSuccessToast(`Copied prompt: "${item.title}"`);
                  setTimeout(() => setShowSuccessToast(null), 3000);
                }}
                className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80 last:border-b-0 last:pb-0 group cursor-pointer"
                title="Click to copy prompt"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-700 shadow-2xs">
                  <img
                    src={item.thumb}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h5 className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 line-clamp-2 leading-snug transition-colors">
                    {item.title}
                  </h5>
                  <time className="text-[11px] text-slate-400 dark:text-slate-500 mt-1 block">
                    {item.date}
                  </time>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 3. CATEGORIES CARD (STRICTLY THE 3 APPROVED CATEGORIES) */}
        <div className="bg-white dark:bg-slate-800/95 rounded-2xl border border-slate-200 dark:border-slate-700/80 p-6 shadow-xs transition-colors">
          <div className="relative pb-3 mb-5 border-b border-slate-100 dark:border-slate-700/60">
            <h3 className="font-['Outfit'] font-extrabold text-base text-slate-900 dark:text-white tracking-tight">
              Categories
            </h3>
            <span className="absolute bottom-0 left-0 w-8 h-[3px] bg-orange-500 rounded-full" />
          </div>

          <div className="space-y-2">
            {APPROVED_SIDEBAR_CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => {
                  if (onSelectCategory) {
                    onSelectCategory(cat.slug);
                  }
                  if (onBackToHome) {
                    onBackToHome();
                  }
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 hover:bg-violet-50 dark:hover:bg-violet-950/40 border border-slate-100 dark:border-slate-800 hover:border-violet-200 dark:hover:border-violet-800/60 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400 transition-all group cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:scale-125 transition-transform" />
                  {cat.name}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 group-hover:translate-x-0.5 transition-all" />
              </button>
            ))}
          </div>
        </div>

      </aside>
    </div>{/* End grid */}
  </div>{/* End max-w-7xl */}

      {/* WordPress Code Modal for Theme Inspection */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white dark:bg-[#0E1526] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900">
              <div className="flex items-center gap-2.5">
                <FileCode className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                <div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    WordPress Dedicated Single Article Template
                  </h3>
                  <p className="text-xs text-slate-500">
                    Path: <code className="bg-slate-200 dark:bg-slate-800 px-1 py-0.5 rounded text-[11px]">wordpress-theme/aipromptzyra/single-couple-maternity-photoshoot-prompts-for-gemini-ai.php</code>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs font-mono">
              <div className="p-3 bg-violet-50 dark:bg-violet-950/40 rounded-lg text-violet-800 dark:text-violet-200 border border-violet-200 dark:border-violet-900/60 font-sans text-xs">
                <strong>Strict Scope Verified:</strong> This template applies exclusively to <code className="font-mono">couple-maternity-photoshoot-prompts-for-gemini-ai</code> (Post ID: 61594710183320). All styles are scoped under <code className="font-mono">.single-couple-maternity-ai-article</code> so other articles, archives, and pages remain 100% unaffected.
              </div>

              <div>
                <span className="font-sans font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  1. Template Routing in single.php:
                </span>
                <pre className="p-3 rounded-lg bg-slate-900 text-slate-100 overflow-x-auto text-[11px] leading-relaxed">
{`// In single.php:
if (is_single('couple-maternity-photoshoot-prompts-for-gemini-ai') || get_the_ID() == 61594710183320) {
    get_template_part('template-parts/single', 'couple-maternity-ai');
    return;
}`}
                </pre>
              </div>

              <div>
                <span className="font-sans font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  2. Scoped Enqueue in functions.php:
                </span>
                <pre className="p-3 rounded-lg bg-slate-900 text-slate-100 overflow-x-auto text-[11px] leading-relaxed">
{`if (is_single('couple-maternity-photoshoot-prompts-for-gemini-ai')) {
    wp_enqueue_style('aipromptzyra-maternity-single', get_template_directory_uri() . '/assets/css/single-couple-maternity-ai.css', array('aipromptzyra-style'), AIPROMPTON_VERSION);
}`}
                </pre>
              </div>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
              <a
                href="/aipromptzyra-theme.zip"
                download="aipromptzyra-theme.zip"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Updated Theme ZIP</span>
              </a>
              <button
                onClick={() => setShowCodeModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 text-slate-800 dark:text-slate-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
