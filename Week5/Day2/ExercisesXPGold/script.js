// write some Javascript code to color all diagonal table cells in red.
let table = document.body.firstElementChild;
let tdArr = table.querySelectorAll("td");
for (var i = 0; i < tdArr.length; i += 2) {
  tdArr[i].style.backgroundColor = "red";
}
