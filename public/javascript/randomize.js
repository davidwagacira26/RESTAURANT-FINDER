// randomize.js

import { restaurants } from './restaurantdata.js';

function handleError(error) {
    console.error('Error in randomize.js:', error);
}

try {
    function updateRandomRestaurant() {
        if (!Array.isArray(restaurants) || restaurants.length === 0) {
            console.error('Restaurants data is not valid:', restaurants);
            throw new Error('Invalid restaurants data');
        }

        var randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
        
        console.log('Selected restaurant:', randomRestaurant); // Debugging

        if (!randomRestaurant || typeof randomRestaurant !== 'object') {
            console.error('Invalid restaurant selected:', randomRestaurant);
            throw new Error('Invalid restaurant data');
        }

        document.getElementById('randomizer-name').textContent = randomRestaurant.name || 'Restaurant Name';
        document.getElementById('randomizer-image').src = randomRestaurant.image || '/placeholder.svg?height=200&width=300';
        document.getElementById('randomizer-image').alt = randomRestaurant.name || 'Restaurant Image';
        
        // Update to always show cuisine, with more detailed fallback
        var cuisineText;
        if (randomRestaurant.cuisine && typeof randomRestaurant.cuisine === 'string' && randomRestaurant.cuisine.trim() !== '') {
            cuisineText = `Discover the authentic taste of ${randomRestaurant.cuisine} cuisine!`;

        } else {
            console.warn('Missing or invalid cuisine for restaurant:', randomRestaurant.name);
            cuisineText = 'Experience unique flavors of our specially curated cuisine!';
        }
        document.getElementById('randomizer-description').textContent = cuisineText;

        var viewButton = document.getElementById('randomizer-link');
        viewButton.href = randomRestaurant.link || '#';
        viewButton.innerHTML = '<i data-lucide="eye"></i> View Restaurant';
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons(); // Recreate icons to ensure the eye icon is displayed
        }
    }

    function showSpinningDice() {
        var randomizeButton = document.getElementById('randomize-button');
        var originalContent = randomizeButton.innerHTML;
        
        // Show spinning dice
        randomizeButton.innerHTML = '<i data-lucide="dice-3" class="spinning-dice"></i>';
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
        randomizeButton.disabled = true;

        // Wait 1 second then update
        setTimeout(function() {
            randomizeButton.innerHTML = originalContent;
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
            randomizeButton.disabled = false;
            updateRandomRestaurant();
        }, 1000);
    }

    function initializeRandomizer() {
        if (!window.location.pathname.includes('/public/views/recommendations.html')) {
            updateRandomRestaurant();
            
            var randomizeButton = document.getElementById('randomize-button');
            if (randomizeButton) {
                randomizeButton.addEventListener('click', showSpinningDice);
            }
        }
    }

    // Add CSS for spinning animation
    var style = document.createElement('style');
    style.textContent = `
        .spinning-dice {
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeRandomizer);
    } else {
        initializeRandomizer();
    }

} catch (error) {
    handleError(error);
}