import React from 'react';
import { BookOpen, Copy, Sparkles, ArrowRight } from 'lucide-react';

export const HowToUseSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50/60 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
            How to Use AI Prompts
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base mt-2">
            Get amazing results in just 3 simple steps.
          </p>
        </div>

        {/* Content Container */}
        <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200 dark:border-slate-700/80 p-6 sm:p-10 shadow-lg shadow-purple-900/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: 3 Steps */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Step 1 */}
              <div className="flex flex-col space-y-3 relative">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                    Step 1
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 font-['Outfit']">
                    Choose a Prompt
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Browse or search for your favorite prompt from our collection.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col space-y-3 relative">
                <div className="w-12 h-12 rounded-xl bg-teal-100 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                  <Copy className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
                    Step 2
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 font-['Outfit']">
                    Copy the Text
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Click on the copy button to copy the prompt to your clipboard.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col space-y-3 relative">
                <div className="w-12 h-12 rounded-xl bg-fuchsia-100 dark:bg-fuchsia-950/60 text-fuchsia-600 dark:text-fuchsia-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-fuchsia-600 dark:text-fuchsia-400 uppercase tracking-widest">
                    Step 3
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 font-['Outfit']">
                    Paste & Generate
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                    Paste it in Gemini, ChatGPT or any AI tool and create amazing results.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Visual Illustration */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-4 bg-gradient-to-b from-purple-50/50 to-indigo-50/50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-2xl border border-purple-100 dark:border-purple-900/40">
              <div className="relative w-44 h-44 rounded-2xl overflow-hidden shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80"
                  alt="Cute AI robot illustration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 space-y-1">
                <p className="text-sm font-extrabold text-purple-700 dark:text-purple-300 font-['Outfit']">
                  It's that simple!
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                  Start creating your own amazing AI images today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
