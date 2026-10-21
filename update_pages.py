import subprocess
import json
import re
import sys

# 1. Fetch fresh REST nonce from WordPress Admin edit screen
def get_fresh_nonce():
    cmd = ['curl', '-s', '-b', 'cookies.txt', 'https://aipromptzyra.com/wp-admin/post.php?post=43&action=edit']
    res = subprocess.run(cmd, capture_output=True, text=True)
    m = re.search(r'wpApiSettings\s*=\s*(\{.*?\});', res.stdout)
    if m:
        data = json.loads(m.group(1).replace(r'\/', '/'))
        return data['nonce']
    raise RuntimeError("Could not extract wpApiSettings nonce from wp-admin")

nonce = get_fresh_nonce()
print(f"Acquired fresh WordPress REST Nonce: {nonce}")

# 2. Define the 4 pages with complete, pristine, human-crafted content
PAGES = {
    43: {
        "slug": "contact",
        "title": "Contact Us",
        "excerpt": "Have a prompt idea, question, or need a correction? Get in touch with Zyra Ansari and the AIPromptZyra editorial desk.",
        "content": """
<div class="page-meta-badge-bar">
    <span class="page-meta-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        Editorial Desk
    </span>
    <span>Editor: Zyra Ansari</span>
    <span>•</span>
    <span>Last Updated: October 21, 2026</span>
</div>

<div class="page-callout-box">
    <p><strong>Welcome to AIPromptZyra!</strong> Whether you have an idea for a new prompt style, spotted a parameter that needs updating, or simply want to share how one of our formulas worked for your creative project, we would love to hear from you. We review every message personally.</p>
</div>

<h2>Direct Editorial Contact</h2>
<p>As an independent generative AI publication, we keep communication direct and personal. We do not use automated support bots, third-party ticket queues, or phone lines. The fastest and most reliable way to reach our editor is via our official email address:</p>

<div class="contact-email-banner">
    <p style="font-size: 1.15rem; font-weight: 700; margin-bottom: 6px; color: var(--az-text);">Official Editorial Email Address</p>
    <p style="color: var(--az-text-muted); margin-bottom: 12px; font-size: 0.95rem;">Click below to open your preferred email client:</p>
    <a href="mailto:contact@aipromptzyra.com" class="contact-email-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        contact@aipromptzyra.com
    </a>
</div>

<h2>How We Can Help You</h2>
<p>To help us route and address your message quickly, please consider the following categories when writing to us:</p>

<div class="contact-channels-grid">
    <div class="contact-card-box">
        <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <h3 class="contact-card-title">1. General Inquiries &amp; Feedback</h3>
        <p style="font-size: 0.95rem; color: var(--az-text-muted); margin: 0;">Have feedback about our guides, tutorials, or prompt formulas? Let us know what worked well for your workflow and what creative themes you would like to see us cover next.</p>
    </div>

    <div class="contact-card-box">
        <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <h3 class="contact-card-title">2. Prompt Suggestions &amp; Requests</h3>
        <p style="font-size: 0.95rem; color: var(--az-text-muted); margin: 0;">Looking for a prompt formula for specific cultural attire, traditional Indian wedding portraits, cinematic lighting, or particular aesthetics? Suggest a topic and our editorial team may research and write a dedicated guide.</p>
    </div>

    <div class="contact-card-box">
        <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </div>
        <h3 class="contact-card-title">3. Content Corrections &amp; Updates</h3>
        <p style="font-size: 0.95rem; color: var(--az-text-muted); margin: 0;">Generative AI models and parameter syntax change rapidly. If you spot a typographical error, a broken prompt parameter, or an outdated interface reference in any article, please alert us so we can review and correct it.</p>
    </div>

    <div class="contact-card-box">
        <div class="contact-card-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <h3 class="contact-card-title">4. Technical &amp; Website Issues</h3>
        <p style="font-size: 0.95rem; color: var(--az-text-muted); margin: 0;">Encountering a broken link, a visual layout glitch on mobile, or an issue with our AI Prompt Builder tool? Please describe the issue and your device/browser so our technical team can reproduce and resolve it.</p>
    </div>
</div>

<div class="contact-card-box" style="margin-top: 16px;">
    <div class="contact-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    </div>
    <h3 class="contact-card-title">5. Copyright &amp; Intellectual Property Inquiries</h3>
    <p style="font-size: 0.95rem; color: var(--az-text-muted); margin: 0;">AIPromptZyra respects the intellectual property rights of creators and organizations. If you believe any text, sample image reference, or content formulation on this site infringes upon your copyright or trademark, please contact us with the URL and relevant documentation so we can investigate promptly.</p>
</div>

<h2>Helpful Tips for Faster Assistance</h2>
<p>To help us understand and address your inquiry effectively, we recommend including the following details in your email:</p>
<ul>
    <li><strong>Clear Subject Line:</strong> Use a concise subject line indicating the nature of your message, such as <code>[Prompt Request] Bridal Lehengas</code>, <code>[Correction] Article Title</code>, or <code>[Bug Report] Prompt Builder Mobile</code>.</li>
    <li><strong>Specific Article URL:</strong> If your question or feedback pertains to a specific tutorial or prompt, please include the direct link.</li>
    <li><strong>Model Details:</strong> If reporting unexpected generative results, let us know which AI platform and model version you tested (e.g., Google Gemini, Midjourney v6, ChatGPT DALL-E 3) along with the seed or aspect ratio used.</li>
</ul>

<h2>Our Editorial Standards &amp; Expectations</h2>
<p>We do not operate a commercial call center, public storefront, or automated telephone support. Zyra Ansari and our small editorial team review incoming messages in the order they arrive. We aim to respond thoughtfully to all genuine inquiries, prompt suggestions, and constructive feedback.</p>

<div class="page-nav-bar">
    <div>
        <strong>Related Editorial Pages:</strong>
        <span style="margin: 0 8px;">•</span>
        <a href="/privacy-policy/">Privacy Policy</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/disclaimer/">Disclaimer</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
    </div>
    <div>
        <span>AIPromptZyra • Published by Zyra Ansari</span>
    </div>
</div>
"""
    },

    44: {
        "slug": "privacy-policy",
        "title": "Privacy Policy",
        "excerpt": "Learn how AIPromptZyra respects your personal privacy, manages technical server information, and handles correspondence.",
        "content": """
<div class="page-meta-badge-bar">
    <span class="page-meta-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
        Privacy &amp; Data Transparency
    </span>
    <span>Effective Date: October 21, 2026</span>
    <span>•</span>
    <span>Editor: Zyra Ansari</span>
</div>

<div class="page-callout-box">
    <p><strong>Our Privacy Commitment:</strong> At AIPromptZyra (<a href="https://aipromptzyra.com/">https://aipromptzyra.com/</a>), we believe in clear, reader-first privacy. We do not require you to create an account, register personal profiles, or provide payment details to browse our prompt library, tutorials, or use our interactive Prompt Builder. This policy explains what information is collected, how it is used, and how your privacy is protected.</p>
</div>

<h2>1. Introduction &amp; Scope</h2>
<p>AIPromptZyra is an independent website focused on generative AI prompt engineering, photography prompts, and creative tutorials, owned and edited by <strong>Zyra Ansari</strong>. This Privacy Policy applies to all pages, tools, and content available under the domain <code>aipromptzyra.com</code>.</p>
<p>By browsing or using AIPromptZyra, you acknowledge the practices described in this Privacy Policy. If you have any questions about how your data is handled, you may reach us directly at <a href="mailto:contact@aipromptzyra.com">contact@aipromptzyra.com</a>.</p>

<h2>2. Information You Voluntarily Provide</h2>
<p>Unlike many online platforms, AIPromptZyra does not require visitor account registration, logins, or paid subscriptions. You can freely explore our prompt formulas, copy prompt text, and utilize our prompt builder without providing any personal identity information.</p>
<p>The only personal information we collect directly is what you choose to provide when contacting us via email at <a href="mailto:contact@aipromptzyra.com">contact@aipromptzyra.com</a>. This may include:</p>
<ul>
    <li>Your name or sender handle</li>
    <li>Your email address</li>
    <li>The subject and body of your message, including any prompt suggestions, questions, or feedback you submit</li>
</ul>
<p>We use this information solely to review your communication, respond to your inquiries, and implement useful editorial suggestions. We do not use your email address for unsolicited marketing lists or share it with third parties.</p>

<h2>3. Information Collected Automatically (Server Logs &amp; Technical Data)</h2>
<p>When you visit any website on the internet, your web browser automatically transmits basic technical data to the web server hosting the site. Our hosting provider and content delivery network (Cloudflare) record this standard information in technical server logs. This data may include:</p>
<ul>
    <li>Your device’s Internet Protocol (IP) address</li>
    <li>Browser type, version, and language settings</li>
    <li>Operating system and device category (desktop, tablet, or mobile)</li>
    <li>Referring webpage URL (the site you arrived from)</li>
    <li>Date, time, and duration of requests</li>
    <li>Specific pages, stylesheets, or images requested on our domain</li>
</ul>
<p>This technical log data is analyzed strictly in an aggregated, non-personally identifiable manner to ensure server stability, defend against automated distributed denial-of-service (DDoS) attacks, identify broken links, and optimize page load speeds across global networks.</p>

<h2>4. Cookies and Browser Local Storage</h2>
<p>A cookie is a small text file stored on your device by your browser. We keep cookie usage minimal and functional:</p>
<ul>
    <li><strong>Theme Preference (Local Storage):</strong> We use browser <code>localStorage</code> to remember whether you prefer our light mode or dark mode theme, ensuring your visual preference persists across page navigations.</li>
    <li><strong>Security and CDN Cookies:</strong> Our content delivery network (Cloudflare) may set essential security cookies (such as Cloudflare clearance cookies) to verify that incoming traffic originates from legitimate human visitors rather than automated botnets.</li>
    <li><strong>Controlling Cookies:</strong> You can manage or disable cookies at any time through your browser settings (such as Chrome, Firefox, Safari, or Edge). Please note that our prompt content, copy buttons, and tutorials remain fully accessible even if you disable cookies.</li>
</ul>

<h2>5. Analytics and Advertising Disclosures</h2>
<p>We are committed to total transparency regarding third-party services and analytics:</p>
<ul>
    <li><strong>Current Status:</strong> As of October 2026, AIPromptZyra does not utilize third-party behavioral user-tracking networks or behavioral data brokers.</li>
    <li><strong>Future Analytics:</strong> In the future, we may implement privacy-friendly web analytics tools (such as privacy-configured Google Analytics) to understand aggregated traffic patterns, such as which prompt categories are most popular. If implemented, analytics data is anonymized and aggregated.</li>
    <li><strong>Contextual Advertising:</strong> To help offset domain registration, hosting, and editorial research expenses, AIPromptZyra may display non-intrusive contextual advertisements in the future through reputable ad networks such as Google AdSense. Google and third-party advertising partners may use cookies (such as the DoubleClick cookie) to serve advertisements based on a user’s prior visits to this or other websites.</li>
    <li><strong>Opting Out of Personalized Ads:</strong> Visitors may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or through the <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-Out Page</a>.</li>
</ul>

<h2>6. External Links &amp; Third-Party AI Services</h2>
<p>AIPromptZyra is an educational resource that creates and publishes prompt formulas specifically designed for use in third-party generative AI platforms, such as Google Gemini, OpenAI ChatGPT, Microsoft Copilot / Bing Image Creator, and Midjourney. Our articles also include external links to official AI portals, documentation, and external reference guides.</p>
<p>Please be aware that once you click an external link to visit a third-party website or launch an AI generator, your interactions with that service are governed entirely by that third party's privacy policy and terms of service. We have no control over and assume no responsibility for the content, privacy practices, or data handling of external platforms.</p>

<h2>7. Data Sharing and Disclosure</h2>
<p>We uphold a strict policy regarding your personal data:</p>
<ul>
    <li><strong>No Commercial Sale:</strong> We do not sell, rent, lease, trade, or monetize your personal information or email communications to third parties or marketing agencies under any circumstances.</li>
    <li><strong>Legal Compliance:</strong> We will only disclose personal communication records if strictly required to do so by applicable law, a valid subpoena, or a lawful court order, or when necessary to protect the legal rights, safety, and security of AIPromptZyra and its readers.</li>
</ul>

<h2>8. Data Security and Protection</h2>
<p>We implement standard, modern security measures to safeguard our website and user interactions:</p>
<ul>
    <li>The entire AIPromptZyra website is encrypted using Secure Sockets Layer / Transport Layer Security (HTTPS / SSL), ensuring that data transmitted between your web browser and our servers remains private and encrypted in transit.</li>
    <li>Administrative access to the website backend and official email accounts is restricted to authorized personnel using multi-factor authentication.</li>
    <li>While we take all reasonable precautions, please note that no method of transmission over the internet or electronic storage is 100% impenetrable.</li>
</ul>

<h2>9. Data Retention</h2>
<p>We retain email correspondence sent to <a href="mailto:contact@aipromptzyra.com">contact@aipromptzyra.com</a> only for the duration necessary to address your feedback, resolve reported bugs, or fulfill editorial follow-ups. After our communication is completed, correspondence is periodically archived or securely deleted in accordance with regular inbox hygiene.</p>

<h2>10. Children’s Online Privacy</h2>
<p>AIPromptZyra is a general-audience creative resource and does not target or knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has contacted us or provided personal details through email correspondence, please contact us at <a href="mailto:contact@aipromptzyra.com">contact@aipromptzyra.com</a>, and we will promptly remove the correspondence from our records.</p>

<h2>11. Your Privacy Rights &amp; Choices</h2>
<p>Depending on your location, you may have statutory privacy rights regarding your personal correspondence, including the right to request access to any email records we have received from you, request corrections, or request that your messages be deleted. To exercise any of these rights, please contact us with the subject line <code>Privacy Request</code>.</p>

<h2>12. Updates to This Privacy Policy</h2>
<p>We may periodically update this Privacy Policy to reflect changes in our editorial practices, technological infrastructure, or applicable privacy laws. When updates are published, the revised date at the top of this page will be updated accordingly. We encourage readers to check this page occasionally to stay informed.</p>

<h2>13. Contact Information</h2>
<p>If you have any questions, comments, or concerns regarding this Privacy Policy or our data handling practices, please write to our editor:</p>
<ul>
    <li><strong>Website:</strong> <a href="https://aipromptzyra.com/">https://aipromptzyra.com/</a></li>
    <li><strong>Editor &amp; Owner:</strong> Zyra Ansari</li>
    <li><strong>Official Email:</strong> <a href="mailto:contact@aipromptzyra.com">contact@aipromptzyra.com</a></li>
    <li><strong>Contact Page:</strong> <a href="/contact/">https://aipromptzyra.com/contact/</a></li>
</ul>

<div class="page-nav-bar">
    <div>
        <strong>Related Editorial Pages:</strong>
        <span style="margin: 0 8px;">•</span>
        <a href="/contact/">Contact Us</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/disclaimer/">Disclaimer</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
    </div>
    <div>
        <span>AIPromptZyra • Published by Zyra Ansari</span>
    </div>
</div>
"""
    },

    46: {
        "slug": "disclaimer",
        "title": "Disclaimer",
        "excerpt": "Important information regarding the creative and educational nature of our AI prompts, model outputs, trademarks, and third-party tools.",
        "content": """
<div class="page-meta-badge-bar">
    <span class="page-meta-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        Creative &amp; Legal Notice
    </span>
    <span>Effective Date: October 21, 2026</span>
    <span>•</span>
    <span>Editor: Zyra Ansari</span>
</div>

<div class="page-callout-box">
    <p><strong>Please Read Carefully:</strong> All AI prompts, parameter suggestions, formulas, and visual examples published on AIPromptZyra (<a href="https://aipromptzyra.com/">https://aipromptzyra.com/</a>) are provided for creative inspiration, educational reference, and informational purposes only. Generative AI tools operate non-deterministically; results vary by model, settings, and updates.</p>
</div>

<h2>1. Creative &amp; Educational Purposes Only</h2>
<p>AIPromptZyra is an independent prompt engineering research and tutorial blog published by <strong>Zyra Ansari</strong>. The prompt texts, lighting formulas, camera parameters, cultural attire descriptions, and tutorials featured on this website are designed to help creators explore and learn generative AI image generation.</p>
<p>Nothing on this website constitutes legal advice, professional photography consulting, or a contractual guarantee of output quality. The examples and suggestions provided are creative starting points meant to inspire your own experimentation.</p>

<h2>2. No Guarantee of Specific AI Generated Results</h2>
<p>Generative artificial intelligence models—such as Google Gemini, Midjourney, OpenAI DALL-E, and Stable Diffusion—are complex, probabilistic machine learning systems. By their very nature, these systems are non-deterministic. This means that entering the exact same prompt multiple times can produce distinctly different visual outcomes.</p>
<p>Your actual generated results will depend heavily on numerous technical variables outside our control, including:</p>
<ul>
    <li>The specific AI platform and underlying model version (e.g., Gemini 1.5 Flash vs. Pro, Midjourney v5 vs. v6, DALL-E 3)</li>
    <li>Platform-level system prompts, safety filters, and background prompt enhancements applied silently by AI providers</li>
    <li>User-configurable parameters such as aspect ratio (<code>--ar</code>), stylization (<code>--s</code>), chaos, seed values, negative prompts, and temperature</li>
    <li>Hardware acceleration, resolution scaling, and continuous algorithmic updates deployed by third-party AI companies</li>
</ul>
<p>Consequently, AIPromptZyra <strong>cannot and does not guarantee</strong> that entering any prompt published on our site will produce an identical image, exact composition, or flawless anatomical detail. We encourage users to treat our prompts as customizable formulas rather than rigid blueprints.</p>

<h2>3. No Guarantee of Human Likeness or Identity Preservation</h2>
<p>Prompts on AIPromptZyra describing character traits, ethnic garments, wedding attire, or artistic portraits represent stylized conceptual archetypes. Text prompts alone do not preserve individual human identity, retain facial features across generations, or guarantee likeness preservation.</p>
<p>If you choose to use reference photographs or face-swap features in compatible AI tools, you are solely responsible for ensuring that you have full legal rights, consents, and model releases from any identifiable individuals. AIPromptZyra accepts no responsibility for unauthorized likeness reproduction conducted by readers.</p>

<h2>4. Third-Party Trademarks &amp; Non-Affiliation</h2>
<p>All product names, brand names, logos, trademarks, and registered trademarks mentioned on AIPromptZyra—including but not limited to:</p>
<ul>
    <li><strong>Google</strong>, <strong>Google Gemini</strong>, and <strong>Imagen</strong> (trademarks of Google LLC / Alphabet Inc.)</li>
    <li><strong>OpenAI</strong>, <strong>ChatGPT</strong>, and <strong>DALL-E</strong> (trademarks of OpenAI, Inc.)</li>
    <li><strong>Microsoft</strong>, <strong>Microsoft Copilot</strong>, and <strong>Bing Image Creator</strong> (trademarks of Microsoft Corporation)</li>
    <li><strong>Midjourney</strong> (trademark of Midjourney, Inc.)</li>
</ul>
<p>are the property of their respective trademark holders. Their mention on this website is strictly for <strong>nominative, educational, and descriptive identification purposes</strong> to indicate compatibility and instruct readers on how to use prompts within those tools.</p>
<p>AIPromptZyra is an <strong>independent publication</strong> and is not endorsed by, sponsored by, authorized by, or in any way officially connected with Google, OpenAI, Microsoft, Midjourney, or any other artificial intelligence company.</p>

<h2>5. User Responsibility and Ethical Usage</h2>
<p>Generative AI technology is a powerful creative medium that must be used responsibly. Readers and visitors bear complete responsibility for the prompts they submit to AI engines and the images they generate, save, publish, or monetize.</p>
<p>When utilizing prompts from AIPromptZyra, you agree to respect and comply with the official Terms of Service and Acceptable Use Policies of the AI generator platform you employ. AIPromptZyra <strong>strictly condemns and disclaims</strong> any use of prompts or AI tools to create:</p>
<ul>
    <li>Deceptive deepfakes, misleading impersonations, or election-related disinformation</li>
    <li>Non-consensual sexual, explicit, or intimate imagery</li>
    <li>Defamatory, hateful, harassing, or discriminatory content</li>
    <li>Infringing depictions that violate third-party intellectual property or publicity rights</li>
</ul>

<h2>6. External Links &amp; Third-Party Websites</h2>
<p>AIPromptZyra contains hyperlinks to third-party websites, external AI tools, and documentation. These links are provided for your convenience and reference. We do not inspect, endorse, or monitor external websites, and we assume no liability for the availability, content, policies, or technical operations of third-party platforms.</p>

<h2>7. Limitation of Responsibility</h2>
<p>To the fullest extent permitted by applicable law, AIPromptZyra and its editor, Zyra Ansari, shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising from:</p>
<ul>
    <li>Your access to or reliance on any prompt, tutorial, or formula published on the website</li>
    <li>Any unexpected, imperfect, or unintended visual output generated by third-party AI models</li>
    <li>Changes, fees, rate limits, or account suspensions imposed by external AI platforms</li>
    <li>Any temporary website downtime or technical errors</li>
</ul>

<h2>8. Questions &amp; Reporting Inaccuracies</h2>
<p>Because artificial intelligence platforms update their software frequently, prompt syntax or model availability may shift over time. If you notice an outdated prompt parameter, a broken external link, or an inaccuracy in any guide, please help us keep AIPromptZyra accurate by writing to <a href="mailto:contact@aipromptzyra.com">contact@aipromptzyra.com</a> or visiting our <a href="/contact/">Contact Us</a> page.</p>

<div class="page-nav-bar">
    <div>
        <strong>Related Editorial Pages:</strong>
        <span style="margin: 0 8px;">•</span>
        <a href="/contact/">Contact Us</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/privacy-policy/">Privacy Policy</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/terms-and-conditions/">Terms &amp; Conditions</a>
    </div>
    <div>
        <span>AIPromptZyra • Published by Zyra Ansari</span>
    </div>
</div>
"""
    },

    45: {
        "slug": "terms-and-conditions",
        "title": "Terms and Conditions",
        "excerpt": "The rules, rights, and permitted uses governing your access to AIPromptZyra and our published prompt resources.",
        "content": """
<div class="page-meta-badge-bar">
    <span class="page-meta-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        Website Usage &amp; Editorial Agreement
    </span>
    <span>Effective Date: October 21, 2026</span>
    <span>•</span>
    <span>Editor: Zyra Ansari</span>
</div>

<div class="page-callout-box">
    <p><strong>Welcome to AIPromptZyra!</strong> Please review these Terms and Conditions carefully. They outline the permitted uses of our published prompt formulas, intellectual property boundaries, and rules governing website access. By browsing or using <a href="https://aipromptzyra.com/">https://aipromptzyra.com/</a>, you agree to these terms.</p>
</div>

<h2>1. Agreement to Terms</h2>
<p>These Terms and Conditions constitute a legally binding agreement between you ("User", "you", or "visitor") and AIPromptZyra ("we", "us", or "our"), an independent digital publication operated and edited by <strong>Zyra Ansari</strong> at <code>https://aipromptzyra.com/</code>.</p>
<p>By accessing, browsing, copying content from, or interacting with AIPromptZyra, you confirm that you have read, understood, and agreed to be bound by these Terms and Conditions, as well as our <a href="/privacy-policy/">Privacy Policy</a> and <a href="/disclaimer/">Disclaimer</a>. If you do not agree with any part of these terms, you must discontinue your use of the website.</p>

<h2>2. Permitted Use of Published Prompts &amp; Creative Formulas</h2>
<p>AIPromptZyra was founded on the principle of making high-quality prompt engineering accessible to everyone. We want creators to use and enjoy our prompt formulas without artificial hurdles:</p>
<ul>
    <li><strong>Copying &amp; Adaptation:</strong> You are granted a free, worldwide, non-exclusive license to copy, adapt, customize, refine, and apply any prompt text strings, modifier keywords, and formula guides published on AIPromptZyra.</li>
    <li><strong>Personal &amp; Commercial Projects:</strong> You may use our prompts to generate images for both non-commercial personal projects and commercial artwork, client designs, social media graphics, or digital marketing campaigns.</li>
    <li><strong>Ownership of Generated Outputs:</strong> AIPromptZyra claims <strong>no ownership, copyright, or royalty interest</strong> in the creative images or artwork you produce using our prompts within your chosen generative AI tools (subject always to the terms and licensing policies of those respective third-party AI platforms).</li>
</ul>

<h2>3. Intellectual Property Rights of AIPromptZyra Content</h2>
<p>While prompt formulas are free for you to use in image generators, the website's original editorial and creative identity is protected:</p>
<ul>
    <li><strong>Editorial Text &amp; Articles:</strong> All original written tutorials, guide explanations, analysis, educational commentary, and website copy are the copyrighted property of AIPromptZyra and Zyra Ansari.</li>
    <li><strong>Design, Branding &amp; Code:</strong> The AIPromptZyra logo, website styling, custom CSS, layout structure, software scripts, and visual design elements are protected by copyright, trademark, and unfair competition laws.</li>
    <li><strong>Restrictions on Bulk Scraping:</strong> You may not systematically copy, scrape, mirror, or republish entire articles, extensive prompt databases, or full tutorials onto competing websites, automated scrapers, or commercial content repositories without prior written permission from Zyra Ansari.</li>
    <li><strong>Fair Citation &amp; Attribution:</strong> You are welcome to quote brief excerpts or individual prompt snippets for educational reviews, tutorials, or social sharing, provided you include clear editorial attribution and a working link back to the original article on AIPromptZyra.</li>
</ul>

<h2>4. Acceptable Website Use</h2>
<p>When accessing AIPromptZyra, you agree to use the site responsibly and lawfully. Specifically, you agree NOT to:</p>
<ul>
    <li>Engage in automated scraping, data mining, or bot crawling that overburdens our server capacity or interferes with site availability</li>
    <li>Attempt to bypass security measures, probe vulnerabilities, or gain unauthorized access to our administrative dashboard or hosting servers</li>
    <li>Transmit any viruses, worms, malware, or other malicious computer code</li>
    <li>Use the website or its published prompts for unlawful, defamatory, fraudulent, or harassing purposes</li>
    <li>Falsely claim an official business affiliation, sponsorship, or endorsement with AIPromptZyra or Zyra Ansari</li>
</ul>

<h2>5. Third-Party AI Services &amp; Platform Independence</h2>
<p>AIPromptZyra publishes prompts intended to be executed on external artificial intelligence platforms, including Google Gemini, OpenAI ChatGPT, Midjourney, and Microsoft Copilot. You acknowledge and agree that:</p>
<ul>
    <li>These platforms are operated independently by third-party corporations under their own terms of service, subscription costs, and acceptable use policies.</li>
    <li>AIPromptZyra has no control over third-party pricing, platform feature removals, model deprecations, or account suspensions.</li>
    <li>You are solely responsible for ensuring that the images you generate comply with the specific AI platform’s content policy and all applicable laws regarding defamation, copyright, and publicity rights.</li>
</ul>

<h2>6. Website Availability &amp; Modifications</h2>
<p>AIPromptZyra is provided on an "as-is" and "as-available" basis. While we strive to maintain uninterrupted access and high performance, we do not guarantee that the site will always be available, bug-free, or error-free. We reserve the right to modify, update, pause, or discontinue any prompt, article, feature, or section of the website at any time without prior notice.</p>

<h2>7. Disclaimer of Warranties &amp; Limitation of Liability</h2>
<p>AIPromptZyra makes no warranties, express or implied, regarding the completeness, accuracy, reliability, or suitability of the information and prompts provided. To the fullest extent permitted by applicable law, AIPromptZyra and its editor, Zyra Ansari, shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages—including but not limited to loss of profits, data loss, or unsatisfactory generative AI results—arising from your use of or inability to use this website.</p>

<h2>8. Indemnification</h2>
<p>You agree to defend, indemnify, and hold harmless AIPromptZyra and its editor, Zyra Ansari, from and against any claims, liabilities, damages, judgments, awards, losses, costs, or expenses (including reasonable legal fees) arising out of or relating to your violation of these Terms and Conditions or your misuse of prompts in violation of third-party platform rules or applicable laws.</p>

<h2>9. Governing Principles &amp; Severability</h2>
<p>These Terms shall be interpreted and enforced in accordance with general principles of applicable law. If any provision of these Terms is held to be invalid or unenforceable by a court of competent jurisdiction, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall remain in full force and effect.</p>

<h2>10. Updates to These Terms</h2>
<p>We reserve the right to revise or update these Terms and Conditions at our sole discretion. Any changes will become effective immediately upon posting to this page, with an updated "Effective Date" indicated at the top. Your continued use of AIPromptZyra following the posting of changes constitutes your acceptance of the updated Terms.</p>

<h2>11. Contact Information</h2>
<p>If you have any questions, clarifications, or feedback regarding these Terms and Conditions, please contact us:</p>
<ul>
    <li><strong>Website:</strong> <a href="https://aipromptzyra.com/">https://aipromptzyra.com/</a></li>
    <li><strong>Editor &amp; Owner:</strong> Zyra Ansari</li>
    <li><strong>Official Email:</strong> <a href="mailto:contact@aipromptzyra.com">contact@aipromptzyra.com</a></li>
    <li><strong>Contact Page:</strong> <a href="/contact/">https://aipromptzyra.com/contact/</a></li>
</ul>

<div class="page-nav-bar">
    <div>
        <strong>Related Editorial Pages:</strong>
        <span style="margin: 0 8px;">•</span>
        <a href="/contact/">Contact Us</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/privacy-policy/">Privacy Policy</a>
        <span style="margin: 0 8px;">•</span>
        <a href="/disclaimer/">Disclaimer</a>
    </div>
    <div>
        <span>AIPromptZyra • Published by Zyra Ansari</span>
    </div>
</div>
"""
    }
}

