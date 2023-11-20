// let newArray = [];
// console.log(newArray);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// console.log(itCompanies.length);

// for (let i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies[i]);
// }
// console.log(itCompanies[0]);
// console.log(itCompanies[itCompanies.length - 1]);
// console.log(itCompanies[(itCompanies.length - 1) / 2]);

// let empty = [];
// for (let i = 0; i < itCompanies.length; i++) {
//   empty.push(itCompanies[i].toLocaleUpperCase());
// }
// console.log(empty);
// console.log(`${itCompanies.toString()} boyuk IT shirketleridir`);

for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i] === itCompanies[i].toLocaleUpperCase()) {
    console.log(`${i}. ${itCompanies[i]}`);
  }
}