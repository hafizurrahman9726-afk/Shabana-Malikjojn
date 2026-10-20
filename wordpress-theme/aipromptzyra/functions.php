<?php
/**
 * AIPromptzyra functions and definitions
 *
 * @package AIPromptzyra
 * @version 1.0.1
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

define('AIPROMPTZYRA_VERSION', '1.0.5');
define('AIPROMPTZYRA_DIR', get_template_directory());
define('AIPROMPTZYRA_URI', get_template_directory_uri());

/**
 * Sets up theme defaults and registers support for various WordPress features.
 */
function aipromptzyra_setup() {
    load_theme_textdomain('aipromptzyra', AIPROMPTZYRA_DIR . '/languages');

    add_theme_support('automatic-feed-links');
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');

    set_post_thumbnail_size(800, 600, true);
    add_image_size('aipromptzyra-card', 600, 600, true);
    add_image_size('aipromptzyra-featured', 600, 750, true);
    add_image_size('aipromptzyra-guide', 640, 400, true);

    register_nav_menus(array(
        'primary'           => esc_html__('Primary Menu', 'aipromptzyra'),
        'footer_quick'      => esc_html__('Footer Quick Links', 'aipromptzyra'),
        'footer_important'  => esc_html__('Footer Important Pages', 'aipromptzyra'),
        'footer_categories' => esc_html__('Footer Categories', 'aipromptzyra'),
    ));

    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    add_theme_support('custom-logo', array(
        'height'      => 60,
        'width'       => 220,
        'flex-width'  => true,
        'flex-height' => true,
    ));

    add_theme_support('align-wide');
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'aipromptzyra_setup');

/**
 * Register Custom Post Type for AI Prompts.
 */
function aipromptzyra_register_post_types() {
    $prompt_labels = array(
        'name'                  => _x('AI Prompts', 'Post type general name', 'aipromptzyra'),
        'singular_name'         => _x('AI Prompt', 'Post type singular name', 'aipromptzyra'),
        'menu_name'             => _x('Prompts', 'Admin Menu text', 'aipromptzyra'),
        'name_admin_bar'        => _x('Prompt', 'Add New on Toolbar', 'aipromptzyra'),
        'add_new'               => __('Add New Prompt', 'aipromptzyra'),
        'add_new_item'          => __('Add New Prompt', 'aipromptzyra'),
        'new_item'              => __('New Prompt', 'aipromptzyra'),
        'edit_item'             => __('Edit Prompt', 'aipromptzyra'),
        'view_item'             => __('View Prompt', 'aipromptzyra'),
        'all_items'             => __('All Prompts', 'aipromptzyra'),
        'search_items'          => __('Search Prompts', 'aipromptzyra'),
        'not_found'             => __('No prompts found.', 'aipromptzyra'),
        'not_found_in_trash'    => __('No prompts found in Trash.', 'aipromptzyra'),
    );

    $prompt_args = array(
        'labels'             => $prompt_labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array('slug' => 'prompts', 'with_front' => false),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => 5,
        'menu_icon'          => 'dashicons-art',
        'supports'           => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
        'show_in_rest'       => true,
    );

    register_post_type('prompt', $prompt_args);

    // Register Prompt Categories taxonomy.
    $cat_labels = array(
        'name'              => _x('Prompt Categories', 'taxonomy general name', 'aipromptzyra'),
        'singular_name'     => _x('Prompt Category', 'taxonomy singular name', 'aipromptzyra'),
        'search_items'      => __('Search Prompt Categories', 'aipromptzyra'),
        'all_items'         => __('All Categories', 'aipromptzyra'),
        'parent_item'       => __('Parent Category', 'aipromptzyra'),
        'parent_item_colon' => __('Parent Category:', 'aipromptzyra'),
        'edit_item'         => __('Edit Category', 'aipromptzyra'),
        'update_item'       => __('Update Category', 'aipromptzyra'),
        'add_new_item'      => __('Add New Category', 'aipromptzyra'),
        'new_item_name'     => __('New Category Name', 'aipromptzyra'),
        'menu_name'         => __('Categories', 'aipromptzyra'),
    );

    register_taxonomy('prompt_category', array('prompt'), array(
        'hierarchical'      => true,
        'labels'            => $cat_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array('slug' => 'prompt-category', 'with_front' => false),
        'show_in_rest'      => true,
    ));

    // Register Prompt Styles taxonomy.
    $style_labels = array(
        'name'          => _x('Prompt Styles', 'taxonomy general name', 'aipromptzyra'),
        'singular_name' => _x('Prompt Style', 'taxonomy singular name', 'aipromptzyra'),
        'menu_name'     => __('Styles', 'aipromptzyra'),
    );

    register_taxonomy('prompt_style', array('prompt'), array(
        'hierarchical'      => false,
        'labels'            => $style_labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'rewrite'           => array('slug' => 'prompt-style', 'with_front' => false),
        'show_in_rest'      => true,
    ));
}
add_action('init', 'aipromptzyra_register_post_types');

