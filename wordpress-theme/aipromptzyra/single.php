<?php
/**
 * The template for displaying all single posts / guides
 *
 * @package AIPromptzyra
 * @version 1.0.2
 */

get_header(); ?>

<main id="primary" class="site-main container single-article-layout">
    <?php
    while (have_posts()) :
        the_post();

        // Strictly scoped routing for couple maternity single article redesign
        if (is_single('couple-maternity-photoshoot-prompts-for-gemini-ai') || get_the_ID() == 61594710183320) {
            get_template_part('template-parts/single', 'couple-maternity-ai');
            continue;
        }
    ?>
        <div class="single-article-main-col">
            <article id="post-<?php the_ID(); ?>" <?php post_class('article-single'); ?>>
                <header class="entry-header">
                    <div class="entry-meta-top">
                        <span class="entry-category"><?php the_category(', '); ?></span>
                        <span class="entry-date"><?php echo get_the_date(); ?></span>
                        <span class="entry-reading-time">
                            <?php
                            $content = get_post_field('post_content', get_the_ID());
                            $word_count = str_word_count(strip_tags($content));
                            $reading_time = ceil($word_count / 200);
                            printf(esc_html__('%d min read', 'aipromptzyra'), max(1, $reading_time));
                            ?>
                        </span>
                    </div>

                    <h1 class="entry-title"><?php the_title(); ?></h1>

                    <?php if (has_excerpt()) : ?>
                        <p class="entry-lead"><?php echo get_the_excerpt(); ?></p>
                    <?php endif; ?>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <div class="entry-featured-media">
                        <?php the_post_thumbnail('large', array('class' => 'featured-media-img')); ?>
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

                <footer class="entry-footer">
                    <?php the_tags('<div class="entry-tags"><span class="tags-label">' . esc_html__('Tags:', 'aipromptzyra') . '</span> ', ' ', '</div>'); ?>
                </footer>
            </article>

            <!-- Post Navigation -->
            <nav class="navigation post-navigation" aria-label="<?php esc_attr_e('Posts', 'aipromptzyra'); ?>">
                <div class="nav-links">
                    <div class="nav-previous"><?php previous_post_link('%link', '&larr; %title'); ?></div>
                    <div class="nav-next"><?php next_post_link('%link', '%title &rarr;'); ?></div>
                </div>
            </nav>
        </div>

        <!-- Right Sidebar Column -->
        <div class="single-article-sidebar-col">
            <?php get_sidebar('single'); ?>
        </div>
    <?php endwhile; ?>
</main>

<?php get_footer(); ?>
