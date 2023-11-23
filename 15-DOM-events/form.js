let pasInput = document.querySelector("#password");
let userInput = document.querySelector("#username");
let emailInp = document.querySelector("#email");
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  let Obj = {
    password: pasInput.value,
    userName: userInput.value,
    email: emailInp.value,
  };
  console.log(Obj);
  event.preventDefault();
});
