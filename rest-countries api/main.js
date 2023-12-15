let cards = document.querySelector(".cards");
let input = document.querySelector("input");
let select = document.querySelector("select");
const BASE_URL = "https://restcountries.com/v2/all";
let darkBtn = document.querySelector(".dark-btn");
let body = document.querySelector("body");
async function getData() {
  const res = await axios(`${BASE_URL}`);
  //   console.log(res.data);
  drawCard(res.data);
}
getData();

function drawCard(data) {
  cards.innerHTML = "";
  data.forEach((element) => {
    cards.innerHTML += `      <div class="card">
      <a href="details.html?name=${element.name}"> <img src="${element.flags.svg}" alt="" /><img
      />
      <h2>${element.name}</h2>
      <p>Population: ${element.population}</p>
      <p>Region: ${element.region}</p>
      <p>Capital: ${element.capital} </p></a>
      </div>`;
  });
}
input.addEventListener("input", async function (event) {
  const res = await axios(`${BASE_URL}`);
  let filterByName = res.data.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(event.target.value.toLocaleLowerCase())
  );

  drawCard(filterByName);
});

select.addEventListener("change", async function () {
  const res = await axios(
    `https://restcountries.com/v2/region/${select.value}`
  );
  drawCard(res.data);
});
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
}
darkBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (localStorage.getItem("darkMode") === "true") {
    localStorage.setItem("darkMode", false);
  } else {
    localStorage.setItem("darkMode", true);
  }
});