<?php
/**
 * Template part for displaying the Single Article Right Sidebar
 * Matching AIPromptZyra design reference
 *
 * Sections:
 * 1. Post Author (avatar, verified badge, bio, "View All Guides" link)
 * 2. Trending Prompts (compact thumbnails, titles, dates, links)
 * 3. Categories (only 3 approved categories: Trending Prompts, Couple Prompts, AI Photo Prompts)
 *
 * @package AIPromptzyra
 * @version 1.0.2
 */

if (!defined('ABSPATH')) {
    exit;
}

$current_post_id = get_the_ID();
$author_id       = get_the_author_meta('ID');
$author_name     = get_the_author() ?: 'Mariya Ansari';
$author_bio      = get_the_author_meta('description');
$author_posts_url = $author_id ? get_author_posts_url($author_id) : home_url('/author/mariya-ansari/');

if (empty($author_bio)) {
    $author_bio = __('Mariya Ansari is a passionate blogger and digital creator with years of experience in creative technology and AI prompt engineering. Through AIPromptZyra, Mariya focuses on AI photo editing prompts, festive creative ideas, couple portraits, and practical guides.', 'aipromptzyra');
}
?>

<aside id="secondary" class="widget-area single-article-sidebar" aria-label="<?php esc_attr_e('Article Sidebar', 'aipromptzyra'); ?>">

    <!-- 1. POST AUTHOR WIDGET -->
    <div class="az-sidebar-widget az-widget-author">
        <h3 class="az-widget-title">
            <span><?php esc_html_e('Post Author', 'aipromptzyra'); ?></span>
        </h3>

        <div class="az-author-card-content">
            <div class="az-author-avatar-wrap">
                <?php
                $avatar_img = get_avatar($author_id, 80, '', esc_attr($author_name), array('class' => 'az-author-avatar-img'));
                if ($avatar_img) {
                    echo $avatar_img;
                } else {
                    echo '<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80" alt="' . esc_attr($author_name) . '" class="az-author-avatar-img" width="80" height="80" loading="lazy" />';
                }
                ?>
            </div>

            <div class="az-author-heading-row">
                <h4 class="az-author-name"><?php echo esc_html($author_name); ?></h4>
                <span class="az-verified-badge" title="<?php esc_attr_e('Verified Author', 'aipromptzyra'); ?>" aria-label="<?php esc_attr_e('Verified Author', 'aipromptzyra'); ?>">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
                        <path d="M8.5 12.5L10.8 14.8L15.5 9.5" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </span>
            </div>

            <p class="az-author-bio">
                <?php echo esc_html($author_bio); ?>
            </p>

            <div class="az-author-action">
                <a href="<?php echo esc_url($author_posts_url); ?>" class="az-btn-view-guides">
                    <?php esc_html_e('View All Guides', 'aipromptzyra'); ?>
                </a>
            </div>
        </div>
    </div>

    <!-- 2. TRENDING PROMPTS WIDGET -->
    <div class="az-sidebar-widget az-widget-trending">
        <h3 class="az-widget-title">
            <span><?php esc_html_e('Trending Prompts', 'aipromptzyra'); ?></span>
        </h3>

        <div class="az-trending-list">
            <?php
            $trending_query = new WP_Query(array(
                'post_type'           => array('prompt', 'post'),
                'posts_per_page'      => 4,
                'post_status'         => 'publish',
                'ignore_sticky_posts' => 1,
                'post__not_in'        => array($current_post_id),
                'orderby'             => 'date',
                'order'               => 'DESC',
            ));

            if ($trending_query->have_posts()) :
                while ($trending_query->have_posts()) :
                    $trending_query->the_post();
                    $thumb_url = get_the_post_thumbnail_url(get_the_ID(), 'thumbnail');
                    if (!$thumb_url) {
                        $thumb_url = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=120&h=120&q=80';
                    }
                    ?>
                    <article class="az-trending-item">
                        <a href="<?php the_permalink(); ?>" class="az-trending-thumb-link" aria-hidden="true" tabindex="-1">
                            <img src="<?php echo esc_url($thumb_url); ?>" alt="<?php the_title_attribute(); ?>" class="az-trending-thumb" width="56" height="56" loading="lazy" />
                        </a>
                        <div class="az-trending-info">
                            <h5 class="az-trending-item-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h5>
                            <time class="az-trending-date" datetime="<?php echo esc_attr(get_the_date('c')); ?>">
                                <?php echo esc_html(get_the_date('F j, Y')); ?>
                            </time>
                        </div>
                    </article>
                <?php
                endwhile;
                wp_reset_postdata();
            else :
                // Curated fallback trending items if database has not yet been populated
                $fallback_trending = array(
                    array(
                        'title' => 'Indian Traditional Wedding Prompt for Gemini AI (2026)',
                        'url'   => home_url('/indian-wedding-photo-prompt-for-gemini/'),
                        'date'  => 'October 3, 2026',
                        'img'   => 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=120&h=120&q=80',
                    ),
                    array(
                        'title' => 'Couple Maternity Photoshoot Prompt Ideas in Indian Saree',
                        'url'   => home_url('/couple-maternity-photoshoot-prompts-for-gemini-ai/'),
                        'date'  => 'October 3, 2026',
                        'img'   => 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=120&h=120&q=80',
                    ),
                    array(
                        'title' => 'Eyes Prompt for Girl Instagram & ChatGPT (2026)',
                        'url'   => home_url('/prompts/eyes-prompt-for-girl/'),
                        'date'  => 'October 3, 2026',
                        'img'   => 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
                    ),
                    array(
                        'title' => 'Couple Eyes Prompt ChatGPT Aesthetic (2026)',
                        'url'   => home_url('/prompts/couple-eyes-prompt/'),
                        'date'  => 'October 2, 2026',
                        'img'   => 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
                    ),
                );

                foreach ($fallback_trending as $item) :
                    ?>
                    <article class="az-trending-item">
                        <a href="<?php echo esc_url($item['url']); ?>" class="az-trending-thumb-link" aria-hidden="true" tabindex="-1">
                            <img src="<?php echo esc_url($item['img']); ?>" alt="<?php echo esc_attr($item['title']); ?>" class="az-trending-thumb" width="56" height="56" loading="lazy" />
                        </a>
                        <div class="az-trending-info">
                            <h5 class="az-trending-item-title">
                                <a href="<?php echo esc_url($item['url']); ?>"><?php echo esc_html($item['title']); ?></a>
                            </h5>
                            <span class="az-trending-date"><?php echo esc_html($item['date']); ?></span>
                        </div>
                    </article>
                <?php
                endforeach;
            endif;
            ?>
        </div>
    </div>

    <!-- 3. CATEGORIES WIDGET (STRICTLY THE 3 APPROVED CATEGORIES) -->
    <div class="az-sidebar-widget az-widget-categories">
        <h3 class="az-widget-title">
            <span><?php esc_html_e('Categories', 'aipromptzyra'); ?></span>
        </h3>

        <div class="az-categories-list">
            <?php
            $approved_categories = array(
                array(
                    'name' => __('Trending Prompts', 'aipromptzyra'),
                    'slug' => 'trending-prompts',
                ),
                array(
                    'name' => __('Couple Prompts', 'aipromptzyra'),
                    'slug' => 'couple-prompts',
                ),
                array(
                    'name' => __('AI Photo Prompts', 'aipromptzyra'),
                    'slug' => 'ai-photo-prompts',
                ),
            );

            foreach ($approved_categories as $cat) :
                // Look up in custom taxonomy 'prompt_category' first, then core 'category'
                $term = get_term_by('slug', $cat['slug'], 'prompt_category');
                if (!$term) {
                    $term = get_term_by('slug', $cat['slug'], 'category');
                }

                if ($term && !is_wp_error($term)) {
                    $cat_link = get_term_link($term);
                } else {
                    $cat_link = home_url('/category/' . $cat['slug'] . '/');
                }
                ?>
                <a href="<?php echo esc_url($cat_link); ?>" class="az-category-pill-link">
                    <span class="az-cat-name"><?php echo esc_html($cat['name']); ?></span>
                    <svg class="az-cat-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </a>
            <?php endforeach; ?>
        </div>
    </div>

</aside>
