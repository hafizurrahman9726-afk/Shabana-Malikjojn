# AIPromptzyra — Premium WordPress Theme Documentation

**Theme Name:** AIPromptzyra  
**Version:** 1.0.0  
**Tested on WordPress:** 6.0 – 6.7  
**Requires PHP:** 7.4 – 8.3  
**License:** GNU General Public License v2 or later  
**Visual Reference:** AIPromptzyra.com Homepage Specification  

---

## 1. Theme Overview & Architecture

AIPromptzyra is a custom WordPress theme built for AI prompt portals, prompt engineers, and visual AI creators. It adheres to WordPress coding standards, utilizes semantic HTML5, modern modular CSS3, and lightweight vanilla JavaScript (ES6+), without requiring external heavy JavaScript frameworks.

### Template Hierarchy & File Structure

```
wordpress-theme/aipromptzyra/
├── style.css                      # Official WP header metadata & root variables
├── functions.php                  # Theme setup, CPT registration, menus, hooks & AJAX
├── header.php                     # Accessible <header>, brand logo, search & dark toggle
├── footer.php                     # 5-column dark footer, social links, legal nav & copyright
├── front-page.php                 # Homepage matching reference screenshot layout
├── index.php                      # Fallback template with pagination & empty states
├── single.php                     # Single tutorial / guide template with reading time
├── single-couple-maternity-photoshoot-prompts-for-gemini-ai.php # Dedicated single template for maternity photoshoot article
├── single-prompt.php              # Dedicated AI prompt view with 1-click copy box & specs
├── page.php                       # Generic page template (About, Contact, Legal)
├── page-prompt-builder.php        # Standalone Prompt Builder page template
├── archive.php                    # Archive list template
├── archive-prompt.php             # Custom Post Type 'prompt' archive with category filter
├── taxonomy-prompt_category.php   # Taxonomy archive for Girl, Boy, Couple, etc.
├── search.php                     # Search results with live counts & empty suggestions
├── 404.php                        # Accessible 404 error page with search & recovery links
├── screenshot.png                 # Official WordPress admin theme preview screenshot
├── readme.txt                     # WordPress standard repository readme
├── inc/
│   ├── customizer.php             # WP Customizer settings (Hero text, colors, footer)
│   └── template-tags.php          # Helper functions (posted_on, posted_by)
├── template-parts/
│   ├── content-prompt-card.php    # Reusable prompt card markup
│   ├── content-guide-card.php     # Reusable guide card markup
│   └── single-couple-maternity-ai.php # Dedicated template part for maternity article
└── assets/
    ├── css/
    │   ├── theme.css              # Responsive layout, grid system, dark mode overrides
    │   └── single-couple-maternity-ai.css # 100% scoped CSS for .single-couple-maternity-ai-article
    └── js/
        ├── theme.js               # Vanilla JS: Dark mode toggle & global copy handler
        └── prompt-builder.js      # Vanilla JS: 8-field prompt formula generator & reset
```

---

## 2. Installation Guide

### Via WordPress Admin
1. Download `aipromptzyra-theme.zip` from the interactive Theme Hub in this app.
2. In your WordPress admin dashboard, navigate to **Appearance > Themes**.
3. Click **Add New Theme** and then click **Upload Theme**.
4. Choose the `aipromptzyra-theme.zip` file and click **Install Now**.
5. Once uploaded, click **Activate**.

### Via FTP / SSH
1. Unzip `aipromptzyra-theme.zip` into `wp-content/themes/`.
2. Ensure permissions are set to `755` for directories and `644` for files.
3. Log into WordPress admin and activate under **Appearance > Themes**.

---

## 3. Recommended WordPress Settings

### Menus
Go to **Appearance > Menus** and create/assign the following:
* **Primary Menu:** Home, Explore Prompts (`/prompts/`), Prompt Builder (`/prompt-builder/`), Categories, Guides (`/guides/`), About (`/about/`).
* **Footer Quick Links:** Navigation shortcuts.
* **Footer Important Pages:** Contact, Privacy Policy, Terms, Disclaimer, Editorial Policy.
* **Footer Categories:** Direct links to key prompt categories.

### Reading Settings
Go to **Settings > Reading**:
* Select **Your homepage displays**: "A static page".
* Set **Homepage** to your front page (uses `front-page.php` automatically).

---

## 4. Custom Post Type & Taxonomies

* **Custom Post Type:** `prompt`
  * Supports: Title, Content/Editor, Featured Image (Artwork), Excerpt, Custom Fields.
  * Custom Meta:
    * `_aipromptzyra_prompt_text`: The exact AI copy-ready text string.
    * `_aipromptzyra_negative_prompt`: Optional negative prompt parameters.
    * `_aipromptzyra_aspect_ratio`: Recommended aspect ratio (e.g. 16:9, 4:5, 1:1).
    * `_aipromptzyra_tool`: Compatible models (Gemini Imagen 3, ChatGPT DALL-E, Midjourney).
* **Taxonomies:**
  * `prompt_category`: Trending Prompts (`trending-prompts`), Couple Prompts (`couple-prompts`), AI Photo Prompts (`ai-photo-prompts`).
  * `prompt_style`: Cinematic, Editorial Studio, Vintage 35mm, Fantasy Dreamscape, Cyberpunk Neon.

---

## 5. Security & Sanitization Audit

* **Escaping:** All outputs use context-specific escaping: `esc_html()`, `esc_url()`, `esc_attr()`, `esc_html__()`.
* **Sanitization:** All form inputs and Customizer settings use `sanitize_text_field()` and `sanitize_hex_color()`.
* **Nonces:** AJAX requests for prompt generation verify nonces via `check_ajax_referer('aipromptzyra_nonce', 'security')`.
* **Permissions:** Capabilities are checked using `current_user_can()` where administrative operations occur.
* **Zero Secrets:** No private keys or sensitive credentials exist in client-side code.

---

## 6. Technical SEO & Performance

* Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
* Single `<h1>` per view with clear hierarchical headings (`<h2>`, `<h3>`).
* Compatible with **Yoast SEO** and **Rank Math** without duplicating title tags or schema.
* Core Web Vitals optimization: Above-the-fold hero image loads eagerly; below-the-fold thumbnails use native `loading="lazy"`.
* Native theme-level dark mode switcher stored in `localStorage` with zero flash of unstyled content.
