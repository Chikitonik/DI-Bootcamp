const responseHTML = document.getElementById("response");
let content = [];
let images = document.getElementById("images");
const url = "https://api.giphy.com/v1/gifs";
const api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function getData() {
  // let xhr = new XMLHttpRequest();
  let search = document.getElementById("searchText").value;
  let limit = document.getElementById("limit").value;
  let offset = document.getElementById("offset").value;
  if (!search) {
    alert("Fill the search text");
  } else {
    let rating = document.querySelector('input[name="rating"]:checked').value;

    fetch(
      `${url}/search?q=${search}&rating=${rating}&limit=${limit}&offset=${offset}&api_key=${api_key}`
    )
      .then((response) => response.json())
      .then((data) => {
        content = data.data;
        content = content.reduce((acc, val) => {
          acc.push(val.images.fixed_height.url);
          return acc;
        }, []);
        if (content.length > 0) {
          for (elem of content) {
            let img = document.createElement("img");
            img.src = elem;
            images.appendChild(img);
          }
        }
      });
  }
}
function ClearData() {
  images.innerHTML = "";
}
