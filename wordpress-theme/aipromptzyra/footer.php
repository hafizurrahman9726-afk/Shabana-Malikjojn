<?php
/**
 * The template for displaying the footer
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}
?>
</div><!-- #content -->

<footer id="colophon" class="site-footer">
    <div class="footer-top-container container">
        <div class="footer-grid">
            <!-- Brand Column -->
            <div class="footer-col footer-col-brand">
                <a href="<?php echo esc_url(home_url('/')); ?>" class="footer-brand-link" rel="home">
                    <span class="brand-icon-wrapper" aria-hidden="true">
                        <svg class="brand-icon" viewBox="0 0 40 40" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="10" fill="#7C3AED" />
                            <path d="M12 28L20 12L28 28L20 23L12 28Z" fill="white" />
                            <path d="M20 12L24 20L20 23L16 20L20 12Z" fill="#DDD6FE" />
                        </svg>
                    </span>
                    <span class="footer-brand-title"><?php bloginfo('name'); ?></span>
                </a>
                <p class="footer-desc">
                    <?php echo esc_html(get_theme_mod('aipromptzyra_footer_text', __('Discover, create and explore the best AI prompts for your creative journey.', 'aipromptzyra'))); ?>
                </p>
                <div class="footer-social-links">
                    <a href="https://www.instagram.com/aipromptzyra" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Instagram">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://t.me/aipromptzyra" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Telegram">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                    <a href="https://whatsapp.com/channel/0029VbDrtskISTkDafKarY0u" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="WhatsApp Channel">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 2C6.5 2 2 6.5 2 12.031c0 1.95.562 3.82 1.633 5.438L2.062 22l4.672-1.547a9.97 9.97 0 0 0 5.297 1.547h.008c5.523 0 10.023-4.5 10.023-10.031C22.062 6.5 17.554 2 12.031 2zm0 18.36a8.31 8.31 0 0 1-4.242-1.164l-.305-.18-3.148 1.043 1.062-3.07-.2-.313a8.344 8.344 0 0 1-1.281-4.645c0-4.602 3.75-8.352 8.36-8.352 4.601 0 8.351 3.75 8.351 8.352 0 4.602-3.75 8.329-8.352 8.329zm4.586-6.242c-.25-.125-1.484-.734-1.71-.82-.235-.086-.407-.125-.579.125-.172.25-.664.82-.813.984-.148.172-.305.188-.555.063-.25-.125-1.054-.39-2.015-1.242-.743-.664-1.243-1.485-1.391-1.735-.149-.25-.016-.39.11-.515.11-.11.25-.282.375-.422.125-.141.172-.235.25-.407.086-.172.047-.328-.023-.453-.07-.125-.578-1.39-.797-1.906-.21-.5-.43-.43-.594-.438h-.508c-.172 0-.453.063-.687.32-.235.25-.899.883-.899 2.149 0 1.265.922 2.492 1.055 2.664.133.172 1.812 2.766 4.39 3.875.61.266 1.094.422 1.469.54.618.195 1.18.164 1.625.101.492-.07 1.484-.609 1.695-1.195.21-.586.21-1.086.149-1.195-.063-.11-.235-.172-.485-.297z"/></svg>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-col">
                <h4 class="footer-heading"><?php esc_html_e('Quick Links', 'aipromptzyra'); ?></h4>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/prompt-builder/')); ?>"><?php esc_html_e('Prompt Builder', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/about/')); ?>"><?php esc_html_e('About Us', 'aipromptzyra'); ?></a></li>
                </ul>
            </div>

            <!-- Important Pages -->
            <div class="footer-col">
                <h4 class="footer-heading"><?php esc_html_e('Important Pages', 'aipromptzyra'); ?></h4>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact Us', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>"><?php esc_html_e('Privacy Policy', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/terms-and-conditions/')); ?>"><?php esc_html_e('Terms & Conditions', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/disclaimer/')); ?>"><?php esc_html_e('Disclaimer', 'aipromptzyra'); ?></a></li>
                </ul>
            </div>

            <!-- Categories -->
            <div class="footer-col">
                <h4 class="footer-heading"><?php esc_html_e('Categories', 'aipromptzyra'); ?></h4>
                <ul class="footer-links">
                    <li><a href="<?php echo esc_url(home_url('/prompt-category/trending-prompts/')); ?>"><?php esc_html_e('Trending Prompts', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/prompt-category/couple-prompts/')); ?>"><?php esc_html_e('Couple Prompts', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/prompt-category/ai-photo-prompts/')); ?>"><?php esc_html_e('AI Photo Prompts', 'aipromptzyra'); ?></a></li>
                </ul>
            </div>

            <!-- Stay Connected -->
            <div class="footer-col">
                <h4 class="footer-heading"><?php esc_html_e('Stay Connected', 'aipromptzyra'); ?></h4>
                <p class="footer-muted-text"><?php esc_html_e('Follow us for updates and new content.', 'aipromptzyra'); ?></p>
                <div class="footer-social-inline">
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
            </div>
        </div>
    </div>

    <!-- Bottom Copyright & Legal Links -->
    <div class="footer-bottom-bar">
        <div class="container footer-bottom-inner">
            <p class="copyright-text">
                &copy; <?php echo esc_html(date_i18n('Y')); ?> <?php bloginfo('name'); ?>. <?php esc_html_e('All rights reserved.', 'aipromptzyra'); ?>
            </p>
            <nav class="footer-legal-nav" aria-label="<?php esc_attr_e('Legal and Information Links', 'aipromptzyra'); ?>">
                <a href="<?php echo esc_url(home_url('/sitemap.xml')); ?>"><?php esc_html_e('Sitemap', 'aipromptzyra'); ?></a>
                <span class="sep">|</span>
                <a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact', 'aipromptzyra'); ?></a>
                <span class="sep">|</span>
                <a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>"><?php esc_html_e('Privacy', 'aipromptzyra'); ?></a>
                <span class="sep">|</span>
                <a href="<?php echo esc_url(home_url('/terms-and-conditions/')); ?>"><?php esc_html_e('Terms', 'aipromptzyra'); ?></a>
                <span class="sep">|</span>
                <a href="<?php echo esc_url(home_url('/disclaimer/')); ?>"><?php esc_html_e('Disclaimer', 'aipromptzyra'); ?></a>
            </nav>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
