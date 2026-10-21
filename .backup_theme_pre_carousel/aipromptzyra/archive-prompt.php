<?php
/**
 * The template for displaying Prompt post type archive
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main container page-container">
    <header class="page-header page-header-centered">
        <h1 class="page-title"><?php esc_html_e('Explore AI Prompts', 'aipromptzyra'); ?></h1>
        <p class="page-subtitle"><?php esc_html_e('Browse verified, copy-ready AI prompts for Gemini, ChatGPT, and Midjourney across every style and genre.', 'aipromptzyra'); ?></p>

        <!-- Category filter pills -->
        <div class="archive-filter-bar">
            <?php
            $terms = get_terms(array(
                'taxonomy'   => 'prompt_category',
                'hide_empty' => false,
            ));
            if (!empty($terms) && !is_wp_error($terms)) :
            ?>
                <a href="<?php echo esc_url(get_post_type_archive_link('prompt')); ?>" class="filter-pill active">
                    <?php esc_html_e('All Prompts', 'aipromptzyra'); ?>
                </a>
                <?php foreach ($terms as $term) : ?>
                    <a href="<?php echo esc_url(get_term_link($term)); ?>" class="filter-pill">
                        <?php echo esc_html($term->name); ?> (<?php echo esc_html($term->count); ?>)
                    </a>
                <?php endforeach; ?>
            <?php endif; ?>
        </div>
    </header>

    <?php if (have_posts()) : ?>
        <div class="prompts-grid">
            <?php
            while (have_posts()) :
                the_post();
                get_template_part('template-parts/content', 'prompt-card');
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
            <h2><?php esc_html_e('No Prompts Found', 'aipromptzyra'); ?></h2>
            <p><?php esc_html_e('No prompt posts have been published yet. Please check back soon or use our Prompt Builder.', 'aipromptzyra'); ?></p>
            <a href="<?php echo esc_url(home_url('/prompt-builder/')); ?>" class="btn-primary-purple">
                <?php esc_html_e('Open Prompt Builder', 'aipromptzyra'); ?>
            </a>
        </div>
    <?php endif; ?>
</main>

<?php get_footer(); ?>
