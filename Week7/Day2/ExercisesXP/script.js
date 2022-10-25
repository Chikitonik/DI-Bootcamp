// 🌟 Exercise 1 : Scope
// Instructions
// Analyze the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// #1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert("inside the funcOne function ", a);
}
// #1.1 - run in the console:
funcOne();
// #1.2 What will happen if the variable is declared
// with const instead of let ?
// ------------- COMMENT start --------------------------------- //
// it will be a mistake, because 'const' isn't reassignable
// ------------- COMMENT end ----------------------------------- //

//#2
let a = 0;
function funcTwo() {
  a = 5;
}

function funcThree() {
  alert("inside the funcThree function ", a);
}

// #2.1 - run in the console:
funcThree();
funcTwo();
funcThree();
// #2.2 What will happen if the variable is declared
// with const instead of let ?
// ------------- COMMENT start --------------------------------- //
// 0
// it will be a mistake, because 'const' isn't reassignable
// ------------- COMMENT end ----------------------------------- //

//#3
function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert("inside the funcFive function ", a);
}

// #3.1 - run in the console:
funcFour();
funcFive();

//#4
let a = 1;
function funcSix() {
  let a = "test";
  alert("inside the funcSix function ", a);
}

// #4.1 - run in the console:
funcSix();
// #4.2 What will happen if the variable is declared
// with const instead of let ?
// ------------- COMMENT start --------------------------------- //
// it also will be 'test' because of scope declaration
// ------------- COMMENT end ----------------------------------- //

//#5
let a = 2;
if (true) {
  let a = 5;
  alert("in the if block ", a);
}
alert("outside of the if block ", a);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?
// ------------- COMMENT start --------------------------------- //
// the same as let
// 5
// 2
// because of scope declaration
// ------------- COMMENT end ----------------------------------- //

// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

function winBattle() {
  return true;
}
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
// ------------- COMMENT start --------------------------------- //
experiencePoints = () => (winBattle() ? 10 : 1);
console.log(experiencePoints());
// ------------- COMMENT end ----------------------------------- //

// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

console.log(isString("hello"));
//true
console.log(isString([1, 2, 4, 0]));
//false
// ------------- COMMENT start --------------------------------- //
experiencePoints = () => (winBattle() ? 10 : 1);
console.log(experiencePoints());
// ------------- COMMENT end ----------------------------------- //

// 🌟 Exercise 4 : Colors
// Instructions
// Using this array :

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.”
//  “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"),
// else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
// ------------- COMMENT start --------------------------------- //
colors.forEach((e, i) => console.log(`${i + 1}# choice is ${e}`));
colors.includes("Violet") ? console.log("Yeah") : console.log("No...");
// ------------- COMMENT end ----------------------------------- //

// 🌟 Exercise 5 : Colors #2
// Instructions
// Using these arrays :

const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .”
// “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
// ------------- COMMENT start --------------------------------- //
colors.forEach((e, i) =>
  console.log(`${i + 1}${ordinal[i + 1 > 3 ? 0 : i + 1]} choice is ${e}`)
);
// ------------- COMMENT end ----------------------------------- //

// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that
// they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.
// ------------- COMMENT start --------------------------------- //
let bankAmount = 10000;
const VAT = 0.17;
let details = [+200, -100, +146, +167, -2900];
let bankAccount = () => {
  details.forEach((e, i, details) => {
    bankAmount += details[i] < 0 ? details[i] * (VAT + 1) : details[i];
  });
  console.log(bankAmount);
};
bankAccount();
// ------------- COMMENT end ----------------------------------- //
