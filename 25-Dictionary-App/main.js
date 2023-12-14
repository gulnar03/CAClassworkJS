const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en";
let cardTop = document.querySelector(".card-top");
let search = document.querySelector("form");
let cardContent = document.createElement("div");
let input = document.querySelector("input");

async function getData(word) {
  const res = await axios(`${BASE_URL}/${word}`);
  console.log(res.data);
  cardContent.innerHTML = `
          <h2>${res.data[0].word}</h2>
          <i class="fa-solid fa-volume-high"></i>
        <div class="description">
          <h3>Definiton:<span>(${res.data[0].meanings[0].partOfSpeech})</span></h3>
          <p>${res.data[0].meanings[0].definitions[0].definition}</p>
        </div>
      </div>
       `;
  cardTop.after(cardContent);
}
getData();

search.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(input.value);
});
