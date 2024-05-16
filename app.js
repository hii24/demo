document.addEventListener('DOMContentLoaded', function() {
    const burgerMenuBtn = document.querySelector('.burger-menu_btn');
    const burgerMenu = document.querySelector('.burger-menu');

    burgerMenuBtn.addEventListener('click', function() {
        burgerMenu.classList.toggle('open');
        document.body.style.overflow = burgerMenu.classList.contains('open')? 'hidden' : '';
    });

    const popupOverlay = document.querySelector('.popup-overlay');
    const closeButton = document.querySelector('.close-popup');
    const contactButtons = document.querySelectorAll('[data-toggle="contact-popup"]');

    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            popupOverlay.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
});