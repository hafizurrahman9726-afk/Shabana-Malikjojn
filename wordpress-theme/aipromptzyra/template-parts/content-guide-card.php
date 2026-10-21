<?php
/**
 * Template part for displaying a guide card in grids
 *
 * @package AIPromptzyra
 * @version 1.0.7
 */

$post_id = get_the_ID();
$terms_slugs = array();
$terms_cat = get_the_terms($post_id, 'category');
if (!empty($terms_cat) && !is_wp_error($terms_cat)) {
    foreach ($terms_cat as $t) {
        $terms_slugs[] = sanitize_title($t->slug);
    }
}
$terms_pc = get_the_terms($post_id, 'prompt_category');
if (!empty($terms_pc) && !is_wp_error($terms_pc)) {
    foreach ($terms_pc as $t) {
        $terms_slugs[] = sanitize_title($t->slug);
    }
}
$cat_attr = implode(' ', array_unique($terms_slugs));
?>
<article id="post-<?php the_ID(); ?>" <?php post_class('guide-card'); ?> data-categories="<?php echo esc_attr($cat_attr); ?>" data-title="<?php echo esc_attr(strtolower(get_the_title())); ?>">
    <div class="guide-card-media">
        <a href="<?php the_permalink(); ?>">
            <?php if (has_post_thumbnail()) : ?>
                <?php the_post_thumbnail('aipromptzyra-guide'); ?>
            <?php else : ?>
                <img src="https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp" alt="<?php the_title_attribute(); ?>" loading="lazy" />
            <?php endif; ?>
        </a>
        <button type="button" class="bookmark-btn" aria-label="<?php esc_attr_e('Save guide', 'aipromptzyra'); ?>">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
        </button>
    </div>
    <div class="guide-card-body">
        <h3 class="guide-card-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h3>
        <p class="guide-card-desc"><?php echo wp_trim_words(get_the_excerpt(), 12); ?></p>
        <div class="guide-card-footer">
            <span class="guide-date"><?php echo get_the_date('M j, Y'); ?></span>
            <a href="<?php the_permalink(); ?>" class="guide-read-link">
                <?php esc_html_e('Read More', 'aipromptzyra'); ?> &rarr;
            </a>
        </div>
    </div>
</article>
