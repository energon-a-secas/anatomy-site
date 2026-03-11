import { renderTabs, renderMockup, renderBrowser, renderHeroBgPicker } from './render.js';
import { initEvents } from './events.js';
import { state } from './state.js';

function init() {
  renderTabs();
  renderMockup();
  renderBrowser();
  renderHeroBgPicker();
  initEvents();

  // Set initial button states based on default state
  document.getElementById('browserToggle').classList.add('active');
  document.getElementById('outlinesToggle').classList.add('active');
  document.getElementById('dummyToggle').classList.add('active');
}

document.addEventListener('DOMContentLoaded', init);
