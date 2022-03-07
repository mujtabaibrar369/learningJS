'use strict';
let score = 20;
let highScore = 0;
let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'chal nikal😒';
  } else if (score <= 0) {
    document.querySelector('.message').textContent = 'You lost the game!';
  } else if (score > 20) {
    document.querySelector('.message').textContent = 'You won';
  } else {
    if (guess < number) {
      document.querySelector('.message').textContent = 'Number too low😴';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (guess > number) {
      document.querySelector('.message').textContent = 'Number too high🙄';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else if (guess == number) {
      document.querySelector('.number').textContent = number;
      document.querySelector('.message').textContent = '✔ Correct Number';
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
