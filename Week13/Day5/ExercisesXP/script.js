const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  fs.readFile("itemsList.txt", "utf-8", (err, data) => {
    res.render("index", {
      itemsArr: data,
    });
  });
});
app.post("/", (req, res) => {
  // itemsArr.push({ name: req.body.itemName, amount: req.body.amount });
  fs.appendFileSync(
    "itemsList.txt",
    `${req.body.itemName} : ${req.body.amount}<br/>`,
    (err) => console.log("err >> ", err)
  );
  fs.readFile("itemsList.txt", "utf-8", (err, data) => {
    res.render("index", {
      itemsArr: data,
    });
  });
});
app.listen(3000);
