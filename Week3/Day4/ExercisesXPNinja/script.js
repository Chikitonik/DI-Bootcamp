// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY

console.log("Exercise 1 solution:");
var x = 2000;
var y = 1990;
var yearNow = 2022;
var l = [x, y];
l.sort()
var answer = l[1] * 2 - l[0]

// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

console.log("\nExercise 2 solution part 1:");
var zipCode = Number(prompt("Input zip code"));
if (String(zipCode).length == 5 && zipCode == zipCode) {
    console.log("success")
} else {
    console.log("error")
};

console.log("\nExercise 2 solution part 2:");
var zipCode = prompt("Input zip code");
var pattern = /\d{5}/;
try {
    var zipCodeChecked = zipCode.match(/\d{5}/)[0];
    if (zipCode === zipCodeChecked) {
        console.log("success")
    } else {
        console.log("error")
    };
} catch (e) {
    console.log("error");
};

// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

console.log("\nExercise 3 solution:");
var word = prompt("Tap a word");
var patt = /[^aeiouAEIOU]/g;
var solution = word.match(patt);
console.log(solution.join(''));
var dict = {
    "a": 1, "e": 2, "i": 3, "o": 4, "u": 5,
    "A": 1, "E": 2, "I": 3, "O": 4, "U": 5,
};
patt = /[aeiouAEIOU]/g;
solution = word.replace(patt, m => dict[m]);
console.log(solution);