// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:
// stars and words
// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.
// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)
console.warn("Exercise solution:");
var arr = prompt("Input several words separated by commas").split(" ");
var maxLength = 0;
var solution = [];
arr.forEach((e) => {
  maxLength = Math.max(maxLength, e.length);
});
solution.push("*".repeat(maxLength + 4));
arr.forEach((e) => {
  solution.push("* " + e + " ".repeat(maxLength - e.length) + " *");
});
solution.push("*".repeat(maxLength + 4));
solution.forEach((e) => console.log(e));
