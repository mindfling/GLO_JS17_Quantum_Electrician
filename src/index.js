'use strict';
/** Quantum electrician Diploma project 
 * https://github.com/mindfling/GLO_JS17_Quantum_Electrician
*/

import togglePopup from './modules/togglePopup';
import topSlider from './modules/topSlider.js';
import Carousel from './modules/sliderCarousel';
import accordeon from './modules/accordeon';
import handleMenu from './modules/handleMenu';
import scrollUp from './modules/scrollUp';
import sendForm from './modules/sendForm';


togglePopup();
topSlider();
accordeon();
handleMenu();
scrollUp();
sendForm();


const carousel = new Carousel({
    main: '.services-elements',
    wrap: '.services-carousel',
    next: '.arrow-right',
    prev: '.arrow-left',
    slidesToShow: 3
});
carousel.init();
