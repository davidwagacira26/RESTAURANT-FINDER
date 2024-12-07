document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        isMenuOpen = !isMenuOpen;
        sideMenu.style.left = isMenuOpen ? '0' : '-250px';
    });

    document.addEventListener('click', function(event) {
        if (isMenuOpen && !sideMenu.contains(event.target) && event.target !== menuToggle) {
            isMenuOpen = false;
            sideMenu.style.left = '-250px';
        }
    });

    sideMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});