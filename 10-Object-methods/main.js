let personalInfo = {
  firstName: "Gulnar",
  lastName: "Babakishiyeva",
  age: 20,
  skill: ["play the piano", "speak foreign language"],
  university: "GSU",
};
personalInfo["phone number"] = 0504345456;
personalInfo.city = "Ganja";
// console.log(personalInfo);
// console.log(Object.keys(personalInfo));
// console.log(Object.values(personalInfo));
// console.log(Object.entries(personalInfo));

// let arr = Object.values(personalInfo);
// let maxLength = "";

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > maxLength.length) {
//     maxLength = arr[i];
//   }
// }
// console.log(maxLength);
// delete personalInfo.age;
// console.log(personalInfo);

// TASK 2

// var library = [
//   {
//     title: "The Road Ahead",
//     author: "Bill Gates",
//     readingStatus: true,
//   },
//   {
//     title: "Walter Isaacson",
//     author: "Steve Jobs",
//     readingStatus: true,
//   },
//   {
//     title: "Suzanne Collins",
//     author: "Mockingjay: The Final Book",
//     readingStatus: false,
//   },
// ];

//   "library" adlı array yaradın. İçərisində title, author və readingStatus adlı key-ləri olan objectlər yaradın.
//   Əgər readingStatus true olarsa console-a "Already read 'title' by author' Əgər false
//   olarsa "You still need to read 'title' by author' yazsın

//   Nəticə ====>>
//   Already read 'The Road Ahead' by Bill Gates.
//   Already read 'Walter Isaacson' by Steve Jobs.
//   You still need to read 'Suzanne Collins' by Mockingjay: The Final Book.

// library.forEach((item) => {
//   if (item.readingStatus === true) {
//     console.log(`  Already read ${item.title} by ${item.author}`);
//   } else {
//     console.log(` You still need to read ${item.title} by ${item.author}`);
//   }
// });

// TASK 3
// "employee" adlı object yaradın. Object-in name, jobTitle, salary və promote adında key-ləri var.
// promote bir anonim function-dır, 2 parametr qəbul edir. jobTitle-in value-ı ilk dəfə "Software Developer" salary isə 75000.
// Ən sonda employee.promote-a bir yeni vəzifə və yeni maaş göndərin.

// employee.promote('Senior Software Engineer', 90000);

// Nəticə: Promotion: Alice is now Senior Software Engineer with a salary of $90000
let employee = {
  name: "Gulnar",
  jobTitle: "Senior Software Engineer",
  salary: $100000,
};
function promote(a, b) {
  console.log(a, b);
}
employee.promote(`${employee.name} is now ${employee.jobTitle} `);
