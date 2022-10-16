// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.
let book1 = {
  title: "Project hail Mary",
  author: "Andy Weir",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/ad/Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg/220px-Project_Hail_Mary%2C_First_Edition_Cover_%282021%29.jpg",
  alreadyRead: true,
};
let book2 = {
  title: "To Sleep in a Sea of Stars",
  author: "Christopher Paolini",
  image:
    "https://upload.wikimedia.org/wikipedia/en/thumb/6/68/To_Sleep_in_a_Sea_of_Stars.jpg/220px-To_Sleep_in_a_Sea_of_Stars.jpg",
  alreadyRead: false,
};
let allBooks = [book1, book2];
let divListBooks = document.querySelector(".listBooks");
allBooks.forEach((e) => {
  var div = document.createElement("div");
  div.textContent = `${e.title} written by ${e.author}`;
  if (e.alreadyRead) div.style.backgroundColor = "red";
  var image = document.createElement("div");
  image.style.backgroundImage = `url(${e.image})`;
  image.style.width = "100px";
  image.style.height = "150px";
  image.style.backgroundSize = "cover";
  div.appendChild(image);
  divListBooks.appendChild(div);
});
