
export default function home() { 
   
    const element =document.querySelector("#content");
    
    const homeContent = document.createElement('div');
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('card');
    const openingHours = document.createElement('div');
    const location = document.createElement('div');
    aboutUs.textContent = "Chicken Pok-Pok aims to deliver the best damn lunch you'll ever have at an affordable price. Founded in 2019, Chicken Pok-Pok opened its first outlet in Jakarta, Indonesia";
    homeContent.appendChild(aboutUs);
    element.appendChild(homeContent);
    
}