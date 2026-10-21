import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const communityCards = [
    {
      name: 'Instagram',
      action: 'Follow us',
      description: 'Explore visual comparisons, side-by-side prompt results, and trending AI photography reels on our official page.',
      url: 'https://www.instagram.com/aipromptzyra',
      badge: 'Visual Gallery',
      colorClass: 'text-[#E4405F]',
      bgClass: 'bg-[#E4405F]/10 dark:bg-[#E4405F]/20',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      action: 'Follow our channel',
      description: 'Get instant notifications, viral prompt drops, copy-ready text, and direct channel discussions.',
      url: 'https://t.me/aipromptzyra',
      badge: 'Instant Alerts',
      colorClass: 'text-[#229ED9]',
      bgClass: 'bg-[#229ED9]/10 dark:bg-[#229ED9]/20',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp Channel',
      action: 'Subscribe channel',
      description: 'Subscribe to our official WhatsApp Channel for prompt tips, curated updates, and creative workflows.',
      url: 'https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u',
      badge: 'Official Channel',
      colorClass: 'text-[#25D366]',
      bgClass: 'bg-[#25D366]/10 dark:bg-[#25D366]/20',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="community-section" className="py-14 sm:py-18 bg-white dark:bg-[#0B0F19] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-bold mb-3 border border-purple-200 dark:border-purple-800/60">
            <span>AIPromptZyra Network</span>
          </div>
          <h2 className="text-2xl sm:text-3.5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
            Join Our Community
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-2">
            Stay connected and get the latest viral AI photo editing prompts.
          </p>
        </div>

        {/* 3 Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityCards.map((card) => (
            <a
              key={card.name}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl bg-slate-50/80 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-500/60 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.bgClass} ${card.colorClass} transition-transform group-hover:scale-110`}>
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-200/70 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300">
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-['Outfit'] flex items-center gap-1.5">
                    <span>{card.name}</span>
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500">— {card.action}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/80 flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300">
                <span>{card.action}</span>
                <div className="w-7 h-7 rounded-full bg-purple-100 dark:bg-purple-950/60 group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