/**
 * Auto-provision essential categories, pages, and flush rewrite rules.
 * Runs once upon activation or when needed so user never sees 404s.
 */
function aipromptzyra_after_switch_theme() {
    aipromptzyra_register_post_types();
    flush_rewrite_rules();

    // 1. Ensure strictly the 3 approved main categories exist
    $allowed_categories = array(
        'Trending Prompts' => 'trending-prompts',
        'Couple Prompts'   => 'couple-prompts',
        'AI Photo Prompts' => 'ai-photo-prompts',
    );

    $target_terms = array();
    foreach ($allowed_categories as $cat_name => $cat_slug) {
        $existing = get_term_by('slug', $cat_slug, 'prompt_category');
        if (!$existing) {
            $inserted = wp_insert_term($cat_name, 'prompt_category', array('slug' => $cat_slug));
            if (!is_wp_error($inserted)) {
                $target_terms[$cat_slug] = $inserted['term_id'];
            }
        } else {
            $target_terms[$cat_slug] = $existing->term_id;
        }
    }

    // Set Trending Prompts as the default category
    if (!empty($target_terms['trending-prompts'])) {
        update_option('default_prompt_category', $target_terms['trending-prompts']);
    }

    // 2. Safe Reassignment & Removal of unnecessary/old categories
    // Map obsolete categories to the most relevant of the 3 active categories
    $reassignment_map = array(
        'girl-prompts'      => 'ai-photo-prompts',
        'boy-prompts'       => 'ai-photo-prompts',
        'saree-prompts'     => 'ai-photo-prompts',
        'family-prompts'    => 'couple-prompts',
        'festival-prompts'  => 'trending-prompts',
        'cinematic-prompts' => 'trending-prompts',
        'ai-art-prompts'    => 'trending-prompts',
    );

    foreach ($reassignment_map as $old_slug => $target_slug) {
        $old_term = get_term_by('slug', $old_slug, 'prompt_category');
        if ($old_term && !is_wp_error($old_term)) {
            $target_term_id = isset($target_terms[$target_slug]) ? $target_terms[$target_slug] : $target_terms['trending-prompts'];

            // Find all published posts assigned to the old category
            $posts_to_reassign = get_posts(array(
                'post_type'      => array('prompt', 'post'),
                'posts_per_page' => -1,
                'tax_query'      => array(
                    array(
                        'taxonomy' => 'prompt_category',
                        'field'    => 'term_id',
                        'terms'    => $old_term->term_id,
                    ),
                ),
                'fields' => 'ids',
            ));

            // Safely reassign posts to the target category without losing them
            if (!empty($posts_to_reassign)) {
                foreach ($posts_to_reassign as $post_id) {
                    wp_set_object_terms($post_id, array($target_term_id), 'prompt_category', true);
                    // Remove the old term association
                    wp_remove_object_terms($post_id, $old_term->term_id, 'prompt_category');
                }
            }

            // Delete the obsolete term now that its posts are reassigned
            wp_delete_term($old_term->term_id, 'prompt_category');
        }
    }

    // 2. Seed Essential Pages if they don't exist
    $pages_to_create = array(
        'prompt-builder' => array(
            'title'    => 'AI Prompt Builder',
            'content'  => 'Use our interactive 8-field AI prompt builder to generate copy-ready prompts for Gemini, ChatGPT, and Midjourney.',
            'template' => 'page-prompt-builder.php',
        ),
        'categories' => array(
            'title'    => 'Prompt Categories',
            'content'  => 'Explore all AI prompt categories including portraits, cinematic styles, festivals, and creative art.',
            'template' => 'page.php',
        ),
        'guides' => array(
            'title'    => 'Guides & Tutorials',
            'content'  => 'Helpful articles, tips, and prompt engineering tutorials to level up your AI creativity.',
            'template' => 'page.php',
        ),
        'about' => array(
            'title'    => 'About AIPromptzyra',
            'content'  => 'AIPromptzyra is a premier discovery platform for AI prompt enthusiasts, artists, and creators. We provide tested, copy-ready prompt recipes for Gemini, ChatGPT, and Midjourney.',
            'template' => 'page.php',
        ),
        'contact' => array(
            'title'    => 'Contact Us',
            'content'  => 'Get in touch with the AIPromptzyra team for prompt submissions, collaborations, or questions.',
            'template' => 'page.php',
        ),
        'privacy-policy' => array(
            'title'    => 'Privacy Policy',
            'content'  => 'AIPromptzyra values your privacy. We do not sell or monetize personal information. Local preferences are stored securely on your device.',
            'template' => 'page.php',
        ),
        'terms-and-conditions' => array(
            'title'    => 'Terms and Conditions',
            'content'  => 'All prompts on AIPromptzyra are free to use, modify, and apply for both personal and commercial image generation.',
            'template' => 'page.php',
        ),
        'disclaimer' => array(
            'title'    => 'Disclaimer',
            'content'  => 'AIPromptzyra is an independent platform. All product and company names (Gemini, ChatGPT, Midjourney) are trademarks of their respective holders.',
            'template' => 'page.php',
        ),
        'editorial-policy' => array(
            'title'    => 'Editorial Policy',
            'content'  => 'Our team rigorously tests prompts for quality, accuracy, and photorealism before publication.',
            'template' => 'page.php',
        ),
    );

    foreach ($pages_to_create as $slug => $data) {
        $existing = get_page_by_path($slug);
        if (!$existing) {
            $page_id = wp_insert_post(array(
                'post_title'     => $data['title'],
                'post_name'      => $slug,
                'post_content'   => $data['content'],
                'post_status'    => 'publish',
                'post_type'      => 'page',
                'comment_status' => 'closed',
            ));
            if ($page_id && !empty($data['template'])) {
                update_post_meta($page_id, '_wp_page_template', $data['template']);
            }
        }
    }
}
add_action('after_switch_theme', 'aipromptzyra_after_switch_theme');

