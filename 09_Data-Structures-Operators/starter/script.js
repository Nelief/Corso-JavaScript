'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  /* Destructoring: returning more than 1 value */
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  /* Destructoring function parameters: scrivendo cosi i parametri, il metodo non si aspetta di riceverli separati, ma di ricevere un singolo oggetto che contenga tutti e 4. */
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(starterIndex, mainIndex, address, time);
  },

  /* Spread Op function: la funzione accetta 3 parametri separati, possiamo pero passare direttamente un array ed usare lo spread op per separarli */
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  /* Rest usecase: aggiungere parametri opzionali ad una funzione senza specificarne il numero
   * mainIngredients è un parametro obbligatorio, qualunque altro ingrediente inserito a seguire è raggruppato in "otherIngredients"
   */
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/* 
//LEZIONE 9.1: ARRAY DESTRUCTORING
//Array Destructoring : multideclaration
const arr = [1, 2, 3];
const [x, y, z] = arr;
console.log(x, y, z);

//Multideclaration with gaps
let [first, , third] = restaurant.categories;
console.log(first, third);

//Variable Swap with desctructoring
//Classic Swap

//const temp = first;
//first = third;
//third = temp;
//console.log(first, third); 

//with Destructoring: permette uno swap senza variabile d' appoggio
[third, first] = [first, third];
console.log(first, third);

//Una funzione che ritorna più di un valore lo fa in forma di array
const order = restaurant.order(1, 1);
console.log(order);

//Destructoring: nested arrays
const nested = [2, 4, [5, 6]];
const [a, b, A] = nested;
const [c, d] = A;
console.log(a, b, c, d);

//Default Values : provando a leggere 3 elementi da un array di 2, il terzo valore esce undefined. Possiamo settare dei valori di default per evitare comportamenti anomali.
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
 */

/* 
//LEZIONE 9.2 : OBJECT DESTRUCTORING
//{} per oggetti, [] per array
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Renaming: utile per dare nomi decenti a dati presi da una API esterna, possiamo inoltre dare un valore base come per gli array
const {
  name: restaurantName = '',
  openingHours: hours = [],
  categories: tags = [],
  menus: menu = [],
} = restaurant;
console.log(restaurantName, hours, tags, menu);

//Mutation during destructoring objects
let a2 = 111;
let b2 = 999;
const obj = { a2: 23, b2: 7, c2: 14 };
//le () attorno servono per evitare un errore di JS, il quale si aspetta un code-block prima di {}
({ a2, b2 } = obj);
console.log(a2, b2);

//Nested Objects: a differenza del caso con Array, per fare il destructoring degli oggetti è necessario specificare il nome esatto dell' attributo, possiamo pero rinominare questo durante la chiamata stessa con "nomeEsatto:NuovoNome"
const { fri } = openingHours;
const { open: openFri, close: closeFri } = fri;
console.log(openFri, closeFri);

//obj destructoring come parametro di una funzione
restaurant.orderDelivery({
  time: '22.30',
  address: 'Via della rotonda, 10',
  mainIndex: 2,
  starterIndex: 2,
});
 */

/* 
//LEZIONE 9.3: SPREAD OPERATOR
//Creare un nuovo array a partire da uno pre-esistente, aggiungendo alcuni nuovi elementi.
//Classic
const arr = [7, 8, 9];
const classic = [1, 2, arr[0], arr[1], arr[2]];
console.log(classic);
//Spread Op : ...arr = arr[0], arr[1], arr[2], ecc
const modern = [1, 2, ...arr];
console.log(modern);

//USE CASE: array come parametri in una funzione
console.log(modern);
console.log(...modern);

//USE CASE: Copiare un array (Simile a object.assign)
const mainMenuCopy = { ...restaurant.mainMenu };
let starterMenuCopy = {
  title: 'StarterMenuCopy',
};
starterMenuCopy = Object.assign(starterMenuCopy, restaurant.starterMenu);
console.log(mainMenuCopy, starterMenuCopy);

//ATTENZIONE: "Object.assign" usato su un oggetto senza altri parametri non crea un oggetto, ma un array.
const tagsCopy = Object.assign(restaurant.categories);
console.log(tagsCopy);

//USECASE: Array merging
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu);

//String unpacking
const firstName = 'Mauro';
const lastName = 'Malafronte';
const fullName = [...firstName, ' ', ...lastName];
console.log(fullName);

//USE CASE: passare parametri in blocco tramite un array
//creiamo un array di ingredienti a partire da 3 prompt a schermo
//const ingredients = [prompt('Making pasta: Ingredient1?'),prompt('Making pasta: Ingredient2?'),prompt('Making pasta: Ingredient3?'),];
const ingredients = ['a', 'b', 'c'];
//notare la differenza in output se usiamo o meno ...
restaurant.orderPasta(ingredients); //Pasta with a,b,c, undefined, undefined
restaurant.orderPasta(...ingredients); //Pasta with a, b, c

//USE CASE: manipolare oggetti con lo spread op
//Copiamo l' intero oggetto in un nuovo oggetto.
//questa è una copia completa in un nuovo oggetto, quindi cambiamo attributi di uno non influenza l' altro
const newRestaurant = { ...restaurant, founder: 'Mauro' };
console.log(newRestaurant);
 */

/* 
//LEZIONE 9.4: REST PATTERN
//Opposto di spread: collezziona diversi oggett in un solo array
//la sintassi è la stessa, ma è usato a sinistra dell' = nell' operazione di assegnazione
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

//REST+SPREAD combo
//da un lato usiamo SPREAD per isolare i singoli elementi, dall' altra usiamo REST per raggruppare parte degli elementi in un unico array.
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//REST+Object Destruct
//il risultato sarà un oggetto "sat" con le ore di sat, ed un oggetto che raggrupperà tutti gli altri oggetti con le altre ore
const { sat, ...weekDays } = restaurant.openingHours;
console.log(sat, weekDays);

//USECASE: funzioni con numero di parametri arbitrario
function add(...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4));
console.log(add(1, 2, 3, 4, 5));

const x = [1, 2, 3, 4, 5, 6];
console.log(add(...x));

//il metodo stamperà "peperoni" come mainIngredient e raggrupperà Salami e Potatoes in un array tramite il REST operator.
const ingredients = ['Peperoni', 'Salami', 'Potatoes'];
restaurant.orderPizza(...ingredients);
 */

//LEZIONE 9.6
