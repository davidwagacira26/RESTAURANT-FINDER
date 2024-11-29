document.addEventListener('DOMContentLoaded', (event) => {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
});