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

  // 2b. Accessible Dropdown Menu Support (Desktop & Mobile)
  const dropdownParents = document.querySelectorAll('.main-navigation .menu-item-has-children');
  dropdownParents.forEach(parent => {
    const trigger = parent.querySelector('> a, > .dropdown-toggle-link, > button');
    if (!trigger) return;

    trigger.addEventListener('click', function (e) {
      if (trigger.getAttribute('href') === '#' || trigger.tagName.toLowerCase() === 'button' || parent.classList.contains('dropdown')) {
        e.preventDefault();
        const isOpen = parent.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      }
    });

    parent.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        parent.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.main-navigation .menu-item-has-children')) {
      dropdownParents.forEach(p => {
        p.classList.remove('is-open');
        const trigger = p.querySelector('> a, > .dropdown-toggle-link, > button');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Mobile Accordion Toggle
  const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
  mobileDropdownToggles.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded ? 'true' : 'false');
      const targetId = btn.getAttribute('aria-controls');
      const targetSub = targetId ? document.getElementById(targetId) : btn.nextElementSibling;
      if (targetSub) {
        targetSub.hidden = isExpanded;
      }
    });
  });

  // 3. AI Prompt Box View & Copy Handlers (Custom Gutenberg Block & Global Prompts)
  document.addEventListener('click', function (e) {
    if (e._azHandled) return;

    // 3a. View Prompt Toggle (Expand / Collapse with gradient preview)
    const viewBtn = e.target.closest('.az-btn-view-prompt, [data-action="toggle-prompt"]');
    if (viewBtn) {
      e.preventDefault();
      e._azHandled = true;
      const promptBox = viewBtn.closest('.wp-block-aipromptzyra-ai-prompt-box, .az-ai-prompt-box');
      if (promptBox) {
        const wrapper = promptBox.querySelector('.az-prompt-content-wrapper');
        if (wrapper) {
          const isCurrentlyExpanded = promptBox.classList.contains('az-expanded') || wrapper.classList.contains('az-expanded') || viewBtn.getAttribute('aria-expanded') === 'true';
          const nextExpanded = !isCurrentlyExpanded;

          if (nextExpanded) {
            promptBox.classList.add('az-expanded');
            wrapper.classList.add('az-expanded');
            viewBtn.setAttribute('aria-expanded', 'true');
            viewBtn.setAttribute('aria-label', 'Collapse prompt');
            const span = viewBtn.querySelector('span');
            if (span) span.textContent = 'Collapse Prompt';
            const svg = viewBtn.querySelector('svg');
            if (svg) {
              svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
            }
          } else {
            promptBox.classList.remove('az-expanded');
            wrapper.classList.remove('az-expanded');
            viewBtn.setAttribute('aria-expanded', 'false');
            viewBtn.setAttribute('aria-label', 'Expand full prompt');
            const span = viewBtn.querySelector('span');
            if (span) span.textContent = 'View Prompt';
            const svg = viewBtn.querySelector('svg');
            if (svg) {
              svg.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
            }
          }
        }
      }
      return;
    }

    // 3b. Copy Prompt with fallback
    const copyBtn = e.target.closest('.copy-prompt-btn, .az-copy-prompt-btn, .az-btn-copy-prompt, [data-action="copy-prompt"]');
    if (!copyBtn) return;
    e.preventDefault();
    e._azHandled = true;

    let promptText = copyBtn.getAttribute('data-prompt');
    const promptBox = copyBtn.closest('.wp-block-aipromptzyra-ai-prompt-box, .az-ai-prompt-box');
    if (!promptText && promptBox) {
      promptText = promptBox.getAttribute('data-prompt');
    }
    if (!promptText && promptBox) {
      const textEl = promptBox.querySelector('.az-prompt-text-preview') || promptBox.querySelector('.az-prompt-text-clean');
      if (textEl) {
        promptText = textEl.innerText || textEl.textContent || '';
      }
    }
    if (!promptText) {
      const nextEl = copyBtn.closest('.az-prompt-action-bar')?.nextElementSibling;
      if (nextEl) {
        promptText = nextEl.innerText || nextEl.textContent || '';
      }
    }

    promptText = (promptText || '').trim();
    const span = copyBtn.querySelector('span');
    const svg = copyBtn.querySelector('svg');
    const origText = copyBtn.getAttribute('data-orig-text') || (span ? span.textContent : 'Copy Prompt');
    if (!copyBtn.getAttribute('data-orig-text') && span) {
      copyBtn.setAttribute('data-orig-text', origText);
    }

    if (!promptText) {
      if (span) span.textContent = 'No prompt found';
      setTimeout(() => { if (span) span.textContent = origText; }, 2000);
      return;
    }

    const doSuccess = () => {
      if (span) span.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      copyBtn.classList.remove('copy-failed');
      if (svg) svg.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
      setTimeout(() => {
        if (span) span.textContent = origText;
        copyBtn.classList.remove('copied');
        if (svg) svg.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
      }, 2500);
    };

    const doError = (err) => {
      console.warn('Copy prompt error:', err);
      if (span) span.textContent = 'Copy failed';
      copyBtn.classList.add('copy-failed');
      setTimeout(() => {
        if (span) span.textContent = origText;
        copyBtn.classList.remove('copy-failed');
      }, 3000);
    };

    if (navigator.clipboard && window.isSecureContext && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(promptText).then(doSuccess).catch(() => {
        execFallbackCopy(promptText, doSuccess, doError);
      });
    } else {
      execFallbackCopy(promptText, doSuccess, doError);
    }
  });

  function execFallbackCopy(text, onSuccess, onError) {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.fontSize = '16px';
      ta.style.position = 'fixed';
      ta.style.top = '-9999px';
      ta.style.left = '-9999px';
      ta.style.width = '2em';
      ta.style.height = '2em';
      ta.setAttribute('readonly', '');
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      ta.setSelectionRange(0, text.length);
      const res = document.execCommand('copy');
      document.body.removeChild(ta);
      if (res) onSuccess();
      else onError(new Error('execCommand returned false'));
    } catch (e) {
      onError(e);
    }
  }

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

  // 5. Clean Prompt Presentation (Remove 'Prompt:' labels, unbox prompt text, preserve clean copy button)
  const entryContent = document.querySelector('.article-single .entry-content');
  if (entryContent) {
    // 5a. Remove any preexisting .az-prompt-label elements
    entryContent.querySelectorAll('.az-prompt-label').forEach(el => el.remove());

    // 5b. Scan paragraphs for dedicated prompt labels
    const paragraphs = Array.from(entryContent.querySelectorAll('p'));
    paragraphs.forEach(function (p) {
      if (!p.parentNode) return;
      const text = p.textContent.trim();
      const strongEl = p.querySelector('strong');
      const strongText = strongEl ? strongEl.textContent.trim().toLowerCase() : '';

      // Check if paragraph is purely a "Prompt:" or "PROMPT:" label
      const isPromptLabel =
        /^prompt:\s*$/i.test(text) ||
        /^prompt\s*$/i.test(text) ||
        /^ai prompt:\s*$/i.test(text) ||
        strongText === 'prompt:' ||
        strongText === 'prompt' ||
        strongText === 'ai prompt:';

      if (isPromptLabel) {
        const next = p.nextElementSibling;

        // Remove the dedicated "Prompt:" label from the DOM
        p.remove();

        if (next && (next.tagName === 'P' || next.tagName === 'DIV' || next.tagName === 'BLOCKQUOTE')) {
          // Remove any legacy box styling
          next.classList.remove('az-prompt-box');
          next.classList.add('az-prompt-text-clean');

          // Ensure an action bar with copy button is placed cleanly ABOVE the prompt text
          const prevEl = next.previousElementSibling;
          if (!prevEl || !prevEl.classList.contains('az-prompt-action-bar')) {
            const actionBar = document.createElement('div');
            actionBar.className = 'az-prompt-action-bar';

            const copyBtn = document.createElement('button');
            copyBtn.type = 'button';
            copyBtn.className = 'az-copy-prompt-btn';
            copyBtn.setAttribute('aria-label', 'Copy prompt to clipboard');
            copyBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span>Copy</span>';

            copyBtn.addEventListener('click', function () {
              // Copy the clean prompt text
              const promptText = next.textContent.trim();
              navigator.clipboard.writeText(promptText).then(function () {
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

            actionBar.appendChild(copyBtn);
            next.parentNode.insertBefore(actionBar, next);
          }
        }
      }
    });

    // 5c. Strip any remaining legacy .az-prompt-box card styles
    entryContent.querySelectorAll('.az-prompt-box').forEach(box => {
      box.classList.remove('az-prompt-box');
      box.classList.add('az-prompt-text-clean');
    });
  }

  // 6. Horizontal Sliding Prompt Carousel Controls
  const carouselTrack = document.getElementById('carousel-track');
  const carouselPrevBtn = document.getElementById('carousel-prev-btn');
  const carouselNextBtn = document.getElementById('carousel-next-btn');

  if (carouselTrack) {
    const getScrollDistance = () => {
      const firstCard = carouselTrack.querySelector('.carousel-card-item');
      return firstCard ? firstCard.offsetWidth + 16 : 220;
    };

    if (carouselPrevBtn) {
      carouselPrevBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: -getScrollDistance() * 2, behavior: 'smooth' });
      });
    }

    if (carouselNextBtn) {
      carouselNextBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: getScrollDistance() * 2, behavior: 'smooth' });
      });
    }

    // Auto-scroll loop with pause-on-hover & touch support
    let autoScrollInterval = null;
    let isPaused = false;

    const startAutoScroll = () => {
      if (autoScrollInterval) return;
      autoScrollInterval = setInterval(() => {
        if (isPaused) return;
        const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
        if (carouselTrack.scrollLeft >= maxScroll - 15) {
          carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselTrack.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
        }
      }, 3500);
    };

    const stopAutoScroll = () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
        autoScrollInterval = null;
      }
    };

    carouselTrack.addEventListener('mouseenter', () => { isPaused = true; });
    carouselTrack.addEventListener('mouseleave', () => { isPaused = false; });
    carouselTrack.addEventListener('touchstart', () => { isPaused = true; }, { passive: true });
    carouselTrack.addEventListener('touchend', () => {
      setTimeout(() => { isPaused = false; }, 2000);
    }, { passive: true });
    carouselTrack.addEventListener('focusin', () => { isPaused = true; });
    carouselTrack.addEventListener('focusout', () => { isPaused = false; });

    startAutoScroll();
  }

  // 7. Dynamic Category Filter for Latest Guides & Tutorials (for button-based filters)
  const filterPills = document.querySelectorAll('button.guides-filter-pill');
  const guidesGrid = document.getElementById('guides-grid');
  const emptyFilterState = document.getElementById('guides-filter-empty');
  const resetFilterBtn = document.getElementById('guides-filter-reset-btn');
  const paginationWrapper = document.querySelector('.pagination-wrapper');

  if (filterPills.length > 0 && guidesGrid) {
    const guideCards = Array.from(guidesGrid.querySelectorAll('.guide-card'));

    const applyFilter = (filterSlug) => {
      // Update active state on pill buttons
      filterPills.forEach(pill => {
        const isActive = pill.getAttribute('data-filter') === filterSlug;
        pill.classList.toggle('active', isActive);
        pill.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });

      let visibleCount = 0;

      guideCards.forEach(card => {
        if (filterSlug === 'all') {
          card.style.display = '';
          visibleCount++;
        } else {
          const cardCats = (card.getAttribute('data-categories') || '').toLowerCase();
          const cardTitle = (card.getAttribute('data-title') || '').toLowerCase();

          // Normalized matching: support exact slug, words in category, or keywords in title
          const normalizedFilter = filterSlug.toLowerCase().replace(/-/g, ' ');
          const slugVariants = [
            filterSlug.toLowerCase(),
            filterSlug.toLowerCase().replace(/-/g, ''),
            ...normalizedFilter.split(' ').filter(w => w.length > 2 && w !== 'prompts' && w !== 'prompt' && w !== 'guide')
          ];

          const isMatch =
            cardCats.includes(filterSlug.toLowerCase()) ||
            slugVariants.some(v => cardCats.includes(v) || cardTitle.includes(v));

          if (isMatch) {
            card.style.display = '';
            visibleCount++;
          } else {
            card.style.display = 'none';
          }
        }
      });

      // Handle empty state visibility
      if (emptyFilterState) {
        emptyFilterState.style.display = visibleCount === 0 ? 'block' : 'none';
      }

      // Hide standard pagination when filtering a subcategory so user isn't confused by page numbers
      if (paginationWrapper) {
        paginationWrapper.style.display = filterSlug === 'all' ? '' : 'none';
      }
    };

    filterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        const filterSlug = this.getAttribute('data-filter') || 'all';
        applyFilter(filterSlug);
      });
    });

    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', function () {
        applyFilter('all');
      });
    }
  }
});

