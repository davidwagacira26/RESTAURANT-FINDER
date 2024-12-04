// Restaurant data
const restaurants = [
    // High-end restaurants
    { name: "INTI", cuisine: "japanese", price: "high-end", rating: 4.5, image: "/placeholder.svg?height=200&width=300", link: "/public/views/INTI.html" },
    { name: "Kahani Restaurant", cuisine: "indian", price: "high-end", rating: 4.3, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Kahani-Restaurant.html" },
    { name: "Jiko Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.4, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Jiko-Restaurant.html" },
    { name: "Lucca Restaurant", cuisine: "italian", price: "high-end", rating: 4.6, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Lucca-Restaurant.html" },
    { name: "Fogo Gaucho", cuisine: "steakhouse", price: "high-end", rating: 4.2, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Fogo-Gaucho.html" },
    { name: "Harvest Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.1, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Harvest-Restaurant.html" },
    { name: "Chophouse Nairobi", cuisine: "steakhouse", price: "high-end", rating: 4.4, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Chophouse-Nairobi.html" },
    { name: "Le Terrazza Italian Restaurant", cuisine: "italian", price: "high-end", rating: 4.3, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Le-Terrazza-Italian-Restaurant.html" },
    { name: "Tatu Restaurant", cuisine: "steakhouse", price: "high-end", rating: 4.5, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Tatu-Restaurant.html" },
    { name: "Upepo Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.2, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Upepo-Restaurant.html" },
    { name: "Mawimbi Seafood", cuisine: "seafood", price: "high-end", rating: 4.6, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Mawimbi-Seafood.html" },
    { name: "Copper the Urban Grill", cuisine: "steakhouse", price: "high-end", rating: 4.3, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Copper-the-Urban-Grill.html" },
    { name: "The Larder Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.1, image: "/placeholder.svg?height=200&width=300", link: "/public/views/The-Larder-Restaurant.html" },
    { name: "Tamborone Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.0, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Tamborone-Restaurant.html" },
    { name: "Luca Restaurant", cuisine: "italian", price: "high-end", rating: 4.4, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Luca-Restaurant.html" },
    { name: "Talisman Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.5, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Talisman-Restaurant.html" },
    { name: "Inca Restaurant", cuisine: "japanese", price: "high-end", rating: 4.2, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Inca-Restaurant.html" },
    { name: "Graze Steakhouse", cuisine: "steakhouse", price: "high-end", rating: 4.3, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Graze-Steakhouse.html" },
    { name: "Seven seafood and grill", cuisine: "seafood", price: "high-end", rating: 4.4, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Seven-seafood-and-grill.html" },
    { name: "Hero Restaurant", cuisine: "kenyan", price: "high-end", rating: 4.1, image: "/placeholder.svg?height=200&width=300", link: "/public/views/Hero-Restaurant.html" },

    // Mid-range restaurants
    { name: "Botanica - Kitchen and Gin Bar", cuisine: "International", rating: 4.4, price: "mid-range", location: "Nairobi", image: "/assets/images/Botanica.jpg", detailsLink: "/public/views/botanica.html" },
    { name: "Bambino", cuisine: "Italian", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/bambino.jpg", detailsLink: "/public/views/bambino.html" },
    { name: "INTI", cuisine: "Japanese", rating: 4.5, price: "high-end", location: "Nairobi", image: "/assets/images/INTI3.jpg", detailsLink: "/public/views/inti.html" },
    { name: "Canopy Cafe", cuisine: "Cafe", rating: 4.0, price: "mid-range", location: "Nairobi", image: "/assets/images/canopy.jpg", detailsLink: "/public/views/canopy-cafe.html" },
    { name: "Cafe Cassia", cuisine: "Cafe", rating: 4.0, price: "mid-range", location: "Nairobi", image: "/assets/images/cafecassia.jpg", detailsLink: "/public/views/cafecassia.html" },
    { name: "Artisan Blend", cuisine: "Cafe", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/artisanblend.jpg", detailsLink: "/public/views/artisan-blend-cafe.html" },
    { name: "Mercado - Mexican Kitchen and Gin Bar", cuisine: "Mexican", rating: 4.5, price: "high-end", location: "Nairobi", image: "/assets/images/mercado.jpg", detailsLink: "/public/views/mercado-mexican-kitchen-and-gin-bar.html" },
    { name: "Pili Restaurant", cuisine: "African", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/assets/images/pili.jpg", detailsLink: "/public/views/pili-restaurant.html" },
    { name: "Crave Restaurant", cuisine: "International", rating: 3.9, price: "mid-range", location: "Nairobi", image: "/assets/images/crave.jpg", detailsLink: "/public/views/crave-restaurant.html" },
    { name: "Spring Noshery", cuisine: "International", rating: 4.0, price: "mid-range", location: "Nairobi", image: "/assets/images/springnoshery2.jpg", detailsLink: "/public/views/spring-noshery.html" },
    { name: "Yunion - Brunch and cafe", cuisine: "Cafe", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/assets/images/yunion.jpg", detailsLink: "/public/views/yunion-brunch-and-cafe.html" },
    { name: "Kahani Restaurant", cuisine: "Indian", rating: 4.3, price: "high-end", location: "Nairobi", image: "/assets/images/kahani.jpg", detailsLink: "/public/views/kahani-restaurant.html" },
    { name: "Slate - Kitchen and Bar", cuisine: "International", rating: 4.1, price: "mid-range", location: "Nairobi", image: "/assets/images/slate.jpg", detailsLink: "/public/views/slate-kitchen-and-bar.html" },
    { name: "Brew Bistro - Fortis", cuisine: "International", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/brewbistro.jpg", detailsLink: "/public/views/brew-bistro-fortis.html" },
    { name: "270° Restaurant", cuisine: "International", rating: 4.2, price: "high-end", location: "Nairobi", image: "/assets/images/270°2.jpg", detailsLink: "/public/views/270-restaurant.html" },
    { name: "Harvest Restaurant", cuisine: "International", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/assets/images/harvest.jpg", detailsLink: "/public/views/harvest-restaurant.html" },
    { name: "Meko Restaurant", cuisine: "International", rating: 4.1, price: "mid-range", location: "Nairobi", image: "/assets/images/meko.jpg", detailsLink: "/public/views/meko-restaurant.html" },
    { name: "Jiko Restaurant", cuisine: "Kenyan", rating: 4.4, price: "high-end", location: "Nairobi", image: "/assets/images/jiko.jpg", detailsLink: "/public/views/jiko-restaurant.html" },
    { name: "Talisman Restaurant", cuisine: "International", rating: 4.7, price: "high-end", location: "Nairobi", image: "/assets/images/talisman.jpg", detailsLink: "/public/views/talisman-restaurant.html" },
    { name: "Inca Restaurant", cuisine: "Peruvian", rating: 4.4, price: "high-end", location: "Nairobi", image: "/assets/images/inca.jpg", detailsLink: "/public/views/inca-restaurant.html" },
    { name: "Karel T-Lounge", cuisine: "Cafe", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/assets/images/kareltlounge4.jpg", detailsLink: "/public/views/karel-t-lounge.html" },
    { name: "Ezo Restaurant", cuisine: "Japanese", rating: 4.4, price: "high-end", location: "Nairobi", image: "/assets/images/ezo2.jpg", detailsLink: "/public/views/ezo-restaurant.html" },
    { name: "Nairobi street kitchen", cuisine: "International", rating: 4.1, price: "mid-range", location: "Nairobi", image: "/assets/images/nsk.jpg", detailsLink: "/public/views/nairobi-street-kitchen.html" },
    { name: "Fogo Gaucho", cuisine: "Steakhouse", rating: 4.2, price: "high-end", location: "Nairobi", image: "/assets/images/fogogaucho.jpg", detailsLink: "/public/views/fogo-gaucho.html" },
    { name: "Le Terrazza Italian Restaurant", cuisine: "Italian", rating: 4.4, price: "high-end", location: "Nairobi", image: "/assets/images/laterazza.jpg", detailsLink: "/public/views/le-terrazza-italian-restaurant.html" },
    { name: "Upepo Restaurant", cuisine: "International", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/assets/images/upepo2.jpg", detailsLink: "/public/views/upepo-restaurant.html" },
    { name: "Mawimbi Seafood", cuisine: "Seafood", rating: 4.5, price: "high-end", location: "Nairobi", image: "/assets/images/mawimbi2.jpg", detailsLink: "/public/views/mawimbi-seafood.html" },
    { name: "Lucca Restaurant", cuisine: "Italian", rating: 4.6, price: "high-end", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/lucca-restaurant.html" },
    { name: "Chophouse Nairobi", cuisine: "Steakhouse", rating: 4.5, price: "high-end", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/chophouse-nairobi.html" },
    { name: "Tatu Restaurant", cuisine: "International", rating: 4.6, price: "high-end", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/tatu-restaurant.html" },
    { name: "Copper the Urban Grill", cuisine: "Steakhouse", rating: 4.4, price: "high-end", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/copper-the-urban-grill.html" },
    { name: "The Larder Restaurant", cuisine: "International", rating: 4.2, price: "mid-range", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/the-larder-restaurant.html" },
    { name: "Tamborone Restaurant", cuisine: "African", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/tamborone-restaurant.html" },
    { name: "Luca Restaurant", cuisine: "Italian", rating: 4.5, price: "high-end", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/luca-restaurant.html" },
    { name: "Graze Steakhouse", cuisine: "Steakhouse", rating: 4.5, price: "high-end", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/graze-steakhouse.html" },
    { name: "Seven seafood and grill", cuisine: "Seafood", rating: 4.6, price: "high-end", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/seven-seafood-and-grill.html" },
    { name: "Hero Restaurant", cuisine: "Asian", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/hero-restaurant.html" },
    { name: "Urban Eatery", cuisine: "International", rating: 4.3, price: "mid-range", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/urban-eatery.html" },
    { name: "Mama Nilishe", cuisine: "African", rating: 4.1, price: "budget", location: "Nairobi", image: "/placeholder.svg?height=200&width=300", detailsLink: "/public/views/mama-nilishe.html" }
];

// Function to get restaurant recommendations
function getRecommendations(cuisine, price) {
    let filteredRestaurants = restaurants;

    if (cuisine) {
        filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.cuisine === cuisine);
    }

    if (price) {
        filteredRestaurants = filteredRestaurants.filter(restaurant => restaurant.price === price);
    }

    // Sort by rating (highest to lowest)
    filteredRestaurants.sort((a, b) => b.rating - a.rating);

    return filteredRestaurants;
}

function createRestaurantCard(restaurant) {
    return `
        <div class="restaurant-card" tabindex="0" role="button" aria-label="View details for ${restaurant.name}">
            <img src="${restaurant.image}" alt="${restaurant.name}" loading="lazy">
            <div class="card-content">
                <h3>${restaurant.name}</h3>
                <p>${restaurant.cuisine.charAt(0).toUpperCase() + restaurant.cuisine.slice(1)}</p>
                <div class="rating">
                    <svg xmlns="http://www.w3.org/2000/svg" class="star-icon" viewBox="0 0 24 24" fill="#FFD700" width="24" height="24">
                        <path d="M12 .587l3.668 10.825H24L15.832 16.5l3.668 10.825L12 20.675l-7.5 6.65L8.168 16.5 0 11.412h8.332z"/>
                    </svg>
                    <span>${restaurant.rating.toFixed(1)}</span>
                </div>
                <p>Price: ${getPriceRange(restaurant.price)}</p>
            </div>
            <a href="${restaurant.link}" class="card-link" aria-hidden="true"></a>
        </div>
    `;
}

// Helper function to get price range symbols
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

// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        cuisine: params.get('cuisine'),
        price: params.get('price')
    };
}

// Function to display recommendations
function displayRecommendations() {
    const { cuisine, price } = getUrlParams();
    const recommendations = getRecommendations(cuisine, price);
    const recommendedRestaurants = document.getElementById('recommended-restaurants');
    const recommendationsInfo = document.getElementById('recommendations-info');

    // Update the recommendations info
    const resultCount = recommendations.length;
    const cuisineText = cuisine ? `${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} ` : '';
    const priceText = price ? `${price.charAt(0).toUpperCase() + price.slice(1)} ` : '';
    recommendationsInfo.textContent = `${resultCount} ${cuisineText}${priceText}restaurant${resultCount !== 1 ? 's' : ''} found`;

    if (recommendations.length > 0) {
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
        recommendedRestaurants.innerHTML = '<p class="no-results-message">No restaurants found matching your criteria. Please try different options.</p>';
    }

    // Refresh Lucide icons
    lucide.createIcons();
}

// Function to initialize the page
function initializePage() {
    // Check if we're on the recommendations page
    if (window.location.pathname.includes('/public/views/recommendations.html')) {
        // We're on the recommendations page, so display the recommendations
        displayRecommendations();
    }

    // Initialize Lucide icons
    lucide.createIcons();
}

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);