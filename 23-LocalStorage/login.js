let form = document.querySelector("form");
let allInputs = document.querySelectorAll("input");
let arr = JSON.parse(localStorage.getItem("user")) ?? [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user = arr.find(
    (item) =>
      item.email === allInputs[0].value && item.password === allInputs[1].value
  );
  if (user) {
    localStorage.setItem("user", user.email);
  } else {
    alert("email or password is not correct");
  }
  allInputs.forEach((item) => (item.value = ""));
  window.location = "home.html";
});
