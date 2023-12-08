const BASE_URL = "http://universities.hipolabs.com/search";
let tBody = document.querySelector("tbody");
let search = document.querySelector(".search");
let loader = document.querySelector(".loader");

async function getData() {
  loader.classList.add("show");
  const res = await axios(`${BASE_URL}?country=spain`);
  loader.classList.remove("show");
  console.log(res.data);
  drawTable(res.data);
}
getData();

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += ` <td>${element.name}</td>
    <td>${element.country}</td>
    <td>${element.domains}</td>
    <td>${element.web_pages}</td>`;
    tBody.append(trElem);
  });
}
search.addEventListener("input", async function (event) {
  loader.classList.add("show");
  const res = await axios(
    `${BASE_URL}?country=spain&name=${event.target.value}`
  );
  loader.classList.remove("show");
  drawTable(res.data);
});
