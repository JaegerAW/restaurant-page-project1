import _ from 'lodash';
import './styles.css';
//import //declare variable name// from './"image file name".png';
//
import menu from './menu.js';
import contact from './contact.js';
import home from './home.js';

function component() {
    const element = document.querySelector('#content');
    const navBar = document.querySelector('#navbar');


    //create home button to change content to home
    const homeBtn = document.createElement('button');
    homeBtn.innerHTML = "HOME";
    homeBtn.addEventListener('click', home);
    navBar.appendChild(homeBtn);
    home();//initialize home page
  
  
    //create menu button to change #content to menu
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = "MENU";
    menuBtn.addEventListener("click", menu);
  
   navBar.appendChild(menuBtn);
    //create contact buton to change #content to contact
    
    const contactBtn = document.createElement("button");
    contactBtn.innerHTML = "Contact Us";
    contactBtn.addEventListener('click', contact);
   navBar.appendChild(contactBtn);



    return element;
}

document.body.appendChild(component());

