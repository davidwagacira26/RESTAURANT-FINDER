console.log('recommendations.js loaded');

// Custom error handler function
function handleError(error) {
    console.error('Error in recommendations.js:', error);
}

// Wrap all code in try-catch
try {
    // Restaurant data
    const restaurants = [
        // High-end restaurants
        { name: "INTI", cuisine: "Japanese", price: "high-end", rating: 4.5, location:"Westlands", image: "/assets/images/INTI3.jpg", link: "/public/views/inti.html" },
        { name: "Kahani Restaurant", cuisine: "Indian", price: "high-end", rating: 3.9, location:"Limuru Rd", image: "/assets/images/kahani.jpg", link: "/public/views/kahani-restaurant.html" },
        { name: "Jiko Restaurant", cuisine: "African", price: "high-end", rating: 4.5, location:"Tribe Hotel", image: "/assets/images/jiko.jpg", link: "/public/views/jiko-restaurant.html" },
        { name: "Lucca Restaurant", cuisine: "Italian", price: "high-end", rating: 4.6, location:"Chiromo Ln", image: "/assets/images/lucca.jpg", link: "/public/views/lucca-restaurant.html" },
        { name: "Fogo Gaucho", cuisine: "Brazillian", price: "high-end", rating: 4.2, location:"Viking House", image: "/assets/images/fogogaucho.jpg", link: "/public/views/fogo-gaucho.html" },
        { name: "Harvest Restaurant", cuisine: "International", price: "high-end", rating: 4.5, location:"Village Market", image: "/assets/images/harvest.jpg", link: "/public/views/harvestrestaurant.html" },
        { name: "Chophouse Nairobi", cuisine: "African", price: "high-end", rating: 4.5, location:"Elgon Rd", image: "/assets/images/the-chop-house.jpg", link: "/public/views/chophouse-nairobi.html" },
        { name: "La Terrazza Italian Restaurant", cuisine: "Italian", price: "high-end", rating: 4.7, location:"Ngong Rd", image: "/assets/images/laterazza.jpg", link: "/public/views/la-terrazza-restaurant.html" },
        { name: "Upepo Restaurant", cuisine: "African", price: "high-end", rating: 4.2, location:"Peponi Rd", image: "/assets/images/upepo2.jpg", link: "/public/views/upepo-restaurant.html" },
        { name: "Mawimbi Seafood Restaurant", cuisine: "International", price: "high-end", rating: 4.6, location:"Kijabe St", image: "/assets/images/mawimbi2.jpg", link: "/public/views/mawimbi-seafood.html" },
        { name: "Copper the Urban Grill", cuisine: "International", price: "high-end", rating: 4.4, location:"154 James Gichuru Rd", image:"/assets/images/coppertheurbangrill.jpg", link: "/public/views/copper-the-urban-grill.html" },
        { name: "The Larder Restaurant", cuisine: "International", price: "high-end", rating: 3.9, location:"Elgon Rd", image: "/assets/images/thelarder.jpg", link: "/public/views/the-larder-restaurant.html" },
        { name: "Tambourin Restaurant", cuisine: "Lebanese", price: "high-end", rating: 4.4, location:"Chiromo Ln", image: "/assets/images/tambourin.jpg", link: "/public/views/tambourin-restaurant.html" },
        { name: "Talisman Restaurant", cuisine: "International", price: "high-end", rating: 4.5, location:"Ngong Rd", image: "/assets/images/talisman.jpg", link: "/public/views/talisman-restaurant.html" },
        { name: "Inca Restaurant", cuisine: "Peruvian", price: "high-end", rating: 4.4,location:"The Social House", image:"/assets/images/inca.jpg", link: "/public/views/inca-restaurant.html" },
        { name: "Graze Steakhouse", cuisine: "American", price: "high-end", rating: 4.5,location:"Woodvale Grove", image: "/assets/images/grazesteakhouse.jpg", link: "/public/views/graze-steakhouse.html" },
        { name: "Seven Seafood and Grill", cuisine: "Mediterranean", price: "high-end", rating: 4.5,location:"Waiyaki wy", image: "/assets/images/sevenseafoodandgrill.jpg", link: "/public/views/seven-seafood-and-grill.html" },
        { name: "Hero Restaurant", cuisine: "Asian", price: "high-end", rating: 4.6, location:"Limuru Rd", image: "/assets/images/herorestaurant.jpg", link: "/public/views/hero-restaurant.html" },
        { name: "Ezo Restaurant", cuisine: "Japanese", rating: 4.4, price: "high-end", location: "42 Muthithi Rd", image: "/assets/images/ezo2.jpg", link: "/public/views/ezo-restaurant.html" },

        // Mid-range restaurants
        { name: "Botanica - Kitchen and Gin Bar", cuisine: "International", rating: 4.4, price: "mid-range", location: "Westlands", image: "/assets/images/Botanica.jpg", link: "/public/views/botanica.html" },
        { name: "Bambino", cuisine: "Italian", rating: 4.2, price: "mid-range", location: "Westlands", image: "/assets/images/bambino.jpg", link: "/public/views/bambino" },
        { name: "Canopy Cafe", cuisine: "International", rating: 4.1, price: "mid-range", location: "Kilimani", image: "/assets/images/canopy.jpg", link: "/public/views/canopy.html" },
        { name: "Cafe Cassia", cuisine: "International", rating: 4.7, price: "mid-range", location: "Karen", image: "/assets/images/cafecassia.jpg", link: "/public/views/cafecassia.html" },
        { name: "Artisan Blend", cuisine: "International", rating: 4.8, price: "mid-range", location: "Mombasa Rd", image: "/assets/images/artisanblend.jpg", link: "/public/views/artisan-blend.html" },
        { name: "Bao Box", cuisine: "International", price: "mid-range", rating: 4.5, location:"General Mathenge Drive",image:"/assets/images/baobox.jpg", link: "/public/views/bao-box.html" },
        { name: "Mercado - Mexican Kitchen and Gin Bar", cuisine: "Mexican", rating: 4.4, price: "mid-range", location: "Nairobi", image: "/assets/images/mercado.jpg", link: "/public/views/mercado-mexican-kitchen-and-gin-bar" },
        { name: "Pili Restaurant", cuisine: "African", rating: 4.8, price: "mid-range", location: "Westlands", image: "/assets/images/pili.jpg", link: "/public/views/pili-restaurant.html" },
        { name: "Crave Restaurant", cuisine: "International", rating: 4.8, price: "mid-range", location: "Westlands", image: "/assets/images/crave.jpg", link: "/public/views/crave.html" },
        { name: "Spring Noshery", cuisine: "International", rating: 4.0, price: "mid-range", location: "Westlands", image: "/assets/images/springnoshery2.jpg", link: "/public/views/springnoshery.html" },
        { name: "Yunion - Brunch and cafe", cuisine: "International", rating: 4.0, price: "mid-range", location: "Westlands", image: "/assets/images/yunion.jpg", link: "/public/views/yunion-restaurant.html" },
        { name: "Slate - Kitchen and Bar", cuisine: "International", rating: 4.4, price: "mid-range", location: "Mkungu Cl", image: "/assets/images/slate.jpg", link: "/public/views/slate-restaurant.html" },
        { name: "Brew Bistro - Fortis", cuisine: "International", rating: 4.8, price: "mid-range", location: "Westlands", image: "/assets/images/brewbistro.jpg", link: "/public/views/brewbistro.html" },
        { name: "270° Restaurant", cuisine: "International", rating: 4.3, price: "mid-range", location: "Lavington", image: "/assets/images/270°2.jpg", link: "/public/views/270°-restaurant.html" },
        { name: "Meko Restaurant", cuisine: "International", rating: 3.9, price: "mid-range", location: "Peponi Rd", image: "/assets/images/meko.jpg", link: "/public/views/meko-restaurant.html" },
        { name: "Karel T-Lounge", cuisine: "Mediterranean", rating: 4.4, price: "mid-range", location: "Village Market", image: "/assets/images/kareltlounge4.jpg", link: "/public/views/karel-t-lounge.html" },
        { name: "Nairobi street kitchen", cuisine: "International", rating: 4.5, price: "mid-range", location: "Mpaka Rd", image: "/assets/images/nsk.jpg", link: "/public/views/nairobi-street-kitchen.html" },
        { name: "Urban Eatery", cuisine: "International", rating: 4.3, price: "mid-range", location: "Chiromo Rd", image: "/assets/images/urbaneatery.jpg", link: "/public/views/urban-eatery.html" },
    ];

    /**
     * Filters and sorts restaurants based on cuisine and price
     * @param {string} cuisine - The type of cuisine to filter by
     * @param {string} price - The price range to filter by
     * @returns {Array} - Filtered and sorted array of restaurants
     */
    function getRecommendations(cuisine, price) {
        try {
            console.log('getRecommendations called with:', { cuisine, price });
            let filteredRestaurants = restaurants;

            if (cuisine) {
                filteredRestaurants = filteredRestaurants.filter(restaurant => 
                    restaurant.cuisine.toLowerCase() === cuisine.toLowerCase()
                );
            }

            if (price) {
                filteredRestaurants = filteredRestaurants.filter(restaurant => 
                    restaurant.price === price
                );
            }

            return filteredRestaurants.sort((a, b) => b.rating - a.rating);
        } catch (error) {
            handleError(error);
            return []; // Return empty array if filtering fails
        }
    }

    /**
     * Creates HTML for a restaurant card with embedded SVG icons
     * @param {Object} restaurant - Restaurant data object
     * @returns {string} - HTML string for the restaurant card
     */
    function createRestaurantCard(restaurant) {
        return `
            <div class="restaurant-card" tabindex="0" role="button" aria-label="View details for ${restaurant.name}" onclick="window.location.href='${restaurant.link}';" style="cursor: pointer;">
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
                <a href="${restaurant.link}" class="card-link" aria-label="View details for ${restaurant.name}" style="text-decoration: none;"></a>
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

    // Function to get URL parameters
    function getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            cuisine: params.get('cuisine'),
            price: params.get('price')
        };
    }

    function displayRecommendations() {
        try {
            console.log('displayRecommendations called');
            const recommendedRestaurants = document.getElementById('recommended-restaurants');
            const recommendationsInfo = document.getElementById('recommendations-info');

            if (!recommendedRestaurants || !recommendationsInfo) {
                throw new Error('Required DOM elements not found');
            }

            const params = new URLSearchParams(window.location.search);
            const cuisine = params.get('cuisine');
            const price = params.get('price');

            const recommendations = getRecommendations(cuisine, price);
            
            // Update recommendations info
            const cuisineText = cuisine ? `${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} ` : '';
            const priceText = price ? `${price.charAt(0).toUpperCase() + price.slice(1)} ` : '';
            recommendationsInfo.textContent = `${recommendations.length} ${cuisineText}${priceText}restaurant${recommendations.length !== 1 ? 's' : ''} found`;

            // Display restaurants
            if (recommendations.length > 0) {
                recommendedRestaurants.innerHTML = recommendations
                    .map(createRestaurantCard)
                    .join('');
            } else {
                recommendedRestaurants.innerHTML = '<p class="no-results">No restaurants found matching your criteria. Please try different options.</p>';
            }
        } catch (error) {
            handleError(error);
            // Display error message to user
            const container = document.getElementById('recommended-restaurants');
            if (container) {
                container.innerHTML = '<p class="error-message">Sorry, there was an error loading the recommendations. Please try again later.</p>';
            }
        }
    }

    // Initialize only if we're on the recommendations page
    if (window.location.pathname.includes('/recommendations')) {
        document.addEventListener('DOMContentLoaded', displayRecommendations);
    }

    // Refresh Lucide icons
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }

    // Function to initialize the recommendation form
    function initializeRecommendationForm(form) {
        const body = document.body;

         // Create modal elements
         const modal = document.createElement('div');
         modal.className = 'modal';
         modal.style.display = 'none';
         modal.innerHTML = `
            <div class="modal-content">
                 <div class="modal-header">
                     <h2>Finding the Best Restaurants for You</h2>
                 </div>
                 <div class="loader-container">
                     <div class="loader">
                         <svg viewBox="0 0 80 80">
                             <circle id="test" cx="40" cy="40" r="32"></circle>
                         </svg>
                     </div>
                     <div class="loader triangle">
                         <svg viewBox="0 0 86 80">
                             <polygon points="43 8 79 72 7 72"></polygon>
                         </svg>
                     </div>
                     <div class="loader">
                         <svg viewBox="0 0 80 80">
                             <rect x="8" y="8" width="64" height="64"></rect>
                         </svg>
                     </div>
                 </div>
                 <div class="modal-body">
                     <p>Please wait while we process your request...</p>
                 </div>
             </div>
         `;

        // Append modal to body
        body.appendChild(modal);

        // Add event listener to the form
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show modal
            modal.style.display = 'flex';

            // Simulate processing time
            setTimeout(function() {
                // Hide modal
                modal.style.display = 'none';

                // Submit the form
                form.submit();
            }, 3000);
        });

       // Add styles for the modal and loader
       const style = document.createElement('style');
       style.textContent = `
           .modal {
               display: none;
               position: fixed;
               z-index: 1000;
               left: 0;
               top: 0;
               width: 100%;
               height: 100%;
               background-color: rgba(0,0,0,0.5);
               justify-content: center;
               align-items: center;
           }
           .modal-content {
               background-color: #fff;
               padding: 20px;
               border-radius: 5px;
               text-align: center;
               max-width: 80%;
           }
           .modal-header {
               margin-bottom: 20px;
           }
           .modal-header h2 {
               margin: 0;
           }
           .loader-container {
               display: flex;
               justify-content: center;
               align-items: center;
               margin: 20px 0;
           }
           .loader {
               --path: #2F3545;
               --dot: #5628EE;
               --duration: 3s;
               width: 44px;
               height: 44px;
               position: relative;
           }
           .loader:before {
               content: '';
               width: 6px;
               height: 6px;
               border-radius: 50%;
               position: absolute;
               display: block;
               background: var(--dot);
               top: 37px;
               left: 19px;
               transform: translate(-18px, -18px);
               animation: dotRect var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
           }
           .loader svg {
               display: block;
               width: 100%;
               height: 100%;
           }
           .loader svg rect,
           .loader svg polygon,
           .loader svg circle {
               fill: none;
               stroke: var(--path);
               stroke-width: 10px;
               stroke-linejoin: round;
               stroke-linecap: round;
           }
           .loader svg polygon {
               stroke-dasharray: 145 221;
               stroke-dashoffset: 0;
               animation: pathTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
           }
           .loader svg rect {
               stroke-dasharray: 192 64 192 64;
               stroke-dashoffset: 0;
               animation: pathRect 3s cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
           }
           .loader svg circle {
               stroke-dasharray: 150 50 150 50;
               stroke-dashoffset: 75;
               animation: pathCircle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
           }
           .loader.triangle {
               width: 48px;
           }
           .loader.triangle:before {
               left: 21px;
               transform: translate(-10px, -18px);
               animation: dotTriangle var(--duration) cubic-bezier(0.785, 0.135, 0.15, 0.86) infinite;
           }
           @keyframes pathTriangle {
               33% {
                   stroke-dashoffset: 74;
               }
               66% {
                   stroke-dashoffset: 147;
               }
               100% {
                   stroke-dashoffset: 221;
               }
           }
           @keyframes dotTriangle {
               33% {
                   transform: translate(0, 0);
               }
               66% {
                   transform: translate(10px, -18px);
               }
               100% {
                   transform: translate(-10px, -18px);
               }
           }
           @keyframes pathRect {
               25% {
                   stroke-dashoffset: 64;
               }
               50% {
                   stroke-dashoffset: 128;
               }
               75% {
                   stroke-dashoffset: 192;
               }
               100% {
                   stroke-dashoffset: 256;
               }
           }
           @keyframes dotRect {
               25% {
                   transform: translate(0, 0);
               }
               50% {
                   transform: translate(18px, -18px);
               }
               75% {
                   transform: translate(0, -36px);
               }
               100% {
                   transform: translate(-18px, -18px);
               }
           }
           @keyframes pathCircle {
               25% {
                   stroke-dashoffset: 125;
               }
               50% {
                   stroke-dashoffset: 175;
               }
               75% {
                   stroke-dashoffset: 225;
               }
               100% {
                   stroke-dashoffset: 275;
               }
           }
       `;
        document.head.appendChild(style);
    }

    // Function to initialize the page
    function initializePage() {
        // First, initialize Lucide icons if available
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }

        // Check which page we're on and initialize appropriate functionality
        if (window.location.pathname.includes('/public/views/recommendations.html')) {
            // We're on the recommendations results page
            displayRecommendations();
        } else {
            // We're on the home page or another page with the recommendation form
            const recommendationForm = document.getElementById('recommendation-form');
            if (recommendationForm) {
                initializeRecommendationForm(recommendationForm);
            }
        }
    }

    // Initialize the page when the DOM is fully loaded
    document.addEventListener('DOMContentLoaded', initializePage);

} catch (error) {
    handleError(error);
}