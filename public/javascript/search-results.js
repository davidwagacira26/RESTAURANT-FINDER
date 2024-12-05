document.addEventListener('DOMContentLoaded', function() {
    const restaurantGrid = document.getElementById('restaurant-grid');
    const searchResultsTitle = document.getElementById('search-results-title');
    const searchQuery = document.getElementById('search-query');

    function getQueryParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            q: params.get('q'),
            results: JSON.parse(localStorage.getItem('searchResults') || '[]')
        };
    }

    function createRestaurantCard(restaurant) {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="card-content">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.type}</p>
                <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFD700" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    <span>${restaurant.rating}</span>
                </div>
            </div>
            <div class="card-footer">
                <div class="location">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="map-pin-icon"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${restaurant.location}
                </div>
                <span class="view-details">View Details</span>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = restaurant.link;
        });
        return card;
    }

    function displaySearchResults() {
        const { q, results } = getQueryParams();
        
        if (q) {
            searchResultsTitle.textContent = 'Search Results';
            searchQuery.textContent = `Showing results for: "${q}"`;
        }

        if (results && results.length > 0) {
            restaurantGrid.innerHTML = '';
            results.forEach(restaurant => {
                const card = createRestaurantCard(restaurant);
                restaurantGrid.appendChild(card);
            });
            
            // Initialize Lucide icons if needed
            if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
                lucide.createIcons();
            }
        } else {
            showNoResultsMessage();
        }
    }

    function showNoResultsMessage() {
        restaurantGrid.innerHTML = '';
        const message = document.createElement('div');
        message.className = 'no-results-message';
        message.textContent = 'No restaurants found matching your search.';
        message.style.gridColumn = '1 / -1';
        message.style.textAlign = 'center';
        message.style.padding = '2rem';
        restaurantGrid.appendChild(message);
    }

    displaySearchResults();
});