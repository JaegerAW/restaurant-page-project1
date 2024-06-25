/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });

function home() { 
   
    const element =document.querySelector("#content");
    element.innerHTML = '';
    element.classList.remove('menucolor');
    element.classList.remove('contactcolor');
    element.classList.add('homecolor');
    
    const homeContent = document.createElement('div');
    const aboutUs = document.createElement('div');
    aboutUs.textContent = "Chicken Pok-Pok aims to deliver the best ricebox you'll ever have at an affordable price. Founded in 2019, Chicken Pok-Pok opened its first outlet in Jakarta, Indonesia";
    aboutUs.classList.add('card');


    const openingHours = document.createElement('div');
    openingHours.classList.add('card');
    const hoursHeader = document.createElement('h3');
    hoursHeader.textContent = "Opening Hours:";
    const hours = document.createElement('p');
    hours.textContent = "Mon-Sat: 10AM - 10PM";
    openingHours.appendChild(hoursHeader);
    openingHours.appendChild(hours);
    
    const location = document.createElement('div');
    const locationHeader = document.createElement('h3');
    const locationAddress = document.createElement('p');
    location.classList.add('card');
    locationHeader.textContent = "Location:";
    locationAddress.textContent = "Sunter Danau Permai Block E2/1, Jakarta Utara";
    location.appendChild(locationHeader);
    location.appendChild(locationAddress);



    homeContent.appendChild(aboutUs);
    homeContent.appendChild(openingHours);
    homeContent.appendChild(location);
    element.appendChild(homeContent);
    
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7IFxuICAgXG4gICAgY29uc3QgZWxlbWVudCA9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdtZW51Y29sb3InKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbnRhY3Rjb2xvcicpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG9tZWNvbG9yJyk7XG4gICAgXG4gICAgY29uc3QgaG9tZUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRVcy50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBQb2stUG9rIGFpbXMgdG8gZGVsaXZlciB0aGUgYmVzdCByaWNlYm94IHlvdSdsbCBldmVyIGhhdmUgYXQgYW4gYWZmb3JkYWJsZSBwcmljZS4gRm91bmRlZCBpbiAyMDE5LCBDaGlja2VuIFBvay1Qb2sgb3BlbmVkIGl0cyBmaXJzdCBvdXRsZXQgaW4gSmFrYXJ0YSwgSW5kb25lc2lhXCI7XG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG5cblxuICAgIGNvbnN0IG9wZW5pbmdIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG9wZW5pbmdIb3Vycy5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgY29uc3QgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJPcGVuaW5nIEhvdXJzOlwiO1xuICAgIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gXCJNb24tU2F0OiAxMEFNIC0gMTBQTVwiO1xuICAgIG9wZW5pbmdIb3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWRlcik7XG4gICAgb3BlbmluZ0hvdXJzLmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgICBcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBsb2NhdGlvbkFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGxvY2F0aW9uSGVhZGVyLnRleHRDb250ZW50ID0gXCJMb2NhdGlvbjpcIjtcbiAgICBsb2NhdGlvbkFkZHJlc3MudGV4dENvbnRlbnQgPSBcIlN1bnRlciBEYW5hdSBQZXJtYWkgQmxvY2sgRTIvMSwgSmFrYXJ0YSBVdGFyYVwiO1xuICAgIGxvY2F0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZGVyKTtcbiAgICBsb2NhdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvbkFkZHJlc3MpO1xuXG5cblxuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKGFib3V0VXMpO1xuICAgIGhvbWVDb250ZW50LmFwcGVuZENoaWxkKG9wZW5pbmdIb3Vycyk7XG4gICAgaG9tZUNvbnRlbnQuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpO1xuICAgIFxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==