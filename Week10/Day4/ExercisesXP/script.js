// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

const objectStarWars = async () =>
  await fetch("https://www.swapi.tech/api/starships/9/")
    .then((response) => response.json())
    .then((objectStarWars) => console.log(objectStarWars.result));

// 🌟 Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// Analyze the code provided above before executing it - what will be the outcome?
//  - calling
//  - promise{}
//  - resolved
