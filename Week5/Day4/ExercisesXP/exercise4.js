// Write a JavaScript program to calculate the volume of a sphere.
var radius = document.getElementById("radius");
var volume = document.getElementById("volume");
var form = document.querySelector("form");

form.addEventListener("submit", SphereVolume);
function SphereVolume(e) {
  console.log(radius.value);
  if (!isNaN(radius.value) && !!radius.value) {
    volume.value = (4 / 3) * Math.PI * radius.value ** 3;
    e.preventDefault();
  }
}
