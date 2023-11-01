// for (let index = 1; index <100 ; index++) {
//     if (index % 2===0) {
//         console.log(index);

//     }

// }

// TASK 2

// let str = "Gulnar";
// let strLength = str.length;
// for (let index = 0; index < strLength; index++) {
//    console.log(str[index]);
// }

// TASK 3
// let a = 0;
// while (a < 100) {
//   a++;
//   if (a % 10 === 7) console.log(a);
// }

// TASK4

// let c = 0;
// while (c < 100) {
//   c++;
//   if (c % 11 === 0) console.log(c);
// }

// TASK 5

// let d = 36;
// for (let index = 0; index <= d; index++) {
//   if (d % index === 0) console.log(index);
// }

// TASK 6

let m = 40;
while (m) {
  if (m % 15 === 0) {
    console.log("fizzbuzz");
    break;
  } else if (m % 3 === 0) {
    console.log("fizz");
    break;
  } else if (m % 5 === 0) {
    console.log("buzz");
    break;
  }
}
// TASK 6

let k = 10;
let factorial = 1;
for (let index = 1; index < k; index++) {
  factorial *= index;
}
console.log(`factorial ${factorial}`);