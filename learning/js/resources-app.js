import { renderResources } from './resources-render.js';
import { initResourceEvents } from './resources-events.js';

function init() {
  renderResources();
  initResourceEvents();
}

document.addEventListener('DOMContentLoaded', init);
