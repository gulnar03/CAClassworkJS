// 1. arrayın içindəki müsbət ədədləri tapın
// let arr = [2, 4, -3, 43, 41, -3];
// let newArr = [];

// function findPositives(arr) {
//   let newArr = arr.filter((item) => item > 0);
//   return newArr;
// }
// console.log(findPositives(arr));

// 2. üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın
// function isRectangle(a, b, c) {
//   if (
//     a ** 2 + b ** 2 === c ** 2 ||
//     b ** 2 + c ** 2 === a ** 2 ||
//     a ** 2 + c ** 2 === b ** 2
//   ) {
//     return "yes";
//   } else {
//     return "no";
//   }
// }

// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// 3. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın
// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];
// console.log(webTechs.findIndex((item) => item === item.toLocaleUpperCase()));

// 4. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin
// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];
// console.log(webTechs2.filter((item)=>item===item.toLocaleUpperCase()));

// 5. Reverse the Case
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {
//   if (str === str.toLocaleUpperCase()) {
//     return str.toLocaleLowerCase();
//   } else {
//     return str.toLocaleUpperCase();
//   }
// }

// console.log(reverseCase("MANY THANKS"));; //"many thanks"
// console.log(reverseCase("many thanks"));; //"MANY THANKS"

// const users = [
//   {
//     name: "Anar",
//     surname: "Hesenli",
//     age: "22",
//     uni: "ADA",
//     gender: "male",
//     salary: "3001",
//   },
//   {
//     name: "Nicat",
//     surname: "Sadiqov",
//     age: "25",
//     uni: "GDU",
//     gender: "male",
//     salary: "200",
//   },
//   {
//     name: "Nezrin",
//     surname: "Reshidova",
//     age: "23",
//     uni: "UNEC",
//     gender: "female",
//     salary: "300",
//   },
//   {
//     name: "Hikmet",
//     surname: "Hesenov",
//     age: "22",
//     uni: "UNEC",
//     gender: "male",
//     salary: "320",
//   },
//   {
//     name: "Murad",
//     surname: "Salmanli",
//     age: "23",
//     uni: "GDU",
//     gender: "male",
//     salary: "420",
//   },
//   {
//     name: "Aynure",
//     surname: "Hesenzade",
//     age: "23",
//     uni: "BMU",
//     gender: "female",
//     salary: "3210",
//   },
// ];

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// 2.4.Sort users by age (ascending).

// console.log(
//   users.filter(
//     (item) =>
//       item.uni === "UNEC" && item.surname.toLocaleLowerCase().startsWith("r")
//   )
// );

// console.log(
//   users.filter(
//     (item) => item.age === "22" && item.name.toLocaleLowerCase().startsWith("a")
//   )
// );

// let newArr = users.map((item) => {
//   if (item.gender === "male") {
//     return { ...item, name: `Mr ${item.name}` };
//   } else {
//     return { ...item, name: `Ms. ${item.name}` };
//   }
// });
// console.log(newArr);

// console.log(users.sort((a, b) => a.age - b.age));


//   Find the employee who has many skills in the employees object.


// let employees = [
//     {
//       email: "alex@alex.com",
//       skills: ["HTML", "CSS", "JavaScript"],
//       age: 20,
//       isLoggedIn: false,
//       points: 30,
//     },
//     {
//       email: "asab@asab.com",
//       skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "Redux",
//         "MongoDB",
//         "Express",
//         "React",
//         "Node",
//       ],
//       age: 25,
//       isLoggedIn: false,
//       points: 50,
//     },
//     {
//       email: "daniel@daniel.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//       age: 30,
//       isLoggedIn: true,
//       points: 50,
//     },
//     {
//       email: "daniel@alex.com",
//       skills: ["HTML", "CSS", "JavaScript", "Python"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40,
//     },
//     {
//       email: "john@john.com",
//       skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//       age: 20,
//       isLoggedIn: true,
//       points: 50,
//     },
//     {
//       email: "thomas@thomas.com",
//       skills: ["HTML", "CSS", "JavaScript", "React"],
//       age: 20,
//       isLoggedIn: false,
//       points: 40,
//     },
//     {
//       email: "paul@paul.com",
//       skills: [
//         "HTML",
//         "CSS",
//         "JavaScript",
//         "MongoDB",
//         "Express",
//         "React",
//         "Node",
//       ],
//       age: 20,
//       isLoggedIn: false,
//       points: 40,
//     },
//   ];   
  console.log(0.1+0.2==0.3);