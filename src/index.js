'use strict';
/** Quantum electrician Diploma project */

import togglePopup from './modules/togglePopup';
import sendForm from './modules/sendForm';
import handleMenu from './modules/handleMenu';
import scrollUp from './modules/scrollUp';
import topSlider from './modules/topSlider.js';
import Carousel from './modules/sliderCarousel';
import accordeon from './modules/accordeon';

topSlider();
togglePopup();
handleMenu();
scrollUp();
accordeon();
sendForm();


const carousel = new Carousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    next: '.arrow-right',
    prev: '.arrow-left',
    slidesToShow: 3
});
carousel.init();

