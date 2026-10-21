<?php
/**
 * The template for displaying general archives
 *
 * @package AIPromptzyra
 * @version 1.1.4
 */

get_header();
?>

<main id="primary" class="site-main container page-container">
    <header class="page-header page-header-centered">
        <span class="category-kicker"><?php esc_html_e('Archive', 'aipromptzyra'); ?></span>
        <h1 class="page-title"><?php the_archive_title(); ?></h1>
        <?php the_archive_description('<p class="page-subtitle">', '</p>'); ?>
    </header>

    <?php if (have_posts()) : ?>
        <div class="prompts-grid">
            <?php
            while (have_posts()) :
                the_post();
                if (get_post_type() === 'prompt') {
                    get_template_part('template-parts/content', 'prompt-card');
                } else {
                    get_template_part('template-parts/content', 'guide-card');
                }
            endwhile;
            ?>
        </div>

        <div class="pagination-wrapper">
            <?php
            the_posts_pagination(array(
                'mid_size'  => 2,
                'prev_text' => __('&larr; Previous', 'aipromptzyra'),
                'next_text' => __('Next &rarr;', 'aipromptzyra'),
            ));
            ?>
        </div>
    <?php else : ?>
        <div class="empty-state-card">
            <h2><?php esc_html_e('No Articles Found', 'aipromptzyra'); ?></h2>
            <p><?php esc_html_e('Check back soon for new guides or craft your own custom prompt using our builder.', 'aipromptzyra'); ?></p>
            <a href="<?php echo esc_url(home_url('/prompt-builder/')); ?>" class="btn-primary-purple">
                <?php esc_html_e('Open Prompt Builder', 'aipromptzyra'); ?>
            </a>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
