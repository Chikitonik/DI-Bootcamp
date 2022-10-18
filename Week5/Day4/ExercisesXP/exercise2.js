// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

var form = document.querySelector("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var ul = document.querySelector("ul");
// Retrieve the form and console.log it.
console.log(form);
// Retrieve the inputs by their id and console.log them.
console.log(document.getElementById("fname"));
console.log(document.getElementById("lname"));
// Retrieve the inputs by their name attribute and console.log them.
console.log(document.getElementsByName("fname")[0]);
console.log(document.getElementsByName("lname")[0]);
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
form.addEventListener("submit", formSubmit);
function formSubmit(e) {
  e.preventDefault();
  if (fname.value.length > 0 && lname.value.length > 0) {
    var liFname = document.createElement("li");
    liFname.textContent = fname.value;
    ul.appendChild(liFname);
    var liLname = document.createElement("li");
    liLname.textContent = lname.value;
    ul.appendChild(liLname);
  }
}
