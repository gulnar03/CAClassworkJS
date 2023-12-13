let goBackBtn = document.querySelector(".go-back");
let allInputs = document.querySelectorAll("input");
let form = document.querySelector("form");
const BASE_URl = "http://localhost:3000";
const id = new URLSearchParams(window.location.search).get("id");

async function getData() {
  const res = await axios(`${BASE_URl}/users/${id}`);
  // console.log(res.data);
  allInputs[0].value = res.data.name;
  allInputs[1].value = res.data.surname;
  allInputs[2].value = res.data.email;
}
if (id) {
  getData();
}
goBackBtn.addEventListener("click", function () {
  window.history.back();
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let users = {
    name: allInputs[0].value,
    surname: allInputs[1].value,
    email: allInputs[2].value,
  };
  if (!id) {
    let date = new Date();
    axios.post(`${BASE_URl}/users`, users);
  } else {
    axios.patch(`${BASE_URl}/users/${id}`, users);
    window.location = "index.html";
  }
  allInputs.forEach((element) => (element.value = ""));
});
