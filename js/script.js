import hamburger from './modules/hamburger';
import slider from './modules/slider';
import animation from './modules/animation';
import scrolling from './modules/scrolling';
import coaches from './modules/coaches';

$(document).ready(function () {

    hamburger();
    coaches();
    slider();
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200
    }).init();
    animation();
    scrolling();
});



