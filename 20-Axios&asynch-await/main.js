const BASE_URL = "https://fakestoreapi.com/products";
let products = document.querySelector(".products");
let electronBtn = document.querySelector(".electron");
let jeweleryBtn = document.querySelector(".jewelery");
let menBtn = document.querySelector(".men");
let womenBtn = document.querySelector(".women");

async function getData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    console.log(response.data);
    drawCard(response.data);
  } catch (error) {
    console.log(error);
  }
}
getData("");

function drawCard(arr) {
  products.innerHTML = "";
  arr.forEach((element) => {
    products.innerHTML += ` 
   <div class="col col-md-6 col-lg-4 py-3">
   <a href="details.html?id=${element.id}"><div class="card" style="width: 18rem">
       <img src="${element.image}" class="card-img-top w-100 px-2" alt="..."/>
       <div class="card-body">
         <h5 class="card-title">${element.category} </h5>
         <h5 class="card-title">${element.price} </h5>
         <p class="card-text">
           ${element.title}
         </p>
       </div>
   </a>
     </div>
   `;
  });
}

electronBtn.addEventListener("click", function () {
  getData("/category/electronics");
});
jeweleryBtn.addEventListener("click", function () {
  getData("/category/jewelery");
});
menBtn.addEventListener("click", function () {
  getData("/category/men's%20clothing");
});
womenBtn.addEventListener("click", function () {
  getData("/category/women's%20clothing");
});
