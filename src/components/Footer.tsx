import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Pin as Pinterest, Globe } from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string, navName: string) => void;
  onOpenPage: (pageSlug: string) => void;
  onSelectCategory: (categorySlug: string) => void;
  onOpenThemeHub: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenPage,
  onSelectCategory,
  onOpenThemeHub,
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

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61594710183320"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://t.me/+19kPqGdfFAI4Y2Vl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all"
                aria-label="Telegram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.43 7.82l-2.07 9.77c-.15.68-.56.84-1.12.52l-3.15-2.32-1.52 1.46c-.17.17-.31.31-.63.31l.23-3.21 5.84-5.28c.25-.23-.06-.35-.38-.14l-7.22 4.54-3.11-.97c-.68-.21-.69-.68.14-1.01l12.16-4.69c.56-.21 1.06.13.86 1.02z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/aipromptzyra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300 hover:text-white hover:bg-purple-600 hover:border-purple-600 flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
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
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('categories-section', 'Explore Prompts')}
                  className="hover:text-white transition-colors"
                >
                  Explore Prompts
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('prompt-builder', 'Prompt Builder')}
                  className="hover:text-white transition-colors"
                >
                  Prompt Builder
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('categories-section', 'Categories')}
                  className="hover:text-white transition-colors"
                >
                  Categories
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavClick('guides-section', 'Guides')}
                  className="hover:text-white transition-colors"
                >
                  Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('about')}
                  className="hover:text-white transition-colors"
                >
                  About
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
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('privacy-policy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('terms-and-conditions')}
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('disclaimer')}
                  className="hover:text-white transition-colors"
                >
                  Disclaimer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenPage('editorial-policy')}
                  className="hover:text-white transition-colors"
                >
                  Editorial Policy
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
                href="https://www.facebook.com/profile.php?id=61594710183320"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:bg-purple-600 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3 h-3" />
              </a>
              <a
                href="https://t.me/+19kPqGdfFAI4Y2Vl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:bg-purple-600 flex items-center justify-center transition-all"
                aria-label="Telegram"
              >
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.43 7.82l-2.07 9.77c-.15.68-.56.84-1.12.52l-3.15-2.32-1.52 1.46c-.17.17-.31.31-.63.31l.23-3.21 5.84-5.28c.25-.23-.06-.35-.38-.14l-7.22 4.54-3.11-.97c-.68-.21-.69-.68.14-1.01l12.16-4.69c.56-.21 1.06.13.86 1.02z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/aipromptzyra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 rounded-full bg-slate-900 border border-slate-700/80 text-slate-400 hover:text-white hover:bg-purple-600 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenThemeHub}
                className="w-full text-left px-3 py-2 rounded-xl bg-purple-950/40 border border-purple-800/80 text-purple-300 hover:text-white hover:bg-purple-900/60 text-xs font-semibold flex items-center justify-between transition-colors"
              >
                <span>Theme Source & ZIP</span>
                <Globe className="w-3.5 h-3.5 text-purple-400" />
              </button>
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
              className="hover:text-slate-300 transition-colors"
            >
              Disclaimer
            </button>
            <span className="text-slate-700">|</span>
            <button
              onClick={() => onOpenPage('editorial-policy')}
              className="hover:text-slate-300 transition-colors"
            >
              Editorial Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
