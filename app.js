const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const changeToOpen = burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});
const changeToClose = navLinks.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const htmlBar = document.querySelector(".bar-html");
const cssBar = document.querySelector(".bar-css");
const javascriptBar = document.querySelector(".bar-javaScript");
const reactBar = document.querySelector(".bar-react");

var tl = new TimelineLite();

tl.fromTo(
  htmlBar,
  0.75,
  { width: `calc(0% - 6px)` },
  { width: `calc(90% - 6px)`, easy: Power4.easyOut }
)
  .fromTo(
    cssBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(70% - 6px)`, easy: Power4.easyOut }
  )
  .fromTo(
    javascriptBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(80% - 6px)`, easy: Power4.easyOut }
  )
  .fromTo(
    reactBar,
    0.75,
    { width: `calc(0% - 6px)` },
    { width: `calc(60% - 6px)`, easy: Power4.easyOut }
  );
