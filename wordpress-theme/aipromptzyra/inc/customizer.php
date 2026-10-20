<?php
/**
 * AIPromptzyra Theme Customizer
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

function aipromptzyra_customize_register($wp_customize) {
    // 1. AIPromptzyra Settings Section
    $wp_customize->add_section('aipromptzyra_homepage_section', array(
        'title'       => __('AIPromptzyra Settings', 'aipromptzyra'),
        'priority'    => 30,
        'description' => __('Configure hero text, prompt builder defaults, and brand messaging.', 'aipromptzyra'),
    ));

    // Hero Subtitle Setting
    $wp_customize->add_setting('aipromptzyra_hero_subtitle', array(
        'default'           => __('Discover high-quality, copy-ready prompts for Gemini, ChatGPT and other AI tools.', 'aipromptzyra'),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('aipromptzyra_hero_subtitle', array(
        'label'    => __('Hero Subtitle', 'aipromptzyra'),
        'section'  => 'aipromptzyra_homepage_section',
        'type'     => 'textarea',
    ));

    // Footer Description
    $wp_customize->add_setting('aipromptzyra_footer_text', array(
        'default'           => __('Discover, create and explore the best AI prompts for your creative journey.', 'aipromptzyra'),
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('aipromptzyra_footer_text', array(
        'label'    => __('Footer Description', 'aipromptzyra'),
        'section'  => 'aipromptzyra_homepage_section',
        'type'     => 'textarea',
    ));

    // Brand Accent Color
    $wp_customize->add_setting('aipromptzyra_primary_color', array(
        'default'           => '#7C3AED',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'aipromptzyra_primary_color', array(
        'label'    => __('Primary Brand Color', 'aipromptzyra'),
        'section'  => 'colors',
    )));
}
add_action('customize_register', 'aipromptzyra_customize_register');
