// let addBtn = document.querySelector(".add-btn");
// console.log(addBtn);
// addBtn.addEventListener("click", function () {
//   this.parentElement.style.backgroundColor = "teal";
//   this.style.position = "absolute";
//   this.style.bottom = "20px";
//   this.style.right = "10px";
//   this.parentElement.style.position = "relative";
//   this.parentElement.style.width = "300px";
//   this.parentElement.style.height = "200px";
// });
// let cities = document.querySelector(".cities");
// let liArr = ["Ganja", "Baku", "Yevlakh", "Goranboy", "Shamkir"];
// let ulElement = document.createElement("ul");

// liArr.forEach((item) => {
//   let liElement = document.createElement("li");
//   liElement.innerText = item;
//   ulElement.append(liElement);
//   liElement.addEventListener("click", function () {
//     this.remove();
//   });
// });

// cities.append(ulElement);

let header = document.querySelector("header");
header.style.backgroundColor = "black";
header.style.color = "white";
let container = document.querySelector(".container");
container.style.display = "flex";
container.style.justifyContent = "space-between";
container.style.alignItems = "center";
container.style.margin = "auto";
let navBar = document.querySelector(".nav-bar");
navBar.style.display = "flex";
navBar.style.gap = "30px";
let link = document.querySelectorAll(".link");
link.style.color = "grey";
link.style.listStyle = "none";
let contact = document.querySelector(".contact");
