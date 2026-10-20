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
  MessageSquare
} from 'lucide-react';
import { AUTHORS_DATA } from '../data/promptsData';
import { AuthorProfile, GuideItem } from '../types';

interface AboutUsPageProps {
  onBackToHome: () => void;
  onOpenContact?: () => void;
  onSelectCategory?: (slug: string) => void;
  onSelectGuideBySlug?: (slug: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBackToHome,
  onOpenContact,
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

        {/* 4. MEET OUR WRITERS (3 Verified Author Profiles) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300">
              <span>Editorial Team</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Meet Our Writers
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
              Each writer brings hands-on prompt research and focused domain expertise across our core categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {AUTHORS_DATA.map((author) => (
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

                  {/* Featured Articles Published by this Author */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-700/80">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                      Recent Published Articles
                    </span>
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

        {/* 5. OUR EDITORIAL APPROACH */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Integrity &amp; Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              Our Editorial Approach
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Every formula and tutorial published on AIPromptZyra adheres to four consistent benchmarks:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white font-['Outfit']">
                1. Structural Verification
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We organize prompts logically: Subject &rarr; Environment &rarr; Lighting &rarr; Camera &rarr; Style. This syntax ensures multimodal models prioritize subjects correctly without hallucinating unwanted artifacts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white font-['Outfit']">
                2. No Repetitive Keyword Stuffing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Modern diffusion and autoregressive image models ignore redundant terms like “hyperrealistic, 4k, photorealistic, trending on artstation” when repeated. We use optical descriptions that trigger true photographic behavior.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white font-['Outfit']">
                3. Regular Model Updates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When new model weights (such as Imagen 3 updates or Midjourney releases) change prompt adherence, our writers revisit older guides, adjust phrasing, and flag tool-specific nuances.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-700 space-y-2">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white font-['Outfit']">
                4. Reader Corrections &amp; Open Feedback
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                If a prompt formula fails to yield expected results across specific tool interfaces, readers can submit corrections via our contact channel. We review and update guides promptly.
              </p>
            </div>
          </div>
        </section>

        {/* 6. HOW TO USE OUR PROMPTS */}
        <section className="bg-gradient-to-br from-purple-50/60 via-white to-slate-50 dark:from-slate-900 dark:via-[#0E1526] dark:to-slate-900 rounded-3xl p-8 sm:p-10 border border-purple-200/80 dark:border-purple-900/50 space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              How to Use Our Prompts
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Applying our prompt formulas into your AI workflow is straightforward:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Copy the Formula</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Use the one-click copy button on any prompt card or tutorial to copy the tested descriptive string.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Swap Key Variables</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Customize subjects, outfit colors, background locations, and lighting moods to match your project's needs.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">Paste into Your Tool</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Paste directly into Google Gemini, ChatGPT DALL-E 3, Midjourney, or Bing Image Creator and render.
              </p>
            </div>
          </div>
        </section>

        {/* 7. OUR COMMITMENT TO READERS */}
        <section className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-4 h-4" />
            <span>Ethical Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
            Our Commitment to Readers
          </h2>
          <div className="space-y-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              We believe generative technology is an assistive tool that empowers human creativity. We uphold:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Original Content:</strong> All guides, tips, and articles are written by our verified human editorial team.</li>
              <li><strong>Clear Labeling:</strong> AI-generated visual examples are clearly identified as sample outputs.</li>
              <li><strong>Responsible Creativity:</strong> We do not publish prompts designed for non-consensual deepfakes, copyright infringement, or deceptive impersonation.</li>
              <li><strong>Respect for Privacy:</strong> We do not track reader personal information or sell reader data to third parties.</li>
            </ul>
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
