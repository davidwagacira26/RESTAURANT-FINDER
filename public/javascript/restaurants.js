// restaurants.js
import { restaurants } from './restaurantdata.js';

document.addEventListener('DOMContentLoaded', () => {
    const restaurantGrid = document.getElementById('restaurant-grid');
    const sortSelect = document.getElementById('sort-select');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageInfo = document.getElementById('page-info');
    const restaurantsSection = document.querySelector('.restaurants-list');
    const restaurantsHeader = document.querySelector('.restaurants-header h2');
    const sortContainer = document.querySelector('.sort-container');
    const originalHeaderText = restaurantsHeader.textContent;
    const restaurantsHero = document.getElementById('restaurants-hero');
    const mainContent = document.querySelector('main');
    const paginationContainer = document.querySelector('.pagination');

    // Pagination variables
    let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
    const itemsPerPage = 9;
    let totalPages = 1;

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
                    <i data-lucide="star" class="star-icon"></i>
                    <span>${restaurant.rating}</span>
                </div>
            </div>
            <div class="card-footer">
                <div class="location">
                    <i data-lucide="map-pin"></i>
                    ${restaurant.location}
                </div>
                <a href="${restaurant.detailsLink}" class="view-details" onclick="event.stopPropagation()">View Details</a>
            </div>
        `;
        card.addEventListener('click', () => {
            window.location.href = restaurant.detailsLink;
        });
        return card;
    }

    function displayRestaurants(restaurantsToDisplay) {
        restaurantGrid.innerHTML = '';
        restaurantsToDisplay.forEach(restaurant => {
            const card = createRestaurantCard(restaurant);
            restaurantGrid.appendChild(card);
        });

        updatePagination();
        lucide.createIcons();
    }

    function updatePagination() {
        let restaurantCards = Array.from(restaurantGrid.children);
        restaurantCards = restaurantCards.filter(card => !card.classList.contains('hidden'));
        
        totalPages = Math.ceil(restaurantCards.length / itemsPerPage);
        currentPage = Math.max(1, Math.min(currentPage, totalPages));
        
        prevPageBtn.disabled = currentPage === 1;
        nextPageBtn.disabled = currentPage === totalPages;
        
        pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        
        restaurantCards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        localStorage.setItem('currentPage', currentPage.toString());
        console.log(`Displaying restaurants ${startIndex + 1} to ${Math.min(endIndex, restaurantCards.length)} of ${restaurantCards.length}`);
    }

    function scrollToRestaurants() {
        const restaurantsTop = restaurantsSection.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo(0, restaurantsTop);
    }

    function sortRestaurants(criteria) {
        let sortedRestaurants = [...restaurants];
        switch (criteria) {
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
        }
        return sortedRestaurants;
    }

    function performSearch(redirect = false) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let matchingRestaurants = [];
        let matchCount = 0;

        restaurants.forEach(restaurant => {
            const restaurantName = restaurant.name.toLowerCase();
            if (restaurantName.includes(searchTerm)) {
                matchingRestaurants.push(restaurant);
                matchCount++;
            }
        });

        if (matchCount === 0) {
            showNoResultsMessage();
            paginationContainer.style.display = 'none';
            restaurantGrid.innerHTML = '';
        } else {
            removeNoResultsMessage();
            displayRestaurants(matchingRestaurants);
            paginationContainer.style.display = 'flex';
        }

        updateHeaderText(matchCount, searchTerm);
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
        displayRestaurants(restaurants);
        removeNoResultsMessage();
        updateHeaderText(0, '');
        showHeroSection();
        paginationContainer.style.display = 'flex';
    }

    function handleSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm) {
            const matchingRestaurants = restaurants.filter(restaurant => 
                restaurant.name.toLowerCase().includes(searchTerm)
            );
            redirectToSearchResults(searchTerm, matchingRestaurants);
        }
    }

    function updatePaginationAfterFilter() {
        currentPage = 1;
        updatePagination();
    }

    function addRestaurant(restaurantData) {
        restaurants.push(restaurantData);
        const newCard = createRestaurantCard(restaurantData);
        restaurantGrid.appendChild(newCard);
        updatePagination();
        currentPage = totalPages;
        updatePagination();
        
        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
        console.log(`Added new restaurant: ${restaurantData.name} on page ${totalPages}`);
    }

    sortSelect.addEventListener('change', () => {
        const sortedRestaurants = sortRestaurants(sortSelect.value);
        displayRestaurants(sortedRestaurants);
        updatePaginationAfterFilter();
    });

    searchButton.addEventListener('click', (event) => {
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

    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePagination();
            scrollToRestaurants();
        }
    });

    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            updatePagination();
            scrollToRestaurants();
        }
    });

    displayRestaurants(restaurants);

    window.updatePaginationAfterFilter = updatePaginationAfterFilter;
    window.addRestaurant = addRestaurant;
});