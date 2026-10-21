<?php
/**
 * Template part for displaying a prompt card in grids
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

$prompt_text = get_post_meta(get_the_ID(), '_aipromptzyra_prompt_text', true) ?: get_the_excerpt();
$badge_text  = get_post_meta(get_the_ID(), '_aipromptzyra_badge', true) ?: 'Prompt';
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('prompt-card'); ?>>
    <div class="prompt-card-media">
        <a href="<?php the_permalink(); ?>">
            <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('aipromptzyra-featured'); ?>
            <?php else : ?>
                <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp" alt="<?php the_title_attribute(); ?>" loading="lazy" />
            <?php endif; ?>
        </a>
        <span class="prompt-badge badge-popular"><?php echo esc_html($badge_text); ?></span>
        <button type="button" class="bookmark-btn" aria-label="<?php esc_attr_e('Save prompt', 'aipromptzyra'); ?>">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        </button>
    </div>
    <div class="prompt-card-body">
        <h3 class="prompt-card-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <p class="prompt-card-desc"><?php echo wp_trim_words(get_the_excerpt(), 14); ?></p>
        <div class="prompt-card-tags">
            <?php
            $terms = get_the_terms(get_the_ID(), 'prompt_category');
            if (!empty($terms) && !is_wp_error($terms)) {
                foreach (array_slice($terms, 0, 3) as $term) {
                    printf('<span class="prompt-tag-item">%s</span>', esc_html($term->name));
                }
            }
            ?>
        </div>
        <button type="button" class="copy-prompt-btn" data-prompt="<?php echo esc_attr($prompt_text); ?>">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            <span><?php esc_html_e('Copy Prompt', 'aipromptzyra'); ?></span>
        </button>
    </div>
</article>
