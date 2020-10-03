
// Import local modules
import '@modules/mobile-nav'
import '@modules/lazyload'
import '@modules/scrollspy'

window.onload = function () {
    const el = document.querySelector('header nav a:nth-of-type(1)');
    el.classList.toggle('active');
}