<?php
/**
 * The template for displaying all pages
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main container page-container">
    <?php
    while (have_posts()) :
        the_post();
    ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('page-entry'); ?>>
            <header class="entry-header page-header-centered">
                <h1 class="entry-title"><?php the_title(); ?></h1>
                <?php if (has_excerpt()) : ?>
                    <p class="entry-lead"><?php echo get_the_excerpt(); ?></p>
                <?php endif; ?>
            </header>

            <?php if (has_post_thumbnail()) : ?>
                <div class="page-featured-media">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <div class="entry-content">
                <?php
                the_content();

                wp_link_pages(array(
                    'before' => '<div class="page-links">' . esc_html__('Pages:', 'aipromptzyra'),
                    'after'  => '</div>',
                ));
                ?>
            </div>
        </article>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
