document.addEventListener('DOMContentLoaded', function() {
    // Make entire restaurant card clickable
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    
    restaurantCards.forEach(card => {
        card.style.cursor = 'pointer';
        
        card.addEventListener('click', function(e) {
            // Prevent click on "View Details" button from triggering card click
            if (!e.target.classList.contains('view-details')) {
                const link = this.querySelector('.view-details');
                if (link) {
                    window.location.href = link.href;
                }
            }
        });
    });
});