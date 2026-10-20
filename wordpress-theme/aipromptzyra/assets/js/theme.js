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

  // 5. Enhance Single Article Prompts & Callouts
  const entryContent = document.querySelector('.article-single .entry-content');
  if (entryContent) {
    const paragraphs = entryContent.querySelectorAll('p');
    paragraphs.forEach(function (p) {
      const text = p.textContent.trim();
      const strongEl = p.querySelector('strong');
      const strongText = strongEl ? strongEl.textContent.trim().toLowerCase() : '';

      // Check for prompt label (e.g. "Prompt:" or strong "Prompt:")
      if (
        /^prompt:\s*$/i.test(text) ||
        strongText === 'prompt:' ||
        strongText === 'prompt'
      ) {
        p.classList.add('az-prompt-label');
        const next = p.nextElementSibling;
        if (next && next.tagName === 'P') {
          next.classList.add('az-prompt-box');
          if (!next.querySelector('.az-copy-prompt-btn')) {
            const copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'az-copy-prompt-btn';
            copyBtn.setAttribute('aria-label', 'Copy prompt to clipboard');
            copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span>Copy</span>';

            copyBtn.addEventListener('click', function () {
              // Copy text minus the button text
              const clone = next.cloneNode(true);
              const b = clone.querySelector('.az-copy-prompt-btn');
              if (b) b.remove();
              const copyText = clone.textContent.trim();

              navigator.clipboard.writeText(copyText).then(function () {
                const s = copyBtn.querySelector('span');
                if (s) s.textContent = 'Copied! ✨';
                copyBtn.classList.add('copied');
                setTimeout(function () {
                  if (s) s.textContent = 'Copy';
                  copyBtn.classList.remove('copied');
                }, 2000);
              }).catch(function (err) {
                console.error('Copy failed: ', err);
              });
            });

            next.appendChild(copyBtn);
          }
        }
      } else if (
        /^tip:\s*/i.test(text) ||
        strongText === 'tip:' ||
        strongText === 'tip'
      ) {
        p.classList.add('az-tip-callout');
      }
    });
  }
});
