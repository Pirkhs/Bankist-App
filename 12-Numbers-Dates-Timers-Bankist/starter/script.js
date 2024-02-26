'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-09-04T17:01:17.194Z',
    '2023-09-08T23:36:17.929Z',
    '2023-09-10T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0); // 0 based so + 1
  // const year = date.getFullYear();
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: `currency`,
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogoutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When time = 0, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started
      `;
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };
  // Set time to 5m
  let time = 120;
  // Call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
/*
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100;
*/

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // // Create current date and time
    // const date = new Date();
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0); // 0 based so + 1
    // const year = date.getFullYear();
    // const hour = `${date.getHours()}`.padStart(2, 0);
    // const min = `${date.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Experimenting with API
    const now = new Date();
    const options = {
      hour: `numeric`,
      minute: `numeric`,
      day: `numeric`,
      month: `numeric`,
      year: `numeric`,
      // weekday: `short`,
    };
    // const locale = navigator.language;
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset Timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);

    // Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll(`.movements__row`)].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = `lightgrey`;
  });
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number(`23`));
console.log(+`23`);

// Parsing
console.log(Number.parseInt(`30px`, 10)); // 30
console.log(Number.parseInt(`e23`, 10)); // NaN

console.log(Number.parseFloat(`   2.5rem    `)); // 2.5
console.log(Number.parseInt(`   2.5rem   `)); // 2

// isNan
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN(`20`)); // false
console.log(Number.isNaN(+`20X`)); // true
console.log(Number.isNaN(23 / 0)); // false?

// isFinite
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite(`20`)); // false
console.log(Number.isFinite(+`20X`)); // false
console.log(Number.isFinite(23 / 0)); // false

// isInteger
console.log(Number.isInteger(23)); // true
console.log(Number.isInteger(23.0)); // true
console.log(Number.isInteger(23 / 0)); // false

*/

/*
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5
console.log(8 ** (1 / 3)); // 2

console.log(Math.max(5, 10, `23`, 11, `2`)); // 23
console.log(Math.max(5, 10, `23px`, 11, `2`)); // NaN

console.log(Math.min(5, 10, `23`, 11, `2`)); // NaN

console.log(Math.PI * Number.parseFloat(`10px`) ** 2);

console.log(Math.trunc(Math.random() * 6) + 1); // 1-6

const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(1, 4));

// Rounding integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.ceil(23.2));
console.log(Math.floor(23.9));

console.log(Math.ceil(-23.5));
console.log(Math.floor(-23.5));

// Rounding decimals
console.log(+(2.345).toFixed(2));

*/

// Remainder
/*
console.log(5 % 2); // 1
console.log(8 % 3); // 2
console.log(10 % 5); // 0

console.log(123712734 % 2); // 0 => even
console.log(823421231 % 2); // 1 => odd

const evenOrOdd = n => (n % 2 === 0 ? `even` : `odd`);
console.log(evenOrOdd(133));
*/

// 287,460,000,000
/*
const diameter = 287_460_000_000;
const price = 345_99;

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;

console.log(+`230_000`);
*/

/*
// BigInt
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(12938183128239842398482843298742398498235n);
console.log(BigInt(12938183128239842398482843298742398498235));

// Operations
console.log(10000n + 10000n);

const huge = 4564786875766765n;
// console.log(huge * 23);

console.log(20n > 15);
console.log(20n === 20); // false
console.log(20n == `20`); // true

console.log(huge + ` is REALLY big`);

// Divisions
console.log(12n / 3n);
console.log(10 / 3);
*/

/*
// Create a date

const date = new Date();
console.log(date);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));

console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future.getMonth());
console.log(future.getMilliseconds());
console.log(future.getTime);

console.log(Date.date());
*/

/*
// Calculations with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);
*/

// Internationalisation with numbers
/*
const num = 3884764.23;

const options = {
  style: `currency`,
  currency: `EUR`,
  // useGrouping: false,
};

console.log(`US:      `, new Intl.NumberFormat(`en-US`, options).format(num));
console.log(`Germany: `, new Intl.NumberFormat(`de-DE`, options).format(num));
console.log(`Syria:   `, new Intl.NumberFormat(`ar-SY`, options).format(num));
*/

/*
// Timers - setTimeout()
const ingredients = [`olives`, `spinach`];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log(`Waiting...`);

if (ingredients.includes(`spinach`)) clearTimeout(pizzaTimer);

// Timers - setInterval()
const timer = setInterval(function () {
  const now = new Date();
  console.log(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
}, 1000);

clearTimeout(timer);

*/
