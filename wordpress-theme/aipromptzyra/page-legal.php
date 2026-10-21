<?php
/**
 * Template Name: Legal & Editorial Page
 * Description: Clean, unified shared template for Contact, Privacy Policy, Terms, and Disclaimer pages.
 *
 * @package AIPromptzyra
 * @version 1.1.0
 */

get_header(); ?>

<main id="primary" class="site-main container page-container legal-page-container">
    <?php
    while (have_posts()) :
        the_post();
        get_template_part('template-parts/content', 'page-legal');
    endwhile;
    ?>
</main>

<?php get_footer(); ?>
