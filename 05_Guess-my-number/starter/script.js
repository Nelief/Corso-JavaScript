'use strict';

/* Selezionare un elemento in base al nome/ID/classe ed estrarrne il testo */
console.log(document.querySelector('.message').textContent);

/* DOM
Struttura dati ad albero rappresentante tutte le tag HTML e CSS di una pagina web. Viene generata dal browser dinamicamente ed è usata da JavaScript per manipolare la pagina.
"Document" svolge il ruolo di root assoluto dell' intero documento HTML, seguito da "HTML", seguito a sua volta da "head" e "body". 
Successivamente ogni elemento HTML è rappresentato dal suo tag/classe/id in una struttura ad albero. 

NOTA: il DOM non è parte di Javascript, Java script usa il DOM per manipolare la pagina. DOM fa parte delle WEB API. 
*/

/* Numero random tra 1 e 20
    1. Random genera un numero casuale tra 0 e 1 
    2. *20 lo rende un numero casuale tra 0 e 19, inclusi decimali
    3. trunc rimuove i decimali
    4. +1 rende il range tra 1 e 20
*/
let secretNumber;
let score = 20;

const rollSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
rollSecretNumber();

/* Event listener : check button 
    1. cerco il pulsante 'check'
    2. aggiungo un evento
        3. estraggo il valore nel campo '.guess' 
        4. verifico che il valore non sia 0, undefined o null
        5. game logic (verifico se è uguale,minore o maggiore del numero segreto)
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  const message = document.querySelector('.message');

  if (!guess) {
    message.textContent = 'No number!';
  } else if (score > 1) {
    if (guess === secretNumber) {
      message.textContent = 'Correct!';
      setHighScore();
      win();
    } else if (guess < secretNumber) {
      message.textContent = 'to low!';
      losePoint();
    } else if (guess > secretNumber) {
      message.textContent = 'to high!';
      losePoint();
    }
  } else {
    message.textContent = 'You lost the game!';
  }
});

const losePoint = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const setHighScore = function () {
  const highscore = Number(document.querySelector('.highscore').textContent);
  if (score > highscore) {
    document.querySelector('.highscore').textContent = score;
  }
};

/* Style Manipulation */
const win = function () {
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  document.querySelector('.number').textContent = secretNumber;
};

/* Event Listener: Again Button */
document.querySelector('.again').addEventListener('click', function () {
  resetUI();
  resetScore();
  rollSecretNumber();
});

const resetUI = function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

const resetScore = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
};