// Also trigger on admin init once if not yet provisioned
function aipromptzyra_check_initial_setup() {
    if (!get_option('aipromptzyra_setup_completed_v1')) {
        aipromptzyra_after_switch_theme();
        update_option('aipromptzyra_setup_completed_v1', 1);
    }
}
add_action('admin_init', 'aipromptzyra_check_initial_setup');

/**
 * Enqueue scripts and styles with version busting.
 */
function aipromptzyra_scripts() {
    wp_enqueue_style(
        'aipromptzyra-fonts',
        'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
        array(),
        null
    );

    wp_enqueue_style(
        'aipromptzyra-style',
        get_stylesheet_uri(),
        array(),
        AIPROMPTZYRA_VERSION
    );

    wp_enqueue_style(
        'aipromptzyra-theme-css',
        AIPROMPTZYRA_URI . '/assets/css/theme.css',
        array('aipromptzyra-style'),
        AIPROMPTZYRA_VERSION
    );

    wp_enqueue_style(
        'aipromptzyra-ai-prompt-box-style',
        AIPROMPTZYRA_URI . '/assets/css/ai-prompt-box.css',
        array('aipromptzyra-theme-css'),
        AIPROMPTZYRA_VERSION
    );

    wp_enqueue_script(
        'aipromptzyra-theme-js',
        AIPROMPTZYRA_URI . '/assets/js/theme.js',
        array(),
        AIPROMPTZYRA_VERSION,
        true
    );

    wp_enqueue_script(
        'aipromptzyra-prompt-builder-js',
        AIPROMPTZYRA_URI . '/assets/js/prompt-builder.js',
        array(),
        AIPROMPTZYRA_VERSION,
        true
    );

    wp_localize_script('aipromptzyra-theme-js', 'aipromptzyraData', array(
        'ajaxUrl'   => admin_url('admin-ajax.php'),
        'nonce'     => wp_create_nonce('aipromptzyra_nonce'),
        'siteUrl'   => home_url('/'),
        'copiedMsg' => esc_html__('Prompt copied to clipboard!', 'aipromptzyra'),
    ));
}
add_action('wp_enqueue_scripts', 'aipromptzyra_scripts');

