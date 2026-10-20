<?php
/**
 * The template for displaying Author Archive pages
 *
 * @package AIPromptzyra
 * @version 1.0.2
 */

get_header();

$curauth = (isset($_GET['author_name'])) ? get_user_by('slug', $author_name) : get_userdata(intval($author));
$author_name = $curauth ? $curauth->display_name : __('Verified Author', 'aipromptzyra');
$author_bio  = $curauth ? $curauth->description : '';
$author_id   = $curauth ? $curauth->ID : 0;
?>

<main id="primary" class="site-main author-archive-main">
    <div class="container author-archive-container">
        <!-- Author Profile Header Card -->
        <header class="author-header-card">
            <div class="author-header-avatar-wrap">
                <?php echo get_avatar($author_id, 96, '', esc_attr($author_name), array('class' => 'author-header-avatar')); ?>
                <span class="author-header-badge" title="<?php esc_attr_e('Verified Author', 'aipromptzyra'); ?>">✓</span>
            </div>

            <div class="author-header-details">
                <div class="author-header-kicker"><?php esc_html_e('VERIFIED AUTHOR PROFILE', 'aipromptzyra'); ?></div>
                <h1 class="author-header-title"><?php echo esc_html($author_name); ?></h1>
                <?php if ($author_bio) : ?>
                    <p class="author-header-bio"><?php echo esc_html($author_bio); ?></p>
                <?php else : ?>
                    <p class="author-header-bio">
                        <?php printf(esc_html__('Published prompt formulas and generative tutorials written by %s on AIPromptZyra.', 'aipromptzyra'), esc_html($author_name)); ?>
                    </p>
                <?php endif; ?>
            </div>
        </header>

        <!-- Articles Grid by Author -->
        <section class="author-articles-section">
            <div class="author-section-heading">
                <h2 class="section-title">
                    <?php printf(esc_html__('Articles by %s', 'aipromptzyra'), esc_html($author_name)); ?>
                </h2>
                <p class="section-subtitle">
                    <?php printf(esc_html__('Showing published guides, tutorials, and prompt formulas.', 'aipromptzyra')); ?>
                </p>
            </div>

            <?php if (have_posts()) : ?>
                <div class="guides-grid">
                    <?php
                    while (have_posts()) :
                        the_post();
                        get_template_part('template-parts/content', 'guide-card');
                    endwhile;
                    ?>
                </div>

                <?php
                the_posts_pagination(array(
                    'mid_size'           => 2,
                    'prev_text'          => '&larr; ' . esc_html__('Previous', 'aipromptzyra'),
                    'next_text'          => esc_html__('Next', 'aipromptzyra') . ' &rarr;',
                    'screen_reader_text' => esc_html__('Author Posts Navigation', 'aipromptzyra'),
                ));
                ?>
            <?php else : ?>
                <div class="no-posts-box">
                    <p><?php esc_html_e('No articles found by this author.', 'aipromptzyra'); ?></p>
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="btn-return-home">
                        &larr; <?php esc_html_e('Return to Home', 'aipromptzyra'); ?>
                    </a>
                </div>
            <?php endif; ?>
        </section>
    </div>
</main>

<?php get_footer(); ?>
