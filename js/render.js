import { state } from './state.js';
import { COMPONENTS, CATEGORIES, LAYOUT_COMPONENTS, LAYOUTS, HERO_BACKGROUNDS } from './data.js';
import { landingLayout, corporateLayout, startupLayout } from './layouts.js';
import { portfolioLayout, blogLayout, componentsLayout, loginLayout } from './layouts2.js';

const LAYOUT_FNS = {
  landing:    landingLayout,
  corporate:  corporateLayout,
  startup:    startupLayout,
  portfolio:  portfolioLayout,
  blog:       blogLayout,
  components: componentsLayout,
  login:      loginLayout,
};

// ── Layout tabs ───────────────────────────────────────────────────────────────
export function renderTabs() {
  const el = document.getElementById('layoutTabs');
  el.innerHTML = LAYOUTS.map(l => `
    <button class="layout-tab${state.activeLayout === l.id ? ' active' : ''}"
            role="tab" aria-selected="${state.activeLayout === l.id}"
            data-layout="${l.id}">${l.label}</button>
  `).join('');
}

// ── Wireframe mockup ──────────────────────────────────────────────────────────
export function renderMockup() {
  const frame = document.getElementById('mockupFrame');
  const fn = LAYOUT_FNS[state.activeLayout] || landingLayout;
  frame.innerHTML = fn({ dummy: state.dummyMode });
  if (state.outlinesOn) frame.classList.add('show-outlines');
  else frame.classList.remove('show-outlines');
  applyHeroBg();
}

// ── Hero background ───────────────────────────────────────────────────────────
export function applyHeroBg() {
  const heroEl = document.querySelector('#mockupFrame [data-comp="hero-section"]');
  if (!heroEl) return;
  heroEl.className = heroEl.className.replace(/\bbg-[\w-]+\b/g, '').trim();
  if (state.heroBg && state.heroBg !== 'solid') {
    heroEl.classList.add('bg-' + state.heroBg);
  }
}

// ── Hero BG swatch picker ─────────────────────────────────────────────────────
export function renderHeroBgPicker() {
  const el = document.getElementById('heroBgPicker');
  if (!el) return;
  el.innerHTML = HERO_BACKGROUNDS.map(bg => {
    const isGrad = bg.swatch.startsWith('linear-gradient');
    const isImg  = bg.swatch.startsWith('url(');
    const style  = isGrad ? `background:${bg.swatch}`
                 : isImg  ? `background:${bg.swatch} center/cover,#e5e7eb`
                 :          `background:${bg.swatch};border:1px solid #d1d5db`;
    return `<button class="hero-bg-swatch${state.heroBg === bg.id ? ' active' : ''}"
                    data-bg="${bg.id}" title="${bg.label}"
                    style="${style}"></button>`;
  }).join('');
}

// ── Component browser ─────────────────────────────────────────────────────────
export function renderBrowser() {
  const list = document.getElementById('browserList');
  const q = state.searchQuery.toLowerCase();
  const presentIds = new Set(LAYOUT_COMPONENTS[state.activeLayout] || []);

  const grouped = {};
  for (const [id, comp] of Object.entries(COMPONENTS)) {
    const show = !q || comp.name.toLowerCase().includes(q) || (comp.also || []).some(a => a.toLowerCase().includes(q));
    if (!show) continue;
    const cat = comp.category || 'content';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push({ id, ...comp, present: presentIds.has(id) });
  }

  let html = '';
  for (const [catKey, catLabel] of Object.entries(CATEGORIES)) {
    const items = grouped[catKey];
    if (!items || items.length === 0) continue;
    html += `<div class="browser-category">
      <div class="browser-category-label">${catLabel}</div>
    </div>`;
    for (const item of items) {
      html += `<div class="browser-item${item.present ? '' : ' missing'}${state.activeComp === item.id ? ' active' : ''}"
                   data-comp-id="${item.id}" title="${item.also ? 'Also: ' + item.also.join(', ') : ''}">
        <div class="browser-dot"></div>
        ${item.name}
      </div>`;
    }
  }
  list.innerHTML = html || '<div style="padding:16px 12px;font-size:0.8rem;color:var(--text-muted)">No components match.</div>';
}

// ── Tooltip ───────────────────────────────────────────────────────────────────
export function showTooltip(compId, triggerEl) {
  const comp = COMPONENTS[compId];
  const tt = document.getElementById('tooltip');
  if (!comp) { tt.classList.add('hidden'); return; }

  document.getElementById('ttName').textContent = comp.name;
  document.getElementById('ttCategory').textContent = CATEGORIES[comp.category] || comp.category;
  document.getElementById('ttAlso').textContent = comp.also?.length ? 'Also: ' + comp.also.join(', ') : '';
  document.getElementById('ttDesc').textContent = comp.desc;

  const varWrap = document.getElementById('ttVariantsWrap');
  const varEl = document.getElementById('ttVariants');
  if (comp.variants?.length) {
    varEl.innerHTML = comp.variants.map(v => `<span class="tt-variant-pill">${v}</span>`).join('');
    varWrap.style.display = '';
  } else {
    varWrap.style.display = 'none';
  }

  const tipWrap = document.getElementById('ttTipWrap');
  const tipEl = document.getElementById('ttTip');
  if (comp.tip) {
    tipEl.textContent = comp.tip;
    tipWrap.style.display = '';
  } else {
    tipWrap.style.display = 'none';
  }

  tt.classList.remove('hidden');
  positionTooltip(tt, triggerEl);
}

export function hideTooltip() {
  document.getElementById('tooltip').classList.add('hidden');
}

function positionTooltip(tt, triggerEl) {
  if (!triggerEl) return;
  const rect = triggerEl.getBoundingClientRect();
  const ttW = 300;
  const ttH = tt.offsetHeight || 300;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const gap = 12;

  let left = rect.right + gap;
  let top  = rect.top;

  if (left + ttW > vw - 8) left = rect.left - ttW - gap;
  if (top + ttH > vh - 8)  top  = vh - ttH - 8;
  if (top < 8) top = 8;

  tt.style.left = Math.max(8, left) + 'px';
  tt.style.top  = top + 'px';
}

// ── Highlight browser item matching active comp ───────────────────────────────
export function syncBrowserHighlight(compId) {
  document.querySelectorAll('.browser-item').forEach(el => {
    el.classList.toggle('active', el.dataset.compId === compId);
  });
}
