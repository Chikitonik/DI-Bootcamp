const responseHTML = document.getElementById("response");
let content = [];
let images = document.getElementById("images");
const url = "https://api.giphy.com/v1/gifs/random";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function getData() {
  let search = document.getElementById("searchText").value;
  let img = document.createElement("img");
  let card = document.createElement("div");
  let buttonDel = document.createElement("div");
  buttonDel.innerHTML =
    "<div class='buttonDel' onclick='delCard(event)'>Remove Gif</div>";
  if (!search) {
    alert("Fill the search text");
  } else {
    let rating = document.querySelector('input[name="rating"]:checked').value;
    fetch(`${url}?api_key=${apiKey}&q=${search}&rating=${rating}`)
      .then((response) => response.json())
      .then((data) => {
        img.src = data.data.images.fixed_height.url;
        card.appendChild(img);
        card.appendChild(buttonDel);
        images.appendChild(card);
      });
  }
}
function ClearData() {
  images.innerHTML = "";
}
function delCard(e) {
  var task = e.currentTarget.parentElement.parentElement;
  task.remove();
}
