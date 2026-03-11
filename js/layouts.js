// Wireframe helpers + Landing, Corporate, Startup layouts.
// All layout functions accept opts = { dummy: bool }.

export function makeHelpers(dummy) {
  const lw = (w, h, text = '') => {
    if (dummy && text) {
      const fs = h <= 8 ? 12 : h <= 12 ? 13 : h <= 14 ? 14 : h <= 18 ? 16 : h <= 22 ? 20 : h <= 28 ? 26 : 34;
      const fw = h <= 14 ? '400' : h <= 22 ? '600' : '700';
      const col = h <= 14 ? '#6b7280' : '#111827';
      return `<span style="font-size:${fs}px;font-weight:${fw};color:${col};display:block;line-height:1.25;font-family:-apple-system,sans-serif;white-space:nowrap">${text}</span>`;
    }
    return `<div class="wl wl-${h}" style="width:${w}px"></div>`;
  };
  const img = (w, h) => {
    const sw = typeof w === 'number' ? w + 'px' : w;
    return dummy
      ? `<img src="dummy-image.png" style="width:${sw};height:${h}px;object-fit:cover;border-radius:6px;display:block">`
      : `<div class="wf-img-box" style="width:${sw};height:${h}px"></div>`;
  };
  const fbtn = (label, w, h) => dummy
    ? `<button style="display:inline-flex;align-items:center;padding:0 ${h > 36 ? 20 : 14}px;height:${h}px;border-radius:6px;background:#1f2937;color:#fff;border:none;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:-apple-system,sans-serif">${label}</button>`
    : `<div class="wf-filled-btn" style="width:${typeof w === 'string' ? w : w+'px'};height:${h}px"></div>`;
  const obtn = (label, w, h) => dummy
    ? `<button style="display:inline-flex;align-items:center;padding:0 ${h > 36 ? 20 : 14}px;height:${h}px;border-radius:6px;background:transparent;color:#374151;border:1.5px solid #9ca3af;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:-apple-system,sans-serif">${label}</button>`
    : `<div class="wf-outline-btn" style="width:${typeof w === 'string' ? w : w+'px'};height:${h}px"></div>`;
  const bdg = (text) => `<div class="wf-badge-pill"><div class="wf-badge-dot"></div>${
    dummy ? `<span style="font-size:11px;color:#7c3aed;font-weight:600;font-family:-apple-system,sans-serif">${text}</span>`
           : `<div class="wl wl-8" style="width:80px"></div>`}</div>`;
  const navTxt = (text, w) => dummy
    ? `<span style="font-size:13px;color:#374151;font-family:-apple-system,sans-serif;white-space:nowrap">${text}</span>`
    : `<div class="wl wl-8" style="width:${w}px"></div>`;
  const iconSq = (s = 34) => dummy
    ? `<div class="wf-icon-sq" style="width:${s}px;height:${s}px;background:linear-gradient(135deg,#a78bfa,#818cf8)"></div>`
    : `<div class="wf-icon-sq" style="width:${s}px;height:${s}px"></div>`;
  const avatarEl = (s = 40) => dummy
    ? `<div class="wf-avatar" style="width:${s}px;height:${s}px;background:linear-gradient(135deg,#e0e7ff,#c7d2fe)"></div>`
    : `<div class="wf-avatar" style="width:${s}px;height:${s}px"></div>`;
  return { lw, img, fbtn, obtn, bdg, navTxt, iconSq, avatarEl };
}

