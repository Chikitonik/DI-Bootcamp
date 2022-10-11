// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.
// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false
console.warn("Exercise 1 solution:");
function isBlank(text) {
  return text === "";
}
console.log(isBlank(""));
console.log(isBlank("abc"));

// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.
// console.log(abbrevName("Robin Singh")); --> "Robin S."
console.warn("\nExercise 2 solution:");
function abbrevName(text) {
  var arr = text.split(" ");
  arr[1] = arr[1][0] + ".";
  return arr.join(" ");
}
console.log(abbrevName("Robin Singh"));

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :
// if you input 'The Quick Brown Fox'
// the output should be 'tHE qUICK bROWN fOX'.
console.warn("\nExercise 3 solution:");
function swapLetters(text) {
  var arr = [...text];
  var swappedText = "";
  arr.forEach((e) => {
    if (e === e.toLowerCase()) {
      swappedText += e.toUpperCase();
    } else {
      swappedText += e.toLowerCase();
    }
  });
  return swappedText;
}
console.log(swapLetters("The Quick Brown Fox"));

// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:
// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
console.warn("\nExercise 4 solution:");
function isOmnipresent(arr, number) {
  var isOmn = true;
  arr.forEach((e) => {
    if (e.indexOf(number) == -1) {
      isOmn = false;
    }
  });
  return isOmn;
}
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    1
  )
);
console.log(
  isOmnipresent(
    [
      [1, 1],
      [1, 3],
      [5, 1],
      [6, 1],
    ],
    6
  )
);
