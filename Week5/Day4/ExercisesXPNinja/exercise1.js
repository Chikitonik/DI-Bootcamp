// First Part :
// Create a js file name main.js.
// Create a function called calculateTip() that takes no parameter.
// Create a variable called billAmount that fetches the value of the input,
// which id is billAmt (check the HTML file) –> It’s the amount of the bill.
// Create a variable called serviceQuality that fetches the value of the input,
// which id is serviceQual (check the HTML file) –> It’s the quality of the service.
// Create a variable called numberOfPeople that fetches the value of the input,
// which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.
// Create a condition :
// If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.
// Create another condition after the first one :
// If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople
// and make sure that the tag which id is each, is not displayed (check the end of the HTML file).
// Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople
// (the outcome is the average tip each person should pay)
// Use the toFixed method to round total to two decimal points.
// Add the CSS property “display:block” to the tag which id is totalTip.
// Display the variable total in the tag which id is tip.

// Second Part:
// To avoid displaying the total if the function calculateTip() is not called,
// add the CSS property “display:none” to the tag which id is totalTip.
// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.

var billAmount,
  serviceQuality,
  numberOfPeople,
  total,
  totalTip = document.getElementById("totalTip"),
  tip = document.getElementById("tip"),
  calculate = document.getElementById("calculate");

totalTip.style.display = "none";

calculate.addEventListener("click", calculateTip);

function calculateTip(e) {
  billAmount = document.getElementById("billamt").value;
  serviceQuality = document.getElementById("serviceQual").value;
  numberOfPeople = document.getElementById("peopleamt").value;

  if (isNaN(billAmount) || serviceQuality == 0 || !billAmount)
    alert("Fill correctly the bill amount and service quality");
  if (!numberOfPeople || numberOfPeople < 1) {
    numberOfPeople = 1;
    document.getElementById("each").style.visibility = "hidden";
  } else document.getElementById("each").style.visibility = "visible";
  total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2);
  tip.textContent = total;
  totalTip.style.display = "block";
  e.preventDefault();
}
