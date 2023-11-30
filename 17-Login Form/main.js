let form = document.querySelector("form");
let emailInput = document.createElement("input");
let passwordInput = document.createElement("input");
let loginBtn = document.createElement("button");
let body = document.querySelector("body");
let h1 = document.createElement("h1");

form.append(h1, emailInput, passwordInput, loginBtn);
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
loginBtn.innerText = "Login";
emailInput.style.width = "100%";
passwordInput.style.width = "100%";
emailInput.style.width = "100%";
passwordInput.style.width = "100%";

loginBtn.style.width = "200px";
loginBtn.style.height = "40px";
loginBtn.style.display = "block";
loginBtn.style.marginTop = "30px";

loginBtn.style.backgroundColor = "blue";
loginBtn.style.border = "none";
loginBtn.style.borderRadius = "15px";
loginBtn.style.color = "white";
let arr = [];
form.addEventListener("submit", function (event) {
  if (emailInput.value !== "" && passwordInput.value !== "") {
    let inputObj = {
      email: emailInput.value,
      password: passwordInput.value,
    };
    arr.push(inputObj);
    console.log(inputObj);
  } else {
    window.alert("Zehmet olmasa formu doldurun");
  }
  event.preventDefault();
  console.log((window.location.href = "http://127.0.0.1:5501/signup.html"));
  localStorage.setItem("user", JSON.stringify(arr));
  JSON.parse(localStorage.getItem("user"));
});
