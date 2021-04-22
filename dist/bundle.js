/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\r\n/** Quantum electrician Diploma project */\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/index.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\r\n * В модальном окне имеется форма отправки.\r\n * Форма должна отправляться посредством //* AJAX (без перезагрузки страницы)\r\n * и захватывать все введенные данные (в Dev Tools, во вкладке Network, в файле server.php\r\n * данные должны отправляться в JSON-формате).\r\n * Также необходимо оповестить пользователя о состоянии отправки\r\n * * идет отправка\r\n * * отправлено\r\n * * ошибка\r\n * В поле с телефоном можно вводить //* только цифры и + (знак плюс).\r\n * В поле “Ваше имя” вводится только // * кириллица.\r\n */\r\n\r\n// обрабатываем нашу форму в модальном окне\r\n\r\nconst sendForm = () => {\r\n  const loadMessage = 'Идет отправка ...';\r\n  const successMessage = 'Спасибо! Ваша заявка отправлена!';\r\n  const errorMessage = 'Ошибка! Что-то пошло не так :(';\r\n\r\n  const modalCallback = document.querySelector('#callback');\r\n  const form = modalCallback.querySelector('form');\r\n  const inputFio = form.querySelector('input[name=\"fio\"]'); // поле ввода Ваше Имя\r\n  const inputTel = form.querySelector('input[name=\"tel\"]'); // поле ввода Телефон *\r\n\r\n  // статус ответа пользователю\r\n  const statusMessage = document.createElement('div');\r\n  statusMessage.textContent = loadMessage;\r\n  statusMessage.style.cssText = `font-size:1.5rem; font-weight:bold; color:#4e4e4e; text-align:center; padding: 5px 0;`;\r\n\r\n  // валидация формы\r\n  const formValidate = () => {\r\n    // ввод символов в поле // *Ваше имя\r\n    inputFio.addEventListener('input', (event) => {\r\n      // <> валидация имени\r\n      event.target.value = event.target.value.replace(/((?<=^)\\s+)|((?<=\\s)\\s+)|([^а-яА-ЯёЁ\\s])/ig, '');\r\n    });\r\n    // ввод цифр в поле // *Телефон\r\n    inputTel.addEventListener('input', (event) => {\r\n      // <> валидация номера телефона\r\n      event.target.value = event.target.value.replace(/([^\\d\\+])|((?<=[\\d\\D])\\++)|((?<=[\\d\\D]{12,})[\\d\\D])/g, '');\r\n    });\r\n  };\r\n  formValidate();\r\n\r\n  // функция очистки данных полей формы\r\n  const clearForm = (form) => {\r\n    // todo через время 1с очистка полей формы\r\n    setTimeout(() => {\r\n      form.querySelectorAll('input[type=\"text\"]').forEach((field) => {\r\n        field.value = ''; // очистка поля \r\n        // field.setAttribute('disabled', 'true'); // деактивируем поле\r\n      });\r\n    }, 1000);\r\n    // todo через время удаление сообщения о статусе\r\n    setTimeout(() => {\r\n      statusMessage.remove();\r\n    }, 7000);\r\n    // todo закрытие формы через время\r\n    // setTimeout(() => {\r\n    //   const modalOverlay = document.querySelector('.modal-overlay'); // подложка под окно\r\n    //   const modal = document.querySelector('.modal-callback'); // модальное окно\r\n    //   modal.style.display = 'none';\r\n    //   modalOverlay.style.display = 'none';\r\n    //   // todo сделать анимацию animate.css\r\n    //   modal.classList.remove('fadeIn');\r\n    //   modal.classList.add('animated', 'fadeOut');\r\n\r\n    //   // field.setAttribute('disabled', 'false');\r\n    //   // field.value = '';\r\n    // }, 9000);\r\n  };\r\n\r\n  // функция формирования запроса на сервер\r\n  const postData = (body) =>\r\n    fetch('server.php', {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify(body),\r\n    }); // возвращает fetch запрос\r\n\r\n  // * событие submit на форму\r\n  form.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    // todo место для плейсхолдера\r\n    form.appendChild(statusMessage); // добавляем сообщение на форму\r\n    statusMessage.textContent = loadMessage;\r\n\r\n    // собираем данные формы\r\n    const formData = new FormData(form);\r\n    let body = {};\r\n    // заполняем тело запроса данными из формы\r\n    formData.forEach((item, key) => {\r\n      body[key] = item;\r\n    });\r\n\r\n    // запрос // возвращает fetch\r\n    postData(body)\r\n      .then((response) => {\r\n        // отбрасываем ошибку 200\r\n        if (response.status !== 200) {\r\n          throw new Error('Server response not 200 !!!');\r\n        }\r\n        // тогда дальше без ошибок\r\n        statusMessage.textContent = successMessage;\r\n        console.log('Server success');\r\n      })\r\n      .catch((error) => {\r\n        statusMessage.textContent = errorMessage;\r\n        console.error('Server error', error);\r\n      });\r\n\r\n    //очистка полей формы\r\n    clearForm(form);\r\n  }); //submit\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ! Модуль обработки модальных окон\r\n/**\r\n * По клику на кнопку “Заказать звонок” !! .callback-btn 2 кнопки\r\n * открывается модальное окно с классом // * .modal-callback\r\n * и подложка с классом // * .modal-overlay\r\n */\r\n/**\r\n * В модальном окне при клике на крестик с классом // * .modal-close\r\n * или на подложку // * .modal-overlay\r\n * модальное окно и подложка должны скрываться.\r\n */\r\n\r\nconst togglePopup = () => {\r\n  // получаем все кнопки по которым вызываем модальное окно\r\n  const popupBtns = document.querySelectorAll('.callback-btn'); // кнопки Заказать звонок\r\n  const buttonServices = document.querySelector('.button-services'); // кнопка из faq\r\n  const modalOverlay = document.querySelector('.modal-overlay'); // подложка под окно\r\n  const modal = document.querySelector('.modal-callback'); // модальное окно\r\n\r\n  const servicesSection = document.querySelector('#services'); // клики по блокам карусели Наши Услуги\r\n  const servicesElements = servicesSection.querySelectorAll('.element');\r\n  \r\n  console.log('servicesSection: ', servicesSection);\r\n  console.log('servicesElements: ', servicesElements);\r\n  \r\n\r\n  // отобразить модальное окно\r\n  const showModal = () => {\r\n    modalOverlay.style.display = 'block';\r\n    modal.style.display = 'block';\r\n    // todo анимация через animate.css\r\n    modal.classList.remove('fadeOut');\r\n    modal.classList.add('animated', 'fadeIn');\r\n  };\r\n\r\n  // скрыть модальное окно\r\n  const closeModal = () => {\r\n    modal.style.display = 'none';\r\n    modalOverlay.style.display = 'none';\r\n    // todo сделать анимацию animate.css\r\n    modal.classList.remove('fadeIn');\r\n    modal.classList.add('animated', 'fadeOut');\r\n  };\r\n\r\n  // * клпик по кнопкам Заказать звонок callback-btn Открывает окно\r\n  popupBtns.forEach((popupBtn) => {\r\n    popupBtn.addEventListener('click', (event) => showModal());\r\n  });\r\n\r\n  // * клик по кнопке ЗВОНИТЕ, МЫ ОБЯЗАТЕЛЬНО ВАМ ПОМОЖЕМ!\r\n  buttonServices.addEventListener('click', (event) => showModal());\r\n\r\n  //? * клик по элементу карусели из блока Наши услуги services-section тоже открывает окно\r\n  servicesSection.querySelectorAll('.element').forEach((item) => {\r\n    item.addEventListener('click', (event) => {\r\n      showModal();\r\n    });\r\n  });\r\n\r\n  // * клик по overlay Закрывает окно\r\n  modalOverlay.addEventListener('click', (event) => {\r\n    closeModal();\r\n  });\r\n\r\n  // * клик по кнопке Закрыть modal-close button [X] Закрывает окно\r\n  modal.querySelector('.modal-close').addEventListener('click', (event) => {\r\n    closeModal();\r\n  });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/togglePopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;