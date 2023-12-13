const tBody = document.querySelector("tbody");
const BASE_URl = "http://localhost:3000";
async function getData() {
  const res = await axios(`${BASE_URl}/users`);
  console.log(res.data);
  drawTAble(res.data);
}
getData();

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
    <a class="btn btn-primary">Add Fav</a>
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
