// function printFullName(firstName, lastName) {
//   return `I am ${firstName} ${lastName}`;
// }
// console.log(`I am ${firstName} ${lastName}`);
// printFullName("Gulnar", "Babakishiyeva");

// TASK 2

// let sum = function (num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// };
// console.log(sum(2, 3));

// let multiply = function (num1, num2) {
//   let multiply = num1 * num2;
//   return multiply;
// };
// console.log(multiply(2, 3));

// let subtruct = function (num1, num2) {
//   let subtruct = num1 - num2;
//   return subtruct;
// };
// console.log(subtruct(2, 3));

// let divide = function (num1, num2) {
//   let divide = num1 / num2;
//   return divide;
// };
// console.log(divide(2, 3));

// TASK 3

// function calculateParams(num1, num2, operator) {
//   let result;
//   if (operator == "+") {
//     result = num1 + num2;
//   } else if (operator == "-") {
//     result = num1 - num2;
//   } else if (operator == "/") {
//     result = num1 / num2;
//   } else if (operator == "*") {
//     result = num1 * num2;
//   } else {
//     console.log("Bele bir emeliyyat yoxdur");
//   }
//   return result;
// }
// console.log(calculateParams(2, 5, "+"));
// console.log(calculateParams(2, 5, "-"));
// console.log(calculateParams(2, 5, "/"));
// console.log(calculateParams(2, 5, "*"));

// TASK 4

// const employees = [
//   { name: "Jamil", salary: 50000, department: "IT" },
//   { name: "Jale", salary: 60000, department: "HR" },
//   { name: "Bayram", salary: 55000, department: "IT" },
//   { name: "Sahil", salary: 75000, department: "HR" },
//   { name: "Maryam", salary: 65000, department: "IT" },
//   { name: "Elnara", salary: 80000, department: "HR" },
//   { name: "Davud", salary: 70000, department: "IT" },
// ];

// let filterEmployees = function (array) {
//   let arr = [];
//   for (let i = 0; i < array.length; i++) {
//     if (employees[i].salary > 60000) {
//       arr.push(array[i]);
//     }
//   }
//   return arr;
// };
// console.log(filterEmployees(employees));

// TASK 5

// let reverseString = (word) => {
// let string = "";
//   for (let i = word.length - 1; i >= 0; i--) {
//     string += word[i];
//   }
//   return string;
// };
// console.log(reverseString("lorem"));

// TASK 6

let str =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
function countOfLetters(letters) {
  let count = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== " " && letters[i] !== ".") {
      count++;
    }
  }
  return count;
}
console.log(countOfLetters(str));
