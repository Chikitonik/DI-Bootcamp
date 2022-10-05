// Exercise 1 : Favorite Color////////////////////////////////////////////////////////////////
// Instructions
// let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

console.log("Exercise 1 solution:");
let sentence = ["my","favorite","color","is","blue"];
let solution = sentence.join(' ');
solution = solution.charAt(0).toUpperCase() + solution.slice(1) + '.';
console.log(solution);

// Exercise 2 : Mixup/////////////////////////////////////////////////////////////////////////
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";
// 2. Slice out and swap the first 2 characters of the two strings from part 1.
// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
// 4. Finally console.log the new concatenated string.

console.log("\nExercise 2 solution:");
let str1 = "full";
let str2 = "stack";
console.log("Original:",str1,str2);
let str1Slice = str1.slice(0,2);
let str2Slice = str2.slice(0,2);
str1 = str2Slice + str1.slice(2);
str2 = str1Slice + str2.slice(2);
let str3 = str1.concat(" ",str2);
console.log("Solution:",str3);

// Exercise 3 : Calculator///////////////////////////////////////////////////////////////////////
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

try {
    var expression = prompt('Input mathematic expression and you will see the solution.\nFor example:\n(10-2)*4+5');
    alert(expression + '=' + eval(expression));
} catch(e) {
        alert("Yor expression not correct.");
} ;
