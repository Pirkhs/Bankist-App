"use strict";
// Assignment working
// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
// }
// console.log(describeCountry("UK", 68, "London"));
// console.log(describeCountry("Finland", 6, "Helsinki"));
// console.log(describeCountry("Canada", 38, "Ottawa"));

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const percentage = function (population) {
//     return (population / 7900) * 100;
// }

// console.log(percentageOfWorld1(76));
// console.log(percentageOfWorld1(789));
// console.log(percentageOfWorld1(7899));
// console.log(percentage(76));
// console.log(percentage(789));
// console.log(percentage(7899));

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld3(population)
//     return `${country} has ${population} million people which is about ${percentage}% of the world`;
// }

// console.log(describePopulation("China", 1441));
// const populations = [68, 1441, 7900, 38];
// console.log(populations.length === 4);
// const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
// console.log(percentages);

// const neighbours = ["Spain", "Switzerland", "Belgium"];
// neighbours.push("utopia");
// neighbours.pop();
// if (!neighbours.includes("Germany")) {
//     console.log("Probably not a central European country");
// }
// neighbours[neighbours.indexOf("Switzerland")] = "Italy";

// console.log(neighbours);

// const myCountry = {
//     country: "UK",
//     capital: "London",
//     language: "English",
//     population: 68,
//     neighbours: ["France"]
// }

// const myCountry = {
//     country: "Finland",
//     capital: "Helsinki",
//     language: "finnish",
//     population: 6,
//     neighbours: ["Norway", "Sweden", "Russia"],

//     describe: function () {
//         return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital city called ${this.capital}`;
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length === 0 ? true : false;
//     }
// }

// console.log(`${myCountry["country"]} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital city called ${myCountry.capital}`);

// myCountry.population += 2;
// console.log(myCountry.population);
// myCountry.population -= 2;
// console.log(myCountry.population);
// myCountry.describe();
// myCountry.checkIsland();
// console.log(myCountry.describe());
// console.log(myCountry.isIsland);

// for (let i = 1; i <= 50; i++) {
//     console.log(`Voter number ${i} is currently voting`);
// }

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const populations = [68, 1441, 7900, 38];
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }
// console.log(percentages2);

// const listOfNeighbours = [
//     ["Canada", "Mexico"],
//     ["Spain"],
//     ["Norway", "Sweden", "Russia"]];
// for (let neighbours = 0; neighbours < listOfNeighbours.length; neighbours++) {
//     if (listOfNeighbours[neighbours].length <= 1) {
//         continue;
//     }

//     for (let country = 0; country < listOfNeighbours[neighbours].length; country++) {
//         console.log(`Neighbour: ${listOfNeighbours[neighbours][country]}`);
//     }
// }

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const populations = [68, 1441, 7900, 38];
// const percentages3 = [];

// let i = 0;
// while (i < populations.length) {
//     percentages3.push(percentageOfWorld1(populations[i]));
//     i++;
// }
// console.log(percentages3);

// Lecture working
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriverLicense = true; // Without strict mode will not tell us whether the variable is spelled incorrectly or not
// if (hasDriversLicense) console.log("I can drive");
// function logger() {
//     console.log("My name is Nathan");
// }
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// function calcAge1(birthYear) {
//     return 2023 - birthYear;
// }
// console.log(calcAge1(2004));

// const calcAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// console.log(calcAge2(2004));

// const calcAge3 = birthYear => 2023 - birthYear;
// console.log(calcAge3(2004));

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function FruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     return `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
// }

// console.log(FruitProcessor(2, 3));
// const calcAge = function (birthYear) {
//     return 2023 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} has ${retirement} more years before they can retire`;
//     } else {
//         return `${firstName} has already retired!`
//     }

// }
// console.log(yearsUntilRetirement(1950, "Nathan"));

// const friends = ["Nathan", "Michael", "Joe"];
// const friends2 = new Array("Nathan", "Michael", "Joe");
// console.log(friends[friends.length - 1]);
// friends[2] = "John";
// const description = ["Nathan", 19, friends];
// console.log(description);

// const friends = ["Joe", "Mike", "Evie"];
// friends.push("James");
// friends.unshift("Tom");
// friends.pop();
// friends.shift();
// friends.indexOf("James");
// console.log(friends);
// console.log(friends.includes("Sam"));

// const myCountry = {
//     country: "UK",
//     capital: "London",
//     language: "English",
//     population: 68,
//     neighbours: ["France"]
// }

// const interest = prompt("What do you want to know about the UK? country, capital, language, population, or neighbours?");

// if (myCountry[interest]) {
//     console.log(myCountry[interest]);
// } else { console.log("Undefined value"); }

// const Nathan = {
//     firstName: "Nathan",
//     lastName: "Briers",
//     birthYear: 2004,
//     job: "coder",
//     friends: ["James", "Sam", "Olly"],
//     hasDriversLicense: true,

// calcAge: function () {
//     return 2023 - this.birthYear;

//     calcAge: function () {
//         return 2023 - this.birthYear;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge(this.birthYear)} year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
//     },
// };

// console.log(Nathan.getSummary());

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lighting weights ${rep}`);
// }

// const Nathan = [
//     "Nathan",
//     "Briers",
//     2023 - 2004,
//     "coder",
//     ["James", "Sam", "Dan"],
// ];

// const types = [];

// for (let i = 0; i < Nathan.length; i++) {
//     console.log(Nathan[i], typeof Nathan[i]);

//     types.push(typeof Nathan[i]);
// }
// console.log(types)

// const years = [1997, 2004, 2007, 1993, 2000];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// for (let i = 0; i < years.length; i++) {
//     if (2023 - years[i] < 20) break;

//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// const Nathan = [
//     "Nathan",
//     "Briers",
//     2023 - 2004,
//     "coder",
//     ["James", "Sam", "Dan"],
// ];

// for (let i = Nathan.length - 1; i >= 0; i--) {
//     console.log(Nathan[i]);
// }

// for (let exercise = 0; exercise <= 3; exercise++) {
//     console.log(`========= Starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Lifting weights rep ${rep}`)
//     }
// }

// let i = 1;
// while (i <= 10) {
//     console.log([i]);
//     i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
// }
