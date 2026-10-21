import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Pin as Pinterest } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string, navName: string) => void;
  onOpenPage: (pageSlug: string) => void;
  onSelectCategory: (categorySlug: string) => void;
  onOpenThemeHub: () => void;
  onSelectView?: (view: 'home' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenPage,
  onSelectCategory,
  onOpenThemeHub,
  onSelectView,
}) => {
  return (
    <footer className="bg-[#0B0F19] text-slate-400 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative botanical watermark SVG in bottom right corner matching screenshot */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-10">
        <svg width="240" height="240" viewBox="0 0 200 200" fill="none">
          <path
            d="M100 10C100 10 120 50 160 70C200 90 190 140 160 170C130 200 70 190 50 160C30 130 40 70 80 40C90 32 100 10 100 10Z"
            stroke="#A78BFA"
            strokeWidth="3"
          />
          <path d="M100 10L100 190" stroke="#A78BFA" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M100 60C130 50 150 70 150 70" stroke="#A78BFA" strokeWidth="2" />
          <path d="M100 100C140 90 160 110 160 110" stroke="#A78BFA" strokeWidth="2" />
          <path d="M100 140C130 130 150 150 150 150" stroke="#A78BFA" strokeWidth="2" />
          <path d="M100 60C70 50 50 70 50 70" stroke="#A78BFA" strokeWidth="2" />
          <path d="M100 100C60 90 40 110 40 110" stroke="#A78BFA" strokeWidth="2" />
          <path d="M100 140C70 130 50 150 50 150" stroke="#A78BFA" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Brand & Socials (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#9333EA] p-0.5 shadow flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="10" fill="#7C3AED" />
                  <path d="M12 28L20 12L28 28L20 23L12 28Z" fill="white" />
                  <path d="M20 12L24 20L20 23L16 20L20 12Z" fill="#DDD6FE" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                AIPromptzyra
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Discover, create and explore the best AI prompts for your creative journey.
            </p>

            {/* Official Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/aipromptzyra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://t.me/aipromptzyra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-[#229ED9] hover:border-[#229ED9] flex items-center justify-center transition-all shadow-xs"
                aria-label="Telegram"
                title="Telegram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-all shadow-xs"
                aria-label="WhatsApp Channel"
                title="WhatsApp Channel"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide font-['Outfit']">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavClick('hero', 'Home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('prompt-builder', 'Prompt Builder')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Prompt Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (onSelectView) {
                      onSelectView('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      onOpenPage('about');
                    }
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Important Pages (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide font-['Outfit']">
              Important Pages
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onOpenPage('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('privacy-policy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('terms-and-conditions')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('disclaimer')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Disclaimer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Categories (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide font-['Outfit']">
              Categories
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onSelectCategory('trending-prompts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Trending Prompts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('couple-prompts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Couple Prompts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('ai-photo-prompts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AI Photo Prompts
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Stay Connected & Theme Hub (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide font-['Outfit']">
              Stay Connected
            </h4>
            <p className="text-xs text-slate-400">
              Follow us for updates and new content.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://www.instagram.com/aipromptzyra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent flex items-center justify-center transition-all shadow-xs"
                aria-label="Instagram"
                title="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
              <a
                href="https://t.me/aipromptzyra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:bg-[#229ED9] hover:border-[#229ED9] flex items-center justify-center transition-all shadow-xs"
                aria-label="Telegram"
                title="Telegram"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] flex items-center justify-center transition-all shadow-xs"
                aria-label="WhatsApp Channel"
                title="WhatsApp Channel"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} AIPromptzyra. All rights reserved.</p>
          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => onOpenPage('sitemap')}
              className="hover:text-slate-300 transition-colors"
            >
              Sitemap
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenPage('contact')}
              className="hover:text-slate-300 transition-colors"
            >
              Contact
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenPage('privacy-policy')}
              className="hover:text-slate-300 transition-colors"
            >
              Privacy
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenPage('terms-and-conditions')}
              className="hover:text-slate-300 transition-colors"
            >
              Terms
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenPage('disclaimer')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
