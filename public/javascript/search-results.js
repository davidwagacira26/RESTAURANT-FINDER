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
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}">
            <div class="card-content">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.type}</p>
                <div class="rating">
                    <i data-lucide="star" class="star-icon"></i>
                    <span>${restaurant.rating}</span>
                </div>
            </div>
            <div class="card-footer">
                <div class="location">
                    <i data-lucide="map-pin"></i>
                    ${restaurant.location}
                </div>
                <a href="${restaurant.detailsLink}" class="view-details">View Details</a>
            </div>
        `;
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