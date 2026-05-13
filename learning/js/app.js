import { state } from './state.js';
import { TABS, renderTabs, renderContent } from './render.js';
import { initEvents } from './events.js';

function init() {
  const allowed = new Set(TABS.map(t => t.id));
  const tab = new URLSearchParams(window.location.search).get('tab');
  if (tab && allowed.has(tab)) state.activeTab = tab;

  renderTabs();
  renderContent();
  initEvents();
}

document.addEventListener('DOMContentLoaded', init);
