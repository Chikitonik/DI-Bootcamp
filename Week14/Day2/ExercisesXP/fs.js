const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "text.txt"), "utf8", (err, data) => {
  console.log("text :>> ", data);
});

fs.writeFile(path.join(__dirname, "data.txt"), "some new text", (err) => {});
fs.appendFile(
  path.join(__dirname, "data.txt"),
  "\n" + "Buy orange juice",
  (err) => {}
);

fs.unlink(path.join(__dirname, "data.txt"), (err) => {});
fs.unlink(path.join(__dirname, "text.txt"), (err) => {});
