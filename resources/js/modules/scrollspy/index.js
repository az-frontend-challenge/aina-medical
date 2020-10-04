import VanillaScrollspy from 'vanillajs-scrollspy';

const mainNavbar = document.querySelector('#main-scroll-menu');
if (mainNavbar) {
    const mainScrollspy = new VanillaScrollspy(mainNavbar);
    mainScrollspy.init();
}

const mobileNavbar = document.querySelector('#mobile-nav');
if (mobileNavbar) {
    const mobileScrollspy = new VanillaScrollspy(mobileNavbar);
    mobileScrollspy.init();
}