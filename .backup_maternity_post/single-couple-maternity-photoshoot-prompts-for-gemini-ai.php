<?php
/**
 * Template Name: Couple Maternity AI Single Article
 * Template Post Type: post
 *
 * Dedicated WordPress single template for:
 * https://thepromptadda.in/couple-maternity-photoshoot-prompts-for-gemini-ai/
 * Post ID: 61594710183320
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

get_header(); ?>

<main id="primary" class="site-main container scma-main-container">
    <?php
    while (have_posts()) :
        the_post();
        get_template_part('template-parts/single', 'couple-maternity-ai');
    endwhile;
    ?>
</main>

<?php get_footer(); ?>
