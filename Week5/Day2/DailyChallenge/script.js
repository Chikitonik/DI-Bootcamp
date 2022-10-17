// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and
// we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each
// class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

var sun = {
  diameter: 10.9,
  numberOfMoons: 0,
  backgroundImage:
    "url(https://upload.wikimedia.org/wikipedia/commons/c/cd/Hydrogen-alpha_Sun.jpg)",
};
var earth = {
  diameter: 1,
  numberOfMoons: 1,
  backgroundImage:
    "url(http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQDdxULw7_lHW6S5hHIL4vLEyB5zHHc2MKlHr1NL-6xRFjlEirD_KiIeNjeyhjnt4RH)",
};
var mercury = {
  diameter: 0.383,
  numberOfMoons: 0,
  backgroundImage:
    "url(https://space-facts.com/wp-content/uploads/mercury-v2.jpg)",
};
var venus = {
  diameter: 0.949,
  numberOfMoons: 0,
  backgroundImage:
    "url(https://solarsystem.nasa.gov/system/feature_items/images/143_Venus-800x600.jpg)",
};
var mars = {
  diameter: 0.532,
  numberOfMoons: 2,
  backgroundImage:
    "url(https://imageio.forbes.com/specials-images/imageserve//62b362eaddfe029bd27a1f0b/0x0.jpg?format=jpg&width=1200)",
};
var jupiter = {
  diameter: 4,
  numberOfMoons: 79,
  backgroundImage:
    "url(http://store-images.s-microsoft.com/image/apps.41346.13641565067082582.5fee233a-d955-4b54-ae9c-5c6d8d263ec7.221ac19c-e926-4bc6-b1a8-fbedc0d9e53e)",
};
var saturn = {
  diameter: 3,
  numberOfMoons: 82,
  backgroundImage:
    "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD7TT_zVew9zJFbv0cfpoRDMNKqtodS4QvokvzWSuFCJhZGWi9_yyl2b5P4PD-ySyFOYI&usqp=CAU)",
};
var uranus = {
  diameter: 1.8,
  numberOfMoons: 27,
  backgroundImage:
    "url(https://globalnews.ca/wp-content/uploads/2013/08/uranus_true732x520.jpg?quality=85&strip=all)",
};
var neptune = {
  diameter: 1.8,
  numberOfMoons: 14,
  backgroundImage:
    "url(https://solarsystem.nasa.gov/system/feature_items/images/82_carousel_neptune_1.jpg)",
};
var planets = [
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
];
listPlanets = document.querySelector(".listPlanets");
planets.forEach((e) => {
  var planet = document.createElement("div");
  planet.style.backgroundImage = e.backgroundImage;
  planet.style.width = `${e.diameter * 3}vmax`;
  planet.style.height = `${e.diameter * 3}vmax`;
  planet.classList.add("planet");
  planet.classList.add(e.constructor.name);
  listPlanets.appendChild(planet);
  // moons
  var listMoons = document.createElement("div");
  listMoons.classList.add("listPMoons");
  planet.appendChild(listMoons);
  if (e.numberOfMoons > 0) {
    for (var i = 0; i < (e.numberOfMoons > 4 ? 3 : e.numberOfMoons); i++) {
      var moon = document.createElement("div");
      moon.classList.add("moon");
      listMoons.appendChild(moon);
    }
  }
  if (e.numberOfMoons > 3) {
    var moonCount = document.createElement("div");
    moonCount.textContent = e.numberOfMoons;
    moonCount.classList.add("moonCount");
    listMoons.appendChild(moonCount);
  }
});
