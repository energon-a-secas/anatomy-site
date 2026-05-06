import { RESOURCE_CATEGORIES, RESOURCE_ITEMS } from './resources-data.js';

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML;
}

function priorityBadge(priority) {
  const colors = {
    high: 'var(--severity-critical)',
    medium: 'var(--severity-medium)',
    low: 'var(--severity-low)'
  };
  return `<span class="priority-badge" style="background: ${colors[priority]}">${priority}</span>`;
}

function categoryHeader(category, items) {
  const categoryData = RESOURCE_CATEGORIES[category];
  const itemCount = items.length;

  return `
    <div class="category-header">
      <div class="category-title-row">
        <h2 class="category-title">
          <span class="category-icon">${categoryData.icon}</span>
          ${esc(categoryData.label)}
        </h2>
        <div class="category-meta">
          ${priorityBadge(categoryData.priority)}
          <span class="item-count">${itemCount} resources</span>
        </div>
      </div>
    </div>
  `;
}

function resourceCard(item) {
  return `
    <div class="resource-card" data-id="${item.id}" data-category="${item.category}">
      <div class="resource-header">
        <h3 class="resource-label">${esc(item.label)}</h3>
        <span class="resource-category-tag">${esc(item.category)}</span>
      </div>
      <p class="resource-desc">${esc(item.desc)}</p>
      <div class="resource-tip">
        <strong>Pro tip:</strong> ${esc(item.tip)}
      </div>
    </div>
  `;
}

export function renderResources() {
  const area = document.getElementById('contentArea');
  if (!area) return;

  const q = (state.searchQuery || '').toLowerCase();

  // Group items by category
  const itemsByCategory = {};
  RESOURCE_ITEMS.forEach(item => {
    if (!itemsByCategory[item.category]) {
      itemsByCategory[item.category] = [];
    }
    itemsByCategory[item.category].push(item);
  });

  // Filter items if there's a search query
  let filteredCategories = {};
  let totalResources = 0;
  let visibleResources = 0;

  if (q) {
    // Search mode - filter items and only show matching ones
    Object.entries(itemsByCategory).forEach(([category, items]) => {
      const filtered = items.filter(item =>
        item.label.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.tip.toLowerCase().includes(q) ||
        category.toLowerCase().includes(q)
      );
      if (filtered.length > 0) {
        filteredCategories[category] = filtered;
        visibleResources += filtered.length;
      }
    });
    totalResources = RESOURCE_ITEMS.length;
  } else {
    // Normal mode - show all items
    filteredCategories = itemsByCategory;
    totalResources = visibleResources = RESOURCE_ITEMS.length;
  }

  // Render search status
  const searchStatus = q ?
    `<div class="search-status">Showing ${visibleResources} of ${totalResources} resources matching "${esc(q)}"</div>` :
    '';

  // Render all categories
  const categoriesToShow = Object.entries(filteredCategories)
    .sort(([,a], [,b]) => b.length - a.length); // Sort by item count descending

  const categoriesHTML = categoriesToShow.map(([category, items]) => {
    return `
      <section class="resource-category" data-category="${category}">
        ${categoryHeader(category, items)}
        <div class="resource-grid">
          ${items.map(resourceCard).join('')}
        </div>
      </section>
    `;
  }).join('');

  // Show message if no results
  const noResults = (Object.keys(filteredCategories).length === 0) ?
    `<div class="no-results">
       <h3>No resources found</h3>
       <p>No resources match your search for "${esc(q)}". Try different keywords or browse all categories.</p>
     </div>` :
    '';

  area.innerHTML = searchStatus + categoriesHTML + noResults;
}

// Initialize state
export const state = {
  searchQuery: '',
};
