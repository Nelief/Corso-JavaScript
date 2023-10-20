/*
let js = 'amazing';
if (js == 'amazing') alert('success');

let firstName = "Mauro";
let lastName = "Malafronte";

console.log(firstName + " " + lastName);


//Datatypes
let pi = 3.14; //numero
let firstName = "mauro" //string
let condition = true //boolean

console.log(typeof condition);

//una variabile non inizializzata ha
//valore "undefined" e tipo "undefined"
//stessa cosa per null (typeoff ritorna "object" in questo caso)
let test;
console.log(test);
console.log(typeof test);


//Dichiarare variabili
let variabile = "test";
variabile = "nuovoTest";
const COSTANTE = "constTest"; // se provi a cambiarlo da un errore di tipo, const deve essere inizializzata per forza



const now = 2023;
const ageMauro = now - 1997;
const ageElina = now - 1967;
console.log(ageMauro, ageElina);



let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);



//Strings & Template Literals
//stringa concatenata
const firstName = "Mauro";
const job = "Programmer";
const birthYear = 1997;
const currentYear = 2023;

//stringhe classiche
const mauro = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job;

const multiLine = "\n string with \n multiple \n lines";

console.log(mauro, multiLine);

//Backticks strings
const mauroTemplate = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;

const multiLineTemplate = `
string with
multiple
lines`

console.group(mauroTemplate, multiLineTemplate);

*/

//Decisions/logic

const age = 19;

const isOldEnough = age > 18;

if (isOldEnough) {
    console.log("you can start the driving license course 👍")
}
