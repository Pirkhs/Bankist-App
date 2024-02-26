// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = 23;

// if ((x === 23)) console.log("hi");
// const calcAge = (birthYear) => 2023 - birthYear;

// console.log();

//Sample: BUG
// console.log("Hii");

//// Problem 1 ////
// Calculate the temperature amplitude, keeping in mind there might be a sensor error

///// Understand the problem /////
// amplitude is the diff between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

///// Breaking into sub problems /////
// - How to ignore errors
// - Find max value
// - Find min value
// Subtract min from max (amplitude) and return it

// Problem 2: Function should now receive two arrays of temperatures

///// Understand the problem /////
// - With 2 arrays - just merge them into one
// - So, how to merge the two arrays?

///// Breaking up into sub-problems /////
// - Merge 2 arrays

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temps1, temps2) {
//   let temps = temps1.concat(temps2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== "number") continue;

//     if (temps[i] > max) {
//       max = temps[i];
//     }

//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures, [4, 5, -2, -6, 17]));

// const measureKelvin = function () {
//   const measurement = {
//     type: "temperature",
//     unit: "celsius",
//     // C) FIX
//     value: Number(prompt("Degrees celsius")),
//   };
//   // B) FIND
//   // console.log(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//// Understand the problem
//  Array transformed to a string
// - What is the X days? Answer: current index + 1

// Break into subproblems
// - Transform array to string that keeps growing
// - Transform each element to ºC in a string
// - Day = index of element + 1
// - Logging string will require a template literal with ... between elements and start and end of string

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let string = `...`;
//   for (let i = 0; i < arr.length; i++) {
//     string += ` ${arr[i]}ºC in ${i + 1} days ...`;
//   }
//   console.log(string);
// };

// printForecast(data1);
