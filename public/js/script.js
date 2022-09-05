const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("slide");
});

$(document).ready(function () {
    $(".navbar ul li").hover(
        function () {
            $("ul.sub-menu", this).fadeIn(300);
        },
        function () {
            $("ul.sub-menu", this).fadeOut(300);
        }
    );
});
