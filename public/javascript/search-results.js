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

    function displaySearchResults() {
        const { q, results } = getQueryParams();
        
        if (q) {
            searchResultsTitle.textContent = 'Search Results';
            searchQuery.textContent = `Showing results for: "${q}"`;
        }

        if (results && results.length > 0) {
            restaurantGrid.innerHTML = results.join('');
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