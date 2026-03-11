import { renderTabs, renderMockup, renderBrowser, renderHeroBgPicker } from './render.js';
import { initEvents } from './events.js';
import { state } from './state.js';

function init() {
  renderTabs();
  renderMockup();
  renderBrowser();
  renderHeroBgPicker();
  initEvents();

  // Set browser toggle button to active by default (browser is open)
  document.getElementById('browserToggle').classList.add('active');
}

document.addEventListener('DOMContentLoaded', init);
