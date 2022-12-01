const users = [];

const { faker } = require("@faker-js/faker");

for (let i = 0; i < 10; i++) {
  users.push({
    Name: faker.name.fullName(),
    Address: faker.address.country(),
    Email: faker.address.street(),
  });
}

// console.log("users :>> ", users);

// Use the regular expression module to extract numbers from a string
let str = "k5k3q2g5z6x9bn";
// Excepted output : 532569
const regex = /\d/g;
console.log("output :>> ", str.match(regex).join(""));

const prompt = require("prompt");
prompt.get("insert full name", function (err, result) {
  const fullName = result["insert full name"];
  const regexDigit = /\d/g;
  if (fullName.match(regexDigit)) console.log("error - number in name!");
  const regexSpace = /\s/g;
  if (fullName.match(regexSpace).length > 1)
    console.log("error - more than 1 space!");
  const regexFirstUpperCase = /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/g;
  if (!fullName.match(regexFirstUpperCase))
    console.log("error - The first letter of each name should be upper cased!");
});
