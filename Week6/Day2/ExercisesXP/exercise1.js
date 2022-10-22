// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
setTimeout(() => {
  alert("Hello World");
}, 2000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(appendHello, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon
// as there will be 5 paragraphs inside the <div id="container">.
var butClear = document.getElementById("clear");
var intervalId = setInterval(appendHello, 2000, 5);
butClear.addEventListener("click", () => {
  clearInterval(intervalId);
});

function appendHello(MaxCountP = 1) {
  var ps = document.querySelectorAll("p");
  if (ps.length < MaxCountP) {
    var container = document.getElementById("container");
    var p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
  } else clearInterval(intervalId);
}
