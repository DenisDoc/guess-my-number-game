'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 17;

// console.log(document.querySelector('.guess').value);
// console.log((document.querySelector('.guess').value = 23));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  document.querySelector('.score').textContent = currentScore;

  if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To low...';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'To high...';
    currentScore--;
    document.querySelector('.score').textContent = currentScore;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct guess!!!🥳';
    document.getElementById('test').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.highScore').textContent = highScore;
    }
  }
  if (!guess) {
    document.querySelector('.message').textContent = 'Insert a number❗';
  }
  if (currentScore < 1) {
    document.querySelector('.message').textContent =
      '😅 You lost. Click Again to give it another try';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  currentScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.getElementById('test').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = currentScore;
});
