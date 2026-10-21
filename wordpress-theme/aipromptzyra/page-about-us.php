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
        <section class="about-section team-section">
            <div class="section-heading-centered">
                <div class="about-kicker-pill">
                    <span><?php esc_html_e('EDITORIAL TEAM', 'aipromptzyra'); ?></span>
                </div>
                <h2 class="section-title"><?php esc_html_e('Meet Our Writers', 'aipromptzyra'); ?></h2>
                <p class="section-subtitle"><?php esc_html_e('Each writer brings hands-on prompt research and focused domain expertise across our core categories.', 'aipromptzyra'); ?></p>
            </div>

            <div class="about-authors-grid">
                <?php
                $authors_list = array(
                    array(
                        'name'       => 'Hafizur Rahman',
                        'slug'       => 'hafizur-rahman',
                        'role'       => 'Founder & Lead AI Prompt Curator',
                        'avatar'     => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&auto=format&fit=crop&q=80',
                        'categories' => array('AI Photo Prompts', 'Trending Prompts'),
                        'bio'        => 'Founder of AIPromptZyra and visual prompt researcher. Specializes in realistic camera optics, lighting formulas, and technical prompt frameworks across Google Gemini, ChatGPT, and Midjourney.',
                    ),
                    array(
                        'name'       => 'Rhea Sharma',
                        'slug'       => 'rhea-sharma',
                        'role'       => 'Editorial Writer & Couple Photography Lead',
                        'avatar'     => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&auto=format&fit=crop&q=80',
                        'categories' => array('Couple Prompts', 'AI Photo Prompts'),
                        'bio'        => 'Editorial writer and prompt designer focusing on couple photography, maternity shoots, and emotion-driven AI portraits. Researches cultural styling, wardrobe details, and posing aesthetics.',
                    ),
                    array(
                        'name'       => 'Aditya Sen',
                        'slug'       => 'aditya-sen',
                        'role'       => 'Senior Creative Technologist & Trend Analyst',
                        'avatar'     => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&auto=format&fit=crop&q=80',
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
