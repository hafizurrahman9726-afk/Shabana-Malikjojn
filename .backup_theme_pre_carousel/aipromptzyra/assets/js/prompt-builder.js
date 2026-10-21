/**
 * AIPromptzyra AI Prompt Builder Script
 * Configurable, accessible formula-based generator
 */

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('aipromptzyra-builder-form');
  const generatedTextEl = document.getElementById('builder-generated-text');
  const copyBtn = document.getElementById('btn-copy-builder-prompt');
  const resetBtn = document.getElementById('btn-reset-builder');
  const previewImg = document.getElementById('builder-preview-img');
  const geminiBtn = document.getElementById('btn-try-in-gemini');

  if (!form || !generatedTextEl) return;

  const styleImages = {
    'Cinematic': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    'Editorial Studio': 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80',
    'Vintage 35mm': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    'Fantasy Dreamscape': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&auto=format&fit=crop&q=80',
    'Cyberpunk Neon': 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&auto=format&fit=crop&q=80',
    'Oil Painting Artwork': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=80'
  };

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
    if (previewImg && styleImages[style]) {
      previewImg.src = styleImages[style];
    }

    const promptFormula = `A beautiful ${subject.toLowerCase()} in a ${outfit.toLowerCase()}, standing in a ${background.toLowerCase()} setting with ${lighting.toLowerCase()}, ${mood.toLowerCase()} expression, looking at the camera, captured as a ${camera.toLowerCase()}, ${color.toLowerCase()} tones, rendered in high quality ${style.toLowerCase()} style, realistic, ultra detailed.`;

    generatedTextEl.textContent = promptFormula;

    // Update Try in Gemini link
    if (geminiBtn) {
      geminiBtn.href = 'https://gemini.google.com/?q=' + encodeURIComponent('Generate image: ' + promptFormula);
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

  // Handle copy
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      const text = generatedTextEl.textContent.trim();
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
      });
    });
  }

  // Listen to select change events for real-time reactivity
  const selects = form.querySelectorAll('select');
  selects.forEach(select => {
    select.addEventListener('change', generatePrompt);
  });
});
