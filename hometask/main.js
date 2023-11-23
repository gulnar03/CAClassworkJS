let result = document.querySelector(".result");
let input1 = document.querySelector("#value-1");
let input2 = document.querySelector("#value-2");
let addBtn = document.querySelector(".add");
let subBtn = document.querySelector(".substract");
let mulBtn = document.querySelector(".multiply");
let divideBtn = document.querySelector(".divide");
let resetBtn = document.querySelector(".reset");

let count = 0;
addBtn.addEventListener("click", function () {
  count = +input1.value + +input2.value;
  result.innerText = count;
});
subBtn.addEventListener("click", function () {
  count = +input1.value - +input2.value;
  result.innerText = count;
});
mulBtn.addEventListener("click", function () {
  count = +input1.value * +input2.value;
  result.innerText = count;
});
divideBtn.addEventListener("click", function () {
  count = +input1.value / +input2.value;
  result.innerText = count;
});
resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = count;
});
