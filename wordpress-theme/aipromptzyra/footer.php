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
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Facebook">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="X (Twitter)">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Instagram">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="YouTube">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Pinterest">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.99-.1-2.52.02-3.61l.73-3.1s-.18-.37-.18-.92c0-.87.5-1.51 1.13-1.51.53 0 .79.4.79.88 0 .54-.34 1.34-.52 2.08-.15.62.31 1.13.92 1.13 1.1 0 1.95-1.16 1.95-2.84 0-1.48-1.07-2.52-2.59-2.52-1.89 0-3 1.42-3 2.89 0 .57.22 1.18.5 1.51.05.07.06.12.04.2l-.2 1.05c-.03.13-.1.18-.23.12-1.04-.48-1.69-1.99-1.69-3.2 0-2.61 1.9-5 5.48-5 2.88 0 5.11 2.05 5.11 4.79 0 2.86-1.8 5.16-4.3 5.16-.84 0-1.63-.44-1.9-.96l-.52 1.98c-.19.72-.7 1.63-1.04 2.18A12 12 0 1 0 12 0z"/></svg>
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
                    <a href="https://www.facebook.com/profile.php?id=61594710183320" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Facebook">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </a>
                    <a href="https://t.me/+19kPqGdfFAI4Y2Vl" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Telegram">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/aipromptzyra/" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="Instagram">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
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
