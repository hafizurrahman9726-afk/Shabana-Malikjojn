<?php
/**
 * The header for AIPromptzyra theme
 *
 * @package AIPromptzyra
 * @version 1.0.1
 */

if (!defined('ABSPATH')) {
    exit;
}
?><!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<a class="screen-reader-text" href="#primary"><?php esc_html_e('Skip to content', 'aipromptzyra'); ?></a>

<header id="masthead" class="site-header">
    <div class="site-header-inner container">
        <!-- Site Branding -->
        <div class="site-branding">
            <?php
            if (has_custom_logo()) :
                the_custom_logo();
            else :
            ?>
                <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-link" rel="home">
                    <span class="brand-icon-wrapper" aria-hidden="true">
                        <svg class="brand-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="10" fill="#7C3AED" />
                            <path d="M12 28L20 12L28 28L20 23L12 28Z" fill="white" />
                            <path d="M20 12L24 20L20 23L16 20L20 12Z" fill="#DDD6FE" />
                        </svg>
                    </span>
                    <span class="brand-title"><?php bloginfo('name'); ?></span>
                </a>
            <?php endif; ?>
        </div>

        <!-- Primary Navigation -->
        <nav id="site-navigation" class="main-navigation" aria-label="<?php esc_attr_e('Primary Menu', 'aipromptzyra'); ?>">
            <?php
            if (has_nav_menu('primary')) :
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'primary-menu',
                    'container'      => false,
                    'menu_class'     => 'nav-menu',
                    'fallback_cb'    => false,
                ));
            else :
                $is_home = is_front_page();
            ?>
                <ul id="primary-menu" class="nav-menu">
                    <li class="menu-item <?php echo $is_home ? 'current-menu-item' : ''; ?>">
                        <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'aipromptzyra'); ?></a>
                    </li>
                    <li class="menu-item">
                        <a href="<?php echo esc_url(home_url('/prompt-category/trending-prompts/')); ?>"><?php esc_html_e('Trending Prompts', 'aipromptzyra'); ?></a>
                    </li>
                    <li class="menu-item">
                        <a href="<?php echo esc_url(home_url('/prompt-category/couple-prompts/')); ?>"><?php esc_html_e('Couple Prompts', 'aipromptzyra'); ?></a>
                    </li>
                    <li class="menu-item">
                        <a href="<?php echo esc_url(home_url('/prompt-category/ai-photo-prompts/')); ?>"><?php esc_html_e('AI Photo Prompts', 'aipromptzyra'); ?></a>
                    </li>
                    <li class="menu-item menu-item-has-children dropdown">
                        <a href="<?php echo esc_url(home_url('/about/')); ?>" class="dropdown-toggle-link" aria-haspopup="true" aria-expanded="false" role="button">
                            <span><?php esc_html_e('Important Pages', 'aipromptzyra'); ?></span>
                            <svg class="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </a>
                        <ul class="sub-menu">
                            <li><a href="<?php echo esc_url(home_url('/about/')); ?>"><?php esc_html_e('About Us', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact Us', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>"><?php esc_html_e('Privacy Policy', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/disclaimer/')); ?>"><?php esc_html_e('Disclaimer', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/terms-and-conditions/')); ?>"><?php esc_html_e('Terms & Conditions', 'aipromptzyra'); ?></a></li>
                        </ul>
                    </li>
                </ul>
            <?php endif; ?>
        </nav>

        <!-- Header Actions: Search & Dark Toggle -->
        <div class="header-actions">
            <!-- Header Search -->
            <form role="search" method="get" class="header-search-form" action="<?php echo esc_url(home_url('/')); ?>">
                <label for="header-search-field" class="screen-reader-text"><?php esc_html_e('Search prompts', 'aipromptzyra'); ?></label>
                <div class="header-search-input-wrapper">
                    <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="search" id="header-search-field" class="header-search-input" placeholder="<?php esc_attr_e('Search prompts...', 'aipromptzyra'); ?>" value="<?php echo get_search_query(); ?>" name="s" />
                </div>
            </form>

            <!-- Dark / Light Mode Toggle -->
            <button id="theme-toggle" class="theme-toggle-btn" aria-label="<?php esc_attr_e('Toggle dark/light theme', 'aipromptzyra'); ?>" title="<?php esc_attr_e('Toggle dark/light theme', 'aipromptzyra'); ?>">
                <svg class="theme-icon sun-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg class="theme-icon moon-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </button>

            <!-- Mobile Menu Toggle -->
            <button id="mobile-menu-toggle" class="mobile-toggle-btn" aria-expanded="false" aria-controls="mobile-navigation" aria-label="<?php esc_attr_e('Toggle menu', 'aipromptzyra'); ?>">
                <span class="hamburger-bar"></span>
                <span class="hamburger-bar"></span>
                <span class="hamburger-bar"></span>
            </button>
        </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-navigation" class="mobile-navigation-drawer" hidden>
        <div class="mobile-nav-inner container">
            <?php
            $is_home = is_front_page();
            if (has_nav_menu('primary')) :
                wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_id'        => 'mobile-menu',
                    'container'      => false,
                    'menu_class'     => 'mobile-nav-menu',
                ));
            else :
            ?>
                <ul class="mobile-nav-menu">
                    <li><a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Home', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/prompt-category/trending-prompts/')); ?>"><?php esc_html_e('Trending Prompts', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/prompt-category/couple-prompts/')); ?>"><?php esc_html_e('Couple Prompts', 'aipromptzyra'); ?></a></li>
                    <li><a href="<?php echo esc_url(home_url('/prompt-category/ai-photo-prompts/')); ?>"><?php esc_html_e('AI Photo Prompts', 'aipromptzyra'); ?></a></li>
                    <li class="mobile-menu-item-has-children">
                        <button type="button" class="mobile-dropdown-toggle" aria-expanded="true" aria-controls="mobile-sub-important-pages">
                            <span><?php esc_html_e('Important Pages', 'aipromptzyra'); ?></span>
                            <svg class="dropdown-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <ul id="mobile-sub-important-pages" class="mobile-sub-menu">
                            <li><a href="<?php echo esc_url(home_url('/about/')); ?>"><?php esc_html_e('About Us', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/contact/')); ?>"><?php esc_html_e('Contact Us', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/privacy-policy/')); ?>"><?php esc_html_e('Privacy Policy', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/disclaimer/')); ?>"><?php esc_html_e('Disclaimer', 'aipromptzyra'); ?></a></li>
                            <li><a href="<?php echo esc_url(home_url('/terms-and-conditions/')); ?>"><?php esc_html_e('Terms & Conditions', 'aipromptzyra'); ?></a></li>
                        </ul>
                    </li>
                </ul>
            <?php endif; ?>
        </div>
    </div>
</header>

<div id="content" class="site-content">
