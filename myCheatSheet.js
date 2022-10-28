console.log("-------------String----------------------");
String.fromCharCode(97); // returns "a"
console.log("-------------Number----------------------");
var stringNum = "1";
if (!isNaN(stringNum) && !!stringNum) {
  //   //check is Number and check for empty ""
  num = +stringNum; //convert to number
  console.log(num);
} else console.log("it's not a number");

console.log("-------------Array----------------------");
console.log(...[1, 3, 4]);
console.log([1, 3, 4]);
console.log("String to Char array", [..."text"]);
array = ["fgh", 12, 10, , 12, 10, 10, 15, "fg"];
var array = array.filter((value) => /\d/.test(value)); // Leave just numbers
console.log(array);
array = Array.from(new Set(array)); //unique values
console.log(array);
shuffledArray = [1, 2, 3, 5, 6, 7, 8, 9, 10].sort(
  (a, b) => 0.5 - Math.random()
);

console.log("-------------loops------------------------");
xs = ["item1", "item2", "item3"];
for (var i = 0; i < xs.length; i++) {
  console.log(xs[i]);
}
xs.forEach(function (element, index) {
  xs[index] = xs[index] + "aaa";
});
xs.forEach((e) => console.log(e));

for (const x of xs) {
  console.log(x);
}
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  } //A loop which will skip the step where i = 3.
  "The number is " + i + "<br>";
}
console.log("----------------map--------------------------");
let myArray = [1, 2, 3];
let myNewArray = myArray.map(function (x) {
  return x * 2;
});
console.log(myNewArray);
let myNewArray2 = myArray.map((x) => x * 2);
console.log("----------------try catch--------------------");
try {
} catch (err) {}
console.log("-------------If else--------------");
let age = 20;
if (age === 18) {
  console.log("It's your birthday !!");
} else if (age > 18) {
  console.log("We can go to a pub together !!");
} else {
  console.log("Sorry...You have to stay at home tonight");
}
var a = 10;
var b = 5;
var aB = "is a > b ?" + (a > b ? "yes" : "no");
console.log(aB);

console.log("-------------switch--------------------------");
let fruit = "Papayas";
switch (fruit) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruit + ".");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
}

console.log("-------------Objects----------------------");
animals = { water: "whale", sky: "albatros" };
for (const [key, value] of Object.entries(animals)) {
  console.log(`${key}: ${value}`);
}

const menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];
// Using this array :
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
// Using an array method, add a key “vegetarian” (a boolean) to the menu array.
// The value of the key should be true if the name of the course contains at least one element from the vegetarian array.
for (e in menu) {
  menu[e].vegetarian = vegetarian.some((value) =>
    menu[e].name.toLocaleLowerCase().includes(value)
  );
}

console.log("-------------Class---------------------------");
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

// let date = new Date();
// let year = date.getFullYear();
// let myCar = new Car("Ford", 2014);
// document.getElementById("demo").innerHTML =
//   "My car is " + myCar.age(year) + " years old.";

console.log("-------------function------------------------------");
var a = function name() {};
function name() {}
let myFunction = (a, b) => a * b;
hello = () => "Hello World!";
hello = (val) => "Hello " + val;
hello = (val) => "Hello " + val;

// Immediate Functions (Ie. Self-Invoking Functions)
(function (name) {
  console.log("Hello " + name);
})("Sarah");
// Currying
const add = (a) => (b) => a + b;
const result1 = add(2)(3);
console.log(result1); // console.log 5
console.log("-------------debugger--------------------------");
// Such command works only when the development tools are open, otherwise the browser ignores it.
debugger;
console.log("-------------RegEx---------------------------");
let str = "Happy BirthDay";
let patt = /birthday/i; //regular expression, i is a modifier (modifies the search to be case-insensitive).
let result = str.match(patt);
console.log(result); //returns true

if (result) {
  console.log("Yes");
} else {
  console.log("No");
}

let regex = /^.+@.+\..+$/;
console.log(regex.test("johndoe@gmail.com")); //returns true

console.log("-------------RegEx Dict replace vowels-----------------------");
var word = "AaodsifoHUHOIDHhflsakdj";
var dict = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
  A: 1,
  E: 2,
  I: 3,
  O: 4,
  U: 5,
};
var pattern = /[aeiouAEIOU]/g;
solution = word.replace(pattern, (m) => dict[m]);
console.log(solution);

console.log("-------------Short-Circuiting----------------------------------");
var person1 = {
  name: "Jack",
  age: 34,
};
console.log(person1.job || "unemployed");
// 'unemployed'
var person2 = {
  name: "Jack",
  age: 34,
};
console.log(person2.age > 18 && "Driving allowed");
// 'Driving allowed'

console.log("-------------DOM--------------------------------------");
let li = document.createElement("li");
li.textContent = "Logout";
li.innerHTML = '<a href="#"> Logout</a>';
let ul = document.querySelector("ul");
ul.appendChild(li);
document.getElementById("wrapper").style.backgroundImage =
  "url('bg-wrapper.jpg')";

document.getElementById("someId").addEventListener("click", action);

function action(e) {
  e.currentTarget.style.backgroundColor = "red";
  e.stopPropagation();
  //   Event Propagation : relates to the order in which event handlers are called when
  //   one element is nested inside a second element, and both elements have registered a
  //   listener for the same event (a click, for example).
  e.preventDefault();
  // Many browser events have a “default action”. event.preventDefault() send a signal that those actions should be canceled.
}
console.log("-------------setTimeout-------------------------------------");
drum.classList.add("playing");
setTimeout(function () {
  drum.classList.remove("playing");
}, 100);

function sayHi(phrase, who) {
  alert(phrase + ", " + who);
}
setTimeout(sayHi, 1000, "Hello", "John");
console.log("-------------setInterval---------------------------------");
var intervalId = setInterval(() => {
  console.log("2sec passed");
}, 2000);
function stopInterval() {
  clearInterval(intervalId);
}
