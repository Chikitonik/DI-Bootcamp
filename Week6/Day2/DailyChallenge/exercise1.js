// Create an input type letter that takes/shows only letters. (ie. numbers and special characters won’t be accepted)
function keyUp(event) {
  //   console.log(event.key);
  var pattern = /[a-zA-Z]/g;
  var result = event.currentTarget.value.match(pattern);
  if (!!result) event.currentTarget.value = result.join("");
}
