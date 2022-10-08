// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.
console.warn("Exercise 1 solution:");
// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height
var person1 = {
  fullName: "Adam",
  mass: 80,
  height: 185,
  bmi() {
    return this.mass / (this.height / 100) ** 2;
  },
};
var person2 = {
  fullName: "Salma",
  mass: 60,
  height: 155,
  bmi() {
    return this.mass / (this.height / 100) ** 2;
  },
};
// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.
// Display the name of the person who has the largest BMI.
function bmiCompare(...args) {
  var objLargestBmi = args[0];
  args.forEach((element) => {
    if (element.bmi() > objLargestBmi.bmi()) {
      objLargestBmi = element;
    }
  });
  return objLargestBmi;
}
console.log(
  `${bmiCompare(person1, person2).fullName} has the largest BMI ${bmiCompare(
    person1,
    person2
  ).bmi()}`
);

// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.
// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.
console.warn("\nExercise 2 solution:");
// Create a function called findAvg(gradesList) that takes an argument called gradesList.
// Your function must calculate and console.log the average.
// If the average is above 65 let the user know they passed
// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.
function findAvg(gradesList) {
  var avrGrade = 0;
  gradesList.forEach((element) => {
    avrGrade += element;
  });
  return avrGrade / gradesList.length;
}
console.log(findAvg([100, 50, 60, 70, 80, 70, 90, 64, 70, 80]));
function isPassed(gradesList) {
  var avrGrade = findAvg(gradesList);
  if (avrGrade > 65) {
    return "You passed";
  } else {
    return "You failed and must repeat the course";
  }
}
console.log(isPassed([100, 50, 60, 70, 80, 70, 90, 64, 70, 80]));
