document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const listRestaurantBtn = document.getElementById('listRestaurant');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:nairobidining@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoLink;
    });

    listRestaurantBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        const mailtoLink = `mailto:nairobidining@gmail.com?subject=${encodeURIComponent("Interested in Listing My Restaurant")}&body=${encodeURIComponent("I'm interested in having my restaurant listed on Nairobi Feast. Please provide me with more information.")}`;

        window.location.href = mailtoLink;
    });
});