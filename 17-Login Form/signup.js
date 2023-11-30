let form = document.querySelector("form");
let emailInput = document.createElement("input");
let passwordInput = document.createElement("input");
let signUpBtn = document.createElement("button");
let body = document.querySelector("body");
let h1 = document.createElement("h1");

form.append(h1, emailInput, passwordInput, signUpBtn);
emailInput.setAttribute("placeholder", "Email Address");
passwordInput.setAttribute("placeholder", "Password");
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
signUpBtn.innerText = "Signup";

signUpBtn.style.width = "200px";
signUpBtn.style.height = "40px";
signUpBtn.style.display = "block";
signUpBtn.style.marginTop = "30px";
emailInput.style.width = "100%";
passwordInput.style.width = "100%";
emailInput.style.width = "100%";
passwordInput.style.width = "100%";
signUpBtn.style.backgroundColor = "blue";
signUpBtn.style.border = "none";
signUpBtn.style.borderRadius = "15px";
signUpBtn.style.color = "white";
form.addEventListener("submit", function (event) {
  let inputObj = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(inputObj);
  event.preventDefault();
  console.log((window.location.href = "http://127.0.0.1:5501/index.html"));
});
