/**
 * AIPromptzyra AI Prompt Builder Script
 * Configurable, accessible formula-based generator
 * Fully responsive across Mobile, Tablet, and Desktop
 */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('aipromptzyra-builder-form');
  const generatedTextEl = document.getElementById('builder-generated-text');
  const copyBtn = document.getElementById('btn-copy-builder-prompt');
  const resetBtn = document.getElementById('btn-reset-builder');
  const previewImg = document.getElementById('builder-preview-img');
  const geminiBtn = document.getElementById('btn-try-in-gemini');
  const bookmarkBtn = document.querySelector('.builder-visual-preview .bookmark-btn');

  if (!form || !generatedTextEl) return;

  const styleImages = {
    'Cinematic': 'https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp',
    'Editorial Studio': 'https://aipromptzyra.com/wp-content/uploads/2026/10/indian-traditional-wedding-prompt-for-gemini-banner-2026-thumb-800x450-1.webp',
    'Vintage 35mm': 'https://aipromptzyra.com/wp-content/uploads/2026/10/eyes-prompt-for-girl-banner-2026-thumb-800x450-1.webp',
    'Fantasy Dreamscape': 'https://aipromptzyra.com/wp-content/uploads/2026/10/baby-krishna-with-mother-yashoda-prompt-3frame-banner-480x270-1.webp',
    'Cyberpunk Neon': 'https://aipromptzyra.com/wp-content/uploads/2026/10/iphone-lock-screen-wallpaper-featured-banner-480x270-1.webp',
    'Oil Painting Artwork': 'https://aipromptzyra.com/wp-content/uploads/2026/10/couple-maternity-photoshoot-prompt-ideas-indian-saree-banner-2026-thumb-800x450-1.webp'
  };

  function getPreviewImage(subject, style) {
    if (subject === 'Boy') {
      return 'https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp';
    }
    if (subject === 'Couple') {
      return 'https://aipromptzyra.com/wp-content/uploads/2026/10/Couple-Eyes-Prompt-ChatGPT.jpg';
    }
    if (subject === 'Family') {
      return 'https://aipromptzyra.com/wp-content/uploads/2026/10/couple-maternity-photoshoot-prompt-ideas-indian-saree-banner-2026-thumb-800x450-1.webp';
    }
    if (styleImages[style]) {
      return styleImages[style];
    }
    return 'https://aipromptzyra.com/wp-content/uploads/2026/10/diwali-gemini-prompt-for-men-3frame-banner-2026-thumb-800x450-1.webp';
  }

  function generatePrompt() {
    const subject = document.getElementById('field-subject')?.value || 'Girl';
    const outfit = document.getElementById('field-outfit')?.value || 'Saree';
    const background = document.getElementById('field-background')?.value || 'Nature';
    const style = document.getElementById('field-style')?.value || 'Cinematic';
    const lighting = document.getElementById('field-lighting')?.value || 'Soft Light';
    const mood = document.getElementById('field-mood')?.value || 'Happy';
    const camera = document.getElementById('field-camera')?.value || 'Portrait';
    const color = document.getElementById('field-color')?.value || 'Natural';

    // Update preview image
    if (previewImg) {
      previewImg.src = getPreviewImage(subject, style);
    }

    const promptFormula = `A beautiful young ${subject.toLowerCase()} in a traditional ${outfit.toLowerCase()}, standing in a ${background.toLowerCase()} setting with ${lighting.toLowerCase()}, ${mood.toLowerCase()} expression, looking at the camera, detailed background with greenery, ${camera.toLowerCase()} perspective, ${color.toLowerCase()} tones, rendered in high quality ${style.toLowerCase()} style, realistic, ultra detailed.`;

    generatedTextEl.textContent = promptFormula;

    // Update Try in Gemini link
    if (geminiBtn) {
      geminiBtn.href = 'https://gemini.google.com/?q=' + encodeURIComponent('Generate an image with this prompt: ' + promptFormula);
    }
  }

  // Initial trigger to sync
  generatePrompt();

  // Handle submit
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    generatePrompt();
  });

  // Handle reset
  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      form.reset();
      generatePrompt();
    });
  }

  // Handle bookmark
  if (bookmarkBtn) {
    bookmarkBtn.addEventListener('click', function () {
      bookmarkBtn.classList.toggle('active');
    });
  }

  // Handle copy
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const text = generatedTextEl.textContent.trim();
      if (!text) return;

      navigator.clipboard.writeText(text).then(() => {
        const span = copyBtn.querySelector('span');
        if (span) {
          const original = span.textContent;
          span.textContent = 'Copied! ✨';
          copyBtn.style.backgroundColor = '#059669';
          setTimeout(() => {
            span.textContent = original;
            copyBtn.style.backgroundColor = '';
          }, 2000);
        }
      }).catch(() => {
        // Fallback for older mobile webviews
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          const span = copyBtn.querySelector('span');
          if (span) {
            const original = span.textContent;
            span.textContent = 'Copied! ✨';
            copyBtn.style.backgroundColor = '#059669';
            setTimeout(() => {
              span.textContent = original;
              copyBtn.style.backgroundColor = '';
            }, 2000);
          }
        } finally {
          document.body.removeChild(textarea);
        }
      });
    });
  }

  // Listen to select change events for real-time reactivity
  const selects = form.querySelectorAll('select');
  selects.forEach(select => {
    select.addEventListener('change', generatePrompt);
  });
});
