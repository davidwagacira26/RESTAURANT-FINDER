// restaurantsorter.js

document.addEventListener('DOMContentLoaded', () => {
  const sortSelect = document.getElementById('sort-select');
  const restaurantGrid = document.getElementById('restaurant-grid');

  // Store the original order of restaurants
  const restaurants = Array.from(restaurantGrid.children);

  sortSelect.addEventListener('change', () => {
      const sortValue = sortSelect.value;
      const currentRestaurants = Array.from(restaurantGrid.children);

      currentRestaurants.sort((a, b) => {
          const aName = a.querySelector('h3').textContent.toLowerCase();
          const bName = b.querySelector('h3').textContent.toLowerCase();
          const aRating = parseFloat(a.querySelector('.rating span').textContent);
          const bRating = parseFloat(b.querySelector('.rating span').textContent);

          switch (sortValue) {
              case 'alphabetical-asc':
                  return aName.localeCompare(bName);
              case 'alphabetical-desc':
                  return bName.localeCompare(aName);
              case 'rating-asc':
                  return aRating - bRating;
              case 'rating-desc':
                  return bRating - aRating;
              default:
                  // Reset to original order
                  return restaurants.indexOf(a) - restaurants.indexOf(b);
          }
      });

      // Clear the grid and append sorted restaurants
      restaurantGrid.innerHTML = '';
      currentRestaurants.forEach(restaurant => restaurantGrid.appendChild(restaurant));

      // Update pagination after sorting
      if (window.updatePaginationAfterFilter) {
          window.updatePaginationAfterFilter();
      }
  });
});