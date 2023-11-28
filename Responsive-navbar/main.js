let header = document.querySelector("header");
let menuIcon = document.querySelector(".fa-solid.fa-bars");
let pulldown = document.querySelector(".nav-list");

window.addEventListener("scroll", function () {
  header.classList.toggle("header-scroll", window.scrollY > 0);
});
menuIcon.addEventListener("click", function () {
  pulldown.classList.toggle("open-menu");
  let opened = pulldown.classList.contains("open-menu");
  menuIcon.classList = opened ? "fa-solid fa-x" : "fa-solid fa-bars";
});