/**
 * Register AI Prompt Box Custom Gutenberg Block
 */
function aipromptzyra_register_ai_prompt_box_block() {
    // Register editor script for Gutenberg blocks inserter
    wp_register_script(
        'aipromptzyra-ai-prompt-box-editor-js',
        AIPROMPTZYRA_URI . '/assets/js/ai-prompt-box-block.js',
        array('wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n'),
        AIPROMPTZYRA_VERSION,
        true
    );

    // Register block CSS (editor & frontend)
    wp_register_style(
        'aipromptzyra-ai-prompt-box-style',
        AIPROMPTZYRA_URI . '/assets/css/ai-prompt-box.css',
        array(),
        AIPROMPTZYRA_VERSION
    );

    register_block_type('aipromptzyra/ai-prompt-box', array(
        'editor_script' => 'aipromptzyra-ai-prompt-box-editor-js',
        'style'         => 'aipromptzyra-ai-prompt-box-style',
    ));
}
add_action('init', 'aipromptzyra_register_ai_prompt_box_block');

/**
 * AJAX Handler for Prompt Builder
 */
function aipromptzyra_generate_prompt_ajax() {
    check_ajax_referer('aipromptzyra_nonce', 'security');

    $subject      = isset($_POST['subject']) ? sanitize_text_field(wp_unslash($_POST['subject'])) : 'Girl';
    $outfit       = isset($_POST['outfit']) ? sanitize_text_field(wp_unslash($_POST['outfit'])) : 'Saree';
    $background   = isset($_POST['background']) ? sanitize_text_field(wp_unslash($_POST['background'])) : 'Nature';
    $style        = isset($_POST['style']) ? sanitize_text_field(wp_unslash($_POST['style'])) : 'Cinematic';
    $lighting     = isset($_POST['lighting']) ? sanitize_text_field(wp_unslash($_POST['lighting'])) : 'Soft Light';
    $mood         = isset($_POST['mood']) ? sanitize_text_field(wp_unslash($_POST['mood'])) : 'Happy';
    $camera_angle = isset($_POST['camera_angle']) ? sanitize_text_field(wp_unslash($_POST['camera_angle'])) : 'Portrait';
    $color_tone   = isset($_POST['color_tone']) ? sanitize_text_field(wp_unslash($_POST['color_tone'])) : 'Natural';

    $prompt = sprintf(
        __('A stunning %1$s in a %2$s, set in a scenic %3$s environment, illuminated with %4$s, with an expressive %5$s mood, captured from a %6$s perspective, %7$s color grading, rendered in %8$s visual aesthetic, 8k resolution, photorealistic, intricate textures, masterpiece.', 'aipromptzyra'),
        strtolower($subject),
        strtolower($outfit),
        strtolower($background),
        strtolower($lighting),
        strtolower($mood),
        strtolower($camera_angle),
        strtolower($color_tone),
        strtolower($style)
    );

    wp_send_json_success(array(
        'prompt' => $prompt,
        'params' => compact('subject', 'outfit', 'background', 'style', 'lighting', 'mood', 'camera_angle', 'color_tone'),
    ));
}
add_action('wp_ajax_aipromptzyra_generate_prompt', 'aipromptzyra_generate_prompt_ajax');
/**
 * Enforce 30 published articles per homepage page and archive queries
 */
function aipromptzyra_modify_queries($query) {
    if (!is_admin() && $query->is_main_query()) {
        if (is_front_page() || is_home() || is_post_type_archive('prompt') || is_tax('prompt_category')) {
            $query->set('posts_per_page', 30);
        }
    }
}
add_action('pre_get_posts', 'aipromptzyra_modify_queries');

require_once AIPROMPTZYRA_DIR . '/inc/customizer.php';
require_once AIPROMPTZYRA_DIR . '/inc/template-tags.php';