# 3. Execute updates via WordPress REST API
print("Updating all 4 WordPress pages via REST API...")
for post_id, page_data in PAGES.items():
    print(f"\nProcessing Post {post_id} ({page_data['title']} - /{page_data['slug']}/)...")
    payload = json.dumps({
        "title": page_data["title"],
        "excerpt": page_data["excerpt"],
        "content": page_data["content"].strip(),
        "status": "publish"
    })
    
    cmd = [
        'curl', '-s', '-b', 'cookies.txt',
        '-H', 'Content-Type: application/json',
        '-H', f'X-WP-Nonce: {nonce}',
        '-X', 'POST',
        f'https://aipromptzyra.com/wp-json/wp/v2/pages/{post_id}',
        '-d', payload
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    try:
        resp_json = json.loads(res.stdout)
        if "id" in resp_json:
            print(f"SUCCESS: Post {post_id} updated successfully!")
            print(f"  Title: {resp_json.get('title', {}).get('rendered')}")
            print(f"  Link: {resp_json.get('link')}")
            print(f"  Status: {resp_json.get('status')}")
            print(f"  Modified: {resp_json.get('modified')}")
        else:
            print(f"FAILED for Post {post_id}:", res.stdout[:300])
    except Exception as e:
        print(f"JSON Error for Post {post_id}: {e}")
        print(res.stdout[:300])

print("\nAll 4 pages update process complete.")
