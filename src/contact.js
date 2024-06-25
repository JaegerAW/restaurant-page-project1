export default function contact() {
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