import { state } from './state.js';
import {
  CHECKLIST_CATEGORIES, CHECKLIST_ITEMS,
  MISTAKES_DATA, MISTAKE_CATEGORIES,
  PROMPT_LIBRARY, INDUSTRY_LABELS,
} from './data.js';

const TABS = [
  { id: 'checklist', label: 'Production Checklist' },
  { id: 'mistakes',  label: 'Common Mistakes' },
  { id: 'prompts',   label: 'AI Prompt Guide' },
];

const LS_KEY = 'checklistChecked';

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function getChecked() {
  try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; }
  catch { return []; }
}

function setChecked(arr) {
  localStorage.setItem(LS_KEY, JSON.stringify(arr));
}

// ── Tabs ────────────────────────────────────────────────────────────────────
export function renderTabs() {
  const el = document.getElementById('tabBar');
  if (!el) return;
  el.innerHTML = TABS.map(t =>
    `<button class="tab-btn${t.id === state.activeTab ? ' active' : ''}"
             data-tab="${t.id}" role="tab"
             aria-selected="${t.id === state.activeTab}">${esc(t.label)}</button>`
  ).join('');
}

// ── Content dispatcher ──────────────────────────────────────────────────────
export function renderContent() {
  const area = document.getElementById('contentArea');
  if (!area) return;

  if (state.activeTab === 'checklist') {
    renderChecklist(area);
  } else if (state.activeTab === 'mistakes') {
    renderMistakes(area);
  } else if (state.activeTab === 'prompts') {
    renderPrompts(area);
  }
}

// ── Checklist ───────────────────────────────────────────────────────────────
function renderChecklist(area) {
  const checked = getChecked();
  const q = state.searchQuery.toLowerCase();
  const totalItems = CHECKLIST_ITEMS.length;
  const totalChecked = CHECKLIST_ITEMS.filter(i => checked.includes(i.id)).length;
  const pct = totalItems ? Math.round((totalChecked / totalItems) * 100) : 0;

  let html = `<div class="checklist-overall" style="margin-bottom:16px;padding:12px 16px;background:var(--surface-1);border:1px solid var(--border-subtle);border-radius:var(--radius);">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
      <span style="font-weight:600;font-size:0.9rem;">Overall Progress</span>
      <span style="font-size:0.82rem;color:var(--text-muted);">${totalChecked}/${totalItems} (${pct}%)</span>
    </div>
    <div class="checklist-progress"><div class="checklist-progress-bar" style="width:${pct}%"></div></div>
  </div>`;

  const catIds = Object.keys(CHECKLIST_CATEGORIES);
  for (const catId of catIds) {
    const cat = CHECKLIST_CATEGORIES[catId];
    const items = CHECKLIST_ITEMS.filter(i => i.category === catId);
    const filtered = q ? items.filter(i =>
      i.label.toLowerCase().includes(q) ||
      i.desc.toLowerCase().includes(q) ||
      i.tip.toLowerCase().includes(q)
    ) : items;
    if (filtered.length === 0) continue;

    const catChecked = filtered.filter(i => checked.includes(i.id)).length;
    const catPct = filtered.length ? Math.round((catChecked / filtered.length) * 100) : 0;
    const collapsed = state.collapsedCategories[catId];

    html += `<div class="checklist-category">
      <div class="checklist-category-header" data-cat="${catId}">
        <span style="font-size:1.1em;">${cat.icon}</span>
        <span class="cat-label">${esc(cat.label)}</span>
        <span class="cat-count">${catChecked}/${filtered.length}</span>
        <span class="cat-toggle${collapsed ? ' collapsed' : ''}">&#9660;</span>
      </div>
      <div class="checklist-progress"><div class="checklist-progress-bar" style="width:${catPct}%"></div></div>
      <div class="checklist-items${collapsed ? ' hidden' : ''}">`;

    for (const item of filtered) {
      const isChecked = checked.includes(item.id);
      html += `<div class="checklist-item${isChecked ? ' checked' : ''}">
        <input type="checkbox" data-id="${item.id}" ${isChecked ? 'checked' : ''}>
        <div class="checklist-item-content">
          <span class="cl-label">${esc(item.label)}</span>
          <span class="cl-desc">${esc(item.desc)}</span>
          <div class="cl-tip">${esc(item.tip)}</div>
        </div>
      </div>`;
    }
    html += '</div></div>';
  }

  if (!html.includes('checklist-category')) {
    html += '<div class="empty-state">No checklist items match your search.</div>';
  }

  area.innerHTML = html;
}

