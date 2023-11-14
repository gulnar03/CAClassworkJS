// TASK 1
// const text = "Java is awesome. Java is fun.";

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.

// console.log(text.replaceAll("Java", "Javascript"));
// console.log(text.replace(/java/gi, "javascript"));

// TASK 2
// function mixUp(a, b) {
//   return b.slice(0, 2) + a.slice(2) + " " + a.slice(0,2) + b.slice(2);
// }

// // mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// // nəticə çıxardın.

// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// TASK 3
// function verbing(word) {
//   if (word.endsWith("ing")) {
//     return word + "ly";
//   } else if (word.length > 3) {
//     return word + "ing";
//   } else {
//     return word;
//   }
// }

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.

// console.log(verbing("go")); // go
// console.log(verbing("swim")); //swiming
// console.log(verbing("swiming")); //swimingly

// TASK 4

// Sözün palindrom olub olmadığını yoxlayın.

// function isPalindrome(string) {
//   if (string === string.split("").reverse().join("")) {
//     return "it is palindrome";
//   } else {
//     ("it is not palindrome");
//   }
// }

// console.log(isPalindrome("radar"));

// TASK 5

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const length = 4;
let newArr = [];

function splitIntoChunk(arr, len) {
  if (arr.length === 4) {


  }
}

console.log(splitIntoChunk(array, leng)); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]
