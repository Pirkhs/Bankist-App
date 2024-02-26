'use strict';

// Data needed for first part of the section

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   //ES6 enhanced object literals
//   openingHours,

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza: function (mainIngredients, ...otherIngredients) {
//     console.log(mainIngredients);
//     console.log(...otherIngredients);
//   },
// };

////////////////////////////////////
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // -- Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // - Receive 2 return values from a function //
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // - Nested destructuring
// const nested = [2, 4, [5, 6]];

// const [firstNested, , thirdNested] = nested;
// console.log(firstNested, thirdNested);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// const { name, openingHours, categories } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// // - Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // - Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// // console.log(a, b);

// // - Nested Objects
// const {
//   fri: { open, close },
// } = hours;
// console.log(open, close);

// - Destructuring Objects when passed into functions
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join two arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Spread operator on strings
// const str = 'Nathan';
// const letters = [...str];

// // Passing array into function

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// // console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// Object Spread Operator
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);

///////// Rest Pattern ////////////
// SPREAD = RIGHT side of =
// REST = LEFT side of =

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// - Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onions', 'olive', 'spinach');

// console.log("---------- OR ----------");
// Use ANY data type
// Return ANY data type
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---------- AND ----------');
// console.log(0 && 'Nathan');
// console.log('Nathan' && 23);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

//----- Nullish Coalescing Operator
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...game.players[0], ...game.players[1]];

// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // const [team1, draw, team2] = [game.odds.team1, game.odds.x, game.odds.team2];
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// const printGoals = function (...players) {
//   for (let i = 0; i < players.length; i++) {
//     console.log(players[i]);
//   }
//   console.log(`Number of goals: ${players.length}`);
//   console.log('----------------');
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// team1 < team2 && console.log('Team 1 has better odds');
// team2 < team1 && console.log('Team 2 has better odds');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// const Nathan = {
//   firstName: 'Nathan',
//   age(birthYear) {
//     return 2023 - birthYear;
//   },
// };

// console.log(Nathan.age(2004));

// const week = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'];

// const [, , , , , ...weekends] = week;
// console.log(weekends);

// const schedule = {
//   weekends: 'chilling',
// };

// console.log(`The schedule for ${[...weekends]} is ${schedule.weekends}`);

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// ------  OPTIONAL CHAINING
// console.log(restaurant.openingHours?.mon?.open);
// console.log(restaurant.openingHours.fri?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? `closed`;
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [
//   { name: 'Nathan', email: 'nathan.com' },
//   { name: 'Joe', email: 'joe.com' },
// ];

// console.log(users[1]?.name ?? 'User array empty');

// Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days:`;

// for (const day of properties) {
//   openStr += ` ${day},`;
// }
// console.log(openStr);

// Property VALUES
// const values = Object.values(openingHours.thu);
// console.log(values);

// Property ENTRIES
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// for (const [i, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(i) + 1}: ${player}`);
// }

// // 2.
// let sum = 0;
// const gameOdds = Object.values(game.odds);
// for (const odd of gameOdds) {
//   sum += odd;
// }
// console.log(sum / gameOdds.length);

// // 3.
// console.log(Object.entries(game.odds));
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamPlaceholder = game[team] ?? 'draw';
//   console.log(`Odds of ${teamPlaceholder} : ${odd}`);
// }

// // BONUS
// const scorers = {};
// for (const [, player] of Object.entries(game.scored)) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
//   // Is the object defined in the object ? if it is, add one to the value : otherwise add this property to the object with the initial value set to 1
// }

// console.log(scorers);
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(new Set('Nathan'));
// console.log(ordersSet.size);
// console.log(ordersSet.has('PiZza'));
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);

// ordersSet['Garlic Bread'];

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(staff).size);

// console.log(new Set('nathanbriers').size);

// for (const order of ordersSet) console.log(order);

// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are close :(');

// // console.log(rest.get('categories'));

// const time = 21;
// rest.get(rest.get('open') < time < rest.get('close'));

// console.log(rest.get(rest.get('open') < time < rest.get('close')));

// console.log(rest.has('categories'));
// console.log(rest.size);

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest.get(arr));

// console.log(rest);

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct! :D'],
//   [false, 'Try again!'],
// ]);

