export default function contact() {
    const element =document.querySelector("#content");
    element.innerHTML = '';
    element.classList.remove('menucolor');
    element.classList.remove('homecolor');
    element.classList.add('contactcolor');
}