let changeBtn = document.querySelector(".change");
let body = document.querySelector("body");


if(localStorage.getItem("darkMode") == "true"){
    body.classList.add("dark");
}
changeBtn.addEventListener("click", function () {
  body.classList.toggle("dark");

  if (localStorage.getItem("darkMode") == "true") {
    localStorage.setItem("darkMode", false);
  } else {
    localStorage.setItem("darkMode", true);
  }
});
