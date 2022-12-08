const express = require("express");
const app = express();
const fs = require("fs");

let itemsArr = JSON.parse(fs.readFileSync("items.json", "utf8", (err) => {}));

const bodyParser = require("body-parser");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/items", (req, res) => {
  res.send(JSON.stringify(itemsArr));
});

app.get("/items/:id", (req, res) => {
  res.send(JSON.stringify(itemsArr[req.params.id]));
});

app.post("/items", (req, res) => {
  itemsArr.push(req.body);
  fs.writeFile("items.json", JSON.stringify(itemsArr), (err) => {});
  res.send(JSON.stringify(itemsArr));
});

app.listen(3000, () => console.log("Server listen on 3000"));
