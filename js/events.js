import { state } from './state.js';
import { renderTabs, renderMockup, renderBrowser, renderHeroBgPicker, applyHeroBg,
         showTooltip, hideTooltip, syncBrowserHighlight } from './render.js';
import { debounce } from './utils.js';

let currentHovered = null;

export function initEvents() {

  // Layout tab clicks
  document.getElementById('layoutTabs').addEventListener('click', e => {
    const btn = e.target.closest('[data-layout]');
    if (!btn) return;
    state.activeLayout = btn.dataset.layout;
    state.activeComp = null;
    renderTabs();
    renderMockup();
    renderBrowser();
    hideTooltip();
    currentHovered = null;
  });

  // Component hover in mockup
  const mockupArea = document.getElementById('mockupArea');

  mockupArea.addEventListener('mouseover', e => {
    const comp = e.target.closest('[data-comp]');
    if (comp === currentHovered) return;
    if (currentHovered) currentHovered.classList.remove('hovered');
    currentHovered = comp;
    if (!comp) { hideTooltip(); state.activeComp = null; syncBrowserHighlight(null); return; }
    comp.classList.add('hovered');
    const id = comp.dataset.comp;
    state.activeComp = id;
    showTooltip(id, comp);
    syncBrowserHighlight(id);
  });

  mockupArea.addEventListener('mouseleave', () => {
    if (currentHovered) { currentHovered.classList.remove('hovered'); currentHovered = null; }
    hideTooltip();
    state.activeComp = null;
    syncBrowserHighlight(null);
  });

  // Browser item click → scroll to component in mockup
  document.getElementById('browserList').addEventListener('click', e => {
    const item = e.target.closest('.browser-item');
    if (!item || item.classList.contains('missing')) return;
    const id = item.dataset.compId;
    const target = document.querySelector(`#mockupFrame [data-comp="${id}"]`);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    target.classList.add('hovered');
    if (currentHovered && currentHovered !== target) currentHovered.classList.remove('hovered');
    currentHovered = target;
    state.activeComp = id;
    showTooltip(id, target);
    syncBrowserHighlight(id);
  });

  // Search input
  const search = document.getElementById('compSearch');
  search.addEventListener('input', debounce(() => {
    state.searchQuery = search.value.trim();
    renderBrowser();
  }, 150));

  // Browser toggle
  document.getElementById('browserToggle').addEventListener('click', () => {
    state.browserOpen = !state.browserOpen;
    document.getElementById('compBrowser').classList.toggle('hidden', !state.browserOpen);
    document.getElementById('browserToggle').classList.toggle('active', state.browserOpen);
  });

  // Outlines toggle
  document.getElementById('outlinesToggle').addEventListener('click', () => {
    state.outlinesOn = !state.outlinesOn;
    document.getElementById('mockupFrame').classList.toggle('show-outlines', state.outlinesOn);
    document.getElementById('outlinesToggle').classList.toggle('active', state.outlinesOn);
  });

  // Dummy content toggle
  document.getElementById('dummyToggle').addEventListener('click', () => {
    state.dummyMode = !state.dummyMode;
    document.getElementById('dummyToggle').classList.toggle('active', state.dummyMode);
    renderMockup();
    hideTooltip();
    currentHovered = null;
  });

  // Hero BG swatch picker
  document.getElementById('heroBgPicker').addEventListener('click', e => {
    const btn = e.target.closest('[data-bg]');
    if (!btn) return;
    state.heroBg = btn.dataset.bg;
    renderHeroBgPicker();
    applyHeroBg();
  });
}
