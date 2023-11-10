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

/* 
//LEZIONE 9.5 : For Each loops
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
//for x of y: x itera in y e ritorna un oggetto di y ad ogni giro del ciclo.
for (const item of menu) console.log(item);

//for x in y: x itera in y e ritorna l' index di ogni elemento
for (const index in menu) console.log(index);

//for x of y.entries() ritorna [index,oggetto], possiamo splittare le due tramite destructoring
for (const [index, item] of menu.entries())
  console.log(`${index + 1}: ${item}`);
 */
/* 
//LEZIONE 9.6 : Enhanced Objects Literals
//metodi avanzati per creare oggetti

//oggetti composti
const indirizzo = {
  via: 'della rotonda',
  civico: '10',
};

const persona = {
  nome: 'mauro',
  cognome: 'malafronte',
  indirizzo,
  annoDiNascita: 1997,

  //metodi senza ":function"
  calcolaEta(annoAttuale) {
    return annoAttuale - this.annoDiNascita;
  },
};

console.log(persona);
 */
/* 
//LEZIONE 9.7: optional chaining
//check condizionale di una proprietà in un oggetto: nell' esempio prima di provare ad eseguire mon.open, viene controllato che openinghours.mon esista. Se questo non è presente viene ritornato undefined in maniera safe
console.log(restaurant.openingHours.mon?.open);

//il principale usecase è quello di creare delle assegnazioni a partire da elementi di cui non è sicura l' esistenza con ?. ed usare ?? come fallback nel caso questi non esistano.
// const x = obj.something?.someAttribute ?? fallback

//USE case: lista condizionale
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(
    `On ${day}, ${
      restaurant.openingHours[day] ? `we open at ${open}` : `we are ${open}`
    }`
  );
}

//USECASE: check per array vuoto
const users = [{ name: 'mauro', email: 'mauro@gmail.com' }];
const users2 = [];
console.log(users2[0]?.name ?? 'Empty Array');
 */
/* 
//LEZIONE 9.8 : Object looping
//looping over keys (Property Names)
for (const day of Object.keys(restaurant.openingHours)) console.log(day);

for (const day of Object.values(restaurant.openingHours)) console.log(day);

for (const [day, hours] of Object.entries(restaurant.openingHours))
  console.log(day, hours.open, hours.close);
 */

/* 
//LEZIONE 9.8 : SET
//Struttura dati pensata per mantenere una lista di eventi/oggetti unici non ordinati.
//set taglia tutti i duplicati
const ordersSet = new Set(['pasta', 'pizza', 'risotto', 'pizza']);
console.log(ordersSet);

console.log(ordersSet.size);
console.log(ordersSet.has('pizza'));

ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
console.log(ordersSet);

ordersSet.delete('pizza');
console.log(ordersSet);

for (const order of ordersSet) {
  console.log(order);
}

//USECASE: clean duplicates from an array
const staffList = ['waiter', 'cheff', 'manager', 'waiter', 'waiter', 'cheff'];

const roleList = [...new Set(staffList)];
console.log(roleList);
*/
/* 
//LEZIONE 9.9: MAPS
//DS che mantiene gli oggetti in coppie key:value similmente agli oggetti, ma con maggiore flessibilità e utilities

const person = new Map();
person.set('firstName', 'Mauro').set('lastName', 'Malafronte');

console.log(person.get('firstName'));
console.log(person.has('lastName'));
console.log(person.delete('lastName'));
console.log(person.size);
person.clear();

//USECASE: question map
const question = new Map([
  ['question text', 'text'],
  [1, 'option1'],
  [2, 'option2'],
  [3, 'option3'],
  ['correct', 3],
  [true, 'Corret'],
  [false, 'Try Again!'],
]);

//Map Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answear ${key} : ${value}`);
}
const answer = Number(prompt('Your Answer'));
console.log(question.get(answer === question.get('correct')));

//Object entries to map
const hours = new Map(Object.entries(restaurant.openingHours));
console.log(hours);

//map to array
const arrayMap = [...question];
console.log(arrayMap);
*/
/* 
//Esercitaziones
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  Players: [
    [
      'neuer',
      'pavard',
      'martinez',
      'alaba',
      'davies',
      'kimmich',
      'goretzka',
      'coman',
      'muller',
      'gnarby',
      'lewandowski',
    ],
    [
      'burki',
      'schulz',
      'hummels',
      'akanji',
      'hakimi',
      'weigl',
      'witsel',
      'hazard',
      'brandt',
      'sancho',
      'gotza',
    ],
  ],
  score: '4:0',
  scored: ['lewandowski', 'gnarby', 'lewandowski', 'hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.25,
  },
};

const [players1, players2] = game.Players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'a', 'b', 'c'];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored!`);
};

printGoals('lewandowski', 'gnarby', 'lewandowski', 'hummels');

team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win'); 


console.log('----------------------------------------');

for (const player of game.scored) console.log(player);

function calculateAverageOdd(odds) {
  let sum = 0;
  let i = 0;
  for (const odd of Object.values(odds)) {
    sum += odd;
    i++;
  }
  return sum / i;
}

console.log(calculateAverageOdd(game.odds));

function prettyPrint(odds) {
  for (const [team, odd] of Object.entries(odds)) {
    const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`;
    console.log(`Odds of ${teamStr}: ${odd}`);
  }
}

prettyPrint(game.odds);

function listScorers(game) {
  const scorers = {};
  for (const goal of Object.values(game.scored)) {
    scorers[goal] ? (scorers[goal] += 1) : (scorers[goal] = 1);
  }
  return scorers;
}

console.log(listScorers(game));
 */
