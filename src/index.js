'use strict';
/** Quantum electrician Diploma project */

import togglePopup from './modules/togglePopup';
import sendForm from './modules/sendForm';

import Carousel from './modules/sliderCarousel';

togglePopup();
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
// carousel.init();

new Carousel({
  main: '.services-elements',
  wrap: '.services-carousel',
  next: '.arrow-right',
  prev: '.arrow-left',
  slidesToShow: 3,
  infinity: true,
}).init();
