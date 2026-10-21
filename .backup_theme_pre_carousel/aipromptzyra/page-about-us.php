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
                        'articles'   => array(
                            array('title' => 'Gemini Imagen 3 Masterclass: Photorealistic Portraits', 'url' => home_url('/gemini-imagen-3-prompting-masterclass/')),
                            array('title' => 'Practical Tips to Make AI Images Look Truly Photorealistic', 'url' => home_url('/guides/tips-for-realistic-ai-images/')),
                            array('title' => 'How to Write Better AI Prompts: Beginner to Pro Guide', 'url' => home_url('/guides/how-to-write-better-ai-prompts/')),
                        ),
                    ),
                    array(
                        'name'       => 'Rhea Sharma',
                        'slug'       => 'rhea-sharma',
                        'role'       => 'Editorial Writer & Couple Photography Lead',
                        'avatar'     => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=320&auto=format&fit=crop&q=80',
                        'categories' => array('Couple Prompts', 'AI Photo Prompts'),
                        'bio'        => 'Editorial writer and prompt designer focusing on couple photography, maternity shoots, and emotion-driven AI portraits. Researches cultural styling, wardrobe details, and posing aesthetics.',
                        'articles'   => array(
                            array('title' => 'Romantic Couple Golden Hour Photography Prompts', 'url' => home_url('/prompts/romantic-couple-golden-hour/')),
                            array('title' => 'Indian Traditional Wedding Prompt for Gemini AI (2026)', 'url' => home_url('/indian-wedding-photo-prompt-for-gemini/')),
                        ),
                    ),
                    array(
                        'name'       => 'Aditya Sen',
                        'slug'       => 'aditya-sen',
                        'role'       => 'Senior Creative Technologist & Trend Analyst',
                        'avatar'     => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&auto=format&fit=crop&q=80',
                        'categories' => array('Trending Prompts', 'AI Photo Prompts'),
                        'bio'        => 'Creative technologist tracking generative AI trends, cyberpunk cinematography, and video generation tools. Translates emerging visual styles and video workflows into clean prompt recipes.',
                        'articles'   => array(
                            array('title' => 'Viral Neon Urban Portrait Prompt Formula', 'url' => home_url('/prompts/viral-neon-urban-portrait/')),
                            array('title' => 'AI Video Prompts Guide: Runway Gen-3 and Luma Tips', 'url' => home_url('/guides/ai-video-prompts-guide/')),
                            array('title' => 'Vintage 1970s 35mm Analog Film Aesthetic Prompts', 'url' => home_url('/prompts/vintage-35mm-film/')),
                        ),
                    ),
                );

                foreach ($authors_list as $auth) :
                    $author_obj = get_user_by('slug', $auth['slug']);
                    $author_url = $author_obj ? get_author_posts_url($author_obj->ID) : home_url('/author/' . urlencode($auth['slug']) . '/');
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
                            <ul class="recent-articles-list">
                                <?php foreach ($auth['articles'] as $art) : ?>
                                    <li>
                                        <a href="<?php echo esc_url($art['url']); ?>">
                                            <?php echo esc_html($art['title']); ?>
                                        </a>
                                    </li>
                                <?php endforeach; ?>
                            </ul>
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

        <!-- 5. OUR EDITORIAL APPROACH -->
        <section class="about-section editorial-approach-section">
            <div class="section-card">
                <div class="section-card-kicker"><?php esc_html_e('Integrity & Standards', 'aipromptzyra'); ?></div>
                <h2 class="section-card-title"><?php esc_html_e('Our Editorial Approach', 'aipromptzyra'); ?></h2>
                <p class="section-card-lead">
                    <?php esc_html_e('Every formula and tutorial published on AIPromptZyra adheres to four consistent benchmarks:', 'aipromptzyra'); ?>
                </p>

                <div class="approach-grid">
                    <div class="approach-item">
                        <h3><?php esc_html_e('1. Structural Verification', 'aipromptzyra'); ?></h3>
                        <p><?php esc_html_e('We organize prompts logically: Subject → Environment → Lighting → Camera → Style. This syntax ensures multimodal models prioritize subjects correctly without hallucinating unwanted artifacts.', 'aipromptzyra'); ?></p>
                    </div>

                    <div class="approach-item">
                        <h3><?php esc_html_e('2. No Repetitive Keyword Stuffing', 'aipromptzyra'); ?></h3>
                        <p><?php esc_html_e('Modern diffusion and autoregressive image models ignore redundant terms like “hyperrealistic, 4k, photorealistic” when repeated. We use optical descriptions that trigger true photographic behavior.', 'aipromptzyra'); ?></p>
                    </div>

                    <div class="approach-item">
                        <h3><?php esc_html_e('3. Regular Model Updates', 'aipromptzyra'); ?></h3>
                        <p><?php esc_html_e('When new model weights (such as Imagen 3 updates or Midjourney releases) change prompt adherence, our writers revisit older guides, adjust phrasing, and flag tool-specific nuances.', 'aipromptzyra'); ?></p>
                    </div>

                    <div class="approach-item">
                        <h3><?php esc_html_e('4. Reader Corrections & Open Feedback', 'aipromptzyra'); ?></h3>
                        <p><?php esc_html_e('If a prompt formula fails to yield expected results across specific tool interfaces, readers can submit corrections via our contact channel. We review and update guides promptly.', 'aipromptzyra'); ?></p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 6. HOW TO USE OUR PROMPTS -->
        <section class="about-section how-to-use-box">
            <h2 class="section-card-title"><?php esc_html_e('How to Use Our Prompts', 'aipromptzyra'); ?></h2>
            <p class="section-card-lead"><?php esc_html_e('Applying our prompt formulas into your AI workflow is straightforward:', 'aipromptzyra'); ?></p>

            <div class="how-to-steps-3col">
                <div class="how-to-step">
                    <span class="step-num">1</span>
                    <h4><?php esc_html_e('Copy the Formula', 'aipromptzyra'); ?></h4>
                    <p><?php esc_html_e('Use the one-click copy button on any prompt card or tutorial to copy the tested descriptive string.', 'aipromptzyra'); ?></p>
                </div>
                <div class="how-to-step">
                    <span class="step-num">2</span>
                    <h4><?php esc_html_e('Swap Key Variables', 'aipromptzyra'); ?></h4>
                    <p><?php esc_html_e('Customize subjects, outfit colors, background locations, and lighting moods to match your project’s needs.', 'aipromptzyra'); ?></p>
                </div>
                <div class="how-to-step">
                    <span class="step-num">3</span>
                    <h4><?php esc_html_e('Paste into Your Tool', 'aipromptzyra'); ?></h4>
                    <p><?php esc_html_e('Paste directly into Google Gemini, ChatGPT DALL-E 3, Midjourney, or Bing Image Creator and render.', 'aipromptzyra'); ?></p>
                </div>
            </div>
        </section>

        <!-- 7. OUR COMMITMENT TO READERS -->
        <section class="about-section commitment-section">
            <div class="section-card">
                <div class="section-card-kicker"><?php esc_html_e('Ethical Standards', 'aipromptzyra'); ?></div>
                <h2 class="section-card-title"><?php esc_html_e('Our Commitment to Readers', 'aipromptzyra'); ?></h2>
                <div class="section-card-text">
                    <p><?php esc_html_e('We believe generative technology is an assistive tool that empowers human creativity. We uphold:', 'aipromptzyra'); ?></p>
                    <ul class="commitment-bullets">
                        <li><strong><?php esc_html_e('Original Content:', 'aipromptzyra'); ?></strong> <?php esc_html_e('All guides, tips, and articles are written by our verified human editorial team.', 'aipromptzyra'); ?></li>
                        <li><strong><?php esc_html_e('Clear Labeling:', 'aipromptzyra'); ?></strong> <?php esc_html_e('AI-generated visual examples are clearly identified as sample outputs.', 'aipromptzyra'); ?></li>
                        <li><strong><?php esc_html_e('Responsible Creativity:', 'aipromptzyra'); ?></strong> <?php esc_html_e('We do not publish prompts designed for non-consensual deepfakes, copyright infringement, or deceptive impersonation.', 'aipromptzyra'); ?></li>
                        <li><strong><?php esc_html_e('Respect for Privacy:', 'aipromptzyra'); ?></strong> <?php esc_html_e('We do not track reader personal information or sell reader data to third parties.', 'aipromptzyra'); ?></li>
                    </ul>
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
