<?php
/**
 * The template for displaying single AI Prompts
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main container single-prompt-container">
    <?php
    while (have_posts()) :
        the_post();
        $prompt_text = get_post_meta(get_the_ID(), '_aipromptzyra_prompt_text', true) ?: get_the_excerpt();
        $negative_prompt = get_post_meta(get_the_ID(), '_aipromptzyra_negative_prompt', true);
        $aspect_ratio = get_post_meta(get_the_ID(), '_aipromptzyra_aspect_ratio', true) ?: '16:9';
        $recommended_tool = get_post_meta(get_the_ID(), '_aipromptzyra_tool', true) ?: 'Gemini / Midjourney / ChatGPT';
    ?>
        <div class="prompt-single-layout">
            <!-- Left: Featured Artwork -->
            <div class="prompt-single-media-col">
                <div class="prompt-single-media-card">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('aipromptzyra-featured', array('class' => 'prompt-single-img')); ?>
                    <?php else : ?>
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=85" alt="<?php the_title_attribute(); ?>" class="prompt-single-img" />
                    <?php endif; ?>
                </div>

                <div class="prompt-meta-spec-grid">
                    <div class="spec-card">
                        <span class="spec-label"><?php esc_html_e('Recommended Tool', 'aipromptzyra'); ?></span>
                        <span class="spec-value"><?php echo esc_html($recommended_tool); ?></span>
                    </div>
                    <div class="spec-card">
                        <span class="spec-label"><?php esc_html_e('Aspect Ratio', 'aipromptzyra'); ?></span>
                        <span class="spec-value"><?php echo esc_html($aspect_ratio); ?></span>
                    </div>
                </div>
            </div>

            <!-- Right: Prompt Content & Copy Action -->
            <div class="prompt-single-info-col">
                <div class="prompt-header-tags">
                    <?php
                    $terms = get_the_terms(get_the_ID(), 'prompt_category');
                    if (!empty($terms) && !is_wp_error($terms)) {
                        foreach ($terms as $term) {
                            printf('<a href="%s" class="tag-pill">%s</a> ', esc_url(get_term_link($term)), esc_html($term->name));
                        }
                    }
                    ?>
                </div>

                <h1 class="prompt-single-title"><?php the_title(); ?></h1>

                <div class="prompt-copy-box">
                    <div class="prompt-copy-box-header">
                        <span class="copy-box-label"><?php esc_html_e('AI Image Prompt', 'aipromptzyra'); ?></span>
                        <button type="button" class="btn-copy-action copy-prompt-btn" data-prompt="<?php echo esc_attr($prompt_text); ?>">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                            <span><?php esc_html_e('Copy Prompt', 'aipromptzyra'); ?></span>
                        </button>
                    </div>

                    <div class="prompt-text-display">
                        <?php echo esc_html($prompt_text); ?>
                    </div>

                    <div class="prompt-tools-links">
                        <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-tool-pill">
                            <?php esc_html_e('Try in Gemini', 'aipromptzyra'); ?> &nearr;
                        </a>
                        <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" class="btn-tool-pill">
                            <?php esc_html_e('Try in ChatGPT', 'aipromptzyra'); ?> &nearr;
                        </a>
                    </div>
                </div>

                <?php if (!empty($negative_prompt)) : ?>
                    <div class="negative-prompt-box">
                        <span class="copy-box-label"><?php esc_html_e('Negative Prompt (Optional)', 'aipromptzyra'); ?></span>
                        <div class="prompt-text-display-muted">
                            <?php echo esc_html($negative_prompt); ?>
                        </div>
                    </div>
                <?php endif; ?>

                <div class="prompt-article-body">
                    <?php the_content(); ?>
                </div>
            </div>
        </div>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
