import { products } from "./data.js";

let Products = document.querySelector(".products");
let basket = JSON.parse(localStorage.getItem("basket")) ?? [];
function drawCard(data) {
  Products.innerHTML = "";
  data.forEach((item) => {
    Products.innerHTML += `   <div class="product">
    <img src="${item.thumbnail}" alt="" class="card-img" />
      <div class="card-content">
        <h5 class="card-title">${item.title}</h5>
        <h5 class="card-title">${item.price}</h5>
        <p class="card-text">${item.description.slice(0, 100)}...</p>
      </div>
      <div class="add">
        <button onclick="addBasket("${item._id}" )">Add to card</button>
        <i class="fa-regular fa-heart"></i>
      </div>
`;
  });
}
drawCard(products);
function addBasket(id) {
  let product  = products.find((item) => item._id == id);
  basket.push(product);
  localStorage.setItem("basket", JSON.stringify(basket));
}

