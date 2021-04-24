'use strict';
/** Quantum electrician Diploma project */

import togglePopup from './modules/togglePopup';
import sendForm from './modules/sendForm';
import handleMenu from './modules/handleMenu';
import scrollUp from './modules/scrollUp';
import Carousel from './modules/sliderCarousel';

togglePopup();
handleMenu();
scrollUp();
sendForm();

// ЗАПУСК СЛАЙДЕРА КАРУСЕЛИ
// const opty = {
//   main: '.services-elements',
//   wrap: '.services-carousel',
//   next: '.arrow-right',
//   prev: '.arrow-left',
//   slidesToShow: 3,
//   infinity: true
// };
// const carousel = new Carousel(opty);

const carousel = new Carousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    next: '.arrow-right',
    prev: '.arrow-left',
    slidesToShow: 3,
    infinity: true,
});
carousel.init();

// new Carousel({
//   main: '.services-elements',
//   wrap: '.services-carousel',
//   next: '.arrow-right',
//   prev: '.arrow-left',
//   slidesToShow: 3,
//   infinity: true,
// }).init();
