// Pagination variables
let currentPage = 1;
let itemsPerPage = getItemsPerPage();
let totalPages = 1;

// Pagination elements
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const restaurantGrid = document.getElementById('restaurant-grid');
const restaurantsSection = document.querySelector('.restaurants-list');

function getItemsPerPage() {
    // Force return 10 for mobile devices
    if (window.innerWidth <= 768) {
        return 10;
    }
    return 9;
}

function updatePagination() {
    // Force update itemsPerPage at the start of pagination
    itemsPerPage = getItemsPerPage();
    
    // Get all restaurant cards and ensure they're visible
    let restaurantCards = Array.from(restaurantGrid.children);
    restaurantCards.forEach(card => card.style.display = ''); // Reset display
    
    // Filter out any hidden restaurants
    restaurantCards = restaurantCards.filter(card => !card.classList.contains('hidden'));
    
    // Calculate total pages based on current itemsPerPage
    totalPages = Math.ceil(restaurantCards.length / itemsPerPage);
    currentPage = Math.max(1, Math.min(currentPage, totalPages));
    
    // Update pagination controls
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    // Calculate start and end indices
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, restaurantCards.length);
    
    // Show/hide cards based on current page
    restaurantCards.forEach((card, index) => {
        if (index >= startIndex && index < endIndex) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    console.log(`Mobile: ${window.innerWidth <= 768}, Items per page: ${itemsPerPage}, Showing ${startIndex + 1} to ${endIndex}`);
}

function scrollToRestaurants() {
    const restaurantsTop = restaurantsSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
        top: restaurantsTop,
        behavior: 'smooth'
    });
}

// Event Listeners
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

// Initialize pagination on load
document.addEventListener('DOMContentLoaded', () => {
    // Force initial itemsPerPage calculation
    itemsPerPage = getItemsPerPage();
    updatePagination();
    console.log('Initialization complete - Items per page:', itemsPerPage);
});

// Handle window resize with immediate update
window.addEventListener('resize', () => {
    const newItemsPerPage = getItemsPerPage();
    if (newItemsPerPage !== itemsPerPage) {
        itemsPerPage = newItemsPerPage;
        currentPage = 1; // Reset to first page on resize
        updatePagination();
        console.log('Resize - New items per page:', itemsPerPage);
    }
});

// Function to update pagination after filter
function updatePaginationAfterFilter() {
    currentPage = 1;
    itemsPerPage = getItemsPerPage(); // Force recalculation
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
            <a href="${restaurantData.link}" class="view-details">View Details</a>
        </div>
    `;
    
    restaurantGrid.appendChild(newCard);
    itemsPerPage = getItemsPerPage(); // Force recalculation
    updatePagination();
    
    if (typeof lucide !== 'undefined' && typeof lucide.createIcons === 'function') {
        lucide.createIcons();
    }
}

// Expose necessary functions globally
window.updatePaginationAfterFilter = updatePaginationAfterFilter;
window.addRestaurant = addRestaurant;