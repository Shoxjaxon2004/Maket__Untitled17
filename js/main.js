var burger = document.querySelector(".burger");
var menu = document.querySelector(".header__menu");

burger.addEventListener("click", function(){
    menu.classList.toggle("active");
    burger.classList.toggle("active");
});
