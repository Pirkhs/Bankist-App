// // Assignment Working //

// const continent = "Europe"
// const isIsland = true;
// let population = 68000000
// let language = "English";
// console.log(typeof isIsland);
// console.log(typeof language);
// console.log(population / 2);
// console.log(population + 1);
// finlandPopulation = 6000000
// console.log(population > finlandPopulation);
// avgPopulation = 33000000;
// const description = (`The UK is in ${continent} and it's people speak ${language}`);
// console.log(description);
// if (population > avgPopulation) {
//     console.log("The UK's population is above average")
// } else {
//     console.log(`The UK's population is ${(avgPopulation - population) / 1000000} million below average`)
// }
// const numNeighbours = prompt("How many neighbour countries does you country have?");
// if (Number(numNeighbours) === 1) { // If == then there will be no type coercion so no need to change data type
//     console.log("Only 1 border!");
// } else if (Number(numNeighbours) > 1) {
//     console.log("More than 1 border!");
// } else console.log("No borders");

// const language = "English";
// const population = 49999999;
// const isIsland = false;
// if (language === "English" && population < 50000000 && !isIsland) {
//     console.log("You should live in Portugal :)")
// } else console.log("Portugal does not meet your criteria");
// const language = "mandarin";
// switch (language) {
//     case "chinese":
//     case "mandarin":
//         console.log("MOST number of native speakers");
//         break;
//     case "spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "english":
//         console.log("3rd place");
//         break;
//     case "hindi":
//         console.log("Number 4");
//         break;
//     case "arabic":
//         console.log("5th most spoken language");
//         break;
//     default: console.log("Great language too :D");
// }
// const population = 130;
// console.log(`Portugal's population is ${population > 33 ? "above" : "below"} average `);






// Lecture Working //

// const currentYear = 2023;
// const ageNat = currentYear - 2004;
// const ageJoe = currentYear - 2007;
// console.log(ageNat >= 18);
// console.log(currentYear - 2004 > currentYear - 2007);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
// const averageAge = (ageNat + ageJoe) / 2
// console.log(averageAge);

// const firstName = "Nathan";
// const job = "coder";
// const birthYear = 2004;
// const desc = (`Hi, I'm ${firstName} and I am born in ${birthYear}`);
// console.log(desc);

// const age = 15;
// if (age >= 18) {
//     console.log("This person is old enough");
// } else {
//     console.log(`This person has another ${18 - age} years to wait`);
// }
// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// const inputYear = "1991";
// console.log(Number(inputYear) + 9);
// console.log(Number("Nathan"));
// console.log("I have " + 2 + " brothers");
// console.log(5 + "3");

// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean("Hi"));
// console.log(Boolean([1, 2, 3]));
// const money = 10000;
// if (money) {
//     console.log("You have money :)");
// } else {
//     console.log("You have no money :P");
// }

// let height;
// if (height) {
//     console.log("Height is defined (as it should be)")
// } else {
//     console.log("Height is false?? Are you an alien? o_0")
// }

// console.log(18 === 18);
// console.log("18" == 18);
// console.log("18" === 18);

// const firstName = prompt("What's your name?");
// if (firstName === "Nathan") {
//     console.log(`Hi ${firstName}!`);
// } else if (firstName === "Joe") {
//     console.log("Hi Nathan's Brother!");
// } else {
//     console.log("Who?")
// }

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B
// const isTired = false; // C
// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("You can drive!");
// } else console.log("You might hurt someone...");

// const color = "";
// switch (color) {
//     case "red":
//         console.log("Red");
//         break;
//     case "orange":
//         console.log("Orange");
//         break;
//     case "yellow":
//         console.log("Yellow")
//         break;
//     default:
//         console.log("Different color");
// }

// const day = "friday";
// if (day === "monday") {
//     console.log("Monday activity");
// } else if (day === "tuesday") {
//     console.log("Tuesday activity");
// } else if (day === "wednesday") {
//     console.log("Wednesday activity");
// } else if (day === "thursday" || day === "friday") {
//     console.log("Almost the weekend!");
// } else {
//     console.log("Different day of the week");
// }

// const age = 19;
// age >= 18 ? console.log("I am an adult :D") : console.log("I am not an adult");

// const isAdult = age >= 18 ? "Yes adult" : "Not adult";
// console.log(isAdult);