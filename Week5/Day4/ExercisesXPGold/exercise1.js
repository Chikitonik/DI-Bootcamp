// Display the value of the selected option.
// Add an additional option to the select tag:
// <option value="classic">Classic</option>
// The newly added option should be selected by default.

var genres = document.getElementById("genres");
var option = document.createElement("option");
genres.addEventListener("change", () => {
  console.log(genres.value);
});
option.value = "classic";
option.textContent = "Classic";
option.selected = true;
genres.appendChild(option);
console.log(genres.value);
