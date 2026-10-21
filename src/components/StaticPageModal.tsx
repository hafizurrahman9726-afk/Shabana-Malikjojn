import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, FileText, Info, Mail } from 'lucide-react';

interface StaticPageModalProps {
  pageSlug: string | null;
  onClose: () => void;
  onSelectPage?: (slug: string) => void;
}

export const StaticPageModal: React.FC<StaticPageModalProps> = ({ pageSlug, onClose, onSelectPage }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!pageSlug) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2500);
  };

  const getPageContent = () => {
    switch (pageSlug) {
      case 'about':
        return {
          title: 'About AIPromptzyra',
          icon: <Info className="w-6 h-6 text-purple-600" />,
          subtitle: 'Empowering creators with clear, verified, copy-ready AI prompts and tutorials.',
          content: (
            <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">About AIPromptZyra</h4>
                <p>
                  <strong>AIPromptzyra</strong> is an independent AI prompt research resource. We test, refine, and publish copy-ready formulas for models like Google Gemini, ChatGPT, and Midjourney, enabling artists, creators, and enthusiasts to achieve photorealistic and artistic results with structured syntax.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Story</h4>
                <p>
                  Generative AI models require precise optical keywords, lighting parameters, and sensory details rather than conversational shorthand. AIPromptZyra was founded to eliminate the trial-and-error cycle by publishing transparent, reproducible prompt formulas that anyone can adapt.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">What You Can Find Here</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/70 dark:border-amber-800/50">
                    <strong className="text-amber-800 dark:text-amber-300 block mb-1">🔥 Trending Prompts</strong>
                    Viral aesthetics, neon urban photography, and video generation tips.
                  </div>
                  <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/70 dark:border-rose-800/50">
                    <strong className="text-rose-800 dark:text-rose-300 block mb-1">💑 Couple Prompts</strong>
                    Couple maternity shoots, traditional weddings, and candid sunset portraits.
                  </div>
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/70 dark:border-indigo-800/50">
                    <strong className="text-indigo-800 dark:text-indigo-300 block mb-1">📸 AI Photo Prompts</strong>
                    Photorealistic studio lighting, camera optics, and natural skin textures.
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Meet Our Verified Writers</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <img
                      src="https://aipromptzyra.com/wp-content/uploads/2026/10/Zyra-Ansari.jpg"
                      alt="Zyra Ansari"
                      className="w-10 h-10 rounded-full object-cover border border-amber-500 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xs">Zyra Ansari <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 px-1.5 py-0.5 rounded font-normal ml-1">Owner</span></div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Owner of AIPromptZyra. Guides the platform vision, creative prompt standards, and community resources.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <img
                      src="https://aipromptzyra.com/wp-content/uploads/2026/10/Rhea-Sharma.jpg"
                      alt="Rhea Sharma"
                      className="w-10 h-10 rounded-full object-cover border border-rose-500 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xs">Rhea Sharma <span className="text-[10px] bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300 px-1.5 py-0.5 rounded font-normal ml-1">Editorial Writer</span></div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Specializes in couple photography, maternity sessions, and culturally authentic styling.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <img
                      src="https://aipromptzyra.com/wp-content/uploads/2026/10/Aditya-Sen.jpg"
                      alt="Aditya Sen"
                      className="w-10 h-10 rounded-full object-cover border border-amber-500 shrink-0"
                    />
                    <div>
                      <div className="font-bold text-slate-900 dark:text-white text-xs">Aditya Sen <span className="text-[10px] bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 px-1.5 py-0.5 rounded font-normal ml-1">Creative Technologist</span></div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Tracks emerging visual aesthetics, cyberpunk cinematography, and generative video tools.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">Our Editorial Approach</h4>
                <ul className="list-disc pl-5 space-y-1 text-xs">
                  <li><strong>Structured Prompts:</strong> Subject &rarr; Environment &rarr; Lighting &rarr; Camera &rarr; Style.</li>
                  <li><strong>Zero Slop:</strong> We avoid repetitive, non-working keyword stuffing.</li>
                  <li><strong>Reader Feedback:</strong> We review and update guides based on tool updates.</li>
                </ul>
              </div>
            </div>
          ),
        };

      case 'contact':
        return {
          title: 'Contact AIPromptzyra',
          icon: <Mail className="w-6 h-6 text-purple-600" />,
          subtitle: 'Have a question, suggestion, or prompt collaboration idea? Send us a message.',
          content: contactSubmitted ? (
            <div className="p-8 text-center space-y-3 bg-purple-50 dark:bg-purple-950/40 rounded-2xl border border-purple-200 dark:border-purple-800">
              <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
              <h4 className="font-bold text-lg text-slate-900 dark:text-white">Message Received!</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Thank you for reaching out. The AIPromptzyra editorial team will review your message within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jane Doe"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. jane@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Your Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="What prompt category or question would you like to discuss?"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-sm rounded-xl shadow-md shadow-purple-600/20 flex items-center justify-center gap-2 transition-all"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          ),
        };

      case 'privacy-policy':
        return {
          title: 'Privacy Policy',
          icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
          subtitle: 'Last updated: January 2025. How AIPromptzyra handles your information.',
          content: (
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                At AIPromptzyra (accessible from https://aipromptzyra.com), we respect the privacy of our visitors. This Privacy Policy document outlines the types of information collected and how it is used.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">Information We Collect</h4>
              <p>
                When you interact with our website, we may collect non-personally identifiable browser information (device type, operating system, pages viewed) and, if voluntarily submitted, email addresses for newsletter delivery.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">Cookies & Local Storage</h4>
              <p>
                AIPromptzyra utilizes localStorage solely to maintain user preferences (such as Dark/Light theme mode and saved bookmarks). We do not sell or monetize personal information.
              </p>
            </div>
          ),
        };

      case 'terms-and-conditions':
        return {
          title: 'Terms & Conditions',
          icon: <FileText className="w-6 h-6 text-purple-600" />,
          subtitle: 'Terms governing the use of prompts and tutorials published on AIPromptzyra.',
          content: (
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                By accessing this website, you agree to be bound by these Terms and Conditions and agree that you are responsible for agreement with any applicable local laws.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">Prompt Licensing & Commercial Use</h4>
              <p>
                All AI prompts published on AIPromptzyra are free to copy, modify, and use for both personal and commercial image generation projects. No attribution is strictly required when using prompts to generate images.
              </p>
              <h4 className="font-bold text-slate-900 dark:text-white pt-2">Limitations</h4>
              <p>
                The materials appearing on AIPromptzyra's website could include technical or typographical errors. AIPromptzyra does not warrant that any of the materials on its website are completely error-free.
              </p>
            </div>
          ),
        };

      case 'disclaimer':
        return {
          title: 'Disclaimer',
          icon: <FileText className="w-6 h-6 text-purple-600" />,
          subtitle: 'Independent platform disclaimer and trademark notices.',
          content: (
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                AIPromptzyra is an independent educational and prompt discovery website.
              </p>
              <p>
                <strong>Third-Party Trademarks:</strong> "Gemini", "Google", "ChatGPT", "OpenAI", and "Midjourney" are registered trademarks of their respective owners. AIPromptzyra is not affiliated with, endorsed by, or sponsored by any of these companies.
              </p>
              <p>
                <strong>AI Outputs:</strong> AI generative models are probabilistic. While we rigorously test our prompt recipes, actual output images can vary depending on engine versions, random seeds, and updates made by AI providers.
              </p>
            </div>
          ),
        };

      case 'editorial-policy':
        return {
          title: 'Page Not Found',
          icon: <Info className="w-6 h-6 text-rose-500" />,
          subtitle: 'HTTP 404 - This page is no longer active.',
          content: (
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-center py-6">
              <p>The Editorial Policy page has been retired and removed from AIPromptZyra.</p>
              <div className="flex justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onClose()}
                  className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-bold"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ),
        };

      case 'sitemap':
        return {
          title: 'HTML & XML Sitemap',
          icon: <FileText className="w-6 h-6 text-purple-600" />,
          subtitle: 'Full crawlable directory of pages, prompt categories, and guides.',
          content: (
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                Explore all indexed sections of AIPromptzyra. XML Sitemap is automatically generated and accessible at <code>/sitemap.xml</code>.
              </p>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs">
                <div>/ (Homepage)</div>
                <div>/prompts/ (All Prompts)</div>
                <div>/prompt-builder/ (Generator)</div>
                <div>/categories/ (Categories)</div>
                <div>/guides/ (Guides Archive)</div>
                <div>/about/ (About Us)</div>
              </div>
            </div>
          ),
        };

      default:
        return {
          title: 'Information',
          icon: <Info className="w-6 h-6 text-purple-600" />,
          subtitle: '',
          content: <p>Information page.</p>,
        };
    }
  };

  const page = getPageContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 dark:bg-purple-950/60 flex items-center justify-center shrink-0">
            {page.icon}
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
              {page.title}
            </h2>
            {page.subtitle && (
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {page.subtitle}
              </p>
            )}
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          {page.content}
        </div>

        {['contact', 'privacy-policy', 'terms-and-conditions', 'disclaimer'].includes(pageSlug) && (
          <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-slate-800 dark:text-slate-200">Related Pages</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { slug: 'contact', title: 'Contact Us' },
                  { slug: 'privacy-policy', title: 'Privacy Policy' },
                  { slug: 'terms-and-conditions', title: 'Terms & Conditions' },
                  { slug: 'disclaimer', title: 'Disclaimer' },
                ]
                  .filter((item) => item.slug !== pageSlug)
                  .map((item) => (
                    <button
                      key={item.slug}
                      type="button"
                      onClick={() => onSelectPage && onSelectPage(item.slug)}
                      className="px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/60 font-semibold transition-colors cursor-pointer"
                    >
                      {item.title}
                    </button>
                  ))}
              </div>
            </div>
            <div className="text-[11px] text-slate-400 dark:text-slate-500 whitespace-nowrap">
              AIPromptZyra • Published by Zyra Ansari
            </div>
          </div>
        )}

        <div className="flex justify-end pt-2 border-t border-slate-100 dark:border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs sm:text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
