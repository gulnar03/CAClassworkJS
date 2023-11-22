//   TASK 1

// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(
//   number.filter((item, i) => {
//     return item % 2 === 1;
//   })
// );

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// console.log(
//   array.filter((item, i) => {
//     return item >=1 && item <= 10;
//   })
// );

//   TASK 2

// const users = [
//   {
//     first_name: "Mike",
//     last_name: "Sheridan",
//   },
//   {
//     first_name: "Tim",
//     last_name: "Lee",
//   },
//   {
//     first_name: "John",
//     last_name: "Carte",
//   },
// ];
//   Verilmiş array-də objectlərin first_name və last_name dəyişkənin aşağıdaki kimi göstərin.

//   =====> ["Mike Sheridan", "Tim Lee", "John Carte"]

// let userNames = users.map((item, i) => {
//   return fullName = `${item.first_name}  ${item.last_name}`;
// });
// console.log(userNames);

// -----------TASK 3

// const persons = [
//   { name: "Akif", age: 25 },
//   { name: "Aysu", age: 32 },
//   { name: "Ali", age: 35 },
// ];
// find metodu vasitəsilə array-in içindəki, yaşı 30-dan yuxarı olan ilk şəxsi "firstPerson" adlı dəyişkənə
// mənimsədib console-a çıxardın. ====> { name: 'Aysu', age: 32 }

// let firstPerson = persons.find((element, index) => {
//   console.log(index);
//   return element.age > 30;
// });
// console.log(firstPerson);

// tapdığınız objectin index-ni də ikinci bir console-da çıxardın.(metod ilə)

//----------- TASK 4

// const array1 = [1, 4, 9, 16];
// Verilmiş array-in hər bir elementini qüvvətə yüksəldin.   ======> [ 1, 16, 81, 256 ]

// let square = array1.map((item, index) => item ** 2);
// console.log(square);

// -----------TASK 5

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// // Verilmiş animals array-ni slice metodu vasitəsilə aşağıdaki kimi yazmağa çalışın
// console.log(animals.slice(2));
// console.log(animals.slice(2, 4));
// console.log(animals.slice(1));
// console.log(animals.slice(3));
// console.log(animals.slice());

//------------------- TASK 6
// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, 'Feb');
// console.log(months);
// // // Expected output: ["Jan", "Feb", "March", "April", "June"]
// months.splice(3, 1, "May");
// console.log(months);

//-------------------------- TASK 7

const company = [
  { firstName: "John", lastName: "Doe", salary: 50000, yearsWorked: 5 },
  { firstName: "Alice", lastName: "Johnson", salary: 60000, yearsWorked: 8 },
  { firstName: "Bob", lastName: "Smith", salary: 75000, yearsWorked: 3 },
  { firstName: "Eve", lastName: "Williams", salary: 55000, yearsWorked: 7 },
];

let companyEmployee = company.map((element, index) => {
  return `${element.firstName} ${element.lastName} illik ${element.salary} maas alir ve ${element.yearsWorked} ildir calisir`;
});
console.log(companyEmployee);
