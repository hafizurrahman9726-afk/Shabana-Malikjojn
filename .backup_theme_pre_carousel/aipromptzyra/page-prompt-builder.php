<?php
/**
 * Template Name: Prompt Builder Page
 *
 * @package AIPromptzyra
 * @version 1.0.0
 */

get_header(); ?>

<main id="primary" class="site-main container builder-page-main">
    <header class="page-header page-header-centered">
        <h1 class="page-title"><?php esc_html_e('Custom AI Prompt Generator', 'aipromptzyra'); ?></h1>
        <p class="page-subtitle"><?php esc_html_e('Configure subject, outfit, lighting, style, and camera angles to generate copy-ready prompts for Gemini and ChatGPT.', 'aipromptzyra'); ?></p>
    </header>

    <div class="builder-wrapper builder-page-wrapper">
        <!-- Reuses the clean builder markup -->
        <div class="builder-form-col">
            <form id="aipromptzyra-builder-form" class="builder-form">
                <div class="builder-grid-fields">
                    <div class="form-group">
                        <label for="field-subject"><?php esc_html_e('Subject', 'aipromptzyra'); ?></label>
                        <select id="field-subject" name="subject">
                            <option value="Girl" selected><?php esc_html_e('Girl', 'aipromptzyra'); ?></option>
                            <option value="Boy"><?php esc_html_e('Boy', 'aipromptzyra'); ?></option>
                            <option value="Couple"><?php esc_html_e('Couple', 'aipromptzyra'); ?></option>
                            <option value="Family"><?php esc_html_e('Family', 'aipromptzyra'); ?></option>
                            <option value="Elderly Artisan"><?php esc_html_e('Elderly Artisan', 'aipromptzyra'); ?></option>
                            <option value="Futuristic Traveler"><?php esc_html_e('Futuristic Traveler', 'aipromptzyra'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="field-outfit"><?php esc_html_e('Outfit', 'aipromptzyra'); ?></label>
                        <select id="field-outfit" name="outfit">
                            <option value="Saree" selected><?php esc_html_e('Saree', 'aipromptzyra'); ?></option>
                            <option value="Casual Denim"><?php esc_html_e('Casual Denim', 'aipromptzyra'); ?></option>
                            <option value="Traditional Kurta"><?php esc_html_e('Traditional Kurta', 'aipromptzyra'); ?></option>
                            <option value="Formal Suit"><?php esc_html_e('Formal Suit', 'aipromptzyra'); ?></option>
                            <option value="Cyberpunk Armor"><?php esc_html_e('Cyberpunk Armor', 'aipromptzyra'); ?></option>
                            <option value="Summer Floral Dress"><?php esc_html_e('Summer Floral Dress', 'aipromptzyra'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="field-background"><?php esc_html_e('Background', 'aipromptzyra'); ?></label>
                        <select id="field-background" name="background">
                            <option value="Nature" selected><?php esc_html_e('Nature', 'aipromptzyra'); ?></option>
                            <option value="Historic Courtyard"><?php esc_html_e('Historic Courtyard', 'aipromptzyra'); ?></option>
                            <option value="Neon City Skyline"><?php esc_html_e('Neon City Skyline', 'aipromptzyra'); ?></option>
                            <option value="Minimal Studio"><?php esc_html_e('Minimal Studio', 'aipromptzyra'); ?></option>
                            <option value="Festive Lantern Street"><?php esc_html_e('Festive Lantern Street', 'aipromptzyra'); ?></option>
                            <option value="Misty Mountain Ridge"><?php esc_html_e('Misty Mountain Ridge', 'aipromptzyra'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="field-style"><?php esc_html_e('Style', 'aipromptzyra'); ?></label>
                        <select id="field-style" name="style">
                            <option value="Cinematic" selected><?php esc_html_e('Cinematic', 'aipromptzyra'); ?></option>
                            <option value="Editorial Studio"><?php esc_html_e('Editorial Studio', 'aipromptzyra'); ?></option>
                            <option value="Vintage 35mm"><?php esc_html_e('Vintage 35mm', 'aipromptzyra'); ?></option>
                            <option value="Fantasy Dreamscape"><?php esc_html_e('Fantasy Dreamscape', 'aipromptzyra'); ?></option>
                            <option value="Cyberpunk Neon"><?php esc_html_e('Cyberpunk Neon', 'aipromptzyra'); ?></option>
                            <option value="Oil Painting Artwork"><?php esc_html_e('Oil Painting Artwork', 'aipromptzyra'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="field-lighting"><?php esc_html_e('Lighting', 'aipromptzyra'); ?></label>
                        <select id="field-lighting" name="lighting">
                            <option value="Soft Light" selected><?php esc_html_e('Soft Light', 'aipromptzyra'); ?></option>
                            <option value="Golden Hour"><?php esc_html_e('Golden Hour', 'aipromptzyra'); ?></option>
                            <option value="Dramatic Rim Light"><?php esc_html_e('Dramatic Rim Light', 'aipromptzyra'); ?></option>
                            <option value="Moody Moonlight"><?php esc_html_e('Moody Moonlight', 'aipromptzyra'); ?></option>
                            <option value="Festive Warm Diyas"><?php esc_html_e('Festive Warm Diyas', 'aipromptzyra'); ?></option>
                            <option value="Studio Softbox"><?php esc_html_e('Studio Softbox', 'aipromptzyra'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="field-mood"><?php esc_html_e('Mood', 'aipromptzyra'); ?></label>
                        <select id="field-mood" name="mood">
                            <option value="Happy" selected><?php esc_html_e('Happy', 'aipromptzyra'); ?></option>
                            <option value="Romantic"><?php esc_html_e('Romantic', 'aipromptzyra'); ?></option>
                            <option value="Mysterious"><?php esc_html_e('Mysterious', 'aipromptzyra'); ?></option>
                            <option value="Peaceful & Calm"><?php esc_html_e('Peaceful & Calm', 'aipromptzyra'); ?></option>
                            <option value="Confident & Bold"><?php esc_html_e('Confident & Bold', 'aipromptzyra'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="field-camera"><?php esc_html_e('Camera Angle', 'aipromptzyra'); ?></label>
                        <select id="field-camera" name="camera_angle">
                            <option value="Portrait" selected><?php esc_html_e('Portrait', 'aipromptzyra'); ?></option>
                            <option value="Close-up Shot"><?php esc_html_e('Close-up Shot', 'aipromptzyra'); ?></option>
                            <option value="Medium Shot"><?php esc_html_e('Medium Shot', 'aipromptzyra'); ?></option>
                            <option value="Wide Angle Landscape"><?php esc_html_e('Wide Angle Landscape', 'aipromptzyra'); ?></option>
                            <option value="Low Angle Hero"><?php esc_html_e('Low Angle Hero', 'aipromptzyra'); ?></option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="field-color"><?php esc_html_e('Color Tone', 'aipromptzyra'); ?></label>
                        <select id="field-color" name="color_tone">
                            <option value="Natural" selected><?php esc_html_e('Natural', 'aipromptzyra'); ?></option>
                            <option value="Warm Golden"><?php esc_html_e('Warm Golden', 'aipromptzyra'); ?></option>
                            <option value="Cool Blue Teal"><?php esc_html_e('Cool Blue Teal', 'aipromptzyra'); ?></option>
                            <option value="Vibrant Saturated"><?php esc_html_e('Vibrant Saturated', 'aipromptzyra'); ?></option>
                            <option value="Monochrome B&W"><?php esc_html_e('Monochrome B&W', 'aipromptzyra'); ?></option>
                        </select>
                    </div>
                </div>

                <div class="builder-actions">
                    <button type="submit" id="btn-generate-prompt" class="btn-primary-purple">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
                        <span><?php esc_html_e('Generate Prompt ✨', 'aipromptzyra'); ?></span>
                    </button>
                    <button type="button" id="btn-reset-builder" class="btn-outline-reset">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                        <span><?php esc_html_e('Reset', 'aipromptzyra'); ?></span>
                    </button>
                </div>
            </form>
        </div>

        <div class="builder-output-col">
            <div class="builder-visual-preview">
                <img id="builder-preview-img" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80" alt="Generated prompt visual preview" />
            </div>

            <div class="builder-result-card">
                <h3 class="builder-result-title"><?php esc_html_e('Your Generated Prompt', 'aipromptzyra'); ?></h3>
                <p id="builder-generated-text" class="builder-generated-text">
                    <?php esc_html_e('A beautiful young woman in a traditional saree, standing in a natural outdoor setting with soft cinematic lighting, happy expression, looking at the camera, detailed background with greenery, high quality, realistic, ultra detailed.', 'aipromptzyra'); ?>
                </p>

                <div class="builder-result-actions">
                    <button type="button" id="btn-copy-builder-prompt" class="btn-purple-fill">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                        <span><?php esc_html_e('Copy Prompt', 'aipromptzyra'); ?></span>
                    </button>
                    <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" class="btn-gemini-outline">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <span><?php esc_html_e('Try in Gemini', 'aipromptzyra'); ?></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>
