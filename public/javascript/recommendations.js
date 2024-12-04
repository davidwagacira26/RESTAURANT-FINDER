// recommendations.js

"use strict";

// Error handling and logging
window.onerror = function(msg, url, lineNo, columnNo, error) {
    console.error('Error: ' + msg + '\nURL: ' + url + '\nLine: ' + lineNo + '\nColumn: ' + columnNo + '\nError object: ' + JSON.stringify(error));
    return false;
};

console.log('recommendations.js loaded');

// Restaurant data
const restaurants = [
    // High-end restaurants
    { name: "INTI", cuisine: "japanese", price: "high-end", rating: 4.5, image: "/assets/images/INTI3.jpg", link: "/public/views/INTI" },
    { name: "Kahani Restaurant", cuisine: "indian", price: "high-end", rating: 4.3, image: "/assets/images/kahani.jpg", link: "/public/views/Kahani-Restaurant" },
    { name: "Jiko Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.4, image: "/assets/images/jiko.jpg", link: "/public/views/Jiko-Restaurant" },
    { name: "Lucca Restaurant", cuisine: "italian", price: "high-end", rating: 4.6, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Lucca-Restaurant" },
    { name: "Fogo Gaucho", cuisine: "steakhouse", price: "high-end", rating: 4.2, image: "/assets/images/fogogaucho.jpg", link: "/public/views/Fogo-Gaucho" },
    { name: "Harvest Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.1, image: "/assets/images/harvest.jpg", link: "/public/views/Harvest-Restaurant" },
    { name: "Chophouse Nairobi", cuisine: "steakhouse", price: "high-end", rating: 4.4, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Chophouse-Nairobi" },
    { name: "Le Terrazza Italian Restaurant", cuisine: "italian", price: "high-end", rating: 4.3, image: "/assets/images/laterazza.jpg", link: "/public/views/Le-Terrazza-Italian-Restaurant" },
    { name: "Tatu Restaurant", cuisine: "steakhouse", price: "high-end", rating: 4.5, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Tatu-Restaurant" },
    { name: "Upepo Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.2, image: "/assets/images/upepo2.jpg", link: "/public/views/Upepo-Restaurant" },
    { name: "Mawimbi Seafood", cuisine: "seafood", price: "high-end", rating: 4.6, image: "/assets/images/mawimbi2.jpg", link: "/public/views/Mawimbi-Seafood" },
    { name: "Copper the Urban Grill", cuisine: "steakhouse", price: "high-end", rating: 4.3, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Copper-the-Urban-Grill" },
    { name: "The Larder Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.1, image: "/placeholder.svg?height=200&width=300", link: "/public/views/The-Larder-Restaurant" },
    { name: "Tamborone Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.0, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Tamborone-Restaurant" },
    { name: "Luca Restaurant", cuisine: "italian", price: "high-end", rating: 4.4, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Luca-Restaurant" },
    { name: "Talisman Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.5, image: "/assets/images/talisman.jpg", link: "/public/views/Talisman-Restaurant" },
    { name: "Inca Restaurant", cuisine: "japanese", price: "high-end", rating: 4.2, image: "/assets/images/inca.jpg", link: "/public/views/Inca-Restaurant" },
    { name: "Graze Steakhouse", cuisine: "steakhouse", price: "high-end", rating: 4.3, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Graze-Steakhouse" },
    { name: "Seven seafood and grill", cuisine: "seafood", price: "high-end", rating: 4.4, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Seven-seafood-and-grill" },
    { name: "Hero Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.1, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Hero-Restaurant" },

    // Mid-range restaurants
    { name: "Botanica - Kitchen and Gin Bar", cuisine: "International", rating: 4.4, price: "mid-range", location: "Nairobi", image: "/assets/images/Botanica.jpg", link: "/public/views/botanica" },
    { name: "Bambino", cuisine: "Italian", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/bambino.jpg", link: "/public/views/bambino" },
    { name: "Canopy Cafe", cuisine: "Cafe", rating: 4.0, price: "mid-range", location: "Nairobi", image: "/assets/images/canopy.jpg", link: "/public/views/canopy-cafe" },
    { name: "Cafe Cassia", cuisine: "Cafe", rating: 4.0, price: "mid-range", location: "Nairobi", image: "/assets/images/cafecassia.jpg", link: "/public/views/cafecassia" },
    { name: "Artisan Blend", cuisine: "Cafe", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/artisanblend.jpg", link: "/public/views/artisan-blend-cafe" },
    { name: "Mercado - Mexican Kitchen and Gin Bar", cuisine: "Mexican", rating: 4.5, price: "high-end", location: "Nairobi", image: "/assets/images/mercado.jpg", link: "/public/views/mercado-mexican-kitchen-and-gin-bar" },
    { name: "Pili Restaurant", cuisine: "African", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/assets/images/pili.jpg", link: "/public/views/pili-restaurant" },
    { name: "Crave Restaurant", cuisine: "International", rating: 3.9, price: "mid-range", location: "Nairobi", image: "/assets/images/crave.jpg", link: "/public/views/crave-restaurant" },
    { name: "Spring Noshery", cuisine: "International", rating: 4.0, price: "mid-range", location: "Nairobi", image: "/assets/images/springnoshery2.jpg", link: "/public/views/spring-noshery" },
    { name: "Yunion - Brunch and cafe", cuisine: "Cafe", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/assets/images/yunion.jpg", link: "/public/views/yunion-brunch-and-cafe" },
    { name: "Slate - Kitchen and Bar", cuisine: "International", rating: 4.1, price: "mid-range", location: "Nairobi", image: "/assets/images/slate.jpg", link: "/public/views/slate-kitchen-and-bar" },
    { name: "Brew Bistro - Fortis", cuisine: "International", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/brewbistro.jpg", link: "/public/views/brew-bistro-fortis" },
    { name: "270° Restaurant", cuisine: "International", rating: 4.2, price: "high-end", location: "Nairobi", image: "/assets/images/270°2.jpg", link: "/public/views/270-restaurant" },
    { name: "Meko Restaurant", cuisine: "International", rating: 4.1, price: "mid-range", location: "Nairobi", image: "/assets/images/meko.jpg", link: "/public/views/meko-restaurant" },
    { name: "Karel T-Lounge", cuisine: "Cafe", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/kareltlounge4.jpg", link: "/public/views/karel-t-lounge" },
    { name: "Ezo Restaurant", cuisine: "Japanese", rating: 4.4, price: "high-end", location: "Nairobi", image: "/assets/images/ezo2.jpg", link: "/public/views/ezo-restaurant" },
    { name: "Nairobi street kitchen", cuisine: "International", rating: 4.1, price: "mid-range", location: "Nairobi", image: "/assets/images/nsk.jpg", link: "/public/views/nairobi-street-kitchen" },
    { name: "Urban Eatery", cuisine: "International", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", link: "/public/views/urban-eatery" },
    { name: "Mama Nilishe", cuisine: "African", rating: 4.1, price: "budget", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", link: "/public/views/mama-nilishe" }
];

/**
 * Filters and sorts restaurants based on cuisine and price
 * @param {string} cuisine - The type of cuisine to filter by
 * @param {string} price - The price range to filter by
 * @returns {Array} - Filtered and sorted array of restaurants
 */
function getRecommendations(cuisine, price) {
    console.log('getRecommendations called with:', { cuisine, price });
    let filteredRestaurants = restaurants;

    if (cuisine) {
        filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.cuisine.toLowerCase() === cuisine.toLowerCase());
    }

    if (price) {
        filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.price === price);
    }

    // Sort by rating (highest to lowest)
    filteredRestaurants.sort((a, b) => b.rating - a.rating);
    
    console.log('Filtered restaurants count:', filteredRestaurants.length);
    return filteredRestaurants;
}

/**
 * Creates HTML for a restaurant card
 * @param {Object} restaurant - Restaurant data object
 * @returns {string} - HTML string for the restaurant card
 */
function createRestaurantCard(restaurant) {
    console.log('Creating card for restaurant:', restaurant.name);
    const starIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;
    const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    
    return `
        <div class="restaurant-card" tabindex="0" role="button" aria-label="View details for ${restaurant.name}">
            <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy" onerror="this.onerror=null; this.src='/placeholder.svg?height=200&width=300';">
            <div class="card-content">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.cuisine.charAt(0).toUpperCase() + restaurant.cuisine.slice(1)}</p>
                <div class="rating">
                    ${starIcon}
                    <span>${restaurant.rating.toFixed(1)}</span>
                </div>
                <p>Price: ${getPriceRange(restaurant.price)}</p>
            </div>
            <div class="card-footer">
                <div class="location">
                    ${locationIcon}
                    ${restaurant.location || ''}
                </div>
            </div>
            <a href="${restaurant.link}" class="card-link" aria-hidden="true"></a>
        </div>
    `;
}

/**
 * Converts price range to a symbol representation
 * @param {string} range - Price range (budget, mid-range, high-end)
 * @returns {string} - Symbol representation of the price range
 */
function getPriceRange(range) {
    switch (range) {
        case 'budget':
            return '$';
        case 'mid-range':
            return '$$';
        case 'high-end':
            return '$$$';
        default:
            return '';
    }
}

/**
 * Extracts cuisine and price parameters from the URL
 * @returns {Object} - Object containing cuisine and price parameters
 */
function getUrlParams() {
    console.log('Getting URL params:', window.location.search);
    const params = new URLSearchParams(window.location.search);
    return {
        cuisine: params.get('cuisine'),
        price: params.get('price')
    };
}

/**
 * Displays restaurant recommendations based on URL parameters
 */
function displayRecommendations() {
    console.log('displayRecommendations called');
    const recommendedRestaurants = document.getElementById('recommended-restaurants');
    const recommendationsInfo = document.getElementById('recommendations-info');

    if (!recommendedRestaurants || !recommendationsInfo) {
        console.error('Required DOM elements not found:', {
            recommendedRestaurants: !!recommendedRestaurants,
            recommendationsInfo: !!recommendationsInfo
        });
        return;
    }

    const { cuisine, price } = getUrlParams();
    const recommendations = getRecommendations(cuisine, price);

    // Update the recommendations info
    const resultCount = recommendations.length;
    const cuisineText = cuisine ? `${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} ` : '';
    const priceText = price ? `${price.charAt(0).toUpperCase() + price.slice(1)} ` : '';
    recommendationsInfo.textContent = `${resultCount} ${cuisineText}${priceText}restaurant${resultCount !== 1 ? 's' : ''} found`;

    if (recommendations.length > 0) {
        console.log('Rendering restaurant cards');
        recommendedRestaurants.innerHTML = recommendations.map(createRestaurantCard).join('');
        
        // Add click event listeners to the restaurant cards
        document.querySelectorAll('.restaurant-card').forEach(card => {
            card.style.cursor = 'pointer';
            card.addEventListener('click', function(event) {
                if (event.target.tagName.toLowerCase() !== 'a') {
                    const link = this.querySelector('.card-link');
                    if (link) {
                        link.click();
                    }
                }
            });
        });
    } else {
        console.log('No restaurants found');
        recommendedRestaurants.innerHTML = '<p class="no-results-message">No restaurants found matching your criteria. Please try different options.</p>';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    console.log('Current pathname:', window.location.pathname);
    
    // Check if we're on the recommendations page
    if (window.location.pathname.includes('/recommendations')) {
        console.log('On recommendations page, displaying recommendations');
        displayRecommendations();
    }
});

// Expose necessary functions globally
window.displayRecommendations = displayRecommendations;
window.getRecommendations = getRecommendations;