function updateRestaurantOfDay() {
    const restaurantOfDay = restaurants[Math.floor(Math.random() * restaurants.length)];
    document.getElementById('randomizer-name').textContent = restaurantOfDay.name;
    document.getElementById('randomizer-image').src = restaurantOfDay.image;
    document.getElementById('randomizer-image').alt = restaurantOfDay.name;
    document.getElementById('randomizer-description').textContent = `Experience the unique flavors of ${restaurantOfDay.cuisine} cuisine!`;
    const viewButton = document.getElementById('randomizer-link');
    viewButton.href = restaurantOfDay.link;
    viewButton.textContent = 'View Restaurant';
}


document.addEventListener('DOMContentLoaded', function() {
    if (!window.location.pathname.includes('/public/views/recommendations.html')) {
        updateRestaurantOfDay();
    }
});