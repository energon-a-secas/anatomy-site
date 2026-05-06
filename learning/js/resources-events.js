import { renderResources, state } from './resources-render.js';

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function handleSearch(e) {
  state.searchQuery = e.target.value;
  renderResources();
}

export function initResourceEvents() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(handleSearch, 200));
  }

  // Add click handlers for resource cards
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.resource-card');
    if (card) {
      const label = card.querySelector('.resource-label').textContent;
      // Could add analytics or copy-to-clipboard here
      console.log('Resource clicked:', label);
    }
  });
}
