"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;
const displayMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};
const changeBG = function (color) {
  document.getElementById("test").style.backgroundColor = color;
};
const numContainerW = function (width) {
  document.querySelector(".number").style.width = width;
};
const decreesScore = function (currentS) {
  document.querySelector(".score").textContent = currentS;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (guess === secretNumber) {
    displayMessage("Correct guess!!!🥳");
    changeBG("green");
    numContainerW("30rem");
    document.querySelector(".number").textContent = secretNumber;

    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector(".highScore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    currentScore--;
    decreesScore(currentScore);
    displayMessage(guess > secretNumber ? "To high..." : "To low...");
  }

  if (!guess) {
    displayMessage("Insert a number❗");
  }

  if (currentScore < 1) {
    displayMessage("😅 You lost. Click Again to give it another try");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  changeBG("#222");
  numContainerW("15rem");
  decreesScore(currentScore);
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
});
