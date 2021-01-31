const coinArray = ["Heads", "Tails"];
let score = [0, 0];
const message = document.querySelector(".message");
const button = document.querySelectorAll("button");
for (let index = 0; index < button.length; index++) {
  button[index].addEventListener("click", tossCoin);
}
function tossCoin(e) {
  let playerGuess = e.target.innerText;
  let computerToss = Math.floor(Math.random() * 2);
  let computerGuess = coinArray[computerToss];
  message.innerHTML = "Computer Selected : " + computerGuess;
  let output;
  if (playerGuess === computerGuess) {
    output = "Player Win.";
    score[0]++;
  } else {
    output = "Computer Win.";
    score[1]++;
  }
  message.innerHTML =
    output +
    "</br> Player Score : " +
    score[0] +
    " Computer Score : " +
    score[1];
}
