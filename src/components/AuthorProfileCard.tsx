import React from 'react';
import { CheckCircle2, ArrowRight, BookOpen, Instagram } from 'lucide-react';

interface AuthorProfileCardProps {
  onViewAllGuides?: () => void;
}

export const AuthorProfileCard: React.FC<AuthorProfileCardProps> = ({ onViewAllGuides }) => {
  const handleViewGuides = (e: React.MouseEvent) => {
    if (onViewAllGuides) {
      e.preventDefault();
      onViewAllGuides();
    }
  };

  return (
    <section id="author-card-section" className="py-12 sm:py-16 bg-white dark:bg-[#0B0F19] transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered White Card with rounded corners, subtle border, and shadow */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 md:p-12 border border-slate-200/90 dark:border-slate-700/80 shadow-md sm:shadow-xl text-center flex flex-col items-center relative overflow-hidden transition-all">

          {/* Circular Owner Photo with Orange/Amber Accent Border */}
          <div className="relative mb-5">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-amber-500 p-0.5 bg-white dark:bg-slate-800 shadow-md overflow-hidden flex items-center justify-center">
              <img
                src="https://aipromptzyra.com/wp-content/uploads/2026/10/Zyra-Ansari.jpg"
                alt="Zyra Ansari"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
            {/* Verified Badge Checkmark */}
            <div
              className="absolute bottom-0 right-1 w-7 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-md border-2 border-white dark:border-slate-800"
              title="Verified AIPromptZyra Owner"
            >
              <CheckCircle2 className="w-4 h-4 fill-white text-amber-500" />
            </div>
          </div>

          {/* Owner Badge */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60 mb-2">
            <span>Owner</span>
          </div>

          {/* Owner Name */}
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit'] tracking-tight">
            Zyra Ansari
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-purple-600 dark:text-purple-400 mt-0.5 mb-3">
            Owner, AIPromptZyra
          </p>

          {/* Short Biography */}
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed mb-5">
            Zyra Ansari is the Owner of AIPromptZyra. She oversees the platform&apos;s vision and creative prompt collections for Google Gemini, ChatGPT, and Midjourney, helping creators turn imaginative concepts into realistic, high-definition AI imagery.
          </p>

          {/* Official Social Links (Instagram, Telegram, WhatsApp Channel) */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <a
              href="https://www.instagram.com/aipromptzyra"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700/80 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-slate-600 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              aria-label="Follow Zyra Ansari on Instagram"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/aipromptzyra"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700/80 hover:bg-[#229ED9] text-slate-600 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              aria-label="Join official Telegram channel"
              title="Telegram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-700/80 hover:bg-[#25D366] text-slate-600 dark:text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-xs hover:scale-105"
              aria-label="Follow official WhatsApp Channel"
              title="WhatsApp Channel"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z" />
              </svg>
            </a>
          </div>

          {/* View All Guides Button */}
          <a
            href="#guides-section"
            onClick={handleViewGuides}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-purple-600 dark:bg-white dark:hover:bg-purple-500 text-white dark:text-slate-900 dark:hover:text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>View All Guides</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

