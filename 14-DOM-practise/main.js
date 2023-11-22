let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let number = document.querySelector(".count");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let resetBtn = document.querySelector(".reset");
let incValue = document.querySelector("#inc");
let decValue = document.querySelector("#dec");
let incBtn = document.querySelector(".inc-input");
let decBtn = document.querySelector(".dec-input");

number.style.color = "teal";
startBtn.style.backgroundColor = "green";
startBtn.style.border = "none";
startBtn.style.width = "90px";
startBtn.style.height = "30px";
startBtn.style.color = "white";
stopBtn.style.backgroundColor = "red";
stopBtn.style.border = "none";
stopBtn.style.width = "90px";
stopBtn.style.height = "30px";
stopBtn.style.color = "white";
incrementBtn.style.color = "white";
incrementBtn.style.backgroundColor = "teal";
incrementBtn.style.width = "150px";
incrementBtn.style.height = "30px";
incrementBtn.style.border = "none";
decrementBtn.style.color = "white";
decrementBtn.style.backgroundColor = "teal";
decrementBtn.style.width = "150px";
decrementBtn.style.height = "30px";
decrementBtn.style.border = "none";
resetBtn.style.border = "none";
resetBtn.style.backgroundColor = "red";
resetBtn.style.width = "90px";
resetBtn.style.height = "30px";
incBtn.style.width = "200px";
incBtn.style.height = "30px";
incBtn.style.border = "none";
decBtn.style.width = "200px";
decBtn.style.height = "30px";
decBtn.style.border = "none";
let count = 0;
let countInterval;
startBtn.addEventListener("click", function () {
  countInterval = setInterval(() => {
    number.innerText = count++;
  }, 1000);
});
stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  this.setAttribute("disabled", null);
  startBtn.removeAttribute("disabled");
});
incrementBtn.addEventListener("click", function () {
  number.innerText = count++;
});
decrementBtn.addEventListener("click", function () {
  number.innerText = count--;
});
resetBtn.addEventListener("click", function () {
  count = 0;
  number.innerText = 0;
  clearInterval(countInterval);
});
decBtn.addEventListener("click", function () {
  count -= +decValue.value;
  number.innerText = count;
});
incBtn.addEventListener("click", function () {
  count += +incValue.value;
  number.innerText = count;
});