// console.log(question);

// // Convert object to map
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// // // Quiz app
// // console.log(question.get('question'));
// // for (const [key, value] of question) {
// //   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// // }
// // const answer = Number(prompt('Your answer:'));

// // console.log(question.get(answer === question.get('correct')));

// // Convert map to array
// console.log([...question]);
// // // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// let eventCount = 0;
// for (const event of gameEvents) {
//   eventCount++;
// }
// console.log(`An event happened, on average, every ${90 / eventCount} minutes`);
// Could have instead used gameEvents.size to get the eventsCount

// BONUS use .pop to get the last element's key of 92 minutes
// const time = [...gameEvents.keys()].pop();
// console.log(
//   `An event happened, on average, every ${time / eventCount} minutes`
// );

// 4.
// for (const [minute, event] of gameEvents) {
//   const str = minute <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
//   console.log(`${str} ${minute}: ${event}`);
// }

// const airline = 'TAP Air Portugal';
// const plane = 'Airbus A320 neo';

// console.log(airline.indexOf(' '));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));

// const checkMiddleSeat = function (seat) {
//   // B & E = Middle Seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log(`You got the middle seat :(`);
//   } else console.log('You got lucky! :)');
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('nathan'));
// console.log(airline.toUpperCase());

// // Fix capitalisation is name
// const passenger = 'nAtHAN';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// Compare email
// const email = 'hello@nathan.io';
// const loginEmail = '  Hello@Nathan.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalisedEmail = loginEmail.toLowerCase().trim();
// console.log(normalisedEmail);
// console.log(email === normalisedEmail);

// const checkEmail = function (email, loginEmail) {
//   const standardisedEmail = loginEmail.toLowerCase().trim();
//   if (standardisedEmail === email) {
//     console.log('Emails match!');
//   } else console.log('Emails do not match!');
// };

// checkEmail('nathan.com', '   NathAn.com    ');

// Replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement = `All passengers come to boarding door 23, Boarding door 23!`;

// console.log(announcement.replace(/*All*/ /door/g, 'gate'));

// Booleans
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));
// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log(`You are not allowed on board`);
//   } else console.log(`Welcome aboard!`);
// };
// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('I have some socks and a camera');
// checkBaggage('Got some snacks and a gun for protection');

// Working with Strings - Pt 3
// Split and Join
// console.log(`a+very+nice+string`.split('+'));
// console.log(`nathan briers`.split(' '));

// const [firstName, lastName] = 'Nathan Briers'.split(' ');
// console.log(firstName);

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName);

// const capitaliseName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(` `));
// };
// capitaliseName('jessica ann smith davis');
// capitaliseName('nathan briers');

// Padding
// const message = `Go to gate 23!`;
// console.log(message.padStart(25, '+'));
// console.log(message.padEnd(25, '+'));

// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(4337846385459234054));
// console.log(maskCreditCard('612384912832192312839534'));

// // Repeat
// const msg = `Bad weather... All departures delayed`;
// console.log(msg.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(50);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// // Creating text area and button elements
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// // Event listener for click event when button clicked
// document.querySelector('button').addEventListener('click', function () {
//   // Selecting text area value and assigning to a variable
//   const text = document.querySelector('textarea').value;

//   // Split each word into an element in an array
//   const textArray = text.split('\n');

//   // Create empty array for converted words
//   const textArrayConverted = [];
//   // For each word in the text
//   for (let word of textArray) {
//     // Trim word
//     word = word.trim();
//     // Set first letter to lowercase
//     word = word[0].toLowerCase() + word.slice(1);
//     // Set letter after underscore to capitalised and any letters after underscore to lowercase
//     let underscoreIndex = word.indexOf('_');
//     word =
//       word.slice(0, underscoreIndex) +
//       word[underscoreIndex + 1].toUpperCase() +
//       word.slice(underscoreIndex + 2).toLowerCase();
//     // Push words back into converted array
//     textArrayConverted.push(word);
//   }
//   // Log elements into separate strings
//   for (let i = 0; i < textArrayConverted.length; i++) {
//     console.log(textArrayConverted[i].padEnd(20, ' ') + '✅'.repeat(i + 1));
//   }
// });

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }
