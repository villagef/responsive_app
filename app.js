const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const changeToOpen = burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
const changeToClose = navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
