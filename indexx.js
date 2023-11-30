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



$(document).ready(function(){ //when it's fully loaded I want it to do something
    $('.slideshow1').slick({
        slidesToShow: 4, //separated by commas
        slidesToScroll: 1
    });
    
  });

  $(document).ready(function(){ //when it's fully loaded I want it to do something
    $('.slideshow2').slick({
        slidesToShow: 4, //separated by commas
        slidesToScroll: 1
    });
    
  });