// Exercise 1 : Divisible By Three
// Instructions
// let numbers = [123, 8409, 100053, 333333333, 7]
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.
console.warn("Exercise 1 solution:");
let numbers = [123, 8409, 100053, 333333333, 7];
numbers.forEach((element) => {
  console.log(element % 3 === 0);
});
// Exercise 2 : Attendance
// Instructions
// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina"
// }
console.warn("\nExercise 2 solution:");
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina",
};
// Given the object above where the key is the student’s name and the value is the country they are from.
// Prompt the student for their name.
let stName = prompt("Input your name");
// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in
if (guestList[stName] !== undefined) {
  console.log(`Hi! I'm ${stName}, and I'm from ${guestList[stName]}.`);
} else {
  console.log("Hi! I'm a guest.");
}
// If the name is not in the object, console.log: "Hi! I'm a guest."

// Exercise 3 : Playing With Numbers
// Instructions
// let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.

// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.
console.warn("\nExercise 3 solution:");
let age = [20, 5, 12, 43, 98, 55];
var sumAges = 0;
var highestAge = 0;
age.forEach((element) => {
  sumAges += element;
  if (element > highestAge) {
    highestAge = element;
  }
});
console.log(sumAges);
console.log(highestAge);
