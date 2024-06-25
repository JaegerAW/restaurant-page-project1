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
    menuContent.classList.add('flexcontainer');


    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'MENU';
    menuHeader.classList.add('headerFont');
    menuContent.appendChild(menuHeader);

    const foodMenu = document.createElement('div');
    foodMenu.classList.add('card');
    const foodMenuHeader = document.createElement('h4');
    foodMenuHeader.textContent = "FOOD";
    foodMenu.appendChild(foodMenuHeader);
    for (let i = 0; i < foods.length; i++) {
        const foodItem = document.createElement('div');
        foodItem.textContent = `${foods[i].name}    $${foods[i].price.toFixed(2)}`;
        foodMenu.appendChild(foodItem);
    }
    


    menuContent.appendChild(foodMenu);


    element.appendChild(menuContent);


}