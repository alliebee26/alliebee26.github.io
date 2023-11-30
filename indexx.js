const hamburgermenu = document.querySelector(".hamburgermenu");
const navigation = document.querySelector("._navlinks");

hamburgermenu.addEventListener("click", () => {
    hamburgermenu.classList.toggle("active");
    navigation.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburgermenu.classList.remove("active");
    navigation.classList.remove("active");
}))



