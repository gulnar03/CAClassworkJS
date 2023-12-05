const BASE_URL = "https://dog.ceo/api/breeds/image";
let cont = document.querySelector(".container");
let image = document.createElement("img");
image.src = "https://images.dog.ceo/breeds/labrador/n02099712_3865.jpg";

cont.append(image);

setInterval(() => {
  fetch(`${BASE_URL}/random`)
    .then((res) => res.json())
    .then((data) => (image.src = data?.message));
}, 2000);

image.style.width = "500px";
image.style.height = "400px";
image.style.borderRadius = "15px";
