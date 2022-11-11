// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((response) => console.log(response))
  .catch((error) => console.log("error :>> ", error));
// // expected output: Array [3, 42, "foo"]
// Promise.all run all promises in the array and waits then they all are done

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242
const lat1 = document.getElementById("lat1");
const lat2 = document.getElementById("lat2");
const lon1 = document.getElementById("lon1");
const lon2 = document.getElementById("lon2");
// https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400&date=today
const url = "https://api.sunrise-sunset.org/json?";

const hours = document.getElementById("hours");

async function getSunrise(event) {
  event.preventDefault();
  const [city1, city2] = await Promise.all(
    [
      [lat1.value, lon1.value],
      [lat2.value, lon2.value],
    ].map((cityCoord) => {
      return fetch(`${url}lat=${cityCoord[0]}&lng=${cityCoord[0]}`)
        .then((res) => res.json().then((data) => data))
        .catch("Something goes wrong");
    })
  );
  hours.textContent = `First city sunrise: ${city1.results.sunrise}, Second city sunrise: ${city2.results.sunrise}`;
}
