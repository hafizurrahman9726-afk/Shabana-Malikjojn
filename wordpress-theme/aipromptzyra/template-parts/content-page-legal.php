<?php
/**
 * Shared Legal & Information Page Content Template Part
 * Used by page-legal.php and page.php for legal/editorial pages
 *
 * @package AIPromptzyra
 * @version 1.1.0
 */

if (!defined('ABSPATH')) {
    exit;
}

$current_slug = get_post_field('post_name', get_the_ID());

// Configuration map for verified page metadata
$legal_meta_config = array(
    'privacy-policy' => array(
        'label'  => esc_html__('Privacy Policy', 'aipromptzyra'),
        'items'  => array(
            'date'   => esc_html__('Effective Date: October 21, 2026', 'aipromptzyra'),
            'editor' => esc_html__('Editor: Zyra Ansari', 'aipromptzyra'),
        ),
    ),
    'terms-and-conditions' => array(
        'label'  => esc_html__('Terms & Conditions', 'aipromptzyra'),
        'items'  => array(
            'date'   => esc_html__('Effective Date: October 21, 2026', 'aipromptzyra'),
            'editor' => esc_html__('Editor: Zyra Ansari', 'aipromptzyra'),
        ),
    ),
    'disclaimer' => array(
        'label'  => esc_html__('Disclaimer', 'aipromptzyra'),
        'items'  => array(
            'date'   => esc_html__('Effective Date: October 21, 2026', 'aipromptzyra'),
            'editor' => esc_html__('Editor: Zyra Ansari', 'aipromptzyra'),
        ),
    ),
    'contact' => array(
        'label'  => esc_html__('Editorial Desk', 'aipromptzyra'),
        'items'  => array(
            'editor' => esc_html__('Editor: Zyra Ansari', 'aipromptzyra'),
            'date'   => esc_html__('Last Updated: October 21, 2026', 'aipromptzyra'),
        ),
    ),
);

// Valid active legal pages to link (Editorial Policy is excluded because it was removed)
$valid_legal_pages = array(
    'contact'              => array('title' => esc_html__('Contact Us', 'aipromptzyra'), 'url' => home_url('/contact/')),
    'privacy-policy'       => array('title' => esc_html__('Privacy Policy', 'aipromptzyra'), 'url' => home_url('/privacy-policy/')),
    'terms-and-conditions' => array('title' => esc_html__('Terms & Conditions', 'aipromptzyra'), 'url' => home_url('/terms-and-conditions/')),
    'disclaimer'           => array('title' => esc_html__('Disclaimer', 'aipromptzyra'), 'url' => home_url('/disclaimer/')),
);

// Exclude current page from its own related links
$related_links = array();
foreach ($valid_legal_pages as $slug => $data) {
    if ($slug !== $current_slug) {
        $related_links[$slug] = $data;
    }
}

$page_meta = isset($legal_meta_config[$current_slug]) ? $legal_meta_config[$current_slug] : null;
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
        // Filter out any legacy hardcoded meta or nav bar that might still be stored in raw post_content
        $raw_content = get_the_content();
        $filtered_content = preg_replace('/<div class="page-meta-badge-bar">.*?<\/div>/s', '', $raw_content);
        $filtered_content = preg_replace('/<div class="page-nav-bar">.*?<\/div>\s*<\/div>/s', '', $filtered_content);
        $filtered_content = apply_filters('the_content', $filtered_content);
        echo $filtered_content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped

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
            <span><?php echo esc_html__('AIPromptZyra • Published by Zyra Ansari', 'aipromptzyra'); ?></span>
        </div>
    </div>
</article>
