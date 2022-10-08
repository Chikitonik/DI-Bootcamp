// 🌟 Exercise 1 : List Of People
// Instructions
// let people = ["Greg", "Mary", "Devon", "James"];
console.warn("Exercise 1 Part I solution:");
let people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.splice(people.indexOf("Greg"), 1);
console.log(people);
// Write code to replace “James” to “Jason”.
people[people.indexOf("James")] = "Jason";
console.log(people);
// Write code to add your name to the end of the people array.
people.push("Roman");
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
people2 = people.slice(1, people.length - 1);
console.log(people2);
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1];
console.log(last);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
console.warn("\nExercise 1 Part II solution:");
people.forEach((x) => console.log(x));
// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Jason") {
    break;
  }
}
// Hint: take a look at the break statement in the lesson.

// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
console.warn("\nExercise 2 solution:");
let colors = ["white", "black", "yellow", "red", "green"];
for (let i = 0; i < colors.length; i++) {
  console.log("My #%d choice is %s", i + 1, colors[i]);
}
let suffixes = { 1: "st", 2: "nd", 3: "rd", 4: "th", 5: "th" };
for (let i = 1; i <= colors.length; i++) {
  console.log("My %d%s choice is %s", i, suffixes[i], colors[i]);
}
// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
console.warn("\nExercise 3 solution:");
var num = 0;
while (num < 10) {
  num = Number(prompt("Input a number"));
  if (typeof num != "number" || num != num) {
    alert("Your input is incorrect");
  }
}
// 🌟 Exercise 4 : Building Management
// Instructions:
// let building = {
//     numberOfFloors : 4,
//     numberOfAptByFloor : {
//         firstFloor : 3,
//         secondFloor : 4,
//         thirdFloor : 9,
//         fourthFloor : 2,
//     },
//     nameOfTenants : ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan :  [4, 1000],
//         david : [1, 500],
//     },
// }
console.warn("\nExercise 4 solution:");
// Review About Objects
// Copy and paste the above object to your Javascript file.
let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log(
  building.numberOfAptByFloor.firstFloor +
    building.numberOfAptByFloor.thirdFloor
);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(
  building.nameOfTenants[1],
  building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]
);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let rentSD =
  building.numberOfRoomsAndRent.sarah[1] +
  building.numberOfRoomsAndRent.david[1];
if (rentSD > building.numberOfRoomsAndRent.dan[1]) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

console.warn("\nExercise 5 solution:");
let family = {
  father: "Rami",
  mother: "Rakel",
  son: "Richard",
  daughter: "Rima",
};
console.warn("keys:");
for (var key in family) {
  console.log(key);
}
console.warn("values:");
for (var key in family) {
  console.log(family[key]);
}

// Exercise 6
// Instructions
// let details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

console.warn("\nExercise 6 solution:");
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
let ans = [];
for (var key in details) {
  ans.push(key + " " + details[key]);
}
console.log(...ans);

// Exercise 7 : Secret Group
// Instructions
// let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

console.warn("\nExercise 7 solution:");
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let answer = [];
names.forEach((x, i) => answer.push(x[0]));
answer.sort();
console.log(answer.join(""));
