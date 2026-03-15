import { state } from './state.js';
import { renderTabs, renderContent, updateChecklistProgress } from './render.js';

let searchTimer = null;
const DEBOUNCE_MS = 200;

export function initEvents() {
  const tabBar = document.getElementById('tabBar');
  const contentArea = document.getElementById('contentArea');
  const searchInput = document.getElementById('searchInput');

  // ── Tab clicks ────────────────────────────────────────────────────────────
  if (tabBar) {
    tabBar.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-tab]');
      if (!btn) return;
      state.activeTab = btn.dataset.tab;
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      renderTabs();
      renderContent();
    });
  }

  // ── Content area delegation ───────────────────────────────────────────────
  if (contentArea) {
    // Checkbox changes (checklist)
    contentArea.addEventListener('change', (e) => {
      if (e.target.type !== 'checkbox') return;
      const id = e.target.dataset.id;
      if (!id) return;

      let checked;
      try { checked = JSON.parse(localStorage.getItem('checklistChecked')) || []; }
      catch { checked = []; }

      if (e.target.checked) {
        if (!checked.includes(id)) checked.push(id);
      } else {
        checked = checked.filter(c => c !== id);
      }
      localStorage.setItem('checklistChecked', JSON.stringify(checked));
      updateChecklistProgress();
    });

    // Category collapse toggle (checklist)
    contentArea.addEventListener('click', (e) => {
      const header = e.target.closest('.checklist-category-header');
      if (header) {
        const catId = header.dataset.cat;
        if (catId) {
          state.collapsedCategories[catId] = !state.collapsedCategories[catId];
          renderContent();
        }
        return;
      }

      // Copy prompt button
      const copyBtn = e.target.closest('.prompt-copy-btn');
      if (copyBtn) {
        const text = copyBtn.dataset.prompt;
        navigator.clipboard.writeText(text).then(() => {
          copyBtn.classList.add('copied');
          copyBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.classList.remove('copied');
            copyBtn.textContent = 'Copy prompt';
          }, 1500);
        });
        return;
      }
    });

    // Industry filter change (prompts)
    contentArea.addEventListener('change', (e) => {
      if (e.target.id === 'industryFilter') {
        state.industryFilter = e.target.value;
        renderContent();
      }
    });
  }

  // ── Search input ──────────────────────────────────────────────────────────
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      clearTimeout(searchTimer);
      searchTimer = setTimeout(() => {
        state.searchQuery = searchInput.value.trim();
        renderContent();
      }, DEBOUNCE_MS);
    });
  }
}
