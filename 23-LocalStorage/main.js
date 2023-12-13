let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");
let loginBtn = document.querySelector(".login-btn");

let arr = JSON.parse(localStorage.getItem("user")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let bool = arr.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );

  if (!bool) {
    let obj = {
      userName: allInputs[0].value,
      email: allInputs[1].value,
      password: allInputs[2].value,
      id: Date.now(),
    };

    arr.push(obj);

    localStorage.setItem("user", JSON.stringify(arr));
  } else {
    window.alert("username or email already used");
  }
  allInputs.forEach((item) => (item.value = ""));
  window.location = "login.html";
});