// ── Mistakes ────────────────────────────────────────────────────────────────
function renderMistakes(area) {
  const q = state.searchQuery.toLowerCase();
  let html = '';

  for (const [catId, catLabel] of Object.entries(MISTAKE_CATEGORIES)) {
    const mistakes = MISTAKES_DATA[catId] || [];
    const filtered = q ? mistakes.filter(m =>
      m.title.toLowerCase().includes(q) ||
      m.explanation.toLowerCase().includes(q) ||
      m.fix.toLowerCase().includes(q)
    ) : mistakes;
    if (filtered.length === 0) continue;

    html += `<div class="mistakes-category">
      <div class="mistakes-category-title">${esc(catLabel)}</div>`;

    for (const m of filtered) {
      const fwHtml = Object.entries(m.frameworks || {}).map(([k, v]) =>
        `<span class="framework-tag"><strong>${esc(k)}:</strong> ${esc(v)}</span>`
      ).join('');

      html += `<div class="mistake-card">
        <div class="mistake-header">
          <span class="mistake-title">${esc(m.title)}</span>
          <span class="severity-badge ${m.severity}">${m.severity}</span>
        </div>
        <div class="mistake-comparison">
          <div class="mistake-before"><span class="comp-label">Before</span>${esc(m.before)}</div>
          <div class="mistake-after"><span class="comp-label">After</span>${esc(m.after)}</div>
        </div>
        <div class="mistake-explanation">${esc(m.explanation)}</div>
        <div class="mistake-fix">
          <span class="mistake-fix-label">Fix</span>
          ${esc(m.fix)}
        </div>
        ${fwHtml ? `<div class="mistake-frameworks">${fwHtml}</div>` : ''}
      </div>`;
    }
    html += '</div>';
  }

  if (!html) {
    html = '<div class="empty-state">No mistakes match your search.</div>';
  }

  area.innerHTML = html;
}

// ── Prompts ─────────────────────────────────────────────────────────────────
function renderPrompts(area) {
  const q = state.searchQuery.toLowerCase();
  const ind = state.industryFilter;

  // Industry filter dropdown
  let html = `<div style="margin-bottom:16px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
    <label for="industryFilter" style="font-size:0.82rem;color:var(--text-muted);">Industry:</label>
    <select id="industryFilter" style="padding:6px 10px;background:var(--surface-1);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-family:var(--font);font-size:0.82rem;outline:none;">
      ${Object.entries(INDUSTRY_LABELS).map(([k, v]) =>
        `<option value="${k}"${k === ind ? ' selected' : ''}>${esc(v)}</option>`
      ).join('')}
    </select>
  </div>`;

  let hasResults = false;

  for (const group of PROMPT_LIBRARY) {
    const examples = group.examples.filter(ex => {
      const matchInd = ind === 'all' || ex.industry === ind;
      const matchQ = !q || ex.title.toLowerCase().includes(q) || ex.prompt.toLowerCase().includes(q);
      return matchInd && matchQ;
    });
    if (examples.length === 0) continue;
    hasResults = true;

    const compName = group.component.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    html += `<div class="prompt-group">
      <div class="prompt-group-title">${esc(compName)}</div>`;

    for (const ex of examples) {
      html += `<div class="prompt-card">
        <div class="prompt-header">
          <span class="prompt-title">${esc(ex.title)}</span>
          <span class="industry-badge ${ex.industry}">${esc(INDUSTRY_LABELS[ex.industry] || ex.industry)}</span>
        </div>
        <div class="prompt-text">${esc(ex.prompt)}</div>
        <button class="prompt-copy-btn" data-prompt="${esc(ex.prompt)}">Copy prompt</button>
      </div>`;
    }
    html += '</div>';
  }

  if (!hasResults) {
    html += '<div class="empty-state">No prompts match your filters.</div>';
  }

  area.innerHTML = html;
}

// ── Progress update (called after checkbox change) ──────────────────────────
export function updateChecklistProgress() {
  if (state.activeTab !== 'checklist') return;
  const area = document.getElementById('contentArea');
  if (area) renderChecklist(area);
}
