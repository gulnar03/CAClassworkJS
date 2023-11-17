// ------------------------------------------------------- TASK 1 -------------------------------------------------------

// Write a JavaScript function that reverse a number.
// Sample Data and output:

// Example x = 32243;
// Expected Output : 34223

// function reverseNum(num) {
//   return parseInt(num.toString().split("").reverse().join(""));
// }
// console.log(reverseNum(32243));

// ------------------------------------------------------- TASK 2 -------------------------------------------------------

// Write a JavaScript function that returns a passed string with letters in
// alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

// let str = "webmaster";
// let result = str.split("").sort((a, b) => a.localeCompare(b));
// console.log(result);

// ------------------------------------------------------- TASK 3 -------------------------------------------------------

// Write a JavaScript function that accepts a string as a parameter and converts the
// first letter of each word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function upperCase(str) {
  let array = str.split(" ");
  let result = array.map((element) => element[0].toLocaleUpperCase() + element.slice(1));
return result.join(' ')
}

console.log(upperCase("the quick brown fox"));
