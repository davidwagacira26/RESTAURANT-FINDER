// Function to update Restaurant of the Day
function updateRestaurantOfDay() {
    const restaurantOfDay = restaurants[Math.floor(Math.random() * restaurants.length)];
    document.getElementById('restaurant-of-day-name').textContent = restaurantOfDay.name;
    document.getElementById('restaurant-of-day-image').src = restaurantOfDay.image;
    document.getElementById('restaurant-of-day-image').alt = restaurantOfDay.name;
    document.getElementById('restaurant-of-day-description').textContent = `Experience the unique flavors of ${restaurantOfDay.cuisine} cuisine!`;
    const viewButton = document.getElementById('restaurant-of-day-link');
    viewButton.href = restaurantOfDay.link;
    viewButton.textContent = 'View Restaurant';
}

// Initialize Restaurant of the Day when the page loads
document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('recommendations.html')) {
        updateRestaurantOfDay();
    }
});