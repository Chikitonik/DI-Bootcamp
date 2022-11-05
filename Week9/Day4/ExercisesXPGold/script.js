const url = "https://api.giphy.com/v1/gifs/random";
const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
// https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
const apiUrl = `${url}?api_key=${apiKey}`;
const img = document.createElement("img");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => (img.src = data.data.images.fixed_height.url));
document.body.appendChild(img);
