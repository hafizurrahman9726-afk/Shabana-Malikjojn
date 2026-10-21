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
                <?php
                $rhea_avatar_url   = 'https://aipromptzyra.com/wp-content/uploads/2026/10/Rhea-Sharma.jpg';
                $aditya_avatar_url = 'https://aipromptzyra.com/wp-content/uploads/2026/10/Aditya-Sen.jpg';
                $zyra_avatar_url   = 'https://aipromptzyra.com/wp-content/uploads/2026/10/Zyra-Ansari.jpg';

                $user_login = $author_obj ? $author_obj->user_login : '';
                $is_rhea   = (stripos($author_name, 'Rhea') !== false) || ((int)$author_id === 4) || (stripos($user_login, 'rhea') !== false);
                $is_aditya = (stripos($author_name, 'Aditya') !== false) || ((int)$author_id === 3) || (stripos($user_login, 'aditya') !== false);
                $is_zyra   = (stripos($author_name, 'Zyra') !== false) || ($user_login === 'aipromptzyra') || ((int)$author_id === 1);

                $custom_avatar = $author_id ? get_user_meta($author_id, 'author_profile_picture', true) : '';
                if (empty($custom_avatar) && $author_id) {
                    $custom_avatar = get_user_meta($author_id, 'user_avatar', true);
                }

                if (!empty($custom_avatar)) :
                ?>
                    <img src="<?php echo esc_url($custom_avatar); ?>" alt="<?php echo esc_attr($author_name); ?>" width="96" height="96" class="author-header-avatar" />
                <?php elseif ($is_rhea) : ?>
                    <img src="<?php echo esc_url($rhea_avatar_url); ?>" alt="<?php echo esc_attr($author_name); ?>" width="96" height="96" class="author-header-avatar" />
                <?php elseif ($is_aditya) : ?>
                    <img src="<?php echo esc_url($aditya_avatar_url); ?>" alt="<?php echo esc_attr($author_name); ?>" width="96" height="96" class="author-header-avatar" />
                <?php elseif ($is_zyra) : ?>
                    <img src="<?php echo esc_url($zyra_avatar_url); ?>" alt="<?php echo esc_attr($author_name); ?>" width="96" height="96" class="author-header-avatar" />
                <?php else : ?>
                    <?php echo get_avatar($author_id, 96, '', esc_attr($author_name), array('class' => 'author-header-avatar')); ?>
                <?php endif; ?>
                <span class="author-header-badge" title="<?php esc_attr_e('Verified Author', 'aipromptzyra'); ?>">✓</span>
            </div>

            <div class="author-header-details">
                <div class="author-header-kicker"><?php echo $is_zyra ? esc_html__('OWNER & FOUNDER', 'aipromptzyra') : esc_html__('VERIFIED AUTHOR PROFILE', 'aipromptzyra'); ?></div>
                <h1 class="author-header-title"><?php echo esc_html($author_name); ?></h1>
                <?php if ($author_bio) : ?>
                    <p class="author-header-bio"><?php echo esc_html($author_bio); ?></p>
                <?php else : ?>
                    <p class="author-header-bio">
                        <?php
                        if ($is_zyra) {
                            echo esc_html__('Owner of AIPromptZyra. Guides the platform vision, creative prompt standards, and community resources across Google Gemini, ChatGPT, and Midjourney.', 'aipromptzyra');
                        } else {
                            printf(esc_html__('Published prompt formulas and generative tutorials written by %s on AIPromptZyra.', 'aipromptzyra'), esc_html($author_name));
                        }
                        ?>
                    </p>
                <?php endif; ?>
                <?php if ($is_zyra) : ?>
                    <div class="author-social-links" style="display:flex;gap:10px;margin-top:12px;">
                        <a href="https://www.instagram.com/aipromptzyra" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Instagram">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="https://t.me/aipromptzyra" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Telegram">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                        </a>
                        <a href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="WhatsApp Channel">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
                        </a>
                    </div>
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
