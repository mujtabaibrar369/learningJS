const score0E1 = document.getElementById('score--0');
const score1E1 = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const buttonRoll = document.querySelector('.btn--roll');
const buttonNew = document.querySelector('.btn--new');
const buttonHold = document.querySelector('.btn--hold');
const current0E1 = document.getElementById('current--0');
const current0E2 = document.getElementById('current--1');
const win = 'Winner!';
var score = [0, 0];
var currentScore = 0;
var activePlayer = 0;
score0E1.textContent = 0;
score1E1.textContent = 0;
const diceE1 = document.querySelector('.dice');
diceE1.classList.add('hidden');
buttonRoll.addEventListener('click', function () {
  if (currentScore > 100) {
    score0E1.textContent = `Player ${activePlayer} is winner`;
    score1E1.textContent = `Player ${activePlayer} is winner`;
  } else {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore = currentScore + dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  }
});
buttonHold.addEventListener('click', function () {
  score[activePlayer] += currentScore;
  score0E1.textContent = score[0];
  score1E1.textContent = score[1];
  if (score[1] < 100 || score[0] < 100) {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});
buttonNew.addEventListener('click', function () {
  current0E1.textContent = 0;
  current0E2.textContent = 0;
  score0E1.textContent = 0;
  score1E1.textContent = 0;
  currentScore = 0;
});
