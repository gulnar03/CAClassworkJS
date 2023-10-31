let weather = 10;
if (weather >= 22) {
  console.log("Nazik geyin");
} else if (weather > 15) {
  console.log("Pencek geyin");
} else {
  console.log("Qalin geyin");
}
// TASK 2
let letter = "d";
switch (letter) {
  case "a":
  case "e":
  case "o":
  case "u":
  case "i":
    console.log("Herf saitdir");
    break;

  default:
    console.log("Herf sait deyil");
    break;
}
// TASK 3
let a = 25;
let b = 52;
let c = 88;
if (a > b && a > c) {
  console.log(`${a} is Max number `);
} else if (b > a && b > c) {
  console.log(`${b} is Max number `);
} else {
  console.log(`${c} is Max number`);
}
// TASK 4

let grade = 150;
if (100 > grade > 90) {
  console.log("Exam grade: A");
} else if (90 > grade > 80) {
  console.log("Exam grade: B");
} else if (80 > grade > 70) {
  console.log("Exam grade: C");
} else if (70 > grade > 60) {
  console.log("Exam grade: D");
} else if (60 > grade > 50) {
  console.log("Exam grade: E");
} else if (grade > 100) {
  console.log("We don't have this type grade");
} else {
  console.log("You are failed");
}

// TASK 5

let firstName = "Memmedhuseyn";
if (firstName.length < 5) {
  console.log("Qisa adin var");
} else if (firstName.length < 10) {
  console.log("Orta uzunluqda adiniz var");
} else {
  console.log("Adiniz cox uzundur");
}
