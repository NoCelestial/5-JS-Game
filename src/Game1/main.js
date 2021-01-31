const message = document.querySelector(".message");
const button = document.querySelectorAll("button");
for (let index = 0; index < button.length; index++) {
  button[index].addEventListener("click", tossCoin);
}
function tossCoin(e) {
  console.log(e.target.innerText);
}
