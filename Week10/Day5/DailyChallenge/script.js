const APIKey = "6f025143709b00ce5a6562fe";
// Example Request: https://v6.exchangerate-api.com/v6/6f025143709b00ce5a6562fe/latest/USD
const url = "https://v6.exchangerate-api.com/v6/";

const urlAllCurrency = url + APIKey + "/codes";
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const convertResult = document.getElementById("convertResult");

// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP

async function getAllCurrency() {
  await fetch(urlAllCurrency)
    .then((response) => response.json())
    .then((data) => {
      const currencies = data.supported_codes;
      console.log("currencies :>> ", currencies);
      for (curr of currencies) {
        const option = document.createElement("option");
        option.value = curr[0];
        option.textContent = `${curr[0]} ${curr[1]}`;
        fromCurrency.appendChild(option);
        optionTo = option.cloneNode(true);
        toCurrency.appendChild(optionTo);
      }
      fromCurrency.value = "ILS";
      toCurrency.value = "USD";
    })
    .catch((error) => alert("Something wrong..."));
}
getAllCurrency();

async function convert(e) {
  e.preventDefault();
  await fetch(`${url}${APIKey}/pair/${fromCurrency.value}/${toCurrency.value}`)
    .then((response) => response.json())
    .then((data) => {
      convertResult.textContent = `You'll get ${
        Math.round(data.conversion_rate * amount.value * 100) / 100
      } ${toCurrency.value}`;
    })
    .catch((error) => alert("Something wrong..."));
}
