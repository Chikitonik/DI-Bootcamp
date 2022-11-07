const search = document.getElementById("search");
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const url = "https://api.openweathermap.org/data/2.5/weather?";
let units = "metric"; // metric - celsius, units=imperial - Fahrenheit
const urlCitySearch = "http://api.openweathermap.org/geo/1.0/direct?";
const ul = document.getElementById("search-dropdown-menu");

const unitsSwitch = document.getElementById("unitsSwitch");

const cardDeck = document.querySelector("#card-deck");
let cardsTemperature = [];

// getting cities from search value
function searchCity(e) {
  let city = "";
  e.preventDefault();
  if (!search.value) {
    alert("Input a city name");
  } else {
    city = search.value;
    // console.log(inputted city, city);
    fetch(`${urlCitySearch}q=${city}&limit=5&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data[0]);
        // show cities in dropdown
        for (city of data) {
          let li = document.createElement("li");
          li.innerHTML = `
          <div 
          lat=${city.lat} 
          lon=${city.lon}
          onclick="getWeather(event)">
          ${city.country} ${city.name} ${city.state}
                        </div>`;
          ul.appendChild(li);
        }
        // some style
        if (data.length > 0) {
          search.classList.add("removeBorder");
          ul.classList.remove("hidden");
        }
      });
  }
}
// getting weather by coordinates of chosen from dropdown city
function getWeather(e) {
  let lat = e.currentTarget.attributes.lat.value;
  let lon = e.currentTarget.attributes.lon.value;
  let iconUrl = "";
  let card = document.createElement("div");
  card.classList.add("card", "p-0");

  // some style
  ul.innerHTML = "";
  ul.classList.add("hidden");
  search.classList.remove("removeBorder");
  search.value = "";

  // request
  fetch(`${url}lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      // rendering data
      iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      // making a card
      card.innerHTML = `
      <div class="card-body p-0">
        <div class="cardHeader">
          <div class="d-flex flex-row justify-content-end p-2">
            <button class="btn-close" onclick="closeCard(event)"></button>
          </div>
          <div class="d-flex flex-row justify-content-center">
            <div class="card-title h3 pb-2">${data.name}</div>
            <div>${data.sys.country}</div>
          </div>
        </div>
        <h1 ${
          // units depends of switch
          unitsSwitch.checked
            ? `class="hidden temperature pt-3 text-center"`
            : `class="temperature pt-3 text-center"`
        }>
        ${Math.round(data.main.temp)} °C</h1>
        
        <h1 ${
          !unitsSwitch.checked
            ? `class="hidden temperature pt-3 text-center"`
            : `class="temperature pt-3 text-center"`
        }>
        ${Math.round((data.main.temp * 9) / 5 + 32)} °F</h1>

        <img class="ms-5" src=${iconUrl} />
        <div class="h5 text-center">${data.weather[0].main}</div>
        <p class="card-text text-center pb-2">${data.weather[0].description}</p>
      </div>`;
      cardDeck.appendChild(card);
    });
}
// close card
function closeCard(e) {
  let card =
    e.currentTarget.parentElement.parentElement.parentElement.parentElement;
  card.remove();
}
// toggle units Celsius / Fahrenheit
function unitsSwitchFunc() {
  cardsTemperature = [];
  cardsTemperature = document.getElementsByClassName("temperature");
  for (temperature of cardsTemperature) {
    temperature.classList.toggle("hidden");
  }
}
// close dropdown if it was click anywhere
window.onclick = function (e) {
  search.classList.remove("removeBorder");
  search.value = "";
  ul.innerHTML = "";
};
