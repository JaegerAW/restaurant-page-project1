export default function menu() {
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