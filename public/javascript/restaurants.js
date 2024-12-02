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
    const originalHeaderText = restaurantsHeader ? restaurantsHeader.textContent : '';
    const restaurantsHero = document.getElementById('restaurants-hero');
    const mainContent = document.querySelector('main');
    const paginationContainer = document.querySelector('.pagination');

    const isHomePage = window.location.pathname === '/' || window.location.pathname.endsWith('index.html');

    // Pagination variables
    let currentPage = 1;
    const itemsPerPage = 9;
    let totalPages = 1;

    // Store the current sort criteria
    let currentSortCriteria = 'default';

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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star-icon"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
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
            sessionStorage.setItem('lastSortCriteria', currentSortCriteria);
            sessionStorage.setItem('lastPage', currentPage);
            window.location.href = restaurant.detailsLink;
        });
        return card;
    }

    function displayRestaurants(restaurantsToDisplay) {
        if (!restaurantGrid) return;
        restaurantGrid.innerHTML = '';
        restaurantsToDisplay.forEach(restaurant => {
            const card = createRestaurantCard(restaurant);
            restaurantGrid.appendChild(card);
        });

        updatePagination();

        // Initialize Lucide icons
        if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }

    function updatePagination() {
        if (!restaurantGrid || !prevPageBtn || !nextPageBtn || !pageInfo) return;
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
    }

    function scrollToRestaurants() {
        if (restaurantsSection) {
            const restaurantsTop = restaurantsSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo(0, restaurantsTop);
        }
    }

    function sortRestaurants(criteria, restaurantsArray = restaurants) {
        let sortedRestaurants = [...restaurantsArray];
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
            case 'cuisines-asc':
                sortedRestaurants.sort((a, b) => a.type.localeCompare(b.type));
                break;
            case 'cuisines-desc':
                sortedRestaurants.sort((a, b) => b.type.localeCompare(a.type));
                break;
        }
        return sortedRestaurants;
    }

    function performSearch(redirect = false) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let matchingRestaurants = restaurants.filter(restaurant => 
            restaurant.name.toLowerCase().includes(searchTerm) ||
            restaurant.type.toLowerCase().includes(searchTerm) ||
            restaurant.location.toLowerCase().includes(searchTerm)
        );

        if (isHomePage && !redirect) {
            // On homepage, only update search button state
            updateSearchButtonState();
        } else if (redirect) {
            localStorage.setItem('searchResults', JSON.stringify(matchingRestaurants));
            window.location.href = `/public/views/searchresults.html?q=${encodeURIComponent(searchTerm)}`;
        } else {
            if (matchingRestaurants.length === 0) {
                showNoResultsMessage();
                if (paginationContainer) paginationContainer.style.display = 'none';
                if (restaurantGrid) restaurantGrid.innerHTML = '';
            } else {
                removeNoResultsMessage();
                displayRestaurants(matchingRestaurants);
                if (paginationContainer) paginationContainer.style.display = 'flex';
            }

            updateHeaderText(matchingRestaurants.length, searchTerm);
            if (restaurantsHero) hideHeroSection();
        }
    }

    function hideHeroSection() {
        if (restaurantsHero) restaurantsHero.style.display = 'none';
        if (mainContent) mainContent.style.paddingTop = '120px';
    }

    function showHeroSection() {
        if (restaurantsHero) restaurantsHero.style.display = 'block';
        if (mainContent) mainContent.style.paddingTop = '60px';
    }

    function updateHeaderText(matchCount, searchTerm) {
        if (!restaurantsHeader) return;
        if (searchTerm === '') {
            restaurantsHeader.textContent = originalHeaderText;
            restaurantsHeader.classList.remove('showing-matches');
            if (sortContainer) sortContainer.style.display = 'flex';
        } else {
            restaurantsHeader.classList.add('showing-matches');
            restaurantsHeader.textContent = `Showing match${matchCount !== 1 ? 'es' : ''} (${matchCount})`;
            if (sortContainer) sortContainer.style.display = 'none';
        }
    }

    function showNoResultsMessage() {
        removeNoResultsMessage();
        if (!restaurantGrid) return;
        const message = document.createElement('div');
        message.className = 'no-results-message';
        message.textContent = 'No restaurants found matching your search.';
        message.style.gridColumn = '1 / -1';
        message.style.textAlign = 'center';
        message.style.padding = '2rem';
        restaurantGrid.appendChild(message);
    }

    function removeNoResultsMessage() {
        if (!restaurantGrid) return;
        const existingMessage = restaurantGrid.querySelector('.no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    function resetSearch() {
        if (searchInput) searchInput.value = '';
        displayRestaurants(restaurants);
        removeNoResultsMessage();
        updateHeaderText(0, '');
        showHeroSection();
        if (paginationContainer) paginationContainer.style.display = 'flex';
        updateSearchButtonState();
    }

    function handleSearch() {
        if (searchInput.value.trim() !== '') {
            performSearch(true);
        }
    }

    function updatePaginationAfterFilter() {
        currentPage = 1;
        updatePagination();
    }

    function updateSearchButtonState() {
        if (searchButton) {
            searchButton.disabled = searchInput.value.trim() === '';
        }
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSortCriteria = sortSelect.value;
            const sortedRestaurants = sortRestaurants(currentSortCriteria);
            displayRestaurants(sortedRestaurants);
            updatePaginationAfterFilter();
        });
    }

    if (searchButton) {
        searchButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (!searchButton.disabled) {
                handleSearch();
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', function() {
            updateSearchButtonState();
            if (this.value === '') {
                resetSearch();
            } else if (!isHomePage) {
                performSearch(false);
            }
        });

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                if (this.value.trim() !== '') {
                    handleSearch();
                }
            }
        });
    }

    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updatePagination();
                scrollToRestaurants();
            }
        });
    }

    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                updatePagination();
                scrollToRestaurants();
            }
        });
    }

    // Initialize the page
    if (!isHomePage) {
        const lastSortCriteria = sessionStorage.getItem('lastSortCriteria');
        const lastPage = sessionStorage.getItem('lastPage');
        if (lastSortCriteria) {
            currentSortCriteria = lastSortCriteria;
            sessionStorage.removeItem('lastSortCriteria');
        }
        if (lastPage) {
            currentPage = parseInt(lastPage);
            sessionStorage.removeItem('lastPage');
        }
        if (sortSelect) sortSelect.value = currentSortCriteria;
        displayRestaurants(sortRestaurants(currentSortCriteria));
    }
    updateSearchButtonState();

    // Expose necessary functions to the global scope
    window.updatePaginationAfterFilter = updatePaginationAfterFilter;
    window.performSearch = performSearch;
});