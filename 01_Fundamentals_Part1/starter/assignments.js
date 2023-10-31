/* const country = "italia";
const continent = "europa";
let population = 59110000;

console.log("paese: " + country);
console.log("continente: " + continent);
console.log("popolazione: " + population);

let isIsland = false;
let language = "italiano";

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

console.log(population++);

let finlandPopulation = 6000000;
let populationMoreThanFinland = population > finlandPopulation;

let averagePopulation = 33000000;
let populationMoreThanAverage = population > averagePopulation;

const description = country + " is in " + continent + " and it's " + population + " people speak " + language;

console.log(description);

const templateDescription = `${country} is in ${continent} and it's ${population} poeple speak ${language}`;

console.log(templateDescription);


if (population > 33000000) {
    console.log(`${country} population is above average`)
} else {
    console.log(`${country} population is ${averagePopulation - population} below average`)
}


let numNeighbours = prompt('How many neighbours countries does your country have?');

if(Number(numNeighbours) === 1){
    console.log("only 1");
}else if(numNeighbours > 1){
    console.log("more than 1");
}
else{
    console.log("no borders");
}

language = "english";
population = 30_000_000;
isIsland = false;

if (language == "english" && population < 50_000_000 && !isIsland) {
    console.log("ok");
} else {
    console.log("notok");
}

language = "english";
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log("1");
        break;
    case 'spanish':
        console.log("2");
        break;
    case 'english':
        console.log("3");
        break;
    case 'hindi':
        console.log("4");
        break;
    case 'arabic':
        console.log("5");
        break;
    default:
        console.log("6");
        break;
}


const averageResult = population > 33_000_000 ? "above" : "below";
console.log(country + "'s population is " + averageResult + "average"); */