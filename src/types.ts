export interface PromptItem {
  id: string;
  title: string;
  desc: string;
  prompt: string;
  negativePrompt?: string;
  badge: 'Popular' | 'Trending' | 'Cinematic' | 'Festival' | 'AI Art' | 'New';
  badgeClass: string;
  category: string;
  tags: string[];
  img: string;
  aspectRatio: string;
  recommendedTool: string;
  cameraSettings?: string;
  author?: string;
  date?: string;
  readTime?: string;
}

export interface CategoryItem {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  img: string;
  count: number;
}

export interface GuideItem {
  id: string;
  slug: string;
  title: string;
  desc: string;
  date: string;
  img: string;
  readTime: string;
  content: string;
}

export interface BuilderState {
  subject: string;
  outfit: string;
  background: string;
  style: string;
  lighting: string;
  mood: string;
  cameraAngle: string;
  colorTone: string;
}

export interface AuthorProfile {
  id: string;
  name: string;
  slug: string;
  role: string;
  avatar: string;
  bio: string;
  categories: string[];
  articleCount: number;
  featuredArticles: {
    title: string;
    slug?: string;
    guideId?: string;
    category: string;
    date: string;
  }[];
}
