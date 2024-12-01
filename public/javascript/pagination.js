// Pagination variables
let currentPage = 1;
const itemsPerPage = 9;
let totalPages = 1;

// Pagination elements
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const restaurantGrid = document.getElementById('restaurant-grid');
const restaurantsSection = document.querySelector('.restaurants-list');

function updatePagination() {
    // Get all restaurant cards
    let restaurantCards = Array.from(restaurantGrid.children);
    
    // Filter out any hidden restaurants
    restaurantCards = restaurantCards.filter(card => !card.classList.contains('hidden'));
    
    totalPages = Math.ceil(restaurantCards.length / itemsPerPage);
    
    // Ensure currentPage is within valid range
    currentPage = Math.max(1, Math.min(currentPage, totalPages));
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Show/hide cards based on their position
    restaurantCards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    console.log(`Displaying restaurants ${startIndex + 1} to ${Math.min(endIndex, restaurantCards.length)} of ${restaurantCards.length}`);
}

function scrollToRestaurants() {
    const restaurantsTop = restaurantsSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo(0, restaurantsTop);
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
        scrollToRestaurants();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        scrollToRestaurants();
    }
});

// Initial pagination
document.addEventListener('DOMContentLoaded', () => {
    updatePagination();
    console.log('Initial pagination complete');
});

// Update pagination after search or sort
function updatePaginationAfterFilter() {
    currentPage = 1;
    updatePagination();
}

// Function to add a new restaurant
function addRestaurant(restaurantData) {
    const newCard = document.createElement('div');
    newCard.className = 'restaurant-card';
    newCard.innerHTML = `
        <img src="${restaurantData.image}" alt="${restaurantData.name}">
        <div class="card-content">
            <h3>${restaurantData.name}</h3>
            <p>${restaurantData.cuisine}</p>
            <div class="rating">
                <i data-lucide="star" class="star-icon"></i>
                <span>${restaurantData.rating}</span>
            </div>
        </div>
        <div class="card-footer">
            <div class="location">
                <i data-lucide="map-pin"></i>
                ${restaurantData.location}
            </div>
            <a href="${restaurantData.detailsLink}" class="view-details">View Details</a>
        </div>
    `;
    
    // Append the new card to the end of the restaurant grid
    restaurantGrid.appendChild(newCard);
    
    // Update pagination
    updatePagination();
    
    // Navigate to the last page where the new restaurant was added
    currentPage = totalPages;
    updatePagination();
    
    if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
    console.log(`Added new restaurant: ${restaurantData.name} on page ${totalPages}`);
}

// Expose functions globally
window.updatePaginationAfterFilter = updatePaginationAfterFilter;
window.addRestaurant = addRestaurant;