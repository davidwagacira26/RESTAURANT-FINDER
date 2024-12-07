// randomize.js

import { restaurants } from './restaurantdata.js';

function handleError(error) {
    console.error('Error in randomize.js:', error);
}

try {
    function updateRandomRestaurant() {
        try {
            if (!Array.isArray(restaurants) || restaurants.length === 0) {
                throw new Error('Invalid restaurants data');
            }

            var randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
            
            console.log('Selected restaurant:', randomRestaurant); // Debugging

            if (!randomRestaurant || typeof randomRestaurant !== 'object') {
                throw new Error('Invalid restaurant data');
            }

            var randomizerImage = document.getElementById('randomizer-image');
            
            // Start fade-out effect
            randomizerImage.style.opacity = '0';
            
            setTimeout(() => {
                try {
                    document.getElementById('randomizer-name').textContent = randomRestaurant.name || 'Restaurant Name';
                    randomizerImage.src = randomRestaurant.image || '/placeholder.svg?height=200&width=300';
                    randomizerImage.alt = randomRestaurant.name || 'Restaurant Image';
                    
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

                    // Start fade-in effect
                    randomizerImage.style.opacity = '1';
                } catch (error) {
                    handleError(error);
                }
            }, 300); // Wait for fade-out to complete before updating content
        } catch (error) {
            handleError(error);
        }
    }

    function showSpinningDice() {
        try {
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
                try {
                    randomizeButton.innerHTML = originalContent;
                    if (typeof lucide !== 'undefined' && lucide.createIcons) {
                        lucide.createIcons();
                    }
                    randomizeButton.disabled = false;
                    updateRandomRestaurant();
                } catch (error) {
                    handleError(error);
                }
            }, 1000);
        } catch (error) {
            handleError(error);
        }
    }

    function initializeRandomizer() {
        try {
            if (!window.location.pathname.includes('/public/views/recommendations.html')) {
                updateRandomRestaurant();
                
                var randomizeButton = document.getElementById('randomize-button');
                if (randomizeButton) {
                    randomizeButton.addEventListener('click', showSpinningDice);
                }
            }
        } catch (error) {
            handleError(error);
        }
    }

    // Add CSS for spinning animation and fade effect
    var style = document.createElement('style');
    style.textContent = `
        .spinning-dice {
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        #randomizer-image {
            transition: opacity 0.3s ease-in-out;
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