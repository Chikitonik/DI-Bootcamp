// Add a click event listener to the <input type="button">. When clicked on, it should call a function
//  named : removecolor() that removes the selected color from the dropdown list.

var button = document.querySelector("input"),
  colorSelect = document.getElementById("colorSelect"),
  optionList = document.getElementsByTagName("option");

button.addEventListener("click", removeColor);
function removeColor() {
  console.log(colorSelect.value);
  for (i = 0; i < optionList.length; i++) {
    if (optionList[i].value === colorSelect.value) optionList[i].remove();
  }
}
