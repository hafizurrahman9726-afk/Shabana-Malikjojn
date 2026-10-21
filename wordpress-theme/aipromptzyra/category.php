<?php
/**
 * The template for displaying Category archives
 *
 * @package AIPromptzyra
 * @version 1.1.4
 */

get_header();
$current_term = get_queried_object();
?>

<main id="primary" class="site-main container page-container">
    <header class="page-header page-header-centered">
        <span class="category-kicker"><?php esc_html_e('Category Archive', 'aipromptzyra'); ?></span>
        <h1 class="page-title"><?php single_term_title(); ?></h1>
        <?php if (!empty($current_term->description)) : ?>
            <p class="page-subtitle"><?php echo esc_html($current_term->description); ?></p>
        <?php else : ?>
            <p class="page-subtitle"><?php printf(esc_html__('Handpicked, verified AI prompts and articles for %s.', 'aipromptzyra'), esc_html(single_term_title('', false))); ?></p>
        <?php endif; ?>
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
            <h2><?php esc_html_e('No Articles in this Category Yet', 'aipromptzyra'); ?></h2>
            <p><?php esc_html_e('Check back soon for new guides or craft your own custom prompt using our builder.', 'aipromptzyra'); ?></p>
            <a href="<?php echo esc_url(home_url('/prompt-builder/')); ?>" class="btn-primary-purple">
                <?php esc_html_e('Open Prompt Builder', 'aipromptzyra'); ?>
            </a>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