export function sharedNavbar(H, opts = {}) {
  const rightArea = opts.signup
    ? `<div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('Login', 34)}</div>
       <div class="wf-signup-btn" data-comp="cta-button" style="width:80px;display:inline-flex;align-items:center;justify-content:center;height:32px">${H.navTxt('Sign up', 0)}</div>`
    : `<div class="wf-comp" data-comp="cta-button">${H.fbtn('Get started', 100, 32)}</div>`;
  const searchEl = opts.search
    ? `<div class="wf-comp" data-comp="search-bar" style="flex:1;max-width:180px">
         <div class="wf-search-bar">
           <div class="wf-search-icon"><div class="wf-search-dot"></div></div>
           <div class="wf-search-inner">${H.navTxt('Search...', 70)}</div>
         </div>
       </div>` : '';
  return `
  <nav class="wf-comp wf-navbar" data-comp="navbar">
    <div class="wf-comp wf-logo-group" data-comp="logo">
      <div class="wf-comp wf-logomark-box" data-comp="logomark"></div>
      <div class="wf-comp" data-comp="wordmark">${H.lw(66, 12, 'Acme')}</div>
    </div>
    <div class="wf-nav-center">
      <div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('Features', 44)}</div>
      <div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('Pricing', 42)}</div>
      <div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('Docs', 32)}</div>
      <div class="wf-comp wf-nav-item" data-comp="nav-link">${H.navTxt('Blog', 30)}</div>
    </div>
    ${searchEl}
    <div class="wf-nav-right">${rightArea}
      <div class="wf-comp wf-ham" data-comp="hamburger">
        <div class="wf-ham-line"></div><div class="wf-ham-line"></div><div class="wf-ham-line"></div>
      </div>
    </div>
  </nav>`;
}

export function sharedFooter(H) {
  return `
  <div class="wf-comp wf-footer" data-comp="footer">
    <div class="wf-footer-logo">
      <div style="display:flex;gap:7px;align-items:center">
        <div class="wf-comp wf-logomark-box" data-comp="logomark" style="width:22px;height:22px;background:#374151"></div>
        <div class="wf-comp" data-comp="wordmark">${H.lw(56, 10, 'Acme')}</div>
      </div>
      ${H.lw(120, 6, 'Build faster. Ship better.')}
      <div style="margin-top:4px">${H.lw(100, 6, '© 2025 Acme Inc.')}</div>
      <div class="wf-comp wf-social-icons" data-comp="social-icons">
        ${[0,1,2,3].map(() => `<div class="wf-social-icon"></div>`).join('')}
      </div>
    </div>
    <div class="wf-footer-cols">
      ${[['Product',['Features','Pricing','Changelog','Roadmap']],
         ['Company',['About','Blog','Careers','Press']],
         ['Legal',['Privacy','Terms','Cookies','Security']]].map(([label, links]) => `
        <div class="wf-footer-col">
          <div class="wf-footer-col-head">${H.lw(60, 8, label)}</div>
          ${links.map(l => `<div class="wf-footer-link">${H.lw(60, 6, l)}</div>`).join('')}
        </div>`).join('')}
    </div>
  </div>
  <div class="wf-footer-bottom">
    ${H.lw(200, 7, '© 2025 Acme, Inc. All rights reserved.')}
  </div>`;
}

export function featureGrid(H, count = 3, data = []) {
  const defaults = [
    ['Lightning fast', 'Deploy in minutes with our intuitive setup wizard.'],
    ['Easy to use', 'Designed for teams of all sizes. Intuitive and powerful.'],
    ['Built to scale', 'From startup to enterprise. Grows with your needs.'],
    ['Always secure', 'End-to-end encryption and SOC 2 Type II certified.'],
  ];
  return `<div class="wf-feature-grid" style="grid-template-columns:repeat(${count},1fr)">
    ${Array(count).fill(0).map((_, i) => {
      const [title, desc] = data[i] || defaults[i] || defaults[0];
      return `<div class="wf-comp" data-comp="feature-card">
        <div class="wf-feature-card-inner">
          ${H.iconSq(32)}
          <div class="wf-feature-lines" style="margin-top:8px">
            ${H.lw(90, 12, title)}
            <div style="margin-top:5px;display:flex;flex-direction:column;gap:4px">
              ${H.lw(110, 7, desc)}
              ${H.lw(100, 7, '')}${H.lw(80, 7, '')}
            </div>
          </div>
        </div>
      </div>`;
    }).join('')}
  </div>`;
}

