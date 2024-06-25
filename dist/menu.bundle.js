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
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
function menu() {
    const element = document.querySelector("#content");
    element.classList.remove('homecolor');
    element.classList.remove('contactcolor');
    element.classList.add('menucolor');
    element.innerHTML = '';

    const foods = [
        {
            name: "Curry Chicken Rice",
            price: 4.99
        },
        {
            name: "Butter Chicken Rice",
            price: 5.50
        },

        {
            name: "Crazy Chicken Rice",
            price: 4.99
        },

        {
            name: "Mongolian Chicken Rice",
            price: 4.99
        },
        
        {

            name: "Sambal Chicken Rice",
            price: 4.50
        }

    ];

    const drinks = [
        {
            name: "Iced Lemon Tea",
            price: 1.99
        },
        {
            name: "Iced Blackcurrant Tea",
            price: 1.99
        },
        {
            name: "Mineral Water",
            price: 1.00
        },
        {
            name: "Badak Soda",
            price: 2.50
        }

    ]

    const menuContent = document.createElement('div');
    menuContent.classList.add('flexcontainer'); //the whole menu page, turn it into flex container to align items to center


    const menuHeader = document.createElement('h2');//this is the MENU header
    menuHeader.textContent = 'MENU';
    menuHeader.classList.add('headerFont');
    menuContent.appendChild(menuHeader); // add MENU header to menu page

    const foodMenu = document.createElement('div'); //this is food menu CARD, contains items and their price
    foodMenu.classList.add('card'); //give class card to style

    const foodMenuHeader = document.createElement('h4'); //food card header
    foodMenuHeader.textContent = "FOOD";
    foodMenu.appendChild(foodMenuHeader); //add FOOD header to food CARD

    for (let i = 0; i < foods.length; i++) { //loop through the foods array, create a div for every item
        const foodItem = document.createElement('div');
        foodItem.innerHTML = `${foods[i].name} <span class="pricetoright">${foods[i].price.toFixed(2)}</span>`;
        foodMenu.appendChild(foodItem); //add every item in foods array to food CARD
    }
    
    const drinkMenu = document.createElement('div');
    drinkMenu.classList.add('card');

    const drinkMenuHeader = document.createElement('h4');
    drinkMenuHeader.textContent = "DRINKS";
    drinkMenu.appendChild(drinkMenuHeader);

    for (let i = 0; i < drinks.length; i++) {
        const drinkItem = document.createElement('div');
        drinkItem.innerHTML = `${drinks[i].name} <span class="pricetoright">$${drinks[i].price.toFixed(2)}</span>`
        drinkMenu.appendChild(drinkItem);
    }

    menuContent.appendChild(foodMenu);
    menuContent.appendChild(drinkMenu);

    element.appendChild(menuContent);


}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0RBQWdEOzs7QUFHaEQsb0RBQW9EO0FBQ3BEO0FBQ0E7QUFDQSx5Q0FBeUM7O0FBRXpDLG9EQUFvRDtBQUNwRCxvQ0FBb0M7O0FBRXBDLHlEQUF5RDtBQUN6RDtBQUNBLDBDQUEwQzs7QUFFMUMsb0JBQW9CLGtCQUFrQixPQUFPO0FBQzdDO0FBQ0EsZ0NBQWdDLGVBQWUsNkJBQTZCLDBCQUEwQjtBQUN0Ryx3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQSxpQ0FBaUMsZ0JBQWdCLDhCQUE4QiwyQkFBMkI7QUFDMUc7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtcHJvamVjdC8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaG9tZWNvbG9yJyk7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdjb250YWN0Y29sb3InKTtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ21lbnVjb2xvcicpO1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBmb29kcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJDdXJyeSBDaGlja2VuIFJpY2VcIixcbiAgICAgICAgICAgIHByaWNlOiA0Ljk5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiQnV0dGVyIENoaWNrZW4gUmljZVwiLFxuICAgICAgICAgICAgcHJpY2U6IDUuNTBcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkNyYXp5IENoaWNrZW4gUmljZVwiLFxuICAgICAgICAgICAgcHJpY2U6IDQuOTlcbiAgICAgICAgfSxcblxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIk1vbmdvbGlhbiBDaGlja2VuIFJpY2VcIixcbiAgICAgICAgICAgIHByaWNlOiA0Ljk5XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICB7XG5cbiAgICAgICAgICAgIG5hbWU6IFwiU2FtYmFsIENoaWNrZW4gUmljZVwiLFxuICAgICAgICAgICAgcHJpY2U6IDQuNTBcbiAgICAgICAgfVxuXG4gICAgXTtcblxuICAgIGNvbnN0IGRyaW5rcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJJY2VkIExlbW9uIFRlYVwiLFxuICAgICAgICAgICAgcHJpY2U6IDEuOTlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJJY2VkIEJsYWNrY3VycmFudCBUZWFcIixcbiAgICAgICAgICAgIHByaWNlOiAxLjk5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTWluZXJhbCBXYXRlclwiLFxuICAgICAgICAgICAgcHJpY2U6IDEuMDBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJCYWRhayBTb2RhXCIsXG4gICAgICAgICAgICBwcmljZTogMi41MFxuICAgICAgICB9XG5cbiAgICBdXG5cbiAgICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2ZsZXhjb250YWluZXInKTsgLy90aGUgd2hvbGUgbWVudSBwYWdlLCB0dXJuIGl0IGludG8gZmxleCBjb250YWluZXIgdG8gYWxpZ24gaXRlbXMgdG8gY2VudGVyXG5cblxuICAgIGNvbnN0IG1lbnVIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpOy8vdGhpcyBpcyB0aGUgTUVOVSBoZWFkZXJcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gJ01FTlUnO1xuICAgIG1lbnVIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyRm9udCcpO1xuICAgIG1lbnVDb250ZW50LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpOyAvLyBhZGQgTUVOVSBoZWFkZXIgdG8gbWVudSBwYWdlXG5cbiAgICBjb25zdCBmb29kTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAvL3RoaXMgaXMgZm9vZCBtZW51IENBUkQsIGNvbnRhaW5zIGl0ZW1zIGFuZCB0aGVpciBwcmljZVxuICAgIGZvb2RNZW51LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTsgLy9naXZlIGNsYXNzIGNhcmQgdG8gc3R5bGVcblxuICAgIGNvbnN0IGZvb2RNZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTsgLy9mb29kIGNhcmQgaGVhZGVyXG4gICAgZm9vZE1lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkZPT0RcIjtcbiAgICBmb29kTWVudS5hcHBlbmRDaGlsZChmb29kTWVudUhlYWRlcik7IC8vYWRkIEZPT0QgaGVhZGVyIHRvIGZvb2QgQ0FSRFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb29kcy5sZW5ndGg7IGkrKykgeyAvL2xvb3AgdGhyb3VnaCB0aGUgZm9vZHMgYXJyYXksIGNyZWF0ZSBhIGRpdiBmb3IgZXZlcnkgaXRlbVxuICAgICAgICBjb25zdCBmb29kSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBmb29kSXRlbS5pbm5lckhUTUwgPSBgJHtmb29kc1tpXS5uYW1lfSA8c3BhbiBjbGFzcz1cInByaWNldG9yaWdodFwiPiR7Zm9vZHNbaV0ucHJpY2UudG9GaXhlZCgyKX08L3NwYW4+YDtcbiAgICAgICAgZm9vZE1lbnUuYXBwZW5kQ2hpbGQoZm9vZEl0ZW0pOyAvL2FkZCBldmVyeSBpdGVtIGluIGZvb2RzIGFycmF5IHRvIGZvb2QgQ0FSRFxuICAgIH1cbiAgICBcbiAgICBjb25zdCBkcmlua01lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkcmlua01lbnUuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuXG4gICAgY29uc3QgZHJpbmtNZW51SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBkcmlua01lbnVIZWFkZXIudGV4dENvbnRlbnQgPSBcIkRSSU5LU1wiO1xuICAgIGRyaW5rTWVudS5hcHBlbmRDaGlsZChkcmlua01lbnVIZWFkZXIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZHJpbmtJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRyaW5rSXRlbS5pbm5lckhUTUwgPSBgJHtkcmlua3NbaV0ubmFtZX0gPHNwYW4gY2xhc3M9XCJwcmljZXRvcmlnaHRcIj4kJHtkcmlua3NbaV0ucHJpY2UudG9GaXhlZCgyKX08L3NwYW4+YFxuICAgICAgICBkcmlua01lbnUuYXBwZW5kQ2hpbGQoZHJpbmtJdGVtKTtcbiAgICB9XG5cbiAgICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChmb29kTWVudSk7XG4gICAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQoZHJpbmtNZW51KTtcblxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUNvbnRlbnQpO1xuXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=