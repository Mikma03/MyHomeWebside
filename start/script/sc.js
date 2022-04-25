

const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-xmark");
const column = document.querySelector("aside");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    column.classList.toggle("show");

})




$('nav a').on('click', function () {
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
    scrollTop: $(goToSection).offset().top
    })
})


