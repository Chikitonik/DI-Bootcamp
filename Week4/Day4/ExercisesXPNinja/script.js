// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
console.warn("Exercise 1 solution:");
function randomEvenNumbers(number) {
  var arr = [];
  for (var i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(...randomEvenNumbers(40));

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,
// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
console.warn("\nExercise 2 solution:");
function capitalize(string) {
  var arrCap = [];
  var arrLow = [];
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      arrCap.push(string[i].toUpperCase());
      arrLow.push(string[i]);
    } else {
      arrLow.push(string[i].toUpperCase());
      arrCap.push(string[i]);
    }
  }
  return [arrCap.join(""), arrLow.join("")];
}
console.log(capitalize("abcdef"));

// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.
// palindrome
console.warn("\nExercise 3 solution:");
function isPalindrome(word) {
  return [...word].reverse().join("") === word;
}
console.log(isPalindrome("kayak"));
// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:
// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100
// const array2 = ['a', 3, 4, 2]; // should return 4
// const array3 = []; // should return 0

console.warn("\nExercise 4 solution:");
const array = [-1, 0, 3, 100, 99, 2, 99];
const array2 = ["a", 3, 4, 2];
const array3 = [];
function biggestNumberInArray(arrayNumber) {
  arrayNumber = arrayNumber.filter((value) => /\d/.test(value));
  if (arrayNumber.length == 0) {
    arrayNumber = [0];
  }
  return Math.max.apply(null, arrayNumber);
}
console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));
// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
console.warn("\nExercise 5 solution:");
function uniqueArr(array) {
  array = new Set(array);
  return [...array];
}
console.log(uniqueArr([1, 2, 3, 3, 3, 3, 4, 5]));
