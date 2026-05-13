// ── Checklist categories ────────────────────────────────────────────────────
export const CHECKLIST_CATEGORIES = {
  seo:            { icon: '🔍', label: 'SEO & Metadata', priority: 'high' },
  technical:      { icon: '⚙️', label: 'Technical Setup', priority: 'high' },
  analytics:      { icon: '📊', label: 'Analytics & Tracking', priority: 'medium' },
  legal:          { icon: '⚖️', label: 'Legal & Compliance', priority: 'medium' },
  performance:    { icon: '⚡', label: 'Performance', priority: 'high' },
  security:       { icon: '🛡️', label: 'Security', priority: 'high' },
  accessibility:  { icon: '♿', label: 'Accessibility', priority: 'high' },
  social:         { icon: '📣', label: 'Social Media', priority: 'low' },
  ux:             { icon: '🎨', label: 'UX & Design', priority: 'high' },
  conversion:     { icon: '📈', label: 'Conversion Optimization', priority: 'high' },
  i18n:           { icon: '🌐', label: 'Internationalization', priority: 'medium' },
  // Phase 4 categories
  content:        { icon: '📝', label: 'Content & Copy', priority: 'high' },
  devops:         { icon: '🔧', label: 'DevOps & Deployment', priority: 'high' },
  testing:        { icon: '🧪', label: 'Testing', priority: 'high' },
  email:          { icon: '📧', label: 'Email & Notifications', priority: 'medium' },
};

