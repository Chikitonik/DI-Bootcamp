// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side
// of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the
// end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

var animate = document.getElementById("animate");
var container = document.getElementById("container");
var containerWidth = container.clientWidth;
var animateWidth = animate.clientWidth;
var intervalId;

animate.style.left = 0;

function moveToRight() {
  var _x = Number(
    animate.style.left.slice(0, animate.style.left.indexOf("px"))
  );
  if (containerWidth == _x + animateWidth) {
    clearInterval(intervalId);
  } else {
    _x += 1;
    animate.style.left = _x + "px";
  }
}

function myMove() {
  intervalId = setInterval(moveToRight, 1);
}
