const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

const items = [];
items.push({ name: "some staff", price: 100 });

app.post("/", (req, res) => {
  items.push({ name: req.body.name, price: req.body.price });
});
app.get("/items", (req, res) => {
  res.send(items);
});
app.get("/items/:id", (req, res) => {
  res.send(items[req.params.id]);
});
app.listen(3000, () => console.log("Server listening on 3000"));
