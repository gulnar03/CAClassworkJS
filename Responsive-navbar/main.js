let header = document.querySelector("header");
let menuIcon = document.querySelector(".menu i");
let menu = document.querySelector(".menu");
let pulldown = document.querySelector(".menu-bar");

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
menu.onclick = function () {
  pulldown.classList.toggle("open-menu");
  let opened = pulldown.classList.contains("open-menu");
  menuIcon.classList = opened ? "fa-solid fa-x" : "fa-solid fa-bars";
};
