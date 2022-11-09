// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise.
// The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.

// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved
// promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

function makeAllCaps(wordsArray) {
  return new Promise((resolve, reject) => {
    if (wordsArray.every((word) => typeof word == "string")) {
      resolve(wordsArray.map((word) => (word = word.toUpperCase())));
    } else {
      reject("not all values in the array are words");
    }
  });
}
function sortWords(wordsArrayUpper) {
  return new Promise((resolve, reject) => {
    if (wordsArrayUpper.length > 4) {
      resolve(wordsArrayUpper.sort());
    } else {
      reject("the words array is lesser than 4");
    }
  });
}
// Test:
//in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

//in this example, you should see in the console,
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// 2nd Daily Challenge
const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

//   Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)
function toJs(json) {
  return new Promise((resolve, reject) => {
    morseJS = JSON.parse(json);
    if (morseJS.length == 0) reject("there is no data here");
    else resolve(morseJS);
  });
}
// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    str = prompt("Input a word or a sentence");
    resolve(
      [...str].reduce((acc, char) => {
        if (!morseJS[char]) {
          reject("there is a symbol not in morse");
        } else {
          acc.push(morseJS[char]);
          return acc;
        }
      }, [])
    );
  });
}
// The third function called joinWords(morseTranslation), takes one argument: the morse translation array
// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)
function joinWords(morseTranslation) {
  console.log(morseTranslation.join("\n"));
}
// Chain the three functions.
// Example:
// "Hello" gives you
// ....
// .
// .-..
// .-..
// ---

toJs(morse).then((value) => {
  toMorse(value).then((morseJS) => {
    joinWords(morseJS);
  });
});
