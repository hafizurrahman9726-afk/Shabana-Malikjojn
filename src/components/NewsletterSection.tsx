import React, { useState } from 'react';
import { Mail, Send, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribed(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.8 },
    });
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#0B0F19] via-[#111827] to-[#1E1B4B] border border-slate-800 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left: Heading & Icon */}
            <div className="lg:col-span-6 flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight font-['Outfit']">
                  Get New Prompts & Guides
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Subscribe to get the latest prompts, tutorials and creative ideas directly in your inbox.
                </p>
              </div>
            </div>

            {/* Right: Email Subscribe Form */}
            <div className="lg:col-span-6">
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="flex flex-col sm:flex-row items-center gap-2 bg-white/10 dark:bg-black/30 border border-white/15 rounded-2xl sm:rounded-full p-1.5 focus-within:border-purple-400 focus-within:ring-2 focus-within:ring-purple-500/20 transition-all">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl sm:rounded-full shadow-md shadow-purple-600/30 shrink-0 transition-all flex items-center justify-center gap-1.5"
                  >
                    {subscribed ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-[11px] text-slate-400 text-right pr-2">
                  We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
