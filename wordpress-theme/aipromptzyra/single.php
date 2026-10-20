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
    ?>
        <div class="single-article-main-col">
            <article id="post-<?php the_ID(); ?>" <?php post_class('article-single'); ?>>
                <header class="entry-header">
                    <?php
                    // Only display real, non-generic category badges
                    $categories = get_the_category();
                    $real_category = null;
                    if (!empty($categories)) {
                        foreach ($categories as $cat) {
                            $cname = strtolower(trim($cat->name));
                            if ($cname !== 'blog' && $cname !== 'uncategorized' && $cname !== 'uncategorised') {
                                $real_category = $cat;
                                break;
                            }
                        }
                    }
                    ?>
                    <?php if ($real_category) : ?>
                        <div class="entry-category-wrap">
                            <a href="<?php echo esc_url(get_category_link($real_category->term_id)); ?>" class="entry-category-badge">
                                <?php echo esc_html($real_category->name); ?>
                            </a>
                        </div>
                    <?php endif; ?>

                    <h1 class="entry-title"><?php the_title(); ?></h1>

                    <?php if (has_excerpt()) : ?>
                        <p class="entry-lead"><?php echo get_the_excerpt(); ?></p>
                    <?php endif; ?>

                    <?php
                    $author_id    = get_the_author_meta('ID');
                    $author_name  = get_the_author();
                    $author_url   = $author_id ? get_author_posts_url($author_id) : '';
                    $author_bio   = get_the_author_meta('description');
                    $author_avatar = $author_id ? get_avatar($author_id, 44, '', esc_attr($author_name), array('class' => 'author-avatar-img')) : '';

                    // Fallback to neutral editorial team if author name is missing
                    if (empty($author_name)) {
                        $author_name = __('AIPromptzyra Editorial Team', 'aipromptzyra');
                    }

                    // Dynamically calculate estimated read time based on actual word count
                    $content = get_post_field('post_content', get_the_ID());
                    $word_count = !empty($content) ? str_word_count(strip_tags($content)) : 600;
                    $reading_time = max(1, ceil($word_count / 200));
                    ?>

                    <div class="entry-meta-bar">
                        <div class="entry-author-info">
                            <?php if ($author_avatar) : ?>
                                <div class="author-avatar-wrap">
                                    <?php if ($author_url) : ?>
                                        <a href="<?php echo esc_url($author_url); ?>" aria-label="<?php echo esc_attr($author_name); ?>">
                                            <?php echo $author_avatar; ?>
                                        </a>
                                    <?php else : ?>
                                        <?php echo $author_avatar; ?>
                                    <?php endif; ?>
                                </div>
                            <?php endif; ?>
                            <div class="author-text-meta">
                                <span class="author-byline">
                                    <span class="meta-label"><?php esc_html_e('By', 'aipromptzyra'); ?></span>
                                    <?php if ($author_url) : ?>
                                        <a href="<?php echo esc_url($author_url); ?>" class="author-link"><?php echo esc_html($author_name); ?></a>
                                    <?php else : ?>
                                        <span class="author-name"><?php echo esc_html($author_name); ?></span>
                                    <?php endif; ?>
                                    <span class="author-role-pill"><?php esc_html_e('Author', 'aipromptzyra'); ?></span>
                                </span>
                            </div>
                        </div>

                        <div class="entry-date-read-meta">
                            <span class="meta-item entry-date">
                                <svg class="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                <span><?php esc_html_e('Published:', 'aipromptzyra'); ?> <strong><?php echo esc_html(get_the_date()); ?></strong></span>
                            </span>
                            <span class="meta-sep">&bull;</span>
                            <span class="meta-item entry-reading-time">
                                <svg class="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                <span><?php esc_html_e('Read time:', 'aipromptzyra'); ?> <strong><?php printf(esc_html__('%d min read', 'aipromptzyra'), $reading_time); ?></strong></span>
                            </span>
                        </div>
                    </div>
                </header>

                <?php if (has_post_thumbnail()) : ?>
                    <figure class="entry-featured-media">
                        <?php the_post_thumbnail('large', array('class' => 'featured-media-img', 'loading' => 'eager')); ?>
                        <?php if ($caption = get_the_post_thumbnail_caption()) : ?>
                            <figcaption class="featured-media-caption"><?php echo esc_html($caption); ?></figcaption>
                        <?php endif; ?>
                    </figure>
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

                <?php if (has_tag()) : ?>
                    <footer class="entry-footer">
                        <?php the_tags('<div class="entry-tags"><span class="tags-label">' . esc_html__('Tags:', 'aipromptzyra') . '</span> ', ' ', '</div>'); ?>
                    </footer>
                <?php endif; ?>
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
