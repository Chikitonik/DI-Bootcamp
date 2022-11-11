// Exercise 1: Async Await & Try/Catch
// Instructions
// Add a try catch block to “Exercise XP Gold” in order to catch any errors.
// To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.

const urls = [
  "https://jsonplaceholder.typicode.com/users111",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map(async function (url) {
      try {
        const response = await fetch(url);
        return response.json();
      } catch (error) {
        console.log("error :>> ", error);
      }
    })
  );
  console.log("users", users);
  console.log("posts", posts);
  console.log("albums", albums);
};

getData();

// COULD'T DONE!!!
