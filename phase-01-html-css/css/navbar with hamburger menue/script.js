
document.addEventListener('DOMContentLoaded', function () {

    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu-items');

    toggleButton.addEventListener('click', function () {

        mobileMenu.classList.toggle('active');

        const isOpen = mobileMenu.classList.contains('active');

        toggleButton.setAttribute('aria-expanded', String(isOpen));
        toggleButton.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );

    });

});
