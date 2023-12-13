let cards = document.querySelector(".cards");
let goBackBtn = document.querySelector(".go");
goBackBtn.addEventListener("click", function () {
  window.history.back();
});
let favItem = JSON.parse(localStorage.getItem("user"));
async function drawCard() {
  favItem.forEach((element) => {
    cards.innerHTML += `          <div class="col col-md-6 col-lg-3 mb-4">
        <div class="card" style="width: 18rem">
          <img
            src="${element.userphoto}"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">${element.name} ${element.surname}</h5>
            <p class="card-text">
             ${element.email}
            </p>
            <p class="card-text">
             ${element.date}
            </p>
            <button class="btn btn-primary" onclick=removeFav(${element.id},this)>Remove</button>
          </div>
        </div>
      </div>`;
  });
}
drawCard();

function removeFav(id, btn) {
  if (confirm("are you sure to delete")) {
    let elem = favItem.filter((item) => item.id != id);
    btn.closest(".card").remove();
    localStorage.setItem("user", JSON.stringify(elem));
  }
}
