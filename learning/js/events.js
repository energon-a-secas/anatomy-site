import { state } from './state.js';
import { renderTabs, renderContent, updateChecklistProgress } from './render.js';

let searchTimer = null;
const DEBOUNCE_MS = 200;

function syncLearningTabUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set('tab', state.activeTab);
  history.replaceState(null, '', url);
}

export function initEvents() {
  const tabBar = document.getElementById('tabBar');
  const contentArea = document.getElementById('contentArea');
  const searchInput = document.getElementById('searchInput');

  if (tabBar) {
    tabBar.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-tab]');
      if (!btn) return;
      state.activeTab = btn.dataset.tab;
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      renderTabs();
      renderContent();
      syncLearningTabUrl();
      document.getElementById(`learning-tab-${state.activeTab}`)?.focus();
    });

    tabBar.addEventListener('keydown', (e) => {
      const el = e.target.closest('[data-tab]');
      if (!el) return;
      const tabs = [...tabBar.querySelectorAll('[role="tab"]')];
      const i = tabs.indexOf(el);
      if (i < 0) return;
      let n = i;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        n = (i + 1) % tabs.length;
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        n = (i - 1 + tabs.length) % tabs.length;
      } else if (e.key === 'Home') {
        e.preventDefault();
        n = 0;
      } else if (e.key === 'End') {
        e.preventDefault();
        n = tabs.length - 1;
      } else {
        return;
      }
      const nextId = tabs[n].dataset.tab;
      if (!nextId || nextId === state.activeTab) return;
      state.activeTab = nextId;
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      renderTabs();
      renderContent();
      syncLearningTabUrl();
      document.getElementById(`learning-tab-${nextId}`)?.focus();
    });
  }

  if (contentArea) {
    contentArea.addEventListener('change', (e) => {
      if (e.target.id === 'industryFilter') {
        state.industryFilter = e.target.value;
        renderContent();
        return;
      }
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

      const copyBtn = e.target.closest('.prompt-copy-btn');
      if (copyBtn) {
        const text = copyBtn.dataset.prompt;
        if (text) {
          navigator.clipboard.writeText(text).then(() => {
            copyBtn.classList.add('copied');
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
              copyBtn.classList.remove('copied');
              copyBtn.textContent = 'Copy prompt';
            }, 1500);
          });
        }
        return;
      }

      const codeCopyBtn = e.target.closest('.code-copy-btn');
      if (codeCopyBtn) {
        const code = codeCopyBtn.dataset.code;
        if (code) {
          navigator.clipboard.writeText(code).then(() => {
            codeCopyBtn.textContent = 'Copied!';
            setTimeout(() => {
              codeCopyBtn.textContent = 'Copy Code';
            }, 1500);
          });
        }
      }
    });

  }

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
