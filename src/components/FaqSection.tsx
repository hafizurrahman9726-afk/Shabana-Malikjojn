import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const FAQS_DATA: FAQ[] = [
  {
    question: 'What is AIPromptZyra?',
    answer:
      'AIPromptZyra is a free creative resource offering curated, copy-ready AI prompts, step-by-step guides, and photography prompt formulas. Our mission is to make visual AI generation accessible and straightforward for creators, photographers, and hobbyists of all skill levels.',
  },
  {
    question: 'How do I use AI prompts from this website?',
    answer:
      'Using our prompts is simple: browse any category or search for an aesthetic you like, click the "Copy Prompt" button on any card to copy the formula to your clipboard, and paste it directly into your preferred AI image generator (like Google Gemini, ChatGPT, or Midjourney).',
  },
  {
    question: 'Which AI tools do your prompts support?',
    answer:
      'Our prompts are crafted to work seamlessly across major AI platforms, including Google Gemini (Imagen 3), OpenAI ChatGPT (DALL-E 3), Midjourney v6, Bing Image Creator / Microsoft Designer, and Stable Diffusion. Specific recommended tools and camera settings are listed on each prompt.',
  },
  {
    question: 'How do I copy and customize prompts for my needs?',
    answer:
      'After copying a prompt, you can easily adapt descriptive elements like hair style, clothing color, time of day, environment, and mood. You can also use our interactive AI Prompt Builder on the homepage to generate custom combinations with tailored subjects, outfits, and camera angles.',
  },
  {
    question: 'Are the prompts on AIPromptZyra free to use?',
    answer:
      'Yes, all prompts and tutorials published on AIPromptZyra are 100% free to copy and use for personal, social media, and commercial creative workflows without any subscription fees or attribution requirements.',
  },
  {
    question: 'How can I get better, more realistic AI-generated results?',
    answer:
      'For true-to-life results, specify real photographic details: mention prime lenses (e.g., 50mm or 85mm f/1.4), describe soft natural lighting or golden hour rim light, and explicitly state natural skin texture with fine pores while avoiding generic buzzwords like "hyperrealistic".',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // FAQ Schema Structured Data (JSON-LD)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq-section" className="py-16 sm:py-20 bg-slate-50/60 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold mb-3 border border-purple-200 dark:border-purple-800/60">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
            Frequently Asked Questions About AIPromptZyra
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Everything you need to know about discovering, customizing, and generating realistic AI photos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-50/50 dark:hover:bg-slate-750 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white font-['Outfit'] pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-purple-100 text-purple-600 dark:bg-purple-950/60 dark:text-purple-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-700/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
