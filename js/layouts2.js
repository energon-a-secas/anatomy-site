// Portfolio, Blog, Component Library, Login layouts.
import { makeHelpers, sharedNavbar, sharedFooter } from './layouts.js';

// ── Portfolio ─────────────────────────────────────────────────────────────────
export function portfolioLayout(opts = {}) {
  const H = makeHelpers(opts.dummy);
  const skillGroups = [
    ['Languages',  ['JavaScript', 'TypeScript', 'Python', 'Go']],
    ['Frameworks', ['React', 'Next.js', 'Node.js', 'FastAPI']],
    ['Tools',      ['Git', 'Docker', 'Figma', 'Postgres']],
  ];
  const projects = [
    ['Analytics Dashboard', ['React', 'D3.js', 'Postgres']],
    ['E-Commerce Platform', ['Next.js', 'Stripe', 'Prisma']],
    ['CLI Dev Tool',         ['Go', 'Cobra', 'SQLite']],
    ['Design System',        ['React', 'Storybook', 'Radix']],
  ];
  const experience = [
    ['Senior Frontend Engineer', 'Acme Corp · 2022 – Present',
     'Led migration to React 18 with concurrent features. Built the core design system adopted across 8 products.'],
    ['Frontend Engineer', 'TechFlow · 2020 – 2022',
     'Owned the customer-facing dashboard. Reduced bundle size by 40% with code splitting and lazy loading.'],
    ['Junior Developer', 'StartupX · 2019 – 2020',
     'Built and shipped 3 production features end-to-end using Vue.js and Django REST Framework.'],
  ];

  return `<div class="wf-page">
  <nav class="wf-comp wf-navbar" data-comp="navbar" style="justify-content:space-between">
    <div class="wf-comp wf-logo-group" data-comp="logo">
      <div class="wf-comp" data-comp="wordmark">${H.lw(90, 12, 'Alex Rivera')}</div>
    </div>
    <div class="wf-nav-right" style="gap:16px">
      <div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('About', 38)}</div>
      <div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('Work', 34)}</div>
      <div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('Blog', 30)}</div>
      <div class="wf-comp" data-comp="cta-button">${H.obtn('Contact me', 100, 32)}</div>
    </div>
  </nav>

  <div class="wf-portfolio-hero">
    <div class="wf-comp" data-comp="avatar">${H.avatarEl(76)}</div>
    <div class="wf-portfolio-info">
      <div class="wf-comp" data-comp="badge">${H.bdg('Open to work')}</div>
      <div class="wf-comp" data-comp="headline" style="display:flex;flex-direction:column;gap:7px">
        ${H.lw(200, 26, "Hi, I'm Alex Rivera.")}
      </div>
      <div class="wf-comp" data-comp="subheadline" style="display:flex;flex-direction:column;gap:6px">
        ${H.lw(290, 9, 'Full-stack engineer building accessible, fast web products.')}
        ${H.lw(260, 9, '5 years shipping production React apps. Driven by great UX.')}
      </div>
      <div class="wf-portfolio-social wf-comp" data-comp="social-icons">
        ${[0,1,2,3].map(() => `<div class="wf-portfolio-social-icon"></div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:2px">
        ${H.fbtn('View my work', 130, 36)}${H.obtn('Download CV', 110, 36)}
      </div>
    </div>
  </div>

  <div class="wf-skills-section wf-comp" data-comp="skill-tags">
    <div style="margin-bottom:10px">${H.lw(60, 12, 'Skills')}</div>
    ${skillGroups.map(([cat, tags]) => `
    <div class="wf-skill-group">
      <div class="wf-skill-group-label">${
        opts.dummy
          ? `<span style="font-size:11px;color:#9ca3af;font-weight:600;font-family:-apple-system,sans-serif">${cat}</span>`
          : ''
      }</div>
      <div class="wf-skill-tags-row">
        ${tags.map(t => `<div class="wf-skill-tag">${H.lw(t.length * 6, 8, t)}</div>`).join('')}
      </div>
    </div>`).join('')}
  </div>

  <div class="wf-section">
    <div class="wf-comp wf-section-header" data-comp="section-header" style="text-align:left;margin-bottom:20px">
      ${H.lw(80, 16, 'Projects')}
    </div>
    <div class="wf-projects-grid">
      ${projects.map(([name, tags]) => `
      <div class="wf-comp" data-comp="project-card"><div class="wf-project-inner">
        <div class="wf-comp" data-comp="thumbnail">${H.img('100%', 140)}</div>
        <div class="wf-project-content">
          ${H.lw(140, 12, name)}
          <div class="wf-project-tags">
            ${tags.map(t => `<div class="wf-project-tag">${
              opts.dummy
                ? `<span style="font-size:10px;color:#6b7280;padding:0 8px;font-family:-apple-system,sans-serif">${t}</span>`
                : ''
            }</div>`).join('')}
          </div>
          <div class="wf-project-links">
            <div class="wf-project-link"></div><div class="wf-project-link"></div>
          </div>
        </div>
      </div></div>`).join('')}
    </div>
  </div>

  <div class="wf-section" style="background:#f9fafb">
    <div class="wf-comp wf-section-header" data-comp="section-header" style="text-align:left;margin-bottom:20px">
      ${H.lw(100, 16, 'Experience')}
    </div>
    <div class="wf-timeline wf-comp" data-comp="timeline" style="padding:0">
      ${experience.map(([role, meta, desc], i) => `
      <div class="wf-timeline-item">
        <div class="wf-timeline-track">
          <div class="wf-timeline-dot"></div>
          ${i < experience.length - 1 ? '<div class="wf-timeline-line"></div>' : ''}
        </div>
        <div class="wf-timeline-content">
          <div class="wf-timeline-header">
            ${H.lw(role.length * 7, 12, role)}
            <div class="wf-timeline-date">${
              opts.dummy
                ? `<span style="font-size:10px;color:#9ca3af;font-family:-apple-system,sans-serif;white-space:nowrap">${meta.split('·')[1]?.trim() || ''}</span>`
                : ''
            }</div>
          </div>
          ${H.lw(meta.split('·')[0].length * 5, 9, meta.split('·')[0].trim())}
          <div class="wf-timeline-desc">
            ${H.lw(300, 7, desc)}${H.lw(260, 7, '')}${H.lw(220, 7, '')}
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>

  ${sharedFooter(H)}
</div>`;
}

// ── Blog ──────────────────────────────────────────────────────────────────────
export function blogLayout(opts = {}) {
  const H = makeHelpers(opts.dummy);
  const articles = [
    ['Building accessible modals from scratch', 'Accessibility', 'Apr 5, 2025'],
    ['How I cut bundle size by 40%',            'Performance',   'Mar 12, 2025'],
    ['The case for CSS custom properties',       'CSS',           'Feb 28, 2025'],
    ['React Server Components explained',        'React',         'Feb 10, 2025'],
    ['My favorite CLI tools in 2025',            'Tooling',       'Jan 30, 2025'],
    ['How to write useful code comments',        'Best Practices','Jan 15, 2025'],
  ];

  return `<div class="wf-page">
  ${sharedNavbar(H, { search: true })}
  <div class="wf-breadcrumb wf-comp" data-comp="breadcrumb">
    ${H.navTxt('Home', 36)}<div class="wf-breadcrumb-sep"></div>
    ${H.navTxt('Blog', 30)}
  </div>

  <div class="wf-comp wf-featured-post" data-comp="article-featured">
    <div class="wf-featured-content">
      <div class="wf-comp" data-comp="badge">${H.bdg('Featured')}</div>
      <div class="wf-comp" data-comp="headline" style="display:flex;flex-direction:column;gap:7px">
        ${H.lw(240, 20, 'The complete guide to design')}
        ${H.lw(200, 20, 'tokens and theming in 2025')}
      </div>
      <div class="wf-comp" data-comp="subheadline" style="display:flex;flex-direction:column;gap:5px">
        ${H.lw(280, 8, 'Design tokens are the backbone of every scalable design system.')}
        ${H.lw(240, 8, "Here's how to implement them effectively across platforms.")}
      </div>
      <div class="wf-author-block">
        <div class="wf-comp" data-comp="avatar">${H.avatarEl(32)}</div>
        <div class="wf-author-meta">
          ${H.lw(80, 9, 'Alex Rivera')}
          ${H.lw(120, 7, 'Design Systems · Mar 28, 2025')}
        </div>
      </div>
    </div>
    <div class="wf-featured-thumbnail wf-comp" data-comp="thumbnail">${H.img(260, 170)}</div>
  </div>

  <div class="wf-section">
    <div class="wf-comp wf-section-header" data-comp="section-header" style="text-align:left;margin-bottom:20px">
      ${H.lw(100, 16, 'Latest posts')}
    </div>
    <div class="wf-article-grid">
      ${articles.map(([title, cat, date]) => `
      <div class="wf-comp" data-comp="article-card"><div class="wf-article-inner">
        <div class="wf-comp" data-comp="thumbnail">${H.img('100%', 130)}</div>
        <div class="wf-article-content">
          <div class="wf-comp" data-comp="badge">${H.bdg(cat)}</div>
          ${H.lw(160, 12, title)}
          <div style="display:flex;flex-direction:column;gap:4px">
            ${H.lw(200, 7, '')}${H.lw(170, 7, '')}
          </div>
          <div class="wf-article-meta">
            <div class="wf-comp" data-comp="avatar">${H.avatarEl(22)}</div>
            ${H.lw(60, 7, 'Alex Rivera')}
            <div class="wl wl-6" style="width:3px;background:#d1d5db"></div>
            ${H.lw(70, 7, date)}
          </div>
        </div>
      </div></div>`).join('')}
    </div>
  </div>

  <div class="wf-comp" data-comp="pagination">
    <div class="wf-pagination">
      <div class="wf-page-btn">${H.lw(14, 6, '‹')}</div>
      ${[1, 2, 3, '…', 8].map(n => `
      <div class="wf-page-btn${n === 1 ? ' active' : ''}">
        ${n === '…'
          ? `<div class="wf-page-dots">${opts.dummy ? '…' : ''}</div>`
          : `<div class="wl wl-8" style="width:${n===1?14:10}px;background:${n===1?'#fff':'#374151'}"></div>`}
      </div>`).join('')}
      <div class="wf-page-btn">${H.lw(14, 6, '›')}</div>
    </div>
  </div>

  ${sharedFooter(H)}
</div>`;
}

// ── Component Library ─────────────────────────────────────────────────────────
export function componentsLayout(opts = {}) {
  const H = makeHelpers(opts.dummy);
  const sidebarSections = [
    ['Getting started', false],
    ['Layout',          false],
    ['Forms',           true],
    ['Data Display',    false],
    ['Navigation',      false],
    ['Feedback',        false],
  ];
  const sidebarItems = ['Button', 'Input', 'Textarea', 'Select', 'Checkbox', 'Toggle'];

  return `<div class="wf-page">
  ${sharedNavbar(H, { search: true })}
  <div class="wf-comp wf-breadcrumb" data-comp="breadcrumb">
    ${H.navTxt('Docs', 30)}<div class="wf-breadcrumb-sep"></div>
    ${H.navTxt('Components', 70)}<div class="wf-breadcrumb-sep"></div>
    ${H.navTxt('Forms', 46)}
  </div>

  <div style="display:flex;min-height:600px">
    <div class="wf-comp wf-sidebar-nav" data-comp="sidebar-nav" style="width:200px;min-height:auto">
      ${sidebarSections.map(([label, active]) => `
      <div class="wf-sidebar-nav-item${active ? ' active' : ''}">
        <div class="wf-sidebar-dot${active ? ' active' : ''}"></div>
        ${H.navTxt(label, label.length * 5 + 20)}
      </div>`).join('')}
      <div style="height:8px"></div>
      ${sidebarItems.map((item, i) => `
      <div class="wf-sidebar-nav-item${i === 1 ? ' active' : ''}" style="padding-left:28px">
        <div class="wf-sidebar-dot${i === 1 ? ' active' : ''}"></div>
        ${H.navTxt(item, item.length * 5 + 10)}
      </div>`).join('')}
    </div>

    <div style="flex:1;padding:24px 32px;overflow:hidden">

      <div class="wf-comp" data-comp="section-header" style="text-align:left;margin-bottom:4px">
        ${H.lw(50, 22, 'Forms')}
        <div style="margin-top:5px">${H.lw(280, 8, 'A collection of form components for collecting user input.')}</div>
      </div>

      <div class="wf-comp" data-comp="tab-bar" style="margin:14px 0 20px">
        <div style="display:flex;gap:0;border-bottom:1.5px solid #e5e7eb">
          ${['Preview', 'Code', 'Props'].map((t, i) => `
          <div style="padding:6px 16px;font-size:12px;font-weight:${i===0?'600':'400'};color:${i===0?'#111827':'#9ca3af'};border-bottom:${i===0?'2px solid #111827':'2px solid transparent'};cursor:pointer;margin-bottom:-1.5px;font-family:-apple-system,sans-serif">
            ${opts.dummy ? t : ''}${!opts.dummy ? `<div class="wl wl-8" style="width:${t.length*6}px"></div>` : ''}
          </div>`).join('')}
        </div>
      </div>

      <!-- Buttons -->
      <div class="wf-comp" data-comp="section-header" style="text-align:left;margin-bottom:10px">
        ${H.lw(60, 14, 'Button')}
        <div style="margin-top:4px">${H.lw(240, 7, 'Triggers an action such as submitting a form or opening a dialog.')}</div>
      </div>
      <div class="wf-comp" data-comp="alert" style="margin-bottom:14px">
        <div class="wf-alert info">${H.lw(280, 7, 'Use the variant prop to switch between filled, outline, and ghost styles.')}</div>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;margin-bottom:20px">
        ${H.fbtn('Default', 80, 34)}
        ${H.obtn('Outline', 80, 34)}
        ${H.fbtn('Small', 70, 28)}
        <div style="opacity:0.4">${H.fbtn('Disabled', 90, 34)}</div>
      </div>

      <div class="wf-divider wf-comp" data-comp="divider" style="margin:20px 0"></div>

      <!-- Inputs -->
      <div class="wf-comp" data-comp="section-header" style="text-align:left;margin-bottom:10px">
        ${H.lw(50, 14, 'Input')}
        <div style="margin-top:4px">${H.lw(230, 7, 'Displays a form input field for collecting a single line of text.')}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;max-width:480px;padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;margin-bottom:20px">
        <div class="wf-comp" data-comp="input-field">
          <div class="wf-label" style="margin-bottom:5px">${H.lw(30, 8, 'Name')}</div>
          <div class="wf-input-box" style="display:flex;align-items:center;padding:0 10px">
            ${opts.dummy ? `<span style="font-size:12px;color:#9ca3af;font-family:-apple-system,sans-serif">Enter your name</span>` : ''}
          </div>
        </div>
        <div class="wf-comp" data-comp="input-field">
          <div class="wf-label" style="margin-bottom:5px">${H.lw(30, 8, 'Email')}</div>
          <div class="wf-input-box" style="display:flex;align-items:center;padding:0 10px">
            ${opts.dummy ? `<span style="font-size:12px;color:#9ca3af;font-family:-apple-system,sans-serif">you@example.com</span>` : ''}
          </div>
        </div>
        <div class="wf-comp" data-comp="select-field" style="grid-column:1/-1">
          <div class="wf-label" style="margin-bottom:5px">${H.lw(50, 8, 'Country')}</div>
          <div class="wf-input-box" style="display:flex;align-items:center;justify-content:space-between;padding:0 10px">
            ${opts.dummy ? `<span style="font-size:12px;color:#9ca3af;font-family:-apple-system,sans-serif">Select a country</span><span style="font-size:10px;color:#9ca3af">▾</span>` : ''}
          </div>
        </div>
        <div class="wf-comp" data-comp="textarea" style="grid-column:1/-1">
          <div class="wf-label" style="margin-bottom:5px">${H.lw(30, 8, 'Bio')}</div>
          <div class="wf-textarea-box"></div>
        </div>
      </div>

      <div class="wf-divider wf-comp" data-comp="divider" style="margin:20px 0"></div>

      <!-- Toggles & Checkboxes -->
      <div class="wf-comp" data-comp="section-header" style="text-align:left;margin-bottom:10px">
        ${H.lw(130, 14, 'Toggle & Checkbox')}
      </div>
      <div style="display:flex;flex-direction:column;gap:12px;padding:16px;border:1px solid #e5e7eb;border-radius:8px;background:#f9fafb;margin-bottom:20px">
        ${[['Email notifications', true], ['Marketing updates', false], ['Product announcements', true]].map(([label, on]) => `
        <div style="display:flex;align-items:center;justify-content:space-between;max-width:320px">
          <div class="wf-comp" data-comp="toggle-switch">${H.lw(label.length * 6, 8, label)}</div>
          <div style="width:36px;height:20px;border-radius:99px;background:${on ? '#1f2937' : '#d1d5db'};position:relative;flex-shrink:0">
            <div style="position:absolute;${on ? 'right:2px' : 'left:2px'};top:2px;width:16px;height:16px;border-radius:50%;background:#fff"></div>
          </div>
        </div>`).join('')}
        <div style="height:1px;background:#e5e7eb;max-width:320px"></div>
        ${[['Accept terms and conditions', true], ['Subscribe to newsletter', false]].map(([label, checked]) => `
        <div style="display:flex;align-items:center;gap:8px;max-width:320px">
          <div class="wf-comp" data-comp="checkbox"
               style="width:16px;height:16px;border:1.5px solid ${checked ? '#1f2937' : '#d1d5db'};border-radius:3px;background:${checked ? '#1f2937' : '#fff'};flex-shrink:0;display:flex;align-items:center;justify-content:center">
            ${checked && opts.dummy ? `<span style="color:#fff;font-size:10px;line-height:1">✓</span>` : ''}
          </div>
          ${H.lw(label.length * 5.5, 8, label)}
        </div>`).join('')}
      </div>

      <div class="wf-divider wf-comp" data-comp="divider" style="margin:20px 0"></div>

      <!-- Data Table -->
      <div class="wf-comp" data-comp="section-header" style="text-align:left;margin-bottom:10px">
        ${H.lw(90, 14, 'Data Table')}
        <div style="margin-top:4px">${H.lw(220, 7, 'Displays structured data with sortable columns and row actions.')}</div>
      </div>
      <div class="wf-comp" data-comp="data-table" style="border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr 80px;background:#f9fafb;border-bottom:1px solid #e5e7eb">
          ${['Name', 'Status', 'Date', 'Actions'].map(h => `
          <div style="padding:10px 12px">
            ${H.lw(h.length * 6, 8, h)}
          </div>`).join('')}
        </div>
        ${[['Design system tokens', 'Active', 'Jan 12'],
           ['User onboarding flow', 'In review', 'Jan 8'],
           ['Mobile nav redesign',  'Draft',     'Dec 28'],
           ['API rate limiter',      'Shipped',   'Dec 20']].map(([name, status, date], i) => `
        <div style="display:grid;grid-template-columns:2fr 1fr 1fr 80px;border-bottom:${i < 3 ? '1px solid #f3f4f6' : 'none'};background:${i % 2 === 1 ? '#fafafa' : '#fff'}">
          <div style="padding:10px 12px">${H.lw(name.length * 6, 8, name)}</div>
          <div style="padding:10px 12px">
            ${opts.dummy
              ? `<span style="font-size:10px;font-weight:600;padding:2px 8px;border-radius:99px;background:${status==='Active'?'#dcfce7':status==='Shipped'?'#dbeafe':status==='In review'?'#fef9c3':'#f3f4f6'};color:${status==='Active'?'#16a34a':status==='Shipped'?'#2563eb':status==='In review'?'#d97706':'#6b7280'};font-family:-apple-system,sans-serif">${status}</span>`
              : `<div class="wl wl-8" style="width:50px"></div>`}
          </div>
          <div style="padding:10px 12px">${H.lw(50, 7, date)}</div>
          <div style="padding:10px 12px;display:flex;gap:6px">
            <div style="width:22px;height:22px;background:#f3f4f6;border-radius:4px"></div>
            <div style="width:22px;height:22px;background:#f3f4f6;border-radius:4px"></div>
          </div>
        </div>`).join('')}
      </div>

      <div class="wf-comp" data-comp="pagination" style="margin-top:16px">
        <div class="wf-pagination" style="justify-content:flex-start;padding:0">
          <div class="wf-page-btn">${H.lw(14, 6, '‹')}</div>
          ${[1, 2, 3].map(n => `
          <div class="wf-page-btn${n === 1 ? ' active' : ''}">
            <div class="wl wl-8" style="width:${n===1?14:10}px;background:${n===1?'#fff':'#374151'}"></div>
          </div>`).join('')}
          <div class="wf-page-btn">${H.lw(14, 6, '›')}</div>
        </div>
      </div>

    </div>
  </div>
</div>`;
}

// ── Login ─────────────────────────────────────────────────────────────────────
export function loginLayout(opts = {}) {
  const H = makeHelpers(opts.dummy);
  return `<div class="wf-page" style="min-height:560px;background:#f9fafb;display:flex;align-items:center;justify-content:center;padding:40px 20px">
  <div style="background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:32px 28px;width:100%;max-width:380px;box-shadow:0 4px 24px rgba(0,0,0,0.06)">

    <div style="text-align:center;margin-bottom:24px">
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:16px">
        <div class="wf-comp wf-logomark-box" data-comp="logomark" style="width:32px;height:32px;background:#1f2937"></div>
        <div class="wf-comp" data-comp="wordmark">${H.lw(60, 14, 'Acme')}</div>
      </div>
      <div class="wf-comp" data-comp="headline">${H.lw(120, 20, 'Welcome back')}</div>
      <div style="margin-top:6px" class="wf-comp" data-comp="subheadline">
        ${H.lw(190, 8, 'Sign in to continue to your workspace')}
      </div>
    </div>

    <div class="wf-comp" data-comp="form">
      <div style="display:flex;flex-direction:column;gap:14px">
        <div class="wf-comp" data-comp="input-field">
          <div class="wf-label" style="margin-bottom:5px">${H.lw(30, 8, 'Email')}</div>
          <div class="wf-input-box" style="display:flex;align-items:center;padding:0 12px">
            ${opts.dummy ? `<span style="font-size:13px;color:#9ca3af;font-family:-apple-system,sans-serif">you@company.com</span>` : ''}
          </div>
        </div>
        <div class="wf-comp" data-comp="input-field">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:5px">
            <div class="wf-label">${H.lw(50, 8, 'Password')}</div>
            ${opts.dummy
              ? `<span style="font-size:11px;color:#7c3aed;font-family:-apple-system,sans-serif;cursor:pointer">Forgot password?</span>`
              : `<div class="wl wl-8" style="width:70px"></div>`}
          </div>
          <div class="wf-input-box" style="display:flex;align-items:center;justify-content:space-between;padding:0 12px">
            ${opts.dummy ? `<span style="font-size:13px;color:#9ca3af;font-family:-apple-system,sans-serif">Enter password</span><span style="font-size:14px;color:#9ca3af">●●●</span>` : ''}
          </div>
        </div>
        <div class="wf-comp" data-comp="cta-button" style="margin-top:2px">
          ${H.fbtn('Sign in', '100%', 40)}
        </div>
      </div>
    </div>

    <div class="wf-comp" data-comp="divider" style="margin:18px 0">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="flex:1;height:1px;background:#e5e7eb"></div>
        ${opts.dummy
          ? `<span style="font-size:11px;color:#9ca3af;font-family:-apple-system,sans-serif;white-space:nowrap">or continue with</span>`
          : `<div class="wl wl-8" style="width:80px"></div>`}
        <div style="flex:1;height:1px;background:#e5e7eb"></div>
      </div>
    </div>

    <div style="display:flex;gap:8px">
      ${['Google', 'GitHub'].map(p => `
      <div class="wf-comp" data-comp="ghost-button" style="flex:1">
        ${H.obtn(p, '100%', 36)}
      </div>`).join('')}
    </div>

    <div style="text-align:center;margin-top:20px">
      ${opts.dummy
        ? `<span style="font-size:12px;color:#6b7280;font-family:-apple-system,sans-serif">Don't have an account? <span style="color:#7c3aed;cursor:pointer">Sign up free</span></span>`
        : `<div class="wl wl-8" style="width:180px;margin:0 auto"></div>`}
    </div>

  </div>
</div>`;
}
