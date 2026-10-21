import React, { useState } from 'react';
import {
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Compass,
  Layers,
  Heart,
  Flame,
  Camera,
  Cpu,
  Mail,
  ExternalLink,
  MessageSquare,
  Instagram
} from 'lucide-react';
import { AUTHORS_DATA } from '../data/promptsData';
import { AuthorProfile, GuideItem } from '../types';

interface AboutUsPageProps {
  onBackToHome: () => void;
  onOpenContact?: () => void;
  onOpenPage?: (slug: string) => void;
  onSelectCategory?: (slug: string) => void;
  onSelectGuideBySlug?: (slug: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBackToHome,
  onOpenContact,
  onOpenPage,
  onSelectCategory,
  onSelectGuideBySlug,
}) => {
  const [selectedAuthorForArchive, setSelectedAuthorForArchive] = useState<AuthorProfile | null>(null);

  return (
    <div className="w-full bg-[#FAFAFA] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 min-h-screen pb-24 transition-colors">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-[#0B0F19]/90 backdrop-blur sticky top-16 z-30 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-1 font-semibold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </button>
            <span>/</span>
            <span className="font-medium text-slate-800 dark:text-slate-200">About Us</span>
          </div>
          <span className="text-[11px] font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-200/60 dark:border-purple-800/60">
            Editorial Standards &amp; Team
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-16">
        {/* 1. Header & ABOUT AIPROMPTZYRA */}
        <header className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Discovering Meaningful AI Creative Formulas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit'] leading-tight">
            About <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">AIPromptZyra</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed pt-1">
            AIPromptZyra is an independent prompt engineering research and tutorial resource. We document, refine, and publish copy-ready prompts for multimodal generative models—including Google Gemini, OpenAI ChatGPT, and Midjourney—so artists, designers, and enthusiasts can achieve consistent, photorealistic results without endless guesswork.
          </p>
        </header>

        {/* 2. OUR STORY */}
        <section className="bg-white dark:bg-slate-800/90 rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200/90 dark:border-slate-700/80 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <Compass className="w-4 h-4" />
              <span>Our Motivation &amp; Background</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Our Story
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              When generative image tools emerged, millions of creators faced the same hurdle: short, conversational prompts frequently produced plastic textures, distorted anatomies, or flat compositions. Reaching photographic realism required specific optical keywords, sensor physics, lighting direction, and culturally grounded wardrobe descriptions.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              AIPromptZyra was started to bridge this gap. Rather than aggregating untested keyword lists, we set out to build a clean, searchable index of prompt formulas and practical tutorials. Each guide breaks down why specific parameters work, giving readers both immediate copy-ready prompts and the conceptual principles needed to build their own.
            </p>
          </div>
        </section>

        {/* 3. WHAT YOU CAN FIND HERE */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              What You Can Find Here
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              Our content is structured into three focused pillars to help you find relevant formulas quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {/* Category 1: Trending Prompts */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 text-amber-600 flex items-center justify-center">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Trending Prompts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Fast-moving aesthetic styles, viral neon urban cinematography, retro 35mm film recreations, and new prompt syntax tailored to generative video tools like Runway and Luma.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectCategory && onSelectCategory('trending-prompts')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline pt-2 cursor-pointer"
              >
                <span>Browse Trending Prompts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Category 2: Couple Prompts */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800/60 text-rose-600 flex items-center justify-center">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Couple Prompts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Dedicated photoshoot formulas for romantic milestones, couple maternity sessions, traditional Indian weddings, golden hour candid moments, and dual-subject facial consistency.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectCategory && onSelectCategory('couple-prompts')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline pt-2 cursor-pointer"
              >
                <span>Browse Couple Prompts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Category 3: AI Photo Prompts */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-7 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-600 flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit']">
                  AI Photo Prompts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Studio portraiture setups, natural sunlight window compositions, optical depth-of-field keywords, macro eye photography, and technical guidelines for unretouched skin texture.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onSelectCategory && onSelectCategory('ai-photo-prompts')}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline pt-2 cursor-pointer"
              >
                <span>Browse Photo Prompts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </section>

        {/* 4. OWNER PROFILE — ZYRA ANSARI */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 shadow-xs">
              <span>Leadership &amp; Ownership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Website Owner
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              Guiding AIPromptZyra&apos;s editorial vision, prompt curation standards, and community resources.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-200/90 dark:border-slate-700/80 shadow-md relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Owner Avatar */}
              <div className="relative shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-amber-500 p-0.5 bg-white dark:bg-slate-800 shadow-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="https://aipromptzyra.com/wp-content/uploads/2026/10/Zyra-Ansari.jpg"
                    alt="Zyra Ansari"
                    className="w-full h-full object-cover rounded-full"
                    loading="lazy"
                  />
                </div>
                <div
                  className="absolute bottom-1 right-2 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-800"
                  title="Verified Owner"
                >
                  <CheckCircle2 className="w-4 h-4 fill-white text-amber-500" />
                </div>
              </div>

              {/* Owner Details */}
              <div className="space-y-4 text-center md:text-left flex-1">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 mb-2">
                    <span>Owner</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                    Zyra Ansari
                  </h3>
                  <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mt-0.5">
                    Owner, AIPromptZyra
                  </p>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                  Zyra Ansari is the Owner of AIPromptZyra. She oversees the platform&apos;s vision, editorial direction, and community resources for visual AI prompt discovery and creative tutorials across Google Gemini, ChatGPT, and Midjourney.
                </p>

                {/* Official Social Links */}
                <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href="https://www.instagram.com/aipromptzyra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-gradient-to-r hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-white text-xs font-bold transition-all shadow-xs hover:scale-105"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://t.me/aipromptzyra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#229ED9] dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-white text-xs font-bold transition-all shadow-xs hover:scale-105"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                    <span>Telegram</span>
                  </a>
                  <a
                    href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#25D366] dark:bg-slate-700/80 text-slate-700 dark:text-slate-200 hover:text-white text-xs font-bold transition-all shadow-xs hover:scale-105"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z" />
                    </svg>
                    <span>WhatsApp Channel</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. MEET OUR EDITORIAL WRITERS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300">
              <span>Editorial Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Editorial Writers &amp; Curators
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              Each writer brings hands-on prompt research and focused domain expertise across our core categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-4xl mx-auto">
            {AUTHORS_DATA.filter((author) => author.id !== 'author-zyra').map((author) => (
              <div
                key={author.id}
                className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Avatar & Verification Badge */}
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/40 p-0.5"
                      />
                      <span
                        className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] shadow"
                        title="Verified Writer"
                      >
                        ✓
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white font-['Outfit']">
                        {author.name}
                      </h3>
                      <p className="text-xs font-semibold text-purple-600 dark:text-purple-400">
                        {author.role}
                      </p>
                    </div>
                  </div>

                  {/* Categories Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {author.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Bio */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {author.bio}
                  </p>

                  {/* Recent Published Articles Published by this Author */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      Recent Published Articles
                    </span>
                    {author.featuredArticles && author.featuredArticles.length > 0 ? (
                      <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                        {author.featuredArticles.slice(0, 3).map((art, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-purple-500 shrink-0 font-bold">•</span>
                            <button
                              type="button"
                              onClick={() => {
                                if (art.slug && onSelectGuideBySlug) {
                                  onSelectGuideBySlug(art.slug);
                                }
                              }}
                              className="text-left hover:text-purple-600 dark:hover:text-purple-400 transition-colors line-clamp-1 cursor-pointer"
                            >
                              {art.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                        No published articles yet. Check back soon for new guides from this author!
                      </p>
                    )}
                  </div>
                </div>

                {/* View All Articles Action */}
                <div className="pt-5 mt-4 border-t border-slate-100 dark:border-slate-700/80">
                  <button
                    type="button"
                    onClick={() => setSelectedAuthorForArchive(author)}
                    className="w-full py-2.5 px-4 rounded-xl bg-purple-50 hover:bg-purple-100 dark:bg-purple-950/50 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View All Articles by {author.name.split(' ')[0]} &rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. OUR EVERYDAY PROMISE TO YOU (4-Card Editorial Section) */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-800/60 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Editorial Integrity &amp; Transparency</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Our Everyday Promise to You
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              At AIPromptZyra, our goal is to provide practical, clearly written AI prompts that readers can understand, customize, and use with confidence. We focus on transparent instructions, realistic variables, and reproducible creative techniques across modern multimodal tools.
            </p>
          </div>

          {/* 4 Numbered Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Card 01 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:border-purple-300 dark:hover:border-purple-600 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-purple-600 dark:text-purple-400 tracking-tight">
                    01
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-800/60">
                    Precision Crafting
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Practical Prompts, Not Empty Promises
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Every prompt formula is built around actionable descriptive components—such as concrete camera lenses, lighting ratios, sensor depth, and physical materials—rather than hollow marketing buzzwords. We avoid claiming that every formula is universally guaranteed or exhaustively benchmarked unless supported by actual testing documentation, focusing instead on reliable foundations you can build upon.
                </p>
              </div>
            </div>

            {/* Card 02 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:border-purple-300 dark:hover:border-purple-600 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-purple-600 dark:text-purple-400 tracking-tight">
                    02
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-800/60">
                    Cultural Nuance
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Respect for Cultural Details
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Cultural depiction requires genuine attention to detail. When crafting prompts for traditional Indian weddings, festive celebrations, and regional ethnic attire like Banarasi sarees or royal sherwanis, we describe traditional textiles, sacred rituals, and heritage aesthetics with accuracy and respect, avoiding superficial stereotypes.
                </p>
              </div>
            </div>

            {/* Card 03 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:border-purple-300 dark:hover:border-purple-600 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-purple-600 dark:text-purple-400 tracking-tight">
                    03
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-800/60">
                    Organic Aesthetics
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Natural-Looking Creative Results
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Great prompt engineering prioritizes organic realism over synthetic perfection. We guide users on natural skin texture, balanced ambient light, authentic eye reflections, and realistic camera perspectives to reduce plastic artifacts, while recognizing that AI models naturally vary with each generation.
                </p>
              </div>
            </div>

            {/* Card 04 */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-7 sm:p-8 border border-slate-200/90 dark:border-slate-700/80 shadow-sm hover:border-purple-300 dark:hover:border-purple-600 transition-all flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl sm:text-3xl font-black font-['Outfit'] text-purple-600 dark:text-purple-400 tracking-tight">
                    04
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border border-purple-200/70 dark:border-purple-800/60">
                    Open Accessibility
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
                  Simple, Accessible Prompt Guides
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Exploring and applying AI prompts should be simple and friction-free. Our tutorials feature clear explanations, one-click copy functionality, and transparent disclosures about tool-specific capabilities and limitations, ensuring readers always have straightforward access without confusing barriers.
                </p>
              </div>
            </div>
          </div>

          {/* Supporting Section: How We Keep AIPromptZyra Accessible */}
          <div className="bg-gradient-to-br from-purple-50/70 via-white to-slate-50 dark:from-slate-900 dark:via-purple-950/20 dark:to-slate-900 rounded-3xl p-8 sm:p-10 border border-purple-200/80 dark:border-purple-900/60 shadow-xs space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
              <ShieldCheck className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Reader Access &amp; Operations</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              How We Keep AIPromptZyra Accessible
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              AIPromptZyra operates as an open, freely accessible educational resource supported by ethical, non-intrusive digital advertising. We never place core tutorials behind paywalls, subscription fees, or hidden reader costs. We hold reader trust and privacy in the highest regard: we do not track personal identifying data or sell visitor information to third parties. For complete details on our data protection commitments, please review our{' '}
              <button
                type="button"
                onClick={() => onOpenPage && onOpenPage('privacy-policy')}
                className="font-semibold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer inline-flex items-center gap-0.5"
              >
                <span>Privacy Policy</span>
                <ExternalLink className="w-3 h-3 inline" />
              </button>
              .
            </p>
          </div>
        </section>

        {/* 7. OFFICIAL SOCIAL MEDIA CHANNELS */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/60 shadow-xs">
              <span>Official Channels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Join Our Official Communities
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Connect with our official Instagram, Telegram, and WhatsApp channels for prompt updates and inspiration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/aipromptzyra"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:border-pink-400 dark:hover:border-pink-500 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                  <Instagram className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-['Outfit'] flex items-center justify-between">
                  <span>Instagram</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-rose-500 transition-colors" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Follow @aipromptzyra on Instagram for visual side-by-side prompt comparisons, creative showcases, and new prompt releases.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-700/80 text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 group-hover:underline">
                <span>Open @aipromptzyra</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/aipromptzyra"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-500 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#229ED9] text-white flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-['Outfit'] flex items-center justify-between">
                  <span>Telegram Channel</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-sky-500 transition-colors" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Join our official Telegram channel for instant alerts, copy-ready prompt drops, and prompt crafting tips directly in your feed.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-700/80 text-xs font-bold text-sky-600 dark:text-sky-400 flex items-center gap-1 group-hover:underline">
                <span>Join Telegram Channel</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>

            {/* WhatsApp Channel */}
            <a
              href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 sm:p-7 border border-slate-200/90 dark:border-slate-700/80 shadow-md hover:shadow-xl hover:border-emerald-400 dark:hover:border-emerald-500 transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white font-['Outfit'] flex items-center justify-between">
                  <span>WhatsApp Channel</span>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Subscribe to the official WhatsApp Channel for curated AI prompt notifications, guides, and creative workflows.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 dark:border-slate-700/80 text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:underline">
                <span>Subscribe on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </section>

        {/* 8. CONTACT US */}
        <section className="rounded-3xl bg-gradient-to-r from-[#0B0F19] via-[#111827] to-[#1E1B4B] border border-slate-800 text-white p-8 sm:p-12 text-center space-y-5 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center mx-auto">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] tracking-tight">
              Have Questions or Feedback?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We welcome reader feedback, prompt suggestions, and partnership inquiries. Reach out to our editorial team directly at{' '}
              <a href="mailto:support@aipromptzyra.com" className="text-purple-400 font-semibold hover:underline">
                support@aipromptzyra.com
              </a>{' '}
              or use our contact channel.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm shadow-md shadow-purple-600/30 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Contact Form</span>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Author Archive Modal if author clicked */}
      {selectedAuthorForArchive && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <img
                  src={selectedAuthorForArchive.avatar}
                  alt={selectedAuthorForArchive.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
                />
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white font-['Outfit']">
                    {selectedAuthorForArchive.name}
                  </h3>
                  <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                    {selectedAuthorForArchive.role}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedAuthorForArchive(null)}
                className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 flex items-center justify-center text-slate-500 hover:text-slate-800 dark:text-slate-300 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedAuthorForArchive.bio}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Published Articles by {selectedAuthorForArchive.name} ({selectedAuthorForArchive.featuredArticles.length})
              </h4>
              <div className="space-y-2">
                {selectedAuthorForArchive.featuredArticles.map((art, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedAuthorForArchive(null);
                      if (art.slug && onSelectGuideBySlug) {
                        onSelectGuideBySlug(art.slug);
                      }
                    }}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700/80 hover:border-purple-400 dark:hover:border-purple-600 flex items-center justify-between gap-3 cursor-pointer group transition-all"
                  >
                    <div>
                      <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {art.title}
                      </h5>
                      <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-0.5">
                        <span className="text-purple-600 dark:text-purple-400 font-semibold">{art.category}</span>
                        <span>•</span>
                        <span>{art.date}</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                type="button"
                onClick={() => setSelectedAuthorForArchive(null)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 text-xs font-bold rounded-xl transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