// ── Landing Page ──────────────────────────────────────────────────────────────
export function landingLayout(opts = {}) {
  const H = makeHelpers(opts.dummy);
  return `<div class="wf-page">
  ${sharedNavbar(H)}
  <div class="wf-comp wf-hero" data-comp="hero-section">
    <div class="wf-hero-content">
      <div class="wf-comp" data-comp="badge">${H.bdg('✦ Now in beta')}</div>
      <div class="wf-comp" data-comp="headline" style="display:flex;flex-direction:column;gap:8px">
        ${H.lw(260, 28, 'Build products your team')}${H.lw(210, 28, 'will actually love')}
      </div>
      <div class="wf-comp" data-comp="subheadline" style="display:flex;flex-direction:column;gap:6px">
        ${H.lw(290, 10, 'The all-in-one platform for modern teams.')}
        ${H.lw(270, 10, 'Ship features faster and track everything that matters.')}
        ${H.lw(200, 10, '')}
      </div>
      <div class="wf-hero-btns">
        <div class="wf-comp" data-comp="cta-button">${H.fbtn('Get started free', 130, 40)}</div>
        <div class="wf-comp" data-comp="ghost-button">${H.obtn('See how it works', 140, 40)}</div>
      </div>
    </div>
    <div class="wf-comp wf-hero-image" data-comp="hero-image">${H.img(260, 180)}</div>
  </div>

  <div class="wf-comp wf-logo-bar" data-comp="logo-bar">
    <div class="wf-logo-bar-label">${H.lw(120, 8, 'Trusted by teams at')}</div>
    <div class="wf-logo-bar-items">
      ${[60,72,54,80,64,58].map(w => `<div class="wf-brand-logo" style="width:${w}px"></div>`).join('')}
    </div>
  </div>

  <div class="wf-section">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div class="wf-section-badge"><div class="wf-badge-pill">${H.lw(60, 8, 'Features')}</div></div>
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">
        ${H.lw(200, 20, 'Everything you need to ship')}
        ${H.lw(260, 10, 'Built for developers who move fast and care about quality.')}
        ${H.lw(230, 10, '')}
      </div>
    </div>
    ${featureGrid(H, 3)}
  </div>

  <div class="wf-stats-bar">
    ${[['10K+','Active users'],['99.9%','Uptime SLA'],['150+','Integrations'],['4.9★','Avg. rating']].map(([num,lbl]) => `
    <div class="wf-comp wf-stat-inner" data-comp="stat-block">
      ${H.lw(60, 28, num)}${H.lw(80, 8, lbl)}
    </div>`).join('')}
  </div>

  <div class="wf-section" style="background:#f9fafb">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">
        ${H.lw(200, 20, 'What our customers say')}${H.lw(240, 10, '')}
      </div>
    </div>
    <div class="wf-testimonial-grid">
      ${[['This changed how our team works. We ship twice as fast and actually enjoy the process now.','Sarah Chen','CTO at Acme Corp'],
         ['The onboarding was seamless and the support team is incredible. Highly recommend.','Marcus Webb','VP Engineering, TechFlow']].map(([q,n,c]) => `
      <div class="wf-comp" data-comp="testimonial-card">
        <div class="wf-testimonial-inner">
          <div class="wf-stars">${Array(5).fill('<div class="wf-star"></div>').join('')}</div>
          <div class="wf-quote-lines" style="display:flex;flex-direction:column;gap:5px">
            ${H.lw(260, 8, q)}${H.lw(240, 8, '')}${H.lw(200, 8, '')}
          </div>
          <div class="wf-testimonial-author">
            <div class="wf-comp" data-comp="avatar">${H.avatarEl(36)}</div>
            <div class="wf-byline">${H.lw(90, 10, n)}${H.lw(70, 7, c)}</div>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>

  <div class="wf-section">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">
        ${H.lw(160, 20, 'Simple pricing')}${H.lw(240, 10, 'Start free. Scale as you grow.')}
      </div>
    </div>
    <div class="wf-pricing-grid">
      ${[{n:'Free',p:'$0',f:['Up to 3 projects','5GB storage','Email support'],btn:'obtn'},
         {n:'Pro',p:'$29/mo',f:['Unlimited projects','50GB storage','Priority support','Analytics'],btn:'fbtn',pop:true},
         {n:'Enterprise',p:'Custom',f:['Unlimited everything','SSO & SAML','Dedicated support','SLA guarantee','Custom contracts'],btn:'obtn'}].map(({n,p,f,btn,pop}) => `
      <div class="wf-comp" data-comp="pricing-card">
        <div class="wf-pricing-inner${pop?' featured':''}">
          ${pop?'<div class="wf-popular-badge">Most popular</div>':''}
          ${H.lw(60, 12, n)}
          <div class="wf-price-val">${H.lw(80, 26, p)}</div>
          <div class="wf-feature-list">
            ${f.map(fi => `<div class="wf-feature-list-item"><div class="wf-check"></div>${H.lw(100, 8, fi)}</div>`).join('')}
          </div>
          ${btn==='fbtn' ? H.fbtn('Get started','100%',34) : H.obtn('Get started','100%',34)}
        </div>
      </div>`).join('')}
    </div>
  </div>

  <div class="wf-section" style="background:#f9fafb">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">${H.lw(120, 20, 'FAQ')}</div>
    </div>
    <div class="wf-comp" data-comp="accordion"><div class="wf-accordion">
      ${[['How does the free plan work?','The free plan includes up to 3 projects and 5GB of storage. No credit card required.'],
         ['Can I upgrade or downgrade anytime?','Yes, you can change your plan at any time. Changes take effect immediately.'],
         ['Do you offer discounts for nonprofits?','Yes, we offer a 50% discount for eligible nonprofit organizations.'],
         ['Is there a long-term contract?','No. All plans are month-to-month with no long-term commitment.']].map(([q,a],i) => `
        <div class="wf-accordion-item${i===0?' open':''}">
          ${H.lw(i===0?260:220, 10, q)}<div class="wf-accordion-chevron"></div>
        </div>
        ${i===0?`<div class="wf-accordion-answer" style="display:flex;flex-direction:column;gap:5px">
          ${H.lw(320,8,a)}${H.lw(280,8,'')}
        </div>`:''}`).join('')}
    </div></div>
  </div>

  <div class="wf-cta-section">
    <div class="wf-cta-lines" style="margin-bottom:12px">
      ${H.lw(280, 22, 'Ready to ship faster?')}${H.lw(240, 10, 'Join 10,000+ teams already using Acme.')}
    </div>
    <div style="display:flex;gap:10px">
      ${H.fbtn('Get started free', 140, 40)}${H.obtn('Talk to sales', 120, 40)}
    </div>
  </div>
  ${sharedFooter(H)}
</div>`;
}

// ── Corporate ─────────────────────────────────────────────────────────────────
export function corporateLayout(opts = {}) {
  const H = makeHelpers(opts.dummy);
  return `<div class="wf-page">
  ${sharedNavbar(H)}
  <div class="wf-comp wf-breadcrumb" data-comp="breadcrumb">
    ${H.navTxt('Home', 36)}<div class="wf-breadcrumb-sep"></div>
    ${H.navTxt('Solutions', 56)}<div class="wf-breadcrumb-sep"></div>
    ${H.navTxt('Enterprise', 60)}
  </div>
  <div class="wf-comp wf-hero" data-comp="hero-section">
    <div class="wf-hero-content">
      <div class="wf-comp" data-comp="headline" style="display:flex;flex-direction:column;gap:8px">
        ${H.lw(240, 26, 'Trusted by industry')}${H.lw(200, 26, 'leaders worldwide')}
      </div>
      <div class="wf-comp" data-comp="subheadline" style="display:flex;flex-direction:column;gap:6px">
        ${H.lw(280, 10, 'Enterprise-grade solutions tailored to your needs.')}
        ${H.lw(250, 10, 'Security, compliance, and scale — without the complexity.')}
      </div>
      <div class="wf-hero-btns">
        ${H.fbtn('Request a demo', 140, 40)}${H.obtn('View case studies', 150, 40)}
      </div>
    </div>
    <div class="wf-comp" data-comp="hero-image">${H.img(260, 180)}</div>
  </div>
  <div class="wf-stats-bar">
    ${[['500+','Enterprise clients'],['98%','Retention rate'],['24/7','Global support'],['ISO 27001','Certified']].map(([n,l]) => `
    <div class="wf-comp wf-stat-inner" data-comp="stat-block">${H.lw(70, 28, n)}${H.lw(90, 8, l)}</div>`).join('')}
  </div>
  <div class="wf-section">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">
        ${H.lw(180, 20, 'Our core services')}${H.lw(260, 10, 'End-to-end solutions for complex enterprise needs.')}
      </div>
    </div>
    ${featureGrid(H, 3, [['Cloud Infrastructure','Scalable, secure cloud solutions with 99.99% uptime SLA.'],['Data Analytics','Real-time insights and reporting across your entire organization.'],['Security & Compliance','SOC 2, GDPR, and HIPAA compliant infrastructure by default.']])}
  </div>
  <div class="wf-section" style="background:#f9fafb">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">${H.lw(140, 20, 'Meet our team')}</div>
    </div>
    <div class="wf-team-grid">
      ${[['James Cooper','CEO & Co-founder'],['Aria Patel','CTO'],['Tyler Brooks','VP Sales'],['Ming Liu','Head of Design']].map(([n,r]) => `
      <div class="wf-comp" data-comp="team-card"><div class="wf-team-inner">
        <div class="wf-comp" data-comp="avatar">${H.avatarEl(52)}</div>
        <div style="display:flex;flex-direction:column;gap:5px;align-items:center">
          ${H.lw(80, 12, n)}${H.lw(60, 8, r)}
        </div>
        <div class="wf-team-social">${[0,1,2].map(() => `<div class="wf-team-social-icon"></div>`).join('')}</div>
      </div></div>`).join('')}
    </div>
  </div>
  <div class="wf-section">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">
        ${H.lw(160, 20, 'Get in touch')}${H.lw(240, 10, 'Our team typically responds within 2 hours.')}
      </div>
    </div>
    <div class="wf-layout-with-sidebar">
      <div class="wf-comp wf-sidebar-nav" data-comp="sidebar-nav">
        ${[['Sales',false],['Support',true],['Partnerships',false],['Media',false],['Careers',false]].map(([t,a]) => `
        <div class="wf-sidebar-nav-item${a?' active':''}">
          <div class="wf-sidebar-dot${a?' active':''}"></div>${H.navTxt(t, 70)}
        </div>`).join('')}
      </div>
      <div style="flex:1;padding:20px">
        <div class="wf-comp" data-comp="form"><div class="wf-form-grid">
          ${[['First name','input-field'],['Last name','input-field'],['Work email','input-field'],['Company','input-field']].map(([l,c]) => `
          <div class="wf-comp wf-form-field" data-comp="${c}">
            <div class="wf-label">${H.lw(56, 8, l)}</div><div class="wf-input-box"></div>
          </div>`).join('')}
          <div class="wf-comp wf-form-field full" data-comp="textarea">
            <div class="wf-label">${H.lw(56, 8, 'Message')}</div><div class="wf-textarea-box"></div>
          </div>
        </div>
        <div style="margin-top:14px">${H.fbtn('Send message', 140, 38)}</div>
        </div>
      </div>
    </div>
  </div>
  ${sharedFooter(H)}
</div>`;
}

// ── Startup ───────────────────────────────────────────────────────────────────
export function startupLayout(opts = {}) {
  const H = makeHelpers(opts.dummy);
  return `<div class="wf-page">
  ${sharedNavbar(H, { signup: true })}
  <div class="wf-comp" data-comp="hero-section" style="padding:44px 32px 0;background:#f9fafb;border-bottom:1px solid #e5e7eb;text-align:center">
    <div style="display:flex;flex-direction:column;align-items:center;gap:12px;max-width:560px;margin:0 auto">
      <div class="wf-comp" data-comp="badge">${H.bdg('🚀 Just launched v2.0')}</div>
      <div class="wf-comp" data-comp="headline" style="display:flex;flex-direction:column;gap:8px;align-items:center">
        ${H.lw(360, 32, 'The smartest way to manage')}${H.lw(300, 32, 'your entire workflow')}
      </div>
      <div class="wf-comp" data-comp="subheadline" style="display:flex;flex-direction:column;gap:6px;align-items:center">
        ${H.lw(320, 10, 'Automate the boring stuff. Focus on what matters.')}
        ${H.lw(280, 10, 'Works with the tools you already love.')}
      </div>
      <div style="display:flex;gap:10px;margin-top:4px">
        ${H.fbtn('Start free trial', 140, 42)}${H.obtn('Watch demo', 120, 42)}
      </div>
    </div>
    <div class="wf-comp" data-comp="hero-image" style="margin:20px auto 0;max-width:600px">
      ${opts.dummy ? `<img src="dummy-image.png" style="width:100%;height:160px;object-fit:cover;border-radius:8px 8px 0 0;display:block">`
                   : `<div class="wf-product-screenshot" style="width:100%;height:160px"></div>`}
    </div>
  </div>
  <div class="wf-comp wf-logo-bar" data-comp="logo-bar">
    <div class="wf-logo-bar-label">${H.lw(120, 8, 'Trusted by teams at')}</div>
    <div class="wf-logo-bar-items">
      ${[56,70,60,76,52,64].map(w=>`<div class="wf-brand-logo" style="width:${w}px"></div>`).join('')}
    </div>
  </div>
  <div class="wf-stats-bar">
    ${[['2M+','Tasks completed'],['40%','Time saved'],['99.99%','Uptime']].map(([n,l]) => `
    <div class="wf-comp wf-stat-inner" data-comp="stat-block">${H.lw(70, 28, n)}${H.lw(90, 8, l)}</div>`).join('')}
  </div>
  <div class="wf-section"><div class="wf-comp wf-section-header" data-comp="section-header">
    <div style="display:flex;flex-direction:column;gap:7px;align-items:center">
      ${H.lw(200, 20, 'Why teams choose us')}${H.lw(260, 10, 'Purpose-built for speed without sacrificing quality.')}
    </div>
  </div></div>
  ${[['Automate repetitive work','Connect your apps and automate workflows in minutes. No code needed. Saves your team 10+ hours per week.','obtn','Watch demo'],
     ['Real-time collaboration','Everyone on the same page. Comment, assign, and ship together with live updates across devices.','fbtn','Try it free']].map(([title,desc,btn,label],i) => `
  <div class="wf-comp wf-spotlight${i===1?' reversed':''}" data-comp="feature-card">
    <div class="wf-spotlight-text">
      <div style="display:flex;flex-direction:column;gap:8px">
        ${H.lw(200, 20, title)}<div style="display:flex;flex-direction:column;gap:5px">
        ${H.lw(280, 8, desc)}${H.lw(260, 8, '')}${H.lw(240, 8, '')}</div>
      </div>
      <div style="margin-top:10px">${btn==='fbtn'?H.fbtn(label,120,34):H.obtn(label,120,34)}</div>
    </div>
    <div class="wf-spotlight-image">${H.img(280, 160)}</div>
  </div>`).join('')}
  <div class="wf-section" style="background:#f9fafb">
    <div class="wf-comp wf-section-header" data-comp="section-header">
      <div style="display:flex;flex-direction:column;gap:7px;align-items:center">
        ${H.lw(140, 20, 'Simple pricing')}${H.lw(220, 10, 'No hidden fees. Cancel anytime.')}
      </div>
    </div>
    <div class="wf-toggle" style="margin-bottom:20px">
      <div class="wf-toggle-opt on"><div class="wf-toggle-inner" style="width:52px">${H.navTxt('Monthly',0)}</div></div>
      <div class="wf-toggle-opt"><div class="wf-toggle-inner" style="width:60px">${H.navTxt('Annual',0)}</div></div>
    </div>
    <div class="wf-pricing-grid">
      ${[{n:'Starter',p:'$0',f:['5 users','10 projects','2GB storage'],b:'obtn'},
         {n:'Growth',p:'$19/mo',f:['25 users','Unlimited projects','20GB storage','Integrations'],b:'fbtn',pop:true},
         {n:'Enterprise',p:'Custom',f:['Unlimited users','Custom storage','SSO','Priority support'],b:'obtn'}].map(({n,p,f,b,pop}) => `
      <div class="wf-comp" data-comp="pricing-card"><div class="wf-pricing-inner${pop?' featured':''}">
        ${pop?'<div class="wf-popular-badge">Most popular</div>':''}
        ${H.lw(60,12,n)}<div class="wf-price-val">${H.lw(80,26,p)}</div>
        <div class="wf-feature-list">${f.map(fi=>`<div class="wf-feature-list-item"><div class="wf-check"></div>${H.lw(100,8,fi)}</div>`).join('')}</div>
        ${b==='fbtn'?H.fbtn('Get started','100%',32):H.obtn('Get started','100%',32)}
      </div></div>`).join('')}
    </div>
  </div>
  <div class="wf-cta-section">
    <div class="wf-cta-lines" style="margin-bottom:14px">
      ${H.lw(260, 22, 'Start shipping faster today.')}
      ${H.lw(220, 10, 'Free forever. No credit card required.')}
    </div>
    ${H.fbtn('Create free account', 160, 42)}
  </div>
  ${sharedFooter(H)}
</div>`;
}
