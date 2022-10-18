// Declare a global variable named allBoldItems.
// Create a function called getBold_items() that takes no parameter.
// This function should collect all the bold items inside the paragraph and
// assign them to the allBoldItems variable.
// Create a function called highlight() that changes the color of all the bold text to blue.
// Create a function called return_normal() that changes the color of all the bold text back to black.
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto
// the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer
// is moved out of the paragraph). Look at this example

// Declare a global variable named allBoldItems.
var allBoldItems = [];
// Create a function called getBold_items() that takes no parameter.
function getBold_items() {
  // This function should collect all the bold items inside the paragraph and
  // assign them to the allBoldItems variable.
  var bold = document.getElementsByTagName("strong");
  for (i = 0; i < bold.length; i++) {
    allBoldItems.push(bold[i]);
  }
}
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight() {
  getBold_items();
  allBoldItems.forEach((e) => {
    e.style.color = "blue";
  });
}
// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal() {
  getBold_items();
  allBoldItems.forEach((e) => {
    e.style.color = "black";
  });
}
// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto
// the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer
// is moved out of the paragraph). Look at this example
var p = document.querySelector("p");
p.addEventListener("mouseenter", highlight);
p.addEventListener("mouseout", return_normal);
