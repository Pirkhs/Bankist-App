'use strict';

// // function calcAge(birthYear) {
// //   const age = 2023 - birthYear;

// //   function printAge() {
// //     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
// //     console.log(output);

// //     if (1981 < birthYear < 1996) {
// //       var millenial = true;
// //       const firstName = 'Joe';
// //       const str = `Oh, and you're a millenial, ${firstName}`;
// //       console.log(str);
// //     }
// //     // console.log(millenial); -- Will work because var variables are not block scoped

// //     function add(a, b) {
// //       return a + b;
// //     }

// //     output = 'NEW OUTPUT';
// //     console.log(output);
// //   }

// //   printAge();

// //   return age;
// // }

// // const firstName = 'Nathan';
// // calcAge(1987);
// // // console.log(age) -- ReferenceError
// // // printAge(); -- ReferenceError

// // const myName = 'Nathan';

// // if (myName === 'Nathan') {
// //   //   console.log(`Nathan is a ${job}`);
// //   //   let age = 2023 - 2004;
// //   //   console.log(age);
// //   const job = 'crew member';
// // }

// ///// HOISTING /////

// //-- Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Nathan';
// let job = 'crew member';
// const year = 2004;

// // -- Functions
// console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // -- Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
// // Improvements
// // 1. DO NOT use var, preferably use const
// // 2. Declare variables at top of scope
// // 3. Declare functions first, and use them after the declaration, even for function declarations

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

//// -- THIS KEYWORD -- ////
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAge(2004);

// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(2004);

// const Nathan = {
//   year: 2004,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// const Matilda = {
//   year: 2017,
// };
// Matilda.calcAge = Nathan.calcAge;
// Matilda.calcAge();

// const f = jonas.calcAge;
// f(); // Cannot read this keyword of undefined

// var firstName = 'Joe';

// const Nathan = {
//   year: 2004,
//   firstName: 'Nathan',
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);

// const self = this;
// const isMillenial = function () {
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// isMillenial();

//     const isMillenial = () => {
//       console.log(this.year >= 1981 && self.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// Nathan.greet();
// Nathan.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Nathan',
//   age: 19,
// };

// const friend = me;
// friend.age = 27;
// console.log(me);
// console.log(friend);

// - Primitive Types
// let lastName = 'Williams';
// let oldLastName = 'Williams';
// lastName = 'Davis';

// // - Reference Types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log(jessica);
// console.log(marriedJessica);

// // -  Copying objects => Shallow copy
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// console.log(jessica2);
// console.log(jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log(jessica2);
// console.log(jessicaCopy);
