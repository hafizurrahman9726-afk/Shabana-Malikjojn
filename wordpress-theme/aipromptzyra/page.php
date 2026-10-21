<?php
/**
 * The template for displaying all pages
 *
 * @package AIPromptzyra
 * @version 1.1.0
 */

get_header(); ?>

<main id="primary" class="site-main container page-container">
    <?php
    while (have_posts()) :
        the_post();
        $slug = get_post_field('post_name', get_the_ID());

        if (in_array($slug, array('contact', 'privacy-policy', 'terms-and-conditions', 'disclaimer'))) :
            $legal_meta_config = array(
                'privacy-policy' => array(
                    'label'  => 'Privacy Policy',
                    'items'  => array('Effective Date: October 21, 2026', 'Editor: Zyra Ansari'),
                ),
                'terms-and-conditions' => array(
                    'label'  => 'Terms & Conditions',
                    'items'  => array('Effective Date: October 21, 2026', 'Editor: Zyra Ansari'),
                ),
                'disclaimer' => array(
                    'label'  => 'Disclaimer',
                    'items'  => array('Effective Date: October 21, 2026', 'Editor: Zyra Ansari'),
                ),
                'contact' => array(
                    'label'  => 'Editorial Desk',
                    'items'  => array('Editor: Zyra Ansari', 'Last Updated: October 21, 2026'),
                ),
            );

            $valid_legal_pages = array(
                'contact'              => array('title' => 'Contact Us', 'url' => home_url('/contact/')),
                'privacy-policy'       => array('title' => 'Privacy Policy', 'url' => home_url('/privacy-policy/')),
                'terms-and-conditions' => array('title' => 'Terms & Conditions', 'url' => home_url('/terms-and-conditions/')),
                'disclaimer'           => array('title' => 'Disclaimer', 'url' => home_url('/disclaimer/')),
            );

            $related_links = array();
            foreach ($valid_legal_pages as $p_slug => $p_data) {
                if ($p_slug !== $slug) {
                    $related_links[$p_slug] = $p_data;
                }
            }

            $page_meta = isset($legal_meta_config[$slug]) ? $legal_meta_config[$slug] : null;
    ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class('page-entry legal-page-entry'); ?>>
            <header class="entry-header page-header-centered">
                <h1 class="entry-title"><?php the_title(); ?></h1>
                <?php if (has_excerpt()) : ?>
                    <p class="entry-lead"><?php echo get_the_excerpt(); ?></p>
                <?php endif; ?>

                <?php if ($page_meta) : ?>
                    <div class="page-meta-badge-bar">
                        <?php if (!empty($page_meta['label'])) : ?>
                            <span class="page-meta-label"><?php echo esc_html($page_meta['label']); ?></span>
                        <?php endif; ?>
                        <?php
                        $first = true;
                        foreach ($page_meta['items'] as $item_text) :
                            if (!$first) : ?>
                                <span class="page-meta-dot">•</span>
                            <?php endif;
                            $first = false; ?>
                            <span class="page-meta-item"><?php echo esc_html($item_text); ?></span>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>
            </header>

            <?php if (has_post_thumbnail()) : ?>
                <div class="page-featured-media">
                    <?php the_post_thumbnail('large'); ?>
                </div>
            <?php endif; ?>

            <div class="entry-content">
                <?php
                // Cleanly render post content, removing any legacy duplicate blocks
                $raw_content = get_the_content();
                $clean_content = preg_replace('/<div class="page-meta-badge-bar">.*?<\/div>/s', '', $raw_content);
                $clean_content = preg_replace('/<div class="page-nav-bar">.*?<\/div>\s*<\/div>/s', '', $clean_content);
                $clean_content = preg_replace('/<div class="page-nav-bar">.*?<\/div>/s', '', $clean_content);
                echo apply_filters('the_content', $clean_content);

                wp_link_pages(array(
                    'before' => '<div class="page-links">' . esc_html__('Pages:', 'aipromptzyra'),
                    'after'  => '</div>',
                ));
                ?>
            </div>

            <!-- Standardized Bottom Related Pages Section -->
            <div class="page-nav-bar">
                <div class="page-nav-links-group">
                    <span class="page-nav-heading"><?php esc_html_e('Related Pages', 'aipromptzyra'); ?></span>
                    <div class="page-nav-links">
                        <?php foreach ($related_links as $link_item) : ?>
                            <a href="<?php echo esc_url($link_item['url']); ?>"><?php echo esc_html($link_item['title']); ?></a>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div class="page-nav-attribution">
                    <span><?php esc_html_e('AIPromptZyra • Published by Zyra Ansari', 'aipromptzyra'); ?></span>
                </div>
            </div>
        </article>
    <?php
        else :
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
    <?php
        endif;
    endwhile;
    ?>
</main>

<?php get_footer(); ?>
