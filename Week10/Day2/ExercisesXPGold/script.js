const urls = [
  "https://www.swapi.tech/api/people/1",
  "https://www.swapi.tech/api/people/2",
  "https://www.swapi.tech/api/people/3",
  "https://www.swapi.tech/api/people/4",
];

//   Use Promise.all to fetch all the characters from the array above with only one request.
//   Console.log the output and make sure it has a catch block as well.

let promise = (urls) =>
  Promise.all(
    urls.map((url) => {
      console.log(url);
      return fetch(url).then((response) => response.json());
    })
  )
    .then((results) => {
      results.forEach((result) => console.log(result.result.properties));
    })
    .catch((error) => console.error("Oh nooooo, it is an error:", error));

promise(urls);
// Change one of the urls in the array provided above. This should cause an error.
// Make sure your catch block works.

urls[0] = "SomeText";
promise(urls);
