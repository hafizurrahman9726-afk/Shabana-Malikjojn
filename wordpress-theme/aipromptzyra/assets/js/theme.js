/**
 * AIPromptzyra Main JavaScript
 * Lightweight, accessible vanilla JS
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Dark Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('aipromptzyra-theme') || 
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  if (savedTheme === 'dark') {
    htmlRoot.setAttribute('data-theme', 'dark');
  } else {
    htmlRoot.removeAttribute('data-theme');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const current = htmlRoot.getAttribute('data-theme');
      if (current === 'dark') {
        htmlRoot.removeAttribute('data-theme');
        localStorage.setItem('aipromptzyra-theme', 'light');
      } else {
        htmlRoot.setAttribute('data-theme', 'dark');
        localStorage.setItem('aipromptzyra-theme', 'dark');
      }
    });
  }

  // 2. Mobile Menu Drawer
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-navigation');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNav.hidden = isExpanded;
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });
  }

  // 3. Global Copy Prompt Buttons
  document.addEventListener('click', function (e) {
    const copyBtn = e.target.closest('.copy-prompt-btn');
    if (!copyBtn) return;

    const promptText = copyBtn.getAttribute('data-prompt');
    if (!promptText) return;

    navigator.clipboard.writeText(promptText).then(() => {
      const span = copyBtn.querySelector('span');
      const originalText = span ? span.textContent : 'Copy Prompt';
      if (span) span.textContent = 'Copied! ✨';
      copyBtn.classList.add('copied');

      setTimeout(() => {
        if (span) span.textContent = originalText;
        copyBtn.classList.remove('copied');
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  });

  // 4. Smooth Anchor Link Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
});
