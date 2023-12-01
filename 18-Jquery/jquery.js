$(".input").css({
  width: "50%",
  height: "20px",
  padding: "5px",
  outline: "none",
});
$(".add").css({
  width: "70px",
  height: "40px",
  padding: "5px",
  backgroundColor: "blue",
  border: "none",
  borderRadius: "10px",
  color: "white",
  margin: "10px",
});
let arr = JSON.parse(localStorage.getItem("elem")) ?? [];
$(".add").on("click", function () {
  let word;
  word = document.createElement("p");
  word.innerText = $(".input").val();
  $(".search").append(word);

  $(".input").val("");

  word.addEventListener("click", function () {
    this.remove();
  });
  arr.push(word.innerText);
  localStorage.setItem("elem", JSON.stringify(arr));
  word.style.backgroundColor = "aquamarine";
  word.style.width = "100px";
  word.style.height = "30px";
  word.style.border = "none";
  word.style.borderRadius = "10px";
  word.style.textAlign = "center";
});
function setScreen(arr) {
  arr.forEach((item) => {
    let text = document.createElement("p");
    text.innerText = item;
    $(".search").append(text);
    text.style.backgroundColor = "aquamarine";
    text.style.width = "100px";
    text.style.height = "30px";
    text.style.border = "none";
    text.style.borderRadius = "10px";
    text.style.textAlign = "center";
    text.addEventListener("click", function () {
      this.remove();
    });
    localStorage.setItem("elem", JSON.stringify(arr));
  });
}
setScreen(arr);
