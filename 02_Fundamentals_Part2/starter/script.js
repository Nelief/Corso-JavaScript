'use strict';

//functions
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = "Juice with " + apples + " apples and " + oranges + " oranges";
    return juice;
}

/* 
const appleJuice = fruitProcessor(5,0);
console.log(appleJuice); 
*/

//funzione classica
function calcAge(birthYear, currentYear) {
    return currentYear - birthYear;
}

//funzione come espressione 
//possiamo definire una elemento "function" e associarlo ad una variabile 
//se definite cosi, queste non possono essere chiamate prima della definizione 
const calcAge2 = function (birthYear, currentYear) {
    return currentYear - birthYear;
};

/* console.log(calcAge(1997,2023));
console.log(calcAge2(1997,2023));
 */

//Arrow Functions 
const calcage3 = birthYear => currentYear - birthYear;

// arrays 
/* const friends = ['mauro', 'diana', 'manuela'];
const years = new Array(1991, 1999, 2004, 2023);

console.log(years.length);

const numbers = [1, 2, 3, 4];

let newLength = numbers.push(5);
console.log(numbers, newLength);

newLength = numbers.unshift(0);
console.log(numbers, newLength);

const popElement = numbers.pop();
console.log(numbers, popElement);

numbers.shift();
console.log(numbers);

console.log(numbers.indexOf(2));
console.log(numbers.includes(3)); */

//objects : Key-value pairs 
const mauro = {
    firstName: 'Mauro',
    lastName: 'Malafronte',
    Age: 26,
    Job: 'Programmer',
    Friends: ['A', 'B', 'C'],
    hasDriversLicense: false,

    calcAge: function (birthYear) {
        return 2023 - birthYear;
    },

    addLocation: function (location) {
        this.location = location; //add a property
    },

    printSummary: function () {
        console.log(this.firstName + " is a " + this.Age + "-Year old " + this.Job + ", and he has " + (this.hasDriversLicense? "a" : "no") + " driver's license");
    }
};

/* 
mauro.addLocation("Sorrento");
console.log(mauro);
mauro.printSummary();

console.log(mauro);
console.log(mauro.firstName);
console.log(mauro['firstName']);

mauro.address = "Via della Rotonda 10"
console.log(mauro.address); 
*/

//loops
for ( let rep = 0; rep < 10; rep++){
    console.log(rep);
}

let rep = 0; 
while (rep < 10){
    console.log(rep);
    rep++;
}

//extra: random number in JS (*6 = tra 0 e 5) 

const dice = {
    value: null,

    roll: function() {
        this.value = Math.trunc(Math.random()*6)+1;
    },
};

while(dice.value != 6){
    dice.roll();
    console.log("you rolled a " + dice.value);
}

