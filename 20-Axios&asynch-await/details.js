const id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "https://fakestoreapi.com/products";
let details = document.querySelector(".details");

async function getData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}/${id}`);
    details.innerHTML = `   <div class="col col-md-6 col-lg-4 py-3">
    <div class="card d-flex" style="width: 18rem">
    <img src="${response.data.image}" class="card-img-top w-100 px-2" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">${response.data.category} </h5>
    <h5 class="card-title">${response.data.price} </h5>
    <p class="card-text">
    ${response.data.description}
    </p>
    <a href="#" class="btn btn-primary" onclick=goBack()>Go Back</a>
    </div>
    </div>`;
  } catch (error) {
    console.log(error);
  }
}
getData("");

function goBack() {
  window.history.back();
}
