const handleMenu = () => {
  const topMenu = document.querySelector('.top-menu');

  // todo высота хэдера сверху нужно учитывать
  const headerWrapperHeight = document.querySelector('.header-wrapper').getBoundingClientRect().height;

  // todo просто а потом делегирование пункты меню ссылки на соответствующие блоки
  const targetServices = topMenu.querySelector('a[href="#services"]');
  const targetFaq = topMenu.querySelector('a[href="#faq"]');
  const targetContacts = topMenu.querySelector('a[href="#contacts"]');

  // todo найдем блоки куда нужно крутить
  const servicesSection = document.querySelector('#services');
  const faqSection = document.querySelector('#faq');
  const contactsSection = document.querySelector('#contacts');

  // todo ДЕЛЕГИРУЕМ клики
  const targets = topMenu.querySelectorAll('a');
  topMenu.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;
    console.log('target: ', target);

    targets.forEach((item) => {
      if (item === target) {
        const id = event.target.getAttribute('href'); // находим значение в ссылке
        document.querySelector(id).scrollIntoView({
          behavior: 'smooth', // плавная прокрутка
          block: 'start', // к началу блока
        });
      }
    });
  });

};

export default handleMenu;




  /*
  targetServices.addEventListener('click', (event) => {
    event.preventDefault(); // отключаем действие клика по ссылке по умолчанию
    // плавная прокрутка // к началу блока
    servicesSection.scrollIntoView({ behavior: 'smooth',  block: 'start',  });
  });

  targetFaq.addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('href')
    console.log(id);
     // блок прокручивается чтобы его scrollTop был = 0 
    faqSection.scrollIntoView({ behavior: 'smooth', block: 'start', });
  });

  targetContacts.addEventListener('click', (event) => {
    event.preventDefault();
    contactsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
*/
