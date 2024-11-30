document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const restaurantGrid = document.getElementById('restaurant-grid');
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    const popularRestaurantsHeader = document.querySelector('.popular-restaurants h2');
    const categoriesSection = document.querySelector('.categories');
    const originalHeaderText = popularRestaurantsHeader.textContent;

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let matchCount = 0;

        restaurantCards.forEach(card => {
            const restaurantName = card.querySelector('h3').textContent.toLowerCase();
            const restaurantType = card.querySelector('.card-content p').textContent.toLowerCase();
            if (restaurantName.includes(searchTerm) || restaurantType.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.visibility = 'visible';
                matchCount++;
            } else {
                card.style.visibility = 'hidden';
                card.style.display = 'block'; // Keep the card in the layout
            }
        });

        updateHeaderText(matchCount, searchTerm);
        toggleCategoriesSection(searchTerm);

        if (matchCount === 0) {
            showNoResultsMessage();
        } else {
            removeNoResultsMessage();
        }
    }

    function updateHeaderText(matchCount, searchTerm) {
        if (searchTerm === '') {
            popularRestaurantsHeader.textContent = originalHeaderText;
            popularRestaurantsHeader.classList.remove('showing-matches');
        } else {
            popularRestaurantsHeader.classList.add('showing-matches');
            if (matchCount === 1) {
                popularRestaurantsHeader.textContent = `Showing match (1)`;
            } else {
                popularRestaurantsHeader.textContent = `Showing matches (${matchCount})`;
            }
        }
    }

    function toggleCategoriesSection(searchTerm) {
        if (searchTerm === '') {
            categoriesSection.style.display = 'block';
        } else {
            categoriesSection.style.display = 'none';
        }
    }

    function showNoResultsMessage() {
        removeNoResultsMessage();
        const message = document.createElement('div');
        message.className = 'no-results-message';
        message.textContent = 'No restaurants matching your search.';
        message.style.padding = '1rem 0';
        message.style.color = '#666';
        popularRestaurantsHeader.insertAdjacentElement('afterend', message);
    }

    function removeNoResultsMessage() {
        const existingMessage = document.querySelector('.no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    function resetSearch() {
        searchInput.value = '';
        restaurantCards.forEach(card => {
            card.style.display = 'block';
            card.style.visibility = 'visible';
        });
        removeNoResultsMessage();
        updateHeaderText(0, '');
        toggleCategoriesSection('');
    }

    searchInput.addEventListener('input', performSearch);

    searchButton.addEventListener('click', performSearch);

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            performSearch();
        }
    });

    searchInput.addEventListener('search', function() {
        if (this.value === '') {
            resetSearch();
        }
    });
});