<?php
/**
 * Template Name: About Us Page
 * Description: Editorial About Us template for AIPromptZyra featuring the 8 core sections and verified author team.
 *
 * @package AIPromptzyra
 * @version 1.0.2
 */

get_header(); ?>

<main id="primary" class="site-main about-page-main">
    <?php
    while (have_posts()) :
        the_post();
    ?>
    <div class="container about-container">
        <!-- 1. Header & ABOUT AIPROMPTZYRA -->
        <header class="about-hero-header">
            <div class="about-kicker-pill">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#7C3AED" aria-hidden="true">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                <span><?php esc_html_e('DISCOVERING MEANINGFUL AI CREATIVE FORMULAS', 'aipromptzyra'); ?></span>
            </div>

            <h1 class="about-title">
                <?php esc_html_e('About', 'aipromptzyra'); ?> <span class="gradient-text"><?php esc_html_e('AIPromptZyra', 'aipromptzyra'); ?></span>
            </h1>

            <p class="about-lead">
                <?php esc_html_e('AIPromptZyra is an independent prompt engineering research and tutorial resource. We document, refine, and publish copy-ready prompts for multimodal generative models—including Google Gemini, OpenAI ChatGPT, and Midjourney—so artists, designers, and enthusiasts can achieve consistent, photorealistic results without endless guesswork.', 'aipromptzyra'); ?>
            </p>
        </header>

        <!-- 2. OUR STORY -->
        <section class="about-section story-section">
            <div class="section-card">
                <div class="section-card-kicker"><?php esc_html_e('Our Motivation & Background', 'aipromptzyra'); ?></div>
                <h2 class="section-card-title"><?php esc_html_e('Our Story', 'aipromptzyra'); ?></h2>
                <div class="section-card-text">
                    <p>
                        <?php esc_html_e('When generative image tools emerged, millions of creators faced the same hurdle: short, conversational prompts frequently produced plastic textures, distorted anatomies, or flat compositions. Reaching photographic realism required specific optical keywords, sensor physics, lighting direction, and culturally grounded wardrobe descriptions.', 'aipromptzyra'); ?>
                    </p>
                    <p>
                        <?php esc_html_e('AIPromptZyra was started to bridge this gap. Rather than aggregating untested keyword lists, we set out to build a clean, searchable index of prompt formulas and practical tutorials. Each guide breaks down why specific parameters work, giving readers both immediate copy-ready prompts and the conceptual principles needed to build their own.', 'aipromptzyra'); ?>
                    </p>
                </div>
            </div>
        </section>

        <!-- Custom Editor Content Persistence (renders any text or blocks saved in WordPress Page Editor) -->
        <?php if (!empty(trim(strip_tags(get_the_content())))) : ?>
            <section class="about-section about-custom-editor-content">
                <div class="section-card">
                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>

        <!-- 3. WHAT YOU CAN FIND HERE -->
        <section class="about-section categories-pillar-section">
            <div class="section-heading-centered">
                <h2 class="section-title"><?php esc_html_e('What You Can Find Here', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Our content is structured into three focused pillars to help you find relevant formulas quickly.', 'aipromptzyra'); ?></p>
            </div>

            <div class="about-pillars-grid">
                <!-- Pillar 1: Trending Prompts -->
                <div class="pillar-card pillar-trending">
                    <div class="pillar-icon-box">🔥</div>
                    <h3 class="pillar-title"><?php esc_html_e('Trending Prompts', 'aipromptzyra'); ?></h3>
                    <p class="pillar-desc">
                        <?php esc_html_e('Fast-moving aesthetic styles, viral neon urban cinematography, retro 35mm film recreations, and new prompt syntax tailored to generative video tools like Runway and Luma.', 'aipromptzyra'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/?category=trending-prompts#guides-section')); ?>" class="pillar-link">
                        <?php esc_html_e('Browse Trending Prompts', 'aipromptzyra'); ?> &rarr;
                    </a>
                </div>

                <!-- Pillar 2: Couple Prompts -->
                <div class="pillar-card pillar-couple">
                    <div class="pillar-icon-box">💑</div>
                    <h3 class="pillar-title"><?php esc_html_e('Couple Prompts', 'aipromptzyra'); ?></h3>
                    <p class="pillar-desc">
                        <?php esc_html_e('Dedicated photoshoot formulas for romantic milestones, couple maternity sessions, traditional Indian weddings, golden hour candid moments, and dual-subject facial consistency.', 'aipromptzyra'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/?category=couple-prompts#guides-section')); ?>" class="pillar-link">
                        <?php esc_html_e('Browse Couple Prompts', 'aipromptzyra'); ?> &rarr;
                    </a>
                </div>

                <!-- Pillar 3: AI Photo Prompts -->
                <div class="pillar-card pillar-photo">
                    <div class="pillar-icon-box">📸</div>
                    <h3 class="pillar-title"><?php esc_html_e('AI Photo Prompts', 'aipromptzyra'); ?></h3>
                    <p class="pillar-desc">
                        <?php esc_html_e('Studio portraiture setups, natural sunlight window compositions, optical depth-of-field keywords, macro eye photography, and technical guidelines for unretouched skin texture.', 'aipromptzyra'); ?>
                    </p>
                    <a href="<?php echo esc_url(home_url('/?category=ai-photo-prompts#guides-section')); ?>" class="pillar-link">
                        <?php esc_html_e('Browse Photo Prompts', 'aipromptzyra'); ?> &rarr;
                    </a>
                </div>
            </div>
        </section>

        <!-- 4. MEET OUR WRITERS (3 Verified Author Profiles) -->
        <!-- 4. OWNER PROFILE — ZYRA ANSARI -->
        <section class="about-section owner-section">
            <div class="section-heading-centered">
                <div class="about-kicker-pill" style="background:#fef3c7; color:#92400e; border:1px solid #fde68a;">
                    <span><?php esc_html_e('LEADERSHIP & OWNERSHIP', 'aipromptzyra'); ?></span>
                </div>
                <h2 class="section-title"><?php esc_html_e('Website Owner', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Guiding AIPromptZyra\'s editorial vision, prompt curation standards, and community resources.', 'aipromptzyra'); ?></p>
            </div>

            <div class="owner-profile-card" style="max-w: 800px; margin: 0 auto; background: var(--az-surface, #ffffff); border-radius: 24px; padding: 36px; border: 1px solid rgba(148, 163, 184, 0.2); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.05); display: flex; flex-wrap: wrap; align-items: center; gap: 32px;">
                <div class="owner-avatar-wrap" style="position: relative; width: 130px; height: 130px; border-radius: 50%; border: 4px solid #f59e0b; padding: 2px; overflow: hidden; shrink: 0; margin: 0 auto;">
                    <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/Zyra-Ansari.jpg" alt="Zyra Ansari" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;" loading="lazy" />
                    <span class="owner-check-badge" title="<?php esc_attr_e('Verified Owner', 'aipromptzyra'); ?>" style="position: absolute; bottom: 2px; right: 6px; width: 26px; height: 26px; background: #f59e0b; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; border: 2px solid white;">✓</span>
                </div>
                <div class="owner-info" style="flex: 1; min-width: 260px; text-align: left;">
                    <span style="display: inline-block; padding: 3px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background: #fef3c7; color: #92400e; margin-bottom: 8px;">
                        <?php esc_html_e('Owner', 'aipromptzyra'); ?>
                    </span>
                    <h3 style="font-size: 26px; font-weight: 800; margin: 0 0 4px; font-family: var(--font-heading, sans-serif); color: var(--az-text, #0f172a);">
                        <?php esc_html_e('Zyra Ansari', 'aipromptzyra'); ?>
                    </h3>
                    <p style="font-size: 13px; font-weight: 600; color: #7c3aed; margin: 0 0 12px;">
                        <?php esc_html_e('Owner, AIPromptZyra', 'aipromptzyra'); ?>
                    </p>
                    <p style="font-size: 14px; line-height: 1.6; color: var(--az-muted, #475569); margin: 0 0 16px;">
                        <?php esc_html_e('Zyra Ansari is the Owner of AIPromptZyra. She oversees the platform\'s vision, editorial direction, and community resources for visual AI prompt discovery and creative tutorials across Google Gemini, ChatGPT, and Midjourney.', 'aipromptzyra'); ?>
                    </p>
                    <div class="owner-social-row" style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <a href="https://www.instagram.com/aipromptzyra" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 12px; background: #f1f5f9; color: #1e293b; font-size: 12px; font-weight: 700; text-decoration: none; transition: all 0.2s;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            <span>Instagram</span>
                        </a>
                        <a href="https://t.me/aipromptzyra" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 12px; background: #f1f5f9; color: #1e293b; font-size: 12px; font-weight: 700; text-decoration: none; transition: all 0.2s;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                            <span>Telegram</span>
                        </a>
                        <a href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 12px; background: #f1f5f9; color: #1e293b; font-size: 12px; font-weight: 700; text-decoration: none; transition: all 0.2s;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- 5. EDITORIAL TEAM & WRITERS -->
        <section class="about-section team-section">
            <div class="section-heading-centered">
                <div class="about-kicker-pill">
                    <span><?php esc_html_e('EDITORIAL TEAM', 'aipromptzyra'); ?></span>
                </div>
                <h2 class="section-title"><?php esc_html_e('Editorial Writers &amp; Curators', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Each writer brings hands-on prompt research and focused domain expertise across our core categories.', 'aipromptzyra'); ?></p>
            </div>

            <div class="about-authors-grid">
                <?php
                $authors_list = array(
                    array(
                        'name'       => 'Rhea Sharma',
                        'slug'       => 'rhea-sharma',
                        'role'       => 'Editorial Writer & Couple Photography Lead',
                        'avatar'     => 'https://aipromptzyra.com/wp-content/uploads/2026/10/Rhea-Sharma.jpg',
                        'categories' => array('Couple Prompts', 'AI Photo Prompts'),
                        'bio'        => 'Editorial writer and prompt designer focusing on couple photography, maternity shoots, and emotion-driven AI portraits. Researches cultural styling, wardrobe details, and posing aesthetics.',
                    ),
                    array(
                        'name'       => 'Aditya Sen',
                        'slug'       => 'aditya-sen',
                        'role'       => 'Senior Creative Technologist & Trend Analyst',
                        'avatar'     => 'https://aipromptzyra.com/wp-content/uploads/2026/10/Aditya-Sen.jpg',
                        'categories' => array('Trending Prompts', 'AI Photo Prompts'),
                        'bio'        => 'Creative technologist tracking generative AI trends, cyberpunk cinematography, and video generation tools. Translates emerging visual styles and video workflows into clean prompt recipes.',
                    ),
                );

                foreach ($authors_list as $auth) :
                    // Resolve user object dynamically
                    $author_obj = get_user_by('slug', $auth['slug']);
                    if (!$author_obj) {
                        $author_obj = get_user_by('login', $auth['slug']);
                    }
                    if (!$author_obj) {
                        $author_obj = get_user_by('login', 'aipromptzyra');
                    }
                    if (!$author_obj) {
                        $author_obj = get_user_by('display_name', $auth['name']);
                    }

                    $author_id = $author_obj ? $author_obj->ID : 0;
                    $author_url = $author_obj ? get_author_posts_url($author_obj->ID) : home_url('/author/' . urlencode($auth['slug']) . '/');

                    // Dynamic query for latest published articles by this author
                    $author_recent_articles = array();
                    if ($author_id > 0) {
                        $author_query = new WP_Query(array(
                            'author'         => $author_id,
                            'post_type'      => array('post', 'prompt'),
                            'post_status'    => 'publish',
                            'posts_per_page' => 3,
                            'orderby'        => 'date',
                            'order'          => 'DESC',
                            'no_found_rows'  => true,
                        ));

                        if ($author_query->have_posts()) {
                            while ($author_query->have_posts()) {
                                $author_query->the_post();
                                $author_recent_articles[] = array(
                                    'title' => get_the_title(),
                                    'url'   => get_permalink(),
                                );
                            }
                            wp_reset_postdata();
                        }
                    }
                ?>
                    <div class="author-profile-box">
                        <div class="author-box-top">
                            <div class="author-avatar-wrap">
                                <img src="<?php echo esc_url($auth['avatar']); ?>" alt="<?php echo esc_attr($auth['name']); ?>" class="author-avatar-img" loading="lazy" />
                                <span class="author-check-badge" title="<?php esc_attr_e('Verified Author', 'aipromptzyra'); ?>">✓</span>
                            </div>
                            <div class="author-meta-info">
                                <h3 class="author-box-name"><?php echo esc_html($auth['name']); ?></h3>
                                <p class="author-box-role"><?php echo esc_html($auth['role']); ?></p>
                            </div>
                        </div>

                        <div class="author-categories-row">
                            <?php foreach ($auth['categories'] as $cat_label) : ?>
                                <span class="author-cat-pill"><?php echo esc_html($cat_label); ?></span>
                            <?php endforeach; ?>
                        </div>

                        <p class="author-box-bio"><?php echo esc_html($auth['bio']); ?></p>

                        <div class="author-recent-articles">
                            <h4 class="recent-articles-heading"><?php esc_html_e('Recent Published Articles', 'aipromptzyra'); ?></h4>
                            <?php if (!empty($author_recent_articles)) : ?>
                                <ul class="recent-articles-list">
                                    <?php foreach ($author_recent_articles as $art) : ?>
                                        <li>
                                            <a href="<?php echo esc_url($art['url']); ?>">
                                                <?php echo esc_html($art['title']); ?>
                                            </a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php else : ?>
                                <p class="author-no-articles-text">
                                    <?php esc_html_e('No published articles yet. Check back soon for new guides from this author!', 'aipromptzyra'); ?>
                                </p>
                            <?php endif; ?>
                        </div>

                        <div class="author-box-action">
                            <a href="<?php echo esc_url($author_url); ?>" class="author-archive-link">
                                <?php printf(esc_html__('View All Articles by %s', 'aipromptzyra'), esc_html(explode(' ', $auth['name'])[0])); ?> &rarr;
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>

        <!-- 5. OUR EVERYDAY PROMISE TO YOU -->
        <section class="about-section promise-section">
            <div class="section-heading-centered">
                <div class="about-kicker-pill">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="#7C3AED" aria-hidden="true">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                    <span><?php esc_html_e('EDITORIAL INTEGRITY & TRANSPARENCY', 'aipromptzyra'); ?></span>
                </div>
                <h2 class="section-title"><?php esc_html_e('Our Everyday Promise to You', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle">
                    <?php esc_html_e('At AIPromptZyra, our goal is to provide practical, clearly written AI prompts that readers can understand, customize, and use with confidence. We focus on transparent instructions, realistic variables, and reproducible creative techniques across modern multimodal tools.', 'aipromptzyra'); ?>
                </p>
            </div>

            <!-- 4-Card Grid -->
            <div class="promise-cards-grid">
                <!-- Card 01 -->
                <div class="promise-card">
                    <div class="promise-card-top">
                        <span class="promise-num">01</span>
                        <span class="promise-badge"><?php esc_html_e('Precision Crafting', 'aipromptzyra'); ?></span>
                    </div>
                    <h3 class="promise-title"><?php esc_html_e('Practical Prompts, Not Empty Promises', 'aipromptzyra'); ?></h3>
                    <p class="promise-desc">
                        <?php esc_html_e('Every prompt formula is built around actionable descriptive components—such as concrete camera lenses, lighting ratios, sensor depth, and physical materials—rather than hollow marketing buzzwords. We avoid claiming that every formula is universally guaranteed or exhaustively benchmarked unless supported by actual testing documentation, focusing instead on reliable foundations you can build upon.', 'aipromptzyra'); ?>
                    </p>
                </div>

                <!-- Card 02 -->
                <div class="promise-card">
                    <div class="promise-card-top">
                        <span class="promise-num">02</span>
                        <span class="promise-badge"><?php esc_html_e('Cultural Nuance', 'aipromptzyra'); ?></span>
                    </div>
                    <h3 class="promise-title"><?php esc_html_e('Respect for Cultural Details', 'aipromptzyra'); ?></h3>
                    <p class="promise-desc">
                        <?php esc_html_e('Cultural depiction requires genuine attention to detail. When crafting prompts for traditional Indian weddings, festive celebrations, and regional ethnic attire like Banarasi sarees or royal sherwanis, we describe traditional textiles, sacred rituals, and heritage aesthetics with accuracy and respect, avoiding superficial stereotypes.', 'aipromptzyra'); ?>
                    </p>
                </div>

                <!-- Card 03 -->
                <div class="promise-card">
                    <div class="promise-card-top">
                        <span class="promise-num">03</span>
                        <span class="promise-badge"><?php esc_html_e('Organic Aesthetics', 'aipromptzyra'); ?></span>
                    </div>
                    <h3 class="promise-title"><?php esc_html_e('Natural-Looking Creative Results', 'aipromptzyra'); ?></h3>
                    <p class="promise-desc">
                        <?php esc_html_e('Great prompt engineering prioritizes organic realism over synthetic perfection. We guide users on natural skin texture, balanced ambient light, authentic eye reflections, and realistic camera perspectives to reduce plastic artifacts, while recognizing that AI models naturally vary with each generation.', 'aipromptzyra'); ?>
                    </p>
                </div>

                <!-- Card 04 -->
                <div class="promise-card">
                    <div class="promise-card-top">
                        <span class="promise-num">04</span>
                        <span class="promise-badge"><?php esc_html_e('Open Accessibility', 'aipromptzyra'); ?></span>
                    </div>
                    <h3 class="promise-title"><?php esc_html_e('Simple, Accessible Prompt Guides', 'aipromptzyra'); ?></h3>
                    <p class="promise-desc">
                        <?php esc_html_e('Exploring and applying AI prompts should be simple and friction-free. Our tutorials feature clear explanations, one-click copy functionality, and transparent disclosures about tool-specific capabilities and limitations, ensuring readers always have straightforward access without confusing barriers.', 'aipromptzyra'); ?>
                    </p>
                </div>
            </div>

            <!-- Supporting Section: How We Keep AIPromptZyra Accessible -->
            <div class="accessibility-card-wrapper">
                <div class="accessibility-badge">
                    <span><?php esc_html_e('READER ACCESS & OPERATIONS', 'aipromptzyra'); ?></span>
                </div>
                <h3 class="accessibility-title"><?php esc_html_e('How We Keep AIPromptZyra Accessible', 'aipromptzyra'); ?></h3>
                <p class="accessibility-text">
                    <?php esc_html_e('AIPromptZyra operates as an open, freely accessible educational resource supported by ethical, non-intrusive digital advertising. We never place core tutorials behind paywalls, subscription fees, or hidden reader costs. We hold reader trust and privacy in the highest regard: we do not track personal identifying data or sell visitor information to third parties. For complete details on our data protection commitments, please review our', 'aipromptzyra'); ?>
                    <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>" class="accessibility-privacy-link"><?php esc_html_e('Privacy Policy', 'aipromptzyra'); ?></a>.
                </p>
            </div>
        </section>

        <!-- 7. OFFICIAL SOCIAL MEDIA CHANNELS -->
        <section class="about-section social-section" style="margin-top: 48px;">
            <div class="section-heading-centered">
                <div class="about-kicker-pill">
                    <span><?php esc_html_e('OFFICIAL CHANNELS', 'aipromptzyra'); ?></span>
                </div>
                <h2 class="section-title"><?php esc_html_e('Join Our Official Communities', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Connect with our official Instagram, Telegram, and WhatsApp channels for prompt updates and inspiration.', 'aipromptzyra'); ?></p>
            </div>

            <div class="about-pillars-grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
                <!-- Instagram -->
                <div class="pillar-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div class="pillar-icon-box" style="background: linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6); color: white;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </div>
                        <h3 class="pillar-title"><?php esc_html_e('Instagram', 'aipromptzyra'); ?></h3>
                        <p class="pillar-desc">
                            <?php esc_html_e('Follow @aipromptzyra on Instagram for visual side-by-side prompt comparisons, creative showcases, and new prompt releases.', 'aipromptzyra'); ?>
                        </p>
                    </div>
                    <a href="https://www.instagram.com/aipromptzyra" target="_blank" rel="noopener noreferrer" class="pillar-link" style="margin-top: 16px;">
                        <?php esc_html_e('Open @aipromptzyra', 'aipromptzyra'); ?> &rarr;
                    </a>
                </div>

                <!-- Telegram -->
                <div class="pillar-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div class="pillar-icon-box" style="background: #229ED9; color: white;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                        </div>
                        <h3 class="pillar-title"><?php esc_html_e('Telegram Channel', 'aipromptzyra'); ?></h3>
                        <p class="pillar-desc">
                            <?php esc_html_e('Join our official Telegram channel for instant alerts, copy-ready prompt drops, and prompt crafting tips directly in your feed.', 'aipromptzyra'); ?>
                        </p>
                    </div>
                    <a href="https://t.me/aipromptzyra" target="_blank" rel="noopener noreferrer" class="pillar-link" style="margin-top: 16px;">
                        <?php esc_html_e('Join Telegram Channel', 'aipromptzyra'); ?> &rarr;
                    </a>
                </div>

                <!-- WhatsApp Channel -->
                <div class="pillar-card" style="display: flex; flex-direction: column; justify-content: space-between;">
                    <div>
                        <div class="pillar-icon-box" style="background: #25D366; color: white;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
                        </div>
                        <h3 class="pillar-title"><?php esc_html_e('WhatsApp Channel', 'aipromptzyra'); ?></h3>
                        <p class="pillar-desc">
                            <?php esc_html_e('Subscribe to the official WhatsApp Channel for curated AI prompt notifications, guides, and creative workflows.', 'aipromptzyra'); ?>
                        </p>
                    </div>
                    <a href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u" target="_blank" rel="noopener noreferrer" class="pillar-link" style="margin-top: 16px;">
                        <?php esc_html_e('Subscribe on WhatsApp', 'aipromptzyra'); ?> &rarr;
                    </a>
                </div>
            </div>
        </section>

        <!-- 8. CONTACT US -->
        <section class="about-section contact-cta-section">
            <div class="contact-cta-inner">
                <div class="contact-cta-icon">✉</div>
                <h2 class="contact-cta-title"><?php esc_html_e('Have Questions or Feedback?', 'aipromptzyra'); ?></h2>
                <p class="contact-cta-desc">
                    <?php esc_html_e('We welcome reader feedback, prompt suggestions, and partnership inquiries. Reach out to our editorial team directly at', 'aipromptzyra'); ?>
                    <a href="mailto:support@aipromptzyra.com" class="contact-mail-link">support@aipromptzyra.com</a>.
                </p>
                <a href="<?php echo esc_url(home_url('/contact/')); ?>" class="contact-cta-btn">
                    <?php esc_html_e('Open Contact Form', 'aipromptzyra'); ?> &rarr;
                </a>
            </div>
        </section>
    </div>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
