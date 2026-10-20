export interface MaternityPromptItem {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  prompt: string;
  image: string;
  alt: string;
  aspectRatio: string;
  style: string;
  aiTools: ('Gemini' | 'ChatGPT' | 'Bing' | 'Grok')[];
  lighting: string;
  outfitHighlights: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MaternityArticleData {
  targetUrl: string;
  postId: string;
  title: string;
  h1: string;
  slug: string;
  category: {
    name: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
    role: string;
    avatar: string;
  };
  publishedDate: string;
  modifiedDate: string;
  readingTime: string;
  featuredImage: {
    url: string;
    alt: string;
    caption: string;
  };
  introParagraphs: string[];
  tableOfContents: {
    id: string;
    title: string;
  }[];
  prompts: MaternityPromptItem[];
  stylingGuide: {
    title: string;
    intro: string;
    traditional: {
      title: string;
      sareeDrape: string;
      jewellery: string;
      dadAttire: string;
    };
    western: {
      title: string;
      flyingGowns: string;
      studioLinen: string;
      streetwear: string;
    };
  };
  posesGuide: {
    title: string;
    intro: string;
    timing: {
      title: string;
      recommendation: string;
    };
    poses: {
      name: string;
      description: string;
    }[];
  };
  dualFaceTips: {
    title: string;
    intro: string;
    tips: {
      title: string;
      detail: string;
    }[];
  };
  faqs: FAQItem[];
  relatedGuides: {
    title: string;
    url: string;
    tag: string;
  }[];
}

export const MATERNITY_ARTICLE: MaternityArticleData = {
  targetUrl: 'https://aipromptzyra.com/couple-maternity-photoshoot-prompts-for-gemini-ai/',
  postId: '61594710183320',
  slug: 'couple-maternity-photoshoot-prompts-for-gemini-ai',
  title: 'Couple Maternity Photoshoot Prompts for Gemini AI (2026): 11+ Indian & Western Pregnancy Photo Ideas',
  h1: 'Couple Maternity Photoshoot Prompts for Gemini AI (2026): 11+ Indian & Western Pregnancy Photo Ideas',
  category: {
    name: 'Couple Prompts',
    url: 'https://aipromptzyra.com/prompt-category/couple-prompts/',
  },
  author: {
    name: 'Hafizur Rahman',
    url: 'https://aipromptzyra.com/author/hafizur-rahman/',
    role: 'Founder & Lead AI Prompt Curator',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
  },
  publishedDate: 'October 2, 2026',
  modifiedDate: 'October 2, 2026',
  readingTime: '7 min read',
  featuredImage: {
    url: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-photoshoot-prompts-banner-2026.jpg',
    alt: 'Couple Maternity Photoshoot Prompts for Gemini AI and ChatGPT',
    caption: 'Curated 11+ high-fidelity Indian & Western couple maternity prompt concepts tested in Google Gemini and ChatGPT.',
  },
  introParagraphs: [
    'Welcoming a new life is one of the most emotional and transformative milestones in a couple’s journey. A couple maternity photoshoot immortalizes the quiet tenderness, profound anticipation, and shared joy between parents-to-be before their baby arrives.',
    'Whether you are searching for couple pregnant prompts for Gemini AI, exploring couple maternity photoshoot prompt ideas Indian for traditional Godh Bharai rituals, or looking for gemini ai pregnancy photo prompt copy paste ideas featuring dramatic flying gowns, beach sunsets, and cozy minimalist studios, AI technology allows you to visualize and create breathtaking maternity portraits right from home.',
    'In this 2026 guide, we have curated 11+ ultra-realistic couple maternity prompts for Gemini AI, ChatGPT (DALL-E 3), and Bing Image Creator. Each prompt includes facial-consistency keywords, wardrobe coordination, and lighting specs so you can upload your real selfies and generate museum-quality maternity portraits instantly.',
  ],
  tableOfContents: [
    { id: 'prompts-collection', title: '1. Best Couple Maternity Photoshoot Prompts (Copy & Paste)' },
    { id: 'styling-guide', title: '2. Couple Maternity Styling & Outfit Guide (Indian & Western)' },
    { id: 'poses-timing', title: '3. Top Couple Maternity Poses & Best Trimester Timing' },
    { id: 'dual-face-matching', title: '4. Tips for Dual-Face Matching in Gemini & ChatGPT' },
    { id: 'faq-section', title: '5. Frequently Asked Questions (FAQ)' },
    { id: 'community-section', title: '6. Join Our Community & Explore More Prompts' },
  ],
  prompts: [
    {
      id: 1,
      number: '01',
      title: '1. Golden Hour Sunset Garden Lawn Embrace (Tender Belly Hug)',
      subtitle: 'Warm outdoor natural embrace with bougainvillea rim light',
      prompt: 'Create an ultra-photorealistic vertical 3:4 portrait of an expecting Indian husband and pregnant wife during golden hour sunset in an upscale landscaped villa garden, based on my uploaded reference photos for the man and woman. Maintain 100% exact facial likeness and natural loving expressions for both individuals without artificial smoothing. The pregnant wife in her third trimester wears an elegant flowing pastel peach-coral chiffon maternity gown gently hugging her round baby bump. The husband in a cream linen button-down shirt and beige trousers stands behind her, wrapping his arms tenderly around her waist with both pairs of hands forming a gentle heart shape over the baby bump. Warm golden sun rays filtering through blooming bougainvillea, soft cinematic rim light, bokeh garden background, Sony A7R V, 85mm f/1.4 lens, candid intimate emotional connection, 8k resolution.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-golden-hour-garden-sunset-embrace.webp',
      alt: 'Couple maternity photoshoot prompt in golden hour sunset garden for Gemini AI',
      aspectRatio: '3:4 Vertical',
      style: 'Ultra-Photorealistic Outdoor',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Golden Hour Rim Lighting with Garden Bokeh',
      outfitHighlights: 'Pastel peach-coral chiffon gown & cream linen shirt',
    },
    {
      id: 2,
      number: '02',
      title: '2. Traditional Indian Godh Bharai / Seemantham Ceremony (Silk Saree)',
      subtitle: 'Royal heritage courtyard with Kanjeevaram silk and jasmine garlands',
      prompt: 'Generate an authentic and richly detailed vertical 3:4 portrait of an Indian couple celebrating their traditional Godh Bharai (baby shower / Seemantham ceremony) in a royal heritage courtyard, based on my uploaded reference photos. Ensure 100% precise face matching and natural skin texture for both. The glowing pregnant mother is draped in an exquisite haldi yellow and auspicious vermilion red Kanjeevaram pure silk saree with heavy antique gold zari borders, her baby bump dignified and visible. She wears traditional temple jewellery, green glass bangles, a delicate gold kamarbandh over the bump, and a fragrant jasmine veni in her hair. Her husband wears a rich raw silk cream and gold kurta with silk veshti. Marigold flower rangoli, brass urlis with floating lotus flowers, warm ambient festive light, Hasselblad 100MP, award-winning cultural photography, photorealistic 8k.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-traditional-godh-bharai-kanjeevaram-saree.webp',
      alt: 'Traditional Indian Godh Bharai couple maternity prompt in Kanjeevaram saree',
      aspectRatio: '3:4 Vertical',
      style: 'Royal Traditional Indian',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Warm Courtyard Festivity & Brass Diya Glow',
      outfitHighlights: 'Haldi yellow Kanjeevaram silk saree & raw silk cream kurta',
    },
    {
      id: 3,
      number: '03',
      title: '3. Cozy Minimalist Studio (White Linen & Husband Kissing Bump)',
      subtitle: 'Clean high-fashion off-white studio with intimate emotional connection',
      prompt: 'Create an intimate high-fashion vertical 3:4 studio portrait of an expecting couple against a clean seamless warm off-white studio backdrop, based on my uploaded reference photos. Maintain 100% accurate facial symmetry and candid emotional warmth. The expectant mother wears a chic white knit off-the-shoulder crop top and flowing bohemian cotton skirt, her bare baby bump beautifully illuminated with soft diffused studio flash. Her husband, kneeling on one knee wearing an open collar white linen shirt and light beige chinos, gently kisses her bare baby bump while resting his warm hands on her waist. Both smiling with pure bliss, high-end editorial maternity look, Vogue Scandinavia aesthetic, Leica SL2, 50mm f/1.2 lens, hyper-realistic, 8k.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-minimalist-studio-white-linen-kiss.webp',
      alt: 'Minimalist white linen couple maternity studio portrait prompt for Gemini AI',
      aspectRatio: '3:4 Vertical',
      style: 'Minimalist High-Fashion Studio',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Soft Octabox Diffused Key Light',
      outfitHighlights: 'White knit crop top, bohemian skirt & white linen shirt',
    },
    {
      id: 4,
      number: '04',
      title: '4. Emerald Green Billowing Flying Gown (Scenic Mountain Terrace)',
      subtitle: 'Dramatic high-altitude landscape with 12-foot flowing silk train',
      prompt: 'Generate a dramatic vertical 3:4 high-fashion maternity photoshoot of a stylish couple standing on a panoramic scenic hilltop terrace overlooking misty green mountains during sunrise, based on my uploaded reference photos. Maintain 100% exact facial likeness. The expecting mother wears a breathtaking royal emerald green satin maternity gown with an extra-long 12-foot billowing train that floats majestically in the mountain breeze, proudly cradling her baby bump. Her partner in a bespoke navy tailored blazer and crisp white shirt embraces her gently from behind, looking lovingly at her. Soft morning mist rolling over pine valleys, cinematic sun rays, dynamic fabric motion, editorial wide-angle 35mm f/1.8 lens, high-definition 8k.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-emerald-green-flying-gown-hilltop-terrace.webp',
      alt: 'Emerald green flying gown scenic couple maternity photoshoot prompt',
      aspectRatio: '3:4 Vertical',
      style: 'Dramatic Cinematic Editorial',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Crisp Sunrise Alpine Rays & Gentle Mist',
      outfitHighlights: '12-ft emerald satin flying gown & tailored navy blazer',
    },
    {
      id: 5,
      number: '05',
      title: '5. Baby Booties & Ultrasound Sonogram Scan (Close-Up Tender Joy)',
      subtitle: 'Close-up milestone announcement over the expecting bump',
      prompt: 'Create an emotional close-up vertical 3:4 shot of an expecting couple holding a black-and-white baby ultrasound sonogram scan strip and a pair of tiny knitted pastel baby booties directly over the round pregnant belly, based on my uploaded reference photos for facial and hand features. The pregnant mother wears a cozy ribbed oat-beige cardigan sweater unbuttoned gently over her baby bump, and her husband in a soft olive knit sweater wraps his hands around hers holding the booties. Shallow depth of field, warm indoor home lighting, tender anticipation, ultra-fine knitwear texture, Canon 100mm f/2.8 Macro lens, magazine quality, 8k resolution.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-baby-booties-ultrasound-sonogram-bump.webp',
      alt: 'Baby booties and ultrasound sonogram scan maternity prompt for Gemini AI',
      aspectRatio: '3:4 Vertical',
      style: 'Tender Milestone Close-up',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Warm Indoor Ambient & Soft Window Glow',
      outfitHighlights: 'Oat-beige ribbed cardigan & soft olive knit sweater',
    },
    {
      id: 6,
      number: '06',
      title: '6. Ethereal Floral Milk Bath (Vintage Clawfoot Tub & Rose Petals)',
      subtitle: 'Artistic fine-art milk bath with pastel roses and sheer lace',
      prompt: 'Generate an ethereal and artistic vertical 3:4 portrait of an expecting mother in a luxurious vintage porcelain clawfoot bathtub filled with warm milky white water and floating fresh pink and cream English roses, eucalyptus leaves, and baby\'s breath, based on my uploaded reference photos for the woman. Her husband kneels beside the tub in a casual white linen shirt, tenderly kissing her forehead as she cradles her bump beneath the opaque milky surface. The woman wears a sheer off-white lace maternity bralette and floating silk wrap. Soft diffused ethereal window light, fine-art fine-grain photography, dreamy romantic atmosphere, medium format camera, 8k resolution.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-floral-milk-bath-clawfoot-tub-rose-petals.webp',
      alt: 'Floral milk bath couple maternity photoshoot prompt for Gemini AI',
      aspectRatio: '3:4 Vertical',
      style: 'Fine-Art Ethereal',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Dreamy Diffused Window Daylight',
      outfitHighlights: 'Sheer off-white lace wrap & casual white linen shirt',
    },
    {
      id: 7,
      number: '07',
      title: '7. Barefoot Golden Sunset Beach Stroll (Gentle Ocean Shoreline)',
      subtitle: 'Romantic coastal tide stroll with wet sand reflections',
      prompt: 'Create a breathtaking vertical 3:4 romantic beach maternity photo of an Indian couple walking barefoot along the wet shoreline sand at golden sunset, based on my uploaded reference photos. Maintain 100% facial accuracy and natural windblown hair. Gentle incoming turquoise ocean waves lap over their feet, creating mirror reflections on the sand. The expecting mother wears an ethereal white bohemian lace maxi dress with side slit showing her baby bump, holding hands with her husband who is in a casual unbuttoned white shirt and folded beige linen trousers. Romantic orange and violet twilight sky, cinematic lens flare, Sony FX3, 50mm f/1.4, lifelike skin tone, 8k.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-barefoot-ocean-beach-sunset-shoreline.webp',
      alt: 'Barefoot beach sunset couple maternity photoshoot prompt',
      aspectRatio: '3:4 Vertical',
      style: 'Romantic Coastal Sunset',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Golden Hour Flare & Ocean Reflection',
      outfitHighlights: 'White bohemian lace maxi dress & rolled beige trousers',
    },
    {
      id: 8,
      number: '08',
      title: '8. Cozy Fairy Lights Bedside Canopy (Intimate Bedroom Glow)',
      subtitle: 'Warm cozy home evening with string lights and sheer canopy',
      prompt: 'Ultra realistic 8k portrait of an expecting Indian husband and pregnant wife sitting cozily on a plush bedroom rug beside their bed, surrounded by warm glowing golden fairy lights and sheer white canopy drapes, based on my uploaded reference photos. Exact facial fidelity. The couple is laughing candidly together while looking at a baby name book. The mom wears a blush-pink maternity sweater dress comfortably hugging her bump, and the dad in grey cashmere pullover rests one hand softly on her tummy. Golden bokeh sparkles everywhere, intimate evening warmth, shallow focus, 85mm portrait, 8k resolution.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-cozy-fairy-lights-canopy-bed-intimate.webp',
      alt: 'Cozy fairy lights canopy bedroom couple maternity prompt',
      aspectRatio: '3:4 Vertical',
      style: 'Cozy Lifestyle Intimate',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Warm Fairy Light Bokeh & Ambient Lamp Glow',
      outfitHighlights: 'Blush-pink sweater dress & grey cashmere pullover',
    },
    {
      id: 9,
      number: '09',
      title: '9. Modern Sunglasses Swag (Cool Expecting Parents Rooftop)',
      subtitle: 'Playful urban swagger with matching denim and retro sunglasses',
      prompt: 'Ultra realistic 8k portrait of a stylish modern young Indian couple doing a fun swagger maternity photoshoot on an urban rooftop cafe, based on my uploaded reference photos. Ensure 100% exact facial identity. The pregnant mother wears cool dark designer sunglasses, a cropped white tee showing her round baby bump, an oversized distressed denim jacket, and black joggers. The husband wears matching sunglasses, white sneakers, and denim jacket, pointing playfully toward the baby bump with pride. Neon city lights in the background, upbeat contemporary vibe, crisp sharp details, flash photography aesthetic, 8k.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-urban-denim-sunglass-cool-parents-rooftop.webp',
      alt: 'Modern swag sunglasses rooftop couple maternity prompt',
      aspectRatio: '3:4 Vertical',
      style: 'Modern Urban Streetwear',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Direct On-Camera Flash & Neon City Lights',
      outfitHighlights: 'Matching denim jackets, designer sunglasses & crop tee',
    },
    {
      id: 10,
      number: '10',
      title: '10. Heritage Temple Lotus Pond Courtyard (Traditional Mysore Silk)',
      subtitle: 'Historic South Indian stone temple pillar architecture',
      prompt: 'Ultra realistic 8k portrait of an expecting royal Indian couple in the ancient stone courtyard of a South Indian heritage temple next to a blooming lotus pond, based on my uploaded reference photos. The pregnant wife is adorned in an exquisite peacock blue and gold Mysore crepe silk saree, holding a bronze lotus flower near her baby bump. Her husband wears a traditional ivory veshti with gold borders and matching angavastram. Carved Dravidian stone pillars, natural afternoon sunbeams piercing through temple corridors, solemn cultural grace, cinematic depth of field, 8k resolution.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-heritage-temple-lotus-pond-veshti-saree.webp',
      alt: 'Heritage temple lotus pond traditional Indian couple maternity prompt',
      aspectRatio: '3:4 Vertical',
      style: 'Historic Temple Heritage',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Natural Chiaroscuro Sunbeams through Stone Pillars',
      outfitHighlights: 'Peacock blue Mysore crepe silk saree & ivory gold veshti',
    },
    {
      id: 11,
      number: '11',
      title: '11. 3D Cute Pixar Animated Expecting Couple (Nursery Joy)',
      subtitle: 'Heartwarming Disney-Pixar stylized 3D character animation',
      prompt: 'Adorable 3D Pixar Disney style digital animation character art of a cute young Indian couple expecting a baby, inspired by my uploaded reference photos. The animated mom character with expressive big brown eyes and soft smile wears a cute pastel lavender maternity dress hugging her round bump. The animated dad character with a cheerful smile and glasses stands next to her, holding a pair of tiny yellow baby shoes with excitement. Colorful dreamy baby nursery background with floating stars and teddy bears, rich subsurface scattering, soft Pixar movie lighting, 4k 3D render.',
      image: 'https://thepromptadda.in/wp-content/uploads/2026/10/couple-maternity-cute-pixar-3d-animated-nursery-joy.webp',
      alt: 'Cute Pixar 3D animated style couple maternity photoshoot prompt',
      aspectRatio: '3:4 Vertical',
      style: '3D Pixar/Disney Animation',
      aiTools: ['Gemini', 'ChatGPT', 'Bing'],
      lighting: 'Warm Dreamy Subsurface Character Glow',
      outfitHighlights: 'Pastel lavender animated dress & cozy yellow baby shoes',
    },
  ],
  stylingGuide: {
    title: 'Couple Maternity Styling & Outfit Guide (Indian & Western)',
    intro: 'The key to realistic, tasteful couple maternity portraits lies in color harmony, silhouette choice, and fabric textures. Here is how to style both partners for maximum visual elegance:',
    traditional: {
      title: '1. Traditional Indian Maternity Attire (Godh Bharai / Seemantham)',
      sareeDrape: 'A lightweight pure silk saree such as Kanjeevaram, Banarasi, or Chanderi in joyful shades like haldi yellow, auspicious vermilion red, royal peacock blue, or rani pink. Drape the pallu neatly over one shoulder so the curve of the baby bump remains visible and dignified.',
      jewellery: 'Green glass bangles (traditional symbol of fertility and blessing), lightweight temple choker, gold waist belt (kamarbandh) worn just above the bump, and fresh fragrant jasmine flowers (veni/gajra) in the hair.',
      dadAttire: 'A complementary raw silk kurta in cream, maroon, or pastel peach, paired with comfortable churidar or silk dhoti/veshti with a gold zari border.',
    },
    western: {
      title: '2. Western & Contemporary Editorial Styles',
      flyingGowns: 'Satin or chiffon maternity gowns with extra-long 10 to 15-foot trains. Rich jewel tones like emerald green, royal sapphire, ruby red, or soft pastel lavender create breathtaking outdoor photographs.',
      studioLinen: 'Clean white or cream off-the-shoulder knit tops with flowing bohemian skirts. The father coordinates with an unbuttoned linen shirt in ivory, khaki, or soft sand tones.',
      streetwear: 'Matching denim jackets, dark designer sunglasses, white tees, and dark cargo pants for a playful modern couple aesthetic.',
    },
  },
  posesGuide: {
    title: 'Top Couple Maternity Poses & Best Trimester Timing',
    intro: 'Creating natural, heartfelt maternity photos requires posing that feels effortless rather than stiff. Here are essential poses and professional timing guidelines:',
    timing: {
      title: 'Golden Window: When to Shoot (28 to 34 Weeks)',
      recommendation: 'The optimal window for a couple maternity photoshoot is between weeks 28 and 34 of pregnancy (early to mid third trimester). During this stage, the baby bump has a beautifully rounded shape, and the mother usually feels comfortable enough to stand, walk, and pose without excessive fatigue.',
    },
    poses: [
      {
        name: 'The Back Hug Belly Cradle',
        description: 'The husband stands behind his partner, resting his chin close to her temple while both rest their hands together on the baby bump. This conveys protection, intimacy, and shared warmth.',
      },
      {
        name: 'The Kneeling Bump Kiss',
        description: 'The husband kneels on one knee, pressing his lips gently against the belly while the mother looks down affectionately with a hand resting gently on his head or shoulder.',
      },
      {
        name: 'The Prop Announcement',
        description: 'Holding tiny knitted baby booties, baby shoes, or the latest sonogram ultrasound scan strip directly over the bump creates an emotional announcement portrait.',
      },
      {
        name: 'The Barefoot Sunset Walk',
        description: 'Walking hand-in-hand along a beach or garden path while chatting and laughing naturally produces dynamic, candid editorial shots.',
      },
    ],
  },
  dualFaceTips: {
    title: 'Tips for Dual-Face Matching in Gemini & ChatGPT',
    intro: 'When using AI generators like Google Gemini (Imagen 3) or ChatGPT (DALL-E 3) to generate couple photos from real faces:',
    tips: [
      {
        title: 'Upload Separate High-Res Portraits',
        detail: 'Upload one clear, front-facing selfie of the husband and one of the wife taken in natural daylight without heavy filters.',
      },
      {
        title: 'Label Roles Clearly in Prompt',
        detail: 'In your initial prompt, specify: "Image 1 is the husband (man), Image 2 is the pregnant wife (woman). Maintain 100% exact facial likeness, eye shape, smile, and skin undertones."',
      },
      {
        title: 'Use Realistic Photography Tokens',
        detail: 'Specify camera parameters such as "Canon EOS R5 85mm f1.4 lens, natural skin pores, uncompressed 8k, soft golden hour lighting" to avoid plastic or cartoonish smoothing.',
      },
    ],
  },
  faqs: [
    {
      question: 'What is the best month or week for a couple maternity photoshoot?',
      answer: 'The ideal time is between 28 and 34 weeks (around month 7 to 8 of pregnancy). During this period, the belly is visibly prominent and round, but the expectant mother is still energetic and comfortable enough for multiple outfits and poses.',
    },
    {
      question: 'How can I generate a maternity photo with my own real face using Gemini AI?',
      answer: 'In Google Gemini Advanced, upload high-resolution reference portraits of yourself and your partner. Copy any of our prompts above, paste it into Gemini, and add: "Use the uploaded photos to replicate our exact facial features, skin tone, and expressions on the expecting couple."',
    },
    {
      question: 'What should couples wear for a maternity photoshoot?',
      answer: 'Couples can opt for traditional Indian wear like a lightweight Kanjeevaram or Chanderi silk saree paired with a silk kurta, or modern western attire like an emerald green flying gown, cream linen studio sets, or matching denim jackets for a casual urban look.',
    },
    {
      question: 'Is Gemini AI free to use for maternity photo prompts?',
      answer: 'Yes. You can use standard Google Gemini and Bing Image Creator completely free of charge to generate creative maternity photo concepts by copying and pasting the prompts provided in this guide.',
    },
  ],
  relatedGuides: [
    { title: 'Rajputi Couple Photo Prompt (2026): 11+ Royal Rajputana Looks', url: 'https://thepromptadda.in/rajputi-couple-photo-prompt/', tag: 'Trending' },
    { title: 'Prompt for Haldi Ceremony for Bride (2026): 11+ Trending Looks', url: 'https://thepromptadda.in/prompt-for-haldi-ceremony-for-bride/', tag: 'Wedding' },
    { title: 'Prompt for Haldi Ceremony for Groom (2026): 11+ Haldi Photos', url: 'https://thepromptadda.in/prompt-for-haldi-ceremony-for-groom/', tag: 'Wedding' },
    { title: 'Indian Wedding Photo Prompt for Gemini: Royal Pheras & Mandap', url: 'https://thepromptadda.in/indian-wedding-photo-prompt-for-gemini/', tag: 'Cinematic' },
  ],
};
