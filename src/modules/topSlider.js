/**
 * Главный слайдер в хэдере Реализовать слайдер следующим образом:
 * - три слайда, у каждого свой текст и своё бэкграунд-изображение .active opacity
 * - Слайды с автопрокруткой раз в три (3) секунды autoplay( )
 * - Дотсы // * .dot
 *  (точки переключения) реализовать по желанию.
 * Блок слайдера находится в блоке с классом // *  .top-slider
 */

const topSlider = () => {
  const slider = document.querySelector('.top-slider');
  const slides = slider.querySelectorAll('.item');
  const slidesLength = slides.length;


  // init расставляем начальное значение классов
  let currentSlide = 0;
  slides[currentSlide].classList.add('active');
  slides[currentSlide].querySelector('.table').classList.add('active');
  let timerInterval;

  const autoPlaySlide = () => {
    // console.log('currentSlide:', currentSlide);

    slides[currentSlide].classList.remove('active');
    slides[currentSlide].style.opacity = 0;
    slides[currentSlide].style.display = 'none';
    slides[currentSlide].querySelector('.table').classList.remove('active');

    if (currentSlide < slidesLength - 1) {
      // увеличиваем следующий слай на 1
      currentSlide++;
    } else {
      // или переходим на самый первый
      currentSlide = 0;
    }
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.opacity = 1;
    slides[currentSlide].style.display = 'block';
    slides[currentSlide].querySelector('.table').classList.add('active');
  };

  // смена слайдов через каждые 3 секунды
  const startSlide = () => {
    timerInterval = setInterval(() => {
      autoPlaySlide();
    }, 3000);
  };
  startSlide();
};



export default topSlider;
