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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n\r\n/** Quantum electrician Diploma project */\r\n\r\n\r\n\r\n\r\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/index.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// ! Модуль обработки модальных окон\r\n/**\r\n * По клику на кнопку “Заказать звонок” !! .callback-btn 2 кнопки\r\n * открывается модальное окно с классом // * .modal-callback\r\n * и подложка с классом // * .modal-overlay\r\n */\r\n/**\r\n * В модальном окне при клике на крестик с классом // * .modal-close\r\n * или на подложку // * .modal-overlay\r\n * модальное окно и подложка должны скрываться.\r\n */\r\n\r\nconst togglePopup = () => {\r\n  // получаем все кнопки по которым вызываем модальное окно\r\n  const popupBtns = document.querySelectorAll('.callback-btn');\r\n  const modalOverlay = document.querySelector('.modal-overlay');\r\n  const modal = document.querySelector('.modal-callback');\r\n\r\n  // отобразить модальное окно\r\n  const showModal = () => {\r\n    modalOverlay.style.display = 'block';\r\n    modal.style.display = 'block';\r\n    // todo анимация через animate.css\r\n    modal.classList.remove('fadeOut');\r\n    modal.classList.add('animated', 'fadeIn');\r\n  };\r\n\r\n  // скрыть модальное окно\r\n  const closeModal = () => {\r\n    modal.style.display = 'none';\r\n    modalOverlay.style.display = 'none';\r\n    // todo сделать анимацию animate.css\r\n    modal.classList.remove('fadeIn');\r\n    modal.classList.add('animated', 'fadeOut');\r\n  };\r\n\r\n  // * клик по overlay Закрывает окно\r\n  modalOverlay.addEventListener('click', (event) => {\r\n    closeModal();\r\n  });\r\n\r\n  // * клик по кнопке Закрыть modal-close button [X] Закрывает окно\r\n  modal.querySelector('.modal-close').addEventListener('click', (event) => {\r\n    closeModal();\r\n  });\r\n\r\n  // * клпик по кнопкам Заказать звонок callback-btn Открывает окно\r\n  popupBtns.forEach((popupBtn) => {\r\n    popupBtn.addEventListener('click', (event) => showModal());\r\n  });\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\r\n\n\n//# sourceURL=webpack://GLO_JS17_Quantum_Electrician/./src/modules/togglePopup.js?");

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