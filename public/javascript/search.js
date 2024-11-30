document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const restaurantGrid = document.getElementById('restaurant-grid');
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    const restaurantsHeader = document.querySelector('.restaurants-header h2');
    const sortContainer = document.querySelector('.sort-container');
    const originalHeaderText = restaurantsHeader.textContent;

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let matchCount = 0;

        restaurantCards.forEach(card => {
            const restaurantName = card.querySelector('h3').textContent.toLowerCase();
            if (restaurantName.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.visibility = 'visible';
                card.style.order = '0';
                matchCount++;
            } else {
                card.style.visibility = 'hidden';
                card.style.order = '1';
                // Keep the card in the layout to maintain grid structure
                card.style.display = 'block';
            }
        });

        updateHeaderText(matchCount, searchTerm);

        if (matchCount === 0) {
            showNoResultsMessage();
        } else {
            removeNoResultsMessage();
        }
    }

    function updateHeaderText(matchCount, searchTerm) {
        if (searchTerm === '') {
            restaurantsHeader.textContent = originalHeaderText;
            restaurantsHeader.classList.remove('showing-matches');
            sortContainer.style.display = 'flex'; // Show sort container
        } else {
            restaurantsHeader.classList.add('showing-matches');
            if (matchCount === 1) {
                restaurantsHeader.textContent = `Showing match (1)`;
            } else {
                restaurantsHeader.textContent = `Showing matches (${matchCount})`;
            }
            sortContainer.style.display = 'none'; // Hide sort container
        }
    }

    function showNoResultsMessage() {
        removeNoResultsMessage();
        const message = document.createElement('div');
        message.className = 'no-results-message';
        message.textContent = 'Restaurant not listed yet.';
        message.style.gridColumn = '1 / -1';
        message.style.textAlign = 'center';
        message.style.padding = '2rem';
        restaurantGrid.appendChild(message);
    }

    function removeNoResultsMessage() {
        const existingMessage = restaurantGrid.querySelector('.no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    function resetSearch() {
        searchInput.value = '';
        restaurantCards.forEach(card => {
            card.style.display = 'block';
            card.style.visibility = 'visible';
            card.style.order = '0';
        });
        removeNoResultsMessage();
        updateHeaderText(0, '');
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

    performSearch();
});