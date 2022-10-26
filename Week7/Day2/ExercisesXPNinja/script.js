// Exercise 1 : Menu
// Instructions
// Using the array below:

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
// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
menu.some((value) => value.type === "dessert");
// Using an array method, check if all the elements in the array are starters.
menu.every((value) => value.type === "starter");
// Using an array method, check if there is at least one element in the array that is a main course. If not,
// add a main course of your choice to the array.
if (!menu.some((value) => value.type === "main course")) {
  menu.push({
    type: "main course",
    name: "beef",
  });
}
// Using this array :
const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];
// Using an array method, add a key “vegetarian” (a boolean) to the menu array.
// The value of the key should be true if the name of the course contains at least one element from the vegetarian array.
for (e in menu) {
  menu[e].vegetarian = vegetarian.some((value) =>
    menu[e].name.toLocaleLowerCase().includes(value)
  );
}
// Exercise 2 : Chop Into Chunks
// Instructions
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and
// the outcome should be represented in an array.
// Example:
// console.log(string_chop('developers',2));
// ["de", "ve", "lo", "pe", "rs"]
function string_chop(str, size) {
  var startIndex = 0;
  var result = [];
  while (startIndex < str.length) {
    result.push(str.slice(startIndex, startIndex + size));
    startIndex += size;
  }
  return result;
}
// Exercise 3 : You Said String ?
// Instructions
// Write a JavaScript function to find a word within a string.
// console.log(search_word('The quick brown fox', 'fox'));
// "'fox' was found 1 times."
function search_word(phrase, word) {
  let i = 0;
  for (e of phrase.split(" ")) {
    if (e.toLocaleLowerCase().includes(word)) i++;
  }
  return `${word} was found ${i} times.`;
}

// Exercise 4 : Reverse Array
// Instructions
// Write a function called reverseArray which accepts an array and returns the array with all
// values reversed. See if you can do this without creating a new array!
// Examples:

//    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
//    reverseArray([1,2]) // [2,1]
//    reverseArray([]) // []
//    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]
function reverseArray(arr) {
  return arr.reverse();
}