// ── Checklist items ─────────────────────────────────────────────────────────
export const CHECKLIST_ITEMS = [
  // ── SEO & Metadata ──
  { id: 'title', category: 'seo', label: 'Page title (<title> tag)', desc: 'Unique, descriptive title under 60 characters', tip: 'Add <title>Your Brand: Short Value Prop</title> in <head>. Keep under 60 chars to avoid truncation in search results.' },
  { id: 'meta-desc', category: 'seo', label: 'Meta description', desc: 'Compelling summary under 160 characters', tip: 'Add <meta name="description" content="..."> in <head>. Write 150-160 chars. This appears in search results under your title.' },
  { id: 'og-title', category: 'seo', label: 'Open Graph title', desc: 'Title shown when shared on social media', tip: 'Add <meta property="og:title" content="Your Title">. Can be same as page title or slightly different for social context.' },
  { id: 'og-desc', category: 'seo', label: 'Open Graph description', desc: 'Description for social media previews', tip: 'Add <meta property="og:description" content="...">. Can be same as meta description or tailored for social sharing.' },
  { id: 'og-image', category: 'seo', label: 'Open Graph image (OG preview)', desc: '1200x630px image for social media cards', tip: 'Add <meta property="og:image" content="https://yoursite.com/og-preview.jpg">. Use 1200x630px PNG or JPG, under 1MB. This is what shows when you share on Facebook, LinkedIn, Slack.' },
  { id: 'og-url', category: 'seo', label: 'Open Graph URL', desc: 'Canonical URL for social sharing', tip: 'Add <meta property="og:url" content="https://yoursite.com/">. Use the full, canonical URL of the page.' },
  { id: 'twitter-card', category: 'seo', label: 'Twitter card meta tags', desc: 'Twitter-specific preview tags', tip: 'Add <meta name="twitter:card" content="summary_large_image">, twitter:title, twitter:description, twitter:image. Enables rich previews on Twitter/X.' },
  { id: 'canonical', category: 'seo', label: 'Canonical URL', desc: 'Link rel="canonical" to avoid duplicate content', tip: 'Add <link rel="canonical" href="https://yoursite.com/"> to tell search engines this is the main version of the page.' },
  { id: 'structured-data', category: 'seo', label: 'Structured data (JSON-LD)', desc: 'Schema.org markup for rich snippets', tip: 'Add <script type="application/ld+json"> with schema.org markup (e.g., WebSite, Organization, Article). Helps Google show rich results.' },
  { id: 'meta-robots', category: 'seo', label: 'Meta robots tag', desc: 'Control indexing and following links', tip: 'Add <meta name="robots" content="index, follow"> to allow search engines to index your page. Use "noindex, nofollow" for private pages.' },
  // SEO Phase 4
  { id: 'sitemap-auto-gen', category: 'seo', label: 'Auto-generated sitemap', desc: 'Sitemap updates automatically when pages change', tip: 'Use a build step or CMS plugin to regenerate sitemap.xml on deploy. Include lastmod dates and priority values for each URL.' },
  { id: 'hreflang-i18n', category: 'seo', label: 'Hreflang tags for i18n', desc: 'Tell search engines about language/region variants', tip: 'Add <link rel="alternate" hreflang="es" href="https://yoursite.com/es/"> for each language. Include x-default for the fallback version.' },
  { id: 'breadcrumb-schema', category: 'seo', label: 'Breadcrumb structured data', desc: 'Schema.org BreadcrumbList for search results', tip: 'Add JSON-LD BreadcrumbList markup. Google shows breadcrumb trails in search results instead of raw URLs, improving click-through rates.' },

  // ── Technical Setup ──
  { id: 'favicon', category: 'technical', label: 'Favicon', desc: '32x32px icon shown in browser tabs', tip: 'Add <link rel="icon" type="image/x-icon" href="favicon.ico"> or use PNG. Also add apple-touch-icon (180x180px) for iOS home screen.' },
  { id: 'robots-txt', category: 'technical', label: 'robots.txt', desc: 'Instructions for search engine crawlers', tip: 'Create /robots.txt file. Use "User-agent: *\\nAllow: /" to allow all crawlers. Add "Sitemap: https://yoursite.com/sitemap.xml" at the bottom.' },
  { id: 'sitemap', category: 'technical', label: 'sitemap.xml', desc: 'XML file listing all pages for search engines', tip: 'Create /sitemap.xml with all pages. Submit to Google Search Console. Update whenever you add/remove pages.' },
  { id: 'ssl', category: 'technical', label: 'SSL certificate (HTTPS)', desc: 'Secure connection with TLS/SSL', tip: "Enable HTTPS on your domain. Most hosting providers offer free SSL via Let's Encrypt. Redirect all HTTP to HTTPS." },
  { id: 'custom-domain', category: 'technical', label: 'Custom domain', desc: 'yoursite.com instead of subdomain.platform.com', tip: 'Register a domain and point it to your hosting. Add CNAME file if using GitHub Pages, or update DNS A/CNAME records for other hosts.' },
  { id: '404-page', category: 'technical', label: 'Custom 404 page', desc: 'Friendly error page for broken links', tip: 'Create /404.html with helpful message, search box, and links to main pages. GitHub Pages auto-serves 404.html for missing pages.' },
  { id: 'responsive', category: 'technical', label: 'Responsive design', desc: 'Works on mobile, tablet, and desktop', tip: 'Add <meta name="viewport" content="width=device-width, initial-scale=1.0">. Use CSS media queries and test on mobile (375px), tablet (768px), desktop (1440px).' },
  { id: 'crossbrowser', category: 'technical', label: 'Cross-browser testing', desc: 'Test in Chrome, Firefox, Safari, Edge', tip: 'Check your site in Chrome, Firefox, Safari, Edge. Use BrowserStack or real devices. Verify ES6 module support for modern JS.' },

  // ── Analytics & Tracking ──
  { id: 'analytics', category: 'analytics', label: 'Analytics platform', desc: 'Google Analytics, Plausible, or similar', tip: 'Add Google Analytics 4 (GA4) script to <head>, or use privacy-friendly alternatives like Plausible, Fathom, or Simple Analytics. Track page views and conversions.' },
  { id: 'search-console', category: 'analytics', label: 'Google Search Console', desc: 'Monitor search performance and indexing', tip: 'Sign up at search.google.com/search-console. Verify ownership via HTML tag or DNS. Submit sitemap. Monitor indexing issues and search queries.' },
  { id: 'conversion-tracking', category: 'analytics', label: 'Conversion tracking', desc: 'Track goals, sign-ups, purchases', tip: 'Set up goals in GA4 or your analytics tool. Track button clicks, form submissions, and key user actions. Use event tracking.' },

  // ── Legal & Compliance ──
  { id: 'privacy-policy', category: 'legal', label: 'Privacy Policy', desc: 'How you collect, use, and protect user data', tip: 'Create /privacy.html explaining data collection, cookies, analytics. Link in footer. Required if you collect any user data or use analytics.' },
  { id: 'terms', category: 'legal', label: 'Terms of Service', desc: 'Rules for using your website', tip: 'Create /terms.html with terms and conditions. Link in footer. Especially important for SaaS, marketplaces, or user-generated content sites.' },
  { id: 'cookie-banner', category: 'legal', label: 'Cookie consent banner', desc: 'GDPR/CCPA compliant cookie notice', tip: 'If targeting EU/California users, add cookie banner before setting any cookies. Use tools like CookieYes, OneTrust, or custom solution. Must allow opt-out.' },
  { id: 'gdpr', category: 'legal', label: 'GDPR compliance', desc: 'EU data protection requirements', tip: 'If you have EU visitors: get consent before analytics/cookies, provide data export/deletion, have clear privacy policy, use secure data handling.' },

  // ── Performance ──
  { id: 'image-optimization', category: 'performance', label: 'Image optimization', desc: 'Compress and format images efficiently', tip: 'Use WebP format for photos. Compress with ImageOptim or Squoosh. Keep images under 200KB. Use width/height attributes to prevent layout shift.' },
  { id: 'lazy-loading', category: 'performance', label: 'Lazy loading', desc: 'Load images only when needed', tip: 'Add loading="lazy" to <img> tags below the fold. Browsers will defer loading until user scrolls near them. Saves bandwidth and speeds up initial load.' },
  { id: 'minify', category: 'performance', label: 'Minify CSS/JS', desc: 'Remove whitespace and comments', tip: 'Use build tools (Vite, esbuild, Webpack) or online tools to minify CSS/JS. Reduces file size by 30-40%. For production only.' },
  { id: 'lighthouse', category: 'performance', label: 'Lighthouse score', desc: 'Audit performance, accessibility, SEO', tip: 'Run Lighthouse in Chrome DevTools (Cmd+Option+I > Lighthouse tab). Aim for 90+ in all categories. Fix issues it reports.' },
  { id: 'font-loading', category: 'performance', label: 'Font optimization', desc: 'Avoid FOUT/FOIT, use font-display', tip: 'Use font-display: swap in @font-face or Google Fonts URL (&display=swap). Preload critical fonts with <link rel="preload">. Subset fonts to needed characters only.' },
  // Performance Phase 4
  { id: 'critical-css', category: 'performance', label: 'Critical CSS inlining', desc: 'Inline above-the-fold styles for faster first paint', tip: 'Extract critical CSS with tools like critical or critters. Inline it in <style> in <head>, defer the rest. Reduces render-blocking resources.' },
  { id: 'http2-enabled', category: 'performance', label: 'HTTP/2 enabled', desc: 'Multiplexed connections for faster asset loading', tip: 'Ensure your server or CDN uses HTTP/2 (or HTTP/3). Enables multiplexing, header compression, and server push. Most modern hosts support it by default.' },
  { id: 'brotli-compression', category: 'performance', label: 'Brotli compression', desc: 'Better compression than gzip for text assets', tip: 'Enable Brotli (br) compression on your server or CDN. 15-25% smaller than gzip for HTML/CSS/JS. Falls back to gzip for older clients.' },
  { id: 'core-web-vitals', category: 'performance', label: 'Core Web Vitals passing', desc: 'LCP, FID/INP, CLS within Google thresholds', tip: 'LCP < 2.5s, INP < 200ms, CLS < 0.1. Monitor with PageSpeed Insights or web-vitals JS library. These directly affect Google search ranking.' },
  { id: 'bundle-size-budget', category: 'performance', label: 'Bundle size budget', desc: 'Set and enforce max JS/CSS bundle sizes', tip: 'Set a budget (e.g., 200KB JS gzipped). Use bundlephobia.com to check package sizes before adding. Add size-limit or bundlesize CI check to prevent regressions.' },

  // ── Security ──
  { id: 'https-redirect', category: 'security', label: 'HTTPS redirect', desc: 'Force all traffic to secure connection', tip: 'Configure server to redirect HTTP to HTTPS. For static sites, most hosts do this automatically. For custom servers, use 301 redirects.' },
  { id: 'csp', category: 'security', label: 'Content Security Policy', desc: 'HTTP header preventing XSS attacks', tip: "Add Content-Security-Policy header. Start with \"default-src 'self'; script-src 'self' 'unsafe-inline'\". Adjust based on your external resources." },
  { id: 'cors', category: 'security', label: 'CORS configuration', desc: 'Control which domains can access your API', tip: 'If you have an API, set Access-Control-Allow-Origin header. Use specific domains, not "*" in production. For static sites, usually not needed.' },
  { id: 'security-headers', category: 'security', label: 'Security headers', desc: 'X-Frame-Options, X-Content-Type-Options, etc.', tip: 'Add headers: X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Referrer-Policy: no-referrer-when-downgrade. Use securityheaders.com to check.' },
  // Security Phase 4
  { id: 'rate-limiting', category: 'security', label: 'Rate limiting', desc: 'Throttle API requests to prevent abuse', tip: 'Limit login attempts to 5/min, API calls to 100/min per IP. Return 429 Too Many Requests with Retry-After header. Use sliding window algorithm.' },
  { id: 'input-sanitization', category: 'security', label: 'Input sanitization', desc: 'Sanitize all user input server-side', tip: 'Never trust client input. Sanitize HTML (DOMPurify), validate emails, escape SQL parameters. Use parameterized queries, never string concatenation.' },
  { id: 'dependency-audit', category: 'security', label: 'Dependency audit', desc: 'Check npm/pip packages for known vulnerabilities', tip: 'Run npm audit or pip-audit regularly. Add Dependabot or Snyk to CI. Update vulnerable packages promptly. Pin exact versions in production.' },
  { id: 'subresource-integrity', category: 'security', label: 'Subresource Integrity (SRI)', desc: 'Verify integrity of CDN-loaded scripts', tip: 'Add integrity="sha384-..." and crossorigin="anonymous" to CDN <script> and <link> tags. Prevents tampered CDN files from executing.' },

  // ── Accessibility ──
  { id: 'alt-text', category: 'accessibility', label: 'Alt text for images', desc: 'Descriptive text for screen readers', tip: 'Add alt="description" to every <img>. Describe what\'s in the image. Use alt="" for decorative images. Never skip the alt attribute.' },
  { id: 'aria-labels', category: 'accessibility', label: 'ARIA labels', desc: 'Accessibility labels for interactive elements', tip: 'Add aria-label to icon buttons, role="navigation" to navs, aria-hidden="true" to decorative icons. Use semantic HTML first, ARIA second.' },
  { id: 'keyboard-nav', category: 'accessibility', label: 'Keyboard navigation', desc: 'Tab, Enter, Space work on all interactive elements', tip: 'Test your site with Tab (focus), Enter (click buttons/links), Space (checkboxes). Ensure visible focus indicators. Use tabindex="-1" to remove from tab order.' },
  { id: 'color-contrast', category: 'accessibility', label: 'Color contrast', desc: 'WCAG AA minimum 4.5:1 for text', tip: 'Check contrast at webaim.org/resources/contrastchecker. Text should be 4.5:1 ratio (7:1 for AAA). Large text (18px+) can be 3:1.' },
  { id: 'skip-link', category: 'accessibility', label: 'Skip to content link', desc: 'Hidden link for keyboard users to skip navigation', tip: 'Add <a href="#main" class="skip-link">Skip to content</a> at top of <body>. Hide off-screen, show on focus. Helps keyboard users skip repetitive nav.' },
  // Accessibility Phase 4
  { id: 'screen-reader-testing', category: 'accessibility', label: 'Screen reader testing', desc: 'Test with VoiceOver, NVDA, or JAWS', tip: 'Test key flows with VoiceOver (Mac: Cmd+F5) or NVDA (Windows, free). Verify all content is announced, forms are labeled, and navigation makes sense without vision.' },
  { id: 'focus-traps-modals', category: 'accessibility', label: 'Focus traps in modals', desc: 'Tab key stays within open modal dialogs', tip: 'When a modal opens, trap focus inside it. Tab from last element wraps to first. Escape closes modal. Return focus to trigger element on close.' },
  { id: 'prefers-reduced-motion', category: 'accessibility', label: 'Reduced motion support', desc: 'Respect prefers-reduced-motion media query', tip: 'Wrap animations in @media (prefers-reduced-motion: no-preference). Users with vestibular disorders need this. Disable parallax, auto-play video, and complex transitions.' },
  { id: 'heading-hierarchy', category: 'accessibility', label: 'Heading hierarchy', desc: 'Proper H1 > H2 > H3 nesting without gaps', tip: 'One H1 per page. H2 for sections, H3 for subsections. Never skip levels (H1 to H3). Use CSS for visual sizing, headings for document structure.' },

  // ── Social Media ──
  { id: 'social-preview-test', category: 'social', label: 'Test social previews', desc: 'Verify OG image and meta tags render correctly', tip: 'Test at: facebook.com/sharing/debugger (Facebook/LinkedIn), cards-dev.twitter.com/validator (Twitter), opengraph.xyz (generic). Fix any warnings.' },
  { id: 'social-icons', category: 'social', label: 'Social media links', desc: "Links to your brand's social profiles", tip: 'Add icon links in footer or header to your social profiles. Use rel="noopener noreferrer" and target="_blank". Include aria-label for accessibility.' },
  { id: 'share-buttons', category: 'social', label: 'Share buttons (optional)', desc: 'Let users share your content', tip: 'Add "Share on Twitter", "Share on LinkedIn" buttons to blog posts/articles. Use native share URLs or Web Share API for mobile.' },

  // ── UX & Design ──
  { id: 'ux-mobile-first', category: 'ux', label: 'Mobile-first design', desc: 'Primary experience designed for mobile devices', tip: 'Start design at 375px mobile width, then scale up. Use touch-friendly targets (44x44px min). Test all interactions on real mobile devices, not just browser emulator.' },
  { id: 'ux-consistent-nav', category: 'ux', label: 'Consistent navigation', desc: 'Same navigation pattern across all pages', tip: 'Keep navbar in same position, same links, same order on every page. Users should never get lost or need to re-learn navigation patterns.' },
  { id: 'ux-loading-states', category: 'ux', label: 'Loading states', desc: 'Visual feedback during async operations', tip: 'Show skeleton screens or spinners for any operation >300ms. Never leave users wondering if their action worked or if the site is broken.' },
  { id: 'ux-error-messages', category: 'ux', label: 'Clear error messages', desc: 'User-friendly error descriptions with solutions', tip: 'Instead of "Error 500", show "We couldn\'t process your payment. Please check your card details or try another card." Always suggest a fix.' },
  { id: 'ux-empty-states', category: 'ux', label: 'Helpful empty states', desc: 'Guidance when no content exists yet', tip: 'Show "You have no projects yet" + "Create your first project" button instead of blank page. Include illustration and clear next step.' },
  { id: 'ux-breadcrumbs', category: 'ux', label: 'Breadcrumbs (deep sites)', desc: 'Show current location in site hierarchy', tip: 'Add breadcrumbs for sites with >2 levels of navigation. Format: Home > Category > Subcategory > Current Page. Each ancestor should be clickable.' },
  { id: 'ux-progress-indicators', category: 'ux', label: 'Progress indicators', desc: 'Show completion status for multi-step flows', tip: 'For forms, checkout, or onboarding with >3 steps, show "Step 3 of 5" with visual progress bar. Let users go back to previous steps.' },
  { id: 'ux-favicons', category: 'ux', label: 'Favicon variations', desc: 'Multiple favicon sizes and formats', tip: 'Generate favicon.ico (32x32), apple-touch-icon.png (180x180), icon-192.png, icon-512.png for PWA. Use realfavicongenerator.net for all formats at once.' },
  { id: 'ux-dark-mode', category: 'ux', label: 'Dark mode support', desc: "Respect user's system dark mode preference", tip: 'Use @media (prefers-color-scheme: dark) to automatically show dark theme. Test charts, images, and logos still work in dark mode.' },

  // ── Conversion Optimization ──
  { id: 'conv-cta-above-fold', category: 'conversion', label: 'Primary CTA above fold', desc: 'Main action visible without scrolling', tip: 'Hero CTA should be visible on 1024x768 screen. Use heatmaps (Hotjar) to verify users see it. For long pages, repeat CTA at bottom too.' },
  { id: 'conv-cta-contrast', category: 'conversion', label: 'CTA button contrast', desc: 'Primary button stands out from page', tip: 'CTA should be highest contrast element on page. Use brand accent color, sufficient size (44-48px), and action-oriented text ("Start free trial" not "Submit").' },
  { id: 'conv-social-proof', category: 'conversion', label: 'Social proof elements', desc: 'Trust signals like testimonials, reviews, counts', tip: 'Add "Trusted by 10,000+ companies" or customer logos near CTA. Specific numbers work better: "Rated 4.8/5 by 2,345 users" vs "Excellent reviews".' },
  { id: 'conv-urgency-scarcity', category: 'conversion', label: 'Urgency/scarcity (ethical)', desc: 'Time-limited offers or limited availability', tip: '"50% off this weekend only" or "Only 3 spots left". Use real constraints only - fake urgency damages trust.' },
  { id: 'conv-checkout-flow', category: 'conversion', label: 'Streamlined checkout', desc: 'Minimal steps to complete purchase', tip: 'Ecommerce: Reduce checkout to <5 steps. Offer guest checkout. Show progress indicator. Save cart across sessions. AB test one-page vs multi-step.' },
  { id: 'conv-abandoned-cart', category: 'conversion', label: 'Abandoned cart recovery', desc: 'Email sequence for incomplete purchases', tip: 'Send 1st email 1hr after abandonment: "Forget something?". 2nd email 24hrs with small discount. 3rd email 72hrs with social proof. 15-25% recovery rate.' },
  { id: 'conv-product-images', category: 'conversion', label: 'High-quality product images', desc: 'Multiple angles, zoom, lifestyle shots', tip: 'Ecommerce: 5-7 images per product. Include 360 view, zoom, lifestyle photos, size comparison, and video. 94% more views than text-only.' },
  { id: 'conv-live-chat', category: 'conversion', label: 'Live chat support', desc: 'Real-time customer assistance', tip: 'Add live chat widget for sales/support. 44% increase in conversion with live chat. Use chatbots for after-hours, escalate to humans for complex issues.' },
  { id: 'conv-gamification', category: 'conversion', label: 'Gamification elements', desc: 'Points, badges, progress for engagement', tip: 'Gaming/SaaS: Daily login bonuses, achievement badges, progress bars, leaderboards. Increase retention 30-40%. Keep rewards meaningful.' },
  { id: 'conv-personalization', category: 'conversion', label: 'Personalized recommendations', desc: 'AI-driven product/content suggestions', tip: 'Ecommerce: "Recommended for you" based on browse/purchase history. SaaS: Personalized dashboard content. Email: Dynamic content based on user data.' },

  // ── Internationalization ──
  { id: 'i18n-language-switcher', category: 'i18n', label: 'Language selector', desc: 'Easy way to change site language', tip: 'Put language switcher in header (globe icon + "English"). Auto-detect browser language on first visit. Remember user preference in localStorage.' },
  { id: 'i18n-date-format', category: 'i18n', label: 'Localized date formats', desc: 'DD/MM/YYYY vs MM/DD/YYYY vs YYYY-MM-DD', tip: 'Use Intl.DateTimeFormat().format(new Date()) for locale-aware dates. UK: 14/03/2026, US: 03/14/2026, Japan: 2026/03/14.' },
  { id: 'i18n-number-format', category: 'i18n', label: 'Localized number/currency', desc: '1,000.00 vs 1.000,00 format', tip: 'Use Intl.NumberFormat(). Price: $1,999.99 (US) vs 1.999,99 (Germany). Auto-format based on selected locale.' },
  { id: 'i18n-timezone', category: 'i18n', label: 'Timezone handling', desc: "Display times in user's local timezone", tip: 'Store timestamps in UTC, convert to local timezone on display. Show relative times: "2 hours ago" works globally.' },
  { id: 'i18n-rtl-support', category: 'i18n', label: 'RTL language support', desc: 'Right-to-left layout for Arabic/Hebrew', tip: 'Add dir="rtl" to <html> tag for RTL languages. Mirror layouts: nav on right, text align right, flip directional icons.' },
  { id: 'i18n-currency-switcher', category: 'i18n', label: 'Currency converter', desc: 'Display prices in local currency', tip: 'Ecommerce: Auto-detect location and show prices in local currency. Use current exchange rates. Include "Prices in USD" disclaimer if needed.' },
  { id: 'i18n-translation-quality', category: 'i18n', label: 'Professional translation', desc: 'Human translation, not machine-only', tip: 'Use professional translators for customer-facing content. Machine translate (DeepL) first, then human review. Include locale-specific idioms and cultural references.' },
  { id: 'i18n-local-payment', category: 'i18n', label: 'Local payment methods', desc: 'Accept region-specific payment types', tip: 'Europe: SOFORT, iDEAL. China: Alipay, WeChat Pay. Brazil: Boleto. India: UPI. Increase conversion 20-30% by offering local methods.' },
  { id: 'i18n-vat-taxes', category: 'i18n', label: 'VAT/sales tax calculation', desc: 'Automatic tax calculation by region', tip: 'Ecommerce: Use TaxJar or Avalara API for automatic tax calculation. Show "Includes VAT" or "+tax" clearly at checkout.' },

  // ── Content & Copy (Phase 4) ──
  { id: 'content-spell-check', category: 'content', label: 'Spell-check all pages', desc: 'Run spell-checker on every visible page', tip: 'Use browser spell-check, Grammarly, or LanguageTool. Check headings, buttons, footers, error messages, and meta descriptions. Typos destroy credibility.' },
  { id: 'content-placeholder-text-removed', category: 'content', label: 'Placeholder text removed', desc: 'No lorem ipsum or TODO text in production', tip: 'Search the entire codebase for "lorem", "ipsum", "TODO", "FIXME", "placeholder", "TBD". Replace all with real copy before launch.' },
  { id: 'content-contact-info-verified', category: 'content', label: 'Contact info verified', desc: 'Phone, email, address are correct and tested', tip: 'Send a test email to every listed address. Call every phone number. Verify physical addresses on Google Maps. Test contact form submissions.' },
  { id: 'content-broken-links-scanned', category: 'content', label: 'Broken links scanned', desc: 'All internal and external links resolve', tip: 'Use W3C Link Checker, Screaming Frog, or broken-link-checker npm package. Fix or remove 404 links. Set up periodic automated scans.' },
  { id: 'content-dates-updated', category: 'content', label: 'Dates and years updated', desc: 'Copyright year and dated content are current', tip: 'Search for previous year (e.g., "2025") in footer copyright, blog posts, case studies. Update or use dynamic year: new Date().getFullYear().' },
  { id: 'content-cta-copy-reviewed', category: 'content', label: 'CTA copy reviewed', desc: 'Action-oriented, specific button labels', tip: 'Replace generic "Submit", "Click here" with specific actions: "Create free account", "Download PDF", "Start 14-day trial". Test A/B variants.' },
  { id: 'content-404-page-copy', category: 'content', label: '404 page copy is helpful', desc: 'Error page has friendly, useful messaging', tip: 'Avoid "Page not found." Instead: "This page moved or no longer exists. Try searching or go to the homepage." Include search bar and popular links.' },

  // ── DevOps & Deployment (Phase 4) ──
  { id: 'devops-ci-cd-pipeline', category: 'devops', label: 'CI/CD pipeline', desc: 'Automated build, test, deploy on push', tip: 'Set up GitHub Actions, GitLab CI, or CircleCI. Pipeline: lint > test > build > deploy. Block merges on failure. Deploy to staging first, then production.' },
  { id: 'devops-staging-environment', category: 'devops', label: 'Staging environment', desc: 'Production mirror for pre-release testing', tip: 'Mirror production with same infrastructure and data (anonymized). Deploy to staging before production. Test with real workflows. Share staging URL for QA review.' },
  { id: 'devops-rollback-strategy', category: 'devops', label: 'Rollback strategy', desc: 'Quick revert to previous version on failure', tip: 'Keep previous 3 deployments ready for instant rollback. Use blue-green or canary deployments. Test rollback procedure quarterly. Document steps for on-call engineers.' },
  { id: 'devops-env-vars-secure', category: 'devops', label: 'Environment variables secured', desc: 'No secrets in code or version control', tip: 'Use .env files (gitignored), CI/CD secrets, or vault services (AWS Secrets Manager, HashiCorp Vault). Never commit API keys, passwords, or tokens to git.' },
  { id: 'devops-db-backups', category: 'devops', label: 'Database backups automated', desc: 'Daily backups with tested restoration', tip: 'Automate daily DB backups (pg_dump, mongodump). Store off-site (S3, GCS). Test restoration monthly. Keep 30-day retention. Document recovery time objective (RTO).' },
  { id: 'devops-monitoring-alerting', category: 'devops', label: 'Monitoring and alerting', desc: 'Uptime monitoring with incident alerts', tip: 'Use UptimeRobot, Pingdom, or Better Uptime for availability. Set up alerts for downtime, high error rates, slow response times. PagerDuty or Slack for on-call.' },
  { id: 'devops-cdn-setup', category: 'devops', label: 'CDN configured', desc: 'Content delivery network for global performance', tip: 'Use Cloudflare, AWS CloudFront, or Fastly. Cache static assets globally. Reduces latency for international users by 40-60%. Configure cache invalidation for deploys.' },

  // ── Testing (Phase 4) ──
  { id: 'testing-unit-tests-critical', category: 'testing', label: 'Unit tests for critical paths', desc: 'Core business logic has automated tests', tip: 'Cover authentication, payment processing, data validation, and calculations. Aim for 80%+ coverage on critical modules. Use Jest, Vitest, or pytest.' },
  { id: 'testing-e2e-smoke-tests', category: 'testing', label: 'E2E smoke tests', desc: 'Automated browser tests for key user flows', tip: 'Test signup, login, checkout, and main feature flows. Use Playwright or Cypress. Run in CI on every PR. Keep smoke suite under 5 minutes.' },
  { id: 'testing-form-validation-tests', category: 'testing', label: 'Form validation tested', desc: 'All forms handle edge cases gracefully', tip: 'Test empty fields, max length, special characters, SQL injection strings, XSS payloads, unicode, and email format. Verify server-side validation matches client-side.' },
  { id: 'testing-mobile-device-testing', category: 'testing', label: 'Real mobile device testing', desc: 'Tested on actual phones, not just emulators', tip: 'Test on at least: iPhone (Safari), Android (Chrome), tablet. Check touch interactions, viewport behavior, and keyboard overlays. BrowserStack for remote device testing.' },
  { id: 'testing-load-testing', category: 'testing', label: 'Load testing', desc: 'Verify site handles expected traffic', tip: 'Use k6, Artillery, or Apache Bench. Simulate 2-5x expected peak traffic. Identify bottlenecks (DB queries, API limits, memory). Document max concurrent users.' },
  { id: 'testing-visual-regression', category: 'testing', label: 'Visual regression tests', desc: 'Detect unintended UI changes automatically', tip: 'Use Percy, Chromatic, or Playwright screenshots. Capture baseline images, compare on PRs. Catches CSS regressions, layout shifts, and missing elements.' },
  { id: 'testing-api-contract-tests', category: 'testing', label: 'API contract tests', desc: 'Verify API responses match expected schema', tip: 'Use Pact, Dredd, or custom schema validation. Test all endpoints return correct status codes, response shapes, and error formats. Run in CI.' },

  // ── Email & Notifications (Phase 4) ──
  { id: 'email-transactional-templates', category: 'email', label: 'Transactional email templates', desc: 'Branded, responsive email designs', tip: 'Use MJML or Foundation for Emails for responsive templates. Include logo, brand colors, unsubscribe link. Test in Gmail, Outlook, Apple Mail. Keep under 100KB.' },
  { id: 'email-custom-domain-sender', category: 'email', label: 'Custom domain sender', desc: 'Send from @yourcompany.com not @sendgrid.net', tip: 'Configure custom sending domain in SendGrid, Postmark, or SES. Improves deliverability and brand trust. Verify domain with DNS records.' },
  { id: 'email-spf-dkim-dmarc', category: 'email', label: 'SPF, DKIM, DMARC records', desc: 'Email authentication DNS records configured', tip: 'Add SPF (TXT record listing authorized senders), DKIM (cryptographic signature), and DMARC (policy for failures) to DNS. Prevents spoofing and improves inbox delivery.' },
  { id: 'email-unsubscribe-links', category: 'email', label: 'Unsubscribe links', desc: 'One-click unsubscribe in all marketing emails', tip: 'CAN-SPAM and GDPR require easy unsubscribe. Add List-Unsubscribe header and visible link in footer. Process immediately, no login required.' },
  { id: 'email-welcome-email-flow', category: 'email', label: 'Welcome email flow', desc: 'Automated onboarding email sequence', tip: 'Email 1 (immediate): Welcome + quick start guide. Email 2 (day 2): Key feature highlight. Email 3 (day 5): Success story + support. Track open rates and optimize.' },
  { id: 'email-password-reset-flow', category: 'email', label: 'Password reset flow', desc: 'Secure, user-friendly password recovery', tip: 'Expiring token link (1hr max). Clear instructions. Same response for existing/non-existing emails (security). Rate limit requests. Confirm reset with notification email.' },
  { id: 'email-deliverability', category: 'email', label: 'Email deliverability tested', desc: 'Emails reach inbox, not spam folder', tip: 'Use mail-tester.com to score your emails. Check SPF/DKIM/DMARC alignment. Warm up new sending domains gradually. Monitor bounce rates (keep under 2%).' },
];

