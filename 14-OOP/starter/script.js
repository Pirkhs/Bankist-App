'use strict';

// Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  /* Bad Practice
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  */
};

const nathan = new Person('Nathan', 2004);
const jack = new Person('Jack', 1975);

// 1. New empty object {} is created
// 2. Function is called, this = {}
// 3. {} linked to prototype
// 4. Function automatically returns {}

// console.log(nathan instanceof Person);

Person.hey = function () {
  console.log(`Hey there :D`);
  // console.log(this);
};

// Person.hey();

///////////////////////////////////
// Prototypes
/*
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

nathan.calcAge();

console.log(nathan.__proto__);
console.log(Person.prototype);

console.log(Person.prototype.isPrototypeOf(nathan)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(nathan);
console.log(nathan.species);

console.log(nathan.hasOwnProperty('firstName')); // true
console.log(nathan.hasOwnProperty('species')); // false

console.log(nathan.__proto__);
// Object.prototype top of prototype chain
console.log(nathan.__proto__.__proto__);
console.log(nathan.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);
const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Bad Practice
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
*/

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // Methods added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey there ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name :(`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log(`Hey there :D`);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
const walter = new PersonCl('Walter White', 1965);

// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
// console.log(`Hey ${this.firstName}`);
// };

// jessica.greet();

// Classes are NOT hoisted
// Classes are first-class citizens
// Classes are execuged in strict mode

const account = {
  owner: 'nathan',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

// console.log(account.latest);
// account.latest = 500;
// console.log(account.movements);

// console.log(jessica.age);
