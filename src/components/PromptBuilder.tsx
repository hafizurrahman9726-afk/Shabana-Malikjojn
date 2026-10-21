import React, { useState } from 'react';
import { Sliders, Sparkles, RotateCcw, Copy, Check, ExternalLink, Bookmark } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BuilderState } from '../types';

export const PromptBuilder: React.FC = () => {
  const initialBuilder: BuilderState = {
    subject: 'Girl',
    outfit: 'Saree',
    background: 'Nature',
    style: 'Cinematic',
    lighting: 'Soft Light',
    mood: 'Happy',
    cameraAngle: 'Portrait',
    colorTone: 'Natural',
  };

  const [builder, setBuilder] = useState<BuilderState>(initialBuilder);
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Dynamic visual preview image mapped to chosen style & subject
  const getPreviewImage = () => {
    if (builder.subject === 'Boy') {
      return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80';
    }
    if (builder.subject === 'Couple') {
      return 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=80';
    }
    if (builder.subject === 'Family') {
      return 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80';
    }
    if (builder.style === 'Fantasy Dreamscape') {
      return 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80';
    }
    if (builder.style === 'Cyberpunk Neon') {
      return 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80';
    }
    if (builder.style === 'Editorial Studio') {
      return 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80';
    }
    return 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80';
  };

  const generatedPrompt = `A beautiful young ${builder.subject.toLowerCase()} in a traditional ${builder.outfit.toLowerCase()}, standing in a ${builder.background.toLowerCase()} setting with ${builder.lighting.toLowerCase()}, ${builder.mood.toLowerCase()} expression, looking at the camera, detailed background with greenery, ${builder.cameraAngle.toLowerCase()} perspective, ${builder.colorTone.toLowerCase()} tones, rendered in high quality ${builder.style.toLowerCase()} style, realistic, ultra detailed.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setCopied(true);
      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.7 },
      });
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setBuilder(initialBuilder);
  };

  const handleFieldChange = (field: keyof BuilderState, val: string) => {
    setBuilder((prev) => ({ ...prev, [field]: val }));
  };

  const geminiUrl = `https://gemini.google.com/?q=${encodeURIComponent('Generate an image with this prompt: ' + generatedPrompt)}`;


  return (
    <section id="prompt-builder" className="py-12 sm:py-16 bg-white dark:bg-[#0B0F19] w-full overflow-hidden sm:overflow-visible">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full box-border">
        <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 p-4 sm:p-8 lg:p-10 shadow-xl shadow-purple-900/5 w-full box-border min-w-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start w-full min-w-0">
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full min-w-0">
              {/* Header with Purple Icon */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#9333EA] text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/30">
                  <Sliders className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-['Outfit']">
                    AI Prompt Builder
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm lg:text-base mt-1">
                    Create your own custom prompt with easy options. Select your preferences and generate a ready-to-use prompt.
                  </p>
                </div>
              </div>

              {/* Form 8 Fields Grid (Single column on small mobile, 2 cols when space allows >= 480px, 4 cols on desktop) */}
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full min-w-0">
                {/* 1. Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Subject
                  </label>
                  <select
                    value={builder.subject}
                    onChange={(e) => handleFieldChange('subject', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Girl">Girl</option>
                    <option value="Boy">Boy</option>
                    <option value="Couple">Couple</option>
                    <option value="Family">Family</option>
                    <option value="Elderly Artisan">Elderly Artisan</option>
                    <option value="Futuristic Traveler">Futuristic Traveler</option>
                  </select>
                </div>

                {/* 2. Outfit */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Outfit
                  </label>
                  <select
                    value={builder.outfit}
                    onChange={(e) => handleFieldChange('outfit', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Saree">Saree</option>
                    <option value="Casual Denim">Casual Denim</option>
                    <option value="Traditional Kurta">Traditional Kurta</option>
                    <option value="Formal Suit">Formal Suit</option>
                    <option value="Cyberpunk Armor">Cyberpunk Armor</option>
                    <option value="Summer Floral Dress">Summer Floral Dress</option>
                  </select>
                </div>

                {/* 3. Background */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Background
                  </label>
                  <select
                    value={builder.background}
                    onChange={(e) => handleFieldChange('background', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Nature">Nature</option>
                    <option value="Historic Courtyard">Historic Courtyard</option>
                    <option value="Neon City Skyline">Neon City Skyline</option>
                    <option value="Minimal Studio">Minimal Studio</option>
                    <option value="Festive Lantern Street">Festive Lantern Street</option>
                    <option value="Misty Mountain Ridge">Misty Mountain Ridge</option>
                  </select>
                </div>

                {/* 4. Style */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Style
                  </label>
                  <select
                    value={builder.style}
                    onChange={(e) => handleFieldChange('style', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Cinematic">Cinematic</option>
                    <option value="Editorial Studio">Editorial Studio</option>
                    <option value="Vintage 35mm">Vintage 35mm</option>
                    <option value="Fantasy Dreamscape">Fantasy Dreamscape</option>
                    <option value="Cyberpunk Neon">Cyberpunk Neon</option>
                    <option value="Oil Painting Artwork">Oil Painting Artwork</option>
                  </select>
                </div>

                {/* 5. Lighting */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Lighting
                  </label>
                  <select
                    value={builder.lighting}
                    onChange={(e) => handleFieldChange('lighting', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Soft Light">Soft Light</option>
                    <option value="Golden Hour">Golden Hour</option>
                    <option value="Dramatic Rim Light">Dramatic Rim Light</option>
                    <option value="Moody Moonlight">Moody Moonlight</option>
                    <option value="Festive Warm Diyas">Festive Warm Diyas</option>
                    <option value="Studio Softbox">Studio Softbox</option>
                  </select>
                </div>

                {/* 6. Mood */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Mood
                  </label>
                  <select
                    value={builder.mood}
                    onChange={(e) => handleFieldChange('mood', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Happy">Happy</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Mysterious">Mysterious</option>
                    <option value="Peaceful & Calm">Peaceful & Calm</option>
                    <option value="Confident & Bold">Confident & Bold</option>
                  </select>
                </div>

                {/* 7. Camera Angle */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Camera Angle
                  </label>
                  <select
                    value={builder.cameraAngle}
                    onChange={(e) => handleFieldChange('cameraAngle', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Portrait">Portrait</option>
                    <option value="Close-up Shot">Close-up Shot</option>
                    <option value="Medium Shot">Medium Shot</option>
                    <option value="Wide Angle Landscape">Wide Angle Landscape</option>
                    <option value="Low Angle Hero">Low Angle Hero</option>
                  </select>
                </div>

                {/* 8. Color Tone */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Color Tone
                  </label>
                  <select
                    value={builder.colorTone}
                    onChange={(e) => handleFieldChange('colorTone', e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                  >
                    <option value="Natural">Natural</option>
                    <option value="Warm Golden">Warm Golden</option>
                    <option value="Cool Blue Teal">Cool Blue Teal</option>
                    <option value="Vibrant Saturated">Vibrant Saturated</option>
                    <option value="Monochrome B&W">Monochrome B&W</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons (Full width stacked on mobile <= 540px, side-by-side on larger screens) */}
              <div className="flex flex-col min-[540px]:flex-row items-stretch min-[540px]:items-center gap-2.5 sm:gap-3 pt-2 w-full">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="flex-1 py-3 px-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-md shadow-purple-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] min-h-[46px] text-center"
                >
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Generate Prompt ✨</span>
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="py-2.5 sm:py-3 px-5 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-colors min-h-[46px] text-center"
                >
                  <RotateCcw className="w-4 h-4 shrink-0" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Preview & Output Box */}
            <div className="lg:col-span-5 space-y-4 w-full min-w-0">
              {/* Dynamic Preview Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm bg-slate-100 dark:bg-slate-900 group">
                <img
                  src={getPreviewImage()}
                  alt="AI prompt preview"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <button
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 dark:bg-slate-900/85 backdrop-blur-xs flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-purple-600 shadow transition-all"
                  aria-label="Save idea"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      isSaved ? 'fill-purple-600 text-purple-600' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Prompt Output Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/80 space-y-3 w-full min-w-0 box-border">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white font-['Outfit']">
                  Your Generated Prompt
                </h3>
                <div className="p-3 sm:p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-mono break-words overflow-hidden">
                  {generatedPrompt}
                </div>

                <div className="flex flex-col min-[540px]:flex-row items-stretch min-[540px]:items-center gap-2.5 sm:gap-3 pt-1 w-full">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all min-h-[44px] text-center ${
                      copied
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                        : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md shadow-purple-600/20'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 shrink-0" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 shrink-0" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>

                  <a
                    href={geminiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl border border-purple-300 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-purple-700 dark:text-purple-300 text-sm font-bold flex items-center justify-center gap-1.5 transition-colors min-h-[44px] text-center"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0" />
                    <span>Try in Gemini</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
