// Pagination variables
let currentPage = 1;
const itemsPerPage = 9;
let totalPages = 1;

// Pagination elements
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageInfo = document.getElementById('page-info');
const restaurantGrid = document.getElementById('restaurant-grid');

function updatePagination() {
    // Get all restaurant cards
    let restaurantCards = Array.from(restaurantGrid.children);
    
    // Sort the cards so that original cards come first, then any newly added cards
    restaurantCards.sort((a, b) => {
        const aIsOriginal = a.hasAttribute('data-original');
        const bIsOriginal = b.hasAttribute('data-original');
        if (aIsOriginal && !bIsOriginal) return -1;
        if (!aIsOriginal && bIsOriginal) return 1;
        return 0;
    });
    
    // Reorder the cards in the DOM
    restaurantCards.forEach(card => restaurantGrid.appendChild(card));
    
    totalPages = Math.ceil(restaurantCards.length / itemsPerPage);
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // Show/hide cards based on their position
    restaurantCards.forEach((card, index) => {
        card.style.display = (index >= startIndex && index < endIndex) ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePagination();
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
    }
});

// Initial pagination
document.addEventListener('DOMContentLoaded', updatePagination);

// Update pagination after search or sort
function updatePaginationAfterFilter() {
    currentPage = 1;
    updatePagination();
}

// Expose the update function globally
window.updatePaginationAfterFilter = updatePaginationAfterFilter;