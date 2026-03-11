import { state } from './state.js';
import { COMPONENTS, CATEGORIES, LAYOUT_COMPONENTS, LAYOUTS, HERO_BACKGROUNDS, CHECKLIST_CATEGORIES, CHECKLIST_ITEMS } from './data.js';
import { landingLayout, corporateLayout, startupLayout } from './layouts.js';
import { portfolioLayout, blogLayout, componentsLayout, loginLayout, checklistLayout } from './layouts2.js';

const LAYOUT_FNS = {
  landing:    landingLayout,
  corporate:  corporateLayout,
  startup:    startupLayout,
  portfolio:  portfolioLayout,
  blog:       blogLayout,
  components: componentsLayout,
  login:      loginLayout,
  checklist:  checklistLayout,
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
  
  // If checklist layout, render checklist items
  if (state.activeLayout === 'checklist') {
    renderChecklist();
  }
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
    
    // Find which layouts have this component
    const foundIn = [];
    for (const [layoutId, compIds] of Object.entries(LAYOUT_COMPONENTS)) {
      if (compIds.includes(id)) foundIn.push(layoutId);
    }
    
    grouped[cat].push({ id, ...comp, present: presentIds.has(id), foundIn });
  }

  let html = '';
  for (const [catKey, catLabel] of Object.entries(CATEGORIES)) {
    const items = grouped[catKey];
    if (!items || items.length === 0) continue;
    html += `<div class="browser-category">
      <div class="browser-category-label">${catLabel}</div>
    </div>`;
    for (const item of items) {
      const layoutHint = !item.present && item.foundIn.length > 0
        ? `\nClick to see in: ${item.foundIn.map(id => LAYOUTS.find(l => l.id === id)?.label).filter(Boolean).join(', ')}`
        : '';
      const title = (item.also ? 'Also: ' + item.also.join(', ') : '') + layoutHint;
      
      html += `<div class="browser-item${item.present ? '' : ' missing'}${state.activeComp === item.id ? ' active' : ''}"
                   data-comp-id="${item.id}" 
                   data-found-in="${item.foundIn.join(',')}"
                   title="${title}">
        <div class="browser-dot"></div>
        ${item.name}
        ${!item.present && item.foundIn.length > 0 ? '<span class="browser-switch-hint">→</span>' : ''}
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

  // Frameworks section
  const fwWrap = document.getElementById('ttFrameworksWrap');
  const fwEl = document.getElementById('ttFrameworks');
  if (comp.frameworks?.length) {
    fwEl.innerHTML = comp.frameworks.map(fw => `<span class="tt-framework-pill">${fw}</span>`).join('');
    fwWrap.style.display = '';
  } else {
    fwWrap.style.display = 'none';
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

// ── Checklist ─────────────────────────────────────────────────────────────────
export function renderChecklist() {
  const body = document.getElementById('checklistBody');
  if (!body) return;

  // Load checked state from localStorage
  const checked = new Set(JSON.parse(localStorage.getItem('checklistChecked') || '[]'));

  let html = '';
  for (const [catKey, catData] of Object.entries(CHECKLIST_CATEGORIES)) {
    const items = CHECKLIST_ITEMS.filter(item => item.category === catKey);
    if (items.length === 0) continue;

    html += `<div class="checklist-category">
      <div class="checklist-category-header">
        <span class="checklist-category-icon">${catData.icon}</span>
        <span class="checklist-category-label">${catData.label}</span>
        <span class="checklist-category-count">${items.filter(i => checked.has(i.id)).length} / ${items.length}</span>
      </div>
      <div class="checklist-items">`;

    for (const item of items) {
      const isChecked = checked.has(item.id);
      html += `<div class="checklist-item${isChecked ? ' checked' : ''}" data-item-id="${item.id}">
        <input type="checkbox" class="checklist-checkbox" id="check-${item.id}" ${isChecked ? 'checked' : ''}>
        <label for="check-${item.id}" class="checklist-item-label">
          <div class="checklist-item-header">
            <span class="checklist-item-name">${item.label}</span>
            <span class="checklist-item-desc">${item.desc}</span>
          </div>
          <div class="checklist-item-tip">${item.tip}</div>
        </label>
      </div>`;
    }

    html += `</div></div>`;
  }

  body.innerHTML = html;
  updateChecklistProgress();
}

export function updateChecklistProgress() {
  const checked = new Set(JSON.parse(localStorage.getItem('checklistChecked') || '[]'));
  const total = CHECKLIST_ITEMS.length;
  const complete = checked.size;
  const percent = total > 0 ? (complete / total) * 100 : 0;

  const fill = document.getElementById('checklistProgress');
  const text = document.getElementById('checklistProgressText');

  if (fill) fill.style.width = `${percent}%`;
  if (text) text.textContent = `${complete} / ${total} complete (${Math.round(percent)}%)`;

  // Update category counts
  for (const [catKey, catData] of Object.entries(CHECKLIST_CATEGORIES)) {
    const items = CHECKLIST_ITEMS.filter(item => item.category === catKey);
    const catComplete = items.filter(i => checked.has(i.id)).length;
    const countEl = document.querySelector(`.checklist-category-header:has(+ .checklist-items [data-item-id^="${catKey}"]) .checklist-category-count`);
    if (countEl) countEl.textContent = `${catComplete} / ${items.length}`;
  }
}

