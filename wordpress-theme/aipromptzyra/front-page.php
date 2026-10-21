<?php
/**
 * The front page template file for AIPromptzyra
 *
 * @package AIPromptzyra
 * @version 1.0.1
 */

get_header(); ?>

<main id="primary" class="site-main">

    <!-- 1. HERO SECTION -->
    <section id="hero" class="hero-section">
        <div class="container hero-container">
            <div class="hero-content">
                <div class="hero-badge">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#7C3AED" class="hero-badge-spark" aria-hidden="true">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <span><?php esc_html_e('AI PROMPTS FOR YOUR CREATIVE IDEAS', 'aipromptzyra'); ?></span>
                </div>

                <h1 class="hero-title">
                    <?php esc_html_e('Find the Right AI Prompt for Your', 'aipromptzyra'); ?>
                    <span class="gradient-text"><?php esc_html_e('Next Idea', 'aipromptzyra'); ?></span>
                </h1>

                <p class="hero-subtitle">
                    <?php echo esc_html(get_theme_mod('aipromptzyra_hero_subtitle', __('Discover high-quality, copy-ready prompts for Gemini, ChatGPT and other AI tools. Create amazing images, portraits, art, videos and more with simple prompts.', 'aipromptzyra'))); ?>
                </p>

                <!-- Hero Search Form -->
                <form role="search" method="get" class="hero-search-form" action="<?php echo esc_url(home_url('/')); ?>">
                    <div class="hero-search-wrapper">
                        <svg class="hero-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                        <input type="search" class="hero-search-input" name="s" placeholder="<?php esc_attr_e('Search prompts (e.g. girl portrait, couple, festival, cinematic...)', 'aipromptzyra'); ?>" required />
                        <button type="submit" class="hero-search-submit">
                            <?php esc_html_e('Search', 'aipromptzyra'); ?>
                        </button>
                    </div>
                </form>
            </div>

            <!-- Hero Image Collage -->
            <div class="hero-collage" aria-hidden="true">
                <div class="collage-card card-boy">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/indian-traditional-wedding-prompt-for-gemini-banner-2026-thumb-800x450-1.webp" alt="AI portrait prompt" loading="eager" />
                </div>
                <div class="collage-card card-saree">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/couple-maternity-photoshoot-prompt-ideas-indian-saree-banner-2026-thumb-800x450-1.webp" alt="AI ethnic portrait" loading="eager" />
                </div>
                <div class="collage-card card-main-girl">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp" alt="AIPromptzyra featured prompt portrait" loading="eager" />
                </div>
                <div class="collage-card card-couple">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/Couple-Eyes-Prompt-ChatGPT.jpg" alt="Couple AI prompt portrait" loading="lazy" />
                </div>
                <div class="collage-card card-landscape">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/eyes-prompt-for-girl-banner-2026-thumb-800x450-1.webp" alt="AI photo prompt" loading="lazy" />
                </div>
                <div class="collage-badge-sticker">
                    <span><?php esc_html_e('Turn Ideas into Amazing AI Images', 'aipromptzyra'); ?></span>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. HORIZONTAL SLIDING PROMPT ARTICLE CAROUSEL (DYNAMIC FROM PUBLISHED ARTICLES) -->
    <?php
    // Dynamically fetch published WordPress articles & prompts
    $carousel_query_args = array(
        'post_type'           => array('post', 'prompt'),
        'post_status'         => 'publish',
        'posts_per_page'      => 50,
        'orderby'             => 'date',
        'order'               => 'DESC',
        'ignore_sticky_posts' => 1,
        'no_found_rows'       => true,
    );

    $carousel_query = new WP_Query($carousel_query_args);

    if ($carousel_query->have_posts()) :
    ?>
    <section id="prompt-carousel-section" class="prompt-carousel-section" aria-label="<?php esc_attr_e('Featured Prompt Articles Carousel', 'aipromptzyra'); ?>">
        <div class="carousel-container-outer">
            <div class="carousel-nav-wrapper" aria-hidden="true">
                <button type="button" class="carousel-arrow carousel-arrow-prev" id="carousel-prev-btn" aria-label="<?php esc_attr_e('Scroll left', 'aipromptzyra'); ?>">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                </button>
                <button type="button" class="carousel-arrow carousel-arrow-next" id="carousel-next-btn" aria-label="<?php esc_attr_e('Scroll right', 'aipromptzyra'); ?>">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </button>
            </div>

            <div class="carousel-track-wrapper" id="carousel-track" role="region" aria-label="<?php esc_attr_e('Published articles track', 'aipromptzyra'); ?>" tabindex="0">
                <?php
                $rendered_post_ids = array();
                while ($carousel_query->have_posts()) :
                    $carousel_query->the_post();
                    $post_id = get_the_ID();

                    if (in_array($post_id, $rendered_post_ids, true)) {
                        continue;
                    }
                    $rendered_post_ids[] = $post_id;

                    $thumb_url = '';
                    if (has_post_thumbnail($post_id)) {
                        $thumb_url = get_the_post_thumbnail_url($post_id, 'medium_large');
                    }
                    if (empty($thumb_url)) {
                        $thumb_url = 'https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp';
                    }

                    $cat_name = __('Prompts', 'aipromptzyra');
                    $prompt_terms = get_the_terms($post_id, 'prompt_category');
                    if (!empty($prompt_terms) && !is_wp_error($prompt_terms)) {
                        $cat_name = $prompt_terms[0]->name;
                    } else {
                        $cats = get_the_category($post_id);
                        if (!empty($cats)) {
                            $cat_name = $cats[0]->name;
                        }
                    }
                ?>
                    <a href="<?php the_permalink(); ?>" class="carousel-card-item" title="<?php the_title_attribute(); ?>">
                        <div class="carousel-card-media">
                            <img src="<?php echo esc_url($thumb_url); ?>" alt="<?php the_title_attribute(); ?>" loading="lazy" decoding="async" width="200" height="280" />
                            <div class="carousel-card-overlay">
                                <span class="carousel-card-tag"><?php echo esc_html($cat_name); ?></span>
                                <h3 class="carousel-card-title"><?php the_title(); ?></h3>
                            </div>
                        </div>
                    </a>
                <?php
                endwhile;
                wp_reset_postdata();
                ?>
            </div>
        </div>
    </section>
    <?php endif; ?>

    <!-- 3. LATEST GUIDES & TUTORIALS (30 published articles per page + functional pagination + horizontal filter bar) -->
    <section id="guides-section" class="section guides-section">
        <div class="container">
            <div class="section-header-row">
                <div>
                    <h2 class="section-title"><?php esc_html_e('Latest Guides & Tutorials', 'aipromptzyra'); ?></h2>
                    <p class="section-subtitle"><?php esc_html_e('Helpful articles to improve your AI skills and get better results.', 'aipromptzyra'); ?></p>
                </div>
                <?php
                // View All Guides points to the Trending Prompts category archive
                $trending_cat_term = get_term_by('slug', 'trending-prompts', 'prompt_category');
                $trending_archive_url = ($trending_cat_term && !is_wp_error(get_term_link($trending_cat_term))) 
                    ? get_term_link($trending_cat_term) 
                    : home_url('/prompt-category/trending-prompts/');

                $couple_cat_term = get_term_by('slug', 'couple-prompts', 'prompt_category');
                $couple_archive_url = ($couple_cat_term && !is_wp_error(get_term_link($couple_cat_term))) 
                    ? get_term_link($couple_cat_term) 
                    : home_url('/prompt-category/couple-prompts/');

                $ai_photo_cat_term = get_term_by('slug', 'ai-photo-prompts', 'prompt_category');
                $ai_photo_archive_url = ($ai_photo_cat_term && !is_wp_error(get_term_link($ai_photo_cat_term))) 
                    ? get_term_link($ai_photo_cat_term) 
                    : home_url('/prompt-category/ai-photo-prompts/');
                ?>
                <a href="<?php echo esc_url($trending_archive_url); ?>" class="section-link">
                    <?php esc_html_e('View All Guides', 'aipromptzyra'); ?> &rarr;
                </a>
            </div>

            <!-- Horizontal Category Filter Bar: Exactly 3 Category Filters linking to archives -->
            <div class="guides-filter-bar-wrapper" role="navigation" aria-label="<?php esc_attr_e('Filter Guides by Category', 'aipromptzyra'); ?>">
                <div class="guides-filter-scroll-track" id="guides-filter-track">
                    <a href="<?php echo esc_url($trending_archive_url); ?>" class="guides-filter-pill">
                        <span><?php esc_html_e('Trending Prompts', 'aipromptzyra'); ?></span>
                    </a>
                    <a href="<?php echo esc_url($couple_archive_url); ?>" class="guides-filter-pill">
                        <span><?php esc_html_e('Couple Prompts', 'aipromptzyra'); ?></span>
                    </a>
                    <a href="<?php echo esc_url($ai_photo_archive_url); ?>" class="guides-filter-pill">
                        <span><?php esc_html_e('AI Photo Prompts', 'aipromptzyra'); ?></span>
                    </a>
                </div>
            </div>

            <?php
            // Calculate current page safely for front page and subpages
            $paged = 1;
            if (get_query_var('paged')) {
                $paged = absint(get_query_var('paged'));
            } elseif (get_query_var('page')) {
                $paged = absint(get_query_var('page'));
            } elseif (isset($_GET['paged'])) {
                $paged = absint($_GET['paged']);
            } elseif (isset($_GET['page'])) {
                $paged = absint($_GET['page']);
            }
            $paged = max(1, $paged);

            $guides_args = array(
                'post_type'           => array('post', 'prompt'),
                'post_status'         => 'publish',
                'posts_per_page'      => 30,
                'paged'               => $paged,
                'orderby'             => 'date',
                'order'               => 'DESC',
                'ignore_sticky_posts' => 1,
            );

            $guides_query = new WP_Query($guides_args);

            if ($guides_query->have_posts()) :
            ?>
                <div class="guides-grid" id="guides-grid">
                    <?php
                    while ($guides_query->have_posts()) :
                        $guides_query->the_post();
                        get_template_part('template-parts/content', 'guide-card');
                    endwhile;
                    ?>
                </div>

                <div id="guides-filter-empty" class="guides-filter-empty" style="display: none;">
                    <div class="empty-filter-box">
                        <p class="empty-filter-title"><?php esc_html_e('No articles found in this category.', 'aipromptzyra'); ?></p>
                        <p class="empty-filter-desc"><?php esc_html_e('Try selecting another category or view all prompt guides.', 'aipromptzyra'); ?></p>
                        <button type="button" class="guides-filter-reset-btn" id="guides-filter-reset-btn">
                            <?php esc_html_e('View All Prompts', 'aipromptzyra'); ?>
                        </button>
                    </div>
                </div>

                <?php
                $total_pages = $guides_query->max_num_pages;
                if ($total_pages > 1) :
                    $current_page = $paged;
                ?>
                    <nav class="pagination-wrapper" aria-label="<?php esc_attr_e('Guides Pagination', 'aipromptzyra'); ?>">
                        <ul class="page-numbers-list">
                            <?php if ($current_page > 1) :
                                $prev_link = ($current_page - 1 === 1) ? home_url('/#guides-section') : add_query_arg('paged', $current_page - 1, home_url('/#guides-section'));
                            ?>
                                <li>
                                    <a href="<?php echo esc_url($prev_link); ?>" class="page-number page-number-prev" aria-label="<?php esc_attr_e('Previous page', 'aipromptzyra'); ?>">
                                        &larr; <?php esc_html_e('Previous', 'aipromptzyra'); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <?php
                            for ($i = 1; $i <= $total_pages; $i++) :
                                $page_link = ($i === 1) ? home_url('/#guides-section') : add_query_arg('paged', $i, home_url('/#guides-section'));
                                $is_active = ($i === (int)$current_page);
                            ?>
                                <li>
                                    <?php if ($is_active) : ?>
                                        <span class="page-number page-number-current" aria-current="page"><?php echo $i; ?></span>
                                    <?php else : ?>
                                        <a href="<?php echo esc_url($page_link); ?>" class="page-number" aria-label="<?php printf(esc_attr__('Page %d', 'aipromptzyra'), $i); ?>">
                                            <?php echo $i; ?>
                                        </a>
                                    <?php endif; ?>
                                </li>
                            <?php endfor; ?>

                            <?php if ($current_page < $total_pages) :
                                $next_link = add_query_arg('paged', $current_page + 1, home_url('/#guides-section'));
                            ?>
                                <li>
                                    <a href="<?php echo esc_url($next_link); ?>" class="page-number page-number-next" aria-label="<?php esc_attr_e('Next page', 'aipromptzyra'); ?>">
                                        <?php esc_html_e('Next', 'aipromptzyra'); ?> &rarr;
                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </nav>
                <?php
                endif;
                wp_reset_postdata();
            endif;
        </div>
    </section>

    <!-- 3. AI PROMPT BUILDER -->
    <section id="prompt-builder" class="section builder-section">
        <div class="container">
            <div class="builder-wrapper">
                <!-- Left: Builder Controls -->
                <div class="builder-form-col">
                    <div class="builder-title-row">
                        <div class="builder-icon-box" aria-hidden="true">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                            </svg>
                        </div>
                        <div>
                            <h2 class="builder-title"><?php esc_html_e('AI Prompt Builder', 'aipromptzyra'); ?></h2>
                            <p class="builder-sub"><?php esc_html_e('Create your own custom prompt with easy options. Select your preferences and generate a ready-to-use prompt.', 'aipromptzyra'); ?></p>
                        </div>
                    </div>

                    <form id="aipromptzyra-builder-form" class="builder-form">
                        <div class="builder-grid-fields">
                            <!-- 1. Subject -->
                            <div class="form-group">
                                <label for="field-subject"><?php esc_html_e('Subject', 'aipromptzyra'); ?></label>
                                <select id="field-subject" name="subject">
                                    <option value="Girl" selected><?php esc_html_e('Girl', 'aipromptzyra'); ?></option>
                                    <option value="Boy"><?php esc_html_e('Boy', 'aipromptzyra'); ?></option>
                                    <option value="Couple"><?php esc_html_e('Couple', 'aipromptzyra'); ?></option>
                                    <option value="Family"><?php esc_html_e('Family', 'aipromptzyra'); ?></option>
                                    <option value="Elderly Artisan"><?php esc_html_e('Elderly Artisan', 'aipromptzyra'); ?></option>
                                    <option value="Futuristic Traveler"><?php esc_html_e('Futuristic Traveler', 'aipromptzyra'); ?></option>
                                </select>
                            </div>

                            <!-- 2. Outfit -->
                            <div class="form-group">
                                <label for="field-outfit"><?php esc_html_e('Outfit', 'aipromptzyra'); ?></label>
                                <select id="field-outfit" name="outfit">
                                    <option value="Saree" selected><?php esc_html_e('Saree', 'aipromptzyra'); ?></option>
                                    <option value="Casual Denim"><?php esc_html_e('Casual Denim', 'aipromptzyra'); ?></option>
                                    <option value="Traditional Kurta"><?php esc_html_e('Traditional Kurta', 'aipromptzyra'); ?></option>
                                    <option value="Formal Suit"><?php esc_html_e('Formal Suit', 'aipromptzyra'); ?></option>
                                    <option value="Cyberpunk Armor"><?php esc_html_e('Cyberpunk Armor', 'aipromptzyra'); ?></option>
                                    <option value="Summer Floral Dress"><?php esc_html_e('Summer Floral Dress', 'aipromptzyra'); ?></option>
                                </select>
                            </div>

                            <!-- 3. Background -->
                            <div class="form-group">
                                <label for="field-background"><?php esc_html_e('Background', 'aipromptzyra'); ?></label>
                                <select id="field-background" name="background">
                                    <option value="Nature" selected><?php esc_html_e('Nature', 'aipromptzyra'); ?></option>
                                    <option value="Historic Courtyard"><?php esc_html_e('Historic Courtyard', 'aipromptzyra'); ?></option>
                                    <option value="Neon City Skyline"><?php esc_html_e('Neon City Skyline', 'aipromptzyra'); ?></option>
                                    <option value="Minimal Studio"><?php esc_html_e('Minimal Studio', 'aipromptzyra'); ?></option>
                                    <option value="Festive Lantern Street"><?php esc_html_e('Festive Lantern Street', 'aipromptzyra'); ?></option>
                                    <option value="Misty Mountain Ridge"><?php esc_html_e('Misty Mountain Ridge', 'aipromptzyra'); ?></option>
                                </select>
                            </div>

                            <!-- 4. Style -->
                            <div class="form-group">
                                <label for="field-style"><?php esc_html_e('Style', 'aipromptzyra'); ?></label>
                                <select id="field-style" name="style">
                                    <option value="Cinematic" selected><?php esc_html_e('Cinematic', 'aipromptzyra'); ?></option>
                                    <option value="Editorial Studio"><?php esc_html_e('Editorial Studio', 'aipromptzyra'); ?></option>
                                    <option value="Vintage 35mm"><?php esc_html_e('Vintage 35mm', 'aipromptzyra'); ?></option>
                                    <option value="Fantasy Dreamscape"><?php esc_html_e('Fantasy Dreamscape', 'aipromptzyra'); ?></option>
                                    <option value="Cyberpunk Neon"><?php esc_html_e('Cyberpunk Neon', 'aipromptzyra'); ?></option>
                                    <option value="Oil Painting Artwork"><?php esc_html_e('Oil Painting Artwork', 'aipromptzyra'); ?></option>
                                </select>
                            </div>

                            <!-- 5. Lighting -->
                            <div class="form-group">
                                <label for="field-lighting"><?php esc_html_e('Lighting', 'aipromptzyra'); ?></label>
                                <select id="field-lighting" name="lighting">
                                    <option value="Soft Light" selected><?php esc_html_e('Soft Light', 'aipromptzyra'); ?></option>
                                    <option value="Golden Hour"><?php esc_html_e('Golden Hour', 'aipromptzyra'); ?></option>
                                    <option value="Dramatic Rim Light"><?php esc_html_e('Dramatic Rim Light', 'aipromptzyra'); ?></option>
                                    <option value="Moody Moonlight"><?php esc_html_e('Moody Moonlight', 'aipromptzyra'); ?></option>
                                    <option value="Festive Warm Diyas"><?php esc_html_e('Festive Warm Diyas', 'aipromptzyra'); ?></option>
                                    <option value="Studio Softbox"><?php esc_html_e('Studio Softbox', 'aipromptzyra'); ?></option>
                                </select>
                            </div>

                            <!-- 6. Mood -->
                            <div class="form-group">
                                <label for="field-mood"><?php esc_html_e('Mood', 'aipromptzyra'); ?></label>
                                <select id="field-mood" name="mood">
                                    <option value="Happy" selected><?php esc_html_e('Happy', 'aipromptzyra'); ?></option>
                                    <option value="Romantic"><?php esc_html_e('Romantic', 'aipromptzyra'); ?></option>
                                    <option value="Mysterious"><?php esc_html_e('Mysterious', 'aipromptzyra'); ?></option>
                                    <option value="Peaceful & Calm"><?php esc_html_e('Peaceful & Calm', 'aipromptzyra'); ?></option>
                                    <option value="Confident & Bold"><?php esc_html_e('Confident & Bold', 'aipromptzyra'); ?></option>
                                </select>
                            </div>

                            <!-- 7. Camera Angle -->
                            <div class="form-group">
                                <label for="field-camera"><?php esc_html_e('Camera Angle', 'aipromptzyra'); ?></label>
                                <select id="field-camera" name="camera_angle">
                                    <option value="Portrait" selected><?php esc_html_e('Portrait', 'aipromptzyra'); ?></option>
                                    <option value="Close-up Shot"><?php esc_html_e('Close-up Shot', 'aipromptzyra'); ?></option>
                                    <option value="Medium Shot"><?php esc_html_e('Medium Shot', 'aipromptzyra'); ?></option>
                                    <option value="Wide Angle Landscape"><?php esc_html_e('Wide Angle Landscape', 'aipromptzyra'); ?></option>
                                    <option value="Low Angle Hero"><?php esc_html_e('Low Angle Hero', 'aipromptzyra'); ?></option>
                                </select>
                            </div>

                            <!-- 8. Color Tone -->
                            <div class="form-group">
                                <label for="field-color"><?php esc_html_e('Color Tone', 'aipromptzyra'); ?></label>
                                <select id="field-color" name="color_tone">
                                    <option value="Natural" selected><?php esc_html_e('Natural', 'aipromptzyra'); ?></option>
                                    <option value="Warm Golden"><?php esc_html_e('Warm Golden', 'aipromptzyra'); ?></option>
                                    <option value="Cool Blue Teal"><?php esc_html_e('Cool Blue Teal', 'aipromptzyra'); ?></option>
                                    <option value="Vibrant Saturated"><?php esc_html_e('Vibrant Saturated', 'aipromptzyra'); ?></option>
                                    <option value="Monochrome B&W"><?php esc_html_e('Monochrome B&W', 'aipromptzyra'); ?></option>
                                </select>
                            </div>
                        </div>

                        <!-- Action Buttons -->
                        <div class="builder-actions">
                            <button type="submit" id="btn-generate-prompt" class="btn-primary-purple">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                                <span><?php esc_html_e('Generate Prompt ✨', 'aipromptzyra'); ?></span>
                            </button>
                            <button type="button" id="btn-reset-builder" class="btn-outline-reset">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                                <span><?php esc_html_e('Reset', 'aipromptzyra'); ?></span>
                            </button>
                        </div>
                    </form>
                </div>

                <!-- Right: Visual Preview & Generated Prompt -->
                <div class="builder-output-col">
                    <div class="builder-visual-preview">
                        <img id="builder-preview-img" src="https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp" alt="Generated prompt visual preview" />
                        <button type="button" class="bookmark-btn" aria-label="<?php esc_attr_e('Save generated idea', 'aipromptzyra'); ?>">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                        </button>
                    </div>

                    <div class="builder-result-card">
                        <h3 class="builder-result-title"><?php esc_html_e('Your Generated Prompt', 'aipromptzyra'); ?></h3>
                        <p id="builder-generated-text" class="builder-generated-text">
                            <?php esc_html_e('A beautiful young woman in a traditional saree, standing in a natural outdoor setting with soft cinematic lighting, happy expression, looking at the camera, detailed background with greenery, high quality, realistic, ultra detailed.', 'aipromptzyra'); ?>
                        </p>

                        <div class="builder-result-actions">
                            <button type="button" id="btn-copy-builder-prompt" class="btn-purple-fill">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                                <span><?php esc_html_e('Copy Prompt', 'aipromptzyra'); ?></span>
                            </button>
                            <a id="btn-try-in-gemini" href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-gemini-outline">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                <span><?php esc_html_e('Try in Gemini', 'aipromptzyra'); ?></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- 6. HOW TO USE AI PROMPTS -->
    <section class="section how-to-section">
        <div class="container">
            <div class="how-to-header">
                <h2 class="section-title"><?php esc_html_e('How to Use AI Prompts', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Get amazing results in just 3 simple steps.', 'aipromptzyra'); ?></p>
            </div>

            <div class="how-to-content-row">
                <!-- 3 Steps -->
                <div class="steps-grid">
                    <!-- Step 1 -->
                    <div class="step-card">
                        <div class="step-icon-badge step-icon-1" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                        </div>
                        <div class="step-content">
                            <span class="step-num"><?php esc_html_e('1', 'aipromptzyra'); ?></span>
                            <h3 class="step-title"><?php esc_html_e('Choose a Prompt', 'aipromptzyra'); ?></h3>
                            <p class="step-desc"><?php esc_html_e('Browse or search for your favorite prompt from our collection.', 'aipromptzyra'); ?></p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div class="step-card">
                        <div class="step-icon-badge step-icon-2" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        </div>
                        <div class="step-content">
                            <span class="step-num"><?php esc_html_e('2', 'aipromptzyra'); ?></span>
                            <h3 class="step-title"><?php esc_html_e('Copy the Text', 'aipromptzyra'); ?></h3>
                            <p class="step-desc"><?php esc_html_e('Click on the copy button to copy the prompt to your clipboard.', 'aipromptzyra'); ?></p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div class="step-card">
                        <div class="step-icon-badge step-icon-3" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <div class="step-content">
                            <span class="step-num"><?php esc_html_e('3', 'aipromptzyra'); ?></span>
                            <h3 class="step-title"><?php esc_html_e('Paste & Generate', 'aipromptzyra'); ?></h3>
                            <p class="step-desc"><?php esc_html_e('Paste it in Gemini, ChatGPT or any AI tool and create amazing results.', 'aipromptzyra'); ?></p>
                        </div>
                    </div>
                </div>

                <!-- Robot Visual Callout -->
                <div class="how-to-visual" aria-hidden="true">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/baby-krishna-with-mother-yashoda-prompt-3frame-banner-480x270-1.webp" alt="Creative AI art preview" class="robot-img" />
                    <div class="robot-quote-banner">
                        <p class="quote-headline"><?php esc_html_e("It's that simple!", 'aipromptzyra'); ?></p>
                        <p class="quote-sub"><?php esc_html_e('Start creating your own amazing AI images today.', 'aipromptzyra'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. WHY CHOOSE AIPROMPTZYRA -->
    <section id="why-choose-section" class="section why-choose-section">
        <div class="container">
            <div class="why-choose-editorial-header">
                <span class="editorial-badge"><?php esc_html_e('EDITORIAL PURPOSE & APPROACH', 'aipromptzyra'); ?></span>
                <h2 class="section-title"><?php esc_html_e('Why Choose AIPromptZyra', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle">
                    <?php esc_html_e('Finding prompt text that produces believable photo quality often involves endless trial and error. AIPromptZyra brings together curated prompt formulas, clear photographic settings, and practical guides so you can focus on creating rather than troubleshooting.', 'aipromptzyra'); ?>
                </p>
            </div>

            <div class="why-features-3col">
                <!-- Feature 1: Easy-to-Use Prompts -->
                <div class="feature-card-editorial">
                    <div class="feature-icon feature-icon-purple" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Easy-to-Use Prompts', 'aipromptzyra'); ?></h3>
                    <p class="feature-desc">
                        <?php esc_html_e('Every prompt is written in clear English with separate lens parameters, lighting descriptions, and negative prompts, ready to copy straight into your tool of choice.', 'aipromptzyra'); ?>
                    </p>
                </div>

                <!-- Feature 2: Ideas for Different Styles -->
                <div class="feature-card-editorial">
                    <div class="feature-icon feature-icon-indigo" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="3" width="7" height="7" rx="1"></rect><rect x="14" y="14" width="7" height="7" rx="1"></rect><rect x="3" y="14" width="7" height="7" rx="1"></rect></svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Ideas for Different Styles', 'aipromptzyra'); ?></h3>
                    <p class="feature-desc">
                        <?php esc_html_e('Explore a varied catalog spanning couple portraits, festive traditional attire, urban street photography, and cinematic lighting setups for everyday creative inspiration.', 'aipromptzyra'); ?>
                    </p>
                </div>

                <!-- Feature 3: Guidance You Can Customize -->
                <div class="feature-card-editorial">
                    <div class="feature-icon feature-icon-violet" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
                    </div>
                    <h3 class="feature-title"><?php esc_html_e('Guidance You Can Customize', 'aipromptzyra'); ?></h3>
                    <p class="feature-desc">
                        <?php esc_html_e('Rather than treating prompts as rigid formulas, our companion notes explain how changing color palettes, camera lenses, or backdrops alters the final mood.', 'aipromptzyra'); ?>
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. JOIN OUR COMMUNITY -->
    <section id="community-section" class="section community-section">
        <div class="container">
            <div class="section-center-header">
                <span class="community-badge"><?php esc_html_e('AIPROMPTZYRA NETWORK', 'aipromptzyra'); ?></span>
                <h2 class="section-title"><?php esc_html_e('Join Our Community', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Stay connected and get the latest viral AI photo editing prompts.', 'aipromptzyra'); ?></p>
            </div>

            <div class="community-grid">
                <!-- Instagram Card -->
                <a href="https://www.instagram.com/aipromptzyra" target="_blank" rel="noopener noreferrer" class="community-card card-instagram">
                    <div class="community-card-top">
                        <div class="community-icon-wrapper ig-icon-bg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </div>
                        <span class="community-card-tag"><?php esc_html_e('Visual Gallery', 'aipromptzyra'); ?></span>
                    </div>
                    <div class="community-card-body">
                        <h3 class="community-card-title"><?php esc_html_e('Instagram — Follow us', 'aipromptzyra'); ?></h3>
                        <p class="community-card-desc"><?php esc_html_e('Explore visual comparisons, side-by-side prompt results, and trending AI photography reels.', 'aipromptzyra'); ?></p>
                    </div>
                    <div class="community-card-footer">
                        <span><?php esc_html_e('Follow us', 'aipromptzyra'); ?></span>
                        <span class="community-arrow">&nearr;</span>
                    </div>
                </a>

                <!-- Telegram Card -->
                <a href="https://t.me/aipromptzyra" target="_blank" rel="noopener noreferrer" class="community-card card-telegram">
                    <div class="community-card-top">
                        <div class="community-icon-wrapper tg-icon-bg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                        </div>
                        <span class="community-card-tag"><?php esc_html_e('Instant Alerts', 'aipromptzyra'); ?></span>
                    </div>
                    <div class="community-card-body">
                        <h3 class="community-card-title"><?php esc_html_e('Telegram — Follow our channel', 'aipromptzyra'); ?></h3>
                        <p class="community-card-desc"><?php esc_html_e('Get instant notifications, viral prompt drops, copy-ready text, and direct channel discussions.', 'aipromptzyra'); ?></p>
                    </div>
                    <div class="community-card-footer">
                        <span><?php esc_html_e('Follow our channel', 'aipromptzyra'); ?></span>
                        <span class="community-arrow">&nearr;</span>
                    </div>
                </a>

                <!-- WhatsApp Channel Card -->
                <a href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u" target="_blank" rel="noopener noreferrer" class="community-card card-whatsapp">
                    <div class="community-card-top">
                        <div class="community-icon-wrapper" style="background:#25D366; color:white;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
                        </div>
                        <span class="community-card-tag"><?php esc_html_e('Official Channel', 'aipromptzyra'); ?></span>
                    </div>
                    <div class="community-card-body">
                        <h3 class="community-card-title"><?php esc_html_e('WhatsApp — Subscribe channel', 'aipromptzyra'); ?></h3>
                        <p class="community-card-desc"><?php esc_html_e('Subscribe to our official WhatsApp Channel for prompt tips, curated updates, and creative workflows.', 'aipromptzyra'); ?></p>
                    </div>
                    <div class="community-card-footer">
                        <span><?php esc_html_e('Subscribe channel', 'aipromptzyra'); ?></span>
                        <span class="community-arrow">&nearr;</span>
                    </div>
                </a>
            </div>
        </div>
        </div>
    </section>

    <!-- 9. FREQUENTLY ASKED QUESTIONS ABOUT AIPROMPTZYRA -->
    <section id="faq-section" class="section faq-section">
        <div class="container faq-container">
            <div class="section-center-header">
                <span class="faq-badge"><?php esc_html_e('GOT QUESTIONS?', 'aipromptzyra'); ?></span>
                <h2 class="section-title"><?php esc_html_e('Frequently Asked Questions About AIPromptZyra', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Everything you need to know about discovering, customizing, and generating realistic AI photos.', 'aipromptzyra'); ?></p>
            </div>

            <!-- FAQ Accordion -->
            <div class="faq-accordion-list">
                <!-- FAQ 1 -->
                <details class="faq-item" open>
                    <summary class="faq-question">
                        <span><?php esc_html_e('What is AIPromptZyra?', 'aipromptzyra'); ?></span>
                        <span class="faq-icon" aria-hidden="true">&plus;</span>
                    </summary>
                    <div class="faq-answer">
                        <p><?php esc_html_e('AIPromptZyra is a free creative resource offering curated, copy-ready AI prompts, step-by-step guides, and photography prompt formulas. Our mission is to make visual AI generation accessible and straightforward for creators, photographers, and hobbyists of all skill levels.', 'aipromptzyra'); ?></p>
                    </div>
                </details>

                <!-- FAQ 2 -->
                <details class="faq-item">
                    <summary class="faq-question">
                        <span><?php esc_html_e('How do I use AI prompts from this website?', 'aipromptzyra'); ?></span>
                        <span class="faq-icon" aria-hidden="true">&plus;</span>
                    </summary>
                    <div class="faq-answer">
                        <p><?php esc_html_e('Using our prompts is simple: browse any category or search for an aesthetic you like, click the "Copy Prompt" button on any card to copy the formula to your clipboard, and paste it directly into your preferred AI image generator (like Google Gemini, ChatGPT, or Midjourney).', 'aipromptzyra'); ?></p>
                    </div>
                </details>

                <!-- FAQ 3 -->
                <details class="faq-item">
                    <summary class="faq-question">
                        <span><?php esc_html_e('Which AI tools do your prompts support?', 'aipromptzyra'); ?></span>
                        <span class="faq-icon" aria-hidden="true">&plus;</span>
                    </summary>
                    <div class="faq-answer">
                        <p><?php esc_html_e('Our prompts are crafted to work seamlessly across major AI platforms, including Google Gemini (Imagen 3), OpenAI ChatGPT (DALL-E 3), Midjourney v6, Bing Image Creator / Microsoft Designer, and Stable Diffusion. Specific recommended tools and camera settings are listed on each prompt.', 'aipromptzyra'); ?></p>
                    </div>
                </details>

                <!-- FAQ 4 -->
                <details class="faq-item">
                    <summary class="faq-question">
                        <span><?php esc_html_e('How do I copy and customize prompts for my needs?', 'aipromptzyra'); ?></span>
                        <span class="faq-icon" aria-hidden="true">&plus;</span>
                    </summary>
                    <div class="faq-answer">
                        <p><?php esc_html_e('After copying a prompt, you can easily adapt descriptive elements like hair style, clothing color, time of day, environment, and mood. You can also use our interactive AI Prompt Builder on the homepage to generate custom combinations with tailored subjects, outfits, and camera angles.', 'aipromptzyra'); ?></p>
                    </div>
                </details>

                <!-- FAQ 5 -->
                <details class="faq-item">
                    <summary class="faq-question">
                        <span><?php esc_html_e('Are the prompts on AIPromptZyra free to use?', 'aipromptzyra'); ?></span>
                        <span class="faq-icon" aria-hidden="true">&plus;</span>
                    </summary>
                    <div class="faq-answer">
                        <p><?php esc_html_e('Yes, all prompts and tutorials published on AIPromptZyra are 100% free to copy and use for personal, social media, and commercial creative workflows without any subscription fees or attribution requirements.', 'aipromptzyra'); ?></p>
                    </div>
                </details>

                <!-- FAQ 6 -->
                <details class="faq-item">
                    <summary class="faq-question">
                        <span><?php esc_html_e('How can I get better, more realistic AI-generated results?', 'aipromptzyra'); ?></span>
                        <span class="faq-icon" aria-hidden="true">&plus;</span>
                    </summary>
                    <div class="faq-answer">
                        <p><?php esc_html_e('For true-to-life results, specify real photographic details: mention prime lenses (e.g., 50mm or 85mm f/1.4), describe soft natural lighting or golden hour rim light, and explicitly state natural skin texture with fine pores while avoiding generic buzzwords like "hyperrealistic".', 'aipromptzyra'); ?></p>
                    </div>
                </details>
            </div>

            <!-- FAQ Schema JSON-LD -->
            <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is AIPromptZyra?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AIPromptZyra is a free creative resource offering curated, copy-ready AI prompts, step-by-step guides, and photography prompt formulas. Our mission is to make visual AI generation accessible and straightforward for creators, photographers, and hobbyists of all skill levels."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I use AI prompts from this website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Using our prompts is simple: browse any category or search for an aesthetic you like, click the Copy Prompt button on any card to copy the formula to your clipboard, and paste it directly into your preferred AI image generator (like Google Gemini, ChatGPT, or Midjourney)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which AI tools do your prompts support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our prompts are crafted to work seamlessly across major AI platforms, including Google Gemini (Imagen 3), OpenAI ChatGPT (DALL-E 3), Midjourney v6, Bing Image Creator / Microsoft Designer, and Stable Diffusion."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I copy and customize prompts for my needs?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After copying a prompt, you can easily adapt descriptive elements like hair style, clothing color, time of day, environment, and mood. You can also use our interactive AI Prompt Builder on the homepage to generate custom combinations with tailored subjects, outfits, and camera angles."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the prompts on AIPromptZyra free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, all prompts and tutorials published on AIPromptZyra are 100% free to copy and use for personal, social media, and commercial creative workflows without any subscription fees or attribution requirements."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I get better, more realistic AI-generated results?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For true-to-life results, specify real photographic details: mention prime lenses (e.g., 50mm or 85mm f/1.4), describe soft natural lighting or golden hour rim light, and explicitly state natural skin texture with fine pores while avoiding generic buzzwords like hyperrealistic."
                  }
                }
              ]
            }
            </script>
        </div>
    </section>

    <!-- 10. OWNER PROFILE CARD SECTION (Immediately before footer) -->
    <section id="author-card-section" class="section author-card-section">
        <div class="container">
            <div class="author-profile-card">
                <!-- Circular Owner Photo with Orange Accent Border -->
                <div class="author-photo-wrapper">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/Zyra-Ansari.jpg" alt="Zyra Ansari" class="author-photo" />
                    <span class="author-verified-badge" title="<?php esc_attr_e('Verified Owner', 'aipromptzyra'); ?>">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </span>
                </div>

                <div class="author-badge-pill"><?php esc_html_e('Owner', 'aipromptzyra'); ?></div>
                <h3 class="author-name"><?php esc_html_e('Zyra Ansari', 'aipromptzyra'); ?></h3>
                <p class="author-role"><?php esc_html_e('Owner, AIPromptZyra', 'aipromptzyra'); ?></p>

                <p class="author-bio">
                    <?php esc_html_e('Zyra Ansari is the Owner of AIPromptZyra. She oversees the platform\'s vision and creative prompt collections for Google Gemini, ChatGPT, and Midjourney, helping creators worldwide turn imaginative concepts into realistic, high-definition AI imagery.', 'aipromptzyra'); ?>
                </p>

                <!-- Official Social Links for Zyra Ansari -->
                <div class="owner-social-links" style="display:flex; justify-content:center; align-items:center; gap:12px; margin: 16px 0 24px;">
                    <a href="https://www.instagram.com/aipromptzyra" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Instagram" style="width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:#f1f5f9; color:#475569; transition:all 0.2s;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://t.me/aipromptzyra" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Telegram" style="width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:#f1f5f9; color:#475569; transition:all 0.2s;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                    <a href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="WhatsApp Channel" style="width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; background:#f1f5f9; color:#475569; transition:all 0.2s;">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
                    </a>
                </div>

                <a href="#guides-section" class="btn-author-guides">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    <span><?php esc_html_e('View All Guides', 'aipromptzyra'); ?></span>
                    <span class="btn-arrow">&rarr;</span>
                </a>
            </div>
        </div>
    </section>

</main><!-- #primary -->

<?php get_footer(); ?>
