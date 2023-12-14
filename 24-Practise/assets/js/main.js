const tBody = document.querySelector("tbody");
const BASE_URl = "http://localhost:3000/";
async function getData() {
  const res = await axios(`${BASE_URl}/users`);
  console.log(res.data);
  drawTAble(res.data);
}
getData();
let favItem = JSON.parse(localStorage.getItem("user")) ?? [];

function drawTAble(data) {
  tBody.innerHTML = "";
  data.forEach((element) => {
    let trElem = document.createElement("tr");
    trElem.innerHTML += `<td>${element.id}</td>
    <td><img src="${element.userphoto}"/></td>
    <td>${element.name}</td>
    <td>${element.surname}</td>
    <td>${element.email}</td>
    <td>${element.date}</td>
    <td>
    <a  class="btn btn-success" href="form.html?id=${element.id}">Edit</a>
   <button type="button" class="btn btn-danger" onclick=deleteUser(${element.id},this)>Delete</button>
    <button type="button" class="btn btn-primary" oclick=addToFav(${element.id})>Add Fav</button>
    </td>`;
    tBody.append(trElem);
  });
}
async function deleteUser(id, btn) {
  if (confirm("are you sure to delete?")) {
    btn.closest("tr").remove();
    await axios.delete(`${BASE_URl}/users/${id}`);
  }
}

async function addToFav(id) {
  const res = await axios(`${BASE_URl}/users/${id}`);
  let item = favItem.find((element) => element.id === id);
  if (!item) {
    favItem.push(res.data);
    localStorage.setItem("user", JSON.stringify(favItem));
  } else {
    alert("this item already in favorite");
  }
}
