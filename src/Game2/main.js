const answerArray = [
  "It Will Work",
  "Maybe maybe not",
  "Probably Not",
  "I Dont Now",
];
const message = document.querySelector(".message");
const question = document.querySelector("input");
const ask = document.querySelector("button");
ask.addEventListener("click", function () {
  let res = Math.floor(Math.random() * answerArray.length);
  message.innerText = question.value + " " + answerArray[res];
  question.value = "";
});
