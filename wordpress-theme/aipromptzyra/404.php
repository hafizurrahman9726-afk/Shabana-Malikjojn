<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main container page-container">
    <div class="error-404-wrapper">
        <span class="error-code-badge">404</span>
        <h1 class="error-title"><?php esc_html_e('Prompt Not Found', 'aipromptzyra'); ?></h1>
        <p class="error-subtitle"><?php esc_html_e('The prompt or page you are looking for may have been moved, renamed, or never existed.', 'aipromptzyra'); ?></p>

        <div class="error-search-box">
            <?php get_search_form(); ?>
        </div>

        <div class="error-actions">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-primary-purple">
                <?php esc_html_e('Return to Homepage', 'aipromptzyra'); ?>
            </a>
            <a href="<?php echo esc_url(home_url('/prompt-builder/')); ?>" class="btn-outline-reset">
                <?php esc_html_e('Go to Prompt Builder', 'aipromptzyra'); ?>
            </a>
        </div>
    </div>
</main>

<?php get_footer(); ?>
