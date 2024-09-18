'use strict';

let secretNumber = Math.round(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  let inputNumer = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!inputNumer) {
      displayMessage('Please input the number');
    } else {
      if (inputNumer === secretNumber) {
        displayMessage('Congratulation');
        //document.querySelector('.message').textContent = 'Congratulation';
        //displayMessage('Congratulation');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
          highScore = score;
          document.querySelector('.highscore').textContent = highScore;
        }
      } else if (inputNumer != secretNumber) {
        displayMessage(
          inputNumer > secretNumber
            ? 'The secret number is lower'
            : 'The secret number is higher'
        );
        score--;
        document.querySelector('.score').textContent = score;
        if (score === 0) {
          displayMessage('You lost');
          document.querySelector('body').style.backgroundColor =
            'rgb(220, 113, 113)';
          document.querySelector('.number').textContent = secretNumber;
        }
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.round(Math.random() * 100) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 10;
  document.querySelector('.number').textContent = '?';
});
