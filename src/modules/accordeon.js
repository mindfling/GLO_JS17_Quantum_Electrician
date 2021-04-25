'use strict';

// * эффект аккордеон для блока
// ** САМЫЕ ЧАСТЫЕ ВОПРОСЫ **
// .accordeon-section #faq

// .accordeon .element
// .accordeon .element.active
// .accordeon .element .title
// .accordeon .element .element-content style="display:block;"

const accordeon = () => {
  const accordeonSection = document.querySelector('.accordeon-section'); // #faq
  const accordeon = accordeonSection.querySelector('.accordeon');
  const elements = accordeon.querySelectorAll('.element');

  elements.forEach((elem) => {
    const title = elem.querySelector('.title');
    const content = elem.querySelector('.element-content');

    title.addEventListener('click', (event) => {
      console.log('elem: ', elem);
      //   elem.classList.add('animate__animated');
      //   elem.classList.add('animate__bounceIn');
    //   content.classList.add('animate__animated', 'animate__bounceIn');
      content.classList.add('animate__animated', 'animate__fadeInDown', 'animate__faster');
    //   content.classList.add('animate__animated', 'animate__fadeIn');
    //   content.classList.add('animate__animated', 'animate__zoomIn');
      elem.classList.toggle('active');

      // todo перебрать все остальные вкладки аккордеона

      // event.target.closest('.element').classList.toggle('active');
      //   elem.querySelector('.element-content').style.display = 'block';
      //   if (content.style.display === 'block') {
      //     content.style.display = 'none'; // * убрать
      //   } else {
      //     content.style.display = 'block'; // * показать контент
      //   }
    }); // 'click'
  });
};

export default accordeon;
