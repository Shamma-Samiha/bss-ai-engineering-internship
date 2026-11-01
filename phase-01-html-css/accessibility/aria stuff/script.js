
document.addEventListener('DOMContentLoaded', function () {

    const header = document.querySelector('.accordion-header');
    const content = document.querySelector('.accordion-content');

    function toggleAccordion() {

        const expanded =
            header.getAttribute('aria-expanded') === 'true';

        // Update expanded state
        header.setAttribute('aria-expanded', String(!expanded));

        // Update content visibility
        content.setAttribute('aria-hidden', String(expanded));

        console.log('Accordion header clicked');
        console.log(
            'aria-expanded:',
            header.getAttribute('aria-expanded')
        );
    }

    // Mouse click
    header.addEventListener('click', toggleAccordion);

    // Keyboard support
    header.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            toggleAccordion();
        }
    });

});
