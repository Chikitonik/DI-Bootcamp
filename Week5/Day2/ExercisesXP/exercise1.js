// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.

console.log(document.querySelector("div"));
var liElements = document.querySelectorAll("ul li");
liElements.forEach((e) => {
  // Change the name “Pete” to “Richard”.
  e.textContent = e.textContent.replace("Pete", "Richard");
});
var ulElements = document.getElementsByTagName("ul");
for (i = 0; i < ulElements.length; i++) {
  // Change each first name of the two <ul>'s to your name.
  ulElements[i].getElementsByTagName("li")[0].textContent = "Roman";
  // Add a class called student_list to both of the <ul>'s.
  console.log(ulElements[i].classList.add("student_list"));
}
liElements.forEach((e) => {
  // Delete the <li> that contains the text node “Sarah”.
  if (e.textContent === "Sarah") {
    e.remove();
  }
});
// Add the classes university and attendance to the first <ul>.
ulElements[0].classList.add("university", "attendance");
