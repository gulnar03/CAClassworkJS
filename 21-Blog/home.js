let cards = document.querySelector(".cards");
const BASE_URL = "http://localhost:3000";

async function getData() {
  const res = await axios(`${BASE_URL}/blogs`);
  drawCard(res.data);
}
getData();

function drawCard(data) {
  data.forEach((element) => {
    cards.innerHTML += `  <div class="card">
        <h2>${element.title}</h2>
        <p> ${element.body.slice(0, 10)}<a href="details.html">Read More</a></p>
        <span>written by ${element.author}</span>
        <div>
          <button onclick=deleteData(${
            element.id
          },this) class="del">Delete</button>
        <a href="form.html?=${element.id}"><button onclick=editData(${
      element.id
    },this) class="edit">Edit</button></a>
        </div>
      </div>`;
  });
}
async function deleteData(id, del) {
  if (confirm("are you sure?")) {
    await axios.delete(`${BASE_URL}/blogs/${id}`);
    del.closest(".card");
  }
}
