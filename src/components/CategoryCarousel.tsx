import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface CarouselPromptCategory {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  targetQuery?: string;
  targetSlug?: string;
  img: string;
}

interface CategoryCarouselProps {
  onSelectTag?: (tag: string) => void;
  onSelectCategory?: (categorySlug: string) => void;
  onSelectGuideBySlug?: (slug: string) => void;
}

export const CATEGORY_CAROUSEL_ITEMS: CarouselPromptCategory[] = [
  {
    id: 'carousel-family',
    title: 'Family Portraits',
    subtitle: 'Traditional Courtyard',
    category: 'AI Photo Prompts',
    targetQuery: 'Family',
    img: 'https://images.unsplash.com/photo-1609234656388-0ff363383899?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-diwali-saree',
    title: 'Festive Saree Diya',
    subtitle: 'Diwali & Golden Lights',
    category: 'Trending Prompts',
    targetQuery: 'Festival',
    img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-indian-wedding',
    title: 'Indian Royal Wedding',
    subtitle: 'Heritage Mandap Ceremony',
    category: 'Couple Prompts',
    targetQuery: 'Couple Photo',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-tuxedo-gala',
    title: 'Gala & Tuxedo',
    subtitle: 'Black-Tie Luxury Portrait',
    category: 'Trending Prompts',
    targetQuery: 'Cinematic',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-beach-couple',
    title: 'Sunset Beach Couple',
    subtitle: 'Romantic Hand-in-Hand',
    category: 'Couple Prompts',
    targetQuery: 'Couple Photo',
    img: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-durga-puja',
    title: 'Durga Puja Festival',
    subtitle: 'Traditional Dhunachi Aarti',
    category: 'Trending Prompts',
    targetQuery: 'Festival',
    img: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-kasavu-saree',
    title: 'Traditional Kasavu Saree',
    subtitle: 'Pookalam Celebration',
    category: 'AI Photo Prompts',
    targetQuery: 'Saree',
    img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-celebration',
    title: 'Celebration & Party',
    subtitle: 'Gold Balloon Rooftop',
    category: 'Trending Prompts',
    targetQuery: 'Girl Portrait',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-diwali-diyas',
    title: 'Diwali Warm Diyas',
    subtitle: 'Candlelight Bokeh Aura',
    category: 'Trending Prompts',
    targetQuery: 'Festival',
    img: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'carousel-neon-street',
    title: 'Cinematic Neon Street',
    subtitle: 'Rain Reflections & Bokeh',
    category: 'Trending Prompts',
    targetQuery: 'Cinematic',
    img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
  },
];

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  onSelectTag,
  onSelectCategory,
  onSelectGuideBySlug,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const getScrollDistance = () => {
    if (!trackRef.current) return 220;
    const firstChild = trackRef.current.firstElementChild as HTMLElement;
    return firstChild ? firstChild.offsetWidth + 16 : 220;
  };

  const handleScrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -getScrollDistance() * 2, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: getScrollDistance() * 2, behavior: 'smooth' });
    }
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused || !trackRef.current) return;
      const el = trackRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 20) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleItemClick = (item: CarouselPromptCategory) => {
    if (item.targetSlug && onSelectGuideBySlug) {
      onSelectGuideBySlug(item.targetSlug);
      return;
    }
    if (item.targetQuery && onSelectTag) {
      onSelectTag(item.targetQuery);
      return;
    }
    if (item.category && onSelectCategory) {
      const slug = item.category === 'Couple Prompts' ? 'couple-prompts' :
                   item.category === 'AI Photo Prompts' ? 'ai-photo-prompts' : 'trending-prompts';
      onSelectCategory(slug);
    }
  };

  return (
    <section
      id="prompt-carousel-section"
      className="relative w-full py-3 sm:py-5 bg-white dark:bg-[#0B0F19] overflow-hidden transition-colors"
      aria-label="Featured AI Prompt Categories Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 relative group">
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none z-20">
          <button
            type="button"
            onClick={handleScrollLeft}
            aria-label="Previous prompt category"
            className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 dark:bg-slate-900/90 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/60 shadow-lg hover:shadow-purple-500/20 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all flex items-center justify-center backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            type="button"
            onClick={handleScrollRight}
            aria-label="Next prompt category"
            className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/95 dark:bg-slate-900/90 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-800/60 shadow-lg hover:shadow-purple-500/20 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white transition-all flex items-center justify-center backdrop-blur-md cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Carousel Horizontal Scroll Track */}
        <div
          ref={trackRef}
          className="flex gap-3.5 sm:gap-4 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory py-2 px-1 focus:outline-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          role="region"
          aria-label="Prompt categories horizontal track"
          tabIndex={0}
        >
          {CATEGORY_CAROUSEL_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleItemClick(item);
                }
              }}
              className="flex-[0_0_155px] sm:flex-[0_0_195px] h-[235px] sm:h-[285px] snap-start rounded-2xl sm:rounded-3xl overflow-hidden relative cursor-pointer group/card shadow-sm hover:shadow-xl hover:shadow-purple-500/20 border border-slate-200/50 dark:border-slate-800/60 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.02] bg-slate-100 dark:bg-slate-800"
            >
              {/* Card Image */}
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                width={200}
                height={285}
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition-transform duration-500 group-hover/card:scale-108"
              />

              {/* Bottom Gradient Overlay & Title */}
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-3.5 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent flex flex-col justify-end pointer-events-none rounded-b-2xl sm:rounded-b-3xl">
                <span className="self-start text-[10px] font-bold uppercase tracking-wider text-purple-200 bg-purple-700/70 backdrop-blur-xs px-2 py-0.5 rounded-full mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xs sm:text-sm font-bold font-['Outfit'] leading-tight drop-shadow-sm group-hover/card:text-purple-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-[11px] font-normal leading-tight hidden sm:block truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              {/* Subtle Sparkle Accent on Hover */}
              <div className="absolute top-2.5 right-2.5 opacity-0 group-hover/card:opacity-100 transition-opacity bg-purple-600/90 text-white p-1 rounded-full shadow-md">
                <Sparkles className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
