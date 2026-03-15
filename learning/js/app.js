import { renderTabs, renderContent } from './render.js';
import { initEvents } from './events.js';

function init() {
  renderTabs();
  renderContent();
  initEvents();
}

document.addEventListener('DOMContentLoaded', init);
