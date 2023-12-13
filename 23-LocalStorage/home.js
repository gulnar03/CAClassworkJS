let logoutBtn = document.querySelector(".log-out");
window.addEventListener("load", function () {
  localStorage.getItem("user") ? null : (window.location = "login.html");
});

logoutBtn.addEventListener("click", function () {
  confirm("are you sure to log-out") && localStorage.clear();
  window.location.reload();
});
