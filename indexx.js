const hamburger = document.querySelector(".hamburgermenu");
const nav = document.querySelector("._navlinks");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}