
export default function home() { 
   
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