/**
 * AI Prompt Box - Frontend Interactive Script
 * Provides independent View Prompt expansion toggle and Copy Prompt with reliable clipboard fallback
 *
 * @package AIPromptzyra
 * @version 1.1.3
 */
(function () {
  'use strict';

  function initAIPromptBox() {
    if (window._aiPromptBoxInitialized) return;
    window._aiPromptBoxInitialized = true;

    // Use event delegation on document so dynamic, AJAX, or Gutenberg-inserted blocks work instantly
    document.addEventListener('click', function (e) {
      if (e._azHandled) return;

      // 1. View Prompt Toggle Button
      var viewBtn = e.target.closest('.az-btn-view-prompt, [data-action="toggle-prompt"]');
      if (viewBtn) {
        e.preventDefault();
        e._azHandled = true;
        handleViewPromptToggle(viewBtn);
        return;
      }

      // 2. Copy Prompt Button
      var copyBtn = e.target.closest('.az-btn-copy-prompt, [data-action="copy-prompt"], .copy-prompt-btn, .az-copy-prompt-btn');
      if (copyBtn) {
        e.preventDefault();
        e._azHandled = true;
        handleCopyPromptClick(copyBtn);
        return;
      }
    });
  }

  /**
   * Toggle expand / collapse for a specific AI Prompt Box instance
   */
  function handleViewPromptToggle(viewBtn) {
    var promptBox = viewBtn.closest('.wp-block-aipromptzyra-ai-prompt-box, .az-ai-prompt-box');
    if (!promptBox) return;

    var wrapper = promptBox.querySelector('.az-prompt-content-wrapper');
    if (!wrapper) return;

    // Determine current expanded state
    var isCurrentlyExpanded =
      promptBox.classList.contains('az-expanded') ||
      wrapper.classList.contains('az-expanded') ||
      viewBtn.getAttribute('aria-expanded') === 'true';

    var nextExpanded = !isCurrentlyExpanded;

    if (nextExpanded) {
      promptBox.classList.add('az-expanded');
      wrapper.classList.add('az-expanded');
      viewBtn.setAttribute('aria-expanded', 'true');
      viewBtn.setAttribute('aria-label', 'Collapse prompt');
      var span = viewBtn.querySelector('span');
      if (span) span.textContent = 'Collapse Prompt';
      var svg = viewBtn.querySelector('svg');
      if (svg) {
        svg.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
      }
    } else {
      promptBox.classList.remove('az-expanded');
      wrapper.classList.remove('az-expanded');
      viewBtn.setAttribute('aria-expanded', 'false');
      viewBtn.setAttribute('aria-label', 'Expand full prompt');
      var span2 = viewBtn.querySelector('span');
      if (span2) span2.textContent = 'View Prompt';
      var svg2 = viewBtn.querySelector('svg');
      if (svg2) {
        svg2.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
      }
    }
  }

  /**
   * Handle Copy Prompt for that specific block instance
   */
  function handleCopyPromptClick(copyBtn) {
    var promptBox = copyBtn.closest('.wp-block-aipromptzyra-ai-prompt-box, .az-ai-prompt-box');
    var promptText = copyBtn.getAttribute('data-prompt');

    // Look inside this specific block only
    if (!promptText && promptBox) {
      promptText = promptBox.getAttribute('data-prompt');
    }
    if (!promptText && promptBox) {
      var textPreview = promptBox.querySelector('.az-prompt-text-preview') || promptBox.querySelector('.az-prompt-text-clean');
      if (textPreview) {
        promptText = textPreview.innerText || textPreview.textContent || '';
      }
    }
    if (!promptText) {
      var nextEl = copyBtn.closest('.az-prompt-action-bar')?.nextElementSibling;
      if (nextEl) {
        promptText = nextEl.innerText || nextEl.textContent || '';
      }
    }

    promptText = (promptText || '').trim();

    if (!promptText) {
      showCopyFeedback(copyBtn, false, 'No prompt found');
      return;
    }

    copyToClipboard(promptText, function () {
      showCopyFeedback(copyBtn, true, 'Copied!');
    }, function (err) {
      console.warn('Clipboard copy error, fallback attempt failed:', err);
      showCopyFeedback(copyBtn, false, 'Copy failed');
    });
  }

  /**
   * Robust copy using Clipboard API with document.execCommand fallback
   */
  function copyToClipboard(text, onSuccess, onError) {
    if (navigator.clipboard && window.isSecureContext && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text).then(function () {
        if (onSuccess) onSuccess();
      }).catch(function () {
        fallbackCopyExec(text, onSuccess, onError);
      });
    } else {
      fallbackCopyExec(text, onSuccess, onError);
    }
  }

  /**
   * Fallback copy using hidden textarea
   */
  function fallbackCopyExec(text, onSuccess, onError) {
    try {
      var textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.fontSize = '16px';
      textArea.style.position = 'fixed';
      textArea.style.top = '-9999px';
      textArea.style.left = '-9999px';
      textArea.style.width = '2em';
      textArea.style.height = '2em';
      textArea.style.padding = '0';
      textArea.style.border = 'none';
      textArea.style.outline = 'none';
      textArea.style.boxShadow = 'none';
      textArea.style.background = 'transparent';
      textArea.style.opacity = '0';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      textArea.setSelectionRange(0, text.length);

      var successful = false;
      try {
        successful = document.execCommand('copy');
      } catch (e) {
        successful = false;
      }
      document.body.removeChild(textArea);

      if (successful) {
        if (onSuccess) onSuccess();
      } else {
        if (onError) onError(new Error('execCommand returned false'));
      }
    } catch (err) {
      if (onError) onError(err);
    }
  }

  /**
   * Show clear feedback on the button
   */
  function showCopyFeedback(btn, isSuccess, message) {
    var span = btn.querySelector('span');
    var svg = btn.querySelector('svg');

    var originalText = btn.getAttribute('data-original-text');
    if (!originalText && span) {
      originalText = span.textContent;
      btn.setAttribute('data-original-text', originalText);
    }

    if (btn._resetTimer) {
      clearTimeout(btn._resetTimer);
    }

    if (isSuccess) {
      if (span) span.textContent = message || 'Copied!';
      btn.classList.add('copied');
      btn.classList.remove('copy-failed');
      if (svg) {
        svg.innerHTML = '<polyline points="20 6 9 17 4 12"></polyline>';
      }

      btn._resetTimer = setTimeout(function () {
        if (span) span.textContent = originalText || 'Copy Prompt';
        btn.classList.remove('copied');
        if (svg) {
          svg.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
        }
      }, 2500);
    } else {
      if (span) span.textContent = message || 'Copy failed';
      btn.classList.add('copy-failed');
      btn.classList.remove('copied');

      btn._resetTimer = setTimeout(function () {
        if (span) span.textContent = originalText || 'Copy Prompt';
        btn.classList.remove('copy-failed');
      }, 3000);
    }
  }

  // Self-init on DOMContentLoaded or immediately if already loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAIPromptBox);
  } else {
    initAIPromptBox();
  }
})();
