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
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
    const element =document.querySelector("#content");
    element.innerHTML = '';
    element.classList.remove('menucolor');
    element.classList.remove('homecolor');
    element.classList.add('contactcolor');

    const locations = [
        {
            name: 'Sunter Location',
            address: "Jl. Sunter Danau Permai Blok E2/1",
            "postal code": "14430",
            phone: "021-6504412",
            city: "Jakarta Utara",
            country: "Indonesia",
            email: "customerservice@chickenpokpok.com"

        }
    ]


    const contactContent = document.createElement('div');
    contactContent.classList.add("flexcontainer");
    const contactHeader = document.createElement('h4');
    contactHeader.classList.add('headerFont');
    contactHeader.textContent = "Contact Us";
    contactContent.appendChild(contactHeader);

    
    for (let i = 0; i < locations.length; i++) {
        const contactItem = document.createElement('div');
        contactItem.classList.add('card');
        contactItem.innerHTML = `
        <h5>${locations[i].name}</h5>
        <p>${locations[i].address}, ${locations[i].city}, ${locations[i]["postal code"]}, ${locations[i].country}</p>
        <p>Phone Number: ${locations[i].phone}</p>
        <p>Email Address: ${locations[i].email}</p> 
        `
        contactContent.appendChild(contactItem);

    }
    


    


    element.appendChild(contactContent);

}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEMsYUFBYSxxQkFBcUIsSUFBSSxrQkFBa0IsSUFBSSw0QkFBNEIsSUFBSSxxQkFBcUI7QUFDakgsMkJBQTJCLG1CQUFtQjtBQUM5Qyw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBOztBQUVBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0Ly4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbWVudWNvbG9yJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdob21lY29sb3InKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Rjb2xvcicpO1xuXG4gICAgY29uc3QgbG9jYXRpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnU3VudGVyIExvY2F0aW9uJyxcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiSmwuIFN1bnRlciBEYW5hdSBQZXJtYWkgQmxvayBFMi8xXCIsXG4gICAgICAgICAgICBcInBvc3RhbCBjb2RlXCI6IFwiMTQ0MzBcIixcbiAgICAgICAgICAgIHBob25lOiBcIjAyMS02NTA0NDEyXCIsXG4gICAgICAgICAgICBjaXR5OiBcIkpha2FydGEgVXRhcmFcIixcbiAgICAgICAgICAgIGNvdW50cnk6IFwiSW5kb25lc2lhXCIsXG4gICAgICAgICAgICBlbWFpbDogXCJjdXN0b21lcnNlcnZpY2VAY2hpY2tlbnBva3Bvay5jb21cIlxuXG4gICAgICAgIH1cbiAgICBdXG5cblxuICAgIGNvbnN0IGNvbnRhY3RDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImZsZXhjb250YWluZXJcIik7XG4gICAgY29uc3QgY29udGFjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgY29udGFjdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXJGb250Jyk7XG4gICAgY29udGFjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRhY3RDb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY29udGFjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgICAgICBjb250YWN0SXRlbS5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxoNT4ke2xvY2F0aW9uc1tpXS5uYW1lfTwvaDU+XG4gICAgICAgIDxwPiR7bG9jYXRpb25zW2ldLmFkZHJlc3N9LCAke2xvY2F0aW9uc1tpXS5jaXR5fSwgJHtsb2NhdGlvbnNbaV1bXCJwb3N0YWwgY29kZVwiXX0sICR7bG9jYXRpb25zW2ldLmNvdW50cnl9PC9wPlxuICAgICAgICA8cD5QaG9uZSBOdW1iZXI6ICR7bG9jYXRpb25zW2ldLnBob25lfTwvcD5cbiAgICAgICAgPHA+RW1haWwgQWRkcmVzczogJHtsb2NhdGlvbnNbaV0uZW1haWx9PC9wPiBcbiAgICAgICAgYFxuICAgICAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0SXRlbSk7XG5cbiAgICB9XG4gICAgXG5cblxuICAgIFxuXG5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb250ZW50KTtcblxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==