// ── Mistakes data ───────────────────────────────────────────────────────────
export const MISTAKES_DATA = {
  design: [
    {
      id: 'carousel',
      title: 'Automatic Carousels',
      severity: 'medium',
      before: 'Hero section with auto-rotating slides every 5 seconds',
      after: 'Static hero with manual slide navigation dots',
      explanation: 'Auto-rotating carousels reduce conversions by 20-30%. Users want control over what they view.',
      fix: 'Use static hero image or manual carousel with user-controlled navigation.',
      frameworks: { 'React': 'Swiper.js with autoplay: false', 'Vanilla': 'Add click handlers for dot navigation' }
    },
    {
      id: 'hamburger-only',
      title: 'Desktop Hamburger Menu',
      severity: 'medium',
      before: 'All screen sizes use hamburger menu icon',
      after: 'Desktop shows horizontal nav, only mobile uses hamburger',
      explanation: 'Hiding navigation on desktop adds unnecessary clicks and reduces discoverability.',
      fix: 'Use media queries to show horizontal nav on >=1024px screens.',
      frameworks: { 'CSS': '@media (min-width: 1024px) { .nav-links { display: flex } }', 'Tailwind': 'hidden lg:flex' }
    },
    {
      id: 'too-many-columns',
      title: 'Too Many Columns in Grid',
      severity: 'medium',
      before: 'Product grid with 4+ columns on desktop',
      after: 'Responsive grid: 1 col mobile, 2 col tablet, 3 col desktop',
      explanation: 'Crowded columns reduce click-through rates and make content hard to scan.',
      fix: 'Use CSS Grid with responsive column counts: grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))',
      frameworks: { 'Tailwind': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3', 'CSS': 'Auto-fit with minmax()' }
    },
    {
      id: 'hidden-pricing',
      title: 'No Pricing Page or Hidden Pricing',
      severity: 'high',
      before: 'Pricing only available after demo request',
      after: 'Clear pricing page with 3 tiers and feature comparison',
      explanation: '82% of B2B buyers want to see pricing immediately. Hidden pricing frustrates users and reduces trust.',
      fix: 'Create transparent pricing page with tiers. Add FAQ addressing pricing questions.',
      frameworks: { 'Design': '3-column pricing grid with feature lists', 'Psychology': 'Anchor with high-priced option first' }
    },
    {
      id: 'ghost-buttons',
      title: 'WOAH Too Many Ghost Buttons',
      severity: 'low',
      before: 'Multiple secondary actions all styled as ghost buttons',
      after: 'One primary button + clearly differentiated secondary options',
      explanation: 'Ghost buttons should be used sparingly for secondary actions. Overuse creates visual noise and confuses hierarchy.',
      fix: 'Limit to 1-2 ghost buttons. Use text links or icon-only buttons for other secondary actions.',
      frameworks: { 'Design': 'Visual hierarchy with three levels: filled button > outlined > text link' }
    }
  ],
  ux: [
    {
      id: 'infinite-scroll',
      title: 'No Footer with Infinite Scroll',
      severity: 'high',
      before: 'Continuous loading content, footer inaccessible',
      after: 'Load more button or pagination with accessible footer',
      explanation: 'Users expect to find footer links. Infinite scroll traps users and hides important information.',
      fix: 'Replace infinite scroll with "Load more" button or traditional pagination.',
      frameworks: { 'UX': 'Keep footer visible at all times', 'Implementation': 'IntersectionObserver for manual load more' }
    },
    {
      id: 'no-loading-feedback',
      title: 'Missing Loading States',
      severity: 'high',
      before: 'Click button -> nothing happens -> suddenly content appears',
      after: 'Button shows loading spinner, skeleton placeholders for content',
      explanation: 'Users think the site is broken without visual feedback. Increases perceived wait time.',
      fix: 'Show loading state within 300ms. Use skeleton screens for predictable content.',
      frameworks: { 'React': 'isLoading state + spinner component', 'Performance': 'SkeletonUI with approximate layout' }
    },
    {
      id: 'generic-errors',
      title: 'Generic Error Messages',
      severity: 'high',
      before: 'Error: Something went wrong.',
      after: 'Failed to save: File size exceeds 10MB limit. Resize and try again.',
      explanation: 'Generic errors frustrate users and increase support tickets. Specific errors help users self-serve.',
      fix: 'Write specific error messages describing what happened and how to fix it.',
      frameworks: { 'Best practice': 'Error: [what] + [why] + [how to fix]', 'Example': "Couldn't connect: Server timeout. Check your connection and retry." }
    },
    {
      id: 'link-new-tab',
      title: 'Links Opening New Tabs Without Warning',
      severity: 'low',
      before: 'External links open new tab without indicator',
      after: 'External links show arrow icon and "(opens in new tab)" text',
      explanation: 'Unexpected new tabs disorient users and break back-button navigation.',
      fix: 'Add external link icon and optionally text indicating new tab behavior.',
      frameworks: { 'Accessibility': 'target="_blank" should include rel="noopener" and visual indicator' }
    },
    {
      id: 'mobile-tap-targets',
      title: 'Tiny Mobile Tap Targets',
      severity: 'medium',
      before: '30x30px buttons with 2px spacing on mobile',
      after: '44x44px minimum buttons with 8px spacing',
      explanation: 'Small tap targets cause frustration and accidental clicks. Apple and Google recommend 44-48px minimum.',
      fix: 'Increase touch targets to 44x44px min. Add 8px spacing between interactive elements.',
      frameworks: { 'Mobile': '@media (pointer: coarse) for touch-optimized styles', 'Testing': 'Use browser devtools touch emulation' }
    }
  ],
  technical: [
    {
      id: 'no-csp',
      title: 'Missing Content Security Policy',
      severity: 'critical',
      before: 'No CSP headers - vulnerable to XSS attacks',
      after: 'Configured CSP allowing only trusted domains',
      explanation: 'Without CSP, site is vulnerable to cross-site scripting and data injection attacks.',
      fix: 'Implement CSP header. Start strict with default-src self, then add exceptions as needed.',
      frameworks: { 'Security': "Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'", 'Tool': 'Use CSP evaluator to test your policy' }
    },
    {
      id: 'x-powered-by',
      title: 'Exposing Tech Stack',
      severity: 'medium',
      before: 'X-Powered-By: Express 4.17.1, Server: nginx/1.18.0',
      after: 'Sensitive headers removed',
      explanation: 'Exposing server technology makes targeted attacks easier for hackers.',
      fix: 'Remove X-Powered-By and Server headers at web server or application level.',
      frameworks: { 'Express': 'app.disable("x-powered-by")', 'Nginx': 'server_tokens off' }
    },
    {
      id: 'console-errors',
      title: 'JavaScript Errors in Console',
      severity: 'high',
      before: '4 JavaScript errors showing in console',
      after: 'Clean console with no errors or warnings',
      explanation: 'Console errors often indicate broken functionality that users may encounter.',
      fix: 'Monitor console in production. Fix all errors, warnings acceptable but should be minimal.',
      frameworks: { 'Sentry': 'Track errors in production automatically', 'Testing': 'Test critical user flows end-to-end' }
    },
    {
      id: 'cache-headers',
      title: 'Missing Cache Headers',
      severity: 'medium',
      before: 'All requests return 200 OK, no caching',
      after: 'Static assets cached 1yr, API responses cached 5min',
      explanation: 'Poor caching slows down repeat visits and increases server costs unnecessarily.',
      fix: 'Set proper Cache-Control headers for different asset types.',
      frameworks: { 'Static': 'immutable, max-age=31536000', 'API': 'no-cache for sensitive data, 5min for public' }
    },
    {
      id: 'no-backup',
      title: 'No Backup Strategy',
      severity: 'critical',
      before: 'Site and database never backed up',
      after: 'Daily automated backups stored off-site',
      explanation: 'Hardware failure, hacking, or human error could permanently destroy all data.',
      fix: 'Automated daily backups for database and uploaded files. Test restoration monthly.',
      frameworks: { 'Database': 'pg_dump, mongodump with timestamp', 'Files': 'rsync to S3 or backup service' }
    }
  ],
  accessibility: [
    {
      id: 'empty-alt',
      title: 'Missing Alt Text',
      severity: 'high',
      before: '<img src="banner.jpg"> - no alt attribute',
      after: '<img src="banner.jpg" alt="Student using laptop in library, smiling">',
      explanation: 'Screen readers cannot describe images without alt text. WCAG A requirement.',
      fix: 'Add descriptive alt to all images. Use alt="" only for decorative images.',
      frameworks: { 'Testing': 'axe-core or WAVE will flag missing alt text', 'CMS': 'Require alt field in image upload form' }
    },
    {
      id: 'color-only',
      title: 'Color-Only Information',
      severity: 'high',
      before: 'Red text for errors, green for success - no icons',
      after: 'Red text + warning icon for errors, green + checkmark for success',
      explanation: '8% of men are colorblind. Information must not rely solely on color.',
      fix: 'Combine color with icons, text labels, or patterns.',
      frameworks: { 'Design': 'Never use red/green alone for critical information', 'Testing': 'Use browser extension to simulate colorblindness' }
    },
    {
      id: 'focus-indicator',
      title: 'No Visible Focus Indicator',
      severity: 'medium',
      before: 'Custom CSS removes focus outline: outline: none',
      after: 'Clear focus ring on all interactive elements',
      explanation: 'Keyboard users cannot see where they are on the page without focus indicators.',
      fix: 'Style focus-outline with 2px solid line in brand color. Never remove outlines.',
      frameworks: { 'Tailwind': 'focus:ring-2 focus:ring-blue-500', 'CSS': ':focus-visible { outline: 2px solid #0063e5}' }
    },
    {
      id: 'aria-missing',
      title: 'Missing ARIA Labels',
      severity: 'medium',
      before: '<button>x</button> - no label for screen reader',
      after: '<button aria-label="Close modal">x</button>',
      explanation: 'Icon-only buttons and custom controls need ARIA labels for screen reader users.',
      fix: 'Add aria-label to all icon-only buttons. Use aria-expanded for toggles.',
      frameworks: { 'React': 'aria-label or visually hidden text', 'Testing': 'axe-core flags missing labels automatically' }
    },
    {
      id: 'heading-hierarchy-mistake',
      title: 'Broken Heading Hierarchy',
      severity: 'medium',
      before: 'H1 -> H4 -> H2 - skipped levels',
      after: 'Proper outline: H1 -> H2 -> H3',
      explanation: 'Screen reader users navigate by headings. Skipped levels break document structure.',
      fix: "Use headings sequentially. Style with CSS, don't pick by size.",
      frameworks: { 'Structure': 'H1 only once per page, H2 for main sections', 'Styling': 'h2 { font-size: 28px } not <h4> for styling' }
    }
  ]
};

// ── Mistake category labels ─────────────────────────────────────────────────
export const MISTAKE_CATEGORIES = {
  design:        'Design & Layout',
  ux:            'UX & Interaction',
  technical:     'Technical & Security',
  accessibility: 'Accessibility',
};

// ── Prompt Library ──────────────────────────────────────────────────────────
export const PROMPT_LIBRARY = [
  {
    component: 'hero-section',
    examples: [
      {
        industry: 'fortune',
        title: 'Fortune 500 Enterprise Hero',
        prompt: 'Create a split-layout hero section for a Fortune 500 enterprise software company. Left side: large headline "Transform Your Enterprise Operations" with subheading "Trusted by 200+ Fortune 500 companies" and two CTAs: "Schedule Executive Briefing" (primary) and "View Case Studies" (secondary). Right side: abstract geometric visualization representing digital transformation. Use professional navy blue and white color scheme. Include trust indicators: "SOC 2 Certified - ISO 27001 - 99.99% Uptime" below the fold.'
      },
      {
        industry: 'ecommerce',
        title: 'Ecommerce Seasonal Sale',
        prompt: 'Design an ecommerce hero section for a summer tech sale. Full-width background with gradient from yellow to orange. Large centered headline: "Summer Tech Sale" with 40% off badge. Subheading: "Free shipping on orders over $99." Below hero: 4 product cards with headphones, smartwatch, webcam, and tablet showing original prices with strikethrough and sale prices in red. Include countdown timer "Sale ends in 24:00:00" and trust badges: "30-day returns - Secure checkout - 24/7 support"'
      },
      {
        industry: 'gaming',
        title: 'Gaming Platform Trailer Hero',
        prompt: 'Create a gaming hero with embedded video player showing game trailer on right (60% width), left side (40% width) has "Play Free Now" CTA button with game controller icon, feature bullets: "2.5M+ Active Players - Cross-Platform - No Downloads Required" and platform icons for PC, PlayStation, Xbox, and Mobile. Dark background with neon accents. Add glowing animations to CTA button.'
      },
      {
        industry: 'saas',
        title: 'SaaS ROI Calculator Hero',
        prompt: 'Build a SaaS hero section with interactive ROI calculator. Top: headline "Calculate Your ROI in 30 Seconds". Calculator has two inputs: "Number of employees" and "Average hourly rate". Live calculation showing "Monthly savings: $12,000" and "Annual ROI: $144,000+". Include bar chart visualization comparing before/after costs. Below calculator: "Start Free Trial" CTA with "No credit card required" text. Use clean modern design with blue accent colors.'
      },
      {
        industry: 'fintech',
        title: 'Fintech Security-Focused Hero',
        prompt: 'Design a fintech hero emphasizing security. Background: subtle animated lock icons pattern. Headline: "Bank-Grade Security for Your Digital Assets". Subheading highlighting 256-bit encryption, cold storage, and regulatory compliance. Left: "Open Account" CTA with ID verification status indicator. Right: security certificate badges (SOC 2, PCI DSS, ISO 27001). Include live security stats: "$2B+ Secured - 99.99% Uptime - 256-bit Encryption"'
      }
    ]
  },
  {
    component: 'navbar',
    examples: [
      {
        industry: 'fortune',
        title: 'Enterprise SaaS Navbar',
        prompt: 'Create a professional enterprise navbar with logo left, 5 menu items: Platform, Solutions, Resources, Pricing, Company. Right side: "Get Demo" CTA button and "Sign In" link. On scroll: navbar becomes sticky with transparent glass effect. Logo shrinks from 32px to 24px. Add subtle drop shadow. Include breadcrumbs below navbar showing current location: "Home > Solutions > Enterprise". Mobile: hamburger menu that slides from left with company logo at top.'
      },
      {
        industry: 'ecommerce',
        title: 'Ecommerce Shopping Navbar',
        prompt: 'Design an ecommerce navbar with search bar prominently centered (60% of width). Left: logo and hamburger menu with product categories. Right: shopping cart icon with item count badge, user profile dropdown with "Orders", "Wishlist", "Account". Add mega menu on hover showing product categories with featured products. Include search autocomplete showing recent searches and trending products.'
      },
      {
        industry: 'gaming',
        title: 'Gaming Portal Navbar',
        prompt: 'Build a gaming website navbar with game logo left (with animated hover effect). Center: Games, Community, News, Support. Right: user avatar showing achievement badges, notification bell with count for friend requests. Include search that finds games, players, and clans. Dark theme with RGB accents that match featured game of the week.'
      }
    ]
  },
  {
    component: 'product-card',
    examples: [
      {
        industry: 'ecommerce',
        title: 'Full Product Card',
        prompt: 'Create a full ecommerce product card: (1) Product image with "New" badge in top-left, (2) Hover to show secondary product image, (3) Wishlist heart icon top-right, (4) Star rating with review count, (5) Product name truncated to 2 lines, (6) Current price large, original price with strikethrough, (7) "Add to Cart" button with loading state, (8) Quick view button on hover showing modal preview. Card should have smooth hover animation with subtle lift and shadow.'
      },
      {
        industry: 'ecommerce',
        title: 'Dynamic Product Card',
        prompt: 'Design a product card showing live inventory: "Only 3 left!" in red when stock <5, "50+ available" in green when stock >50. Include delivery estimate: "Get it by Tomorrow" with countdown to cutoff time. Show personalization: "Based on your view of [similar product]". Include tiered pricing: "$99 each or $89 for 3+" with automatic quantity-based discount calculator.'
      }
    ]
  },
  {
    component: 'pricing-card',
    examples: [
      {
        industry: 'saas',
        title: 'SaaS Tiered Pricing',
        prompt: 'Build a 3-tier SaaS pricing comparison: (1) Starter $0/mo, (2) Professional $99/mo with "Most Popular" badge, (3) Enterprise $499/mo. Each card shows: user limits, API call limits, integrations, support level. Include free trial button for each tier. Professional tier highlighted with border and shadow. Add toggle for monthly vs annual billing (save 20%) with price animation.'
      },
      {
        industry: 'fintech',
        title: 'Fintech Volume-Based Pricing',
        prompt: 'Create fintech pricing table with per-transaction fees: Startup tier 2.9% + 30c per transaction for <$100K/mo, Growth tier 2.5% + 25c for $100K-$1M/mo, Enterprise custom pricing for >$1M/mo. Include live calculator: user inputs monthly volume and average transaction size, see exact monthly cost. Show estimated savings vs competitors (Stripe, Square).'
      }
    ]
  },
  {
    component: 'feature-card',
    examples: [
      {
        industry: 'saas',
        title: 'SaaS Feature Card',
        prompt: 'Design a SaaS feature card with icon on top, feature name below, short description (2-3 lines), "Learn more" link that expands to show screenshots and deeper explanation. Include implementation time: "Set up in 10 minutes". Show status indicator: green check for active features, gray for upcoming. Cards should align in a responsive grid with consistent heights.'
      },
      {
        industry: 'gaming',
        title: 'Game Feature Card',
        prompt: 'Create a gaming feature showcase card: large screenshot showing feature, "New" badge with animation, feature title, one-line description, player count using it ("523K players online"). Click to embed video demo. Include difficulty level for features: "Easy - 5 min setup". Show cross-platform availability icons.'
      }
    ]
  },
  {
    component: 'cta-button',
    examples: [
      {
        industry: 'ecommerce',
        title: 'Add to Cart Button',
        prompt: 'Build an ecommerce "Add to Cart" button with three states: (1) default "Add to Cart", (2) loading spinner while adding, (3) success state with checkmark and "Added!" for 2 seconds. Show quantity incrementer: when clicked multiple times, show 2x, 3x with simple animation. Include subtle micro-interaction on hover: button bounces or icon slides in. Mobile: full width with thumb-friendly 48px height.'
      },
      {
        industry: 'fortune',
        title: 'Enterprise Contact CTA',
        prompt: 'Create a professional enterprise "Get Demo" button: subtle 3D hover effect lifting button, on click shows modal form instead of navigating away. Form collects: company name, role, team size, use case. Include trust text: "No spam - we\'ll only contact you about your demo" with lock icon. Button should pulse gently every 10 seconds to draw attention.'
      }
    ]
  },
  {
    component: 'stat-block',
    examples: [
      {
        industry: 'fortune',
        title: 'Enterprise Social Proof',
        prompt: 'Design a stats section for enterprise credibility: 200+ Fortune 500 Clients (with rotating company logos), $50B+ Transactions Processed, 99.99% Uptime SLA, 24/7 Support (with response time guarantees). Include YoY growth arrows. Make numbers animate counting up from 0 on page load. Add "As seen in" logos: WSJ, TechCrunch, Forbes.'
      },
      {
        industry: 'gaming',
        title: 'Game Community Stats',
        prompt: 'Build a gaming community stats dashboard showing: 2.5M+ Active Players (with online counter ticking up), 98% Player Satisfaction (4.9/5 star rating), 50+ Countries (with flag icons), 24/7 Game Servers (with ping status lights). Include language selector: "Join players in your region". Add friend referral stats: "You\'ve referred 8 friends".'
      }
    ]
  },
  {
    component: 'testimonial-card',
    examples: [
      {
        industry: 'fortune',
        title: 'Fortune 500 Case Study',
        prompt: 'Create an enterprise case study card: "Global Retail Chain", quote "40% operational efficiency gain within 3 months", results visualization showing before/after metrics, ROI calculation: $2M annual savings, profile of CTO who implemented it (avatar, name, title), company logo. Include implementation timeline bar chart showing phases. "Read full case study" link opening PDF.'
      },
      {
        industry: 'saas',
        title: 'Customer Quote Card',
        prompt: 'Design a SaaS customer testimonial: ". . . reduced our customer support tickets by 60% in the first month. . ." - Jane Doe, Head of Support at TechCorp, 4.9/5 rating, efficiency metrics graph showing ticket reduction over time, company logo with "Verified Customer" badge. Include play button for 60-second video testimonial.'
      }
    ]
  }
];

// ── Industry labels for prompt filter ───────────────────────────────────────
export const INDUSTRY_LABELS = {
  all:       'All Industries',
  fortune:   'Fortune 500',
  ecommerce: 'Ecommerce',
  gaming:    'Gaming',
  saas:      'SaaS',
  fintech:   'Fintech',
};

// ── Component Relationships ───────────────────────────────────────────────────
// Shows how components work together in common patterns
export const COMPONENT_RELATIONSHIPS = [
  {
    id: 'navbar-flow',
    title: 'Navbar to Page Flow',
    pattern: 'Logo → Navigation Links → CTA Button → User Menu',
    description: 'The navbar guides users through the primary journey. Logo serves as home anchor, navigation links provide wayfinding, CTA drives conversion, user menu handles account needs.',
    components: ['logo', 'navbar', 'cta-button', 'user-menu'],
    example: 'Ecommerce: Logo > Shop Categories > Cart Icon (with count) > User Account'
  },
  {
    id: 'hero-to-conversion',
    title: 'Hero to Conversion Path',
    pattern: 'Hero Section → Social Proof → Feature Cards → Pricing CTA',
    description: 'Classic landing page flow: hook attention with hero, build credibility with social proof, explain value with features, then convert with pricing CTA.',
    components: ['hero-section', 'stat-block', 'feature-card', 'cta-button'],
    example: 'SaaS: Hero headline > Customer logos > 3 feature boxes > "Start Free Trial" button'
  },
  {
    id: 'content-to-action',
    title: 'Content to Action Flow',
    pattern: 'Blog Post → Newsletter Signup → Confirmation → Welcome Series',
    description: 'Content marketing funnel: engage with valuable content, capture email, confirm subscription, nurture with email series.',
    components: ['content-block', 'subscribe-form', 'alert-success', 'newsletter-section'],
    example: 'Blog: Article content > "Subscribe for more" box > Confirmation toast > Welcome email'
  },
  {
    id: 'ecommerce-journey',
    title: 'Ecommerce Purchase Journey',
    pattern: 'Product Card → Product Details → Add to Cart → Checkout → Confirmation',
    description: 'Core ecommerce flow optimized for conversion. Each step removes friction and builds trust.',
    components: ['product-card', 'product-gallery', 'add-to-cart-btn', 'cart-sidebar', 'checkout-form', 'order-confirmation'],
    example: 'Amazon-style: Product listing > Details page > One-click add > Slide-out cart > Streamlined checkout'
  },
  {
    id: 'dashboard-analytics',
    title: 'Dashboard Analytics Flow',
    pattern: 'Stat Cards → Charts → Data Tables → Filter Controls → Export Actions',
    description: 'Analytics dashboard pattern showing overview metrics first, then detailed data with interactive filtering and export capabilities.',
    components: ['stat-block', 'chart-line', 'data-table', 'filter-dropdown', 'export-button'],
    example: 'Analytics: KPI cards at top > Line charts for trends > Sortable table > Date range filter > CSV export'
  }
];

// ── Design System Fundamentals ───────────────────────────────────────────────
// Core principles for building consistent UI systems
export const DESIGN_SYSTEM_FUNDAMENTALS = [
  {
    principle: 'Typography Hierarchy',
    description: 'Establish clear text styles: H1-H6 headings, body text, captions, buttons. Define font sizes, weights, line heights for each.',
    examples: [
      'H1: 48px/56px, weight 800 - Use once per page for main title',
      'H2: 32px/40px, weight 700 - Section headers',
      'Body: 16px/24px, weight 400 - Main content',
      'Caption: 12px/16px, weight 500 - Labels and metadata'
    ],
    componentsAffected: ['headings', 'text-block', 'card', 'button']
  },
  {
    principle: 'Spacing System',
    description: 'Use consistent spacing scale (4px, 8px, 16px, 24px, 32px, 48px, 64px) for all margins, padding, and gaps.',
    examples: [
      '4px: Tight spacing between related items',
      '16px: Standard spacing between elements',
      '32px: Section spacing',
      '64px: Major section breaks'
    ],
    componentsAffected: ['card', 'section', 'grid', 'form']
  },
  {
    principle: 'Color Palette Structure',
    description: 'Define core colors: primary, secondary, accent, success, warning, error, neutral. Create tints and shades for each.',
    examples: [
      'Primary: Main brand color, uses for CTAs and key actions',
      'Success: Green for positive actions and confirmations',
      'Error: Red for errors and destructive actions',
      'Neutrals: Grays for text and backgrounds'
    ],
    componentsAffected: ['button', 'alert', 'badge', 'form']
  },
  {
    principle: 'Interactive States',
    description: 'Design states for all interactive elements: default, hover, focus, active, disabled, loading.',
    examples: [
      'Button hover: Darker background with subtle scale (1.02x)',
      'Focus: Clear ring or outline for keyboard navigation',
      'Disabled: 50% opacity, no pointer events',
      'Loading: Spinner, disabled state, and opacity change'
    ],
    componentsAffected: ['button', 'link', 'input', 'select']
  },
  {
    principle: 'Component Composition',
    description: 'Build complex components from simple ones. Buttons contain icons and text. Cards contain headers, bodies, and actions.',
    examples: [
      'Card = Header (title + close button) + Body (content) + Footer (actions)',
      'Navbar = Logo + Navigation + Search + User Menu + CTA',
      'List Item = Icon + Content (title + description) + Actions'
    ],
    componentsAffected: ['card', 'modal', 'list', 'navbar']
  }
];

// ── Accessibility Guidelines ─────────────────────────────────────────────────
// WCAG 2.1 recommendations for each component type
export const ACCESSIBILITY_GUIDELINES = {
  navigation: {
    guidelines: [
      'Use semantic <nav> element',
      'Provide skip link to main content',
      'Use proper ARIA labels for screen readers',
      'Ensure keyboard navigation with arrow keys',
      'Maintain 3:1 contrast for nav items'
    ],
    examples: {
      navbar: '<nav aria-label="Main navigation">',
      skipLink: '<a href="#main" class="skip-link">Skip to main content</a>',
      dropdown: 'aria-expanded, aria-haspopup for dropdown menus'
    }
  },
  forms: {
    guidelines: [
      'Associate labels with inputs using for/id',
      'Mark required fields with aria-required',
      'Provide clear error messages with suggestions',
      'Support form validation for screen readers',
      'Ensure touch targets are 44x44px minimum'
    ],
    examples: {
      label: '<label for="email">Email *</label><input id="email" required>',
      error: 'aria-describedby="email-error" on input',
      errorMessage: '<div id="email-error" role="alert">Invalid email format</div>'
    }
  },
  media: {
    guidelines: [
      'All images must have alt text (empty for decorative)',
      'Provide transcripts for videos',
      'Caption audio content',
      'Never use images of text',
      'Pause/play controls for animated content'
    ],
    examples: {
      informative: 'alt="Bar chart showing 40% increase in sales"',
      decorative: 'alt="" for decorative images',
      video: '<track kind="captions" src="captions.vtt">'
    }
  },
  layout: {
    guidelines: [
      'Use proper heading hierarchy (H1 → H2 → H3)',
      'Maintain logical reading order',
      'Avoid layout tables, use semantic elements',
      'Provide landmarks (header, main, footer, aside)',
      'Ensure responsive design zooms to 200%'
    ],
    examples: {
      headings: 'One H1 per page, use CSS for visual sizing',
      landmarks: '<header>, <main>, <footer>, <nav>, <aside>',
      responsive: 'Test at 320px width and 200% zoom'
    }
  }
};

// ── Framework-Specific Implementations ───────────────────────────────────────
// Code examples for popular frameworks
export const FRAMEWORK_IMPLEMENTATIONS = {
  react: [
    {
      component: 'Button',
      library: '@radix-ui/react-button',
      code: `import * as React from 'react';
import { Button as RadixButton } from '@radix-ui/react-button';

const Button = ({ children, variant = 'primary', ...props }) => (
  <RadixButton
    className={\`btn btn-\${variant}\`}
    {...props}
  >
    {children}
  </RadixButton>
);`
    },
    {
      component: 'Modal',
      library: '@headlessui/react',
      code: `import { Dialog } from '@headlessui/react';
import { useState } from 'react';

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Modal Title</Dialog.Title>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}`
    }
  ],
  vue: [
    {
      component: 'Card',
      library: 'PrimeVue',
      code: `<template>
  <Card>
    <template #title>Card Title</template>
    <template #content>
      <p>Card content goes here.</p>
    </template>
    <template #footer>
      <Button icon="pi pi-check" label="Save" />
    </template>
  </Card>
</template>`
    },
    {
      component: 'Data Table',
      library: 'Element Plus',
      code: `<template>
  <el-table :data="tableData">
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="date" label="Date" />
  </el-table>
</template>`
    }
  ],
  vanilla: [
    {
      component: 'Accordion',
      code: `class Accordion {
  constructor(element) {
    this.element = element;
    this.buttons = element.querySelectorAll('.accordion-button');

    this.buttons.forEach(button => {
      button.addEventListener('click', () => this.toggle(button));
    });
  }

  toggle(button) {
    const content = button.nextElementSibling;
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !isOpen);
    content.hidden = isOpen;
  }
}`
    },
    {
      component: 'Tabs',
      code: `function initTabs() {
  const tabs = document.querySelectorAll('[role="tab"]');
  const panels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('aria-controls');

      // Deactivate all tabs
      tabs.forEach(t => t.setAttribute('aria-selected', false));
      panels.forEach(p => p.hidden = true);

      // Activate clicked tab
      tab.setAttribute('aria-selected', true);
      document.getElementById(target).hidden = false;
    });
  });
}`
    }
  ]
};
