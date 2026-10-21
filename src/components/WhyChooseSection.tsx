import React from 'react';

interface WhyChooseSectionProps {
  onLearnMore?: () => void;
}

export const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({ onLearnMore }) => {
  return (
    <section id="why-choose-section" className="py-16 sm:py-20 bg-white dark:bg-[#0B0F19] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Editorial Purpose & Approach
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit'] mt-1.5">
            Why Choose AIPromptZyra
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-2.5 leading-relaxed">
            Finding prompt text that produces believable photo quality often involves endless trial and error. AIPromptZyra brings together curated prompt formulas, clear photographic settings, and practical guides so you can focus on creating rather than troubleshooting.
          </p>
        </div>

        {/* 3 Editorial Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Easy-to-Use Prompts */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white font-['Outfit']">
                Easy-to-Use Prompts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Every prompt is written in clear English with separate lens parameters, lighting descriptions, and negative prompts, ready to copy straight into your tool of choice.
              </p>
            </div>
          </div>

          {/* Card 2: Ideas for Different Styles */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white font-['Outfit']">
                Ideas for Different Styles
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Explore a varied catalog spanning couple portraits, festive traditional attire, urban street photography, and cinematic lighting setups for everyday creative inspiration.
              </p>
            </div>
          </div>

          {/* Card 3: Guidance You Can Customize */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-950/70 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white font-['Outfit']">
                Guidance You Can Customize
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Rather than treating prompts as rigid formulas, our companion notes explain how changing color palettes, camera lenses, or backdrops alters the final mood.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
