var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }
// const newNumbers = numbers.map(double);

//var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

/* const newNumbers = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers) */
//convert to arrow function
/* const newNumbers = numbers.map(x => x*2 );
console.log(newNumbers) */

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

/*  const newNumbers = numbers.filter(function(num) {
   return num < 10;
 });
 console.log(newNumbers) */

//convert to arrow function
/* const newNumbers = numbers.filter((num) => num < 10);
console.log(newNumbers); */

// var newNumbers = [];
// numbers.forEach(function(num) {
//   if (num < 10) {
//     newNumbers.push(num);
//   }
// })

//Reduce - Accumulate a value by doing something to each item in an array.

/*  var newNumber = numbers.reduce(function (accumulator, currentNumber) {
   console.log("accumulator = " + accumulator);
   console.log("currentNumber = " + currentNumber);
     return accumulator + currentNumber;
 })
 console.log(newNumber); */

//convert to arrow function

/* var newNumber = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newNumber); */

// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
//   newNumber += currentNumber
// })

//Find - find the first item that matches from an array.

/* const newNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumber);
 */

//convert arrow function
/* const newNumber = numbers.find((num) => num > 10);
console.log(newNumber); */

// console.log(newNumber);

//FindIndex - find the index of the first item that matches.

/* const newNumber = numbers.findIndex(function (num) {
   return num > 10;
 })
 console.log(newNumber); */

//convert to arrow function
const newNumber = numbers.findIndex((num) => num > 10);
console.log(newNumber);

// console.log(newNumber);

//Challenge Solution
/* import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia); */

//convertion to arrow function
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map((emojiEntry) =>
  emojiEntry.meaning.substring(0, 100)
);

console.log(newEmojipedia);
