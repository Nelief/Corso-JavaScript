'use strict';

/* Getting the score element based on the individual ID, can be done with both queryselector("#<idname>") or getelementbyid(<idname>) */
const totalScoresElements = [
  document.querySelector('#score--0'),
  document.getElementById('score--1'),
];

const scoresElements = [
  document.querySelector('#current--0'),
  document.getElementById('current--1'),
];

const playerAreaElement = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

const diceElement = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');

scoresElements[0].textContent = 0;
scoresElements[1].textContent = 0;
totalScoresElements[0].textContent = 0;
totalScoresElements[1].textContent = 0;
diceElement.classList.add('hidden');

let win = false;
let randomNumber = 0;
let activePlayer = 0;
let scores = [0, 0];
let totalScores = [0, 0];

btnRollDice.addEventListener('click', function () {
  if (!win) {
    randomNumber = Math.trunc(Math.random() * 6) + 1;

    //modify the dice img source
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${randomNumber}.png`;

    //check random value
    if (randomNumber !== 1) {
      //Add the dice roll to the score
      scores[activePlayer] += randomNumber;
      scoresElements[activePlayer].textContent = scores[activePlayer];

      console.log(`Player ${activePlayer + 1} | Score ${scores[activePlayer]}`);
    } else {
      //reset local score and swap player
      resetScore(activePlayer);
      swapPlayer();
    }
  }
});

//swaps the active player
const swapPlayer = function () {
  diceElement.classList.add('hidden');
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerAreaElement[0].classList.toggle('player--active');
  playerAreaElement[1].classList.toggle('player--active');
};

//resets the local activeplayer score
const resetScore = function (activePlayer) {
  scores[activePlayer] = 0;
  scoresElements[activePlayer].textContent = scores[activePlayer];
};

//hold the local score, add the local score to total score for the active player, then reset local score and swap player. if total score for the holding player is >100, then he wins the game. (win = true blocks players from rolling dices until the game is restarted)
btnHold.addEventListener('click', function () {
  if (!win) {
    totalScores[activePlayer] += scores[activePlayer];

    if (totalScores[activePlayer] >= 100) {
      win = true;
      totalScoresElements[activePlayer].textContent = 'WIN';
    } else {
      totalScoresElements[activePlayer].textContent = totalScores[activePlayer];
      resetScore(activePlayer);
      swapPlayer();
    }
  }
});

//reset the game, resets both local and total scores, set active player to 0 and win to false
btnNewGame.addEventListener('click', function () {
  for (let i = 0; i < 2; i++) {
    totalScores[i] = 0;
    scores[i] = 0;
    totalScoresElements[i].textContent = 0;
    scoresElements[i].textContent = 0;
  }
  win = false;
  activePlayer = 0;
  playerAreaElement[0].classList.add('player--active');
  playerAreaElement[1].classList.remove('player--active');
});
