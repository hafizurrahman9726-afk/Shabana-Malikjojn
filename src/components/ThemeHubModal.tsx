import React, { useState } from 'react';
import { X, Download, Code, FileText, CheckCircle, Shield, Sparkles, FolderArchive, Layers } from 'lucide-react';

interface ThemeHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThemeHubModal: React.FC<ThemeHubModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<string>('functions.php');
  const [downloading, setDownloading] = useState(false);

  if (!isOpen) return null;

  const fileSnippets: Record<string, { desc: string; code: string }> = {
    'functions.php': {
      desc: 'Theme setup, navigation menus, CPT prompt, custom taxonomies, AJAX handler, and script enqueuing.',
      code: `<?php
/**
 * AIPromptzyra functions and definitions
 * @package AIPromptzyra
 * @version 1.0.0
 */

// Theme setup & features
function aipromptzyra_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array('search-form', 'gallery', 'caption'));
    
    register_nav_menus(array(
        'primary'           => esc_html__('Primary Menu', 'aipromptzyra'),
        'footer_quick'      => esc_html__('Footer Quick Links', 'aipromptzyra'),
        'footer_important'  => esc_html__('Footer Important Pages', 'aipromptzyra'),
        'footer_categories' => esc_html__('Footer Categories', 'aipromptzyra'),
    ));
}
add_action('after_setup_theme', 'aipromptzyra_setup');

// Register Custom Post Type 'prompt'
function aipromptzyra_register_post_types() {
    register_post_type('prompt', array(
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-art',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest' => true,
    ));

    register_taxonomy('prompt_category', array('prompt'), array(
        'hierarchical' => true,
        'show_in_rest' => true,
    ));
}
add_action('init', 'aipromptzyra_register_post_types');
...`,
    },
    'front-page.php': {
      desc: 'Homepage template implementing Hero collage, Horizontal Sliding Category Carousel, Latest Guides & Tutorials (30 per page + pagination), Prompt Builder, Community, FAQs, and Author Profile.',
      code: `<?php
/**
 * The front page template file for AIPromptzyra
 * Matches homepage visual hierarchy exactly
 */
get_header(); ?>

<main id="primary" class="site-main">
    <!-- 1. HERO SECTION with search -->
    <section class="hero-section">...</section>

    <!-- 2. HORIZONTAL SLIDING PROMPT CATEGORY CAROUSEL -->
    <section id="prompt-carousel-section" class="prompt-carousel-section">...</section>

    <!-- 3. LATEST GUIDES & TUTORIALS (30 published articles per page + pagination) -->
    <section id="guides-section" class="section guides-section">...</section>

    <!-- 4. AI PROMPT BUILDER (8 fields) -->
    <section id="prompt-builder" class="section builder-section">...</section>

    <!-- 5. LATEST GUIDES & TUTORIALS -->
    <section class="section guides-section">...</section>

    <!-- 6. HOW TO USE AI PROMPTS -->
    <section class="section how-to-section">...</section>

    <!-- 7. WHY CHOOSE AIPROMPTZYRA -->
    <section class="section why-choose-section">...</section>

    <!-- 8. JOIN OUR COMMUNITY -->
    <section class="section community-section">...</section>

    <!-- 9. FREQUENTLY ASKED QUESTIONS -->
    <section class="section faq-section">...</section>

    <!-- 10. AUTHOR PROFILE CARD (Hafizur Rahman) -->
    <section class="section author-card-section">...</section>

    <!-- 11. NEWSLETTER BANNER -->
    <section class="section newsletter-section">...</section>
</main>

<?php get_footer(); ?>`,
    },
    'style.css': {
      desc: 'Theme header metadata, CSS variables, typography, and dark mode support.',
      code: `/*
Theme Name: AIPromptzyra
Theme URI: https://aipromptzyra.com/
Author: AIPromptzyra Team
Description: A premium, ultra-fast WordPress theme crafted for AI prompt discovery, visual prompt categorization, dynamic prompt builders, and creative tutorials.
Version: 1.0.0
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 7.4
License: GNU General Public License v2 or later
Text Domain: aipromptzyra
*/

:root {
  --az-primary: #7c3aed;
  --az-accent: #8b5cf6;
  --az-bg: #fafafa;
  --az-surface: #ffffff;
  --az-text: #1e293b;
  --az-footer-bg: #0b0f19;
}

[data-theme="dark"] {
  --az-bg: #090d16;
  --az-surface: #111726;
  --az-text: #f8fafc;
}`,
    },
    'header.php': {
      desc: 'Semantic <header>, brand logo, primary menu, header search form, and theme toggle.',
      code: `<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'aipromptzyra'); ?></a>

<header id="masthead" class="site-header">
    <div class="site-header-inner container">
        <div class="site-branding">...</div>
        <nav id="site-navigation" class="main-navigation">...</nav>
        <div class="header-actions">...</div>
    </div>
</header>`,
    },
    'footer.php': {
      desc: 'Deep navy/charcoal footer with 5 columns, social links, legal pages, and copyright.',
      code: `</div><!-- #content -->
<footer id="colophon" class="site-footer">
    <div class="footer-top-container container">
        <div class="footer-grid">
            <div class="footer-col footer-col-brand">...</div>
            <div class="footer-col">... Quick Links ...</div>
            <div class="footer-col">... Important Pages ...</div>
            <div class="footer-col">... Categories ...</div>
            <div class="footer-col">... Stay Connected ...</div>
        </div>
    </div>
    <div class="footer-bottom-bar">...</div>
</footer>
<?php wp_footer(); ?>
</body>
</html>`,
    },
    'single.php': {
      desc: 'Clean single post template without outer rounded cards, unboxed prompt text, and without bottom author bio card.',
      code: `<?php
/**
 * Clean Single Post Template
 * Border-free, unboxed prompts, responsive mobile layout
 */
get_header(); ?>
<main id="primary" class="site-main container single-article-layout">
    <?php while (have_posts()) : the_post(); ?>
        <div class="single-article-main-col">
            <article id="post-<?php the_ID(); ?>" <?php post_class('article-single'); ?>>
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                    <div class="entry-meta-bar">...</div>
                </header>
                <?php if (has_post_thumbnail()) : ?>
                    <figure class="entry-featured-media"><?php the_post_thumbnail('large'); ?></figure>
                <?php endif; ?>
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
                <?php if (has_tag()) : ?>
                    <footer class="entry-footer"><?php the_tags(); ?></footer>
                <?php endif; ?>
            </article>
        </div>
        <div class="single-article-sidebar-col">
            <?php get_sidebar('single'); ?>
        </div>
    <?php endwhile; ?>
</main>
<?php get_footer(); ?>`,
    },
    'page.php': {
      desc: 'Shared page template with unified metadata row and horizontal related pages row for legal pages.',
      code: `<?php
/**
 * The template for displaying all pages
 * Includes dedicated shared legal layout for Contact, Privacy, Terms, and Disclaimer
 */
get_header(); ?>
<main id="primary" class="site-main container page-container">
    <?php while (have_posts()) : the_post();
        $slug = get_post_field('post_name', get_the_ID());
        if (in_array($slug, array('contact', 'privacy-policy', 'terms-and-conditions', 'disclaimer'))) : ?>
            <article class="page-entry legal-page-entry">
                <!-- 1. Top Metadata Row (clean label & verified info) -->
                <div class="page-meta-badge-bar">
                    <span class="page-meta-label">Data Policy</span>
                    <span class="page-meta-item">Effective Date: October 21, 2026</span>
                    <span class="page-meta-dot">•</span>
                    <span class="page-meta-item">Editor: Zyra Ansari</span>
                </div>
                <!-- 2. Clean Page Body -->
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
                <!-- 3. Standardized Bottom Related Pages Row -->
                <div class="page-nav-bar">
                    <div class="page-nav-links-group">
                        <span class="page-nav-heading">Related Pages</span>
                        <div class="page-nav-links">
                            <!-- Clean flex row without unwanted bullets, current page excluded -->
                        </div>
                    </div>
                    <div class="page-nav-attribution">
                        <span>AIPromptZyra • Published by Zyra Ansari</span>
                    </div>
                </div>
            </article>
        <?php else : ?>
            <article class="page-entry">
                <header class="entry-header page-header-centered">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>
                <div class="entry-content"><?php the_content(); ?></div>
            </article>
        <?php endif; ?>
    <?php endwhile; ?>
</main>
<?php get_footer(); ?>`,
    },
    'single-prompt.php': {
      desc: 'Dedicated single prompt template with artwork display, one-click copy box, and parameters.',
      code: `<?php
/**
 * Single AI Prompt Template
 */
get_header(); ?>
<main id="primary" class="site-main container single-prompt-container">
    <div class="prompt-single-layout">
        <div class="prompt-single-media-col">
            <?php the_post_thumbnail('aipromptzyra-featured'); ?>
            <div class="spec-card">Aspect Ratio: <?php echo esc_html($aspect_ratio); ?></div>
        </div>
        <div class="prompt-single-info-col">
            <h1 class="prompt-single-title"><?php the_title(); ?></h1>
            <div class="prompt-copy-box">
                <button class="copy-prompt-btn" data-prompt="<?php echo esc_attr($prompt_text); ?>">Copy Prompt</button>
                <div class="prompt-text-display"><?php echo esc_html($prompt_text); ?></div>
            </div>
        </div>
    </div>
</main>
<?php get_footer(); ?>`,
    },
    'assets/js/prompt-builder.js': {
      desc: 'Lightweight vanilla JS prompt generator supporting subject, outfit, lighting, style, mood, and camera angle.',
      code: `document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('aipromptzyra-builder-form');
  const generatedTextEl = document.getElementById('builder-generated-text');
  const copyBtn = document.getElementById('btn-copy-builder-prompt');

  function generatePrompt() {
    const subject = document.getElementById('field-subject')?.value || 'Girl';
    const outfit = document.getElementById('field-outfit')?.value || 'Saree';
    const style = document.getElementById('field-style')?.value || 'Cinematic';
    ...
    generatedTextEl.textContent = \`A beautiful young \${subject.toLowerCase()} in a \${outfit.toLowerCase()}...\`;
  }
  ...
});`,
    },
    'template-parts/sidebar-single.php': {
      desc: 'Single article right sidebar with Post Author (verified badge), Trending Prompts, and 3 approved Categories.',
      code: `<?php
/**
 * Single Article Right Sidebar
 * Sections: Post Author, Trending Prompts, Categories (Trending Prompts, Couple Prompts, AI Photo Prompts)
 */
<aside id="secondary" class="widget-area single-article-sidebar">
    <!-- 1. Post Author Widget -->
    <div class="az-sidebar-widget az-widget-author">
        <h3 class="az-widget-title"><span><?php esc_html_e('Post Author', 'aipromptzyra'); ?></span></h3>
        <div class="az-author-card-content">
            <?php echo get_avatar(get_the_author_meta('ID'), 80); ?>
            <h4><?php the_author(); ?> <span class="az-verified-badge">...</span></h4>
            <p><?php echo esc_html(get_the_author_meta('description')); ?></p>
            <a href="<?php echo esc_url(get_author_posts_url(get_the_author_meta('ID'))); ?>">View All Guides</a>
        </div>
    </div>

    <!-- 2. Trending Prompts Widget -->
    <div class="az-sidebar-widget az-widget-trending">
        <h3 class="az-widget-title"><span><?php esc_html_e('Trending Prompts', 'aipromptzyra'); ?></span></h3>
        <?php /* WP_Query for published trending prompt articles with thumbnails and dates */ ?>
    </div>

    <!-- 3. Categories Widget (Strictly 3 Approved Categories) -->
    <div class="az-sidebar-widget az-widget-categories">
        <h3 class="az-widget-title"><span><?php esc_html_e('Categories', 'aipromptzyra'); ?></span></h3>
        <a href="<?php echo esc_url(home_url('/category/trending-prompts/')); ?>">Trending Prompts</a>
        <a href="<?php echo esc_url(home_url('/category/couple-prompts/')); ?>">Couple Prompts</a>
        <a href="<?php echo esc_url(home_url('/category/ai-photo-prompts/')); ?>">AI Photo Prompts</a>
    </div>
</aside>`,
    },
  };

  const handleDownloadZip = () => {
    setDownloading(true);
    // Create an anchor pointing to the pre-generated zip
    const link = document.createElement('a');
    link.href = '/aipromptzyra-theme.zip';
    link.download = 'aipromptzyra-theme.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/30">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white font-['Outfit']">
                AIPromptzyra WordPress Theme Hub
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Installable Theme Bundle &bull; Full PHP & CSS Source &bull; Tested on WordPress 6.0–6.7 & PHP 7.4–8.3
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadZip}
              disabled={downloading}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow flex items-center gap-2 transition-all hover:scale-105"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'Downloading...' : 'Download Theme (.zip)'}</span>
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body: Left File Tabs / Right Code Viewer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          {/* File Explorer Sidebar */}
          <div className="lg:col-span-4 p-4 border-r border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 overflow-y-auto space-y-1.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
              Theme Templates & Files
            </p>
            {Object.keys(fileSnippets).map((filename) => (
              <button
                key={filename}
                onClick={() => setSelectedFile(filename)}
                className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  selectedFile === filename
                    ? 'bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Code className="w-3.5 h-3.5 shrink-0" />
                <span className="font-mono">{filename}</span>
              </button>
            ))}

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-4 space-y-2 px-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Installation Checklist
              </p>
              <div className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>WordPress Template Hierarchy compliant</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>XSS safe escaping & nonces</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>SEO plugin & Yoast compatible</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Pure vanilla ES6+ (no bulky libs)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code Viewer */}
          <div className="lg:col-span-8 p-6 flex flex-col justify-between overflow-y-auto bg-slate-900 text-slate-200">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                <span className="font-mono font-bold text-purple-400">{selectedFile}</span>
                <span className="text-slate-500">{fileSnippets[selectedFile].desc}</span>
              </div>
              <pre className="font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto p-2 select-all">
                <code>{fileSnippets[selectedFile].code}</code>
              </pre>
            </div>

            {/* Installation Instructions Bottom Bar */}
            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p>
                To install: Upload <strong className="text-white">aipromptzyra-theme.zip</strong> in WP Admin &rarr; Appearance &rarr; Themes &rarr; Add New &rarr; Upload.
              </p>
              <button
                onClick={handleDownloadZip}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold flex items-center justify-center gap-1.5 shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get aipromptzyra-theme.zip (2.1 MB)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
