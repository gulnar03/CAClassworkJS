// findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
// hərfini qaytarsın. Nəticə =====>> "e"
// function findFirstNotRepeatedChar(string) {
//   let newStr = "";
//   for (let i = 0; i < string.length; i++) {
//     string.indexOf(string[i]) === string.lastIndexOf(string[i])
//       ? (newStr += string[i])
//       : null;
//   }
//   return newStr[0];
// }
// console.log(findFirstNotRepeatedChar("abacddbecz"));

// TASK 2

// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.

// Nəticə: 3

function charCount(resource, char) {
  let count = 0;
  for (i = 0; i < resource.length; i++) {
    if (resource[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(charCount('w3rescource.com', 'c'));

