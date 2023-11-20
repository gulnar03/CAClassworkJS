// --------------------------------------------------------- TASK 1 ---------------------------------------------------------

// Bir dəyişən təyin edin və dəyəri 1 olsun. 1 saniyədən bir consol-da yaratdığınız dəyişənin dəyərini +1 artırın. 4 saniyə
// sonra intervalı sonlandırın.

// let count = 1;
// let interval = setInterval(() => {
//   console.log(count++);
// }, 1000);
// let timeOut = setTimeout(() => {
//   clearTimeout(interval);
// }, 4000);

// --------------------------------------------------------- TASK 2 ---------------------------------------------------------

// HTML-də button və text üçün tag yazın. button-a click ettikdə text-içindəki yazı dəyişsin

// let text = document.querySelector(".text");
// console.log(text);
// let changeBtn = document.querySelector(".change-text");
// changeBtn.addEventListener("click", function () {
//   console.log(changeBtn);
//   text.style.color = "blue";
//   text.style.fontSize = "48px";
//   text.innerText = "I am hacker!!!";
// });

// --------------------------------------------------------- TASK 3 ---------------------------------------------------------

// HTML-də birdən çox eyni adda class sahib element yaradın. Hər bir elementi loop ilə tək-tək console-a çıxardın.
// let variants = document.querySelectorAll(".choose");
// variants.forEach((item) => {
//   console.log(item.innerText);
// });

// --------------------------------------------------------- TASK 4 ---------------------------------------------------------

// let str = "developer";
// let index = 1;
// // Verilmiş string-in hər bir hərfini 1 saniyədən bir böyük hərf edin.

// // Developer
// // DEveloper
// // DEVEloper
// // DEVELOper
// // DEVELOPer
// // DEVELOPEr
// // DEVELOPER
// let dev = document.querySelector(".dev");
// let interval = setInterval(() => {
//   if (index <= str.length) {
//     str = str.slice(0, index).toLocaleUpperCase() + str.slice(index);
//     index++;
//     dev.innerText = str;
//     console.log(str);
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

// --------------------------------------------------------- TASK 5 ---------------------------------------------------------

// HTML-də button yaradın və ona click ettikdə body-nin background color-u dəyişsin.
let click = document.querySelector(".click-me");
let colors = ["blue", "red", "green", "blueviolet", "dodgerblue", "black"];
click.addEventListener("click", function () {
  console.log(click);
  document.body.style.backgroundColor = colors[Math.floor((Math.random() * colors.length))];
});
