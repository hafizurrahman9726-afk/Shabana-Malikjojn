/**
 * AI Prompt Box Gutenberg Block
 * Registers 'aipromptzyra/ai-prompt-box' block in WordPress Block Inserter
 *
 * @package AIPromptzyra
 */
(function (wp) {
  if (!wp || !wp.blocks || !wp.element) {
    return;
  }

  var registerBlockType = wp.blocks.registerBlockType;
  var el = wp.element.createElement;
  var __ = wp.i18n ? wp.i18n.__ : function (s) { return s; };

  var TextareaControl = wp.components ? wp.components.TextareaControl : null;
  var TextControl = wp.components ? wp.components.TextControl : null;
  var InspectorControls = (wp.blockEditor && wp.blockEditor.InspectorControls) || (wp.editor && wp.editor.InspectorControls);
  var PanelBody = wp.components ? wp.components.PanelBody : null;

  registerBlockType('aipromptzyra/ai-prompt-box', {
    title: __('AI Prompt Box', 'aipromptzyra'),
    description: __('Custom AI prompt container with gradient fade preview, View Prompt toggle, Copy button, and direct launchers for ChatGPT, Gemini, and Grok.', 'aipromptzyra'),
    icon: el('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: '#7c3aed', strokeWidth: 2 },
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

      return el(
        'div',
        { className: 'wp-block-aipromptzyra-ai-prompt-box az-ai-prompt-box az-editor-prompt-box' },
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
            el('span', {}, title || __('AI Prompt Box', 'aipromptzyra'))
          )
        ),
        TextareaControl ? el(TextareaControl, {
          label: __('Prompt Formula Text (Editable for this post)', 'aipromptzyra'),
          help: __('Type or paste your prompt. Readers will see the gradient fade preview, View Prompt, Copy Prompt, and AI buttons.', 'aipromptzyra'),
          value: prompt,
          rows: 5,
          placeholder: __('Enter prompt text here (e.g. Create a photorealistic portrait of...)...', 'aipromptzyra'),
          onChange: function (val) {
            setAttributes({ prompt: val });
          }
        }) : el('textarea', {
          className: 'components-textarea-control__input',
          value: prompt,
          rows: 5,
          placeholder: 'Enter prompt text here...',
          onChange: function (e) {
            setAttributes({ prompt: e.target.value });
          }
        }),
        el(
          'div',
          { className: 'az-prompt-button-bar az-editor-preview-bar' },
          el('button', { type: 'button', className: 'az-btn-view-prompt' }, '👁 View Prompt'),
          el('button', { type: 'button', className: 'az-btn-copy-prompt' }, '📋 Copy Prompt'),
          el('span', { className: 'az-btn-ai az-btn-chatgpt' }, 'ChatGPT ↗'),
          el('span', { className: 'az-btn-ai az-btn-gemini' }, 'Gemini ↗'),
          el('span', { className: 'az-btn-ai az-btn-grok' }, 'Grok ↗')
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
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': 'true' },
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
              { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, 'aria-hidden': 'true' },
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
