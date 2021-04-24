const handleMenu = () => {
  console.log('lets handle menu');

  const topMenu = document.querySelector('.top-menu'); // ! все верхнее меню

  // todo размер хэдера сверху нужно учитывать
  const headerWrapperHeight = document.querySelector('.header-wrapper').getBoundingClientRect().height;

  // пункты меню ссылки на соответствующие блоки
  const targetServices = topMenu.querySelector('a[href="#services"]');
  const targetFaq = topMenu.querySelector('a[href="#faq"]');
  const targetContacts = topMenu.querySelector('a[href="#contacts"]');

  // todo use it
  const targets = topMenu.querySelectorAll('a');
  console.log('targets: ', targets);

  // todo найдем блоки куда нужно крутить
  const servicesSection = document.querySelector('#services');
  const faqSection = document.querySelector('#faq');
  const contactsSection = document.querySelector('#contacts');

  // todo клики здесь можно делигировать
  // пункт services
  targetServices.addEventListener('click', (event) => {
    event.preventDefault(); // отключаем действие клика по ссылке по умолчанию
    servicesSection.scrollIntoView({
      behavior: 'smooth', // плавная прокрутка
      block: 'start', // к началу блока
    });
  });

  targetFaq.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('href'); //todo можно использовать attr href
    console.log(id);
    faqSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start', // блок прокручивается чтобы его scrollTop был = 0
    });
  });

  targetContacts.addEventListener('click', (event) => {
    event.preventDefault();
    contactsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
};

export default handleMenu;
