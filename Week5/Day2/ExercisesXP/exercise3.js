// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements
// from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");
// First, create a new <li> tag (use the createElement method).
let li = document.createElement("li");
// Create a new text node with “Logout” as its specified text.
li.textContent = "Logout";
li.innerHTML = '<a href="#"> Logout</a>';
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ul = document.querySelector("ul");
ul.appendChild(li);
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements
// from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;
console.log(firstLi.textContent, lastLi.textContent);
