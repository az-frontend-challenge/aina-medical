import VanillaScrollspy from 'vanillajs-scrollspy';

const mainNavbar = document.querySelector('#main-scroll-menu');
const mainScrollspy = new VanillaScrollspy(mainNavbar);
mainScrollspy.init();

const mobileNavbar = document.querySelector('#mobile-nav');
const mobileScrollspy = new VanillaScrollspy(mobileNavbar);
mobileScrollspy.init();