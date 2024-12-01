document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const restaurantGrid = document.getElementById('restaurant-grid');
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    const restaurantsHeader = document.querySelector('.restaurants-header h2');
    const sortContainer = document.querySelector('.sort-container');
    const originalHeaderText = restaurantsHeader.textContent;
    const restaurantsHero = document.getElementById('restaurants-hero');
    const mainContent = document.querySelector('main');

    function performSearch(redirect = false) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let matchingRestaurants = [];
        let matchCount = 0;

        restaurantCards.forEach(card => {
            const restaurantName = card.querySelector('h3').textContent.toLowerCase();
            if (restaurantName.includes(searchTerm)) {
                card.style.display = 'block';
                card.style.visibility = 'visible';
                card.style.order = '0';
                matchingRestaurants.push(card.outerHTML);
                matchCount++;
            } else {
                card.style.visibility = 'hidden';
                card.style.order = '1';
                card.style.display = 'none';
            }
        });

        updateHeaderText(matchCount, searchTerm);

        if (matchCount === 0) {
            showNoResultsMessage();
        } else {
            removeNoResultsMessage();
        }

        hideHeroSection();

        if (redirect && searchTerm) {
            redirectToSearchResults(searchTerm, matchingRestaurants);
        }
    }

    function redirectToSearchResults(searchTerm, matchingRestaurants) {
        localStorage.setItem('searchResults', JSON.stringify(matchingRestaurants));
        window.location.href = `/public/views/searchresults.html?q=${encodeURIComponent(searchTerm)}`;
    }

    function hideHeroSection() {
        restaurantsHero.style.display = 'none';
        mainContent.style.paddingTop = '120px';
    }

    function showHeroSection() {
        restaurantsHero.style.display = 'block';
        mainContent.style.paddingTop = '60px';
    }

    function updateHeaderText(matchCount, searchTerm) {
        if (searchTerm === '') {
            restaurantsHeader.textContent = originalHeaderText;
            restaurantsHeader.classList.remove('showing-matches');
            sortContainer.style.display = 'flex';
        } else {
            restaurantsHeader.classList.add('showing-matches');
            restaurantsHeader.textContent = `Showing match${matchCount !== 1 ? 'es' : ''} (${matchCount})`;
            sortContainer.style.display = 'none';
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
        showHeroSection();
    }

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const matchingRestaurants = Array.from(restaurantCards)
                .filter(card => card.style.visibility !== 'hidden')
                .map(card => card.outerHTML);
            redirectToSearchResults(searchTerm, matchingRestaurants);
        }
    }

    searchButton.addEventListener('click', function(event) {
        event.preventDefault();
        handleSearch();
    });

    searchInput.addEventListener('input', function() {
        if (this.value === '') {
            resetSearch();
        } else {
            performSearch(false);
        }
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    });

    resetSearch();
});