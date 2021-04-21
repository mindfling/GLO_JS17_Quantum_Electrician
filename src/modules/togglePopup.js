// ! Модуль обработки модальных окон
/**
 * По клику на кнопку “Заказать звонок” !! .callback-btn 2 кнопки
 * открывается модальное окно с классом // * .modal-callback
 * и подложка с классом // * .modal-overlay
 */
/**
 * В модальном окне при клике на крестик с классом // * .modal-close
 * или на подложку // * .modal-overlay
 * модальное окно и подложка должны скрываться.
 */

const togglePopup = () => {
  // получаем все кнопки по которым вызываем модальное окно
  const popupBtns = document.querySelectorAll('.callback-btn'); // кнопки Заказать звонок
  const buttonServices = document.querySelector('.button-services'); // кнопка из faq
  const modalOverlay = document.querySelector('.modal-overlay'); // подложка под окно
  const modal = document.querySelector('.modal-callback'); // модальное окно

  // отобразить модальное окно
  const showModal = () => {
    modalOverlay.style.display = 'block';
    modal.style.display = 'block';
    // todo анимация через animate.css
    modal.classList.remove('fadeOut');
    modal.classList.add('animated', 'fadeIn');
  };

  // скрыть модальное окно
  const closeModal = () => {
    modal.style.display = 'none';
    modalOverlay.style.display = 'none';
    // todo сделать анимацию animate.css
    modal.classList.remove('fadeIn');
    modal.classList.add('animated', 'fadeOut');
  };

  // * клпик по кнопкам Заказать звонок callback-btn Открывает окно
  popupBtns.forEach((popupBtn) => {
    popupBtn.addEventListener('click', (event) => showModal());
  });

  // * клик по кнопке ЗВОНИТЕ, МЫ ОБЯЗАТЕЛЬНО ВАМ ПОМОЖЕМ!
  buttonServices.addEventListener('click', (event) => showModal());

  // * клик по overlay Закрывает окно
  modalOverlay.addEventListener('click', (event) => {
    closeModal();
  });

  // * клик по кнопке Закрыть modal-close button [X] Закрывает окно
  modal.querySelector('.modal-close').addEventListener('click', (event) => {
    closeModal();
  });
};


export default togglePopup;
