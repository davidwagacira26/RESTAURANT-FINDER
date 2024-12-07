lucide.createIcons();

document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');
    const contentSections = document.querySelectorAll('.content-section');

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            
            icons.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            contentSections.forEach(section => {
                if (section.id === target) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});