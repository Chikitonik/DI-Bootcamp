const responseHTML = document.getElementById("response");
let content = "";
const url = "https://api.giphy.com/v1/gifs";
const api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

function getData() {
  let xhr = new XMLHttpRequest();
  let search = document.getElementById("searchText").value;
  let limit = document.getElementById("limit").value;
  let offset = document.getElementById("offset").value;
  let images = document.getElementById("images");
  images.innerHTML = "";
  if (!search) {
    alert("Fill the search text");
  } else {
    let rating = document.querySelector('input[name="rating"]:checked').value;
    xhr.onreadystatechange = alertContents;
    xhr.open(
      "GET",
      `${url}/search?q=${search}&rating=${rating}&limit=${limit}&offset=${offset}&api_key=${api_key}`
    );
    xhr.send();
    if (!xhr) {
      alert("Error");
    }
    function alertContents() {
      try {
        if (xhr.readyState === 4) {
          content = JSON.parse(xhr.responseText).data;
          console.log(content);
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
        }
      } catch (e) {
        alert("Error: ", e.description);
      }
    }
  }
}
