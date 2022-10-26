// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
let sumOfAllElem = (arr) => {
  let totalSum = 0;
  for (e of arr) {
    totalSum += e;
  }
  return totalSum;
};
// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.
let removedDuplicates = (arr) => Array.from(new Set(arr));

// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
let cleanArray = (arr) => {
  for (e of arr) {
    if (!e && isNaN(e) && e === 0) arr.splice(e);
  }
  return arr;
};

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"
const repeat = (word, count) => word.repeat(count);

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

//     When you write:

//     console.log(startLine);
//     console.log(turtle);
//     console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'

// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?

turtle = " ".repeat(7) + turtle;
rabbit = " ".repeat(7) + rabbit;
console.log(startLine);
console.log(turtle);
console.log(rabbit);
turtle = turtle.trim().padEnd(3, "=");
turtle = turtle.trim().padStart(9, " ");
rabbit = rabbit.trim().padEnd(9, "=");
console.log(startLine);
console.log(turtle);
console.log(rabbit);
