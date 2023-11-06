'use strict';

/* QuerySelectorAll 
  permette di selezionare un gruppo di elementi con la stessa classe, i quali sono conservati in una struttura dati apposita 
  */
//definisco le componenti HTML con querySelector
const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//definisco le funzioni per aprire e chiudere i modali, andando a modificare la class list. Operare sulla class list direttamente mi permette di raggruppare insiemi di configurazioni CSS in apposite classi ed aggiungere/rimuovere l' intera classe con una sola chiamata.
const closeModal = function () {
  if (!modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//definisco gli eventListener sugli elementi e li collego alle relative funzioni per cambiarne le classi CSS associate
for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/* Keyboard events 
  eventi globali (il listener è associato all' intero documento) che permettono di eseguire una funzione in risposta ad un pulsante: 
  keyup: rilascio un pulsante 
  keydown: premo un pulsante
  keypress: finche tengo il pulsante premuto 

  questi riguardano la tastiera in generale, per definire listener specifici per alcuni tasti bisogna ascoltare l' evento e definire la funzione relativa. 

  1. Aggiungo il parametro "event" alla funzione, questo è passato in automatico dall' event listener

  2. Verifico il pulsante premuto (per sapere come chiamare il pulsante è possibile fare console.log(event))
  
  3. eseguo la funzione appropriata all' evento
*/

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') closeModal();
});
