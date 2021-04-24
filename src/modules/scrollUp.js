const scrollUp = () => {
  const servicesSection = document.querySelector('#services');
  const faqSection = document.querySelector('#faq');
  const contactsSection = document.querySelector('#contacts');
  const mainWrapper = document.querySelector('.main-wrapper');

  const headerWrapper = document.querySelector('.header-wrapper'); //блок хедера
  // console.log('headerWrapper: ', headerWrapper);

  const upButton = document.querySelector('.up');
  upButton.classList.add('animate__animated');
  upButton.classList.toggle('animate__bounceInUp');

  upButton.addEventListener('click', (event) => {
    event.preventDefault();
    mainWrapper.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });

  //событие прокрутки scroll
  document.addEventListener('scroll', (event) => {
    if (document.documentElement.scrollTop > 1000) {
      // todo добавить точные координаты блока

      // * showUpButton ВЫПРЫГИВАЕТ С НИЗУ ВВЕРХ
      upButton.classList.add('animate__animated');
      upButton.classList.remove('animate__bounceOutDown');
      upButton.classList.add('animate__bounceInUp');
    } else {
      // * showUpButton СКРЫВАЕМ ВНИЗ
      upButton.classList.add('animate__animated');
      upButton.classList.add('animate__bounceOutDown');
      upButton.classList.remove('animate__bounceInUp');
    }
  });
};

export default scrollUp;
