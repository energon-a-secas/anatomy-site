# Web Development Frameworks & Architecture Decision Guide

**Last Updated:** March 2026
**Purpose:** Help developers choose the right architecture and tools for their project based on requirements, constraints, and goals.

---

## Table of Contents

1. [Architecture Types Explained](#architecture-types)
2. [Frontend Frameworks](#frontend-frameworks)
3. [CSS Approaches](#css-approaches)
4. [Decision Matrix](#decision-matrix)
5. [When to Use What](#when-to-use-what)
6. [Real-World Examples](#real-world-examples)

---

## Architecture Types Explained

### Static HTML/CSS/JS ("Vanilla")

**What it is:** Plain HTML files, possibly with some JavaScript. No build step, no frameworks.

**Best for:**
- Simple landing pages
- Small projects (< 3 pages)
- Prototypes and MVPs
- Projects where SEO is critical and content is static
- Learning web fundamentals

**Pros:**
- ✅ Zero dependencies
- ✅ Instant loading (no JS hydration needed)
- ✅ Perfect SEO out of the box
- ✅ Simple to deploy (any static host)
- ✅ No build step = no build failures
- ✅ Maximum performance

**Cons:**
- ❌ Manual DOM manipulation gets messy
- ❌ No component reusability
- ❌ State management is manual
- ❌ Scaling complexity is hard

**Examples:**
- Marketing landing pages
- Event pages
- Brochure websites
- Most `neorgon.com` tools

---

### Single Page Application (SPA)

**What it is:** One HTML page that loads once, then uses JavaScript to dynamically update content without page reloads.

**Best for:**
- Web apps (not websites)
- Dashboards and admin panels
- Interactive tools (editors, builders)
- Real-time features (chat, live updates)
- Behind authentication

**Pros:**
- ✅ App-like experience (no page flashes)
- ✅ Rich interactivity
- ✅ State persists between "pages"
- ✅ Can work offline (with service worker)
- ✅ Clean separation of concerns

**Cons:**
- ❌ Poor SEO by default (empty HTML)
- ❌ Initial load can be heavy
- ❌ Requires JavaScript to work at all
- ❌ Hydration complexity
- ❌ Memory leaks possible

**Examples:**
- Gmail
- Slack web client
- Figma
- Trello

---

### Multi-Page Application (MPA)

**What it is:** Traditional website where each page is a separate HTML file from the server.

**Best for:**
- Content-heavy sites
- Blogs
- Documentation sites
- E-commerce (product pages)
- When SEO is priority #1

**Pros:**
- ✅ Excellent SEO
- ✅ Fast first-page loads
- ✅ Works without JavaScript
- ✅ Simple mental model
- ✅ Each page can be optimized separately

**Cons:**
- ❌ Full page reloads on navigation
- ❌ Harder to maintain shared UI
- ❌ State doesn't persist between pages
- ❌ Can feel slower

**Examples:**
- Wikipedia
- News sites
- Most corporate websites
- Shopify stores

---

### Server-Side Rendering (SSR)

**What it is:** Pages rendered to HTML on the server for each request. JavaScript "hydrates" it on the client.

**Best for:**
- Dynamic content that changes per request
- User-specific pages
- Sites needing SEO + interactivity
- Dashboards with live data

**Pros:**
- ✅ Good SEO (full HTML delivered)
- ✅ Fast first paint
- ✅ Interactive after hydration
- ✅ Always up-to-date

**Cons:**
- ❌ Server needed (can't use static hosts)
- ❌ Slower TTFB (Time to First Byte)
- ❌ Complex setup
- ❌ Hydration mismatches can cause bugs
- ❌ Higher hosting costs

**Examples:**
- Next.js SSR pages
- Nuxt.js universal apps
- Traditional PHP/Rails apps

---

### Static Site Generation (SSG)

**What it is:** Pages pre-built at build time into static HTML. No server needed after building.

**Best for:**
- Content that doesn't change often
- Blogs
- Documentation
- Marketing sites with dynamic features
- Sites that need both SEO and speed

**Pros:**
- ✅ Excellent SEO
- ✅ Fastest possible performance
- ✅ Can host on static CDN
- ✅ No server needed
- ✅ Great security (no server to hack)

**Cons:**
- ❌ Build time increases with site size
- ❌ Changes require rebuild
- ❌ Can't be truly dynamic

**Examples:**
- Next.js Static Export
- Gatsby sites
- Hugo, Jekyll blogs
- Most modern marketing sites

---

## Frontend Frameworks

### React

**Philosophy:** Component-based UI library. "Just JavaScript."

**When to use:**
- Large, complex applications
- Team already knows JavaScript well
- Need rich ecosystem (libraries, tools)
- Want maximum flexibility
- Building a native app too (React Native)

**Learning curve:** Steep (JSX, hooks, ecosystem choices)

**Bundle size:** Medium (42KB gzipped + dependencies)

**Notable for:**
- Largest ecosystem
- Most job opportunities
- Meta (Facebook) backing
- React Native for mobile

**Best paired with:**
- Next.js (for SSR/SSG)
- Vite (for SPA)
- Tailwind CSS

---

### Vue.js

**Philosophy:** Progressive framework. Easy to start, scales up.

**When to use:**
- Projects where you want gentle learning curve
- Teams coming from jQuery
- Need good documentation
- Want single-file components

**Learning curve:** Gentle (HTML templates familiar)

**Bundle size:** Small (34KB gzipped)

**Notable for:**
- Clear, excellent docs
- Single File Components (.vue files)
- Options API vs Composition API
- Strong in Asia (Alibaba, Baidu)

**Best paired with:**
- Nuxt.js (for SSR/SSG)
- Vite
- Tailwind or scoped styles

---

### Angular

**Philosophy:** Full-featured framework. "Batteries included."

**When to use:**
- Enterprise applications
- Large teams (TypeScript enforces structure)
- Need everything built-in (routing, forms, state)
- Long-term maintenance critical

**Learning curve:** Steep (TypeScript, decorators, RxJS)

**Bundle size:** Large (130KB+ gzipped)

**Notable for:**
- Google backing
- TypeScript by default
- Powerful CLI
- Everything included
- Strong corporate adoption

**Best paired with:**
- Angular CLI (official tooling)
- Angular Material (official components)

---

### Svelte

**Philosophy:** Compiler, not framework. Turns components into vanilla JS.

**When to use:**
- Performance-critical apps
- Small to medium projects
- Want smallest bundle size
- Prefer simpler mental model

**Learning curve:** Gentle (similar to Vue)

**Bundle size:** Tiny (framework disappears, < 10KB)

**Notable for:**
- No virtual DOM (direct DOM updates)
- Write less code
- Compile-time optimizations
- Growing popularity

**Best paired with:**
- SvelteKit (for SSR/SSG)
- Vite
- Plain CSS or Tailwind

---

### No Framework (Vanilla JS)

**Philosophy:** Use web platform APIs directly.

**When to use:**
- Learning fundamentals
- Small interactive widgets
- Performance-critical code
- Want zero dependencies
- Browser extensions

**Learning curve:** Depends (can be hard at scale)

**Bundle size:** Zero (just your code)

**Notable for:**
- Web Components standard
- Custom elements
- Maximum control

---

## CSS Approaches

### Tailwind CSS

**What it is:** Utility-first CSS framework. Classes like `bg-blue-500`, `p-4`, `flex`

**When to use:**
- Rapid prototyping
- Don't want to write CSS
- Need design system consistency
- Component-based architecture

**Pros:**
- ✅ Fast development (no context switching)
- ✅ No naming fatigue (no `.card-wrapper-inner`)
- ✅ Consistent spacing/colors
- ✅ Small bundle (purges unused styles)
- ✅ Great with components

**Cons:**
- ❌ Verbose HTML (many classes)
- ❌ Learning curve (memorizing class names)
- ❌ Can look "samey" (if you don't customize)
- ❌ Not great for marketing sites with unique art direction

**Good for:**
- Dashboards
- Admin panels
- Web apps
- Component libraries

---

### Traditional CSS (BEM, etc.)

**What it is:** Write semantic CSS with classes like `.card`, `.card__title`, `.card--featured`

**When to use:**
- Marketing sites with unique designs
- Need full design control
- Team prefers CSS
- Building a design system

**Pros:**
- ✅ Full control over styles
- ✅ Familiar to most developers
- ✅ Great for art-directed pages
- ✅ Can be very organized (BEM, etc.)

**Cons:**
- ❌ Naming is hard
- ❌ Context switching (HTML ↔ CSS)
- ❌ Can lead to large CSS files
- ❌ Specificity wars

**Good for:**
- Marketing sites
- Blogs
- Unique branding
- Creative portfolios

---

### CSS-in-JS

**What it is:** Write CSS in JavaScript files (styled-components, Emotion)

**When to use:**
- React/Vue component libraries
- Need dynamic styles based on props
- Want styles co-located with components

**Pros:**
- ✅ Styles scoped to components
- ✅ Dynamic theming easy
- ✅ No global namespace
- ✅ Co-location with logic

**Cons:**
- ❌ Runtime overhead
- ❌ Can cause hydration issues
- ❌ Larger bundles
- ❌ Debugging can be harder

**Good for:**
- React component libraries
- Styled-system based apps
- Themeable components

---

### Utility + Semantic Hybrid

**What it is:** Use Tailwind for layout/utilities, semantic CSS for custom components

**When to use:**
- Best of both worlds
- Mostly app, but some marketing pages
- Want speed + custom design control

**Example:**
```html
<!-- Layout with Tailwind -->
<div class="flex gap-4">
  <!-- Custom component with semantic class -->
  <div class="hero-card">
    <h2 class="hero-card__title">Welcome</h2>
  </div>
</div>
```

---

## Decision Matrix

| Project Type | Static | SPA | SSR | SSG | Framework | CSS Approach |
|--------------|--------|-----|-----|-----|-----------|--------------|
| **Landing page** | ✅ Yes | ❌ No | ⚠️ Maybe | ✅ Yes | None | Semantic |
| **Corporate site** | ✅ Yes | ❌ No | ⚠️ Maybe | ✅ Yes | None/Vue | Semantic |
| **Blog** | ❌ No | ❌ No | ⚠️ Maybe | ✅ Yes | None/Astro | Semantic |
| **Docs site** | ❌ No | ❌ No | ❌ No | ✅ Yes | None/Astro | Semantic |
| **Web App** | ❌ No | ✅ Yes | ✅ Yes | ❌ No | React/Vue | Tailwind |
| **Dashboard** | ❌ No | ✅ Yes | ✅ Yes | ❌ No | React/Vue | Tailwind |
| **E-commerce** | ⚠️ Maybe | ❌ No | ✅ Yes | ✅ Yes | Next/Nuxt | Semantic/Tailwind |
| **Prototype** | ✅ Yes | ✅ Yes | ❌ No | ❌ No | None/Vue | Tailwind |
| **Admin Panel** | ❌ No | ✅ Yes | ⚠️ Maybe | ❌ No | React/Vue | Tailwind |
| **Portfolio** | ✅ Yes | ⚠️ Maybe | ❌ No | ✅ Yes | None/Svelte | Semantic |

---

## When to Use What

### Use **Static HTML** when:
- ✅ It's a simple 1-5 page site
- ✅ Content rarely changes
- ✅ SEO is critical
- ✅ Speed is critical
- ✅ No interactivity needed

**Example:** A restaurant website with menu, location, hours

---

### Use **SPA** when:
- ✅ It's an app, not a website
- ✅ Rich interactivity needed
- ✅ Behind authentication
- ✅ Real-time features
- ✅ Team knows JavaScript well

**Example:** A project management tool like Trello

---

### Use **SSR** when:
- ✅ Dynamic user-specific content
- ✅ Need SEO + interactivity
- ✅ Social media previews (Open Graph)
- ✅ Have server resources
- ✅ Content changes per request

**Example:** Twitter, Facebook, user dashboard with live data

---

### Use **SSG** when:
- ✅ Content-driven site (blog, docs)
- ✅ Content changes infrequently
- ✅ Perfect performance needed
- ✅ Want cheap/free hosting
- ✅ Security is priority

**Example:** Company blog, documentation, marketing site

---

### Use **React** when:
- ✅ Large, complex application
- ✅ Rich ecosystem needed
- ✅ Team experienced with JS
- ✅ May need React Native later
- ✅ Need maximum flexibility

**Example:** Facebook, Instagram, Airbnb

---

### Use **Vue** when:
- ✅ Team new to frameworks
- ✅ Want gentle learning curve
- ✅ Prefer HTML templates
- ✅ Coming from jQuery
- ✅ Need good docs

**Example:** GitLab, Alibaba, Nintendo's website

---

### Use **Angular** when:
- ✅ Enterprise/company policy
- ✅ Large team needs structure
- ✅ TypeScript required
- ✅ Everything must be built-in
- ✅ Long-term maintenance

**Example:** Google products, corporate banking apps

---

### Use **Svelte** when:
- ✅ Performance is critical
- ✅ Small to medium app
- ✅ Want small bundle
- ✅ Prefer simplicity
- ✅ Experimenting

**Example:** The New York Times interactive graphics

---

### Use **Tailwind** when:
- ✅ Rapid development needed
- ✅ Building component-based app
- ✅ Want consistency
- ✅ Don't want to write CSS
- ✅ Team onboard

**Example:** Most modern dashboards and web apps

---

### Use **Semantic CSS** when:
- ✅ Unique design/art direction
- ✅ Marketing site
- ✅ Want full control
- ✅ Building design system
- ✅ Team prefers CSS

**Example:** Most marketing sites, Apple.com, creative portfolios

---

## Real-World Examples

### Example 1: Marketing Landing Page
**Requirements:** Fast, SEO, beautiful, unique design

**Decision:**
- Architecture: **SSG** (pre-build for speed)
- Framework: **None** or **Astro** (ship zero JS)
- CSS: **Semantic** (custom design)
- Hosting: **Vercel/Netlify** (free, fast)

**Why:** Perfect Lighthouse scores, great SEO, unique visuals

---

### Example 2: SaaS Dashboard
**Requirements:** Interactive, real-time, behind auth

**Decision:**
- Architecture: **SPA** (app-like experience)
- Framework: **React** or **Vue** (ecosystem)
- CSS: **Tailwind** (speed)
- Hosting: **Vercel** or traditional server

**Why:** Rich interactivity, component-based, fast dev

---

### Example 3: Corporate Website + Blog
**Requirements:** Pages + blog, SEO, manageable

**Decision:**
- Architecture: **SSG** (Next.js or Nuxt)
- Framework: **React or Vue** (depends on team)
- CSS: **Hybrid** (Tailwind for layout, semantic for custom)
- Hosting: **Vercel** (easy, fast)

**Why:** SEO + performance + modern dev experience

---

### Example 4: E-commerce Store
**Requirements:** SEO, dynamic inventory, fast

**Decision:**
- Architecture: **SSR or SSG with ISR** (Incremental Static Regeneration)
- Framework: **Next.js** (best e-commerce support)
- CSS: **Tailwind** (fast, consistent)
- Hosting: **Vercel** or Shopify

**Why:** Product pages need SEO, but cart needs interactivity

---

### Example 5: Internal Admin Tool
**Requirements:** Fast development, behind auth, CRUD

**Decision:**
- Architecture: **SPA**
- Framework: **Vue** (gentle curve) or **React** (if team knows it)
- CSS: **Tailwind** (speed)
- Hosting: **Internal server** or **Vercel with auth**

**Why:** Speed of development over SEO

---

### Example 6: Documentation Site
**Requirements:** Search, SEO, fast, easy to edit

**Decision:**
- Architecture: **SSG**
- Framework: **None** (Hugo, Jekyll) or **Astro**
- CSS: **Semantic** or **Tailwind**
- Hosting: **GitHub Pages** or **Netlify**

**Why:** Content-focused, SEO critical, cheap hosting

---

## Quick Decision Flowchart

```
START: What are you building?
│
├─► Static content (marketing, blog, docs)?
│   ├─► Pages < 5 and no dynamic needs?
│   │   └─► Use: Static HTML + Semantic CSS
│   │
│   └─► More complex or want modern DX?
│       └─► Use: SSG (Astro, Next.js, Hugo)
│
├─► Web app (dashboard, tool, editor)?
│   ├─► Need SEO?
│   │   ├─► Yes: SSR (Next.js, Nuxt.js)
│   │   └─► No: SPA (React + Vite, Vue + Vite)
│   │
│   └─► SEO doesn't matter (behind auth)?
│       └─► SPA (React, Vue, or Svelte)
│
└─► E-commerce or user-specific content?
    └─► Use: SSR with caching or SSG + API
```

---

## Common Pitfalls to Avoid

### ❌ Using SPA for a marketing site
**Why it's wrong:** Terrible SEO, slow initial load, overkill
**Do instead:** Use SSG or static HTML

### ❌ Using SSR for a dashboard behind auth
**Why it's wrong:** Wastes server resources, no SEO benefit
**Do instead:** Use SPA, load data client-side

### ❌ Using no framework for a complex app
**Why it's wrong:** You'll build a poor version of React/Vue
**Do instead:** Just use a framework

### ❌ Using Create React App in 2026
**Why it's wrong:** Deprecated, slow, better options exist
**Do instead:** Use Vite, Next.js, or Remix

### ❌ Choosing framework based on hype
**Why it's wrong:** Wrong tool for the job
**Do instead:** Evaluate based on YOUR requirements

### ❌ Over-engineering a simple site
**Why it's wrong:** Slower, more complex, harder to maintain
**Do instead:** Start simple, add complexity when needed

---

## Summary Tables

### Framework Comparison

| Feature | React | Vue | Angular | Svelte |
|---------|-------|-----|---------|--------|
| Learning Curve | Steep | Gentle | Steep | Gentle |
| Bundle Size | 42KB | 34KB | 130KB+ | <10KB |
| Ecosystem | Huge | Large | Medium | Growing |
| Job Market | Huge | Medium | Medium | Small |
| Backing | Meta | Independent | Google | Independent |
| Mobile | React Native | Weex/NativeScript | NativeScript | Svelte Native |
| TypeScript | Optional | Optional | Required | Optional |

### Architecture Trade-offs

| Metric | Static | SPA | SSR | SSG |
|--------|--------|-----|-----|-----|
| **SEO** | ⭐⭐⭐⭐⭐ | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Initial Load** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Interactivity** | ⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Hosting Cost** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Complexity** | ⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## Final Decision Checklist

Before you choose, answer these:

- [ ] **SEO critical?** → SSG or SSR, not SPA
- [ ] **Behind auth?** → SPA is fine
- [ ] **Content changes often?** → SSR or SPA
- [ ] **Content is static?** → SSG or static
- [ ] **Team knows framework?** → Use that one
- [ ] **Learning for fun?** → Choose any
- [ ] **Performance critical?** → Svelte or static
- [ ] **Need mobile app later?** → React (Native) or Vue (NativeScript)
- [ ] **Enterprise/strict?** → Angular
- [ ] **Fast development?** → Vue or Tailwind

**Remember:** The best choice is the one your team can ship with. A finished project is better than a perfect architecture.

---

## Resources

- [Astro](https://astro.build) - Best of all worlds
- [Next.js](https://nextjs.org) - React full-stack
- [Nuxt.js](https://nuxt.com) - Vue full-stack
- [SvelteKit](https://kit.svelte.dev) - Svelte full-stack
- [Vite](https://vitejs.dev) - Fast dev server for SPAs
- [Create React App → Vite Migration Guide](https://vitejs.dev/guide/)

---

**Disclaimer:** This guide is for educational purposes. Technology choices depend on your team's specific needs, skills, and constraints. When in doubt, build a small prototype with your top 2 choices and compare.
