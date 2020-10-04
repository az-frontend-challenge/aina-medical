
// Import local modules
import '@modules/mobile-nav';
import '@modules/lazyload';
import '@modules/scrollspy';
import '@modules/creditsAlert';

window.addEventListener('DOMContentLoaded', function () {
    const el = document.querySelector('header nav a:nth-of-type(1)');
    if (el) el.classList.toggle('active');

    const el2 = document.querySelector('#mobile-nav li a:nth-of-type(1)');
    if (el2) el2.classList.toggle('active');
});