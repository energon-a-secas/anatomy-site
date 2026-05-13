// ── Resource categories ────────────────────────────────────────────────────
export const RESOURCE_CATEGORIES = {
  hosting: { icon: '🌐', label: 'Free Hosting Services', priority: 'high' },
  cdn: { icon: '⚡', label: 'CDN & Asset Hosting', priority: 'high' },
  favicon: { icon: '🎨', label: 'Favicons & Icons', priority: 'medium' },
  devtools: { icon: '🛠️', label: 'Development Tools', priority: 'high' },
  images: { icon: '🖼️', label: 'Image Optimization', priority: 'medium' },
  analytics: { icon: '📊', label: 'Analytics (Privacy-Focused)', priority: 'medium' },
  monitoring: { icon: '🔍', label: 'Monitoring & Uptime', priority: 'medium' },
  forms: { icon: '📋', label: 'Forms & Data Collection', priority: 'low' },
  email: { icon: '📧', label: 'Email Services', priority: 'low' },
  auth: { icon: '🔐', label: 'Authentication Services', priority: 'medium' },
  database: { icon: '🗄️', label: 'Database (Free Tier)', priority: 'medium' },
};

// ── Resource items ──────────────────────────────────────────────────────────
export const RESOURCE_ITEMS = [
  // ── Free Hosting Services ──
  {
    id: 'github-pages',
    category: 'hosting',
    label: 'GitHub Pages',
    desc: 'Free static hosting with custom domain support',
    tip: 'Host static sites directly from GitHub repo. Supports custom domains, HTTPS, Jekyll. Limit: 1GB repo size, 100GB bandwidth/month. Perfect for portfolios, docs, demo sites.'
  },
  {
    id: 'cloudflare-pages',
    category: 'hosting',
    label: 'Cloudflare Pages',
    desc: 'Free tier with 500 builds/month, global CDN',
    tip: 'JAMstack hosting with preview deployments on every PR. 500 builds/month, unlimited sites, custom domains, SSL. Integrates with GitHub/GitLab. Excellent performance.'
  },
  {
    id: 'netlify',
    category: 'hosting',
    label: 'Netlify',
    desc: 'Free tier: 100GB bandwidth, continuous deployment',
    tip: 'Deploy from Git with instant cache invalidation. Free 100GB bandwidth, 300 build minutes/month. Serverless functions included. Great for static sites and SPAs.'
  },
  {
    id: 'vercel',
    category: 'hosting',
    label: 'Vercel',
    desc: 'Free for static sites, edge caching, preview URLs',
    tip: 'Optimized for frontend frameworks. Free tier: 100GB bandwidth, serverless functions, preview deployments. Excellent for Next.js, but works with any static site.'
  },
  {
    id: 'firebase-hosting',
    category: 'hosting',
    label: 'Firebase Hosting',
    desc: 'Free 10GB storage, 360MB daily data transfer',
    tip: 'Google-backed CDN, SSL, custom domains. Free tier: 10GB storage, 360MB/day data transfer. Easy CLI deployment. Good for small projects and prototypes.'
  },
  {
    id: 'render',
    category: 'hosting',
    label: 'Render',
    desc: 'Free static hosting with custom domains',
    tip: 'Static site hosting with automatic HTTPS, custom domains. Free tier includes 100GB bandwidth. Also offers free PostgreSQL and Redis tiers. Developer-friendly.'
  },
  {
    id: 'surge-sh',
    category: 'hosting',
    label: 'Surge.sh',
    desc: 'Free tier for static sites, custom domain support',
    tip: 'Simple CLI deployment: \'surge ./dist\'. Free tier includes custom domains, SSL. Very lightweight and fast for static sites. Good for quick prototypes.'
  },
  {
    id: 'gitlab-pages',
    category: 'hosting',
    label: 'GitLab Pages',
    desc: 'Free static hosting integrated with GitLab CI',
    tip: 'Similar to GitHub Pages but with GitLab. Free static hosting, custom domains, HTTPS. Includes CI/CD pipeline. 10GB storage, unlimited bandwidth.'
  },

  // ── CDN & Asset Hosting ──
  {
    id: 'jsdelivr',
    category: 'cdn',
    label: 'jsDelivr',
    desc: 'Free CDN for npm packages, GitHub releases',
    tip: 'CDN for npm packages, GitHub repos, WordPress plugins. No traffic limits. Use for loading libraries: https://cdn.jsdelivr.net/npm/package@version/file.js. Free and reliable.'
  },
  {
    id: 'unpkg',
    category: 'cdn',
    label: 'unpkg',
    desc: 'Free CDN for npm packages',
    tip: 'Fast CDN for any npm package. Automatic HTTPS, serve any file from any version. Use: https://unpkg.com/package@version/file.js. Good for demos and CodePen.'
  },
  {
    id: 'cloudflare-r2',
    category: 'cdn',
    label: 'Cloudflare R2',
    desc: '10GB free storage, 1M free operations/month',
    tip: 'S3-compatible object storage. Free tier: 10GB storage, 1M operations/month. No egress fees. Perfect for static assets, images, backups. Currently used by Neorgon sites.'
  },
  {
    id: 'backblaze-b2',
    category: 'cdn',
    label: 'Backblaze B2',
    desc: '10GB free storage, competitive pricing',
    tip: 'Object storage with free 10GB tier. Lower cost than AWS S3. Integrates with Cloudflare for free egress. Good for backups and large file storage.'
  },
  {
    id: 'aws-s3-free',
    category: 'cdn',
    label: 'AWS S3 Free Tier',
    desc: '5GB storage free for 12 months',
    tip: 'Amazon S3: 5GB free for first year, 20k GET requests. After that, very low cost. Reliable for production. Requires credit card signup.'
  },
  {
    id: 'google-fonts-cdn',
    category: 'cdn',
    label: 'Google Fonts CDN',
    desc: 'Free fonts with global CDN',
    tip: '800+ free font families with global CDN. Add &display=swap for font-display: swap. Preload critical fonts for better performance.'
  },
  {
    id: 'fontawesome-cdn',
    category: 'cdn',
    label: 'Font Awesome CDN',
    desc: 'Icon library with free tier',
    tip: 'CDN for Font Awesome icons. Free tier available. Use kit CDN for easiest setup. Consider self-hosting for performance.'
  },
  {
    id: 'iconify-cdn',
    category: 'cdn',
    label: 'Iconify',
    desc: '150k+ icons from 100+ icon sets',
    tip: 'Unified API for multiple icon sets: Material, Font Awesome, Bootstrap, and more. Use individual icons or entire sets. Free CDN available.'
  },

  // ── Favicons & Icons ──
  {
    id: 'realfavicongenerator',
    category: 'favicon',
    label: 'RealFaviconGenerator.net',
    desc: 'Favicon generator with many format options',
    tip: 'Upload PNG/SVG and get all favicon formats: ICO, PNG, SVG, webmanifest. Includes apple-touch-icon, browserconfig.xml. Most complete solution available.'
  },
  {
    id: 'favicon-io',
    category: 'favicon',
    label: 'favicon.io',
    desc: 'Generate from text, image, or emoji',
    tip: 'Free tool to generate favicons from text, images, or emojis. Simple interface, quick download. Good for basic needs.'
  },
  {
    id: 'favicon-cc',
    category: 'favicon',
    label: 'Favicon.cc',
    desc: 'Online favicon editor',
    tip: 'Create favicons from scratch or edit existing ones. Pixel-perfect editor. Free to use, no signup required for basic features.'
  },
  {
    id: 'svgomg',
    category: 'favicon',
    label: 'SVGOMG',
    desc: 'Compress SVG files for better performance',
    tip: 'Google\'s SVG optimizer. Drag-and-drop interface with live preview. Reduces SVG file size by 30-80%. Use for all SVG favicons and icons.'
  },
  {
    id: 'tinypng',
    category: 'favicon',
    label: 'TinyPNG',
    desc: 'Compress PNG images including favicons',
    tip: 'Smart PNG compression. Reduces file size without visible quality loss. Batch upload available. Use for all raster favicons before deployment.'
  },
  {
    id: 'icoconverter',
    category: 'favicon',
    label: 'IcoConverter',
    desc: 'Convert PNG to ICO format',
    tip: 'Free online PNG to ICO converter. Supports multiple sizes in one ICO file. No signup required. Quick and simple.'
  },
  {
    id: 'svgrepo',
    category: 'favicon',
    label: 'SVGRepo',
    desc: 'Free SVG icons with search',
    tip: '50k+ free SVG icons. Search by keyword, download individual icons. MIT licensed. Good for finding UI icons and symbols.'
  },
  {
    id: 'heroicons',
    category: 'favicon',
    label: 'Heroicons',
    desc: 'Free SVG icons by Tailwind team',
    tip: 'Beautiful hand-crafted SVG icons. Optimized for UI design. Free for commercial use. Available as SVG or React components.'

  },

  // ── Development Tools ──
  {
    id: 'vite',
    category: 'devtools',
    label: 'Vite',
    desc: 'Next-gen frontend tooling, instant HMR',
    tip: 'Blazing fast dev server with Hot Module Replacement. Supports vanilla JS, React, Vue, and more. Zero config for many projects.'
  },
  {
    id: 'esbuild',
    category: 'devtools',
    label: 'ESBuild',
    desc: 'Ultra-fast JavaScript bundler',
    tip: '10-100x faster than webpack. Written in Go. Supports TypeScript, JSX, CSS. Great for libraries and build scripts. Minimal config needed.'
  },
  {
    id: 'rollup',
    category: 'devtools',
    label: 'Rollup',
    desc: 'JavaScript module bundler for libraries',
    tip: 'Excellent for building libraries and packages. Tree-shaking out of the box. Smaller bundles than webpack for libraries. Simple config.'
  },
  {
    id: 'terser',
    category: 'devtools',
    label: 'Terser',
    desc: 'JavaScript minification tool',
    tip: 'Modern JS minifier. Removes whitespace, renames variables, optimizes code. Use in build process for production. 30-40% size reduction.'
  },
  {
    id: 'cssnano',
    category: 'devtools',
    label: 'CSSNano',
    desc: 'CSS minification and optimization',
    tip: 'Minifies CSS by removing whitespace, comments, and optimizing rules. Integrates with PostCSS. Reduces CSS size by 20-40%.'
  },
  {
    id: 'postcss',
    category: 'devtools',
    label: 'PostCSS',
    desc: 'Transform CSS with JavaScript plugins',
    tip: 'CSS preprocessor with plugins for autoprefixing, nesting, future CSS features. Use autoprefixer for cross-browser compatibility.'
  },
  {
    id: 'prettier',
    category: 'devtools',
    label: 'Prettier',
    desc: 'Code formatter for consistent style',
    tip: 'Opinionated code formatter. Supports JS, CSS, HTML, JSON, Markdown. Enforce consistent style across team. Integrate with editor and CI.'
  },
  {
    id: 'eslint',
    category: 'devtools',
    label: 'ESLint',
    desc: 'JavaScript linting tool',
    tip: 'Find and fix JS errors and style issues. Use recommended configs. Add to CI pipeline. Prevents bugs and enforces code quality standards.'
  },
  {
    id: 'playwright',
    category: 'devtools',
    label: 'Playwright',
    desc: 'End-to-end testing framework',
    tip: 'Microsoft\'s modern E2E testing tool. Supports all browsers, mobile emulation. Free and open source. Fast and reliable automation.'
  },
  {
    id: 'vitest',
    category: 'devtools',
    label: 'Vitest',
    desc: 'Fast unit test framework',
    tip: 'Vite-native unit testing framework. Fast, modern alternative to Jest. TypeScript support out of the box. Great for component testing.'
  },

  // ── Image Optimization ──
  {
    id: 'squoosh',
    category: 'images',
    label: 'Squoosh',
    desc: 'Google\'s image compression tool',
    tip: 'Web app and CLI for image compression. Supports WebP, AVIF, JPEG, PNG. Side-by-side comparison. Batch processing available via CLI. Compression ratio up to 90%.'
  },
  {
    id: 'imageoptim',
    category: 'images',
    label: 'ImageOptim',
    desc: 'Mac GUI tool for image compression',
    tip: 'Drag-and-drop image optimizer for Mac. Uses multiple compression algorithms. Lossless by default, lossy options available. Batch processing support.'
  },
  {
    id: 'sharp',
    category: 'images',
    label: 'Sharp',
    desc: 'Node.js image processing library',
    tip: 'High-performance Node.js image processing. Resize, compress, convert formats. Used by many CDNs and build tools. Supports WebP, AVIF, JPEG, PNG, TIFF.'
  },
  {
    id: 'imagemin',
    category: 'images',
    label: 'ImageMin',
    desc: 'Image minification plugin ecosystem',
    tip: 'Collection of plugins for image optimization. Works with Gulp, Grunt, Webpack. Compress PNG, JPEG, GIF, SVG. Lossless and lossy options.'
  },
  {
    id: 'responsive-image-generator',
    category: 'images',
    label: 'Responsive Image Breakpoints Generator',
    desc: 'Generate multiple image sizes for responsive design',
    tip: 'Upload image, get multiple sizes for srcset. Automatically calculates optimal breakpoints. Generates HTML <img> tag with srcset and sizes attributes.'
  },
  {
    id: 'cloudinary-free',
    category: 'images',
    label: 'Cloudinary Free Tier',
    desc: 'Image CDN with transformations, 25k transformations/month',
    tip: 'Free tier: 25,000 transformations/month, 25GB storage. On-the-fly image resizing, format conversion, optimization. Great for dynamic image handling. Generous free tier.'
  },

  // ── Analytics (Privacy-Focused) ──
  {
    id: 'plausible',
    category: 'analytics',
    label: 'Plausible Analytics',
    desc: 'Privacy-focused analytics, 30-day trial',
    tip: 'Lightweight (<1KB), no cookies, GDPR compliant. 30-day free trial, then $9/month. Open source option available for self-hosting. Clean, simple dashboard.'
  },
  {
    id: 'umami',
    category: 'analytics',
    label: 'Umami',
    desc: 'Open-source, privacy-focused analytics',
    tip: 'Self-host on free tier (Vercel, Railway). No cookies, GDPR compliant. Clean interface. Can host on free tier for $0/month. Data ownership.'
  },
  {
    id: 'fathom',
    category: 'analytics',
    label: 'Fathom Analytics',
    desc: 'Privacy-first analytics, 7-day trial',
    tip: 'Simple, privacy-focused analytics. 7-day free trial. $14/month after. Cookie-free, GDPR compliant. Beautiful, fast dashboard. No data sampling.'
  },
  {
    id: 'cloudflare-analytics',
    category: 'analytics',
    label: 'Cloudflare Web Analytics',
    desc: 'Free, privacy-first analytics',
    tip: 'Free analytics from Cloudflare. No cookies, no personal data collection. Works with or without using Cloudflare CDN. Simple dashboard with key metrics.'
  },
  {
    id: 'simple-analytics',
    category: 'analytics',
    label: 'Simple Analytics',
    desc: 'Privacy-first analytics, 14-day trial',
    tip: 'EU-based, GDPR compliant. No cookies, no personal data. 14-day free trial. $19/month after. Clean, minimal interface. Public dashboard option.'
  },

  // ── Monitoring & Uptime ──
  {
    id: 'uptimerobot',
    category: 'monitoring',
    label: 'UptimeRobot',
    desc: 'Free uptime monitoring, 50 monitors',
    tip: 'Free tier: 50 monitors, 5-minute checks. Email, SMS, Slack alerts. Monitor HTTP, ping, port, keyword. Good for basic uptime monitoring.'
  },
  {
    id: 'checkly-free',
    category: 'monitoring',
    label: 'Checkly Free Tier',
    desc: '50k checks/month, free synthetic monitoring',
    tip: 'Free tier: 50k API checks/month, 5k browser checks. Monitor APIs and frontend performance. Playwright-based. Good for critical path testing.'
  },
  {
    id: 'better-uptime',
    category: 'monitoring',
    label: 'Better Uptime',
    desc: 'Free 10 monitors, incident management',
    tip: 'Free tier: 10 monitors, 3-minute checks. Beautiful status pages. Incident management features. Slack integration. Escalation policies.'
  },
  {
    id: 'sentry-free',
    category: 'monitoring',
    label: 'Sentry Free Tier',
    desc: 'Error tracking, 10k events/month',
    tip: 'Free tier: 10k errors/month, 1 user. JavaScript error tracking with stack traces. Source maps support. Integrates with GitHub. Essential for production debugging.'
  },
  {
    id: 'logrocket-free',
    category: 'monitoring',
    label: 'LogRocket Free Tier',
    desc: 'Session replay, 1k sessions/month',
    tip: 'Free tier: 1,000 sessions/month. Video replay of user sessions with console logs and network activity. Great for debugging UX issues. Privacy controls included.'
  },

  // ── Forms & Data Collection ──
  {
    id: 'formspree',
    category: 'forms',
    label: 'Formspree',
    desc: 'Free form endpoints, 50 submissions/month',
    tip: 'No backend needed. Point form action to Formspree URL. Free tier: 50 submissions/month. Email notifications. Spam filtering. File upload support in paid tiers.'
  },
  {
    id: 'formsubmit',
    category: 'forms',
    label: 'FormSubmit.co',
    desc: 'Unlimited free form submissions',
    tip: 'Truly unlimited free tier. No registration required. Simple setup: set form action to FormSubmit URL. Email notifications. No spam filtering (use with caution).'
  },
  {
    id: 'staticforms',
    category: 'forms',
    label: 'StaticForms',
    desc: 'Free form endpoints with webhooks',
    tip: 'Free tier: 100 submissions/month. Webhooks to Zapier/Slack. Email notifications. Custom thank you page. Basic spam protection.'
  },
  {
    id: 'getform',
    category: 'forms',
    label: 'Getform.io',
    desc: 'Free 50 submissions/month',
    tip: 'Free tier: 50 submissions/month, 1 form. File uploads supported. Email notifications. Zapier integration. Auto-responder option.'
  },
  {
    id: 'basin',
    category: 'forms',
    label: 'Basin',
    desc: 'Free 100 submissions/month',
    tip: 'Free tier: 100 submissions/month. Spam filtering included. Export submissions as CSV. Webhooks support. Custom redirect URLs.'
  },

  // ── Email Services ──
  {
    id: 'mailgun-free',
    category: 'email',
    label: 'Mailgun Free Tier',
    desc: '5k emails/month for 3 months',
    tip: 'Developer-focused email API. Free trial: 5k emails/month for first 3 months. After that, pay-as-you-go. Great for transactional emails. Requires credit card.'
  },
  {
    id: 'sendgrid-free',
    category: 'email',
    label: 'SendGrid Free Tier',
    desc: '100 emails/day free forever',
    tip: 'Free tier: 100 emails/day forever. SMTP relay and API. Good for small apps and prototypes. Paid tiers for higher volume. Reliable delivery.'
  },
  {
    id: 'elastic-email',
    category: 'email',
    label: 'Elastic Email',
    desc: '100 emails/day free',
    tip: 'Free tier: 100 emails/day. SMTP and API access. Good for small projects. Email designer included. Basic analytics.'
  },
  {
    id: 'aws-ses-free',
    category: 'email',
    label: 'AWS SES Free Tier',
    desc: '62k outbound emails/month for 1 year',
    tip: 'Part of AWS Free Tier: 62k outbound, 1k inbound emails/month for first year. After that, $0.10 per 1k emails. Requires AWS account and domain verification.'
  },

  // ── Authentication Services ──
  {
    id: 'clerk-free',
    category: 'auth',
    label: 'Clerk Free Tier',
    desc: '5k monthly active users free',
    tip: 'Modern authentication with pre-built UI components. Free tier: 5k MAU. Social login, password, magic links. Integrates with Next.js, React, Vue. Very developer-friendly.'
  },
  {
    id: 'auth0-free',
    category: 'auth',
    label: 'Auth0 Free Tier',
    desc: '7k free active users, social login',
    tip: 'Enterprise-grade authentication. Free tier: 7k active users. Social login, passwords, MFA. Extensive SDKs. Generous free tier for side projects.'
  },
  {
    id: 'firebase-auth',
    category: 'auth',
    label: 'Firebase Authentication',
    desc: 'Free tier: phone, email, social auth',
    tip: 'Google\'s authentication service. Free tier includes email/password, phone, social login. SDKs for all platforms. Integrates with other Firebase services.'
  },
  {
    id: 'supabase-auth',
    category: 'auth',
    label: 'Supabase Auth',
    desc: '50k monthly active users free',
    tip: 'Open source Firebase alternative. Free tier: 50k MAU, 500MB database. Email, social, magic link auth. Includes database, storage, and edge functions. Very generous free tier.'
  },
  {
    id: 'appwrite',
    category: 'auth',
    label: 'Appwrite',
    desc: '10k users free, self-host option',
    tip: 'Open source backend-as-a-service. Free tier: 10k users. Self-host for free forever. Includes auth, database, storage, functions. Good for privacy-focused apps.'
  },

  // ── Database (Free Tier) ──
  {
    id: 'supabase-db',
    category: 'database',
    label: 'Supabase Database',
    desc: 'Free PostgreSQL, 500MB database',
    tip: 'Free tier: 500MB database, 500MB storage, 50k MAU. Full PostgreSQL with real-time subscriptions. Includes auth, storage, and edge functions. Best free tier available.'
  },
  {
    id: 'firebase-firestore',
    category: 'database',
    label: 'Firebase Firestore',
    desc: 'Free NoSQL database with real-time sync',
    tip: 'Free tier: 1GB data, 50k reads/day, 20k writes/day. Real-time synchronization. Good for real-time apps and MVPs. Scales automatically.'
  },
  {
    id: 'neon-free',
    category: 'database',
    label: 'Neon Free Tier',
    desc: 'Serverless PostgreSQL, 3GB storage',
    tip: 'Modern serverless Postgres. Free tier: 3GB storage, 10k compute hours/month. Branching for dev/test. Connection pooling included.'
  },
  {
    id: 'planetscale-free',
    category: 'database',
    label: 'PlanetScale Free Tier',
    desc: 'MySQL-compatible serverless database',
    tip: 'Free tier: 5GB storage, 1 billion reads/month. Vitess-based, MySQL compatible. Branching for schema changes. Good for existing MySQL apps.'
  },
  {
    id: 'cockroach-free',
    category: 'database',
    label: 'CockroachDB Free Tier',
    desc: 'Distributed SQL database, 5GB storage',
    tip: 'PostgreSQL-compatible distributed database. Free tier: 5GB storage. Strong consistency, horizontal scaling. Good for global applications.'
  },
  {
    id: 'mongodb-atlas-free',
    category: 'database',
    label: 'MongoDB Atlas Free Tier',
    desc: 'Free 512MB MongoDB cluster',
    tip: 'Free tier: 512MB storage, shared cluster. No credit card required. Good for learning MongoDB and prototyping. Always-on cluster.'
  },
  {
    id: 'faunadb-free',
    category: 'database',
    label: 'FaunaDB Free Tier',
    desc: 'Serverless GraphQL/REST database',
    tip: 'Free tier: 100k read ops, 50k write ops, 500k compute ops/month. Globally distributed. GraphQL and FQL query languages. ACID transactions.'
  },
  {
    id: 'upstash-redis-free',
    category: 'database',
    label: 'Upstash Redis Free Tier',
    desc: 'Serverless Redis, 10k commands/day',
    tip: 'Free tier: 10k commands/day, 256MB storage. Serverless Redis with REST API. Global replication. Good for caching, rate limiting, sessions.'
  },
];
