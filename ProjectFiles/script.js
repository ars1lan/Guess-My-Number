"use strict";
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let Heighscore = 0;
const displayFunction = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  document.querySelector(".number").textContent = "?";
  if (score > 1) {
    if (!guess) {
      displayFunction("No Number 😒");
    } else if (secretNumber === guess) {
      score++;
      displayFunction("Yaaa! Correct Number ❤️");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > Heighscore) {
        Heighscore = score;
        document.querySelector(".highscore").textContent = Heighscore;
      }
    } else if (secretNumber !== guess) {
      score--;
      displayFunction(
        secretNumber > guess ? "Guess is too Low" : "Guess is too Heigh"
      );
    }
    document.querySelector(".score").textContent = score;
  } else {
    displayFunction("You Lost the Game 😒");
    document.querySelector(".score").textContent = 0;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
  displayFunction("start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
