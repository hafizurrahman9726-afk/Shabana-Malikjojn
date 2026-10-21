/**
 * AI Prompt Box Gutenberg Block
 * Registers 'aipromptzyra/ai-prompt-box' block in WordPress Block Inserter
 *
 * @package AIPromptzyra
 * @version 1.1.3
 */
(function (wp) {
  if (!wp || !wp.blocks || !wp.element) {
    return;
  }

  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var useState = wp.element.useState;
  var __ = wp.i18n ? wp.i18n.__ : function (s) { return s; };

  var TextareaControl = wp.components ? wp.components.TextareaControl : null;
  var TextControl = wp.components ? wp.components.TextControl : null;
  var InspectorControls = (wp.blockEditor && wp.blockEditor.InspectorControls) || (wp.editor && wp.editor.InspectorControls);
  var PanelBody = wp.components ? wp.components.PanelBody : null;

  registerBlockType('aipromptzyra/ai-prompt-box', {
    title: __('AI Prompt Box', 'aipromptzyra'),
    description: __('Custom AI prompt container with gradient fade preview, bold yellow View Prompt & Copy buttons, and direct launchers for ChatGPT, Gemini, and Grok.', 'aipromptzyra'),
    icon: el('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#FFD400', strokeWidth: 2 },
      el('polygon', { points: '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' })
    ),
    category: 'text',
    keywords: [
      __('ai prompt box', 'aipromptzyra'),
      __('prompt', 'aipromptzyra'),
      __('gemini', 'aipromptzyra'),
      __('chatgpt', 'aipromptzyra'),
      __('grok', 'aipromptzyra'),
      __('copy prompt', 'aipromptzyra')
    ],
    supports: {
      html: false,
      align: ['wide', 'full']
    },
    attributes: {
      prompt: {
        type: 'string',
        default: ''
      },
      title: {
        type: 'string',
        default: 'AI Photo Prompt'
      }
    },

    edit: function (props) {
      var attributes = props.attributes;
      var setAttributes = props.setAttributes;
      var prompt = attributes.prompt || '';
      var title = attributes.title || 'AI Photo Prompt';

      // React state for interactive editor preview
      var stateExpanded = useState ? useState(false) : [false, function () {}];
      var isExpanded = stateExpanded[0];
      var setIsExpanded = stateExpanded[1];

      var stateCopied = useState ? useState(false) : [false, function () {}];
      var isCopied = stateCopied[0];
      var setIsCopied = stateCopied[1];

      var encoded = encodeURIComponent(prompt);
      var chatGptUrl = 'https://chatgpt.com/?q=' + encoded;
      var geminiUrl = 'https://gemini.google.com/?q=' + encoded;
      var grokUrl = 'https://x.com/i/grok?q=' + encoded;

      var handleToggleView = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        setIsExpanded(!isExpanded);
      };

      var handleCopyClick = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        if (!prompt) return;

        if (navigator.clipboard && window.isSecureContext && typeof navigator.clipboard.writeText === 'function') {
          navigator.clipboard.writeText(prompt).then(function () {
            setIsCopied(true);
            setTimeout(function () { setIsCopied(false); }, 2500);
          }).catch(function () {
            fallbackCopyInEditor(prompt, setIsCopied);
          });
        } else {
          fallbackCopyInEditor(prompt, setIsCopied);
        }
      };

      function fallbackCopyInEditor(text, setCopied) {
        try {
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.top = '-9999px';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          setCopied(true);
          setTimeout(function () { setCopied(false); }, 2500);
        } catch (err) {
          console.error(err);
        }
      }

      return el(
        'div',
        { className: 'wp-block-aipromptzyra-ai-prompt-box az-ai-prompt-box az-editor-prompt-box' + (isExpanded ? ' az-expanded' : '') },
        InspectorControls && PanelBody && TextControl ? el(
          InspectorControls,
          {},
          el(
            PanelBody,
            { title: __('Prompt Box Settings', 'aipromptzyra'), initialOpen: true },
            el(TextControl, {
              label: __('Box Label / Badge', 'aipromptzyra'),
              value: title,
              onChange: function (val) {
                setAttributes({ title: val });
              }
            })
          )
        ) : null,
        el(
          'div',
          { className: 'az-prompt-box-header' },
          el(
            'div',
            { className: 'az-prompt-badge' },
            el(
              'svg',
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2 },
              el('path', { d: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' })
            ),
            el('span', {}, title || __('AI Photo Prompt', 'aipromptzyra'))
          )
        ),
        TextareaControl ? el(TextareaControl, {
          label: __('Prompt Formula Text (Editable for this post)', 'aipromptzyra'),
          help: __('Type or paste your prompt. Readers will see the gradient fade preview, bold yellow View Prompt & Copy buttons, and direct AI launcher links.', 'aipromptzyra'),
          value: prompt,
          rows: 4,
          placeholder: __('Enter prompt text here (e.g. Create a photorealistic portrait of...)...', 'aipromptzyra'),
          onChange: function (val) {
            setAttributes({ prompt: val });
          }
        }) : el('textarea', {
          className: 'components-textarea-control__input',
          value: prompt,
          rows: 4,
          placeholder: 'Enter prompt text here...',
          onChange: function (e) {
            setAttributes({ prompt: e.target.value });
          }
        }),
        // Live preview container inside Gutenberg editor
        el(
          'div',
          { className: 'az-prompt-content-wrapper' + (isExpanded ? ' az-expanded' : '') },
          el(
            'div',
            { className: 'az-prompt-text-preview' },
            prompt || __('(Enter prompt text above to preview here...)', 'aipromptzyra')
          ),
          el('div', { className: 'az-prompt-gradient-fade' })
        ),
        el(
          'div',
          { className: 'az-prompt-button-bar az-editor-interactive-bar' },
          el(
            'button',
            {
              type: 'button',
              className: 'az-btn-view-prompt',
              onClick: handleToggleView,
              'aria-expanded': isExpanded ? 'true' : 'false'
            },
            el(
              'svg',
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: '#111111', strokeWidth: 2.2, 'aria-hidden': 'true' },
              isExpanded
                ? [
                    el('path', { key: 'p1', d: 'M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24' }),
                    el('line', { key: 'l1', x1: '1', y1: '1', x2: '23', y2: '23' })
                  ]
                : [
                    el('path', { key: 'p1', d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
                    el('circle', { key: 'c1', cx: 12, cy: 12, r: 3 })
                  ]
            ),
            el('span', {}, isExpanded ? __('Collapse Prompt', 'aipromptzyra') : __('View Prompt', 'aipromptzyra'))
          ),
          el(
            'button',
            {
              type: 'button',
              className: 'az-btn-copy-prompt' + (isCopied ? ' copied' : ''),
              onClick: handleCopyClick
            },
            el(
              'svg',
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: isCopied ? '#FFFFFF' : '#111111', strokeWidth: 2.2, 'aria-hidden': 'true' },
              isCopied
                ? el('polyline', { points: '20 6 9 17 4 12' })
                : [
                    el('rect', { key: 'r1', x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
                    el('path', { key: 'p1', d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
                  ]
            ),
            el('span', {}, isCopied ? __('Copied!', 'aipromptzyra') : __('Copy Prompt', 'aipromptzyra'))
          ),
          el('a', { href: chatGptUrl, target: '_blank', rel: 'noopener noreferrer', className: 'az-btn-ai az-btn-chatgpt' }, el('span', {}, 'ChatGPT'), ' ↗'),
          el('a', { href: geminiUrl, target: '_blank', rel: 'noopener noreferrer', className: 'az-btn-ai az-btn-gemini' }, el('span', {}, 'Gemini'), ' ↗'),
          el('a', { href: grokUrl, target: '_blank', rel: 'noopener noreferrer', className: 'az-btn-ai az-btn-grok' }, el('span', {}, 'Grok'), ' ↗')
        )
      );
    },

    save: function (props) {
      var attributes = props.attributes;
      var prompt = attributes.prompt || '';
      var title = attributes.title || 'AI Photo Prompt';

      var encoded = encodeURIComponent(prompt);
      var chatGptUrl = 'https://chatgpt.com/?q=' + encoded;
      var geminiUrl = 'https://gemini.google.com/?q=' + encoded;
      var grokUrl = 'https://x.com/i/grok?q=' + encoded;

      return el(
        'div',
        {
          className: 'wp-block-aipromptzyra-ai-prompt-box az-ai-prompt-box',
          'data-prompt': prompt
        },
        title ? el(
          'div',
          { className: 'az-prompt-box-header' },
          el(
            'div',
            { className: 'az-prompt-badge' },
            el(
              'svg',
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': 'true' },
              el('path', { d: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83' })
            ),
            el('span', {}, title)
          )
        ) : null,
        el(
          'div',
          { className: 'az-prompt-content-wrapper' },
          el(
            'div',
            { className: 'az-prompt-text-preview' },
            prompt
          ),
          el('div', { className: 'az-prompt-gradient-fade' })
        ),
        el(
          'div',
          { className: 'az-prompt-button-bar' },
          el(
            'button',
            {
              type: 'button',
              className: 'az-btn-view-prompt',
              'data-action': 'toggle-prompt',
              'aria-expanded': 'false',
              'aria-label': 'Expand full prompt'
            },
            el(
              'svg',
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: '#111111', strokeWidth: 2.2, 'aria-hidden': 'true' },
              el('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
              el('circle', { cx: 12, cy: 12, r: 3 })
            ),
            el('span', {}, 'View Prompt')
          ),
          el(
            'button',
            {
              type: 'button',
              className: 'az-btn-copy-prompt',
              'data-action': 'copy-prompt',
              'aria-label': 'Copy prompt to clipboard'
            },
            el(
              'svg',
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: '#111111', strokeWidth: 2.2, 'aria-hidden': 'true' },
              el('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
              el('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
            ),
            el('span', {}, 'Copy Prompt')
          ),
          el(
            'a',
            {
              href: chatGptUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'az-btn-ai az-btn-chatgpt'
            },
            el('span', {}, 'ChatGPT'),
            ' ↗'
          ),
          el(
            'a',
            {
              href: geminiUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'az-btn-ai az-btn-gemini'
            },
            el('span', {}, 'Gemini'),
            ' ↗'
          ),
          el(
            'a',
            {
              href: grokUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'az-btn-ai az-btn-grok'
            },
            el('span', {}, 'Grok'),
            ' ↗'
          )
        )
      );
    }
  });
})(window.wp);
