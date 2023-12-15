let nameValue = new URLSearchParams(window.location.search).get("name");
const BASE_URL = "https://restcountries.com/v2/";
let details = document.querySelector(".detail-card");
let goBackBtn = document.querySelector(".go-btn");
let darkBtn = document.querySelector(".dark-btn");
let body = document.querySelector("body");

async function getData() {
  const res = await axios(`${BASE_URL}/name/${nameValue}`);
  details.innerHTML = `    <div class="image">
  <img src="${res.data[0].flags.svg}" alt="" /><img />
</div>
<div class="content">
<div class="content-left">  <h2>${res.data[0].name}</h2>
<h4>Population: ${res.data[0].population}</h4>
<h4>Region: ${res.data[0].region}</h4>
<h4>Capital: ${res.data[0].capital}</h4></div>
 <div class="content-right"> <h4>Sub Region: ${res.data[0].subregion}</h4>
 <h4>Top Level Domain: ${res.data[0].topLevelDomain} </h4>
 <h4>Currencies: ${res.data[0].currencies[0].code}</h4>
 <h4>Languages: ${res.data[0].languages[0].name}</h4></div>
</div>`;
}
getData();

goBackBtn.addEventListener("click", function () {
  window.history.back();
});

if (localStorage.getItem("darkMode") == "true") {
  body.classList.add("dark-mode");
}

darkBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (localStorage.getItem("darkMode") == "true") {
    localStorage.setItem("darkMode", false);
  } else {
    localStorage.setItem("darkMode", true);
  }
});
