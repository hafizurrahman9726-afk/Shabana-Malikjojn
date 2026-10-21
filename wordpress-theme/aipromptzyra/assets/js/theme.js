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
    // 3a. View Prompt Toggle (Expand / Collapse with gradient preview)
    const viewBtn = e.target.closest('.az-btn-view-prompt, [data-action="toggle-prompt"]');
    if (viewBtn) {
      e.preventDefault();
      const promptBox = viewBtn.closest('.az-ai-prompt-box');
      if (promptBox) {
        const wrapper = promptBox.querySelector('.az-prompt-content-wrapper');
        if (wrapper) {
          const isExpanded = wrapper.classList.toggle('az-expanded');
          viewBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
          const span = viewBtn.querySelector('span');
          if (span) {
            span.textContent = isExpanded ? 'Hide Prompt' : 'View Prompt';
          }
        }
      }
      return;
    }

    // 3b. Copy Prompt
    const copyBtn = e.target.closest('.copy-prompt-btn, .az-copy-prompt-btn, .az-btn-copy-prompt, [data-action="copy-prompt"]');
    if (!copyBtn) return;

    let promptText = copyBtn.getAttribute('data-prompt');
    if (!promptText) {
      const promptBox = copyBtn.closest('.az-ai-prompt-box');
      if (promptBox) {
        promptText = promptBox.getAttribute('data-prompt') || promptBox.querySelector('.az-prompt-text-preview')?.textContent?.trim();
      }
    }

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

