const gameArea = document.querySelector(".game");
const button = document.querySelector("button");
let gamePlay = false;
maker();
button.addEventListener("click", function () {
  if (!gamePlay) {
    gamePlay = true;
    button.innerHTML = "Check";
  } else {
  }
});

function maker() {
  for (let index = 0; index < 6; index++) {
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.value = 0;
    el.max = 9;
    el.min = 0;
    el.order = 1;
    el.size = 1;
    el.classList.add("numb");
    gameArea.appendChild(el);
  }
}
