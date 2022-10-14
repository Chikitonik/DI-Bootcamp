var screenElement = document.getElementById("screen");
var expression = "";
var isNeedToClear = false;

function number(i) {
  isNeedToClear ? clearScreen() : (isNeedToClear = false);
  expression += i;
  screenElement.textContent = expression;
}
function operator(o) {
  expression += o;
  screenElement.textContent = expression;
  isNeedToClear = false;
}
function equal() {
  try {
    expression = eval(expression);
    screenElement.textContent = expression;
    isNeedToClear = true;
  } catch (e) {
    alert("Expression is wrong!");
  }
}
function clearScreen() {
  expression = "";
  screenElement.textContent = expression;
  isNeedToClear = false;
}
function backspace() {
  expression = expression.toString().slice(0, -1);
  screenElement.textContent = expression;
}
