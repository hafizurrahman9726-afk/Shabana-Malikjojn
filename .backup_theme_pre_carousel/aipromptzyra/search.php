<?php
/**
 * The template for displaying search results
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main container page-container">
    <header class="page-header page-header-centered">
        <span class="category-kicker"><?php esc_html_e('Search Results', 'aipromptzyra'); ?></span>
        <h1 class="page-title">
            <?php
            /* translators: %s: search query */
            printf(esc_html__('Results for: "%s"', 'aipromptzyra'), '<span>' . esc_html(get_search_query()) . '</span>');
            ?>
        </h1>
        <p class="page-subtitle"><?php printf(esc_html__('Found %d matching items for your search.', 'aipromptzyra'), (int) $wp_query->found_posts); ?></p>
    </header>

    <?php if (have_posts()) : ?>
        <div class="prompts-grid">
            <?php
            while (have_posts()) :
                the_post();
                get_template_part('template-parts/content', get_post_type());
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
            <h2><?php esc_html_e('No Matches Found', 'aipromptzyra'); ?></h2>
            <p><?php esc_html_e('Sorry, but nothing matched your search terms. Please try again with some different keywords or popular categories.', 'aipromptzyra'); ?></p>
            <div class="empty-state-search">
                <?php get_search_form(); ?>
            </div>
            <div class="popular-pills-centered">
                <span class="popular-label"><?php esc_html_e('Try Searching:', 'aipromptzyra'); ?></span>
                <a href="<?php echo esc_url(home_url('/?s=Girl+Portrait')); ?>" class="tag-pill">Girl Portrait</a>
                <a href="<?php echo esc_url(home_url('/?s=Couple+Photo')); ?>" class="tag-pill">Couple Photo</a>
                <a href="<?php echo esc_url(home_url('/?s=Cinematic')); ?>" class="tag-pill">Cinematic</a>
                <a href="<?php echo esc_url(home_url('/?s=Festival')); ?>" class="tag-pill">Festival</a>
            </div>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
