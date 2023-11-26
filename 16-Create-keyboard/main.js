let keys = document.querySelectorAll(".key");
let space = document.querySelector(".words");
document.addEventListener("keydown", function (event) {
  keys.forEach((item) => {
    if (`${item.innerText}` == event.key) {
      item.style.backgroundColor = "green";
      item.style.transform = "scale(1.2)";
    }
  });
  space.innerText += event.key;
});
document.addEventListener("keyup", function (event) {
  keys.forEach((item) => {
    if (`${item.innerText}` == event.key) {
      item.style.backgroundColor = "teal";
      item.style.transform = "scale(1.0)";
    }
  });
});
