const url = "https://www.swapi.tech/api/people/";
const maxNum = 82;
const description = document.getElementById("description");
const personName = document.getElementById("personName");

async function findSomeone(e) {
  personName.textContent = "";
  description.innerHTML = `
  <div class="load-3">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>`;
  let rnd = Math.floor(Math.random() * maxNum + 1);
  await fetch(url + rnd).then((res) =>
    res
      .json()
      .then((data) => {
        personName.textContent = data.result.properties.name;
        description.innerHTML = `
        <div>
          Height: ${data.result.properties.height} <br>
          Gender: ${data.result.properties.gender} <br>
          Birth year: ${data.result.properties.birth_year} <br>
          Mass: ${data.result.properties.mass} <br>
          Skin color: ${data.result.properties.skin_color} <br>
        </div>
        `;
      })
      .catch((error) => {
        personName.textContent = "";
        description.innerHTML = `
        <div>
          Something gone wrong...
        </div>
        `;
      })
  );
}
