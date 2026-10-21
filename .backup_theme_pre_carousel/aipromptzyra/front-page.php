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

                <!-- Popular Search Pills -->
                <div class="popular-tags-wrapper">
                    <span class="popular-label"><?php esc_html_e('Popular:', 'aipromptzyra'); ?></span>
                    <div class="popular-pills">
                        <?php
                        $popular_tags = array('Girl Portrait', 'Couple Photo', 'Festival', 'Saree', 'Cinematic', 'Family', 'AI Art');
                        foreach ($popular_tags as $tag) :
                        ?>
                            <a href="<?php echo esc_url(home_url('/?s=' . urlencode($tag))); ?>" class="tag-pill">
                                <?php echo esc_html($tag); ?>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>

            <!-- Hero Image Collage -->
            <div class="hero-collage" aria-hidden="true">
                <div class="collage-card card-boy">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80" alt="Stylish boy AI portrait" loading="eager" />
                </div>
                <div class="collage-card card-saree">
                    <img src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&auto=format&fit=crop&q=80" alt="Saree ethnic AI portrait" loading="eager" />
                </div>
                <div class="collage-card card-main-girl">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=85" alt="AIPromptzyra featured AI portrait" loading="eager" />
                </div>
                <div class="collage-card card-couple">
                    <img src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=400&auto=format&fit=crop&q=80" alt="Romantic couple AI portrait" loading="lazy" />
                </div>
                <div class="collage-card card-landscape">
                    <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&auto=format&fit=crop&q=80" alt="Fantasy landscape AI art" loading="lazy" />
                </div>
                <div class="collage-badge-sticker">
                    <span><?php esc_html_e('Turn Ideas into Amazing AI Images', 'aipromptzyra'); ?></span>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. EXPLORE PROMPTS BY CATEGORY -->
    <section id="categories-section" class="section categories-section">
        <div class="container">
            <div class="section-header-row">
                <div>
                    <h2 class="section-title"><?php esc_html_e('Explore Prompts by Category', 'aipromptzyra'); ?></h2>
                    <p class="section-subtitle"><?php esc_html_e('Find the perfect prompt for every occasion, style and idea.', 'aipromptzyra'); ?></p>
                </div>
                <a href="#categories-section" class="section-link">
                    <?php esc_html_e('View All Categories', 'aipromptzyra'); ?> &rarr;
                </a>
            </div>

            <div class="category-grid category-grid-3col">
                <?php
                $categories_data = array(
                    array(
                        'slug'     => 'trending-prompts',
                        'name'     => 'Trending Prompts',
                        'subtitle' => 'Viral & Popular Now',
                        'img'      => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
                        'count'    => '46 Prompts',
                    ),
                    array(
                        'slug'     => 'couple-prompts',
                        'name'     => 'Couple Prompts',
                        'subtitle' => 'Romantic & Creative',
                        'img'      => 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=500&auto=format&fit=crop&q=80',
                        'count'    => '38 Prompts',
                    ),
                    array(
                        'slug'     => 'ai-photo-prompts',
                        'name'     => 'AI Photo Prompts',
                        'subtitle' => 'Realistic Portraits & Edits',
                        'img'      => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
                        'count'    => '52 Prompts',
                    ),
                );

                foreach ($categories_data as $cat) :
                    $term_link = get_term_link($cat['slug'], 'prompt_category');
                    $cat_url = (!is_wp_error($term_link)) ? $term_link : home_url('/?category=' . urlencode($cat['slug']) . '#featured-prompts');
                ?>
                    <a href="<?php echo esc_url($cat_url); ?>" class="category-card" data-category-slug="<?php echo esc_attr($cat['slug']); ?>">
                        <div class="category-card-img-wrapper">
                            <img src="<?php echo esc_url($cat['img']); ?>" alt="<?php echo esc_attr($cat['name']); ?>" loading="lazy" />
                            <button type="button" class="bookmark-btn" aria-label="<?php esc_attr_e('Bookmark category', 'aipromptzyra'); ?>">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                            </button>
                            <span class="card-arrow-circle" aria-hidden="true">&rarr;</span>
                        </div>
                        <div class="category-card-info">
                            <h3 class="category-name"><?php echo esc_html($cat['name']); ?></h3>
                            <p class="category-sub"><?php echo esc_html($cat['subtitle']); ?></p>
                        </div>
                    </a>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- 3. LATEST GUIDES & TUTORIALS (30 published articles per page + functional pagination) -->
    <section id="guides-section" class="section guides-section">
        <div class="container">
            <div class="section-header-row">
                <div>
                    <h2 class="section-title"><?php esc_html_e('Latest Guides & Tutorials', 'aipromptzyra'); ?></h2>
                    <p class="section-subtitle"><?php esc_html_e('Helpful articles to improve your AI skills and get better results.', 'aipromptzyra'); ?></p>
                </div>
                <a href="<?php echo esc_url(home_url('/guides/')); ?>" class="section-link">
                    <?php esc_html_e('View All Guides', 'aipromptzyra'); ?> &rarr;
                </a>
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
                <div class="guides-grid">
                    <?php
                    while ($guides_query->have_posts()) :
                        $guides_query->the_post();
                        get_template_part('template-parts/content', 'guide-card');
                    endwhile;
                    ?>
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
            else :
                // Curated library of distinct published articles & tutorials
                $curated_articles = array(
                    array('title' => 'Gemini Imagen 3 Prompting Masterclass: Photorealistic Portraits', 'desc' => 'Deep-dive into aperture settings, natural skin texture prompts, and lighting keywords for Google Gemini.', 'date' => 'Jan 15, 2026', 'img' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/gemini-imagen-3-prompting-masterclass/')),
                    array('title' => 'Indian Traditional Wedding Prompt for Gemini AI (2026)', 'desc' => 'Royal groom sherwani and bridal crimson lehenga portraits in ornate mandap palace courtyards.', 'date' => 'Jan 12, 2026', 'img' => 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/indian-wedding-photo-prompt-for-gemini/')),
                    array('title' => 'How to Write Better AI Prompts: Beginner to Pro Guide', 'desc' => 'Step-by-step framework to engineer concise, high-converting prompts for image generators.', 'date' => 'Jan 10, 2026', 'img' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/guides/how-to-write-better-ai-prompts/')),
                    array('title' => 'Gemini vs ChatGPT for Image Prompts: Comprehensive Comparison', 'desc' => 'A practical side-by-side comparison of prompt adherence, rendering fidelity, and facial symmetry.', 'date' => 'Jan 6, 2026', 'img' => 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/guides/gemini-vs-chatgpt-image-prompts/')),
                    array('title' => 'Best Camera Angles for Natural AI Portraits', 'desc' => 'Master low angle hero shots, 3/4 profiles, and eye-level framing to enhance visual depth.', 'date' => 'Jan 3, 2026', 'img' => 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/guides/camera-angles-ai-portraits/')),
                    array('title' => 'Festival Prompt Ideas: Indian & Global Celebrations', 'desc' => 'Creative prompt concepts for Diwali, Eid, Christmas, and Holi featuring atmospheric bokeh and diyas.', 'date' => 'Dec 28, 2025', 'img' => 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/guides/festival-prompt-ideas/')),
                    array('title' => 'Practical Tips to Make AI Images Look Truly Photorealistic', 'desc' => 'Avoid the plastic skin look with optical lens specifications, raw sensor ISO, and micro-texture keywords.', 'date' => 'Dec 20, 2025', 'img' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/guides/tips-for-realistic-ai-images/')),
                    array('title' => 'AI Video Prompts Guide: Runway Gen-3 and Luma Tips', 'desc' => 'Translate still photographic prompt recipes into fluid camera movements and cinematic 24fps motion.', 'date' => 'Dec 15, 2025', 'img' => 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/guides/ai-video-prompts-guide/')),
                    array('title' => '8K Editorial Studio Portrait Prompts & Lighting Recipes', 'desc' => 'Studio fashion lighting setups with dual diffused softboxes and true-to-life skin tones.', 'date' => 'Dec 10, 2025', 'img' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/editorial-studio-portrait/')),
                    array('title' => 'Romantic Couple Golden Hour Photography Prompts', 'desc' => 'Heartwarming couple photoshoots in wildflower mountain meadows bathed in golden sunset light.', 'date' => 'Dec 5, 2025', 'img' => 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/romantic-couple-golden-hour/')),
                    array('title' => 'Natural Sunlight Window Portraits in Midjourney & Gemini', 'desc' => 'Soft morning window illumination casting gentle diagonal shadows with authentic expressions.', 'date' => 'Dec 1, 2025', 'img' => 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/sunlight-window-portrait/')),
                    array('title' => 'Cinematic Rainy Twilight Street Photography Prompts', 'desc' => 'Atmospheric teal-orange color grading on rain-slicked city streets with realistic reflections.', 'date' => 'Nov 26, 2025', 'img' => 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/rainy-street-portrait/')),
                    array('title' => 'Traditional Royal Silk Saree AI Portrait Formulas', 'desc' => 'Intricate gold zari embroidery, heritage temple architecture, and warm morning ambient light.', 'date' => 'Nov 20, 2025', 'img' => 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/traditional-silk-saree/')),
                    array('title' => 'Cyberpunk Tokyo Neon Rain Alley AI Concept Art', 'desc' => 'Hyper-detailed futuristic aesthetic with glowing neon kanji billboards and reflective wet asphalt.', 'date' => 'Nov 15, 2025', 'img' => 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/cyberpunk-neon-portrait/')),
                    array('title' => 'Vintage 1970s 35mm Analog Film Aesthetic Prompts', 'desc' => 'Warm Kodachrome color science, nostalgic film grain, and retro flared sunlight compositions.', 'date' => 'Nov 10, 2025', 'img' => 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/vintage-35mm-film/')),
                    array('title' => 'Black and White Monochromatic Fine Art Studio Portraits', 'desc' => 'Dramatic chiaroscuro shadow control, sculpted rim lighting, and emotional black-and-white tonality.', 'date' => 'Nov 5, 2025', 'img' => 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/monochrome-fine-art/')),
                    array('title' => 'Futuristic Sci-Fi Space Explorer Conceptual Art', 'desc' => 'High-tech pressurized spacesuit with holographic visor displays against martian landscape.', 'date' => 'Oct 30, 2025', 'img' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/sci-fi-explorer/')),
                    array('title' => 'Nordic Minimalist Cozy Coffee Shop Lifestyle Prompts', 'desc' => 'Scandinavian clean interior design, ceramic mug steam, wool sweaters, and calm natural light.', 'date' => 'Oct 25, 2025', 'img' => 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/nordic-coffee-shop/')),
                    array('title' => 'Ethereal Forest Fantasy Dreamscape Masterclass', 'desc' => 'Sunlight rays piercing ancient moss-draped redwoods with whimsical bioluminescent flora.', 'date' => 'Oct 20, 2025', 'img' => 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/fantasy-dreamscape/')),
                    array('title' => 'Moody Moonlight Misty Mountain Solitude Portraits', 'desc' => 'Silhouetted wanderer beneath vast starry skies and cascading alpine mist at high elevation.', 'date' => 'Oct 15, 2025', 'img' => 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/misty-mountain-solitude/')),
                    array('title' => 'Classic Vintage European Street Cafe Aesthetic', 'desc' => 'Cobblestone streets, wrought iron outdoor cafe seating, and warm afternoon Parisian glow.', 'date' => 'Oct 10, 2025', 'img' => 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/vintage-european-cafe/')),
                    array('title' => 'High-Fashion Avant-Garde Runway Studio Prompts', 'desc' => 'Sculptural architectural silhouettes, bold monochromatic palettes, and dynamic editorial poses.', 'date' => 'Oct 5, 2025', 'img' => 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/avant-garde-fashion/')),
                    array('title' => 'Macro Eye Portrait Photography in Imagen 3', 'desc' => 'Stunning macro iris reflections, distinct eyelashes, and fine skin details rendered with 100mm optics.', 'date' => 'Sep 30, 2025', 'img' => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/macro-eye-portrait/')),
                    array('title' => 'Diwali Festive Golden Diya Portraits for Couples', 'desc' => 'Sparkling traditional diyas, marigold garlands, and authentic festive warmth between loved ones.', 'date' => 'Sep 25, 2025', 'img' => 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/diwali-festive-couple/')),
                    array('title' => 'Sunset Beach Silhouette Couple Portrait Formulas', 'desc' => 'Backlit couple walking hand-in-hand along the tide line with golden sunset water reflections.', 'date' => 'Sep 20, 2025', 'img' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/sunset-beach-silhouette/')),
                    array('title' => 'Corporate Professional Executive Headshot Prompts', 'desc' => 'Clean corporate studio lighting, tailored navy suits, confident posture, and modern blur background.', 'date' => 'Sep 15, 2025', 'img' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/corporate-headshot/')),
                    array('title' => 'Retro 1990s Japanese City Pop Film Photography', 'desc' => 'Nostalgic film tones, neon evening signage, retro cassette players, and lo-fi aesthetic warmth.', 'date' => 'Sep 10, 2025', 'img' => 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/retro-city-pop/')),
                    array('title' => 'Autumn Warm Foliage Scenic Park Portraits', 'desc' => 'Crisp amber and crimson fall foliage, cozy wool scarves, and golden late-afternoon sun rays.', 'date' => 'Sep 5, 2025', 'img' => 'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/autumn-foliage-portrait/')),
                    array('title' => 'Architectural Drone Perspective AI Cityscape Prompts', 'desc' => 'Sweeping bird-eye aerial photography of futuristic sustainable metropolis with lush rooftop gardens.', 'date' => 'Aug 30, 2025', 'img' => 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/aerial-cityscape/')),
                    array('title' => 'Neon Cybernetic Samurai Character Concept Guide', 'desc' => 'Katana reflections, glowing crest accents, and cinematic rain lighting formulas for character designers.', 'date' => 'Aug 25, 2025', 'img' => 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/cyberpunk-samurai/')),
                    array('title' => 'Bohemian Desert Sunset Festival Aesthetic Prompts', 'desc' => 'Golden dune sunset, flowing bohemian lace, and dramatic sun flares captured with warm prime optics.', 'date' => 'Aug 20, 2025', 'img' => 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/desert-sunset-festival/')),
                    array('title' => 'Vintage Royal Indian Palace Courtyard Portraits', 'desc' => 'Carved sandstone arches, water fountains, and opulent velvet sherwanis in heritage Rajasthan palaces.', 'date' => 'Aug 15, 2025', 'img' => 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/royal-palace-courtyard/')),
                    array('title' => 'Minimalist Architectural Concrete & Glass Interior Guides', 'desc' => 'Brutalist polished concrete, floor-to-ceiling glass pavilions, and sculptural shadow plays in modern architecture.', 'date' => 'Aug 10, 2025', 'img' => 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/minimalist-architecture/')),
                    array('title' => 'Golden Hour Wildflower Meadow Candid Couples Guide', 'desc' => 'Soft backlight catching golden hair, organic laughter, and natural intimacy in blossoming alpine meadows.', 'date' => 'Aug 5, 2025', 'img' => 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/wildflower-meadow-couples/')),
                    array('title' => 'Deep Underwater Bioluminescent Marine Fantasy Guide', 'desc' => 'Crystalline blue water depths, caustic sun reflections, and glowing jellyfish light trails around divers.', 'date' => 'Jul 30, 2025', 'img' => 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80', 'url' => home_url('/prompts/underwater-bioluminescent/')),
                );

                // Paginate the curated articles list (30 per page)
                $per_page = 30;
                $total_items = count($curated_articles);
                $total_pages = max(1, ceil($total_items / $per_page));
                $start_index = ($paged - 1) * $per_page;
                $page_articles = array_slice($curated_articles, $start_index, $per_page);
                ?>
                <div class="guides-grid">
                    <?php foreach ($page_articles as $g) : ?>
                        <article class="guide-card">
                            <div class="guide-card-media">
                                <a href="<?php echo esc_url($g['url']); ?>">
                                    <img src="<?php echo esc_url($g['img']); ?>" alt="<?php echo esc_attr($g['title']); ?>" loading="lazy" />
                                </a>
                                <button type="button" class="bookmark-btn" aria-label="<?php esc_attr_e('Save guide', 'aipromptzyra'); ?>">
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                </button>
                            </div>
                            <div class="guide-card-body">
                                <h3 class="guide-card-title">
                                    <a href="<?php echo esc_url($g['url']); ?>"><?php echo esc_html($g['title']); ?></a>
                                </h3>
                                <p class="guide-card-desc"><?php echo esc_html($g['desc']); ?></p>
                                <div class="guide-card-footer">
                                    <span class="guide-date"><?php echo esc_html($g['date']); ?></span>
                                    <a href="<?php echo esc_url($g['url']); ?>" class="guide-read-link">
                                        <?php esc_html_e('Read More', 'aipromptzyra'); ?> &rarr;
                                    </a>
                                </div>
                            </div>
                        </article>
                    <?php endforeach; ?>
                </div>

                <?php if ($total_pages > 1) : ?>
                    <nav class="pagination-wrapper" aria-label="<?php esc_attr_e('Guides Pagination', 'aipromptzyra'); ?>">
                        <ul class="page-numbers-list">
                            <?php if ($paged > 1) :
                                $prev_link = ($paged - 1 === 1) ? home_url('/#guides-section') : add_query_arg('paged', $paged - 1, home_url('/#guides-section'));
                            ?>
                                <li>
                                    <a href="<?php echo esc_url($prev_link); ?>" class="page-number page-number-prev">
                                        &larr; <?php esc_html_e('Previous', 'aipromptzyra'); ?>
                                    </a>
                                </li>
                            <?php endif; ?>

                            <?php for ($i = 1; $i <= $total_pages; $i++) :
                                $page_link = ($i === 1) ? home_url('/#guides-section') : add_query_arg('paged', $i, home_url('/#guides-section'));
                                $is_active = ($i === (int)$paged);
                            ?>
                                <li>
                                    <?php if ($is_active) : ?>
                                        <span class="page-number page-number-current"><?php echo $i; ?></span>
                                    <?php else : ?>
                                        <a href="<?php echo esc_url($page_link); ?>" class="page-number"><?php echo $i; ?></a>
                                    <?php endif; ?>
                                </li>
                            <?php endfor; ?>

                            <?php if ($paged < $total_pages) :
                                $next_link = add_query_arg('paged', $paged + 1, home_url('/#guides-section'));
                            ?>
                                <li>
                                    <a href="<?php echo esc_url($next_link); ?>" class="page-number page-number-next">
                                        <?php esc_html_e('Next', 'aipromptzyra'); ?> &rarr;
                                    </a>
                                </li>
                            <?php endif; ?>
                        </ul>
                    </nav>
                <?php endif; ?>
            <?php endif; ?>
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
                        <img id="builder-preview-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80" alt="Generated prompt visual preview" />
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
                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=450&auto=format&fit=crop&q=80" alt="Cute AI robot assistant" class="robot-img" />
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
                <!-- Facebook Card -->
                <a href="https://www.facebook.com/profile.php?id=61594710183320" target="_blank" rel="noopener noreferrer" class="community-card card-facebook">
                    <div class="community-card-top">
                        <div class="community-icon-wrapper fb-icon-bg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </div>
                        <span class="community-card-tag"><?php esc_html_e('Active Page', 'aipromptzyra'); ?></span>
                    </div>
                    <div class="community-card-body">
                        <h3 class="community-card-title"><?php esc_html_e('Facebook — Connect with us', 'aipromptzyra'); ?></h3>
                        <p class="community-card-desc"><?php esc_html_e('Join our Facebook community for daily curated prompt inspiration, photo editing ideas, and updates.', 'aipromptzyra'); ?></p>
                    </div>
                    <div class="community-card-footer">
                        <span><?php esc_html_e('Connect with us', 'aipromptzyra'); ?></span>
                        <span class="community-arrow">&nearr;</span>
                    </div>
                </a>

                <!-- Telegram Card -->
                <a href="https://t.me/+19kPqGdfFAI4Y2Vl" target="_blank" rel="noopener noreferrer" class="community-card card-telegram">
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

                <!-- Instagram Card -->
                <a href="https://www.instagram.com/aipromptzyra/" target="_blank" rel="noopener noreferrer" class="community-card card-instagram">
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

    <!-- 10. AUTHOR PROFILE CARD SECTION (Immediately before footer) -->
    <section id="author-card-section" class="section author-card-section">
        <div class="container">
            <div class="author-profile-card">
                <!-- Circular Author Photo with Orange Accent Border -->
                <div class="author-photo-wrapper">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=250&auto=format&fit=crop&q=80" alt="Hafizur Rahman — Author at AIPromptZyra" class="author-photo" />
                    <span class="author-verified-badge" title="<?php esc_attr_e('Verified Author', 'aipromptzyra'); ?>">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </span>
                </div>

                <div class="author-badge-pill"><?php esc_html_e('Verified Author', 'aipromptzyra'); ?></div>
                <h3 class="author-name"><?php esc_html_e('Hafizur Rahman', 'aipromptzyra'); ?></h3>
                <p class="author-role"><?php esc_html_e('Founder & Lead AI Prompt Curator, AIPromptZyra', 'aipromptzyra'); ?></p>

                <p class="author-bio">
                    <?php esc_html_e('Hafizur Rahman is the creator of AIPromptZyra and a dedicated visual AI prompt researcher. He specializes in designing, testing, and refining photographic prompt formulas for Google Gemini, ChatGPT, and Midjourney, helping creators worldwide turn imaginative concepts into realistic, high-definition AI imagery.', 'aipromptzyra'); ?>
                </p>

                <a href="<?php echo esc_url(home_url('/author/hafizur-rahman/')); ?>" class="btn-author-guides">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    <span><?php esc_html_e('View All Guides', 'aipromptzyra'); ?></span>
                    <span class="btn-arrow">&rarr;</span>
                </a>
            </div>
        </div>
    </section>

</main><!-- #primary -->

<?php get_footer(); ?>
