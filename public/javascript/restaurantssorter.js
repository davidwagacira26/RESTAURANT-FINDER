// Restaurant data (normally this would be fetched from a server)
const restaurants = [
    { 
      name: "Botanica - Kitchen and Gin Bar", 
      rating: 4.4, 
      type: "Restaurant", 
      location: "One Africa Place"
    },
    { 
      name: "Bambino - Kitchen and Bar", 
      rating: 4.2, 
      type: "Italian", 
      location: "Westlands"
    },
    { 
      name: "INTI - A Nikkei Experience", 
      rating: 4.5, 
      type: "Japanese", 
      location: "One Africa Place"
    },
    { 
      name: "Canopy Cafe", 
      rating: 4.1, 
      type: "Restaurant", 
      location: "Kilimani"
    },
    { 
      name: "Cafe Cassia", 
      rating: 4.7, 
      type: "Restaurant", 
      location: "Karen"
    },
    { 
      name: "Artisan Blend Cafe", 
      rating: 4.8, 
      type: "Restaurant", 
      location: "Mombasa Road"
    }
  ];
  
  function sortRestaurants(sortBy) {
    let sortedRestaurants = [...restaurants];
  
    switch (sortBy) {
      case 'alphabetical-asc':
        sortedRestaurants.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'alphabetical-desc':
        sortedRestaurants.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'rating-asc':
        sortedRestaurants.sort((a, b) => a.rating - b.rating);
        break;
      case 'rating-desc':
        sortedRestaurants.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sorting (original order)
        break;
    }
  
    return sortedRestaurants;
  }
  
  function applySort() {
    const sortedRestaurants = sortRestaurants(sortSelect.value);
    const restaurantGrid = document.getElementById('restaurant-grid');
    const restaurantCards = Array.from(restaurantGrid.children);
  
    // Sort the actual DOM elements
    restaurantCards.sort((a, b) => {
      const indexA = sortedRestaurants.findIndex(r => r.name === a.querySelector('h3').textContent);
      const indexB = sortedRestaurants.findIndex(r => r.name === b.querySelector('h3').textContent);
      return indexA - indexB;
    });
  
    // Re-append the sorted elements
    restaurantCards.forEach(card => restaurantGrid.appendChild(card));
  }
  
  // Event listener for the sort select
  const sortSelect = document.getElementById('sort-select');
  sortSelect.addEventListener('change', applySort);
  
  // Initial sort (optional, remove if not needed)
  document.addEventListener('DOMContentLoaded', applySort);