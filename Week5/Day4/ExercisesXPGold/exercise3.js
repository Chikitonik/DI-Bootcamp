// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon
// as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

var shoppingList = [],
  form = document.createElement("form"),
  input = document.createElement("input"),
  lu = document.createElement("lu"),
  buttonAddItem = document.createElement("button"),
  buttonClear = document.createElement("button");

buttonAddItem.textContent = "Add item";
buttonClear.textContent = "Clear all";
form.appendChild(input);
form.appendChild(buttonAddItem);
form.appendChild(buttonClear);
document.body.appendChild(form);
document.body.appendChild(lu);

buttonAddItem.addEventListener("click", addItem);

function addItem(e) {
  var li = document.createElement("li");
  li.textContent = input.value;
  lu.appendChild(li);
  input.value = "";
  e.preventDefault();
}

buttonClear.addEventListener("clear", ClearAll);
function ClearAll(e) {
  lu.remove();
  e.preventDefault();
}
