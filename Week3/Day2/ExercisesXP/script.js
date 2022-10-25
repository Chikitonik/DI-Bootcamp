// Exercise 1: Your Favorite Food////////////////////////////////
// Instructions
// Store your favorite food into a variable.
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>

console.log("Exercise 1 solution:");
var favFood = "banana";
var favMeal = "breakfast";
console.log("I eat "+ favFood + " at every " + favMeal);

// Exercise 2 : Series///////////////////////////////////////////
// Instructions
// Part I
// Using this array : let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

console.log("\nExercise 2 Part I solution:");
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
var myWatchedSeriesLength = myWatchedSeries.length;
var myWatchedSeriesSentence = "I watched " + myWatchedSeriesLength +  " series";
console.log(myWatchedSeriesSentence + ": " + myWatchedSeries.join(", "));

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

console.log("\nExercise 2 Part II solution:");
myWatchedSeries[myWatchedSeries.indexOf("the big bang theory")] = "friends";
myWatchedSeries.push("foundation");
myWatchedSeries.unshift("games of thrones");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);
console.log(myWatchedSeries[myWatchedSeries.indexOf("money heist")][2]);
console.log(myWatchedSeries);

// Exercise 3 : The Temperature Converter///////////////////////////////////////////
// Instructions
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

console.log("\nExercise 3 solution:");
var tCel = 25;
var tFar = tCel / 5 * 9 + 32;
console.log(`${tCel}°C is ${tFar}°F`);

// Exercise 4 : Guess The Answers #1///////////////////////////////////////////
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

console.log("\nExercise 4 solution:");
let c;
let a = 34;
let b = 21;
console.log("console.log(a+b) Prediction:",55);
console.log("console.log(a+b) Actual:",(a+b));
a = 2;
console.log("console.log(a+b) Prediction:",23);
console.log("console.log(a+b) Actual:",(a+b));
console.log("console.log(3 + 4 + '5') Prediction:",75);
console.log("console.log(3 + 4 + '5') Actual:",(3 + 4 + '5'));

// Exercise 5 : Guess The Answers #2///////////////////////////////////////////
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

console.log("\nExercise 5 solution:");
console.log("typeof(15) Prediction:","number");
console.log("typeof(15) Actual:",typeof(15));
console.log("typeof(5.5) Prediction:","number");
console.log("typeof(5.5) Actual:",typeof(5.5));
console.log("typeof(NaN) Prediction:","NaN");
console.log("typeof(NaN) Actual:",typeof(NaN));
console.log("typeof('hello') Prediction:","string");
console.log("typeof('hello') Actual:",typeof('hello'));
console.log("typeof(true) Prediction:","boolean");
console.log("typeof(true) Actual:",typeof(true));
console.log("typeof(1 != 2) Prediction:","boolean");
console.log("typeof(1 != 2) Actual:",typeof(1 != 2));
console.log("'hamburger' + 's') Prediction:","hamburgers");
console.log("'hamburger' + 's') Actual:","hamburger" + "s");
console.log("'hamburgers' - 's') Prediction:","NaN");
console.log("'hamburgers' - 's') Actual:","hamburgers" - "s");
console.log("'1' + '3' Prediction:","13");
console.log("'1' + '3') Actual:","1" + "3");
console.log("'1' - '3' Prediction:","-2");
console.log("'1' - '3') Actual:","1" - "3");
console.log("'johnny' + 5 Prediction:","johnny5");
console.log("'johnny' + 5 Actual:",'johnny' + 5);
console.log("'johnny' - 5 Prediction:","NaN");
console.log("'johnny' - 5 Actual:",'johnny' - 5);
console.log("99 * 'hello' Prediction:","NaN");
console.log("99 * 'hello' Actual:",99 * "hello");
console.log("1 != 1' Prediction:","false");
console.log("1 != 1 Actual:",1 != 1);
console.log("1 == '1' Prediction:","true");
console.log("1 == '1' Actual:",1 == "1");
console.log("1 === '1' Prediction:","false");
console.log("1 === '1' Actual:",1 === "1");

// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


console.log("\nExercise 6 solution:");
console.log("5 + '34' Prediction:",39);
console.log("5 + '34' Actual:",5 + "34");
console.log("5 - '4' Prediction:",1);
console.log("5 - '4' Actual:",5 - "4");
console.log("10 % 5 Prediction:",0);
console.log("10 % 5 Actual:",10 % 5);
console.log("5 % 10 Prediction:",5);
console.log("5 % 10 Actual:",5 % 10);
console.log('"Java" + "Script" Prediction:',"JavaScript");
console.log('"Java" + "Script" Actual:',"Java" + "Script");
console.log('" " + " " Prediction:',"'  '");
console.log('" " + " " Actual:'," " + " ");
console.log('" " + 0 Prediction:',"' 0'");
console.log('" " + 0 Actual:'," " + 0);
console.log('true + true Prediction:',true);
console.log('true + true Actual:',true + true);
console.log('true + false Prediction:',false);
console.log('true + false Actual:',true + false);
console.log('false + true Prediction:',false);
console.log('false + true Actual:',false + true);
console.log('false - true Prediction:',"NaN");
console.log('false - true Actual:',false - true);
console.log('!true Prediction:',false);
console.log('!true - true Actual:',!true);
console.log('3 - 4 Prediction:',-1);
console.log('3 - 4 - true Actual:',3 - 4);
console.log('"Bob" - "bill" Prediction:',"NaN");
console.log('"Bob" - "bill" Actual:',"Bob" - "bill");
