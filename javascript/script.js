const menuButton = document.querySelector(".menu");
const textsOfMenu = document.querySelectorAll(".text-menu");
const navigation = document.querySelector(".navigation");
const boxTwo = document.querySelector(".box-two");
const boxThree = document.querySelector(".box-three");

const logo = document.querySelector(".logo");
const textMenu = document.querySelector(".text-for-menu");
const a = document.querySelectorAll("li a.close");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("animation-menu");
    navigation.classList.toggle("animation-menu-deactive");
    logo.classList.toggle("logo-container-active");
    logo.querySelector(".logo-image").classList.toggle("logo-active")
    logo.querySelector(".logo-text").classList.toggle("hide");
    logo.querySelector(".logo-text").classList.toggle("show");
    logo.querySelector(".logo-image").classList.toggle("logo-deactive")
    logo.classList.toggle("logo-container-deactive");
    setTimeout(() => {
        boxTwo.classList.toggle("hide");
        boxThree.classList.toggle("hide");
        boxTwo.classList.toggle("show");
        boxThree.classList.toggle("show");
    }, 800);

    textMenu.classList.toggle("text-menu");
    textMenu.classList.toggle("text-menu-deactive");
    a.forEach(item => {
        item.classList.toggle("close");
    })
});