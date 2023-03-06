const mobileMenuOpen = document.querySelector('.navbar-open');
const mobileMenuClose = document.querySelector('.navbar-close');
const navbarBackdrop = document.querySelector('.navbar-backdrop');
const navbar = document.querySelector('.mobile-navbar');

document.addEventListener('DOMContentLoaded', () => {
    mobileMenuClose.addEventListener('click', () => {
        navbar.classList.add('hidden');
        navbarBackdrop.classList.add('hidden');
    });

    mobileMenuOpen.addEventListener('click', () => {
        navbar.classList.remove('hidden');
        navbarBackdrop.classList.remove('hidden');
    });
});