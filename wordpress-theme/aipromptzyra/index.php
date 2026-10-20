<?php
/**
 * The main template file
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main container page-container">
    <header class="page-header">
        <h1 class="page-title">
            <?php
            if (is_home() && !is_front_page()) {
                single_post_title();
            } else {
                esc_html_e('Latest Prompts & Articles', 'aipromptzyra');
            }
            ?>
        </h1>
        <p class="page-subtitle"><?php esc_html_e('Explore our verified collection of AI prompt recipes, tutorials, and creative techniques.', 'aipromptzyra'); ?></p>
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
            <h2><?php esc_html_e('No Content Found', 'aipromptzyra'); ?></h2>
            <p><?php esc_html_e('It seems we cannot find what you are looking for. Perhaps searching can help.', 'aipromptzyra'); ?></p>
            <?php get_search_form(); ?>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
