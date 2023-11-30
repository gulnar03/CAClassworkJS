let form = document.querySelector("form");
let emailInput = document.createElement("input");
let passwordInput = document.createElement("input");
let signUpBtn = document.createElement("button");
let body = document.querySelector("body");
let h1 = document.createElement("h1");
let nameInput = document.createElement("input");
let confirmInput = document.createElement("input");

form.append(h1, nameInput, emailInput, passwordInput, confirmInput, signUpBtn);
emailInput.setAttribute("placeholder", "Email Address");
passwordInput.setAttribute("placeholder", "Password");
emailInput.type = "email";
emailInput.style.padding = "5px";
passwordInput.style.padding = "5px";
emailInput.style.borderRadius = "8px";
passwordInput.style.borderRadius = "8px";
emailInput.style.outline = "none";
emailInput.style.display = "block";
emailInput.style.marginBottom = "20px";
passwordInput.style.outline = "none";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.gap = "40px";
signUpBtn.innerText = "Signup ";
nameInput.setAttribute("placeholder", "Name");
confirmInput.setAttribute("placeholder", "Confrm password");
nameInput.style.padding = "5px";
confirmInput.style.padding = "5px";
nameInput.style.borderRadius = "8px";
confirmInput.style.borderRadius = "8px";
nameInput.style.outline = "none";
confirmInput.style.display = "block";
nameInput.style.marginBottom = "20px";
confirmInput.style.outline = "none";
passwordInput.style.marginBottom = "20px";
passwordInput.type = "password";
confirmInput.type = "password";
signUpBtn.style.width = "200px";
signUpBtn.style.height = "40px";
signUpBtn.style.display = "block";
signUpBtn.style.marginTop = "30px";
emailInput.style.width = "100%";
passwordInput.style.width = "100%";
nameInput.style.width = "100%";
confirmInput.style.width = "100%";
signUpBtn.style.backgroundColor = "blue";
signUpBtn.style.border = "none";
signUpBtn.style.borderRadius = "15px";
signUpBtn.style.color = "white";

let user = JSON.parse(localStorage.getItem("user")) ?? [];
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputObj = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  if (passwordInput.value === confirmInput.value) {
    user.push(inputObj);
    console.log(inputObj);
  } else {
    window.alert("Password is incorrect");
  }
  console.log((window.location.href = "http://127.0.0.1:5501/index.html"));
  localStorage.setItem("user", JSON.stringify(user));
  JSON.parse(localStorage.getItem("user"));
});
