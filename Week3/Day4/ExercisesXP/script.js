// Exercise 1: Simple If/Else Statement
// Instructions
// Create 2 variables, x and y. Each of them should have a different numeric value.
// Write an if/else statement that checks which number is bigger.
// Example :

// let x = 5;
// let y = 2;

// You should display:
// x is the biggest number

console.log("Exercise 1 solution:");
var x = 7;
var y = 20;
var ans = 0;
if (x > y) {
    ans = x
} else {
    ans = y
};
console.log(ans,"is the biggest number");


// Exercise 2: Chihuahua
// Instructions
// Create a variable called newDog where it’s value is “Chihuahua”.
// Check and display how many letters are in newDog.
// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’

console.log("\nExercise 2 solution:");
var newDog = "Chihuahua";
console.log(newDog.length,"letters are in",newDog);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog === "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed")
} else {
    console.log("I don't care, I prefer cats")
};


// 🌟 Exercise 3: Even Or Odd
// Instructions
// Prompt the user for a number and save it to a variable.
// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

console.log("\nExercise 3 solution:");
x = Number(prompt("Input a number"));
if (x == x) {
    if (x % 2 == 0) {
        console.log(x + " is an even number")
    } else {
        console.log(x + " is an odd number")
    }
} else {
    alert("Your input is not correct.")
};

// 🌟 Exercise 4: Group Chat
// Instructions
// Below is an array of users that are online in a group chat.

// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
// Using the array above, console.log the number of users that are connected to the group chat based on the following rules:
// If there is no users (the users array is empty), console.log “no one is online”.
// If there is 1 user, console.log “<name_user> is online”.
// If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
// If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
// For example, if there are 5 users, it should display:
// name_user1, name_user2 and 3 more are online

console.log("\nExercise 4 solution:");
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
l = users.length;
if (l < 1) {
    console.log("no one is online");
} else if (3 > l > 0) {
    console.log(users.join(" and ") + " is online");
} else {
    console.log(users.slice(0,2).join(", "),"and",l-2,"more are online");
};