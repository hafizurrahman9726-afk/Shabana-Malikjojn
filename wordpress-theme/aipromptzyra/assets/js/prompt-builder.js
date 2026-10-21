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
    'Cinematic': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80',
    'Editorial Studio': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&auto=format&fit=crop&q=80',
    'Vintage 35mm': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80',
    'Fantasy Dreamscape': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80',
    'Cyberpunk Neon': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&auto=format&fit=crop&q=80',
    'Oil Painting Artwork': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=600&auto=format&fit=crop&q=80'
  };

  function getPreviewImage(subject, style) {
    if (subject === 'Boy') {
      return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=80';
    }
    if (subject === 'Couple') {
      return 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&auto=format&fit=crop&q=80';
    }
    if (subject === 'Family') {
      return 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80';
    }
    if (styleImages[style]) {
      return styleImages[style];
    }
    return 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80';
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
