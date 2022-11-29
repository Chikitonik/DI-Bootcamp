// #region -------------String----------------------
String.fromCharCode(97); // returns "a"
const userEmail3 = " cannotfille mailform correctly@gmail.com ";
userEmail3.replace(/\s/g, ""); // replace spaces
//#endregion
// #region -------------Number----------------------
var stringNum = "1";
if (!isNaN(stringNum) && !!stringNum) {
  //   //check is Number and check for empty ""
  num = +stringNum; //convert to number
  console.log(num);
} else console.log("it's not a number");
//#endregion
// #region -------------Array----------------------
console.log(...[1, 3, 4]); // print "1 3 4"
console.log("String to Char array", [..."text"]);

array = ["fgh", 12, 10, , 12, 10, 10, 15, "fg"];
var array = array.filter((value) => /\d/.test(value)); // Leave just numbers

array = Array.from(new Set(array)); //unique values

shuffledArray = [1, 2, 3, 5, 6, 7, 8, 9, 10].sort(
  (a, b) => 0.5 - Math.random()
); // shuffledArray

[3, 2, 1, 5].sort((a, b) => a - b); // [1, 2, 3, 5]

const firstArr = [1, 4, 9, 16];
const secondArr = firstArr.map((value, index) => value * 2);
// expected output: [2, 8, 18, 32]

const letters = ["x", "y", "z", "z"]; // count duplicates
letters.reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {}); // { x: 1, y: 1, z: 2 };
// #endregion
// #region -------------loops------------------------
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
// #endregion
// #region ----------------map--------------------------
let myArray = [1, 2, 3];
let myNewArray = myArray.map(function (x) {
  return x * 2;
});
console.log(myNewArray);
let myNewArray2 = myArray.map((x) => x * 2);
// #endregion
// #region ----------------try catch--------------------");
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
var c = 0;
var aB = "is a > b ?" + (a > b ? "yes" : "no");
console.log(aB);
a > b && (c = 100); // if a > c change value of c

// #endregion
// #region -------------switch--------------------------");
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

// #endregion
// #region -------------Class---------------------------");
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

// #endregion
// #region -------------function------------------------------");
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
// #endregion
// #region -------------debugger--------------------------");
// Such command works only when the development tools are open, otherwise the browser ignores it.
debugger;
// #endregion
// #region -------------RegEx---------------------------");
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

// #endregion
// #region -------------RegEx Dict replace vowels-----------------------");
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

// #endregion
// #region -------------Short-Circuiting----------------------------------");
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

// #endregion
// #region -------------DOM--------------------------------------");
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
// #endregion
// #region -------------setTimeout-------------------------------------");
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
// #endregion
// #region -------------promises and fetch-------------------------
console.log("Starting ...");
const func = () => {
  console.log("Working ...");
  fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
    .then((resp) => resp.json()) //return a promise
    .then((resp) =>
      console.log(`The hour of the sunrise in Tel Aviv is:
            ${resp.results.sunrise}`)
    )
    .catch(function (error) {
      console.log(`We got the error ${error}`);
    });
  console.log("Work Done ...");
};
func();
/////////////////////////////////////////
// New York
// Latitude: 40.730610
// Longitude: -73.935242
const url = "https://api.sunrise-sunset.org/json?";
var city1;
async function getSunrise() {
  city1 = await fetch(`${url}lat=${40.73061}&lng=${-73.935242}`).then((res) =>
    res.json().then((data) => data)
  );
  console.log("city1 :>> ", city1.results);
}
getSunrise();
//////
async function getSunrise(event) {
  event.preventDefault();
  const [city1, city2] = await Promise.all(
    [
      [lat1.value, lon1.value],
      [lat2.value, lon2.value],
    ].map((cityCoord) => {
      return fetch(`${url}lat=${cityCoord[0]}&lng=${cityCoord[0]}`).then(
        (res) => res.json().then((data) => data)
      );
    })
  );
  console.log("city1 :>> ", city1.results);
  console.log("city1 :>> ", city2.results);
}
////////////////////////////////////////
const promise1 = Promise.resolve(3);
// const promise1 = Promise.reject(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((response) => console.log(response))
  .catch((error) => console.log("error :>> ", error));
///////////////////////////////////////

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
    reject("Ooops something went wrong");
  }, 4000);
});
promise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  });
// #endregion
// #region -------------async await---------------------
a = async () => "Hello";
console.log(await a());
// #endregion
// #region -------------local storage---------------------
const tasksArray = JSON.parse(localStorage.getItem("tasksArray") || "[]");
localStorage.setItem("tasksArray", JSON.stringify(tasksArray));
// #endregion
