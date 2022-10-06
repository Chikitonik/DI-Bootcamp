// Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’

console.log("Exercise 1 solution:");
let lang = prompt("Which language do You speak?").toLowerCase();
switch (lang) {
    default:
        console.log("Sorry, the language", lang, "didn't recognize");
        break;
    case 'french':
        console.log("Bonjour");
        break;
    case 'english':
        console.log("Hello");
        break;
    case 'hebrew':
        console.log("Shalom");
        break;
    }


// Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

console.log("\nExercise 2 solution:");
let grade = Number(prompt("What is Your grade?"));
    switch (true) {
        case (grade != grade || grade > 100 || grade < 0):
            alert("Your input is incorrect.");
            break;
        case (grade > 90):
            console.log("A");
            break;
        case (80 < grade && grade <= 90):
            console.log("B");
            break;
        case (70 <= grade && grade <= 80):
            console.log("C");
            break;
        case (grade < 70):
            console.log("D");
            break;
        }


// Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.
// Example:

//   The string is : "swim" , your program should console.log : "swimming"
//   The string is : "swimming", your program should console.log : "swimmingly"
//   The string is : "go" your program should console.log : "go"

console.log("\nExercise 3 solution:");
let verb = prompt("Tap a verb");
let l = verb.length;
    switch (true) {
        case (l >= 3 && verb.slice(-3) != "ing"):
            console.log(verb + "ing");
            break;
        case (l >= 3 && verb.slice(-3) == "ing"):
            console.log(verb + "ly");
            break;
        default :
            console.log(verb);
            break;
        };