// Exercise 1 : Nested Functions
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.
let landscape = function () {
  let result = "";
  let flat = function (x) {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };
  let mountain = function (x) {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };
  flat(4);
  mountain(4);
  flat(4);
  return result;
};
landscape();
// Change the code below to nested arrow functions.
let landscapeArrow = () => {
  let result = "";
  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };
  let mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };
  flat(4);
  mountain(4);
  flat(4);
  return result;
};
landscapeArrow();

// Exercise 2 : Closure
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = (x) => (y) => x + y;
const addToTen = addTo(10);
addToTen(3); //13

// Exercise 3 : Currying
// Instructions
// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1); //31

// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum = (a) => (b) => a + b;
const add5 = curriedSum(5);
add5(12); //17

// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10); //16
